/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-16 10:51:20
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
import useModel from "@/components/CommonModel";

export default function Home() {
  const { request } = useAPI();
  const { user } = useMappedState((state) => state);
  const dispatch = useDispatch();
  const { open, Model } = useModel();

  useEffect(() => {
    request<
      CloudFunction.Todos.Action,
      Parameters<CloudFunction.Todos.GetList>[0],
      ReturnType<CloudFunction.Todos.GetList>
    >(CloudFunctionName.Todos, { action: "getList" }).then(
      (res) => {
        console.log(res.data);
        dispatch({
          type: "update todo",
          todos: res.data!,
        });
      }
    );
    return () => {};
  }, []);

  return (
    <>
      <AppNavBar />
      {Model}
      <View p10 pl12 pr12 className="index">
        <CommonBtn
          customStyle={{ display: "inline-block" }}
          text="Mine"
          onClick={() => {
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
