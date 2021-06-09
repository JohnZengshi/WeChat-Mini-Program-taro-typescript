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

const IconicHuiyuanzhifu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M140.8 375.466667v46.933333h738.133333V375.466667H140.8z m405.333333 243.2h-42.666666l-42.666667 85.333333h42.666667l42.666666-85.333333z m93.866667 0h-42.666667l-42.666666 85.333333h42.666666l42.666667-85.333333z m170.666667 0h-123.733334l-42.666666 85.333333H768l42.666667-85.333333z m-17.066667-384c12.8 0 21.333333 4.266667 34.133333 8.533333 8.533333 4.266667 21.333333 12.8 29.866667 21.333333 8.533333 8.533333 12.8 17.066667 17.066667 29.866667 4.266667 12.8 8.533333 21.333333 4.266666 34.133333v375.466667c0 12.8 0 21.333333-4.266666 34.133333-4.266667 12.8-8.533333 21.333333-17.066667 29.866667-8.533333 8.533333-17.066667 12.8-29.866667 21.333333-8.533333 4.266667-21.333333 8.533333-34.133333 8.533334H230.4c-12.8 0-21.333333-4.266667-34.133333-8.533334-8.533333-4.266667-21.333333-12.8-29.866667-21.333333-8.533333-8.533333-12.8-17.066667-17.066667-29.866667-4.266667-12.8-8.533333-21.333333-4.266666-34.133333V324.266667c0-21.333333 8.533333-46.933333 25.6-64s38.4-25.6 59.733333-25.6h563.2z"
        fill={getIconColor(color, 0, '#FE5A49')}
      />
    </svg>
  );
};

IconicHuiyuanzhifu.defaultProps = {
  size: 18,
};

export default IconicHuiyuanzhifu;
