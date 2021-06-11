/*
 * @Author: your name
 * @Date: 2021-06-09 22:44:20
 * @LastEditTime: 2021-06-11 18:22:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/Login.tsx
 */

import { CloudFunctionName } from "@/constants/cloudFunction";
import APIrequest from "@/service";
import { useDispatch, useMappedState } from "@/store";
import { Button, View } from "@fower/taro";
import Taro from "@tarojs/taro";
import { useEffect, useMemo, useState } from "react";
import {
  AtInput,
  AtModal,
  AtModalAction,
  AtModalContent,
} from "taro-ui";
import CommonBtn from "./CommonBtn";
import IconFont from "./iconfont";
import useAPI from "../service/index";

export default function CloudDemo() {
  const [showDelModal, setShowDelModal] = useState(false);
  const [delId, setDelId] = useState("");
  const dispatch = useDispatch();
  const { request } = useAPI();
  const { user } = useMappedState((state) => state);
  useEffect(() => {
    console.log("user", user);
    return () => {};
  }, [user]);
  const getLogin = () => {
    request<
      CloudFunction.User.Action,
      any,
      ReturnType<
        CloudFunction.User.Login<ICloud.BaseWXContext>
      >
    >(CloudFunctionName.User, {
      action: "login",
    }).then((res) => {
      dispatch({
        type: "update user data",
        user: res.data || null,
      });
    });
  };
  const getTodos = () => {
    request<
      CloudFunction.Todos.Action,
      Parameters<CloudFunction.Todos.GetList>,
      ReturnType<CloudFunction.Todos.GetList>
    >(CloudFunctionName.Todos, {
      action: "getList",
    }).then((res) => console.log(res));
  };
  const addTodos = () => {
    request<
      CloudFunction.Todos.Action,
      Parameters<CloudFunction.Todos.Add>[0],
      ReturnType<CloudFunction.Todos.Add>
    >(CloudFunctionName.Todos, {
      action: "add",
      params: {
        _openid: "",
        description: "哈哈哈",
        done: false,
        due: new Date(),
        tags: ["123"],
      },
    }).then((res) => console.log(res));
  };
  const delTodos = async (id: string) => {
    request<
      CloudFunction.Todos.Action,
      Parameters<CloudFunction.Todos.Del>[0],
      ReturnType<CloudFunction.Todos.Del>
    >(CloudFunctionName.Todos, {
      action: "del",
      params: {
        _openid: "",
        _id: id,
      },
    }).then((res) => console.log(res));
  };

  return (
    <View pt12 overflow className="index">
      <View mb12>
        <CommonBtn
          customStyle={{ display: "inline-block" }}
          text="获取用户信息"
          onClick={getLogin}
          iconSlot={
            <IconFont
              size={60}
              name="user"
              color="#ffffff"
            />
          }
        />
      </View>
      <View mb12>
        <CommonBtn
          customStyle={{ display: "inline-block" }}
          text="获取todos"
          onClick={getTodos}
          iconSlot={
            <IconFont
              size={60}
              name="unorderedlist"
              color="#ffffff"
            />
          }
        />
      </View>
      <View mb12>
        <CommonBtn
          customStyle={{ display: "inline-block" }}
          text="新增todos"
          onClick={addTodos}
          iconSlot={
            <IconFont
              size={60}
              name="file-add"
              color="#ffffff"
            />
          }
        />
      </View>
      <View mb12>
        <CommonBtn
          customStyle={{ display: "inline-block" }}
          text="删除todos"
          onClick={() => setShowDelModal(true)}
          iconSlot={
            <IconFont
              size={60}
              name="delete"
              color="#ffffff"
            />
          }
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
