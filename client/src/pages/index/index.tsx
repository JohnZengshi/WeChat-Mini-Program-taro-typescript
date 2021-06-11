/*
 * @Author: your name
 * @Date: 2021-06-09 22:13:36
 * @LastEditTime: 2021-06-10 23:50:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/pages/index/index.tsx
 */
import { Component } from "react";
import Taro, { navigateTo, switchTab } from "@tarojs/taro";
import "./index.scss";
import { View } from "@fower/taro";
import { AtButton } from "taro-ui";
import { PageListName } from "@/app.config";
import AppNavBar from "@/components/AppNavBar";
import { useDispatch } from "@/store";
import CloudDemo from "@/components/CloudDemo";

export default function Index() {
  const dispatch = useDispatch();
  return (
    <>
      <AppNavBar />
      <View p10 pl12 pr12 className="index">
        <AtButton
          type="primary"
          circle
          onClick={() => {
            switchTab({ url: `/${PageListName.Mine}` });
            dispatch({ type: "add todo", todo: "ni hao" });
          }}
        >
          Mine
        </AtButton>
        <CloudDemo />
      </View>
    </>
  );
}
