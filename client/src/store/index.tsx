/*
 * @Author: your name
 * @Date: 2021-06-10 18:35:09
 * @LastEditTime: 2021-06-24 11:59:18
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/store/index.tsx
 */
import { createStore, Store } from "redux";
import reducer from "./reducer";
import { create } from "redux-react-hook";

export interface IState {
  lastUpdated: number;
  todos: Partial<CloudFunction.Todos.listItem>[];
  user: ICloud.BaseWXContext | null;
  currentPages: WechatMiniprogram.Page.Instance<
    WechatMiniprogram.IAnyObject,
    WechatMiniprogram.IAnyObject
  >[];
}

export type Action =
  | {
      type: "add todo";
      todo: IState["todos"];
    }
  | {
      type: "update todo";
      todos: IState["todos"];
    }
  | {
      type: "delete todo";
      index: number;
    }
  | {
      type: "update user data";
      user: IState["user"];
    }
  | {
      type: "update current pages";
      currentPages: IState["currentPages"];
    };

export function makeStore(): Store<IState, Action> {
  return createStore(reducer, INITIAL_STATE);
}

export const INITIAL_STATE: IState = {
  lastUpdated: 0,
  todos: [],
  user: null,
  currentPages: [],
};

export const { StoreContext, useDispatch, useMappedState } =
  create<IState, Action, Store<IState, Action>>();
