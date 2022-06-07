"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoController = void 0;
const tslib_1 = require("tslib");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const userApiInfo_1 = require("../userApiInfo");
const logger_1 = require("../../../libs/logs/logger");
const userInfoSvc_1 = require("../services/userInfoSvc");
let UserInfoController = class UserInfoController {
    constructor(_userInfoSvc) {
        this._userInfoSvc = _userInfoSvc;
    }
    getUserInfo() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this._userInfoSvc.userInfoExecuter();
                logger_1.Logger.info('Controller: getUserInfo', 'response:' + JSON.stringify(resp));
                return Promise.resolve(resp);
            }
            catch (error) {
                logger_1.Logger.error('Controller: getUserInfo', 'errorInfo:' + JSON.stringify(error));
                return Promise.reject(error);
            }
        });
    }
    getUserInfoById(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this._userInfoSvc.userInfoExecuterById(userId);
                logger_1.Logger.info('Controller: getUserInfoById', 'response:' + JSON.stringify(resp));
                return Promise.resolve(resp);
            }
            catch (error) {
                logger_1.Logger.error('Controller: getUserInfoById', 'errorInfo:' + JSON.stringify(error));
                return Promise.reject(error);
            }
        });
    }
};
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/getUserInfo'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserInfoController.prototype, "getUserInfo", null);
tslib_1.__decorate([
    (0, routing_controllers_1.Get)('/getUserInfoById'),
    tslib_1.__param(0, (0, routing_controllers_1.QueryParam)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UserInfoController.prototype, "getUserInfoById", null);
UserInfoController = tslib_1.__decorate([
    (0, routing_controllers_1.JsonController)(userApiInfo_1.URL_INFO.contextPath + '/userInfo'),
    (0, typedi_1.Service)(),
    tslib_1.__metadata("design:paramtypes", [userInfoSvc_1.userInfoSvc])
], UserInfoController);
exports.UserInfoController = UserInfoController;
//# sourceMappingURL=userInfoController.js.map