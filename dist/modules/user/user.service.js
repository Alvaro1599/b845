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
exports.userService = void 0;
const repository_1 = require("../../common/repository");
const datasource_1 = __importDefault(require("../../database/datasource"));
const user_1 = require("./entities/user");
class userService extends repository_1.RepositoryDB {
    getRepository() {
        return datasource_1.default.getRepository(user_1.User);
    }
    findOneByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.getRepository().findOneBy({
                    email,
                });
                return user;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRepository().findOneBy({
                id: id,
            });
        });
    }
}
exports.userService = userService;
//# sourceMappingURL=user.service.js.map