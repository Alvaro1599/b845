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
exports.Review = void 0;
const typeorm_1 = require("typeorm");
const baseModel_1 = require("../../../common/baseModel");
const company_1 = require("../../company/entities/company");
const user_1 = require("../../user/entities/user");
let Review = class Review extends baseModel_1.Uuid {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Review.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "numeric" }),
    __metadata("design:type", Number)
], Review.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "varchar" }),
    __metadata("design:type", String)
], Review.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "date" }),
    __metadata("design:type", Date)
], Review.prototype, "experienceDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.review, { onDelete: "CASCADE", eager: true }),
    __metadata("design:type", user_1.User)
], Review.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_1.Company, (company) => company.review, {
        onDelete: "CASCADE",
        eager: true,
    }),
    __metadata("design:type", company_1.Company)
], Review.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Review.prototype, "createdAt", void 0);
Review = __decorate([
    (0, typeorm_1.Entity)({ name: "reviews" })
], Review);
exports.Review = Review;
//# sourceMappingURL=review.js.map