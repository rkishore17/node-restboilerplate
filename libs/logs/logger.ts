export class Logger {
    public static getTimeStamp(): string {
        return new Date().toISOString();
    }

    public static info(namespace: string, message: string, object?: any): void | string {
        if (object) {
            return console.log(`[${this.getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
        } else {
            return console.log(`[${this.getTimeStamp()}] [INFO] [${namespace}] ${message}`);
        }
    }

    public static warn(namespace: string, message: string, object?: any): void | string {
        if (object) {
            console.log(`[${this.getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
        } else {
            console.log(`[${this.getTimeStamp()}] [WARN] [${namespace}] ${message}`);
        }
    }

    public static error(namespace: string, message: string, object?: any): void | string {
        if (object) {
            console.log(`[${this.getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
        } else {
            console.log(`[${this.getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
        }
    }

    public static debug(namespace: string, message: string, object?: any): void | string {
        if (object) {
            console.log(`[${this.getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
        } else {
            console.log(`[${this.getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
        }
    }
}
