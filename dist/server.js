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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const datasource_1 = __importDefault(require("./database/datasource"));
const logger_1 = require("./utils/logger");
const server = app_1.default.listen(app_1.default.get("port"), () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield datasource_1.default.initialize();
        logger_1.Logger.info("Base de datos iniciada");
    }
    catch (error) {
        console.log(error);
        logger_1.Logger.error(error + "");
        throw new Error("Error en la base de datos");
    }
    logger_1.Logger.info(`App is running at http://localhost:${app_1.default.get("port")} in ${app_1.default.get("env")} mode`);
}));
exports.default = server;
//# sourceMappingURL=server.js.map