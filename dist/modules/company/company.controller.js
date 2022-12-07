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
exports.CompanyController = void 0;
const encriptor_1 = require("../../common/encriptor/encriptor");
const errorModel_1 = require("../../common/error/errorModel");
const company_service_1 = require("./company.service");
class CompanyController {
    static getMyCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield CompanyController.service.findOneById(req.body.user.id);
            res.send(entity);
            return;
        });
    }
    static getMyCompanyId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const entity = yield CompanyController.service.findOne(id);
            const data = __rest(entity, []);
            const format = data.review.map(x => {
                x.company.password = "";
                x.user.password = "";
                return x;
            });
            res.status(200).json(format);
            return;
        });
    }
    static createCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const entity = yield CompanyController.service.create(Object.assign(Object.assign({}, req.body), { reviewsQuantity: 0, role: 3, password: yield encriptor_1.Encryptor.hash(req.body.password), ratingGeneral: 0 }));
                const { password } = entity, data = __rest(entity, ["password"]);
                res.status(200).json(data);
            }
            catch (error) {
                if (error instanceof errorModel_1.ErrorService) {
                    res.status(error.status).send(error.message);
                }
            }
        });
    }
    static updateCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.body.user;
                delete req.body.user;
                if (!req.body.password) {
                    yield CompanyController.service.updateById(Object.assign({}, req.body), id);
                    return res.status(200).json("company update");
                }
                yield CompanyController.service.updateById(Object.assign(Object.assign({}, req.body), { password: yield encriptor_1.Encryptor.hash(req.body.password) }), id);
                res.status(200).json("company update");
            }
            catch (error) {
                if (error instanceof errorModel_1.ErrorService) {
                    res.status(error.status).send(error.message);
                }
                res.status(500).send("error en el servidor");
            }
        });
    }
    static updateCompanyAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                delete req.body.user;
                yield CompanyController.service.updateById(Object.assign(Object.assign({}, req.body), { password: yield encriptor_1.Encryptor.hash(req.body.password) }), id);
                res.status(200).json("company update");
            }
            catch (error) {
                if (error instanceof errorModel_1.ErrorService) {
                    res.status(error.status).send(error.message);
                }
            }
        });
    }
    static deleteCompanyAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                delete req.body.user;
                yield CompanyController.service.deleteById(id);
                res.status(200).json("company deleted");
            }
            catch (error) {
                if (error instanceof errorModel_1.ErrorService) {
                    res.status(error.status).send(error.message);
                }
            }
        });
    }
    static deleteCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield CompanyController.service.deleteById(req.body.user.id);
                res.status(200).json("company deleted");
            }
            catch (error) {
                if (error instanceof errorModel_1.ErrorService) {
                    res.status(error.status).send(error.message);
                }
            }
        });
    }
}
exports.CompanyController = CompanyController;
CompanyController.service = new company_service_1.CompanyService();
//# sourceMappingURL=company.controller.js.map