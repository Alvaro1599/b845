"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.ReviewValidator = void 0;
const yup = __importStar(require("yup"));
class ReviewValidator {
    static createReview(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = yup.object().shape({
                description: yup.string().notRequired(),
                rating: yup.number().required(),
                title: yup.string().notRequired(),
                company: yup.string().required().uuid(),
            });
            try {
                yield schema.validate(req.body);
                next();
            }
            catch (error) {
                const err = error;
                res.status(400).json({ [err.name]: [...err.errors] });
            }
        });
    }
    static createReviewGeneral(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = yup.object().shape({
                description: yup.string().notRequired(),
                experienceDate: yup.date().required(),
                rating: yup.number().required(),
                title: yup.string().notRequired(),
                companyName: yup.string().required(),
                companyUrl: yup.string().required().url(),
            });
            try {
                yield schema.validate(req.body);
                next();
            }
            catch (error) {
                const err = error;
                res.status(400).json({ [err.name]: [...err.errors] });
            }
        });
    }
    static updateReview(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = yup.object().shape({
                description: yup.string().notRequired(),
                rating: yup.number().notRequired(),
                title: yup.string().notRequired(),
                experienceDate: yup.date().notRequired(),
            });
            try {
                yield schema.validate(req.body);
                next();
            }
            catch (error) {
                const err = error;
                res.status(400).json({ [err.name]: [...err.errors] });
            }
        });
    }
    static fieldsReview(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const arr = [
                "description",
                "rating",
                "title",
                "experienceDate",
                "city",
            ];
            let qt = 0;
            try {
                const body = Object.keys(req.body);
                for (let index = 0; index < body.length; index++) {
                    const element = body[index];
                    if (arr.find((x) => x == element)) {
                        qt = qt + 1;
                    }
                }
                return qt > 0
                    ? (next())
                    : res
                        .status(400)
                        .send("debe tener al menos una caracteristica que actualizar");
            }
            catch (error) {
                const err = error;
                res.status(400).json({ [err.name]: [...err.errors] });
            }
        });
    }
}
exports.ReviewValidator = ReviewValidator;
//# sourceMappingURL=reviewValidator.js.map