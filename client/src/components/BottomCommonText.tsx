import { PageListName } from "@/app.config";
import { Theme } from "@/constants/theme";
import { toRpx, getNavUrl } from "@/utils";
import { View, Text } from "@tarojs/components";
import Taro, { navigateTo } from "@tarojs/taro";

/*
 * @Author: your name
 * @Date: 2021-06-22 18:10:12
 * @LastEditTime: 2021-06-22 18:20:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/BottomCommonText.tsx
 */
type Props = {
  baseText: string;
  smallText: string;
  onClick?: () => void;
};
export default function BottomCommonText(props: Props) {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: toRpx(14),
        paddingBottom: "env(safe-area-inset-bottom)",
        fontWeight: 300,
        position: "absolute",
        bottom: toRpx(0),
      }}
    >
      <Text>{props.baseText} </Text>
      <Text
        onClick={props.onClick}
        style={{ color: Theme.baseColor }}
      >
        {props.smallText}
      </Text>
    </View>
  );
}
