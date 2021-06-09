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

const IconicShangpinxuanzhong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <Path
        d="M448 691.2c-12.8 0-25.6-6.4-32-12.8l-128-128c-19.2-19.2-19.2-51.2 0-70.4s51.2-19.2 70.4 0L448 569.6l224-224c19.2-19.2 51.2-19.2 70.4 0s19.2 51.2 0 70.4l-256 256c-12.8 12.8-25.6 19.2-38.4 19.2z"
        fill={getIconColor(color, 1, '#27231A')}
      />
    </Svg>
  );
};

IconicShangpinxuanzhong.defaultProps = {
  size: 18,
};

export default IconicShangpinxuanzhong;
