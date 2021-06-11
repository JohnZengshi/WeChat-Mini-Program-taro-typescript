/*
 * @Author: your name
 * @Date: 2021-06-11 14:36:25
 * @LastEditTime: 2021-06-11 20:57:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/service/index.ts
 */

import { useDispatch, useMappedState } from "@/store";
import { cloud, General } from "@tarojs/taro";
import { CloudFunctionName } from "../constants/cloudFunction";

export default function useAPI() {
  const { user } = useMappedState((state) => state);
  const dispatch = useDispatch();
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

  /**
   * @description 用户登录
   */
  const login = () => {
    request<
      CloudFunction.User.Action,
      any,
      ReturnType<
        CloudFunction.User.Login<ICloud.BaseWXContext>
      >
    >(CloudFunctionName.User, {
      action: "login",
    }).then((res) => {
      dispatch({
        type: "update user data",
        user: res.data || {},
      });
    });
  };

  return {
    request,
    login,
  };
}
