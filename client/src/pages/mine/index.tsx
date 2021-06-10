import { View } from "@fower/taro";
import { Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

/*
 * @Author: your name
 * @Date: 2021-06-10 10:08:53
 * @LastEditTime: 2021-06-10 10:28:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/pages/mine/index.tsx
 */
export default function Mine() {
  return (
    <View
      css={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Mine</Text>
    </View>
  );
}
