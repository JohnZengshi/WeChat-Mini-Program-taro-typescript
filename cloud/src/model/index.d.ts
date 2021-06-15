/*
 * @Author: your name
 * @Date: 2021-06-11 00:17:48
 * @LastEditTime: 2021-06-15 10:59:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/cloud/src/model/index.ts
 */
declare module CloudFunction {
  class BaseReq<A, P = any> {
    action: A;
    params?: P;
  }
  type BaseRes<D = any> = {
    code: number;
    data?: D;
    msg: string;
  };
  declare module Todos {
    type listItem = {
      _openid: string;
      _id: string;
      description: string;
      done: boolean;
      due: Date;
      tags: string[];
    };
    type Action = "add" | "get" | "del" | "update" | "getList";

    export type GetList = (
      params: Pick<listItem, "_openid">
    ) => Promise<BaseRes<listItem[]>>;
    export type Add = (
      params: Omit<listItem, "_id">
    ) => Promise<BaseRes<Omit<listItem, "_id">>>;
    export type Del = (
      params: Pick<listItem, "_id" | "_openid">
    ) => Promise<BaseRes>;
  }
  declare module User {
    type Action = "login";

    export type Login<T = cloud.ICloud.WXContext> = () => Promise<BaseRes<T>>;
  }
}
