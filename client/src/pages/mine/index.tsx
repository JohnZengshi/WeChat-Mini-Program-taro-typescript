import { useMappedState } from "@/store";
import { View } from "@fower/taro";
import { Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect } from "react";

/*
 * @Author: your name
 * @Date: 2021-06-10 10:08:53
 * @LastEditTime: 2021-06-11 21:01:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/pages/mine/index.tsx
 */
export default function Mine() {
  const { user } = useMappedState((state) => state);

  return (
    <View
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Mine:{user?.OPENID}</Text>
    </View>
  );
}
