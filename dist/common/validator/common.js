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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonValidator = void 0;
const yup = __importStar(require("yup"));
const errorModel_1 = require("../error/errorModel");
const token_1 = require("./token");
class CommonValidator {
    static owner(req, res, next) {
        try {
            const info = token_1.Token.verifyToken(req);
            req.body.user = info;
            next();
            return;
        }
        catch (error) {
            const errI = error;
            res.status(errI.status).send(errI.message);
            return;
        }
    }
    static isAdmin(req, res, next) {
        try {
            const info = token_1.Token.verifyToken(req);
            if (!(info.role.id === 2)) {
                return res.status(400).send("acceso solo a administradores");
            }
            req.body.user = info;
            next();
            return;
        }
        catch (error) {
            if (error instanceof errorModel_1.ErrorService) {
                const errI = error;
                return res.status(errI.status).send(errI.message);
            }
            return res.status(400).send(error);
        }
    }
    static isCompany(req, res, next) {
        try {
            const info = token_1.Token.verifyToken(req);
            if (!(info.role.id === 3)) {
                return res.status(400).send("acceso solo a compañias");
            }
            req.body.user = info;
            next();
            return;
        }
        catch (error) {
            if (error instanceof errorModel_1.ErrorService) {
                const errI = error;
                return res.status(errI.status).send(errI.message);
            }
            return res.status(400).send(error);
        }
    }
    static isUser(req, res, next) {
        try {
            const info = token_1.Token.verifyToken(req);
            if (!(info.role.id === 1)) {
                return res.status(400).send("acceso solo a usuarios");
            }
            req.body.user = info;
            next();
            return;
        }
        catch (error) {
            if (error instanceof errorModel_1.ErrorService) {
                const errI = error;
                return res.status(errI.status).send(errI.message);
            }
            return res.status(400).send(error);
        }
    }
    static uuidValidator(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = yup.object().shape({
                id: yup.string().required().uuid(),
            });
            try {
                yield schema.validate(req.params);
                next();
            }
            catch (error) {
                const err = error;
                res.status(400).json({ [err.name]: [...err.errors] });
            }
        });
    }
}
exports.CommonValidator = CommonValidator;
//# sourceMappingURL=common.js.map