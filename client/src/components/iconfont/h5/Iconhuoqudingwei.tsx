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

const Iconhuoqudingwei: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M511.562 394.73c-64.629 0-117.032 52.403-117.032 117.032 0 64.628 52.403 117.027 117.032 117.027 64.628 0 117.027-52.399 117.027-117.027 0-64.629-52.399-117.032-117.027-117.032z m0 175.543c-32.258 0-58.516-26.254-58.516-58.511 0-32.258 26.258-58.516 58.516-58.516 32.257 0 58.511 26.258 58.511 58.516 0 32.257-26.254 58.511-58.511 58.511z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M921.159 482.504h-60C847.073 312.015 711.304 176.246 540.815 162.16v-60h-58.511v60C311.847 176.246 176.073 312.015 161.96 482.504h-60v58.511h60c14.113 170.489 149.887 306.258 320.344 320.344v60h58.511v-60c170.489-14.086 306.258-149.855 320.344-320.344h60v-58.511z m-380.344 320.34v-57.028h-58.511v57.028c-138-13.77-248.059-123.829-261.828-261.829h57.027v-58.511h-57.027c13.769-138 123.828-248.059 261.828-261.828v57.027h58.511v-57.027c138 13.769 248.059 123.828 261.829 261.828h-57.028v58.511h57.028c-13.77 138-123.829 248.059-261.829 261.829z m0 0"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

Iconhuoqudingwei.defaultProps = {
  size: 18,
};

export default Iconhuoqudingwei;
