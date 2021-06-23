import { Image, Text, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Theme, ThemeStyle } from "../../constants/theme";
import Group6800 from "../../assets/images/Group6800.png";
import { toRpx } from "../../utils/index";
import AppNavBar from "@/components/AppNavBar";
import CommonBtn from "@/components/CommonBtn";
import IconFont from "@/components/iconfont";
import CommonInput from "@/components/CommonInput";
import { useState } from "react";
import CommonCheckBox from "../../components/CheckBox/commom";
export default function SignUp() {
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
          Create your account
        </Text>
        <CommonInput
          warpProps={{ style: { marginTop: toRpx(33) } }}
          inputProps={{ placeholder: "User name" }}
          iconRight={
            <IconFont
              name="check"
              color="#6CB28E"
              size={40}
            />
          }
        />
        <CommonInput
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
        <View
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: toRpx(24.4),
            marginBottom: toRpx(33.19),
          }}
        >
          <Text
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: toRpx(14),
              lineHeight: toRpx(15.13),
              color: "#A1A4B2",
            }}
          >
            i have read the{" "}
            <Text style={{ color: Theme.baseColor }}>
              Privace Policy
            </Text>
          </Text>
          <CommonCheckBox />
        </View>
        <CommonBtn
          text="GET STARTED"
          customStyle={ThemeStyle.bigBtnStyle}
          onClick={() => {}}
        />
      </View>
    </>
  );
}
