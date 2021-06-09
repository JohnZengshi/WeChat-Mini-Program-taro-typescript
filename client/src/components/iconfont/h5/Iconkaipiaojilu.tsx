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

const Iconkaipiaojilu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M640 85.333333H384a42.666667 42.666667 0 0 0-42.666667 42.666667v85.333333a42.666667 42.666667 0 0 0 42.666667 42.666667h256a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-42.666667-42.666667z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <path
        d="M309.333333 426.666667A32 32 0 0 1 341.333333 394.666667h341.333334a32 32 0 0 1 0 64H341.333333a32 32 0 0 1-32-32zM341.333333 522.666667a32 32 0 0 0 0 64h256a32 32 0 0 0 0-64H341.333333z"
        fill={getIconColor(color, 1, '#000000')}
      />
      <path
        d="M309.333333 138.666667V128c0-41.216 33.450667-74.666667 74.666667-74.666667h256c41.216 0 74.666667 33.450667 74.666667 74.666667v10.666667H768A117.333333 117.333333 0 0 1 885.333333 256v597.333333A117.333333 117.333333 0 0 1 768 970.666667H256A117.333333 117.333333 0 0 1 138.666667 853.333333V256A117.333333 117.333333 0 0 1 256 138.666667h53.333333zM373.333333 128v85.333333c0 5.888 4.778667 10.666667 10.666667 10.666667h256a10.666667 10.666667 0 0 0 10.666667-10.666667V128a10.666667 10.666667 0 0 0-10.666667-10.666667H384a10.666667 10.666667 0 0 0-10.666667 10.666667z m341.333334 74.666667V213.333333A74.666667 74.666667 0 0 1 640 288H384A74.666667 74.666667 0 0 1 309.333333 213.333333v-10.666666H256A53.333333 53.333333 0 0 0 202.666667 256v597.333333A53.333333 53.333333 0 0 0 256 906.666667h512A53.333333 53.333333 0 0 0 821.333333 853.333333V256A53.333333 53.333333 0 0 0 768 202.666667h-53.333333z"
        fill={getIconColor(color, 2, '#000000')}
      />
    </svg>
  );
};

Iconkaipiaojilu.defaultProps = {
  size: 18,
};

export default Iconkaipiaojilu;
