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
const company_service_1 = require("../../modules/company/company.service");
const review_1 = require("../../modules/review/entities/review");
const review_service_1 = require("../../modules/review/review.service");
const user_service_1 = require("../../modules/user/user.service");
class ReviewAsSeeder {
    run(dataSource) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_service_1.userService();
            const company = new company_service_1.CompanyService();
            const users = yield user.findAll();
            const companies = yield company.findAll();
            const review = new review_service_1.ReviewService();
            const reviews = yield review.findAll();
            const reviewRepository = dataSource.getRepository(review_1.Review);
            const indexU = [];
            const indexC = [];
            for (let index = 0; index < reviews.length; index++) {
                indexU.push(Math.floor(Math.random() * 10));
                indexC.push(Math.floor(Math.random() * 10));
            }
            for (let index = 0; index < reviews.length; index++) {
                const element = indexU[index];
                const userI = users[element];
                userI.reviewsQuantity = userI.reviewsQuantity + 1;
                yield user.getRepository().save(userI);
            }
            for (let index = 0; index < reviews.length; index++) {
                const element = indexC[index];
                const companyI = companies[element];
                companyI.reviewsQuantity = companyI.reviewsQuantity + 1;
                yield company.getRepository().save(companyI);
            }
            for (let index = 0; index < reviews.length; index++) {
                const companyI = companies[indexC[index]];
                const userI = users[indexU[index]];
                const review = reviews[index];
                review.company = companyI;
                review.user = userI;
                yield reviewRepository.save(review);
            }
            /*     for (let index = 0; index < reviews.length; index++) {
              const companyI = companies[Math.floor(Math.random() * 10)]
              const review = reviews[index];
              review.company = companyI;
              review.user = userI;
              indexU.push()
              userI.reviewsQuantity=userI.reviewsQuantity+1
              companyI.reviewsQuantity=companyI.reviewsQuantity+1
            } */
        });
    }
}
exports.default = ReviewAsSeeder;
//# sourceMappingURL=reviewAs.js.map