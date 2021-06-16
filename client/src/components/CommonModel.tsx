import { BaseEventOrig } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState, useEffect, useMemo } from "react";
import { AtModal } from "taro-ui";
import { AtModalProps } from "taro-ui/types/modal";

/*
 * @Author: your name
 * @Date: 2021-06-16 10:49:20
 * @LastEditTime: 2021-06-16 11:39:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-typescript/client/src/components/CommonModel.tsx
 */
export default function useModel() {
  const [modelShow, setModelShow] = useState(false);
  const [modelProps, setModelProps] = useState<Omit<
    AtModalProps,
    "isOpened"
  > | null>(null);
  const Model = () => {
    useEffect(() => {
      console.log("modelShow", modelShow);
      return () => {};
    }, [modelShow]);
    return (
      <AtModal
        isOpened={modelShow}
        title={modelProps?.title}
        content={modelProps?.content}
        confirmText={modelProps?.confirmText}
        cancelText={modelProps?.cancelText}
        onConfirm={(event) => {
          modelProps?.onConfirm?.(event);
        }}
        onCancel={(event) => {
          setModelShow(false);
          modelProps?.onCancel?.(event);
        }}
        onClose={(event) => {
          setModelShow(false);
          modelProps?.onClose?.(event);
        }}
      />
    );
  };
  const open = (
    props: Omit<
      AtModalProps,
      keyof Pick<AtModalProps, "isOpened">
    >
  ) => {
    setModelProps(props);
    setModelShow(true);
  };
  const close = () => {
    setModelShow(false);
  };
  const comfire = (
    props: Omit<
      AtModalProps,
      keyof Pick<
        AtModalProps,
        "confirmText" | "cancelText" | "isOpened"
      >
    >
  ) => {
    return new Promise<BaseEventOrig>((reslove, reject) => {
      open({
        title: "删除",
        ...props,
        confirmText: "确定",
        cancelText: "取消",
        onConfirm: (event) => {
          reslove(event);
        },
        onCancel: (event) => {
          reject(event);
        },
      });
    });
  };
  return {
    open,
    close,
    comfire,
    Model: useMemo(() => <Model />, [modelShow]),
  };
}
