"use strict";
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
exports.AuthController = void 0;
const errorBase_1 = require("../../common/error/errorBase");
const gmail_1 = require("../../common/gmail/gmail");
const auth_service_1 = require("./auth.service");
class AuthController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const entity = yield AuthController.AuthService.login(req.body.email, req.body.password);
                res.status(200).json(entity);
            }
            catch (error) {
                const errorI = new errorBase_1.ErrorBase(error);
                res.status(errorI.status).send(errorI.message);
            }
        });
    }
    static loginCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const entity = yield AuthController.AuthService.loginCompany(req.body.email, req.body.password);
                res.status(200).json(entity);
            }
            catch (error) {
                const errorI = new errorBase_1.ErrorBase(error);
                res.status(errorI.status).send(errorI.message);
            }
        });
    }
    static register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mail = new gmail_1.MailService();
                const entity = yield AuthController.AuthService.register(req.body);
                yield mail.sendRegisterMail(entity.email, `Confirmación de registro`, `Hola ${entity.name} te damos la bienvenida a nuestro sitio!`);
                res.status(200).send(entity);
            }
            catch (error) {
                console.log(error);
                const errorI = new errorBase_1.ErrorBase(error);
                res.status(errorI.status).send(errorI.message);
            }
        });
    }
}
exports.AuthController = AuthController;
AuthController.AuthService = new auth_service_1.AuthService();
//# sourceMappingURL=auth.controller.js.map