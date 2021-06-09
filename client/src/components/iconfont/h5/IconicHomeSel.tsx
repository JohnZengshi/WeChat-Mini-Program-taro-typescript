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

const IconicHomeSel: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M128 558.933333c0-29.866667 12.8-55.466667 38.4-72.533333L324.266667 384c115.2-76.8 264.533333-76.8 379.733333 0l157.866667 102.4c25.6 17.066667 38.4 42.666667 38.4 72.533333V810.666667c0 46.933333-38.4 85.333333-85.333334 85.333333H213.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333v-251.733334z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <path
        d="M883.2 307.2l-302.933333-204.8c-38.4-25.6-89.6-25.6-132.266667 0L140.8 307.2c-29.866667 21.333333-51.2 59.733333-51.2 98.133333v409.6c0 64 51.2 119.466667 119.466667 119.466667h618.666666c64 0 119.466667-51.2 119.466667-119.466667V405.333333c-12.8-38.4-34.133333-76.8-64-98.133333z m-256 563.2H396.8v-213.333333c0-64 51.2-115.2 115.2-115.2 64 0 115.2 51.2 115.2 115.2v213.333333z m243.2-55.466667c0 29.866667-25.6 51.2-51.2 51.2h-128v-213.333333c0-98.133333-81.066667-179.2-179.2-179.2-98.133333 0-179.2 81.066667-179.2 179.2v213.333333h-128c-29.866667 0-51.2-25.6-51.2-51.2V405.333333c0-17.066667 8.533333-34.133333 25.6-42.666666l302.933333-204.8c17.066667-12.8 42.666667-12.8 59.733334 0l302.933333 204.8c12.8 8.533333 25.6 25.6 25.6 42.666666v409.6z"
        fill={getIconColor(color, 1, '#27231A')}
      />
    </svg>
  );
};

IconicHomeSel.defaultProps = {
  size: 18,
};

export default IconicHomeSel;
