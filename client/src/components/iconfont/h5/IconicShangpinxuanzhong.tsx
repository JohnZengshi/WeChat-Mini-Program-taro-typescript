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

const IconicShangpinxuanzhong: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <path
        d="M448 691.2c-12.8 0-25.6-6.4-32-12.8l-128-128c-19.2-19.2-19.2-51.2 0-70.4s51.2-19.2 70.4 0L448 569.6l224-224c19.2-19.2 51.2-19.2 70.4 0s19.2 51.2 0 70.4l-256 256c-12.8 12.8-25.6 19.2-38.4 19.2z"
        fill={getIconColor(color, 1, '#27231A')}
      />
    </svg>
  );
};

IconicShangpinxuanzhong.defaultProps = {
  size: 18,
};

export default IconicShangpinxuanzhong;
