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
exports.Company = void 0;
const typeorm_1 = require("typeorm");
const baseModel_1 = require("../../../common/baseModel");
const review_1 = require("../../review/entities/review");
const role_1 = require("../../role/entities/role");
let Company = class Company extends baseModel_1.Uuid {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar" }),
    __metadata("design:type", String)
], Company.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar" }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Company.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Company.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "float" }),
    __metadata("design:type", Number)
], Company.prototype, "reviewsQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Company.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, nullable: false, type: "boolean" }),
    __metadata("design:type", Boolean)
], Company.prototype, "banned", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Company.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Company.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar", unique: true }),
    __metadata("design:type", String)
], Company.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar" }),
    __metadata("design:type", String)
], Company.prototype, "workEmail", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "float" }),
    __metadata("design:type", Number)
], Company.prototype, "ratingGeneral", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "varchar" }),
    __metadata("design:type", String)
], Company.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_1.Role, (role) => role.user, {
        nullable: false,
        onDelete: "CASCADE",
        eager: true,
    }),
    __metadata("design:type", Object)
], Company.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_1.Review, (review) => review.company),
    __metadata("design:type", Array)
], Company.prototype, "review", void 0);
Company = __decorate([
    (0, typeorm_1.Entity)({ name: "companies" })
], Company);
exports.Company = Company;
//# sourceMappingURL=company.js.map