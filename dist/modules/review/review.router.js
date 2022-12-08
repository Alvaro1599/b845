"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRouter = void 0;
const express_1 = require("express");
const common_1 = require("../../common/validator/common");
const review_controller_1 = require("./review.controller");
const reviewValidator_1 = require("./schemas/reviewValidator");
const routerUser = (0, express_1.Router)();
class ReviewRouter {
    static getRoutes() {
        ReviewRouter.router.get("/", common_1.CommonValidator.isAdmin, ReviewRouter.controller.getReviews);
        ReviewRouter.router.get("/user", common_1.CommonValidator.isUser, ReviewRouter.controller.getMeReviews);
        ReviewRouter.router.get("/company", common_1.CommonValidator.isCompany, ReviewRouter.controller.getMeReviewsCompany);
        ReviewRouter.router.post("/", reviewValidator_1.ReviewValidator.createReview, common_1.CommonValidator.owner, ReviewRouter.controller.createReview);
        ReviewRouter.router.post("/companyOrUser", reviewValidator_1.ReviewValidator.createReviewGeneral, common_1.CommonValidator.owner, ReviewRouter.controller.createReviewGeneral);
        ReviewRouter.router.put("/:id", common_1.CommonValidator.uuidValidator, reviewValidator_1.ReviewValidator.fieldsReview, reviewValidator_1.ReviewValidator.updateReview, common_1.CommonValidator.owner, ReviewRouter.controller.updateReview);
        ReviewRouter.router.delete("/:id", common_1.CommonValidator.uuidValidator, common_1.CommonValidator.owner, ReviewRouter.controller.deleteReview);
        return ReviewRouter.router;
    }
}
exports.ReviewRouter = ReviewRouter;
ReviewRouter.router = (0, express_1.Router)();
ReviewRouter.controller = review_controller_1.ReviewController;
exports.default = routerUser;
//# sourceMappingURL=review.router.js.map