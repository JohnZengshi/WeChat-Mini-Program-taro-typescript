/*
 * @Author: your name
 * @Date: 2021-06-10 12:42:21
 * @LastEditTime: 2021-06-25 18:30:41
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/custom-tab-bar/index.tsx
 */
import IconFont from "@/components/iconfont";
import { View } from "@fower/taro";
import Taro, { switchTab } from "@tarojs/taro";
import { useEffect, useMemo } from "react";
import { PageList, PageListName } from "../app.config";
import { getNavUrl, toRpx } from "../utils/index";
import { Theme } from "../constants/theme";
import { useMappedState } from "@/store";

export default function Tabbar() {
  const { currentPages } = useMappedState((state) => state);
  const currentPagePath = useMemo(
    () => currentPages[currentPages.length - 1]?.route,
    [currentPages]
  );
  const mode = useMemo<"light" | "dark">(() => {
    if (currentPagePath == PageListName.Mine) {
      return "dark";
    }
    return "light";
  }, [currentPages]);
  useEffect(() => {
    // updateTabar();
    console.log("初始化tab", currentPages);
    return () => {};
  }, []);

  return (
    <View
      pb2
      pt2
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "env(safe-area-inset-bottom)",
        backgroundColor:
          mode == "light" ? "#fff" : "#03174D",
        position: "relative",
        boxShadow:
          "2px -5px 17px " +
          (mode == "light"
            ? "rgba(84, 87, 92, 0.1)"
            : "rgba(3, 19, 64, 0.95)"),
        height: toRpx(98),
      }}
    >
      {/* <View
        style={{
          width: toRpx(46),
          height: toRpx(46),
          borderRadius: toRpx(18),
          backgroundColor: Theme.baseColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        }}
      ></View> */}
      {PageList.map((v, i) => (
        <View
          key={i}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {
            switchTab({
              url: getNavUrl(v.pagePath as PageListName),
            });
          }}
          id={"tabItem_" + i}
        >
          <View
            style={{
              width: toRpx(46),
              height: toRpx(46),
              borderRadius: toRpx(18),
              backgroundColor:
                currentPagePath == v.pagePath
                  ? Theme.baseColor
                  : mode == "light"
                  ? "#fff"
                  : "#03174D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.5s",
            }}
          >
            <IconFont
              name={v.iconName!}
              size={44}
              color={
                currentPagePath == v.pagePath
                  ? "#fff"
                  : "#A0A3B1"
              }
            />
          </View>

          <View
            textAlign="center"
            color={
              currentPagePath == v.pagePath
                ? mode == "light"
                  ? Theme.baseColor
                  : "#E6E7F2"
                : mode == "light"
                ? "#A0A3B1"
                : "#98A1BD"
            }
            style={{
              fontSize: toRpx(14),
              lineHeight: "108.1%",
              marginBottom: toRpx(5),
              marginTop: toRpx(5),
              transition: "all 0.8s",
            }}
          >
            {v.text}
          </View>
        </View>
      ))}
    </View>
  );
}
