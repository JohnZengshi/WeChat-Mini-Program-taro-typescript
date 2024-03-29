/*
 * @Author: John
 * @Date: 2021-06-10 18:17:14
 * @LastEditors: John
 * @LastEditTime: 2021-06-25 18:26:18
 */
import CommonScrollView from "@/components/CommonScrollView";
import IconTab from "@/components/IconTab";
import PlayBoxCard from "@/components/PlayBoxCard";
import TabbarPageWarp from "@/components/TabbarPageWarp";
import { toRpx } from "@/utils";
import { Image, Text, View } from "@tarojs/components";
import Taro, { setNavigationBarColor } from "@tarojs/taro";
import { useEffect } from "react";
import { ThemeStyle } from "../../constants/theme";

/*
 * @Author: your name
 * @Date: 2021-06-10 10:08:53
 * @LastEditTime: 2021-06-24 15:57:29
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/pages/mine/index.tsx
 */
export default function Mine() {
  useEffect(() => {
    setNavigationBarColor({
      backgroundColor: "#000000",
      frontColor: "#ffffff",
    });
    return () => {};
  }, []);
  return (
    <>
      <TabbarPageWarp
        style={{
          backgroundColor: "#03174C",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: toRpx(250),
            position: "absolute",
            left: 0,
            top: 0,
          }}
          src={require("../../assets/images/SleepBg.png")}
        />
        <View
          style={{
            ...ThemeStyle.contentStyle,
          }}
        >
          <Text
            style={{
              fontSize: toRpx(28),
              lineHeight: toRpx(30),
              fontWeight: 700,
              color: "#E6E7F2",
              marginTop: toRpx(66),
            }}
          >
            Sleep Stories
          </Text>
          <Text
            style={{
              fontSize: toRpx(16),
              lineHeight: toRpx(21),
              color: "#EBEAEC",
              fontWeight: 300,
              textAlign: "center",
              marginTop: toRpx(15),
            }}
          >
            Soothing bedtime stories to help you fall into a
            deep and natural sleep
          </Text>
          <IconTab
            mode="dark"
            tabList={[
              { icon: "star", text: "All" },
              { icon: "heart-fill", text: "My" },
              { icon: "frown", text: "Anxious" },
              { icon: "reloadtime", text: "Sleep" },
              { icon: "smile", text: "Kids" },
            ]}
          />
        </View>
        <CommonScrollView
          refresherBackground="transparent"
          refresherDefaultStyle="white"
          style={{
            backgroundColor: "#03174C",
            marginTop: toRpx(30),
          }}
        >
          <PlayBoxCard
            mode="dark"
            backgroundColor="#F1DDCF"
            bg={require("../../assets/images/DailyCalm.png")}
            text={["Daily Calm", "APR 30 PAUSE PRACTICE"]}
          />
          <PlayBoxCard
            mode="dark"
            backgroundColor="#F1DDCF"
            bg={require("../../assets/images/DailyCalm.png")}
            text={["Daily Calm", "APR 30 PAUSE PRACTICE"]}
            style={{ marginTop: toRpx(30) }}
          />
          <PlayBoxCard
            mode="dark"
            backgroundColor="#F1DDCF"
            bg={require("../../assets/images/DailyCalm.png")}
            text={["Daily Calm", "APR 30 PAUSE PRACTICE"]}
            style={{ marginTop: toRpx(30) }}
          />
          <PlayBoxCard
            mode="dark"
            backgroundColor="#F1DDCF"
            bg={require("../../assets/images/DailyCalm.png")}
            text={["Daily Calm", "APR 30 PAUSE PRACTICE"]}
            style={{ marginTop: toRpx(30) }}
          />
          <PlayBoxCard
            mode="dark"
            backgroundColor="#F1DDCF"
            bg={require("../../assets/images/DailyCalm.png")}
            text={["Daily Calm", "APR 30 PAUSE PRACTICE"]}
            style={{ marginTop: toRpx(30) }}
          />
          <PlayBoxCard
            mode="dark"
            backgroundColor="#F1DDCF"
            bg={require("../../assets/images/DailyCalm.png")}
            text={["Daily Calm", "APR 30 PAUSE PRACTICE"]}
            style={{ marginTop: toRpx(30) }}
          />
          <PlayBoxCard
            mode="dark"
            backgroundColor="#F1DDCF"
            bg={require("../../assets/images/DailyCalm.png")}
            text={["Daily Calm", "APR 30 PAUSE PRACTICE"]}
            style={{
              marginTop: toRpx(30),
              marginBottom: toRpx(30),
            }}
          />
        </CommonScrollView>
      </TabbarPageWarp>
    </>
  );
}
