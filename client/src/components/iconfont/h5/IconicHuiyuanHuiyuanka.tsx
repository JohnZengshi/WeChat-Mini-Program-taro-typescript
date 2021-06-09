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

const IconicHuiyuanHuiyuanka: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 830.902857c-23.405714 0-43.885714-8.777143-58.514286-26.331428L149.211429 468.114286c-29.257143-32.182857-29.257143-78.994286-2.925715-111.177143l114.102857-134.582857c14.628571-17.554286 38.034286-29.257143 61.44-29.257143h377.417143c23.405714 0 46.811429 11.702857 61.44 29.257143l114.102857 134.582857c26.331429 32.182857 26.331429 81.92-2.925714 111.177143L570.514286 804.571429c-14.628571 17.554286-38.034286 26.331429-58.514286 26.331428z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <path
        d="M506.148571 643.657143c-5.851429 0-11.702857-2.925714-14.628571-5.851429l-198.948571-207.725714c-8.777143-8.777143-8.777143-20.48 0-29.257143 8.777143-8.777143 20.48-8.777143 29.257142 0l184.32 193.097143 193.097143-193.097143c8.777143-8.777143 20.48-8.777143 29.257143 0 8.777143 8.777143 8.777143 20.48 0 29.257143l-207.725714 207.725714c-2.925714 2.925714-8.777143 5.851429-14.628572 5.851429z"
        fill={getIconColor(color, 1, '#FFF7E1')}
      />
    </svg>
  );
};

IconicHuiyuanHuiyuanka.defaultProps = {
  size: 18,
};

export default IconicHuiyuanHuiyuanka;
