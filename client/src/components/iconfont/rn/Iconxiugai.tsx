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

const Iconxiugai: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M902.144 988.842667H121.890133a86.698667 86.698667 0 0 1-86.698666-86.6304V122.4704a86.698667 86.698667 0 0 1 86.698666-86.664533H642.082133a28.8768 28.8768 0 1 1 0 57.787733H150.766933c-31.914667 0-57.787733 25.873067-57.787733 57.7536v721.988267c0 31.880533 25.873067 57.719467 57.787733 57.719466h722.466134c31.914667 0 57.7536-25.873067 57.7536-57.719466V353.518933a28.910933 28.910933 0 0 1 57.821866 0v548.693334a86.6304 86.6304 0 0 1-86.664533 86.6304zM430.2848 606.3104a28.808533 28.808533 0 0 1-40.823467 0 28.808533 28.808533 0 0 1 0-40.823467L908.731733 43.656533a28.8768 28.8768 0 1 1 40.8576 40.8576L430.2848 606.3104z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconxiugai.defaultProps = {
  size: 18,
};

export default Iconxiugai;
