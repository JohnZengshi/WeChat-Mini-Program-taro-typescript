/*
 * @Author: your name
 * @Date: 2021-06-10 14:25:52
 * @LastEditTime: 2021-06-10 14:30:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/@types/index.d.ts
 */

declare namespace WechatMiniprogram {
  interface Wx {
    onAppRoute: (callBack: (res: any) => void) => void;
  }
}
