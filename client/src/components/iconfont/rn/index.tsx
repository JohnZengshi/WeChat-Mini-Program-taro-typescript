/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconFrown from './IconFrown';
import IconSmile from './IconSmile';
import IconStar from './IconStar';
import IconHeartFill from './IconHeartFill';
import IconCustomerserviceFill from './IconCustomerserviceFill';
import IconPlayCircle from './IconPlayCircle';
import IconReloadtime from './IconReloadtime';
import IconMessage from './IconMessage';
import IconHome from './IconHome';
import IconSound from './IconSound';
import IconEyeFill from './IconEyeFill';
import IconEyecloseFill from './IconEyecloseFill';
import IconCheck from './IconCheck';
import IconArrowleft from './IconArrowleft';
import IconAdduser from './IconAdduser';
import IconDeleteuser from './IconDeleteuser';
import IconUser from './IconUser';
import IconFileAdd from './IconFileAdd';
import IconDelete from './IconDelete';
import IconRight from './IconRight';
import IconArrowright from './IconArrowright';
import IconUnorderedlist from './IconUnorderedlist';
import IconOrderedlist from './IconOrderedlist';
import IconFileAddFill from './IconFileAddFill';
import IconDeleteFill from './IconDeleteFill';
import IconSwitchuser from './IconSwitchuser';
import IconAppstoreadd from './IconAppstoreadd';
import IconRotateRight from './IconRotateRight';

export type IconNames = 'frown' | 'smile' | 'star' | 'heart-fill' | 'customerservice-fill' | 'play-circle' | 'reloadtime' | 'message' | 'home' | 'sound' | 'eye-fill' | 'eyeclose-fill' | 'check' | 'arrowleft' | 'adduser' | 'deleteuser' | 'user' | 'file-add' | 'delete' | 'right' | 'arrowright' | 'unorderedlist' | 'orderedlist' | 'file-add-fill' | 'delete-fill' | 'switchuser' | 'appstoreadd' | 'rotate-right';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'frown':
      return <IconFrown {...rest} />;
    case 'smile':
      return <IconSmile {...rest} />;
    case 'star':
      return <IconStar {...rest} />;
    case 'heart-fill':
      return <IconHeartFill {...rest} />;
    case 'customerservice-fill':
      return <IconCustomerserviceFill {...rest} />;
    case 'play-circle':
      return <IconPlayCircle {...rest} />;
    case 'reloadtime':
      return <IconReloadtime {...rest} />;
    case 'message':
      return <IconMessage {...rest} />;
    case 'home':
      return <IconHome {...rest} />;
    case 'sound':
      return <IconSound {...rest} />;
    case 'eye-fill':
      return <IconEyeFill {...rest} />;
    case 'eyeclose-fill':
      return <IconEyecloseFill {...rest} />;
    case 'check':
      return <IconCheck {...rest} />;
    case 'arrowleft':
      return <IconArrowleft {...rest} />;
    case 'adduser':
      return <IconAdduser {...rest} />;
    case 'deleteuser':
      return <IconDeleteuser {...rest} />;
    case 'user':
      return <IconUser {...rest} />;
    case 'file-add':
      return <IconFileAdd {...rest} />;
    case 'delete':
      return <IconDelete {...rest} />;
    case 'right':
      return <IconRight {...rest} />;
    case 'arrowright':
      return <IconArrowright {...rest} />;
    case 'unorderedlist':
      return <IconUnorderedlist {...rest} />;
    case 'orderedlist':
      return <IconOrderedlist {...rest} />;
    case 'file-add-fill':
      return <IconFileAddFill {...rest} />;
    case 'delete-fill':
      return <IconDeleteFill {...rest} />;
    case 'switchuser':
      return <IconSwitchuser {...rest} />;
    case 'appstoreadd':
      return <IconAppstoreadd {...rest} />;
    case 'rotate-right':
      return <IconRotateRight {...rest} />;
  }

  return null;
};

export default IconFont;
