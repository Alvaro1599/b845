"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRouter = void 0;
const express_1 = require("express");
const common_1 = require("../../common/validator/common");
const company_controller_1 = require("./company.controller");
const companyValidator_1 = require("./schemas/companyValidator");
const routerCompany = (0, express_1.Router)();
class CompanyRouter {
    static getRoutes() {
        CompanyRouter.router.get("/", common_1.CommonValidator.isCompany, CompanyRouter.controller.getMyCompany);
        CompanyRouter.router.get("/:id", CompanyRouter.controller.getMyCompanyId);
        CompanyRouter.router.put("/", companyValidator_1.CompanyValidator.emptyCompany, common_1.CommonValidator.isCompany, CompanyRouter.controller.updateCompany);
        CompanyRouter.router.delete("/", common_1.CommonValidator.isCompany, CompanyRouter.controller.deleteCompany);
        CompanyRouter.router.delete("/admin/:id", common_1.CommonValidator.isAdmin, common_1.CommonValidator.uuidValidator, CompanyRouter.controller.deleteCompanyAdmin);
        CompanyRouter.router.put("/admin/:id", common_1.CommonValidator.isAdmin, common_1.CommonValidator.uuidValidator, CompanyRouter.controller.updateCompanyAdmin);
        return CompanyRouter.router;
    }
}
exports.CompanyRouter = CompanyRouter;
CompanyRouter.router = (0, express_1.Router)();
CompanyRouter.controller = company_controller_1.CompanyController;
exports.default = routerCompany;
//# sourceMappingURL=company.router.js.map