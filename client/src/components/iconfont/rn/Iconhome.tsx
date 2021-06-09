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

const Iconhome: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M152.832 332.458667a85.333333 85.333333 0 0 0-37.632 70.826666v420.352a85.333333 85.333333 0 0 0 85.333333 85.333334h162.645334v-120.149334a148.821333 148.821333 0 0 1 297.642666 0v120.149334H823.466667a85.333333 85.333333 0 0 0 85.333333-85.333334V403.2a85.333333 85.333333 0 0 0-37.674667-70.784l-311.466666-209.792a85.333333 85.333333 0 0 0-95.317334 0l-311.466666 209.792z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
    </Svg>
  );
};

Iconhome.defaultProps = {
  size: 18,
};

export default Iconhome;
