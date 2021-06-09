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

const IconicUserSel: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M298.666667 349.866667C298.666667 251.733333 379.733333 170.666667 477.866667 170.666667h8.533333c93.866667 0 170.666667 76.8 170.666667 170.666666v8.533334c0 98.133333-81.066667 179.2-179.2 179.2-98.133333 4.266667-179.2-76.8-179.2-179.2z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <path
        d="M128 810.666667c0-93.866667 76.8-170.666667 170.666667-170.666667h426.666666c93.866667 0 170.666667 76.8 170.666667 170.666667v42.666666c0 25.6-17.066667 42.666667-42.666667 42.666667H170.666667c-25.6 0-42.666667-17.066667-42.666667-42.666667v-42.666666z"
        fill={getIconColor(color, 1, '#FFC925')}
      />
      <path
        d="M853.333333 930.133333H170.666667c-42.666667 0-76.8-34.133333-76.8-76.8v-42.666666c0-110.933333 89.6-204.8 204.8-204.8h426.666666c110.933333 0 204.8 89.6 204.8 204.8v42.666666c0 42.666667-34.133333 76.8-76.8 76.8z m-554.666666-256c-76.8 0-136.533333 64-136.533334 136.533334v42.666666c0 4.266667 4.266667 8.533333 8.533334 8.533334h682.666666c4.266667 0 8.533333-4.266667 8.533334-8.533334v-42.666666c0-76.8-64-136.533333-136.533334-136.533334H298.666667z"
        fill={getIconColor(color, 2, '#27231A')}
      />
      <path
        d="M725.333333 85.333333h-213.333333C375.466667 85.333333 264.533333 196.266667 264.533333 332.8c0 136.533333 110.933333 247.466667 247.466667 247.466667 136.533333 0 247.466667-110.933333 247.466667-247.466667V85.333333H725.333333z m-34.133333 247.466667c0 98.133333-81.066667 179.2-179.2 179.2s-179.2-81.066667-179.2-179.2S413.866667 149.333333 512 149.333333h179.2v183.466667z"
        fill={getIconColor(color, 3, '#27231A')}
      />
    </svg>
  );
};

IconicUserSel.defaultProps = {
  size: 18,
};

export default IconicUserSel;
