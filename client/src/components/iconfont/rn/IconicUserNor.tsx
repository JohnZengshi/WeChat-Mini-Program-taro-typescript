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

const IconicUserNor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.333333 85.333333h-213.333333C375.466667 85.333333 264.533333 196.266667 264.533333 332.8c0 136.533333 110.933333 247.466667 247.466667 247.466667 136.533333 0 247.466667-110.933333 247.466667-247.466667V85.333333H725.333333z m-34.133333 247.466667c0 98.133333-81.066667 179.2-179.2 179.2s-179.2-81.066667-179.2-179.2S413.866667 149.333333 512 149.333333h179.2v183.466667zM725.333333 605.866667H298.666667c-110.933333 0-204.8 89.6-204.8 204.8v42.666666c0 42.666667 34.133333 76.8 76.8 76.8h682.666666c42.666667 0 76.8-34.133333 76.8-76.8v-42.666666c0-110.933333-93.866667-204.8-204.8-204.8z m136.533334 247.466666c0 4.266667-4.266667 8.533333-8.533334 8.533334H170.666667c-4.266667 0-8.533333-4.266667-8.533334-8.533334v-42.666666c0-76.8 64-136.533333 136.533334-136.533334h426.666666c76.8 0 136.533333 64 136.533334 136.533334v42.666666z"
        fill={getIconColor(color, 0, '#CACACA')}
      />
    </Svg>
  );
};

IconicUserNor.defaultProps = {
  size: 18,
};

export default IconicUserNor;
