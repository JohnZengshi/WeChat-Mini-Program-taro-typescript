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

const IconicHuiyuanErweima: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M76.8 46.933333h366.933333c34.133333 0 25.6 68.266667 25.6 106.666667v200.533333c0 42.666667 8.533333 98.133333-21.333333 110.933334-17.066667 8.533333-68.266667 4.266667-93.866667 4.266666H162.133333c-46.933333 0-106.666667 8.533333-115.2-29.866666V72.533333c4.266667-12.8 12.8-21.333333 29.866667-25.6zM128 128v260.266667h264.533333V123.733333L128 128c0-4.266667 0 0 0 0z m439.466667-81.066667h366.933333c17.066667 4.266667 25.6 17.066667 29.866667 34.133334v358.4c-4.266667 12.8-12.8 25.6-25.6 29.866666-25.6 8.533333-64 0-93.866667 0h-187.733333c-29.866667 0-72.533333 4.266667-93.866667 0-34.133333-8.533333-21.333333-72.533333-21.333333-115.2V162.133333c0-51.2-12.8-110.933333 25.6-115.2zM618.666667 128v260.266667h264.533333V123.733333l-264.533333 4.266667c0-4.266667 0 0 0 0zM247.466667 204.8c38.4-8.533333 64 17.066667 64 51.2 0 42.666667-42.666667 68.266667-81.066667 51.2-38.4-21.333333-34.133333-93.866667 17.066667-102.4z m490.666666 0c85.333333-17.066667 85.333333 119.466667 0 106.666667-51.2-8.533333-55.466667-98.133333 0-106.666667z m-298.666666 755.2H76.8c-17.066667-4.266667-25.6-12.8-29.866667-29.866667v-366.933333c4.266667-12.8 12.8-21.333333 25.6-25.6 25.6-8.533333 64 0 93.866667 0h187.733333c29.866667 0 68.266667-4.266667 93.866667 0 34.133333 8.533333 25.6 72.533333 25.6 115.2v192c-4.266667 51.2 8.533333 110.933333-34.133333 115.2zM128 622.933333v260.266667h264.533333v-264.533333l-264.533333 4.266666c0-4.266667 0-4.266667 0 0z m836.266667-51.2v102.4c-4.266667 34.133333 0 72.533333 0 110.933334h-260.266667V725.333333c-25.6-4.266667-55.466667 0-81.066667 0-4.266667 76.8 0 157.866667 0 238.933334h-46.933333c-42.666667-8.533333-29.866667-68.266667-29.866667-119.466667v-187.733333c0-29.866667-4.266667-72.533333 0-93.866667 8.533333-25.6 42.666667-21.333333 81.066667-21.333333h179.2v162.133333h81.066667v-162.133333c38.4-4.266667 72.533333-4.266667 76.8 29.866666zM251.733333 695.466667c38.4-4.266667 72.533333 34.133333 55.466667 72.533333-21.333333 55.466667-123.733333 34.133333-102.4-38.4 8.533333-17.066667 21.333333-29.866667 46.933333-34.133333z m537.6 264.533333h-89.6v-93.866667h85.333334l4.266666 93.866667z m174.933334-93.866667v64c-4.266667 17.066667-12.8 29.866667-29.866667 34.133334h-64v-93.866667h93.866667z"
        fill={getIconColor(color, 0, '#27231A')}
      />
    </Svg>
  );
};

IconicHuiyuanErweima.defaultProps = {
  size: 18,
};

export default IconicHuiyuanErweima;