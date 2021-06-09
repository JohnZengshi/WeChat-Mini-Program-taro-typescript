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

const Iconhome: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M152.832 332.458667a85.333333 85.333333 0 0 0-37.632 70.826666v420.352a85.333333 85.333333 0 0 0 85.333333 85.333334h162.645334v-120.149334a148.821333 148.821333 0 0 1 297.642666 0v120.149334H823.466667a85.333333 85.333333 0 0 0 85.333333-85.333334V403.2a85.333333 85.333333 0 0 0-37.674667-70.784l-311.466666-209.792a85.333333 85.333333 0 0 0-95.317334 0l-311.466666 209.792z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
    </svg>
  );
};

Iconhome.defaultProps = {
  size: 18,
};

export default Iconhome;
