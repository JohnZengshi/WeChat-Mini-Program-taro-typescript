import AppNavBar from "@/components/AppNavBar";
import IconFont from "@/components/iconfont";
import { Image, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { AtTabs, AtTabsPane } from "taro-ui";
import { ThemeStyle, Theme } from "../../constants/theme";
import { toRpx } from "../../utils/index";
import "./index.scss";
/*
 * @Author: John
 * @Date: 2021-06-25 10:26:58
 * @LastEditors: John
 * @LastEditTime: 2021-06-25 13:58:19
 */
export default function CourseDetail() {
  const [currentTab, setCurrentTab] = useState(0);

  const VoiceListItem = () => {
    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          height: toRpx(80),
          borderBottomWidth: toRpx(1),
          borderBottomStyle: "solid",
          borderBottomColor: "rgba(173, 184, 217, 0.15)",
        }}
      >
        <IconFont
          name="play-circle"
          size={80}
          color={Theme.baseColor}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: toRpx(20),
          }}
        >
          <Text
            style={{
              fontSize: toRpx(16),
              lineHeight: toRpx(17),
              fontWeight: 400,
            }}
          >
            Focus Attention
          </Text>
          <Text
            style={{
              fontSize: toRpx(11),
              color: "#A1A4B2",
              marginTop: toRpx(6),
            }}
          >
            10 MIN
          </Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <AppNavBar />
      <View
        style={{
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: toRpx(288),
          }}
          src={require("../../assets/images/CrouseDetailTopBg.png")}
        />
        <View
          style={{
            ...ThemeStyle.contentStyle,
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: toRpx(34),
              lineHeight: toRpx(36.75),
              fontWeight: 700,
              color: "#3F414E",
              marginTop: toRpx(30),
            }}
          >
            Happy Morning
          </Text>
          <Text
            style={{
              fontSize: toRpx(14),
              lineHeight: toRpx(15.13),
              fontWeight: 400,
              color: "#A1A4B2",
              marginTop: toRpx(15),
            }}
          >
            COURSE
          </Text>
          <Text
            style={{
              fontSize: toRpx(16),
              lineHeight: toRpx(23),
              color: "#A1A4B2",
              marginTop: toRpx(20),
            }}
          >
            Ease the mind into a restful night’s sleep with
            these deep, amblent tones.
          </Text>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: toRpx(30),
            }}
          >
            <View style={{ marginRight: toRpx(10) }}>
              <IconFont
                name="heart-fill"
                size={40}
                color="#FF84A2"
              />
            </View>

            <Text
              style={{
                fontSize: toRpx(14),
                lineHeight: toRpx(15),
                color: "#A1A4B2",
              }}
            >
              24.234 Favorits
            </Text>
            <View
              style={{
                marginRight: toRpx(10),
                marginLeft: toRpx(50),
              }}
            >
              <IconFont
                name="customerservice-fill"
                size={40}
                color="#7FD2F2"
                style={{ marginRight: toRpx(10) }}
              />
            </View>

            <Text
              style={{
                fontSize: toRpx(14),
                lineHeight: toRpx(15),
                color: "#A1A4B2",
              }}
            >
              34.234 Lestening
            </Text>
          </View>
          <Text
            style={{
              fontSize: toRpx(20),
              lineHeight: toRpx(22),
              color: "#3F414E",
              marginTop: toRpx(40),
            }}
          >
            Pick a Nnrrator
          </Text>
        </View>

        <AtTabs
          current={currentTab}
          tabList={[
            { title: "MALE VOICE" },
            { title: "FEMALE VOICE" },
          ]}
          onClick={(index, event) => {
            console.log(index, event);
            setCurrentTab(index);
          }}
        >
          <AtTabsPane
            current={currentTab}
            index={0}
            customStyle={{
              paddingLeft: toRpx(20),
              paddingRight: toRpx(20),
            }}
          >
            <VoiceListItem />
          </AtTabsPane>
          <AtTabsPane
            current={currentTab}
            index={1}
            customStyle={{
              paddingLeft: toRpx(20),
              paddingRight: toRpx(20),
            }}
          >
            <VoiceListItem />
          </AtTabsPane>
        </AtTabs>
      </View>
    </>
  );
}
