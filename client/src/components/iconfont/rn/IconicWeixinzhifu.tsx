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

const IconicWeixinzhifu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M396.8 601.6c-4.266667 0-8.533333 4.266667-12.8 4.266667-12.8 0-21.333333-4.266667-25.6-12.8v-4.266667l-81.066667-170.666667v-4.266666c0-8.533333 4.266667-12.8 12.8-12.8 4.266667 0 4.266667 0 8.533334 4.266666L392.533333 469.333333c8.533333 4.266667 12.8 8.533333 25.6 8.533334 4.266667 0 8.533333 0 12.8-4.266667l430.933334-187.733333c-76.8-89.6-204.8-149.333333-349.866667-149.333334-234.666667 0-426.666667 157.866667-426.666667 349.866667 0 106.666667 55.466667 200.533333 149.333334 264.533333 8.533333 4.266667 12.8 12.8 12.8 21.333334v8.533333c-12.8 25.6-25.6 72.533333-25.6 72.533333v12.8c0 8.533333 4.266667 12.8 12.8 12.8 4.266667 0 4.266667 0 8.533333-4.266666l93.866667-55.466667c8.533333-4.266667 12.8-8.533333 21.333333-8.533333h12.8c42.666667 12.8 89.6 21.333333 140.8 21.333333 234.666667 0 426.666667-157.866667 426.666667-349.866667 0-59.733333-17.066667-115.2-46.933334-162.133333L396.8 601.6z"
        fill={getIconColor(color, 0, '#09BB07')}
      />
    </Svg>
  );
};

IconicWeixinzhifu.defaultProps = {
  size: 18,
};

export default IconicWeixinzhifu;
