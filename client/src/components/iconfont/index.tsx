/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'reloadtime' | 'message' | 'home' | 'sound' | 'eye-fill' | 'eyeclose-fill' | 'check' | 'arrowleft' | 'adduser' | 'deleteuser' | 'user' | 'file-add' | 'delete' | 'right' | 'arrowright' | 'unorderedlist' | 'orderedlist' | 'file-add-fill' | 'delete-fill' | 'switchuser' | 'appstoreadd' | 'rotate-right';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
