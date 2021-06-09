/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const Iconzhifuchenggong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <Path
        d="M448 672c-9.6 0-16-3.2-22.4-9.6l-128-128c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l105.6 105.6 233.6-233.6c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8l-256 256c-6.4 6.4-12.8 9.6-22.4 9.6z"
        fill={getIconColor(color, 1, '#27231A')}
      />
    </Svg>
  );
};

Iconzhifuchenggong.defaultProps = {
  size: 18,
};

export default Iconzhifuchenggong;
