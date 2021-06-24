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

const IconPlayCircle: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M719.4 499.1l-296.1-215c-10.6-7.7-25.3-0.2-25.3 12.9v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215c8.8-6.4 8.8-19.4 0-25.8z m-257.6 134V390.9L628.5 512 461.8 633.1z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconPlayCircle.defaultProps = {
  size: 18,
};

export default IconPlayCircle;
