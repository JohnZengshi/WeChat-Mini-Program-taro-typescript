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

const IconicShenhezhong: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M273.066667 887.466667H136.533333c-34.133333 3.10303-65.163636-21.721212-68.266666-57.406061V136.533333c0-60.509091 12.412121-68.266667 68.266666-68.266666H682.666667c52.751515 0 69.818182 17.066667 69.818181 68.266666v68.266667c-1.551515 18.618182 10.860606 35.684848 31.030304 38.787879 18.618182 1.551515 35.684848-10.860606 38.787878-31.030303V136.533333C820.751515 35.684848 788.169697 0 682.666667 0H136.533333C69.818182 0 0 7.757576 0 133.430303v707.490909c0 13.963636 1.551515 26.375758 6.206061 40.339394 13.963636 44.993939 57.406061 76.024242 105.50303 74.472727h162.909091c18.618182 0 34.133333-15.515152 34.133333-34.133333-1.551515-18.618182-17.066667-34.133333-35.684848-34.133333z"
        fill={getIconColor(color, 0, '#E84840')}
      />
      <path
        d="M204.8 204.8c-18.618182 0-34.133333 15.515152-34.133333 34.133333 0 18.618182 15.515152 34.133333 34.133333 34.133334h409.6c18.618182 0 34.133333-15.515152 34.133333-34.133334 0-18.618182-15.515152-34.133333-34.133333-34.133333H204.8zM273.066667 409.6h-68.266667c-18.618182 0-34.133333 15.515152-34.133333 34.133333 0 18.618182 15.515152 34.133333 34.133333 34.133334h68.266667c18.618182 0 34.133333-15.515152 34.133333-34.133334 0-18.618182-15.515152-34.133333-34.133333-34.133333zM682.666667 341.333333c-189.284848 0-341.333333 152.048485-341.333334 341.333334s152.048485 341.333333 341.333334 341.333333 341.333333-152.048485 341.333333-341.333333-152.048485-341.333333-341.333333-341.333334z m0 614.4c-150.49697 0-273.066667-122.569697-273.066667-273.066666 0-150.49697 122.569697-273.066667 273.066667-273.066667 150.49697 0 273.066667 122.569697 273.066666 273.066667 0 150.49697-122.569697 273.066667-273.066666 273.066666z"
        fill={getIconColor(color, 1, '#E84840')}
      />
      <path
        d="M851.781818 685.769697h-144.290909v-145.842424c-1.551515-15.515152-15.515152-26.375758-32.581818-24.824243-12.412121 1.551515-23.272727 12.412121-24.824243 24.824243v170.666666c-1.551515 15.515152 9.309091 29.478788 24.824243 32.581819h170.666667c15.515152 1.551515 29.478788-9.309091 32.581818-24.824243 0-15.515152-10.860606-29.478788-26.375758-32.581818z"
        fill={getIconColor(color, 2, '#E84840')}
      />
    </svg>
  );
};

IconicShenhezhong.defaultProps = {
  size: 18,
};

export default IconicShenhezhong;
