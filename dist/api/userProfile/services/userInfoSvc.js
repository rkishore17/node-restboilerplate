"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInfoSvc = void 0;
const tslib_1 = require("tslib");
const axios_1 = require("axios");
const logger_1 = require("../../../libs/logs/logger");
const typedi_1 = require("typedi");
let userInfoSvc = class userInfoSvc {
    constructor() { }
    userInfoExecuter() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const userPostResponseList = yield axios_1.default.get('https://gorest.co.in/public/v2/posts');
                return Promise.resolve(userPostResponseList.data);
            }
            catch (error) {
                logger_1.Logger.error('Service: userInfoExecuter', 'errorInfo:' + JSON.stringify(error));
                return Promise.reject(error);
            }
        });
    }
    userInfoExecuterById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const userPostResponse = yield axios_1.default.get(`https://gorest.co.in/public/v2/posts/${id}`);
                return Promise.resolve(userPostResponse.data);
            }
            catch (error) {
                logger_1.Logger.error('Service: userInfoExecuterById', 'errorInfo:' + JSON.stringify(error));
                return Promise.reject(error);
            }
        });
    }
};
userInfoSvc = tslib_1.__decorate([
    (0, typedi_1.Service)(),
    tslib_1.__metadata("design:paramtypes", [])
], userInfoSvc);
exports.userInfoSvc = userInfoSvc;
//# sourceMappingURL=userInfoSvc.js.map