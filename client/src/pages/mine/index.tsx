import { useMappedState } from "@/store";
import { View } from "@fower/taro";
import { Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect } from "react";

/*
 * @Author: your name
 * @Date: 2021-06-10 10:08:53
 * @LastEditTime: 2021-06-10 18:41:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/pages/mine/index.tsx
 */
export default function Mine() {
  const { lastUpdated, todos } = useMappedState((state) => state);
  useEffect(() => {
    console.log("todos", todos);
    return () => {};
  }, [todos]);
  return (
    <View
      css={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Mine:{lastUpdated}</Text>
    </View>
  );
}
