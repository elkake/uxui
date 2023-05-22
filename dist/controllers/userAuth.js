"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleSignIn = exports.checkLogin = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const google_verify_1 = require("../helpers/google-verify");
async function checkLogin(req, res) {
    try {
        const { correo, contrasena } = req.body;
        console.log('-------------correo y password-------------');
        console.log(correo);
        console.log('provando provando provando');
        const user = await usuario_1.default.findOne({ correo });
        if (!user) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        if (contrasena !== user.contrasena) {
            return res
                .status(401)
                .json({ mensaje: 'La contrasena del usuario no coincide' });
        }
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
const googleSignIn = async (req, res) => {
    const { id_token_google } = await req.body;
    try {
        const { nombre, correo, imagen } = await (0, google_verify_1.googleVerify)(id_token_google);
        const usuario = await usuario_1.default.findOne({ correo });
        if (!usuario) {
            const data = {
                nombre,
                correo,
                contrasena: '...',
                imagen,
                google: true
            };
            const usuario = new usuario_1.default(data);
            await usuario.save();
        }
        if (!usuario?.estado) {
            return res.status(401).json({
                error: 'Usuario bloqueado, contacte al administrador'
            });
        }
        res.status(200).json({
            mensaje: 'Ingreso exitoso',
            id_token_google,
            usuario
        });
    }
    catch (e) {
        res.json({ error: 'error google' });
    }
};
exports.googleSignIn = googleSignIn;
//# sourceMappingURL=userAuth.js.map