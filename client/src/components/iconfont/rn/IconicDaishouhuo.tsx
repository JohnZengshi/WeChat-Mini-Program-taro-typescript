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

const IconicDaishouhuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 930.133333H170.666667c-64 0-119.466667-51.2-119.466667-119.466666V298.666667c0-110.933333 89.6-204.8 204.8-204.8h512c110.933333 0 204.8 89.6 204.8 204.8v512c0 64-55.466667 119.466667-119.466667 119.466666zM256 162.133333C179.2 162.133333 119.466667 221.866667 119.466667 298.666667v512c0 29.866667 25.6 51.2 51.2 51.2h682.666666c29.866667 0 51.2-25.6 51.2-51.2V298.666667c0-76.8-64-136.533333-136.533333-136.533334H256z"
        fill={getIconColor(color, 0, '#27231A')}
      />
      <Path
        d="M85.333333 307.2h853.333334v64H85.333333z"
        fill={getIconColor(color, 1, '#27231A')}
      />
      <Path
        d="M704 699.733333c-8.533333 0-17.066667-4.266667-25.6-8.533333L512 593.066667l-166.4 98.133333c-17.066667 8.533333-38.4 8.533333-55.466667 0s-25.6-25.6-25.6-46.933333V307.2h490.666667v337.066667c0 17.066667-8.533333 38.4-25.6 46.933333-8.533333 4.266667-17.066667 8.533333-25.6 8.533333zM332.8 375.466667v251.733333l153.6-93.866667c17.066667-8.533333 38.4-8.533333 55.466667 0l153.6 93.866667V375.466667H332.8z"
        fill={getIconColor(color, 2, '#27231A')}
      />
    </Svg>
  );
};

IconicDaishouhuo.defaultProps = {
  size: 18,
};

export default IconicDaishouhuo;
