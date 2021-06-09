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

const IconicHomeNor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M887.466667 307.2l-311.466667-209.066667c-38.4-25.6-89.6-25.6-132.266667 0L136.533333 307.2c-34.133333 21.333333-55.466667 55.466667-55.466666 98.133333v422.4c0 64 51.2 119.466667 119.466666 119.466667h631.466667c64 0 119.466667-51.2 119.466667-119.466667V405.333333c-8.533333-42.666667-29.866667-76.8-64-98.133333z m-260.266667 571.733333H396.8v-217.6c0-64 51.2-115.2 115.2-115.2s115.2 51.2 115.2 115.2v217.6z m251.733333-55.466666c0 29.866667-25.6 51.2-51.2 51.2h-132.266666v-217.6c0-98.133333-81.066667-179.2-179.2-179.2-98.133333 0-179.2 81.066667-179.2 179.2v217.6H200.533333c-29.866667 0-51.2-25.6-51.2-51.2V405.333333c0-17.066667 8.533333-34.133333 25.6-42.666666l311.466667-209.066667c17.066667-12.8 42.666667-12.8 59.733333 0L853.333333 358.4c12.8 8.533333 25.6 25.6 25.6 42.666667v422.4z"
        fill={getIconColor(color, 0, '#CACACA')}
      />
    </Svg>
  );
};

IconicHomeNor.defaultProps = {
  size: 18,
};

export default IconicHomeNor;
