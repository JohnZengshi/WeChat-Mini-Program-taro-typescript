/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-25 10:31:11
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/pages/index/index.tsx
 */
import Taro, {
  createSelectorQuery,
  navigateTo,
  nextTick,
} from "@tarojs/taro";
import { View } from "@fower/taro";
import AppNavBar from "@/components/AppNavBar";
import { CSSProperties, useEffect, useState } from "react";
import CommonLogo from "@/components/CommonLogo";
import {
  Image,
  ScrollView,
  Text,
} from "@tarojs/components";
import { getNavUrl, toRpx } from "../../utils/index";
import TabbarPageWarp from "@/components/TabbarPageWarp";
import CommonBtn from "@/components/CommonBtn";
import { ViewProps } from "@tarojs/components/types/View";
import IconFont from "@/components/iconfont";
import { ThemeStyle } from "../../constants/theme";
import { PageListName } from "@/app.config";
export default function Home() {
  const [refresherTriggered, setRefresherTriggered] =
    useState(false);
  useEffect(() => {
    return () => {};
  }, []);

  type CardBaseTextProps = {
    text: { color: string; value: string }[];
  } & ViewProps;
  const CardBaseText = (props: CardBaseTextProps) => {
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
  };
  type BaseCardProps = {
    backgroundColor: string;
    text: [string, string, string];
    mode: "light" | "dark";
    bg: any;
    onClickStart?: () => void;
  };
  const BaseCard = (props: BaseCardProps) => {
    return (
      <View
        style={{
          width: toRpx(177),
          height: toRpx(210),
          borderRadius: toRpx(10),
          backgroundColor: props.backgroundColor,
          position: "relative",
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
            flexDirection: "column",
            paddingLeft: toRpx(15),
            paddingRight: toRpx(15),
          }}
        >
          <CardBaseText
            style={{ marginTop: toRpx(85) }}
            text={[
              {
                color:
                  props.mode == "light"
                    ? "#FFECCC"
                    : "#3F414E",
                value: props.text[0],
              },
              {
                color:
                  props.mode == "light"
                    ? "#F7E8D0"
                    : "#524F53",
                value: props.text[1],
              },
            ]}
          />
          <View
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: toRpx(35.86),
            }}
          >
            <Text
              style={{
                fontSize: toRpx(11),
                lineHeight: toRpx(11.89),
                fontWeight: 400,
                color:
                  props.mode == "light"
                    ? "#EBEAEC"
                    : "#524F53",
              }}
            >
              {props.text[2]}
            </Text>
            <CommonBtn
              text="START"
              onClick={props.onClickStart}
              customStyle={{
                width: toRpx(70),
                height: toRpx(35),
                lineHeight: toRpx(35),
                fontSize: toRpx(12),
                ...(props.mode == "light"
                  ? {
                      backgroundColor: "#EBEAEC",
                      color: "#3F414E",
                      borderColor: "#EBEAEC",
                    }
                  : {
                      backgroundColor: "#3F414E",
                      color: "#FEFFFE",
                      borderColor: "#3F414E",
                    }),
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  type RecomendedCardProps = {
    backgroundColor: string;
    bg: string;
    text: [string, string];
  };
  const RecomendedCard = (props: RecomendedCardProps) => {
    return (
      <View
        style={{
          display: "inline-block",
          marginRight: toRpx(20),
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              backgroundColor: props.backgroundColor,
              borderRadius: toRpx(10),
              width: toRpx(162),
              height: toRpx(113),
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              src={props.bg}
            />
          </View>
          <Text
            style={{
              fontSize: toRpx(18),
              fontWeight: 700,
              lineHeight: toRpx(19.46),
              color: "#3F414E",
              marginTop: toRpx(10.5),
            }}
          >
            {props.text[0]}
          </Text>
          <Text
            style={{
              fontSize: toRpx(11),
              fontWeight: 400,
              lineHeight: toRpx(11.89),
              color: "#A1A4B2",
              marginTop: toRpx(6),
            }}
          >
            {props.text[1]}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <TabbarPageWarp
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <AppNavBar />
        <ScrollView
          scrollY
          style={{ height: 0, flex: "auto" }}
          refresherEnabled
          refresherTriggered={refresherTriggered}
          onRefresherRefresh={() => {
            console.log("onRefresherRefresh");
            setRefresherTriggered(true);
            setTimeout(() => {
              setRefresherTriggered(false);
            }, 5000);
          }}
        >
          <View style={{ ...ThemeStyle.contentStyle }}>
            <CommonLogo mode="light" />
            <Text
              style={{
                alignSelf: "self-start",
                fontSize: toRpx(28),
                fontWeight: 700,
                lineHeight: toRpx(30.27),
                color: "#3F414E",
                marginTop: toRpx(40),
              }}
            >
              Good Morning, Afsar
            </Text>
            <Text
              style={{
                alignSelf: "self-start",
                fontSize: toRpx(20),
                fontWeight: 300,
                lineHeight: toRpx(21.62),
                color: "#A1A4B2",
                marginTop: toRpx(10),
              }}
            >
              We Wish you have a good day
            </Text>
            <View
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: toRpx(30),
              }}
            >
              <BaseCard
                backgroundColor="#8E97FD"
                bg={require("../../assets/images/Course.png")}
                text={["Basics", "COURSE", "3-10 MIN"]}
                mode="light"
                onClickStart={() =>
                  navigateTo({
                    url: getNavUrl(
                      PageListName.CourseDetail
                    ),
                  })
                }
              />
              <BaseCard
                backgroundColor="#FFC97E"
                bg={require("../../assets/images/Music.png")}
                text={["Relaxation", "MUSIC", "3-10 MIN"]}
                mode="dark"
              />
            </View>
            <View
              style={{
                width: "100%",
                height: toRpx(95),
                borderRadius: toRpx(10),
                backgroundColor: "#333242",
                marginTop: toRpx(10),
                position: "relative",
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
                src={require("../../assets/images/DailyThought.png")}
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
                      color: "#fff",
                      value: "Daily Thought",
                    },
                    {
                      color: "#EBEAEC",
                      value: "MEDITATION 3-10 MIN",
                    },
                  ]}
                />
                <IconFont
                  name="play-circle"
                  size={80}
                  color="#fff"
                />
              </View>
            </View>
            <Text
              style={{
                fontSize: toRpx(24),
                fontWeight: 400,
                color: "#3F414E",
                alignSelf: "flex-start",
                marginTop: toRpx(40),
              }}
            >
              Recomended for you
            </Text>
            <ScrollView
              style={{
                height: toRpx(161),
                whiteSpace: "nowrap",
                marginTop: toRpx(20),
                paddingBottom: toRpx(20),
              }}
              scrollX
              scrollWithAnimation
            >
              <RecomendedCard
                text={["Focus", "MEDITATION 3-10 MIN"]}
                backgroundColor="#AFDBC5"
                bg={require("../../assets/images/Focus.png")}
              />
              <RecomendedCard
                text={["Happiness", "MEDITATION 3-10 MIN"]}
                backgroundColor="#FEDEA5"
                bg={require("../../assets/images/Happiness.png")}
              />
              <RecomendedCard
                text={["Focus", "MEDITATION 3-10 MIN"]}
                backgroundColor="#AFDBC5"
                bg={require("../../assets/images/Focus.png")}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </TabbarPageWarp>
    </>
  );
}
