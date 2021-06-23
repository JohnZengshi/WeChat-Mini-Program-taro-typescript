/*
 * @Author: your name
 * @Date: 2021-06-22 17:52:33
 * @LastEditTime: 2021-06-23 11:20:57
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/pages/SignIn/index.tsx
 */
import AppNavBar from "@/components/AppNavBar";
import CommonBtn from "@/components/CommonBtn";
import CommonInput from "@/components/CommonInput";
import IconFont from "@/components/iconfont";
import { getNavUrl, toRpx } from "@/utils";
import {
  Checkbox,
  Image,
  Text,
  View,
} from "@tarojs/components";
import Taro, { navigateTo, redirectTo } from "@tarojs/taro";
import { useState } from "react";
import { Theme, ThemeStyle } from "../../constants/theme";
import Group6800 from "../../assets/images/Group6800.png";
import { PageListName } from "@/app.config";
import BottomCommonText from "@/components/BottomCommonText";
export default function SignIn() {
  const [seePassword, setSeePassword] = useState(false);
  return (
    <>
      <AppNavBar />
      <Image
        style={{
          width: "100%",
          height: toRpx(300),
          position: "absolute",
          left: 0,
          top: 0,
        }}
        src={Group6800}
      />
      <View style={ThemeStyle.pageCommonStyle}>
        <Text
          style={{
            fontSize: toRpx(28),
            marginTop: toRpx(28.4),
            fontWeight: 700,
          }}
        >
          Welcome Back!
        </Text>
        <CommonInput
          warpProps={{ style: { marginTop: toRpx(33) } }}
          inputProps={{ placeholder: "Email address" }}
          iconRight={
            <IconFont
              name="check"
              color="#6CB28E"
              size={40}
            />
          }
        />
        <CommonInput
          inputProps={{
            placeholder: "Password",
            password: seePassword,
          }}
          iconRight={
            <IconFont
              name={
                seePassword ? "eyeclose-fill" : "eye-fill"
              }
              size={40}
            />
          }
          iconRightClick={() =>
            setSeePassword(!seePassword)
          }
        />
        <CommonBtn
          text="LOG IN"
          customStyle={ThemeStyle.bigBtnStyle}
          onClick={() => {
            redirectTo({
              url: getNavUrl(PageListName.Welcome),
            });
          }}
        />
        <BottomCommonText
          baseText="ALREADY HAVE AN ACCOUNT?"
          smallText="SIGN UP"
          onClick={() =>
            navigateTo({
              url: getNavUrl(PageListName.SignUp),
            })
          }
        />
      </View>
    </>
  );
}
