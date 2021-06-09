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

const IconicClose: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M721.066667 311.466667c17.066667 17.066667 17.066667 42.666667 0 59.733333l-149.333334 149.333333 149.333334 149.333334c17.066667 17.066667 17.066667 42.666667 0 59.733333-17.066667 17.066667-42.666667 17.066667-59.733334 0L512 584.533333l-149.333333 149.333334c-17.066667 17.066667-42.666667 17.066667-59.733334 0-17.066667-17.066667-17.066667-42.666667 0-59.733334l149.333334-149.333333-149.333334-153.6c-17.066667-17.066667-17.066667-42.666667 0-59.733333 17.066667-17.066667 42.666667-17.066667 59.733334 0l149.333333 149.333333 149.333333-149.333333c17.066667-17.066667 46.933333-17.066667 59.733334 0z"
        fill={getIconColor(color, 0, '#27231A')}
      />
    </svg>
  );
};

IconicClose.defaultProps = {
  size: 18,
};

export default IconicClose;
