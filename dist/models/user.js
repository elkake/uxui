"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    }
});
exports.default = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=user.js.map