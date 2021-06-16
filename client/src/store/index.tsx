/*
 * @Author: your name
 * @Date: 2021-06-10 18:35:09
 * @LastEditTime: 2021-06-15 15:33:52
 * @LastEditors: Please set LastEditors
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
      user: ICloud.BaseWXContext | null;
    };

export function makeStore(): Store<IState, Action> {
  return createStore(reducer, INITIAL_STATE);
}

export const INITIAL_STATE: IState = {
  lastUpdated: 0,
  todos: [],
  user: null,
};

export const { StoreContext, useDispatch, useMappedState } =
  create<IState, Action, Store<IState, Action>>();
