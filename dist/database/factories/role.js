"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const role_1 = require("../../modules/role/entities/role");
role_1.Role;
exports.default = (0, typeorm_extension_1.setSeederFactory)(role_1.Role, (faker) => {
    const entity = new role_1.Role();
    entity.name =
        faker.name.firstName("female") + " " + faker.name.firstName("female");
    return entity;
});
//# sourceMappingURL=role.js.map