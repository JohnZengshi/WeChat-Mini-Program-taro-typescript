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

const IconicXuanzhong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M416 768c-19.2 0-32-6.4-44.8-19.2L211.2 588.8c-25.6-25.6-25.6-64 0-89.6s64-25.6 89.6 0l115.2 115.2 339.2-339.2c25.6-25.6 64-25.6 89.6 0s25.6 64 0 89.6l-384 384c-12.8 12.8-25.6 19.2-44.8 19.2z"
        fill={getIconColor(color, 0, '#09BB07')}
      />
    </Svg>
  );
};

IconicXuanzhong.defaultProps = {
  size: 18,
};

export default IconicXuanzhong;
