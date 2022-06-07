"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static getTimeStamp() {
        return new Date().toISOString();
    }
    static info(namespace, message, object) {
        if (object) {
            return console.log(`[${this.getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
        }
        else {
            return console.log(`[${this.getTimeStamp()}] [INFO] [${namespace}] ${message}`);
        }
    }
    static warn(namespace, message, object) {
        if (object) {
            console.log(`[${this.getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
        }
        else {
            console.log(`[${this.getTimeStamp()}] [WARN] [${namespace}] ${message}`);
        }
    }
    static error(namespace, message, object) {
        if (object) {
            console.log(`[${this.getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
        }
        else {
            console.log(`[${this.getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
        }
    }
    static debug(namespace, message, object) {
        if (object) {
            console.log(`[${this.getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
        }
        else {
            console.log(`[${this.getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map