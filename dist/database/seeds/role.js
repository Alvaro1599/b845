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
const role_1 = require("../../modules/role/entities/role");
class RoleSeeder {
    run(dataSource) {
        return __awaiter(this, void 0, void 0, function* () {
            const roleRepository = dataSource.getRepository(role_1.Role);
            const user = new role_1.Role();
            user.name = "user";
            const admin = new role_1.Role();
            admin.name = "admin";
            const company = new role_1.Role();
            company.name = "company";
            yield roleRepository.insert([user, admin, company]);
        });
    }
}
exports.default = RoleSeeder;
//# sourceMappingURL=role.js.map