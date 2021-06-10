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

const IconicJiayoudingdantubiao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M926.254545 628.363636c-13.963636-32.581818-9.309091-67.490909-4.654545-100.072727 6.981818-51.2 16.290909-114.036364-62.836364-151.272727 4.654545-18.618182 4.654545-41.890909-11.636363-48.872727l-95.418182-46.545455c-20.945455-9.309091-74.472727-6.981818-81.454546 4.654545s-23.272727 41.890909 20.945455 51.2c44.218182 11.636364 86.109091 62.836364 86.109091 62.836364 13.963636 13.963636 32.581818 23.272727 46.545454 23.272727 53.527273 18.618182 51.2 41.890909 41.89091 93.090909-4.654545 37.236364-11.636364 83.781818 9.30909 132.654546 27.927273 65.163636 30.254545 104.727273 4.654546 130.327273-30.254545 30.254545-72.145455 20.945455-97.745455 2.327272-34.909091-23.272727-34.909091-67.490909-32.581818-137.309091 2.327273-39.563636 4.654545-79.127273-6.981818-114.036363-25.6-76.8-104.727273-76.8-107.054545-76.8h-34.909091V193.163636c0-16.290909-13.963636-30.254545-27.927273-30.254545H225.745455c-16.290909 0-27.927273 13.963636-27.927273 30.254545v609.745455H167.563636S139.636364 802.909091 139.636364 833.163636V861.090909h516.654545v-30.254545s0-30.254545-27.927273-30.254546h-27.927272V512h34.909091c4.654545 0 41.890909 2.327273 53.527272 39.563636 6.981818 23.272727 6.981818 58.181818 4.654546 93.090909-2.327273 67.490909-6.981818 144.290909 58.181818 188.509091 25.6 18.618182 53.527273 25.6 81.454545 25.6 32.581818 0 65.163636-11.636364 88.436364-37.236363 62.836364-62.836364 20.945455-158.254545 4.654545-193.163637z m-130.327272-242.036363c-6.981818 0-13.963636-6.981818-13.963637-13.963637s6.981818-13.963636 13.963637-13.963636 13.963636 6.981818 13.963636 13.963636-6.981818 13.963636-13.963636 13.963637z m-542.254546-134.981818c0-16.290909 13.963636-30.254545 27.927273-30.254546H512c16.290909 0 27.927273 13.963636 27.927273 30.254546v174.545454c0 16.290909-13.963636 30.254545-27.927273 30.254546h-230.4c-16.290909 0-27.927273-13.963636-27.927273-30.254546v-174.545454z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconicJiayoudingdantubiao.defaultProps = {
  size: 18,
};

export default IconicJiayoudingdantubiao;