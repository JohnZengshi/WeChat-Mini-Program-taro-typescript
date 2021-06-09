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

const Iconjingtengshanfu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#EC5F51')}
      />
      <path
        d="M656.749714 193.828571L345.478095 467.382857l111.006476 29.744762-89.234285 333.04381L678.521905 556.617143l-111.006476-29.744762 89.234285-333.04381z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

Iconjingtengshanfu.defaultProps = {
  size: 18,
};

export default Iconjingtengshanfu;
