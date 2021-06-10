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

const Iconrefresh: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M888.23000001 392.083L718.385 392.08300001c-21.66789999 0-39.1942-17.5561-39.1942-39.19610001 0-21.6382 17.5273-39.1942 39.1942-39.19419999l68.1819-1e-8c-61.5039-86.9065-162.641-143.715-277.223-143.715-187.607 0-339.692 152.086-339.692 339.69 0 187.606 152.086 339.691 339.692 339.691 187.606 0 339.691-152.086 339.691-339.691 0-21.6382 17.5264-39.1942 39.19329999-39.1942 21.63999999 0 39.1971 17.5561 39.19710001 39.1942 0 230.899-187.2 418.082-418.082 418.082-230.88499999 0-418.08299999-187.182-418.083-418.082 0-230.898 187.198-418.081 418.083-418.08100001 140.127 0 263.895 69.0866 339.691 174.93500001l0-70.4143c0-21.63999999 17.5264-39.1952 39.1933-39.1952 21.63999999 0 39.1971 17.5552 39.1971 39.1952l0 156.78C927.427 374.527 909.868 392.083 888.23000001 392.083Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconrefresh.defaultProps = {
  size: 18,
};

export default Iconrefresh;