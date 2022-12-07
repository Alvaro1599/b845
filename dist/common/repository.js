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
exports.RepositoryDB = void 0;
const typeorm_1 = require("typeorm");
const errorModel_1 = require("./error/errorModel");
class RepositoryDB {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getRepository().find({
                    loadEagerRelations: true,
                });
            }
            catch (error) {
                throw new Error("error Database");
            }
        });
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getRepository().save(entity);
            }
            catch (error) {
                console.log(error);
                if (error instanceof typeorm_1.QueryFailedError) {
                    if (error.driverError.errno === 1062) {
                        throw new errorModel_1.ErrorService(404, "Uno o más campos ya se encuentran registrados");
                    }
                    throw new errorModel_1.ErrorService(404, "Error en la solicitud");
                }
                throw new errorModel_1.ErrorService(500, "error Database");
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.getRepository().delete(id);
            }
            catch (error) {
                throw new Error("error Database");
            }
        });
    }
}
exports.RepositoryDB = RepositoryDB;
//# sourceMappingURL=repository.js.map