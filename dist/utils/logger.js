"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const winston_1 = require("winston");
class Logger {
    static info(message) {
        Logger.loggerFileInstance.log({ level: "info", message });
    }
    static error(message) {
        Logger.loggerFileInstance.log({ level: "error", message });
    }
    static warning(message) {
        Logger.loggerFileInstance.log({ level: "warning", message });
    }
    static verbose(message) {
        Logger.loggerFileInstance.log({ level: "verbose", message });
    }
}
exports.Logger = Logger;
Logger.loggerFileInstance = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(({ level, message, timestamp }) => {
        return `[${timestamp}] ${level}: ${message}`;
    })),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ dirname: "./log", filename: ".log" }),
    ],
});
//# sourceMappingURL=logger.js.map