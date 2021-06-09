/*
 * @Author: your name
 * @Date: 2021-06-09 22:44:20
 * @LastEditTime: 2021-06-10 00:35:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/Login.tsx
 */

import { View } from "@fower/taro";
import { Text } from "@tarojs/components";
import Taro, { General } from "@tarojs/taro";
import { useState } from "react";
import { AtButton } from "taro-ui";

export default function Login() {
  const [context, setContext] = useState<
    General.IAnyObject | string | undefined
  >("");
  const getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {},
      })
      .then((res) => {
        setContext(res.result);
      });
  };
  return (
    <View pl24 pr24 pt12 overflow className="index">
      <View mb12>
        <AtButton type="primary" circle onClick={getLogin}>
          获取登录云函数
        </AtButton>
      </View>
      <Text>{typeof context == "object" && JSON.stringify(context)}</Text>
    </View>
  );
}
