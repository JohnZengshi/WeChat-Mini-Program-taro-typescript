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

const IconicClose: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M721.066667 311.466667c17.066667 17.066667 17.066667 42.666667 0 59.733333l-149.333334 149.333333 149.333334 149.333334c17.066667 17.066667 17.066667 42.666667 0 59.733333-17.066667 17.066667-42.666667 17.066667-59.733334 0L512 584.533333l-149.333333 149.333334c-17.066667 17.066667-42.666667 17.066667-59.733334 0-17.066667-17.066667-17.066667-42.666667 0-59.733334l149.333334-149.333333-149.333334-153.6c-17.066667-17.066667-17.066667-42.666667 0-59.733333 17.066667-17.066667 42.666667-17.066667 59.733334 0l149.333333 149.333333 149.333333-149.333333c17.066667-17.066667 46.933333-17.066667 59.733334 0z"
        fill={getIconColor(color, 0, '#27231A')}
      />
    </Svg>
  );
};

IconicClose.defaultProps = {
  size: 18,
};

export default IconicClose;
