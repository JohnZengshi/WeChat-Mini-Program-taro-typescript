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

const IconyiwanchengDingdan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M968.533333 622.933333c-85.333333 102.4-217.6 170.666667-362.666666 170.666667-260.266667 0-469.333333-209.066667-469.333334-469.333333 0-38.4 4.266667-76.8 12.8-110.933334C81.066667 294.4 42.666667 396.8 42.666667 512c0 260.266667 209.066667 469.333333 469.333333 469.333333 221.866667 0 405.333333-153.6 456.533333-358.4z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <path
        d="M512 42.666667C251.733333 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667z m0 874.666666c-221.866667 0-405.333333-183.466667-405.333333-405.333333S290.133333 106.666667 512 106.666667s405.333333 183.466667 405.333333 405.333333-183.466667 405.333333-405.333333 405.333333z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M657.066667 362.666667l-209.066667 230.4-81.066667-89.6c-12.8-12.8-34.133333-12.8-46.933333 0-12.8 12.8-12.8 34.133333 0 46.933333l106.666667 115.2c4.266667 8.533333 12.8 8.533333 25.6 8.533333s17.066667-4.266667 25.6-8.533333l234.666666-256c12.8-12.8 12.8-34.133333 0-46.933333-21.333333-12.8-42.666667-12.8-55.466666 0z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

IconyiwanchengDingdan.defaultProps = {
  size: 18,
};

export default IconyiwanchengDingdan;
