"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const common_1 = require("../../common/validator/common");
const user_controller_1 = require("./user.controller");
const routerUser = (0, express_1.Router)();
routerUser.get("/", user_controller_1.UserController.getUser);
class UserRouter {
    static getRoutes() {
        UserRouter.router.get("/", common_1.CommonValidator.isAdmin, UserRouter.controller.getUser);
        UserRouter.router.get("/me", common_1.CommonValidator.owner, UserRouter.controller.ownData);
        UserRouter.router.get("/admin", common_1.CommonValidator.isAdmin, UserRouter.controller.ownData);
        return UserRouter.router;
    }
}
exports.UserRouter = UserRouter;
UserRouter.router = (0, express_1.Router)();
UserRouter.controller = user_controller_1.UserController;
exports.default = routerUser;
//# sourceMappingURL=user.router.js.map