/*
 * @Author: your name
 * @Date: 2021-06-09 22:44:20
 * @LastEditTime: 2021-06-16 11:57:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/Login.tsx
 */

import { CloudFunctionName } from "@/constants/cloudFunction";
import { useDispatch, useMappedState } from "@/store";
import { Button, View } from "@fower/taro";
import Taro from "@tarojs/taro";
import { useEffect, useMemo, useState } from "react";
import {
  AtInput,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtSwipeAction,
} from "taro-ui";
import CommonBtn from "./CommonBtn";
import IconFont from "./iconfont";
import useAPI from "../service/index";
import useModel from "./CommonModel";
export default function CloudDemo() {
  const [showDelModal, setShowDelModal] = useState(false);
  const [delId, setDelId] = useState("");
  const { request, login } = useAPI();
  const { user, todos } = useMappedState((state) => state);
  const dispatch = useDispatch();
  const { comfire, close, Model } = useModel();
  useEffect(() => {
    return () => {};
  }, []);
  useEffect(() => {
    return () => {};
  }, [user]);

  const getTodos = () => {
    return new Promise<void>((reslove) => {
      request<
        CloudFunction.Todos.Action,
        Parameters<CloudFunction.Todos.GetList>,
        ReturnType<CloudFunction.Todos.GetList>
      >(CloudFunctionName.Todos, {
        action: "getList",
      }).then((res) => {
        console.log(res);
        dispatch({
          type: "update todo",
          todos: res.data || [],
        });
        reslove();
      });
    });
  };
  const addTodos = () => {
    request<
      CloudFunction.Todos.Action,
      Parameters<CloudFunction.Todos.Add>[0],
      ReturnType<CloudFunction.Todos.Add>
    >(CloudFunctionName.Todos, {
      action: "add",
      params: {
        description: "哈哈哈",
        done: false,
        due: new Date(),
        tags: ["123"],
      },
    }).then((res) => {
      dispatch({
        type: "add todo",
        todo: [res.data!],
      });
    });
  };
  const delTodos = (id: string) => {
    return new Promise<void>((reslove) => {
      request<
        CloudFunction.Todos.Action,
        Parameters<CloudFunction.Todos.Del>[0],
        ReturnType<CloudFunction.Todos.Del>
      >(CloudFunctionName.Todos, {
        action: "del",
        params: {
          _id: id,
        },
      }).then((res) => {
        console.log(res);
        reslove();
      });
    });
  };

  return (
    <View pt12 overflow className="index">
      <View mb12>
        <CommonBtn
          customStyle={{ display: "inline-block" }}
          text="获取用户信息"
          onClick={login}
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
      {todos.length > 0 && (
        <View mb12>
          {todos.map((v, i) => (
            <AtSwipeAction
              maxDistance={100}
              areaWidth={250}
              key={v._id}
              options={[{ text: "删除" }]}
              onClick={(item, index, event) => {
                if (index == 0) {
                  comfire({
                    title: "删除todos",
                    content: "确定删除todo吗？",
                  })
                    .then(async (event) => {
                      console.log("确定删除", i);
                      await delTodos(todos[i]._id!);
                      await getTodos();
                      close();
                    })
                    .catch((event) => {
                      console.log("取消删除", event);
                    });
                }
              }}
            >
              <View
                style={{
                  height: 50,
                  lineHeight: "100rpx",
                  borderBottomWidth: 5,
                  borderColor: "gray",
                }}
              >
                {v.description}
              </View>
            </AtSwipeAction>
          ))}
        </View>
      )}
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
      {Model}
    </View>
  );
}
