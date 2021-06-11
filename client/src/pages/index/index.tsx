/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-11 14:33:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/pages/index/index.tsx
 */
import Taro, { switchTab } from "@tarojs/taro";
import "./index.scss";
import { View } from "@fower/taro";
import { PageListName } from "@/app.config";
import AppNavBar from "@/components/AppNavBar";
import { useDispatch } from "@/store";
import CloudDemo from "@/components/CloudDemo";
import CommonBtn from "@/components/CommonBtn";
import IconFont from "@/components/iconfont";

export default function Index() {
  const dispatch = useDispatch();
  return (
    <>
      <AppNavBar />
      <View p10 pl12 pr12 className="index">
        <CommonBtn
          customStyle={{ display: "inline-block" }}
          text="Mine"
          onClick={() => {
            switchTab({ url: `/${PageListName.Mine}` });
            dispatch({ type: "add todo", todo: "ni hao" });
          }}
          iconSlot={<IconFont name="arrowright" size={60} color="#ffffff" />}
        />
        <CloudDemo />
      </View>
    </>
  );
}
