import { toRpx } from "@/utils";
import { View, Text, Image } from "@tarojs/components";
import { ViewProps } from "@tarojs/components/types/View";
import Taro from "@tarojs/taro";
import { CSSProperties } from "react";

/*
 * @Author: John
 * @Date: 2021-06-23 10:42:08
 * @LastEditors: John
 * @LastEditTime: 2021-06-23 15:50:38
 */
import Logo from "../assets/images/Logo.png";

type Props = { mode: "light" | "dark" } & ViewProps;
export default function CommonLogo(props: Props) {
  const TextStyle: CSSProperties = {
    fontSize: toRpx(16),
    fontWeight: 700,
    color: props.mode == "light" ? "#3F414E" : "#fff",
  };
  return (
    <View
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        opacity: 0.75,
        ...(props.style as CSSProperties),
      }}
    >
      <Text style={TextStyle}>Silent</Text>
      <Image
        style={{
          width: toRpx(30),
          height: toRpx(30),
          marginLeft: toRpx(10),
          marginRight: toRpx(10),
        }}
        src={Logo}
      />
      <Text style={TextStyle}>Moon</Text>
    </View>
  );
}
