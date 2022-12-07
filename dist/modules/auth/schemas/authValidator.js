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
exports.AuthValidator = void 0;
const yup = __importStar(require("yup"));
class AuthValidator {
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = yup.object().shape({
                password: yup.string().required(),
                email: yup.string().email().required(),
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
    static register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = yup.object().shape({
                email: yup.string().required().email(),
                name: yup.string().required(),
                avatar: yup.string().optional(),
                lastName: yup.string().required(),
                reviewsQuantity: yup.string().notRequired(),
                address: yup.string().optional(),
                password: yup.string().required().min(4).max(15),
                phone: yup.string().optional(),
                banned: yup.string().notRequired(),
                country: yup.string().optional(),
                city: yup.string().optional(),
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
    static registerCompany(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = yup.object().shape({
                email: yup.string().required().email(),
                name: yup.string().required(),
                description: yup.string().required(),
                address: yup.string().optional(),
                password: yup.string().required().min(4).max(15),
                phone: yup.string().optional(),
                country: yup.string().optional(),
                city: yup.string().optional(),
                website: yup.string().url().required(),
                workEmail: yup.string().email().required(),
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
}
exports.AuthValidator = AuthValidator;
//# sourceMappingURL=authValidator.js.map