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

const Iconjifenshangcheng: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#6F90EB')}
      />
      <path
        d="M776.679619 416.646095a1.024 1.024 0 0 0 0-0.804571 103.131429 103.131429 0 0 0-6.192762-16.018286l-52.662857-130.852571a36.522667 36.522667 0 0 0-32.719238-24.380953H330.24a37.083429 37.083429 0 0 0-33.645714 26.916572l-48.201143 141.482666c-0.975238 2.82819-1.706667 5.729524-2.194286 8.704a95.573333 95.573333 0 0 0 88.624762 116.760381 91.599238 91.599238 0 0 0 86.991238-66.291809 94.793143 94.793143 0 0 0 180.857905 0 91.574857 91.574857 0 0 0 86.649905 66.291809 93.135238 93.135238 0 0 0 91.014095-95.475809 98.986667 98.986667 0 0 0-3.657143-26.331429z m-104.277333-35.937524H351.865905a22.893714 22.893714 0 0 1 0-44.860952H672.426667a22.918095 22.918095 0 0 1 0 44.860952z m16.822857 203.166477a129.584762 129.584762 0 0 1-88.015238-34.328381 133.607619 133.607619 0 0 1-178.956191 0 130.023619 130.023619 0 0 1-87.771428 34.352762 127.024762 127.024762 0 0 1-58.026667-14.092191v175.835429a32.963048 32.963048 0 0 0 32.036571 33.645714h407.161905a32.963048 32.963048 0 0 0 32.060953-33.645714v-175.713524a127.024762 127.024762 0 0 1-58.026667 14.067809l-0.487619-0.121904z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

Iconjifenshangcheng.defaultProps = {
  size: 18,
};

export default Iconjifenshangcheng;
