import { toRpx } from "@/utils";
import { View } from "@fower/taro";
import { Text } from "@tarojs/components";
import { ViewProps } from "@tarojs/components/types/View";
import Taro from "@tarojs/taro";
import { CSSProperties } from "react";

/*
 * @Author: John
 * @Date: 2021-06-25 16:16:58
 * @LastEditors: John
 * @LastEditTime: 2021-06-25 16:18:47
 */
type CardBaseTextProps = {
  text: { color: string; value: string }[];
} & ViewProps;
export default function CardBaseText(
  props: CardBaseTextProps
) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        ...(props.style as CSSProperties),
      }}
    >
      <Text
        style={{
          fontSize: toRpx(18),
          lineHeight: toRpx(19.46),
          fontWeight: 700,
          color: props.text[0].color,
        }}
      >
        {props.text[0].value}
      </Text>
      <Text
        style={{
          fontSize: toRpx(11),
          lineHeight: toRpx(11.89),
          fontWeight: 400,
          color: props.text[1].color,
          marginTop: toRpx(9.55),
        }}
      >
        {props.text[1].value}
      </Text>
    </View>
  );
}
