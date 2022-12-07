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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const path = __importStar(require("path"));
const typeorm_1 = require("typeorm");
const company_1 = __importDefault(require("./factories/company"));
const review_1 = __importDefault(require("./factories/review"));
const user_1 = __importDefault(require("./factories/user"));
const company_2 = __importDefault(require("./seeds/company"));
const review_2 = __importDefault(require("./seeds/review"));
const reviewAs_1 = __importDefault(require("./seeds/reviewAs"));
const role_1 = __importDefault(require("./seeds/role"));
const user_2 = __importDefault(require("./seeds/user"));
const options = {
    type: process.env.DB_DRIVER,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    seeds: [role_1.default, user_2.default, company_2.default, review_2.default, reviewAs_1.default],
    factories: [user_1.default, company_1.default, review_1.default],
    migrations: [path.join(__dirname + "/migrations/*{.js,.ts}")],
    entities: [path.join(__dirname + "/../modules/**/entities/*{.js,.ts}")],
    socketPath: process.env.INSTANCE
};
const AppDataSource = new typeorm_1.DataSource(options);
exports.default = AppDataSource;
//# sourceMappingURL=datasource.js.map