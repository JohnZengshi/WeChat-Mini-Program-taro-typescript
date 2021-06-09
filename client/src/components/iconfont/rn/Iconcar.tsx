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

const Iconcar: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1268 1024" width={size} height={size} {...rest}>
      <Path
        d="M1043.936283 204.8c-11.780531-35.341593-46.215929-59.80885-83.369911-59.80885H309.012389c-38.060177 0-71.589381 23.561062-83.369911 59.80885L104.212389 557.309735V1024H280.920354v-54.371681h706.831858v54.371681h176.707965V557.309735l-120.523894-352.509735z m2.718584 372.446018V851.823009h-824.637168V577.246018l6.343363-19.936283h811.044248l7.249557 19.936283zM329.854867 262.79646h608.962832l60.715044 176.707965H269.139823L329.854867 262.79646z"
        opacity=".03"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M369.727434 705.019469m-88.80708 0a88.80708 88.80708 0 1 0 177.614159 0 88.80708 88.80708 0 1 0-177.614159 0Z"
        opacity=".03"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M898.945133 705.019469m-88.80708 0a88.80708 88.80708 0 1 0 177.614159 0 88.80708 88.80708 0 1 0-177.614159 0Z"
        opacity=".03"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

Iconcar.defaultProps = {
  size: 18,
};

export default Iconcar;
