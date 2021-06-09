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

const Iconsaomazhifu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#EF836A')}
      />
      <path
        d="M278.28419 546.54781a34.474667 34.474667 0 1 1 0-68.949334H745.569524a34.474667 34.474667 0 1 1 0 68.949334H278.28419z m432.810667 119.222857a34.474667 34.474667 0 1 1 68.949333 0v22.503619a91.91619 91.91619 0 0 1-91.91619 91.91619h-22.79619a34.474667 34.474667 0 0 1 0-68.949333h22.771809a22.991238 22.991238 0 0 0 22.991238-22.966857v-22.479238z m-352.231619 45.470476a34.474667 34.474667 0 1 1 0 68.949333h-22.966857a91.91619 91.91619 0 0 1-91.916191-91.91619v-22.479238a34.474667 34.474667 0 0 1 68.949334 0v22.479238a22.991238 22.991238 0 0 0 22.966857 22.966857h22.966857z m-46.031238-352.256a34.474667 34.474667 0 1 1-68.949333 0v-23.088762a91.91619 91.91619 0 0 1 91.91619-91.916191h22.991238a34.474667 34.474667 0 0 1 0 68.949334h-22.966857a22.991238 22.991238 0 0 0-22.991238 22.966857v23.088762z m352.304762-46.226286a34.474667 34.474667 0 1 1 0-68.949333h22.966857a91.91619 91.91619 0 0 1 91.916191 91.91619v23.161905a34.474667 34.474667 0 0 1-68.949334 0v-23.161905a22.991238 22.991238 0 0 0-22.966857-22.966857h-22.966857z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

Iconsaomazhifu.defaultProps = {
  size: 18,
};

export default Iconsaomazhifu;
