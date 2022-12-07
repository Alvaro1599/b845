"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const typeorm_1 = require("typeorm");
const baseModel_1 = require("../../../common/baseModel");
const company_1 = require("../../company/entities/company");
const user_1 = require("../../user/entities/user");
let Role = class Role extends baseModel_1.NumberId {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar" }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_1.User, (user) => user.role, {}),
    __metadata("design:type", Array)
], Role.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => company_1.Company, (company) => company.role, {}),
    __metadata("design:type", Array)
], Role.prototype, "company", void 0);
Role = __decorate([
    (0, typeorm_1.Entity)({ name: "roles" })
], Role);
exports.Role = Role;
//# sourceMappingURL=role.js.map