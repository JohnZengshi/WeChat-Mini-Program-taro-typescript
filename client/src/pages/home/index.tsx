/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-15 14:37:50
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
import { useEffect, useMemo } from "react";
import CloudDemo from "@/components/CloudDemo";
import { CloudFunctionName } from "@/constants/cloudFunction";

export default function Home() {
  const { request } = useAPI();
  const { user } = useMappedState((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    request<
      CloudFunction.Todos.Action,
      Parameters<CloudFunction.Todos.GetList>[0],
      ReturnType<CloudFunction.Todos.GetList>
    >(CloudFunctionName.Todos).then((res) => {
      console.log(res.data);
    });
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
