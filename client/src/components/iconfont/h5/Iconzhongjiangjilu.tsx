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

const Iconzhongjiangjilu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M938.666667 298.666667H85.333333v213.333333h853.333334V298.666667z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <path
        d="M181.333333 192c0 26.666667 7.68 52.522667 21.802667 74.666667H85.333333a32 32 0 0 0-32 32v213.333333c0 17.664 14.336 32 32 32h53.333334V938.666667c0 17.664 14.336 32 32 32h682.666666a32 32 0 0 0 32-32v-394.666667H938.666667a32 32 0 0 0 32-32V298.666667a32 32 0 0 0-32-32h-117.802667a138.666667 138.666667 0 0 0-116.864-213.333334c-92.458667 0-148.821333 66.517333-180.053333 123.264a397.696 397.696 0 0 0-11.946667 23.594667 397.696 397.696 0 0 0-11.946667-23.594667C468.821333 119.850667 412.458667 53.333333 320 53.333333A138.666667 138.666667 0 0 0 181.333333 192zM320 117.333333c56.874667 0 96.512 40.149333 123.946667 90.069334 11.477333 20.864 19.925333 41.898667 25.813333 59.264H320a74.666667 74.666667 0 1 1 0-149.333334z m234.24 149.333334c5.888-17.365333 14.336-38.4 25.813333-59.264 27.434667-49.92 67.072-90.069333 123.946667-90.069334a74.666667 74.666667 0 1 1 0 149.333334h-149.76z m-10.24 64h362.666667v149.333333h-362.666667v-149.333333z m-64 0v149.333333h-362.666667v-149.333333h362.666667z m64 576v-362.666667h277.333333v362.666667h-277.333333z m-64-362.666667v362.666667h-277.333333v-362.666667h277.333333z"
        fill={getIconColor(color, 1, '#000000')}
      />
    </svg>
  );
};

Iconzhongjiangjilu.defaultProps = {
  size: 18,
};

export default Iconzhongjiangjilu;