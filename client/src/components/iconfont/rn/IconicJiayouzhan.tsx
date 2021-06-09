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

const IconicJiayouzhan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M87.04 256s138.24-40.96 235.52-40.96 230.4 40.96 230.4 40.96v680.96H87.04V256z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <Path
        d="M102.4 1024c-56.32 0-102.4-46.08-102.4-102.4V102.4C0 46.08 46.08 0 102.4 0h435.2c56.32 0 102.4 46.08 102.4 102.4v337.92c0 46.08 35.84 87.04 71.68 117.76 35.84 30.72 56.32 76.8 56.32 128v128c0 51.2 35.84 87.04 87.04 87.04s87.04-35.84 87.04-87.04v-215.04c0-25.6-10.24-51.2-30.72-71.68L844.8 460.8c-25.6-25.6-35.84-51.2-35.84-76.8V317.44c0-25.6-10.24-51.2-30.72-71.68l-97.28-97.28c-15.36-20.48-15.36-46.08 0-61.44 15.36-15.36 46.08-15.36 61.44 0l266.24 266.24c10.24 10.24 15.36 20.48 15.36 30.72v424.96c0 92.16-76.8 168.96-168.96 168.96-92.16 0-168.96-76.8-168.96-168.96v-128c0-40.96-40.96-25.6-40.96 15.36V921.6c0 56.32-46.08 102.4-102.4 102.4H102.4z m450.56-834.56c0-56.32-46.08-102.4-102.4-102.4H189.44c-56.32 0-102.4 46.08-102.4 102.4V834.56c0 56.32 46.08 102.4 102.4 102.4h266.24c56.32 0 102.4-46.08 102.4-102.4V189.44z"
        fill={getIconColor(color, 1, '#27231A')}
      />
    </Svg>
  );
};

IconicJiayouzhan.defaultProps = {
  size: 18,
};

export default IconicJiayouzhan;
