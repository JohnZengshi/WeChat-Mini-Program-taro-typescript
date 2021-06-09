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

const Icondingwei: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 96c-179.2 0-320 134.4-320 300.8 0 256 320 531.2 320 531.2s320-281.6 320-531.2c0-166.4-140.8-300.8-320-300.8z m0 384c-51.2 0-89.6-38.4-89.6-83.2 0-44.8 38.4-83.2 89.6-83.2s89.6 38.4 89.6 83.2c0 44.8-38.4 83.2-89.6 83.2z"
        fill={getIconColor(color, 0, '#27231A')}
      />
    </Svg>
  );
};

Icondingwei.defaultProps = {
  size: 18,
};

export default Icondingwei;
