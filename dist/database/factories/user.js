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
const typeorm_extension_1 = require("typeorm-extension");
const encriptor_1 = require("../../common/encriptor/encriptor");
const user_1 = require("../../modules/user/entities/user");
exports.default = (0, typeorm_extension_1.setSeederFactory)(user_1.User, (faker) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.User();
    user.email = faker.internet.email();
    user.name =
        faker.name.firstName("female") + " " + faker.name.firstName("female");
    user.lastName =
        faker.name.lastName("male") + " " + faker.name.lastName("female");
    user.banned = false;
    user.avatar = faker.internet.avatar();
    user.reviewsQuantity = 0;
    user.password = yield encriptor_1.Encryptor.hash("user123");
    user.address = faker.address.streetAddress();
    user.phone = faker.phone.number();
    user.country = faker.address.country();
    user.city = faker.address.cityName();
    user.role = 1;
    return user;
}));
//# sourceMappingURL=user.js.map