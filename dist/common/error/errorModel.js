"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorJwt = exports.ErrorService = void 0;
const logger_1 = require("../../utils/logger");
class ErrorService {
    constructor(status = 500, message) {
        this.status = status;
        this.message = message;
        if (status >= 500) {
            logger_1.Logger.error(message);
        }
    }
}
exports.ErrorService = ErrorService;
class ErrorJwt {
    constructor(message) {
        this.message = message;
        this.status = 500;
        logger_1.Logger.error(message);
    }
}
exports.ErrorJwt = ErrorJwt;
//# sourceMappingURL=errorModel.js.map