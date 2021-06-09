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

const Iconsousuo: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M885.76 846.08L725.333333 682.666667a337.493333 337.493333 0 1 0-42.666666 42.666666l161.706666 161.706667a28.16 28.16 0 1 0 39.68-39.68z m-418.986667-98.56a280.746667 280.746667 0 1 1 280.746667-280.746667 281.173333 281.173333 0 0 1-280.746667 280.746667z"
        fill={getIconColor(color, 0, '#27231A')}
      />
    </svg>
  );
};

Iconsousuo.defaultProps = {
  size: 18,
};

export default Iconsousuo;
