import { Text, View } from "@fower/taro";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";
import { AtButtonProps } from "taro-ui/types/button";

/*
 * @Author: your name
 * @Date: 2021-06-11 13:58:57
 * @LastEditTime: 2021-06-11 14:27:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/CommonBtn.tsx
 */
export default function CommonBtn(
  props: {
    iconSlot?: JSX.Element;
    text: string;
  } & AtButtonProps
) {
  return (
    <AtButton {...props} type="primary" circle>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {props.iconSlot && <View mr5>{props.iconSlot}</View>}
        <Text>{props.text}</Text>
      </View>
    </AtButton>
  );
}
