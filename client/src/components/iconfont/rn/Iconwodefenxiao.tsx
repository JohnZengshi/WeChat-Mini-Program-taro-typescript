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

const Iconwodefenxiao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#E75586')}
      />
      <Path
        d="M694.02819 426.544762c-13.214476-14.823619-27.89181-26.721524-42.593523-37.132191-2.925714-1.462857-4.388571-2.974476-7.314286-4.461714 20.553143-10.386286 35.206095-29.720381 35.206095-52.004571 0-35.644952-33.743238-62.415238-74.849524-62.415238-8.801524 0-17.603048 1.511619-24.941714 4.486095-4.412952 1.462857-5.87581 2.950095-8.825905 4.437333-1.462857 0-4.388571 0-5.851428-1.462857a69.412571 69.412571 0 0 0-14.701715-16.335238A69.168762 69.168762 0 0 0 510.537143 243.809524a69.168762 69.168762 0 0 0-39.643429 17.846857c-5.851429 5.924571-11.751619 10.386286-14.677333 16.335238 0-1.487238-2.925714 0-4.388571-1.487238s-4.412952-2.974476-8.825905-4.461714a67.949714 67.949714 0 0 0-24.941715-4.461715c-39.643429 0-74.873905 26.745905-74.873904 62.415238 0 22.28419 14.677333 41.593905 35.230476 51.980191-1.462857 1.487238-4.388571 2.974476-7.338667 4.461714-14.677333 10.410667-29.354667 23.79581-42.569143 37.156572-39.643429 41.593905-64.585143 89.136762-64.585142 141.165714 0 145.578667 111.567238 215.405714 245.150476 215.405714h5.851428c133.583238 0 245.150476-69.827048 245.150476-215.430095-1.462857-50.517333-26.428952-98.06019-66.07238-138.191238zM583.92381 576.609524c8.801524 0 14.677333 5.973333 14.677333 14.872381 0 8.923429-5.851429 14.872381-14.677333 14.872381h-58.709334v57.929143c0 8.923429-5.87581 14.872381-14.677333 14.872381s-14.677333-5.973333-14.677333-14.872381V606.354286h-58.733715c-8.801524 0-14.652952-5.924571-14.652952-14.872381 0-8.874667 5.851429-14.848 14.652952-14.848h58.733715v-35.644953h-60.196572c-8.801524 0-14.677333-5.948952-14.677333-14.872381 0-8.899048 5.87581-14.848 14.677333-14.848h44.056381l-48.469333-49.005714a14.506667 14.506667 0 0 1 0-20.821333 14.06781 14.06781 0 0 1 20.577524 0l58.709333 59.440762 58.709333-59.440762a14.06781 14.06781 0 0 1 20.553143 0 14.457905 14.457905 0 0 1 0 20.796952l-48.444952 49.030095h44.032c8.801524 0 14.677333 5.948952 14.677333 14.872381 0 8.899048-5.851429 14.848-14.677333 14.848h-60.172191v35.644953h58.709334z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Iconwodefenxiao.defaultProps = {
  size: 18,
};

export default Iconwodefenxiao;
