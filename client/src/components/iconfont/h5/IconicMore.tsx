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

const IconicMore: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M384 819.2c-12.8 0-25.6-6.4-32-12.8-19.2-19.2-19.2-51.2 0-70.4L569.6 512 352 288c-19.2-19.2-19.2-51.2 0-70.4s51.2-19.2 70.4 0l256 256c19.2 19.2 19.2 51.2 0 70.4l-256 256c-12.8 12.8-25.6 19.2-38.4 19.2z"
        fill={getIconColor(color, 0, '#CACACA')}
      />
    </svg>
  );
};

IconicMore.defaultProps = {
  size: 18,
};

export default IconicMore;
