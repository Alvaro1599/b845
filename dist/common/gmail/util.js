"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Google = void 0;
class Google {
    static generateConfig(url, accessToken) {
        return {
            method: "get",
            url,
            headers: {
                Authorization: "Bearer " + accessToken,
                "Content-type": "application/json"
            }
        };
    }
}
exports.Google = Google;
//# sourceMappingURL=util.js.map