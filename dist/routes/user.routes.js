"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserContrtoller = __importStar(require("../controllers/userController"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    try {
        const { correo } = req.body;
        correo
            ? UserContrtoller.getUserByEmail(req, res, correo)
            : UserContrtoller.getUsers(res);
        console.log('get');
    }
    catch (error) {
        console.log('No se pudo consultar el usuario');
        console.log('-----------------------------');
        console.log(error);
    }
});
router.get('/user/:id', (req, res) => {
    try {
        UserContrtoller.getUserById(req, res);
        console.log('get');
    }
    catch (error) {
        console.log('No se pudo consultar el usuario');
        console.log('-----------------------------');
        console.log(error);
    }
});
router.post('/loginm', async (req, res) => {
    try {
        await UserContrtoller.checkLogin(req, res);
        console.log('checkLogin');
    }
    catch (error) {
        console.log('No se pudo guardar el usuario');
        console.log('-----------------------------');
        console.log(error);
        console.log('-----------------------------');
    }
});
router.post('/', async (req, res) => {
    try {
        await UserContrtoller.createUsers(req, res);
        console.log('post');
    }
    catch (error) {
        console.log('No se pudo guardar el usuario');
        console.log('-----------------------------');
        console.log(error);
        console.log('-----------------------------');
    }
});
router.put('/:id', async (req, res) => {
    try {
        await UserContrtoller.updateUser(req, res);
        console.log('put');
    }
    catch (error) {
        console.log('No se pudo actualizar los datos del usuario');
        console.log('-----------------------------');
        console.log(error);
    }
});
router.delete('/:id', async (req, res) => {
    try {
        await UserContrtoller.deleteUser(req, res);
    }
    catch (error) {
        console.log('No se pudo borrar el usuario');
        console.log('-----------------------------');
        console.log(error);
    }
});
exports.default = router;
//# sourceMappingURL=user.routes.js.map