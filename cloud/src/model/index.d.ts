/*
 * @Author: your name
 * @Date: 2021-06-11 00:17:48
 * @LastEditTime: 2021-06-11 11:44:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/cloud/src/model/index.ts
 */

declare module CloudFunction {
  class FunctionReqRes<Q = any, S = any> {
    Req: Q;
    Res: S;
  }
  class BaseReq<A, P> {
    action: A;
    params: P;
  }
  declare module Todos {
    type listItem = {
      _id: string;
      description: string;
      done: boolean;
      due: Date;
      tags: string[];
    };
    type Req<T = any> = BaseReq<
      "add" | "get" | "del" | "update" | "getList",
      T
    >;
    class GetList extends FunctionReqRes<listItem[]> {}
    class Add extends FunctionReqRes<Omit<listItem, "_id">, {}> {}
    class Del extends FunctionReqRes<Pick<listItem, "_id">> {}
    export type AddParams = Req<Add["Req"]>;
    export type DelParams = Req<Del["Req"]>;
  }
  declare module Login {}
}
