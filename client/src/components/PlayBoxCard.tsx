import { toRpx } from "@/utils";
import { Image, View } from "@tarojs/components";
import { ViewProps } from "@tarojs/components/types/View";
import Taro from "@tarojs/taro";
import { CSSProperties } from "react";
import IconFont from "./iconfont";
import CardBaseText from "./SmallPart/CardBaseText";

/*
 * @Author: John
 * @Date: 2021-06-25 16:15:19
 * @LastEditors: John
 * @LastEditTime: 2021-06-25 16:30:46
 */
type PlayBoxCardProps = {
  backgroundColor: string;
  bg: string;
  text: [string, string];
  mode: "light" | "dark";
} & ViewProps;
export default function PlayBoxCard(
  props: PlayBoxCardProps
) {
  return (
    <View
      {...props}
      style={{
        width: "100%",
        height: toRpx(95),
        borderRadius: toRpx(10),
        backgroundColor: props.backgroundColor,
        position: "relative",
        ...(props.style as CSSProperties),
      }}
    >
      <Image
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
        src={props.bg}
      />
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: toRpx(30),
          paddingRight: toRpx(30),
          boxSizing: "border-box",
        }}
      >
        <CardBaseText
          text={[
            {
              color:
                props.mode == "light" ? "#fff" : "#3F414E",
              value: props.text[0],
            },
            {
              color:
                props.mode == "light"
                  ? "#EBEAEC"
                  : "#5A6175",
              value: props.text[1],
            },
          ]}
        />
        <IconFont
          name="play-circle"
          size={80}
          color={props.mode == "light" ? "#fff" : "#3F414E"}
        />
      </View>
    </View>
  );
}
