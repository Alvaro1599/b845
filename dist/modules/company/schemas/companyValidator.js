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
exports.CompanyValidator = void 0;
class CompanyValidator {
    static emptyCompany(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const arr = [
                    "name",
                    "avatar",
                    "description",
                    "address",
                    "phone",
                    "country",
                    "city",
                    "password",
                ];
                if (!(Object.keys(req.body).length === 0)) {
                    const body = Object.keys(req.body);
                    let qt = 0;
                    for (let index = 0; index < body.length; index++) {
                        const element = body[index];
                        if (arr.find((x) => x == element)) {
                            qt = qt + 1;
                        }
                    }
                    const nBody = req.body;
                    req.body = {
                        name: nBody.name,
                        avatar: nBody.avatar,
                        description: nBody.description,
                        address: nBody.address,
                        phone: nBody.phone,
                        country: nBody.country,
                        city: nBody.city,
                        password: nBody.password,
                    };
                    return qt > 0
                        ? next()
                        : res
                            .status(400)
                            .send("debe tener al menos una caracteristica que actualizar");
                }
                return res
                    .status(400)
                    .send("debe tener al menos una caracteristica que actualizar");
            }
            catch (error) {
                const err = error;
                res.status(400).json({ [err.name]: [...err.errors] });
            }
        });
    }
    static fieldsCompany(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const arr = [
                "name",
                "avatar",
                "description",
                "address",
                "phone",
                "country",
                "city",
                "password",
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
                    ? next()
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
exports.CompanyValidator = CompanyValidator;
//# sourceMappingURL=companyValidator.js.map