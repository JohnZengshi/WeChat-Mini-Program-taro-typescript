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

const Icongouwuche: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M85.333333 42.666667a42.666667 42.666667 0 0 0 0 85.333333h119.978667l31.786667 162.901333c0.170667 1.194667 0.426667 2.346667 0.682666 3.456l64.768 332.330667c5.418667 27.861333 20.224 53.162667 42.154667 71.253333a118.997333 118.997333 0 0 0 77.653333 27.392h376.32a118.997333 118.997333 0 0 0 77.653334-27.392 122.666667 122.666667 0 0 0 42.154666-71.296l62.122667-334.421333A42.666667 42.666667 0 0 0 938.666667 241.792H314.453333l-32.085333-164.608A42.666667 42.666667 0 0 0 240.469333 42.666667H85.333333z m301.013334 567.765333L331.093333 327.125333h556.245334l-52.608 283.306667v0.128a37.376 37.376 0 0 1-12.757334 21.632 33.664 33.664 0 0 1-22.101333 7.808H421.12a33.664 33.664 0 0 1-22.101333-7.808 37.376 37.376 0 0 1-12.714667-21.76zM298.666667 853.333333a85.333333 85.333333 0 1 1 170.666666 0 85.333333 85.333333 0 0 1-170.666666 0zM725.333333 853.333333a85.333333 85.333333 0 1 1 170.666667 0 85.333333 85.333333 0 0 1-170.666667 0z"
        fill={getIconColor(color, 0, '#27231A')}
      />
    </svg>
  );
};

Icongouwuche.defaultProps = {
  size: 18,
};

export default Icongouwuche;
