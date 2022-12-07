"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const errorModel_1 = require("../error/errorModel");
const jwt_1 = require("../jwt/jwt");
const mapper_1 = require("../mapper/mapper");
class Token {
    static hasToken(req) {
        const token = req.headers["authorization"];
        if (!token) {
            throw new errorModel_1.ErrorService(401, "token is required");
        }
        const formatToken = mapper_1.Mapper.getToken(token);
        return formatToken;
    }
    static verifyToken(req) {
        try {
            const token = Token.hasToken(req);
            const { email, id, role } = jwt_1.Jwt.verify(token);
            const data = {
                email,
                id,
                role: role,
            };
            return data;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.Token = Token;
//# sourceMappingURL=token.js.map