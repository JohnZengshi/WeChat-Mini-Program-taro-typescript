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

const IconicArrowdown: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 672c-6.4 0-19.2 0-25.6-6.4l-256-256c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0L512 595.2l230.4-230.4c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8l-256 256c0 6.4-12.8 6.4-19.2 6.4z"
        fill={getIconColor(color, 0, '#27231A')}
      />
    </svg>
  );
};

IconicArrowdown.defaultProps = {
  size: 18,
};

export default IconicArrowdown;
