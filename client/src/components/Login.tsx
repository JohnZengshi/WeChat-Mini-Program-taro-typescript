/*
 * @Author: your name
 * @Date: 2021-06-09 22:44:20
 * @LastEditTime: 2021-06-09 22:58:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/Login.tsx
 */

import { Button, Text, View } from "@tarojs/components";
import Taro, { General } from "@tarojs/taro";
import { useState } from "react";


export default function Login() {
  const [context, setContext] = useState<General.IAnyObject | string | undefined>("")
  const getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {}
      })
      .then(res => {
        setContext(res.result)
      })
  }
  return (
    <View className='index'>
        <Button onClick={getLogin}>获取登录云函数</Button>
        <Text>context：{JSON.stringify(context)}</Text>
    </View>
  )
}
