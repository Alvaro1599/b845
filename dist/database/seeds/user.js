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
const encriptor_1 = require("../../common/encriptor/encriptor");
const user_1 = require("../../modules/user/entities/user");
class UserSeeder {
    run(dataSource, factoryManager) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = dataSource.getRepository(user_1.User);
            const admin = new user_1.User();
            admin.email = "admin@gmail.com";
            admin.name = "admin";
            admin.password = yield encriptor_1.Encryptor.hash("admin123");
            admin.lastName = "lastname admin";
            admin.banned = false;
            admin.reviewsQuantity = 0;
            admin.role = 2;
            const user = new user_1.User();
            user.email = "usuario@gmail.com";
            user.name = "usuario de prueba";
            user.password = yield encriptor_1.Encryptor.hash("admin123");
            user.lastName = "lastname prueba";
            user.banned = false;
            user.reviewsQuantity = 0;
            user.role = 1;
            yield userRepository.insert([user, admin]);
            const userFactory = yield factoryManager.get(user_1.User);
            yield userFactory.saveMany(10);
        });
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=user.js.map