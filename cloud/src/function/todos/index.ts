/*
 * @Author: your name
 * @Date: 2021-06-10 21:15:37
 * @LastEditTime: 2021-06-24 10:31:40
 * @LastEditors: John
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/cloud/src/function/user/index.ts
 */
import cloud from "wx-server-sdk";
import statusCode from "http-status-codes";
const env = cloud.DYNAMIC_CURRENT_ENV as unknown as string;
// 初始化 cloud
cloud.init({ env });

const db = cloud.database({ env });
const todos = db.collection("todos");
const MAX_LIMIT = 100;
exports.main = async (
  event: CloudFunction.BaseReq<CloudFunction.Todos.Action>
): Promise<CloudFunction.BaseRes> => {
  const getList: CloudFunction.Todos.GetList = async (params) => {
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
        .where({
          _openid: params._openid,
        } as Parameters<CloudFunction.Todos.GetList>[0])
        .skip(i * MAX_LIMIT)
        .limit(MAX_LIMIT)
        .get();
      tasks.push(promise as Promise<cloud.DB.IQueryResult>);
    }

    if (tasks.length == 0) return { code: statusCode.OK, data: [], msg: "ok" };
    // 等待所有
    const result = (await Promise.all(tasks)).reduce((acc, cur) => {
      return {
        data: acc.data.concat(cur.data),
        errMsg: acc.errMsg,
      };
    });
    return {
      code: statusCode.OK,
      data: result.data as any,
      msg: "ok",
    };
  };
  const add: CloudFunction.Todos.Add = async (params) => {
    await todos.add({ data: params });
    return {
      code: statusCode.OK,
      data: params,
      msg: "ok",
    };
  };
  const del: CloudFunction.Todos.Del = async (params) => {
    await todos.where({ _id: params._id }).remove();
    return {
      code: statusCode.OK,
      msg: "ok",
    };
  };
  if (!event.params._openid)
    return { code: statusCode.UNAUTHORIZED, msg: "openId不能为空！" };
  switch (event.action) {
    case "getList":
      return getList(event.params);
    case "add":
      return add(event.params);
    case "del":
      return del(event.params);
    default:
      return {
        code: statusCode.BAD_REQUEST,
        msg: "方法未定义",
      };
  }
};
