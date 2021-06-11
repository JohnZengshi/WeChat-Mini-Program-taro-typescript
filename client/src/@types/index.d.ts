/*
 * @Author: your name
 * @Date: 2021-06-10 14:25:52
 * @LastEditTime: 2021-06-11 17:40:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/@types/index.d.ts
 */
/// <reference path = "../../../cloud/src/model/index.d.ts" />

declare namespace WechatMiniprogram {
  interface Wx {
    onAppRoute: (callBack: (res: any) => void) => void;
  }
}

declare namespace ICloud {
  // === API: getWXContext ===
  export interface BaseWXContext {
    OPENID?: string;
    APPID?: string;
    UNIONID?: string;
    ENV?: string;
    SOURCE?: string;
    CLIENTIP?: string;
    CLIENTIPV6?: string;
  }
}
