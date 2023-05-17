"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    contrasena: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    }
});
exports.default = (0, mongoose_1.model)('Usuario', usuarioSchema);
//# sourceMappingURL=usuario.js.map