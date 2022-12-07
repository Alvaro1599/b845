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
const company_1 = require("../../modules/company/entities/company");
exports.default = (0, typeorm_extension_1.setSeederFactory)(company_1.Company, (faker) => __awaiter(void 0, void 0, void 0, function* () {
    const entity = new company_1.Company();
    entity.email = faker.internet.email();
    entity.name = faker.company.bs();
    entity.description = faker.company.catchPhrase();
    entity.banned = false;
    entity.avatar = faker.internet.avatar();
    entity.reviewsQuantity = 0;
    entity.address = faker.address.streetAddress();
    entity.phone = faker.phone.number();
    entity.country = faker.address.country();
    entity.city = faker.address.cityName();
    entity.role = 3;
    entity.website = faker.internet.url();
    entity.workEmail = faker.internet.email(undefined, undefined, undefined, {
        allowSpecialCharacters: true,
    });
    entity.password = yield encriptor_1.Encryptor.hash("company123");
    entity.ratingGeneral = parseInt(faker.random.numeric(1)) * 0.54;
    return entity;
}));
//# sourceMappingURL=company.js.map