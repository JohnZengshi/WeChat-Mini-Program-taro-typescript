/*
 * @Author: your name
 * @Date: 2021-06-10 21:15:37
 * @LastEditTime: 2021-06-11 11:46:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/cloud/src/function/user/index.ts
 */
import cloud from "wx-server-sdk";
const env = cloud.DYNAMIC_CURRENT_ENV as unknown as string;
// 初始化 cloud
cloud.init({ env });

const db = cloud.database({ env });
const todos = db.collection("todos");
const MAX_LIMIT = 100;
exports.main = async (event: CloudFunction.Todos.Req) => {
  const getList = async (event: CloudFunction.Todos.Req) => {
    // 先取出集合记录总数
    const countResult = await todos.count();
    const total = (countResult as cloud.DB.ICountResult).total;
    // 计算需分几次取
    const batchTimes = Math.ceil(total / 100);
    // 承载所有读操作的 promise 的数组
    const tasks: Promise<cloud.DB.IQueryResult>[] = [];
    for (let i = 0; i < batchTimes; i++) {
      const promise = db
        .collection("todos")
        .skip(i * MAX_LIMIT)
        .limit(MAX_LIMIT)
        .get();
      tasks.push(promise as Promise<cloud.DB.IQueryResult>);
    }
    // 等待所有
    return (await Promise.all(tasks)).reduce((acc, cur) => {
      return {
        data: acc.data.concat(cur.data),
        errMsg: acc.errMsg,
      };
    });
  };
  const add = async (event: CloudFunction.Todos.AddParams) => {
    await todos.add({ data: event.params });
    return {
      data: event.params,
    };
  };
  const del = async (event: CloudFunction.Todos.DelParams) => {
    todos.doc(event.params._id).remove();
    return {
      data: "del ok!",
    };
  };
  switch (event.action) {
    case "getList":
      return getList(event);
    case "add":
      return add(event);
    case "del":
      return del(event);
    default:
      break;
  }
};
