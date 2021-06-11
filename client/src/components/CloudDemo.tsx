/*
 * @Author: your name
 * @Date: 2021-06-09 22:44:20
 * @LastEditTime: 2021-06-11 12:05:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/Login.tsx
 */

import { CloudFunctionName } from "@/constants/cloudFunction";
import { View } from "@fower/taro";
import { Text } from "@tarojs/components";
import Taro, { cloud } from "@tarojs/taro";
import { AtButton } from "taro-ui";
import { AtButtonProps } from "taro-ui/types/button";
import IconFont from "./iconfont";

export default function CloudDemo() {
  const getLogin = () => {
    Taro.cloud
      .callFunction({
        name: CloudFunctionName.Login,
        data: {},
      })
      .then((res) => {
        console.log(res.result);
      });
  };
  const getTodos = () => {
    cloud
      .callFunction({
        name: CloudFunctionName.Todos,
        data: {
          action: "getList",
        } as CloudFunction.Todos.Req,
      })
      .then((res) => {
        console.log(res.result as CloudFunction.Todos.GetList["Res"]);
      });
  };

  const addTodos = () => {
    cloud
      .callFunction({
        name: CloudFunctionName.Todos,
        data: {
          action: "add",
          params: {
            description: "哈哈哈",
            done: false,
            due: new Date(),
            tags: ["123"],
          },
        } as CloudFunction.Todos.AddParams,
      })
      .then((res) => {
        console.log(res.result as CloudFunction.Todos.Add["Res"]);
      });
  };

  const delTodos = () => {
    cloud
      .callFunction({
        name: CloudFunctionName.Todos,
        data: {
          action: "del",
          params: {
            _id: "",
          },
        } as CloudFunction.Todos.DelParams,
      })
      .then((res) => {
        console.log(res.result as CloudFunction.Todos.Del["Res"]);
      });
  };

  const CommonBtn = (
    props: {
      iconSlot?: JSX.Element;
      text: string;
    } & AtButtonProps
  ) => {
    return (
      <AtButton {...props} type="primary" circle>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {props.iconSlot && <View mr5>{props.iconSlot}</View>}
          <Text>{props.text}</Text>
        </View>
      </AtButton>
    );
  };
  return (
    <View pl24 pr24 pt12 overflow className="index">
      <View mb12>
        <CommonBtn
          text="获取用户信息"
          onClick={getLogin}
          iconSlot={<IconFont size={80} name="weixin" />}
        />
      </View>
      <View mb12>
        <CommonBtn
          text="获取todos"
          onClick={getTodos}
          iconSlot={<IconFont size={60} name="lishidingdan" />}
        />
      </View>
      <View mb12>
        <CommonBtn
          text="新增todos"
          onClick={addTodos}
          iconSlot={<IconFont size={60} name="addToShoppingCart" />}
        />
      </View>
      <View mb12>
        <CommonBtn
          text="删除todos"
          onClick={delTodos}
          iconSlot={<IconFont size={60} name="dingwei" />}
        />
      </View>
    </View>
  );
}
