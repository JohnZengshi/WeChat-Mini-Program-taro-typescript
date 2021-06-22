import { toRpx } from "@/utils";
import { View, Input } from "@tarojs/components";
import { InputProps } from "@tarojs/components/types/Input";
import { ViewProps } from "@tarojs/components/types/View";
import Taro from "@tarojs/taro";
import { CSSProperties } from "react";

/*
 * @Author: your name
 * @Date: 2021-06-22 16:39:01
 * @LastEditTime: 2021-06-22 17:13:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/CommonInput.tsx
 */
type Props = {
  warpProps?: ViewProps;
  inputProps?: InputProps;
  iconRight?: JSX.Element;
  iconRightClick?: () => void;
};
export default function CommonInput(props: Props) {
  return (
    <View
      style={{
        backgroundColor: "#E5E5E5",
        borderRadius: toRpx(15),
        width: "100%",
        boxSizing: "border-box",
        height: toRpx(63),
        paddingLeft: toRpx(20),
        // paddingRight: toRpx(20),
        marginBottom: toRpx(20),
        display: "flex",
        alignItems: "center",
        ...(props.warpProps?.style as CSSProperties),
      }}
    >
      <Input style={{ flex: 1 }} {...props.inputProps} />
      {props.iconRight && (
        <View
          onClick={props.iconRightClick}
          style={{
            marginLeft: "auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            paddingRight: toRpx(20),
            paddingLeft: toRpx(20),
          }}
        >
          {props.iconRight}
        </View>
      )}
    </View>
  );
}
