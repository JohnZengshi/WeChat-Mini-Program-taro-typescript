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

const IconsortUp: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M763.659 612.78h-503.316l251.659 301.174 251.659-301.174z"
        fill={getIconColor(color, 0, '#cdcdcd')}
      />
      <Path
        d="M260.341 411.22h502.734l-251.075-301.174-251.659 301.174z"
        fill={getIconColor(color, 1, '#ffc925')}
      />
    </Svg>
  );
};

IconsortUp.defaultProps = {
  size: 18,
};

export default IconsortUp;
