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

const Iconwodeliuyan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M862.378667 642.986667A341.333333 341.333333 0 0 1 381.056 161.621333 362.666667 362.666667 0 0 0 170.666667 490.666667a357.546667 357.546667 0 0 0 38.357333 162.090666L128 896l243.2-81.066667a357.546667 357.546667 0 0 0 162.133333 38.4 362.666667 362.666667 0 0 0 329.045334-210.346666z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <Path
        d="M352 426.666667A32 32 0 0 1 384 394.666667h298.666667a32 32 0 0 1 0 64H384a32 32 0 0 1-32-32zM384 522.666667a32 32 0 0 0 0 64h170.666667a32 32 0 0 0 0-64H384z"
        fill={getIconColor(color, 1, '#000000')}
      />
      <Path
        d="M356.821333 137.813333c63.018667-31.829333 130.773333-42.922667 198.4-41.813333l1.194667 0.042667A393.813333 393.813333 0 0 1 928 469.333333v21.248a389.717333 389.717333 0 0 1-41.813333 176.597334 394.666667 394.666667 0 0 1-352.810667 218.154666 389.546667 389.546667 0 0 1-164.394667-35.925333l-230.826666 76.928a32 32 0 0 1-40.533334-40.448l76.970667-230.869333a389.546667 389.546667 0 0 1-35.925333-164.394667 394.666667 394.666667 0 0 1 218.154666-352.853333z m196.693334 22.186667c-59.733333-0.938667-116.48 8.96-167.893334 34.986667h-0.128A330.666667 330.666667 0 0 0 202.666667 490.666667v0.085333a325.546667 325.546667 0 0 0 34.986666 147.626667 32 32 0 0 1 1.792 24.533333l-60.842666 182.485333 182.485333-60.8a32 32 0 0 1 24.533333 1.792 325.546667 325.546667 0 0 0 147.626667 34.944h0.085333a330.666667 330.666667 0 0 0 295.68-182.826666v-0.128a325.546667 325.546667 0 0 0 34.986667-147.626667v-20.48a329.813333 329.813333 0 0 0-310.485333-310.272z m-196.693334-22.186667h-0.042666l14.421333 28.586667-14.293333-28.586667h-0.085334z"
        fill={getIconColor(color, 2, '#000000')}
      />
    </Svg>
  );
};

Iconwodeliuyan.defaultProps = {
  size: 18,
};

export default Iconwodeliuyan;
