/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import Taro from '@tarojs/taro';

export type IconNames = 'xiankefu' | 'fapiaotaitou' | 'kaipiaojilu' | 'jinriyoujia' | 'wodejifen' | 'zhongjiangjilu' | 'wodeliuyan' | 'shezhi' | 'gouwuche' | 'huiyuanchongzhi' | 'huiyuanma' | 'huiyuankaika' | 'jingtengshanfu' | 'wodechoujiang' | 'saomazhifu' | 'zhandianfenbu' | 'jifenshangcheng' | 'youhuiquan' | 'wodefenxiao' | 'home' | 'lishidingdan' | 'refresh' | 'ic-huiyuankachongzhi' | 'ic-xuanzhong' | 'ic-weixinzhifu' | 'ic-huiyuanzhifu' | 'clear_keyboard' | 'ic_huiyuan_erweima' | 'ic_huiyuan_huiyuanka' | 'ic_huiyuan_erweimafenge' | 'addToShoppingCart' | 'ic_shenheshibai' | 'ic_shenhezhong' | 'jia' | 'jian' | 'huoqudingwei' | 'sort-down' | 'sort-up' | 'sort-no' | 'xiugai' | 'car' | 'sangedian' | 'erweima' | 'fenxiang' | 'shanchu' | 'dingwei' | 'tianjiachepai' | 'sousuo' | 'weixin' | 'yiwancheng-dingdan' | 'zhifuchenggong' | 'yiwancheng' | 'ic_daifahuo-' | 'ic_daifukuan' | 'ic_daifukuan-' | 'ic_daifahuo' | 'ic_daishouhuo-' | 'ic_daishouhuo' | 'ic_jiayoudingdantubiao' | 'ic_dizhibianji' | 'ic_jiayouzhan' | 'ic_shangpinweixuanzhong' | 'ic_shangpinxuanzhong' | 'ic_arrowdown_' | 'ic_close_' | 'ic_xianshijine' | 'ic_More_' | 'ic_home_sel' | 'ic_home_nor' | 'ic_shop_nor' | 'ic_shop_nor-' | 'ic_shop_sel' | 'ic_shoppingcart_nor-' | 'ic_shoppingcart_nor' | 'ic_shoppingcart_sel' | 'ic_user_nor' | 'ic_user_sel';

interface Props {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  // @ts-ignore
  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
