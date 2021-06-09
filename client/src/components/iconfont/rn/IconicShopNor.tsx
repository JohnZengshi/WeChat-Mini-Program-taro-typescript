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

const IconicShopNor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M955.733333 473.6L900.266667 213.333333c-12.8-55.466667-59.733333-93.866667-115.2-93.866666H238.933333c-55.466667 0-102.4 38.4-115.2 93.866666l-55.466666 260.266667c-12.8 51.2 21.333333 98.133333 68.266666 110.933333v247.466667c0 64 51.2 119.466667 119.466667 119.466667h512c64 0 119.466667-51.2 119.466667-119.466667v-247.466667c46.933333-12.8 76.8-59.733333 68.266666-110.933333z m-136.533333 358.4c0 29.866667-25.6 51.2-51.2 51.2H256c-29.866667 0-51.2-25.6-51.2-51.2v-256c8.533333-4.266667 21.333333-12.8 29.866667-21.333333l34.133333-42.666667c17.066667-17.066667 42.666667-17.066667 55.466667 0 42.666667 46.933333 115.2 46.933333 157.866666 0 17.066667-17.066667 42.666667-17.066667 55.466667 0 42.666667 46.933333 115.2 46.933333 157.866667 0 17.066667-17.066667 42.666667-17.066667 55.466666 0l34.133334 42.666667c8.533333 12.8 21.333333 21.333333 34.133333 25.6v251.733333z m42.666667-311.466667c-8.533333 0-17.066667-4.266667-25.6-12.8l-34.133334-42.666666c-42.666667-46.933333-115.2-46.933333-157.866666 0-17.066667 17.066667-42.666667 17.066667-55.466667 0-42.666667-46.933333-115.2-46.933333-157.866667 0-17.066667 17.066667-42.666667 17.066667-55.466666 0-42.666667-46.933333-115.2-46.933333-157.866667 0l-34.133333 42.666666c-4.266667 8.533333-12.8 12.8-25.6 12.8-21.333333 0-34.133333-17.066667-29.866667-38.4l55.466667-260.266666c4.266667-25.6 25.6-42.666667 51.2-42.666667h546.133333c25.6 0 46.933333 17.066667 51.2 42.666667l55.466667 260.266666c8.533333 21.333333-8.533333 38.4-25.6 38.4z"
        fill={getIconColor(color, 0, '#CACACA')}
      />
    </Svg>
  );
};

IconicShopNor.defaultProps = {
  size: 18,
};

export default IconicShopNor;
