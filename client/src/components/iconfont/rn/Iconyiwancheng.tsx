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

const Iconyiwancheng: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 960C264.533333 960 64 759.466667 64 512S264.533333 64 512 64 960 264.533333 960 512 759.466667 960 512 960z"
        fill={getIconColor(color, 0, '#27231A')}
      />
      <Path
        d="M682.666667 362.666667L448 597.333333 341.333333 490.666667c-12.8-12.8-34.133333-12.8-46.933333 0s-12.8 34.133333 0 46.933333l128 128c4.266667 4.266667 12.8 8.533333 21.333333 8.533333s17.066667-4.266667 21.333334-8.533333l256-256c12.8-12.8 12.8-34.133333 0-46.933333s-25.6-12.8-38.4 0z"
        fill={getIconColor(color, 1, '#27231A')}
      />
    </Svg>
  );
};

Iconyiwancheng.defaultProps = {
  size: 18,
};

export default Iconyiwancheng;
