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

const Iconfapiaotaitou: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M597.333333 85.333333v256h256"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <path
        d="M309.333333 597.333333a32 32 0 0 1 32-32h341.333334a32 32 0 0 1 0 64H341.333333a32 32 0 0 1-32-32zM341.333333 693.333333a32 32 0 0 0 0 64h256a32 32 0 0 0 0-64H341.333333z"
        fill={getIconColor(color, 1, '#000000')}
      />
      <path
        d="M885.333333 341.589333V853.333333A117.333333 117.333333 0 0 1 768 970.666667H256A117.333333 117.333333 0 0 1 138.666667 853.333333V170.666667A117.333333 117.333333 0 0 1 256 53.333333h341.333333a32 32 0 0 1 22.613334 9.386667l265.386666 278.869333z m-320-224.256H256A53.333333 53.333333 0 0 0 202.666667 170.666667v682.666666A53.333333 53.333333 0 0 0 256 906.666667h512A53.333333 53.333333 0 0 0 821.333333 853.333333V373.333333H597.333333a32 32 0 0 1-32-32V117.333333z m210.773334 192l-146.773334-146.773333v146.773333h146.773334zM885.333333 341.589333l-0.341333-4.864A32.128 32.128 0 0 1 885.333333 341.333333v0.256z"
        fill={getIconColor(color, 2, '#000000')}
      />
    </svg>
  );
};

Iconfapiaotaitou.defaultProps = {
  size: 18,
};

export default Iconfapiaotaitou;
