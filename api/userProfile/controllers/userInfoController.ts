import { JsonController, Get, QueryParam } from "routing-controllers";
import { Service } from 'typedi';
import { URL_INFO } from '../userApiInfo';
import { Logger } from '../../../libs/logs/logger';
import { userInfoSvc } from "../services/userInfoSvc";

@JsonController(URL_INFO.contextPath + '/userInfo')
@Service()
export class UserInfoController {
  constructor(public _userInfoSvc: userInfoSvc) { }

  @Get('/getUserInfo')
  public async getUserInfo(): Promise<any> {
    try {
      const resp = await this._userInfoSvc.userInfoExecuter();
      Logger.info('Controller: getUserInfo', 'response:' + JSON.stringify(resp));
      return Promise.resolve(resp);
    } catch (error) {
      Logger.error('Controller: getUserInfo', 'errorInfo:' + JSON.stringify(error));
      return Promise.reject(error);
    }
  }

  @Get('/getUserInfoById')
  public async getUserInfoById(@QueryParam('id') userId: number): Promise<any> {
    try {
      const resp = await this._userInfoSvc.userInfoExecuterById(userId);
      Logger.info('Controller: getUserInfoById', 'response:' + JSON.stringify(resp));
      return Promise.resolve(resp);
    } catch (error) {
      Logger.error('Controller: getUserInfoById', 'errorInfo:' + JSON.stringify(error));
      return Promise.reject(error);
    }
  }
}