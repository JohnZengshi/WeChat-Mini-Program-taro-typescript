/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends DOMAttributes<SVGElement> {
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const Iconxiankefu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M896 810.666667a85.333333 85.333333 0 0 1-85.333333 85.333333h-42.666667a85.333333 85.333333 0 0 1-85.333333-85.333333v-128a85.333333 85.333333 0 0 1 85.333333-85.333334h128v213.333334zM128 810.666667a85.333333 85.333333 0 0 0 85.333333 85.333333h42.666667a85.333333 85.333333 0 0 0 85.333333-85.333333v-128a85.333333 85.333333 0 0 0-85.333333-85.333334H128v213.333334z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <path
        d="M263.082667 263.082667A352 352 0 0 1 864 512v53.333333H768A117.333333 117.333333 0 0 0 650.666667 682.666667v128A117.333333 117.333333 0 0 0 768 928h42.666667A117.333333 117.333333 0 0 0 928 810.666667v-298.666667a416 416 0 1 0-832 0v298.666667A117.333333 117.333333 0 0 0 213.333333 928h42.666667A117.333333 117.333333 0 0 0 373.333333 810.666667v-128A117.333333 117.333333 0 0 0 256 565.333333H160V512a352 352 0 0 1 103.082667-248.917333zM160 629.333333H256A53.333333 53.333333 0 0 1 309.333333 682.666667v128A53.333333 53.333333 0 0 1 256 864H213.333333A53.333333 53.333333 0 0 1 160 810.666667v-181.333334z m704 0V810.666667A53.333333 53.333333 0 0 1 810.666667 864h-42.666667A53.333333 53.333333 0 0 1 714.666667 810.666667v-128A53.333333 53.333333 0 0 1 768 629.333333h96z"
        fill={getIconColor(color, 1, '#000000')}
      />
    </svg>
  );
};

Iconxiankefu.defaultProps = {
  size: 18,
};

export default Iconxiankefu;
