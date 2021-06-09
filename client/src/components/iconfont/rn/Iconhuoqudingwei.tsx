/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const Iconhuoqudingwei: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.562 394.73c-64.629 0-117.032 52.403-117.032 117.032 0 64.628 52.403 117.027 117.032 117.027 64.628 0 117.027-52.399 117.027-117.027 0-64.629-52.399-117.032-117.027-117.032z m0 175.543c-32.258 0-58.516-26.254-58.516-58.511 0-32.258 26.258-58.516 58.516-58.516 32.257 0 58.511 26.258 58.511 58.516 0 32.257-26.254 58.511-58.511 58.511z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M921.159 482.504h-60C847.073 312.015 711.304 176.246 540.815 162.16v-60h-58.511v60C311.847 176.246 176.073 312.015 161.96 482.504h-60v58.511h60c14.113 170.489 149.887 306.258 320.344 320.344v60h58.511v-60c170.489-14.086 306.258-149.855 320.344-320.344h60v-58.511z m-380.344 320.34v-57.028h-58.511v57.028c-138-13.77-248.059-123.829-261.828-261.829h57.027v-58.511h-57.027c13.769-138 123.828-248.059 261.828-261.828v57.027h58.511v-57.027c138 13.769 248.059 123.828 261.829 261.828h-57.028v58.511h57.028c-13.77 138-123.829 248.059-261.829 261.829z m0 0"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconhuoqudingwei.defaultProps = {
  size: 18,
};

export default Iconhuoqudingwei;
