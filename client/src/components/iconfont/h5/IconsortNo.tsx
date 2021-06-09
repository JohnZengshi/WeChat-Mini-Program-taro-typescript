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

const IconsortNo: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M763.659 612.78h-503.316l251.659 301.174 251.659-301.174z"
        fill={getIconColor(color, 0, '#cdcdcd')}
      />
      <path
        d="M260.341 411.22h502.734l-251.075-301.174-251.659 301.174z"
        fill={getIconColor(color, 1, '#cdcdcd')}
      />
    </svg>
  );
};

IconsortNo.defaultProps = {
  size: 18,
};

export default IconsortNo;
