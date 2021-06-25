import { ThemeStyle } from "@/constants/theme";
import { toRpx } from "@/utils";
import {
  Image,
  ScrollView,
  View,
} from "@tarojs/components";
import { ScrollViewProps } from "@tarojs/components/types/ScrollView";
import Taro from "@tarojs/taro";
import { CSSProperties, ReactNode, useState } from "react";
import TabbarPageWarp from "./TabbarPageWarp";

/*
 * @Author: John
 * @Date: 2021-06-25 16:33:02
 * @LastEditors: John
 * @LastEditTime: 2021-06-25 17:23:41
 */
export default function CommonScrollView(
  props: {
    children: ReactNode;
    scrollBg?: JSX.Element;
  } & ScrollViewProps
) {
  const [refresherTriggered, setRefresherTriggered] =
    useState(false);
  return (
    <>
      {props.scrollBg}

      <ScrollView
        {...props}
        scrollY
        style={{
          height: 0,
          flex: "auto",

          ...(props.style as CSSProperties),
        }}
        refresherEnabled
        refresherTriggered={refresherTriggered}
        onRefresherRefresh={() => {
          console.log("onRefresherRefresh");
          setRefresherTriggered(true);
          setTimeout(() => {
            setRefresherTriggered(false);
          }, 2000);
        }}
      >
        <View style={{ ...ThemeStyle.contentStyle }}>
          {props.children}
        </View>
      </ScrollView>
    </>
  );
}
