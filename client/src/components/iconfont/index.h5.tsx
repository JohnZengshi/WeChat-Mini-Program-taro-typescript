/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import Taro from '@tarojs/taro';
import Icon from './h5';

export type IconNames = 'reloadtime' | 'message' | 'home' | 'sound' | 'eye-fill' | 'eyeclose-fill' | 'check' | 'arrowleft' | 'adduser' | 'deleteuser' | 'user' | 'file-add' | 'delete' | 'right' | 'arrowright' | 'unorderedlist' | 'orderedlist' | 'file-add-fill' | 'delete-fill' | 'switchuser' | 'appstoreadd' | 'rotate-right';

interface Props {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size, 424))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
