import { Text, View } from "@fower/taro";
import Taro, {
  createSelectorQuery,
  getApp,
  getCurrentInstance,
  getMenuButtonBoundingClientRect,
  getSystemInfo,
  navigateBack,
  nextTick,
} from "@tarojs/taro";
import { useEffect, useState } from "react";
import IconFont from "./iconfont";
import { toRpx, getNavUrl } from "../utils/index";
import { useDispatch, useMappedState } from "@/store";
import { PageListName } from "../app.config";

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
  const dispatch = useDispatch();
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);
  const [padding, setPadding] = useState(0);
  const [menuButtonHeight, setMenuButtonHeight] =
    useState(0);
  const [currentInstancePage, setCurrentInstancePage] =
    useState<string | undefined>();
  useEffect(() => {
    if (currentPages.length == 0) {
      dispatch({
        type: "update current pages",
        currentPages: getCurrentPages(),
      });
    }
    setCurrentInstancePage(
      getCurrentInstance().router?.path
    );
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
          position: "fixed",
          width: "100%",
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
          {currentPages.length > 1 &&
            currentInstancePage ==
              getNavUrl(
                getCurrentPages()[
                  getCurrentPages().length - 1
                ]?.route as PageListName
              ) && (
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
