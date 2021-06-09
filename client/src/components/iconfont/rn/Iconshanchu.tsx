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

const Iconshanchu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M426.666667 85.333333l-39.822223 45.511111H170.666667v85.333334h682.666666V130.844444h-216.177777l-45.511112-45.511111H426.666667zM216.177778 301.511111V853.333333c0 45.511111 39.822222 85.333333 85.333333 85.333334h426.666667c45.511111 0 85.333333-39.822222 85.333333-85.333334V301.511111H216.177778z"
        fill={getIconColor(color, 0, '#FE5A49')}
      />
    </Svg>
  );
};

Iconshanchu.defaultProps = {
  size: 18,
};

export default Iconshanchu;
