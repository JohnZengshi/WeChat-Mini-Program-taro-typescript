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

const IconicDaifukuan: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M938.666667 844.8H149.333333C85.333333 844.8 29.866667 793.6 29.866667 725.333333V298.666667c0-64 51.2-119.466667 119.466666-119.466667H938.666667c29.866667 0 51.2 25.6 51.2 51.2v554.666667c0 34.133333-21.333333 59.733333-51.2 59.733333zM149.333333 247.466667c-29.866667 0-55.466667 21.333333-55.466666 51.2v426.666666c0 29.866667 25.6 51.2 51.2 51.2h776.533333V247.466667H149.333333z"
        fill={getIconColor(color, 0, '#27231A')}
      />
      <path
        d="M597.333333 512c0-72.533333 55.466667-128 128-128h213.333334v256h-213.333334c-72.533333 0-128-55.466667-128-128z"
        fill={getIconColor(color, 1, '#FFC925')}
      />
      <path
        d="M938.666667 674.133333h-213.333334c-89.6 0-162.133333-72.533333-162.133333-162.133333 0-89.6 72.533333-162.133333 162.133333-162.133333h243.2v320l-29.866666 4.266666z m-213.333334-256c-51.2 0-93.866667 42.666667-93.866666 93.866667 0 51.2 42.666667 93.866667 93.866666 93.866667h179.2V418.133333H725.333333z"
        fill={getIconColor(color, 2, '#27231A')}
      />
      <path
        d="M768 512m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z"
        fill={getIconColor(color, 3, '#27231A')}
      />
    </svg>
  );
};

IconicDaifukuan.defaultProps = {
  size: 18,
};

export default IconicDaifukuan;
