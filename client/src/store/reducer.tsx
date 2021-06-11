/*
 * @Author: your name
 * @Date: 2021-06-10 18:35:25
 * @LastEditTime: 2021-06-11 18:22:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/store/reducer.tsx
 */
import { Action, INITIAL_STATE, IState } from "./index";

export default function reducer(
  state: IState = INITIAL_STATE,
  action: Action
): IState {
  switch (action.type) {
    case "add todo": {
      return {
        ...state,
        lastUpdated: Date.now(),
        todos: state.todos.concat(action.todo),
      };
    }

    case "delete todo": {
      const todos = state.todos.slice();
      todos.splice(action.index, 1);
      return { ...state, lastUpdated: Date.now(), todos };
    }

    case "update user data": {
      return {
        ...state,
        user: action.user,
      };
    }

    default:
      return state;
  }
}
