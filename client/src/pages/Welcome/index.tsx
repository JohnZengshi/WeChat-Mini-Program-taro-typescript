/*
 * @Author: John
 * @Date: 2021-06-23 10:11:11
 * @LastEditors: John
 * @LastEditTime: 2021-06-23 11:16:56
 */
import CommonLogo from "@/components/CommonLogo";
import { toRpx } from "@/utils";
import { View, Text, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { ThemeStyle, Theme } from "../../constants/theme";
import welcomeBg from "../../assets/images/welcomeBg.png";
import CommonBtn from "@/components/CommonBtn";

export default function Welcome() {
  return (
    <View
      style={{
        ...ThemeStyle.pageCommonStyle,
        backgroundColor: Theme.baseColor,
      }}
    >
      <CommonLogo
        mode="dark"
        style={{ marginTop: toRpx(50) }}
      />
      <Text
        style={{
          fontSize: toRpx(30),
          fontWeight: 700,
          color: "#FFECCC",
          marginTop: toRpx(75),
        }}
      >
        Hi Afsar, Welcome{" "}
      </Text>
      <Text
        style={{ fontSize: toRpx(30), color: "#FFECCC" }}
      >
        to Silent Moon
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: toRpx(16),
          color: "#EBEAEC",
          fontWeight: 300,
          marginTop: toRpx(15),
        }}
      >
        Explore the app, Find some peace of mind to prepare
        for meditation.
      </Text>
      <Image
        src={welcomeBg}
        style={{
          width: "100%",
          position: "absolute",
          left: 0,
          top: toRpx(351),
          height: toRpx(306),
        }}
      />

      <CommonBtn
        text="GET STARTED"
        customStyle={{
          ...ThemeStyle.bigBtnStyle,
          backgroundColor: "#EBEAEC",
          borderColor: "#EBEAEC",
          marginTop: toRpx(438),
          color: "#3F414E",
        }}
      />
    </View>
  );
}
