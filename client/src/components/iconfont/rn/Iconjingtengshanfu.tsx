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

const Iconjingtengshanfu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#EC5F51')}
      />
      <Path
        d="M656.749714 193.828571L345.478095 467.382857l111.006476 29.744762-89.234285 333.04381L678.521905 556.617143l-111.006476-29.744762 89.234285-333.04381z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconjingtengshanfu.defaultProps = {
  size: 18,
};

export default Iconjingtengshanfu;
