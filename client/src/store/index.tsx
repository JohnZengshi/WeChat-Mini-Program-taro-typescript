/*
 * @Author: your name
 * @Date: 2021-06-10 18:35:09
 * @LastEditTime: 2021-06-10 18:35:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/store/index.tsx
 */
import { createStore, Store } from "redux";
import reducer from "./reducer";
import { create } from "redux-react-hook";

export interface IState {
  lastUpdated: number;
  todos: string[];
}

export type Action =
  | {
      type: "add todo";
      todo: string;
    }
  | {
      type: "delete todo";
      index: number;
    };

export function makeStore(): Store<IState, Action> {
  return createStore(reducer, INITIAL_STATE);
}

export const INITIAL_STATE: IState = {
  lastUpdated: 0,
  todos: [
    "Make the fire!",
    "Fix the breakfast!",
    "Wash the dishes!",
    "Do the mopping!",
  ],
};

export const { StoreContext, useDispatch, useMappedState } = create<
  IState,
  Action,
  Store<IState, Action>
>();
