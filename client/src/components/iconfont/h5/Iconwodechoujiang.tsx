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

const Iconwodechoujiang: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#F3AE3F')}
      />
      <path
        d="M828.952381 512c0 175.055238-141.897143 316.952381-316.952381 316.952381S195.047619 687.055238 195.047619 512 336.944762 195.047619 512 195.047619s316.952381 141.897143 316.952381 316.952381z m-243.809524 0c0-40.399238-73.142857-219.428571-73.142857-219.428571s-73.142857 179.029333-73.142857 219.428571a73.142857 73.142857 0 1 0 146.285714 0z m121.904762-24.380952a24.380952 24.380952 0 1 0 0 48.761904h48.761905a24.380952 24.380952 0 1 0 0-48.761904h-48.761905z m-195.047619 195.047619a24.380952 24.380952 0 0 1 24.380952 24.380952v48.761905a24.380952 24.380952 0 1 1-48.761904 0v-48.761905a24.380952 24.380952 0 0 1 24.380952-24.380952z m-243.809524-195.047619a24.380952 24.380952 0 1 0 0 48.761904h48.761905a24.380952 24.380952 0 1 0 0-48.761904h-48.761905z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

Iconwodechoujiang.defaultProps = {
  size: 18,
};

export default Iconwodechoujiang;
