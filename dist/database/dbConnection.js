"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnection = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URI ?? '');
        console.log('Conexion exitosa a la base de datos Test');
    }
    catch (e) {
        console.log('Conexion fallida a la base de datos Test');
        console.log('-----------------------------------------');
        console.log(e);
        console.log('-----------------------------------------');
    }
};
exports.default = dbConnection;
//# sourceMappingURL=dbConnection.js.map