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

const IconicHuiyuankachongzhi: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 69.818182C267.636364 69.818182 69.818182 267.636364 69.818182 512s197.818182 442.181818 442.181818 442.181818 442.181818-197.818182 442.181818-442.181818S756.363636 69.818182 512 69.818182z m128 418.909091v46.545454H558.545455v32.581818h83.781818v46.545455H558.545455V698.181818h-97.745455v-86.109091h-81.454545v-46.545454h81.454545V535.272727h-81.454545v-46.545454h60.50909L349.090909 325.818182h111.709091l48.872727 118.690909h2.327273l53.527273-118.690909H674.909091l-93.090909 162.909091h58.181818z"
        fill={getIconColor(color, 0, '#27231A')}
      />
    </svg>
  );
};

IconicHuiyuankachongzhi.defaultProps = {
  size: 18,
};

export default IconicHuiyuankachongzhi;
