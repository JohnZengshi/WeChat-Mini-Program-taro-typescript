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

const IconicArrowdown: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 672c-6.4 0-19.2 0-25.6-6.4l-256-256c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0L512 595.2l230.4-230.4c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8l-256 256c0 6.4-12.8 6.4-19.2 6.4z"
        fill={getIconColor(color, 0, '#27231A')}
      />
    </Svg>
  );
};

IconicArrowdown.defaultProps = {
  size: 18,
};

export default IconicArrowdown;
