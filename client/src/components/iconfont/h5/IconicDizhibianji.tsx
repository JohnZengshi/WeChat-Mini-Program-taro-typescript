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

const IconicDizhibianji: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M810.666667 810.666667v4.266666-4.266666z m0 0v-285.866667c0-25.6 17.066667-42.666667 42.666666-42.666667s42.666667 17.066667 42.666667 42.666667v290.133333c0 46.933333-38.4 81.066667-85.333333 81.066667H213.333333c-46.933333 0-85.333333-34.133333-85.333333-81.066667V209.066667C128 162.133333 166.4 128 213.333333 128h388.266667c25.6 0 42.666667 17.066667 42.666667 42.666667s-17.066667 42.666667-42.666667 42.666666H213.333333v597.333334h597.333334zM213.333333 810.666667v0zM213.333333 209.066667v0z m328.533334 375.466666c-17.066667 17.066667-42.666667 17.066667-59.733334 0s-17.066667-42.666667 0-59.733333l341.333334-341.333333c17.066667-17.066667 42.666667-17.066667 59.733333 0 17.066667 17.066667 17.066667 42.666667 0 59.733333l-341.333333 341.333333z"
        fill={getIconColor(color, 0, '#27231A')}
      />
    </svg>
  );
};

IconicDizhibianji.defaultProps = {
  size: 18,
};

export default IconicDizhibianji;
