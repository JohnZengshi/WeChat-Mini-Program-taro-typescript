/*
 * @Author: John
 * @Date: 2021-06-25 15:10:55
 * @LastEditors: John
 * @LastEditTime: 2021-06-25 18:26:28
 */
import { Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { toRpx } from "../../utils/index";
import PlayBoxCard from "@/components/PlayBoxCard";
import CommonScrollView from "@/components/CommonScrollView";
import IconTab from "@/components/IconTab";
import TabbarPageWarp from "@/components/TabbarPageWarp";
export default function Meditate() {
  return (
    <>
      <TabbarPageWarp>
        <CommonScrollView
          style={{
            marginTop: toRpx(66),
          }}
        >
          <Text
            style={{
              fontSize: toRpx(28),
              lineHeight: toRpx(30),
              fontWeight: 700,
            }}
          >
            Meditate
          </Text>
          <Text
            style={{
              fontSize: toRpx(16),
              lineHeight: toRpx(21),
              color: "#A0A3B1",
              fontWeight: 300,
              textAlign: "center",
              marginTop: toRpx(15),
            }}
          >
            we can learn how to recognize when our minds are
            doing their normal everyday acrobatics.
          </Text>
          <IconTab
            mode="light"
            tabList={[
              { icon: "star", text: "All" },
              { icon: "heart-fill", text: "My" },
              { icon: "frown", text: "Anxious" },
              { icon: "reloadtime", text: "Sleep" },
              { icon: "smile", text: "Kids" },
            ]}
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
