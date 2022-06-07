import axios from 'axios';
import { Logger } from '../../../libs/logs/logger';
import { Service } from 'typedi';
import { UserPosts, UserObject, UserPost } from '../models/iUserInfo';

@Service()
export class userInfoSvc {
  constructor() {}

  async userInfoExecuter(): Promise<Array<UserObject>> {
    try {
      const userPostResponseList: UserPosts = await axios.get('https://gorest.co.in/public/v2/posts');
      return Promise.resolve(userPostResponseList.data);
    } catch (error) {
      Logger.error('Service: userInfoExecuter', 'errorInfo:' + JSON.stringify(error));
      return Promise.reject(error);
    }
  }

  async userInfoExecuterById(userId?: any): Promise<UserObject> {
    try {
      const userPostResponse: UserPost = await axios.get(`https://gorest.co.in/public/v2/posts/${userId}`);
      return Promise.resolve(userPostResponse.data);
    } catch (error) {
      Logger.error('Service: userInfoExecuterById', 'errorInfo:' + JSON.stringify(error));
      return Promise.reject(error);
    }
  }
}