"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.Jwt = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const logger_1 = require("../../utils/logger");
const errorModel_1 = require("../error/errorModel");
class Jwt {
    static encoder(data) {
        try {
            const token = jwt.sign(data, Jwt.secret, {
                expiresIn: Jwt.expiration,
            });
            return { token };
        }
        catch (error) {
            logger_1.Logger.error(error + "ENCODERS");
            throw new errorModel_1.ErrorService(409, "error en el token");
        }
    }
    static verify(token) {
        try {
            return jwt.verify(token, Jwt.secret);
        }
        catch (error) {
            logger_1.Logger.error(error + "VERIFY");
            throw new errorModel_1.ErrorService(406, "error en el token");
        }
    }
    static decode(token) {
        try {
            return jwt.decode(token, { json: true });
        }
        catch (error) {
            throw new errorModel_1.ErrorService(406, "error en el token");
        }
    }
}
exports.Jwt = Jwt;
Jwt.secret = process.env.SECRETORPRIVATEKEY;
Jwt.expiration = "3d";
//# sourceMappingURL=jwt.js.map