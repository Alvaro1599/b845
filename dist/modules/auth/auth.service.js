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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const encriptor_1 = require("../../common/encriptor/encriptor");
const errorModel_1 = require("../../common/error/errorModel");
const jwt_1 = require("../../common/jwt/jwt");
const company_service_1 = require("../company/company.service");
const user_service_1 = require("../user/user.service");
user_service_1.userService;
class AuthService {
    constructor() {
        this.userService = new user_service_1.userService();
        this.companyService = new company_service_1.CompanyService();
    }
    login(email, passwordRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const entity = yield this.userService.findOneByEmail(email);
                if (!entity)
                    throw new errorModel_1.ErrorService(404, "Usuario no encontrado");
                let validate;
                validate = yield encriptor_1.Encryptor.compare(passwordRequest, entity.password);
                if (!validate) {
                    throw new errorModel_1.ErrorService(401, "Credenciales inválidas");
                }
                const { password } = entity, data = __rest(entity, ["password"]);
                password === null || password === void 0 ? void 0 : password.at(4);
                return Object.assign(Object.assign({}, jwt_1.Jwt.encoder(data)), { user: Object.assign({}, data) });
            }
            catch (error) {
                console.log(error);
                throw new errorModel_1.ErrorService(500, "error en el servidor");
            }
        });
    }
    loginCompany(email, passwordRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield this.companyService.findOneByEmail(email);
            if (!entity)
                throw new errorModel_1.ErrorService(404, "Compañia no encontrado");
            let validate;
            try {
                validate = yield encriptor_1.Encryptor.compare(passwordRequest, entity.password);
            }
            catch (error) {
                throw new errorModel_1.ErrorService(500, "En el servidor");
            }
            if (!validate) {
                throw new errorModel_1.ErrorService(401, "Credenciales inválidas");
            }
            const { password } = entity, data = __rest(entity, ["password"]);
            return Object.assign(Object.assign({}, jwt_1.Jwt.encoder(data)), { company: Object.assign({}, data) });
        });
    }
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Password = yield encriptor_1.Encryptor.hash(data.password);
                const entity = yield this.userService.create(Object.assign(Object.assign({}, data), { password: Password, role: 1, banned: false, reviewsQuantity: 0 }));
                delete entity.password;
                return entity;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map