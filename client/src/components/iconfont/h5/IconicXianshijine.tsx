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

const IconicXianshijine: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M51.2 378.88c0-40.96 25.6-81.92 66.56-92.16C209.92 256 378.88 204.8 512 204.8c133.12 0 302.08 51.2 394.24 76.8 40.96 15.36 66.56 51.2 66.56 92.16v399.36c0 25.6-10.24 51.2-30.72 71.68l-92.16 92.16c-20.48 20.48-46.08 30.72-71.68 30.72H245.76c-25.6 0-51.2-10.24-71.68-30.72l-92.16-92.16c-20.48-15.36-30.72-40.96-30.72-66.56V378.88z"
        fill={getIconColor(color, 0, '#FFC925')}
      />
      <path
        d="M783.36 1013.76H240.64c-30.72 0-66.56-10.24-92.16-30.72l-87.04-71.68c-30.72-25.6-51.2-66.56-51.2-107.52V153.6C10.24 76.8 71.68 10.24 153.6 10.24h716.8c76.8 0 143.36 61.44 143.36 143.36v645.12c0 40.96-20.48 81.92-51.2 107.52L870.4 977.92c-25.6 20.48-56.32 35.84-87.04 35.84zM153.6 92.16c-35.84 0-61.44 25.6-61.44 61.44v645.12c0 20.48 10.24 35.84 20.48 51.2L199.68 921.6c10.24 10.24 25.6 15.36 40.96 15.36h542.72c15.36 0 30.72-5.12 40.96-15.36l87.04-71.68c15.36-10.24 25.6-30.72 25.6-51.2V153.6c0-35.84-30.72-61.44-61.44-61.44H153.6z"
        fill={getIconColor(color, 1, '#27231A')}
      />
      <path
        d="M481.28 588.8H394.24v-40.96h92.16v-46.08l-10.24-15.36H394.24v-46.08h61.44L358.4 230.4h66.56l87.04 204.8 87.04-204.8H665.6l-97.28 209.92h61.44v40.96h-81.92l-10.24 15.36v40.96h92.16v40.96h-92.16v102.4H481.28v-92.16z"
        fill={getIconColor(color, 2, '#27231A')}
      />
      <path
        d="M552.96 706.56H471.04v-102.4H378.88v-66.56h92.16v-30.72l-5.12-10.24H378.88V430.08h56.32L337.92 215.04h92.16L512 404.48l81.92-184.32h92.16l-97.28 209.92h56.32v66.56h-87.04l-5.12 5.12v25.6h92.16v66.56h-92.16v112.64z m-56.32-30.72h30.72v-102.4h92.16v-15.36h-92.16V496.64l10.24-25.6H614.4v-15.36h-71.68l97.28-209.92h-35.84L512 465.92 414.72 245.76h-35.84l97.28 209.92H404.48v15.36h76.8l15.36 30.72v56.32H404.48v15.36h92.16v102.4z"
        fill={getIconColor(color, 3, '#27231A')}
      />
      <path
        d="M51.2 778.24h921.6v76.8H51.2z"
        fill={getIconColor(color, 4, '#27231A')}
      />
    </svg>
  );
};

IconicXianshijine.defaultProps = {
  size: 18,
};

export default IconicXianshijine;
