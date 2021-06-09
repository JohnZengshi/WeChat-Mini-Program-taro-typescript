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

const Iconsangedian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M41.212 512c0 51.2 41.891 93.09 93.091 93.09s93.09-41.89 93.09-93.09-41.89-93.09-93.09-93.09-93.09 41.89-93.09 93.09z m372.364 0c0 51.2 41.89 93.09 93.09 93.09s93.092-41.89 93.092-93.09-41.891-93.09-93.091-93.09-93.091 41.89-93.091 93.09z m372.363 0c0 51.2 41.891 93.09 93.091 93.09s93.091-41.89 93.091-93.09-41.89-93.09-93.09-93.09-93.092 41.89-93.092 93.09z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconsangedian.defaultProps = {
  size: 18,
};

export default Iconsangedian;
