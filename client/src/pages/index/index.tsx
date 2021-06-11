/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-11 21:03:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/pages/index/index.tsx
 */
import Taro, { switchTab } from "@tarojs/taro";
import "./index.scss";
import { Text, View } from "@fower/taro";
import { PageListName } from "@/app.config";
import AppNavBar from "@/components/AppNavBar";
import { useDispatch, useMappedState } from "@/store";
import CommonBtn from "@/components/CommonBtn";
import IconFont from "@/components/iconfont";
import useAPI from "../../service/index";
import { useEffect } from "react";
import CloudDemo from "@/components/CloudDemo";

export default function Index() {
  const { login } = useAPI();
  const { todos } = useMappedState((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    login();
    return () => {};
  }, []);
  return (
    <>
      <AppNavBar />
      <View p10 pl12 pr12 className="index">
        <CommonBtn
          customStyle={{ display: "inline-block" }}
          text="Mine"
          onClick={() => {
            dispatch({ type: "add todo", todo: "123" });
            switchTab({ url: `/${PageListName.Mine}` });
          }}
          iconSlot={
            <IconFont
              name="arrowright"
              size={60}
              color="#ffffff"
            />
          }
        />
        <CloudDemo />
      </View>
    </>
  );
}
