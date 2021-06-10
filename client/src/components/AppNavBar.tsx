import { Text, View } from "@fower/taro";
import Taro, {
  getApp,
  getMenuButtonBoundingClientRect,
  getSystemInfo,
} from "@tarojs/taro";
import { useEffect, useState } from "react";

/*
 * @Author: your name
 * @Date: 2021-06-10 16:43:03
 * @LastEditTime: 2021-06-10 16:59:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/appNavBar/index.tsx
 */
export default function AppNavBar() {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    getSystemInfo().then((res) => {
      setStatusBarHeight(res.statusBarHeight);
      const menuButtonBoundingClient = getMenuButtonBoundingClientRect();
      const navHeight =
        (menuButtonBoundingClient.top - res.statusBarHeight) * 2 +
        menuButtonBoundingClient.height;
      setNavHeight(navHeight);
    });
    return () => {};
  }, []);
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <View style={{ height: statusBarHeight }} />
      <View
        style={{
          height: navHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>AppNavBar</Text>
      </View>
    </View>
  );
}
