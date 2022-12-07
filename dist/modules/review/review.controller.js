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
exports.ReviewController = void 0;
const company_service_1 = require("../company/company.service");
const user_service_1 = require("../user/user.service");
const review_service_1 = require("./review.service");
class ReviewController {
    static createReviewGeneral(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.body.user;
                const url = new URL(req.body.companyUrl);
                const user = (yield ReviewController.userService.findOneById(id));
                let company = yield ReviewController.companyService.findOneByHostname(url.host);
                if (!company) {
                    company = yield ReviewController.companyService.create(Object.assign(Object.assign({}, req.body.company), { ratingGeneral: 0, reviewsQuantity: 0, name: req.body.companyName, website: url.host, role: 3 }));
                }
                const { companyM, userM } = ReviewController.service.upQuantityR(user, company, req.body.rating);
                yield ReviewController.userService.getRepository().save(userM);
                yield ReviewController.companyService
                    .getRepository()
                    .save(companyM);
                let formatDate = req.body.experienceDate.split("");
                formatDate.pop();
                formatDate = formatDate.join("");
                const Review = yield ReviewController.service.create({
                    company: company,
                    description: req.body.description,
                    rating: req.body.rating,
                    user: user,
                    title: req.body.title,
                    experienceDate: formatDate
                });
                return res.status(201).send("review creada correctamente");
            }
            catch (error) {
                return res.status(400).send("Error al crear la review");
            }
        });
    }
    static getReviews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield ReviewController.service.findAll();
            res.send(entity);
            return;
        });
    }
    static getMeReviews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = yield req.body.user;
            const entity = yield ReviewController.service.findByUserId(id);
            res.status(200).send(entity);
            return;
        });
    }
    static getMeReviewsCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = yield req.body.user;
            const entity = yield ReviewController.service.findByCompanyId(id);
            entity.map((ent) => {
                delete ent.user.password;
                return ent;
            });
            res.status(200).send(entity);
            return;
        });
    }
    static createReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body.user;
            const review = req.body;
            try {
                const company = yield ReviewController.companyService.findOneById(review.company);
                if (!company) {
                    return res.status(400).send("company wasn't found");
                }
                const user = yield ReviewController.userService.findOneById(id);
                if (!user) {
                    return res.status(400).send("usuario no encontrado");
                }
                yield ReviewController.service.create({
                    company: company,
                    description: review.description,
                    rating: review.rating,
                    user: user,
                    title: review.title,
                });
                const { companyM, userM } = ReviewController.service.upQuantity(user, company, review);
                yield ReviewController.userService.getRepository().save(userM);
                yield ReviewController.companyService
                    .getRepository()
                    .save(companyM);
                return res.status(201).send("review creada correctamente");
            }
            catch (error) {
                throw res.status(500).send("server error");
            }
        });
    }
    static deleteReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body.user;
            const reviewId = req.params.id;
            const user = yield ReviewController.userService.findOneById(id);
            if (!user) {
                return res.status(400).send("usuario no encontrado");
            }
            const review = yield ReviewController.service.findOneById(reviewId);
            if (!review) {
                return res.status(400).send("Review wasn't found");
            }
            const company = yield ReviewController.companyService.findOneById(review.company.id);
            if (!company) {
                return res.status(400).send("company wasn't found");
            }
            const del = yield ReviewController.service.deleteReview(id, reviewId);
            if (del.affected === 0) {
                return res
                    .status(400)
                    .send("Review wasn't found or isn't your property or wasn't found");
            }
            const { companyM, userM } = ReviewController.service.downQuantity(user, company, review);
            yield ReviewController.userService.getRepository().save(userM);
            yield ReviewController.companyService
                .getRepository()
                .save(companyM);
            return res.status(201).send("review was delete");
        });
    }
    static updateReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const userId = req.body.user.id;
            const { title, rating, description } = req.body;
            try {
                const review = yield ReviewController.service.getRepository().update({
                    id,
                    user: {
                        id: userId,
                    },
                }, {
                    title,
                    rating,
                    description,
                });
                if (review.affected === 0) {
                    return res
                        .status(400)
                        .send("Review wasn't found or isn't your property");
                }
                return res.status(201).send("review actualizado correctamente");
            }
            catch (error) {
                throw res.status(500).send("server error");
            }
        });
    }
}
exports.ReviewController = ReviewController;
ReviewController.service = new review_service_1.ReviewService();
ReviewController.companyService = new company_service_1.CompanyService();
ReviewController.userService = new user_service_1.userService();
//# sourceMappingURL=review.controller.js.map