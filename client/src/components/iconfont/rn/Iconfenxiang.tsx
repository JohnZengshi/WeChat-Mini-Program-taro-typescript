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

const Iconfenxiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M803.2 380.8c-150.4 3.2-256 54.4-326.4 144-25.6 32-44.8 64-57.6 99.2-3.2 12.8-9.6 22.4-9.6 32 0 6.4-3.2 9.6-3.2 9.6-6.4 25.6-28.8 41.6-54.4 35.2-25.6-6.4-41.6-28.8-35.2-54.4 3.2-12.8 9.6-32 19.2-57.6 16-41.6 41.6-83.2 70.4-121.6 86.4-105.6 214.4-172.8 384-176l-96-102.4c-16-19.2-16-48 3.2-64s48-16 64 3.2l172.8 185.6c16 16 16 44.8 0 60.8l-153.6 169.6c-16 19.2-44.8 19.2-64 3.2-19.2-16-19.2-44.8-3.2-64l89.6-102.4z m64-12.8s0-3.2 0 0z m-697.6-89.6v508.8c0 32 25.6 54.4 54.4 54.4h534.4c32 0 54.4-25.6 54.4-54.4v-150.4c0-12.8 9.6-22.4 22.4-22.4h44.8c12.8 0 22.4 9.6 22.4 22.4v185.6c0 60.8-35.2 112-112 112h-604.8c-60.8 0-112-35.2-112-112v-579.2c0-76.8 51.2-112 112-112h256c12.8 0 19.2 9.6 19.2 19.2v48c0 12.8-9.6 19.2-19.2 19.2h-220.8c-32 0-54.4 28.8-54.4 60.8h3.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconfenxiang.defaultProps = {
  size: 18,
};

export default Iconfenxiang;
