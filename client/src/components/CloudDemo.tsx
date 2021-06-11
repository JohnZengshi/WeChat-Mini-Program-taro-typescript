/*
 * @Author: your name
 * @Date: 2021-06-09 22:44:20
 * @LastEditTime: 2021-06-11 14:27:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/Login.tsx
 */

import { CloudFunctionName } from "@/constants/cloudFunction";
import { Button, View } from "@fower/taro";
import Taro, { cloud } from "@tarojs/taro";
import { useMemo, useState } from "react";
import { AtInput, AtModal, AtModalAction, AtModalContent } from "taro-ui";
import CommonBtn from "./CommonBtn";
import IconFont from "./iconfont";

export default function CloudDemo() {
  const [showDelModal, setShowDelModal] = useState(false);
  const [delId, setDelId] = useState("");
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
  const delTodos = async (id: string) => {
    cloud
      .callFunction({
        name: CloudFunctionName.Todos,
        data: {
          action: "del",
          params: {
            _id: id,
          },
        } as CloudFunction.Todos.DelParams,
      })
      .then((res) => {
        console.log(res.result as CloudFunction.Todos.Del["Res"]);
        return;
      });
  };

  return (
    <View pt12 overflow className="index">
      <View mb12>
        <CommonBtn
          text="获取用户信息"
          onClick={getLogin}
          iconSlot={<IconFont size={60} name="user" color="#ffffff" />}
        />
      </View>
      <View mb12>
        <CommonBtn
          text="获取todos"
          onClick={getTodos}
          iconSlot={<IconFont size={60} name="unorderedlist" color="#ffffff" />}
        />
      </View>
      <View mb12>
        <CommonBtn
          text="新增todos"
          onClick={addTodos}
          iconSlot={<IconFont size={60} name="file-add" color="#ffffff" />}
        />
      </View>
      <View mb12>
        <CommonBtn
          text="删除todos"
          onClick={() => setShowDelModal(true)}
          iconSlot={<IconFont size={60} name="delete" color="#ffffff" />}
        />
      </View>
      {useMemo(
        () => (
          <AtModal
            isOpened={showDelModal}
            onClose={() => setShowDelModal(false)}
          >
            <AtModalContent>
              <AtInput
                name="1"
                value={delId}
                onChange={(value) => {
                  console.log("value", value);
                  setDelId(`${value}`);
                }}
                placeholder="输入id"
              ></AtInput>
            </AtModalContent>
            <AtModalAction>
              <Button
                onClick={() => {
                  delTodos(delId).then(() => {
                    setShowDelModal(false);
                  });
                }}
              >
                确定
              </Button>
            </AtModalAction>
          </AtModal>
        ),
        [showDelModal, delId]
      )}
    </View>
  );
}
