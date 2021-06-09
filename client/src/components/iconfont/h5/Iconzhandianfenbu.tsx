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

const Iconzhandianfenbu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#E75586')}
      />
      <path
        d="M609.52381 417.645714c0 95.98781-170.666667 358.473143-170.666667 358.473143s-170.666667-262.485333-170.666667-358.473143c0-96.01219 76.409905-173.83619 170.666667-173.83619s170.666667 77.824 170.666667 173.83619z m-97.52381-7.241143a73.142857 73.142857 0 1 0-146.285714 0 73.142857 73.142857 0 0 0 146.285714 0zM658.285714 727.356952s-41.057524-56.783238-69.90019-111.981714c8.533333-21.065143 16.65219-41.886476 24.185905-62.025143a48.761905 48.761905 0 1 0 20.74819-58.855619c7.070476-21.577143 12.946286-41.593905 17.212952-59.392a94.841905 94.841905 0 0 1 7.753143-0.316952c53.881905 0 97.52381 45.494857 97.52381 101.595428 0 56.100571-97.52381 190.976-97.52381 190.976z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

Iconzhandianfenbu.defaultProps = {
  size: 18,
};

export default Iconzhandianfenbu;
