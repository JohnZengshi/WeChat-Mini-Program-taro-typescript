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

const Iconhuiyuankaika: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#C472EE')}
      />
      <path
        d="M219.428571 390.095238a97.52381 97.52381 0 0 1 97.52381-97.523809h390.095238a97.52381 97.52381 0 0 1 97.52381 97.523809v48.761905H219.428571v-48.761905zM219.428571 487.619048h585.142858v146.285714a97.52381 97.52381 0 0 1-97.52381 97.523809H316.952381a97.52381 97.52381 0 0 1-97.52381-97.523809v-146.285714z m73.142858 73.142857a24.380952 24.380952 0 1 0 0 48.761905h195.047619a24.380952 24.380952 0 1 0 0-48.761905h-195.047619z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

Iconhuiyuankaika.defaultProps = {
  size: 18,
};

export default Iconhuiyuankaika;
