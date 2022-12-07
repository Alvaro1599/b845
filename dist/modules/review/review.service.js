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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const repository_1 = require("../../common/repository");
const datasource_1 = __importDefault(require("../../database/datasource"));
const review_1 = require("./entities/review");
class ReviewService extends repository_1.RepositoryDB {
    getRepository() {
        return datasource_1.default.getRepository(review_1.Review);
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRepository().findOne({
                where: {
                    id,
                },
                relations: {
                    company: true,
                    user: true,
                },
            });
        });
    }
    deleteReview(userId, reviewId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRepository().delete({
                id: reviewId,
                user: {
                    id: userId,
                },
            });
        });
    }
    upQuantity(user, company, review) {
        user.reviewsQuantity = user.reviewsQuantity + 1;
        company.ratingGeneral =
            (company.ratingGeneral * company.reviewsQuantity + review.rating) /
                (company.reviewsQuantity + 1);
        company.reviewsQuantity = company.reviewsQuantity + 1;
        return {
            userM: user,
            companyM: company,
        };
    }
    downQuantity(user, company, review) {
        user.reviewsQuantity = user.reviewsQuantity - 1;
        company.reviewsQuantity = company.reviewsQuantity - 1;
        company.ratingGeneral =
            (company.ratingGeneral * company.reviewsQuantity - review.rating) /
                (company.reviewsQuantity - 1);
        return {
            userM: user,
            companyM: company,
        };
    }
    findByUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const entities = yield this.getRepository().find({
                where: {
                    user: {
                        id,
                    },
                },
                relations: {
                    company: true,
                },
            });
            return entities.map((entity) => (Object.assign(Object.assign({}, entity), { companyName: entity.company.name, companyId: entity.company.id, companyURL: entity.company.website, company: undefined })));
        });
    }
    findByCompanyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRepository().find({
                where: {
                    company: {
                        id,
                    },
                },
                relations: {
                    user: true,
                },
            });
        });
    }
}
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map