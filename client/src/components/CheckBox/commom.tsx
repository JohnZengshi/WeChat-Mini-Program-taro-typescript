import { Theme } from "@/constants/theme";
import { toRpx } from "@/utils";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import IconFont from "../iconfont";

/*
 * @Author: your name
 * @Date: 2021-06-22 22:11:53
 * @LastEditTime: 2021-06-22 22:13:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/CheckBox/commom.tsx
 */
export default function CommonCheckBox() {
  const [check, setCheck] = useState(false);

  return (
    <View
      onClick={() => setCheck(!check)}
      style={{
        width: toRpx(25),
        height: toRpx(25),
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#A1A4B2",
        borderRadius: toRpx(4),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {check && (
        <IconFont
          name="check"
          size={40}
          color={Theme.baseColor}
        />
      )}
    </View>
  );
}
