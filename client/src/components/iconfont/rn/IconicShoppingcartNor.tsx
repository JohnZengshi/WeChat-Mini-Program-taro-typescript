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

const IconicShoppingcartNor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M353.28 947.2c-66.56 0-117.76-51.2-117.76-117.76s51.2-117.76 117.76-117.76 117.76 51.2 117.76 117.76-51.2 117.76-117.76 117.76z m0-168.96c-30.72 0-51.2 25.6-51.2 51.2s25.6 51.2 51.2 51.2c30.72 0 51.2-25.6 51.2-51.2s-20.48-51.2-51.2-51.2zM696.32 947.2c-66.56 0-117.76-51.2-117.76-117.76s51.2-117.76 117.76-117.76 117.76 51.2 117.76 117.76-51.2 117.76-117.76 117.76z m0-168.96c-30.72 0-51.2 25.6-51.2 51.2s25.6 51.2 51.2 51.2 51.2-25.6 51.2-51.2-20.48-51.2-51.2-51.2z"
        fill={getIconColor(color, 0, '#27231A')}
      />
      <Path
        d="M158.72 220.16C153.6 163.84 225.28 138.24 256 184.32l25.6 35.84c20.48 30.72 56.32 46.08 92.16 46.08h455.68c30.72 0 56.32 30.72 51.2 61.44L819.2 732.16c-5.12 25.6-25.6 46.08-51.2 46.08h-10.24c10.24 15.36 20.48 30.72 20.48 51.2v10.24c56.32-5.12 97.28-46.08 107.52-97.28l61.44-404.48c10.24-71.68-46.08-133.12-117.76-133.12H378.88c-20.48-5.12-35.84-10.24-46.08-25.6L307.2 143.36C235.52 46.08 87.04 107.52 97.28 225.28l46.08 512c5.12 61.44 56.32 107.52 117.76 107.52h10.24v-10.24c0-20.48 5.12-40.96 20.48-51.2h-30.72c-25.6 0-51.2-20.48-51.2-46.08l-51.2-517.12z m261.12 558.08c10.24 15.36 20.48 30.72 20.48 51.2v10.24H614.4v-10.24c0-20.48 5.12-40.96 20.48-51.2H419.84z"
        fill={getIconColor(color, 1, '#27231A')}
      />
      <Path
        d="M747.52 491.52H302.08c-15.36 0-30.72-15.36-30.72-30.72s15.36-30.72 30.72-30.72h450.56c15.36 0 30.72 15.36 30.72 30.72s-15.36 30.72-35.84 30.72zM537.6 619.52H302.08c-15.36 0-30.72-15.36-30.72-30.72s15.36-30.72 30.72-30.72h235.52c15.36 0 30.72 15.36 30.72 30.72s-15.36 30.72-30.72 30.72z"
        fill={getIconColor(color, 2, '#27231A')}
      />
    </Svg>
  );
};

IconicShoppingcartNor.defaultProps = {
  size: 18,
};

export default IconicShoppingcartNor;
