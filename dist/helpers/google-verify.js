"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleVerify = void 0;
const google_auth_library_1 = require("google-auth-library");
const client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
async function googleVerify(token = '') {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID
    });
    const payload = ticket.getPayload();
    return {
        nombre: payload?.given_name,
        correo: payload?.email,
        imagen: payload?.picture
    };
}
exports.googleVerify = googleVerify;
//# sourceMappingURL=google-verify.js.map