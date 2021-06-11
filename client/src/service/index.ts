/*
 * @Author: your name
 * @Date: 2021-06-11 14:36:25
 * @LastEditTime: 2021-06-11 18:24:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/service/index.ts
 */

import { useMappedState } from "@/store";
import { cloud, General } from "@tarojs/taro";
import { CloudFunctionName } from "../constants/cloudFunction";

export default function useAPI() {
  const { user } = useMappedState((state) => state);

  function request<
    A = any,
    D = any,
    R = Promise<General.IAnyObject | string | undefined>
  >(
    funcName: CloudFunctionName,
    data?: CloudFunction.BaseReq<A, D & { _openid: string }>
  ) {
    return new Promise((reslove) => {
      cloud
        .callFunction({
          name: funcName,
          data: {
            ...data,
            params: {
              ...data?.params,
              _openid: user?.OPENID,
            },
          } as typeof data,
        })
        .then((res) => {
          reslove(res.result);
        });
    }) as unknown as R;
  }

  return {
    request,
  };
}
