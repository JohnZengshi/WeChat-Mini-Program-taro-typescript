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

const Iconzhifuchenggong: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <path
        d="M448 672c-9.6 0-16-3.2-22.4-9.6l-128-128c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l105.6 105.6 233.6-233.6c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8l-256 256c-6.4 6.4-12.8 9.6-22.4 9.6z"
        fill={getIconColor(color, 1, '#27231A')}
      />
    </svg>
  );
};

Iconzhifuchenggong.defaultProps = {
  size: 18,
};

export default Iconzhifuchenggong;
