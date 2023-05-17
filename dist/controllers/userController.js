"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUsers = exports.getUserById = exports.checkLogin = exports.getUserByEmail = exports.getUsers = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const usuario_2 = __importDefault(require("../models/usuario"));
async function getUsers(res) {
    console.log("----Consultando----");
    try {
        const [total, usuarios] = await Promise.all([
            usuario_1.default.countDocuments(),
            usuario_1.default.find({})
        ]);
        res.status(200).json({ total, usuarios });
        console.log('get');
    }
    catch (error) {
        console.log("Se presento un error consultando el usuario en la bd");
        console.log(error);
        res.status(400);
    }
}
exports.getUsers = getUsers;
async function getUserByEmail(req, res) {
    try {
        const { correo } = req.body;
        console.log("-------------correo-------------");
        console.log(correo);
        const user = await usuario_2.default.findOne({ correo });
        if (!user) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        console.log('No se pudo obtener el usuario');
        console.log('-----------------------------');
        console.log(error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}
exports.getUserByEmail = getUserByEmail;
async function checkLogin(req, res) {
    try {
        const { correo, contrasena } = req.body;
        console.log("-------------correo y password-------------");
        console.log(correo);
        const user = await usuario_2.default.findOne({ correo });
        if (!user) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        ;
        if (contrasena !== user.contrasena) {
            return res.status(401).json({ mensaje: 'La contrasena del usuario no existe' });
        }
        ;
        return res.status(200).json({ mensaje: 'Ingreso exitoso' });
    }
    catch (error) {
        console.log('No se pudo obtener el usuario');
        console.log('-----------------------------');
        console.log(error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}
exports.checkLogin = checkLogin;
async function getUserById(req, res) {
    try {
        const { id } = req.params;
        console.log("-------------id-------------");
        console.log(id);
        const user = await usuario_2.default.findById(id);
        if (!user) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        console.log('No se pudo obtener el usuario');
        console.log('-----------------------------');
        console.log(error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}
exports.getUserById = getUserById;
async function createUsers(req, res) {
    try {
        const { nombre, correo, contrasena } = req.body;
        const usuarioExistente = await usuario_2.default.findOne({ correo });
        if (usuarioExistente) {
            return res.status(409).json({ mensaje: 'El correo electrónico ya está registrado' });
        }
        const user = new usuario_2.default({ nombre, correo, contrasena });
        await user.save();
        return res.status(201).json({ mensaje: 'El usuario ha sido creado correctamente' });
    }
    catch (error) {
        console.log('No se pudo crear el usuario');
        console.log('-----------------------------');
        console.log(error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}
exports.createUsers = createUsers;
async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const { nombre, correo, contrasena } = req.body;
        console.log(id);
        const user = await usuario_2.default.findByIdAndUpdate(id, { nombre, correo, contrasena }, { new: true });
        if (!user) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        console.log('No se pudo actualizar el usuario');
        console.log('-----------------------------');
        console.log(error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}
exports.updateUser = updateUser;
async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        const user = await usuario_2.default.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        return res.status(200).json({ mensaje: 'Usuario eliminado exitosamente' });
    }
    catch (error) {
        console.log('No se pudo eliminar el usuario');
        console.log('-----------------------------');
        console.log(error);
        return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map