"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userAuth_1 = require("../controllers/userAuth");
const routerAuth = (0, express_1.Router)();
routerAuth.post('/login', userAuth_1.checkLogin);
exports.default = routerAuth;
//# sourceMappingURL=auth.routes.js.map