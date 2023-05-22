"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbConnection_1 = __importDefault(require("../database/dbConnection"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.usuariosPath = '/api/usuarios';
        this.usuariosAuth = '/api/auth';
        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    async conectarDB() {
        await (0, dbConnection_1.default)();
    }
    middlewares() {
        this.app.use(express_1.default.static('src/public'));
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use(this.usuariosPath, user_routes_1.default);
        this.app.use(this.usuariosAuth, auth_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor levantado en el puerto: ', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map