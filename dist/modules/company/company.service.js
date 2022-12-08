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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const errorModel_1 = require("../../common/error/errorModel");
const repository_1 = require("../../common/repository");
const datasource_1 = __importDefault(require("../../database/datasource"));
const company_1 = require("./entities/company");
class CompanyService extends repository_1.RepositoryDB {
    getRepository() {
        return datasource_1.default.getRepository(company_1.Company);
    }
    getCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRepository().find();
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRepository().findOneBy({
                id: id,
            });
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRepository().findOne({
                where: {
                    id,
                },
                relations: {
                    review: true,
                },
            });
        });
    }
    findOneByHostname(host) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRepository().findOneBy({
                website: host,
            });
        });
    }
    findOneByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRepository().findOneBy({
                email,
            });
        });
    }
    updateById(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getRepository().update(id, data);
            }
            catch (error) {
                throw new errorModel_1.ErrorService(500, "error en el servidor");
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.getRepository().delete(id);
        });
    }
}
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map