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

const Iconsangedian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M41.212 512c0 51.2 41.891 93.09 93.091 93.09s93.09-41.89 93.09-93.09-41.89-93.09-93.09-93.09-93.09 41.89-93.09 93.09z m372.364 0c0 51.2 41.89 93.09 93.09 93.09s93.092-41.89 93.092-93.09-41.891-93.09-93.091-93.09-93.091 41.89-93.091 93.09z m372.363 0c0 51.2 41.891 93.09 93.091 93.09s93.091-41.89 93.091-93.09-41.89-93.09-93.09-93.09-93.092 41.89-93.092 93.09z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsangedian.defaultProps = {
  size: 18,
};

export default Iconsangedian;
