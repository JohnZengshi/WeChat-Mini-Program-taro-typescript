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

const Iconsousuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M885.76 846.08L725.333333 682.666667a337.493333 337.493333 0 1 0-42.666666 42.666666l161.706666 161.706667a28.16 28.16 0 1 0 39.68-39.68z m-418.986667-98.56a280.746667 280.746667 0 1 1 280.746667-280.746667 281.173333 281.173333 0 0 1-280.746667 280.746667z"
        fill={getIconColor(color, 0, '#27231A')}
      />
    </Svg>
  );
};

Iconsousuo.defaultProps = {
  size: 18,
};

export default Iconsousuo;
