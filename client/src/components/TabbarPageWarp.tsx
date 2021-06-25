import { ThemeStyle } from "@/constants/theme";
import { toRpx } from "@/utils";
import { View } from "@tarojs/components";
import { ViewProps } from "@tarojs/components/types/View";
import Taro from "@tarojs/taro";
import { CSSProperties, ReactNode } from "react";

/*
 * @Author: John
 * @Date: 2021-06-24 15:54:05
 * @LastEditors: John
 * @LastEditTime: 2021-06-25 18:21:19
 */
export default function TabbarPageWarp(
  props: {
    children: ReactNode;
  } & ViewProps
) {
  return (
    <>
      <View
        {...props}
        style={{
          ...ThemeStyle.fullPageCommonStyle,
          paddingLeft: 0,
          paddingRight: 0,
          ...(props.style as CSSProperties),
        }}
      >
        {props.children}
        <View
          style={{
            width: "100%",
            height: toRpx(98),
          }}
        ></View>
      </View>
    </>
  );
}
