/*
 * @Author: your name
 * @Date: 2021-06-11 14:36:25
 * @LastEditTime: 2021-06-23 23:00:57
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/service/index.ts
 */

import {
  makeStore,
  useDispatch,
  useMappedState,
} from "@/store";
import { cloud, General, showToast } from "@tarojs/taro";
import { CloudFunctionName } from "../constants/cloudFunction";
import statusCode from "http-status-codes";
import { useEffect, useRef } from "react";

export default function useAPI(
  store?: ReturnType<typeof makeStore>
) {
  const { user } = store
    ? store.getState()
    : useMappedState((state) => state);
  const dispatch = store ? store.dispatch : useDispatch();
  useEffect(() => {
    // console.log("userRef.current", userRef.current);
  }, [user]);
  function request<
    A = any,
    D = any,
    R = Promise<General.IAnyObject | string | undefined>
  >(
    funcName: CloudFunctionName,
    data?: CloudFunction.BaseReq<A, D>
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
          } as CloudFunction.BaseReq<
            A,
            D & { _openid: string }
          >,
        })
        .then((res) => {
          const result =
            res.result as CloudFunction.BaseRes;
          if (result.code == statusCode.BAD_REQUEST)
            return showToast({
              title: result.msg,
              icon: "none",
            });
          reslove(res.result);
        });
    }) as unknown as R;
  }

  /**
   * @description 用户登录
   */
  const login = () => {
    return new Promise<void>((reslove) => {
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
        reslove();
      });
    });
  };

  const loginCallBack = () => {
    return new Promise<void>((reslove) => {
      useEffect(() => {
        if (user?.OPENID) reslove();
      }, [user?.OPENID]);
    });
  };

  return {
    request,
    login,
    loginCallBack,
  };
}
