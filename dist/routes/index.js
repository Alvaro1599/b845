"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_router_1 = require("../modules/auth/auth.router");
const company_router_1 = require("../modules/company/company.router");
const review_router_1 = require("../modules/review/review.router");
const user_router_1 = require("../modules/user/user.router");
const router = (0, express_1.Router)();
router.use("/auth", auth_router_1.AuthRouter.getRoutes());
router.use("/company", company_router_1.CompanyRouter.getRoutes());
router.use("/user", user_router_1.UserRouter.getRoutes());
router.use("/review", review_router_1.ReviewRouter.getRoutes());
exports.default = router;
//# sourceMappingURL=index.js.map