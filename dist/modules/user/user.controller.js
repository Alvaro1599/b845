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
exports.UserController = void 0;
const user_service_1 = require("./user.service");
class UserController {
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserController.userService.findAll();
            res.send(user);
            return;
        });
    }
    static ownData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body.user;
            const profile = yield UserController.userService.findOneByEmail(email);
            profile === null || profile === void 0 ? true : delete profile.password;
            res.send(profile);
            return;
        });
    }
}
exports.UserController = UserController;
UserController.userService = new user_service_1.userService();
//# sourceMappingURL=user.controller.js.map