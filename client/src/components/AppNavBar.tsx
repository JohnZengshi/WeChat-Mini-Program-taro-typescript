import { Text, View } from "@fower/taro";
import Taro, {
  createSelectorQuery,
  getApp,
  getMenuButtonBoundingClientRect,
  getSystemInfo,
  navigateBack,
  nextTick,
} from "@tarojs/taro";
import { useEffect, useState } from "react";
import IconFont from "./iconfont";
import { toRpx } from "../utils/index";
import { useMappedState } from "@/store";

/*
 * @Author: your name
 * @Date: 2021-06-10 16:43:03
 * @LastEditTime: 2021-06-24 11:45:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/appNavBar/index.tsx
 */
interface Props {
  title?: string;
}
export default function AppNavBar(props: Props) {
  const { currentPages } = useMappedState((state) => state);
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const [padding, setPadding] = useState(0);
  const [menuButtonHeight, setMenuButtonHeight] =
    useState(0);
  useEffect(() => {
    getSystemInfo().then((res) => {
      setStatusBarHeight(res.statusBarHeight);
      const menuButtonBoundingClient =
        getMenuButtonBoundingClientRect();
      setPadding(
        res.windowWidth - menuButtonBoundingClient.right
      );
      setMenuButtonHeight(menuButtonBoundingClient.height);
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
        id="displayBox"
        style={{
          width: "100%",
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
          {currentPages.length > 1 && (
            <View
              onClick={() => {
                console.log("click");
                navigateBack();
              }}
              style={{
                marginRight: "auto",
                marginLeft: padding,
                width: menuButtonHeight,
                height: menuButtonHeight,
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
              <IconFont
                name="arrowleft"
                size={menuButtonHeight}
              />
            </View>
          )}
          <Text>{props.title}</Text>
        </View>
      </View>
    </>
  );
}
