/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import Taro from '@tarojs/taro';

export type IconNames = 'adduser' | 'deleteuser' | 'user' | 'file-add' | 'delete' | 'right' | 'arrowright' | 'unorderedlist' | 'orderedlist' | 'file-add-fill' | 'delete-fill' | 'switchuser' | 'appstoreadd' | 'rotate-right';

interface Props {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  // @ts-ignore
  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
