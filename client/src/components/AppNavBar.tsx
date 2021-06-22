import { Text, View } from "@fower/taro";
import Taro, {
  getApp,
  getMenuButtonBoundingClientRect,
  getSystemInfo,
  navigateBack,
} from "@tarojs/taro";
import { useEffect, useState } from "react";
import IconFont from "./iconfont";
import { toRpx } from "../utils/index";

/*
 * @Author: your name
 * @Date: 2021-06-10 16:43:03
 * @LastEditTime: 2021-06-22 17:40:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/appNavBar/index.tsx
 */
interface Props {
  title?: string;
}
export default function AppNavBar(props: Props) {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    getSystemInfo().then((res) => {
      setStatusBarHeight(res.statusBarHeight);
      const menuButtonBoundingClient =
        getMenuButtonBoundingClientRect();
      const navHeight =
        (menuButtonBoundingClient.top -
          res.statusBarHeight) *
          2 +
        menuButtonBoundingClient.height;
      setNavHeight(navHeight);
    });
    return () => {};
  }, []);
  return (
    <>
      <View
        style={{
          height: statusBarHeight + navHeight,
        }}
      ></View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          // position: "relative",
          position: "fixed",
          top: 0,
          zIndex: 999,
        }}
      >
        <View style={{ height: statusBarHeight }} />
        <View
          style={{
            height: navHeight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            onClick={() => {
              console.log("click");
              navigateBack();
            }}
            style={{
              marginRight: "auto",
              marginLeft: toRpx(20),
              width: toRpx(55),
              height: toRpx(55),
              borderRadius: "50%",
              borderWidth: toRpx(1),
              borderStyle: "solid",
              borderColor: "#EBEAEC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
            }}
          >
            <IconFont name="arrowleft" size={55} />
          </View>
          <Text>{props.title}</Text>
        </View>
      </View>
    </>
  );
}
