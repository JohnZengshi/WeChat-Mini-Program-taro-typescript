import { toRpx } from "@/utils";
import { ScrollView, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import IconFont, { IconNames } from "./iconfont";

/*
 * @Author: John
 * @Date: 2021-06-25 16:49:57
 * @LastEditors: John
 * @LastEditTime: 2021-06-25 18:26:05
 */
type IconTabProps = {
  tabList: Pick<TabItemProps, "icon" | "text">[];
  onChange?: (
    item: Pick<TabItemProps, "icon" | "text">
  ) => void;
  mode: "light" | "dark";
};
type TabItemProps = {
  mode: "light" | "dark";
  active?: boolean;
  icon: IconNames;
  text: string;
  onClick?: () => void;
};
function TabItem(props: TabItemProps) {
  return (
    <View
      style={{
        display: "inline-block",
        marginRight: toRpx(20),
      }}
      onClick={() => props.onClick?.()}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: toRpx(65),
            height: toRpx(65),
            borderRadius: toRpx(25),
            backgroundColor: props.active
              ? "#8E97FD"
              : props.mode == "light"
              ? "#A0A3B1"
              : "#586894",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "all",
            transitionDuration: "0.5s",
          }}
        >
          <IconFont
            name={props.icon}
            size={65}
            color="#fff"
          />
        </View>
        <Text
          style={{
            fontSize: toRpx(16),
            marginTop: toRpx(10),
            color: props.active
              ? props.mode == "light"
                ? "#3F414E"
                : "#E6E7F2"
              : props.mode == "light"
              ? "#A0A3B1"
              : "#98A1BD",
            transition: "all",
            transitionDuration: "0.5s",
          }}
        >
          {props.text}
        </Text>
      </View>
    </View>
  );
}
export default function IconTab(props: IconTabProps) {
  const [currentActive, setCurrentActive] = useState(0);
  return (
    <>
      <ScrollView
        style={{
          height: toRpx(92),
          whiteSpace: "nowrap",
          marginTop: toRpx(34),
        }}
        scrollX
        scrollWithAnimation
      >
        {props.tabList.map((v, i) => (
          <TabItem
            mode={props.mode}
            icon={v.icon}
            text={v.text}
            active={currentActive == i}
            onClick={() => {
              setCurrentActive(i);
              props.onChange?.(v);
            }}
          />
        ))}
      </ScrollView>
    </>
  );
}
