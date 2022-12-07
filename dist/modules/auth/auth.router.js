"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const company_controller_1 = require("../company/company.controller");
const auth_controller_1 = require("./auth.controller");
const authValidator_1 = require("./schemas/authValidator");
const routerCompany = (0, express_1.Router)();
class AuthRouter {
    static getRoutes() {
        AuthRouter.router.post("/login", authValidator_1.AuthValidator.login, AuthRouter.controller.login);
        AuthRouter.router.post("/loginCompany", authValidator_1.AuthValidator.login, AuthRouter.controller.loginCompany);
        AuthRouter.router.post("/register", authValidator_1.AuthValidator.register, AuthRouter.controller.register);
        AuthRouter.router.post("/registerCompany", authValidator_1.AuthValidator.registerCompany, AuthRouter.controllerCompany.createCompany);
        return AuthRouter.router;
    }
}
exports.AuthRouter = AuthRouter;
AuthRouter.router = (0, express_1.Router)();
AuthRouter.controller = auth_controller_1.AuthController;
AuthRouter.controllerCompany = company_controller_1.CompanyController;
exports.default = routerCompany;
//# sourceMappingURL=auth.router.js.map