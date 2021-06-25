/*
 * @Author: John
 * @Date: 2021-06-22 11:15:34
 * @LastEditors: John
 * @LastEditTime: 2021-06-25 10:24:46
 */
import { getNavUrl, toRpx } from "@/utils";
import { Image, Text, View } from "@tarojs/components";
import Taro, { navigateTo } from "@tarojs/taro";
import LoginBack from "../../assets/images/LoginBack.png";
import Frame from "../../assets/images/Frame.png";
import CommonBtn from "@/components/CommonBtn";
import { ThemeStyle } from "../../constants/theme";
import { PageListName } from "../../app.config";
import BottomCommonText from "@/components/BottomCommonText";
import CommonLogo from "@/components/CommonLogo";
export default function SignInAndSignUp() {
  return (
    <>
      <Image
        src={Frame}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: toRpx(504),
        }}
      />
      <View style={ThemeStyle.autoFullPageCommonStyle}>
        <CommonLogo
          mode="light"
          style={{ marginTop: toRpx(50) }}
        />
        <Image
          style={{
            width: toRpx(332),
            height: toRpx(242),
            marginTop: toRpx(80),
          }}
          src={LoginBack}
        />
        <Text
          style={{
            fontSize: toRpx(30),
            lineHeight: toRpx(40.5),
            fontWeight: 700,
            marginTop: toRpx(131.31),
          }}
        >
          We are what we do
        </Text>
        <Text
          style={{
            fontSize: toRpx(16),
            lineHeight: toRpx(26.4),
            fontWeight: 300,
            paddingLeft: toRpx(61.5),
            paddingRight: toRpx(61.5),
            textAlign: "center",
            marginTop: toRpx(15),
          }}
        >
          Thousand of people are usign silent moon for
          smalls meditation
        </Text>
        <CommonBtn
          text="SIGN UP"
          customStyle={ThemeStyle.bigBtnStyle}
          onClick={() => {
            navigateTo({
              url: getNavUrl(PageListName.SignUp),
            });
          }}
        />
        <BottomCommonText
          baseText="ALREADY HAVE AN ACCOUNT?"
          smallText="LOG IN"
          onClick={() =>
            navigateTo({
              url: getNavUrl(PageListName.SignIn),
            })
          }
        />
      </View>
    </>
  );
}
