export interface IApiInfo {
  contextPath: string;
}

export interface UserPosts {
  data?: Array<UserObject>
}

export interface UserPost {
  data?: UserObject
}

export interface UserObject {
  id?: number;
  user_id?: number;
  title?: string;
  body?: string
}