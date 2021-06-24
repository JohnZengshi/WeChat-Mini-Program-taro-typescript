/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-24 11:03:27
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/pages/index/index.tsx
 */
import Taro, {
  createSelectorQuery,
  getCurrentInstance,
  nextTick,
  switchTab,
} from "@tarojs/taro";
import { Text, View } from "@fower/taro";
import { PageListName } from "@/app.config";
import AppNavBar from "@/components/AppNavBar";
import { useDispatch, useMappedState } from "@/store";
import CommonBtn from "@/components/CommonBtn";
import IconFont from "@/components/iconfont";
import useAPI from "../../service/index";
import { useEffect, useLayoutEffect, useMemo } from "react";
import CloudDemo from "@/components/CloudDemo";
import { CloudFunctionName } from "@/constants/cloudFunction";
import useModel from "@/components/CommonModel";
import { getNavUrl } from "../../utils/index";
import { ThemeStyle } from "@/constants/theme";

export default function Home() {
  const { user } = useMappedState((state) => state);
  const dispatch = useDispatch();
  const { request } = useAPI();

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
    nextTick(() => {
      createSelectorQuery()
        .select("#Home")
        .boundingClientRect()
        .exec((res) => {
          console.log("Home", res);
        });
    });

    return () => {};
  }, []);

  return (
    <>
      <AppNavBar />
      {Model}
      <View style={ThemeStyle.pageCommonStyle} id="Home">
        <CommonBtn
          customStyle={{
            ...ThemeStyle.bigBtnStyle,
            width: "auto",
            display: "inline-block",
          }}
          text="Mine"
          onClick={() => {
            switchTab({
              url: getNavUrl(PageListName.Mine),
            });
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
