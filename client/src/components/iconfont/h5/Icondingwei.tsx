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

const Icondingwei: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 96c-179.2 0-320 134.4-320 300.8 0 256 320 531.2 320 531.2s320-281.6 320-531.2c0-166.4-140.8-300.8-320-300.8z m0 384c-51.2 0-89.6-38.4-89.6-83.2 0-44.8 38.4-83.2 89.6-83.2s89.6 38.4 89.6 83.2c0 44.8-38.4 83.2-89.6 83.2z"
        fill={getIconColor(color, 0, '#27231A')}
      />
    </svg>
  );
};

Icondingwei.defaultProps = {
  size: 18,
};

export default Icondingwei;
