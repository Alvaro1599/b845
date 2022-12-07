"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBase = void 0;
const errorModel_1 = require("./errorModel");
class ErrorBase {
    constructor(error) {
        this.status = 500;
        this.message = "error en el servidor";
        if (error instanceof errorModel_1.ErrorService) {
            this.message = error.message;
            this.status = error.status;
            return;
        }
    }
}
exports.ErrorBase = ErrorBase;
//# sourceMappingURL=errorBase.js.map