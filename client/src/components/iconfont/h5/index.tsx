/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
import Iconxiankefu from './Iconxiankefu';
import Iconfapiaotaitou from './Iconfapiaotaitou';
import Iconkaipiaojilu from './Iconkaipiaojilu';
import Iconjinriyoujia from './Iconjinriyoujia';
import Iconwodejifen from './Iconwodejifen';
import Iconzhongjiangjilu from './Iconzhongjiangjilu';
import Iconwodeliuyan from './Iconwodeliuyan';
import Iconshezhi from './Iconshezhi';
import Icongouwuche from './Icongouwuche';
import Iconhuiyuanchongzhi from './Iconhuiyuanchongzhi';
import Iconhuiyuanma from './Iconhuiyuanma';
import Iconhuiyuankaika from './Iconhuiyuankaika';
import Iconjingtengshanfu from './Iconjingtengshanfu';
import Iconwodechoujiang from './Iconwodechoujiang';
import Iconsaomazhifu from './Iconsaomazhifu';
import Iconzhandianfenbu from './Iconzhandianfenbu';
import Iconjifenshangcheng from './Iconjifenshangcheng';
import Iconyouhuiquan from './Iconyouhuiquan';
import Iconwodefenxiao from './Iconwodefenxiao';
import Iconhome from './Iconhome';
import Iconlishidingdan from './Iconlishidingdan';
import Iconrefresh from './Iconrefresh';
import IconicHuiyuankachongzhi from './IconicHuiyuankachongzhi';
import IconicXuanzhong from './IconicXuanzhong';
import IconicWeixinzhifu from './IconicWeixinzhifu';
import IconicHuiyuanzhifu from './IconicHuiyuanzhifu';
import IconclearKeyboard from './IconclearKeyboard';
import IconicHuiyuanErweima from './IconicHuiyuanErweima';
import IconicHuiyuanHuiyuanka from './IconicHuiyuanHuiyuanka';
import IconicHuiyuanErweimafenge from './IconicHuiyuanErweimafenge';
import IconaddToShoppingCart from './IconaddToShoppingCart';
import IconicShenheshibai from './IconicShenheshibai';
import IconicShenhezhong from './IconicShenhezhong';
import Iconjia from './Iconjia';
import Iconjian from './Iconjian';
import Iconhuoqudingwei from './Iconhuoqudingwei';
import IconsortDown from './IconsortDown';
import IconsortUp from './IconsortUp';
import IconsortNo from './IconsortNo';
import Iconxiugai from './Iconxiugai';
import Iconcar from './Iconcar';
import Iconsangedian from './Iconsangedian';
import Iconerweima from './Iconerweima';
import Iconfenxiang from './Iconfenxiang';
import Iconshanchu from './Iconshanchu';
import Icondingwei from './Icondingwei';
import Icontianjiachepai from './Icontianjiachepai';
import Iconsousuo from './Iconsousuo';
import Iconweixin from './Iconweixin';
import IconyiwanchengDingdan from './IconyiwanchengDingdan';
import Iconzhifuchenggong from './Iconzhifuchenggong';
import Iconyiwancheng from './Iconyiwancheng';
import IconicDaifahuo from './IconicDaifahuo';
import IconicDaifukuan from './IconicDaifukuan';
import IconicDaifukuan from './IconicDaifukuan';
import IconicDaifahuo from './IconicDaifahuo';
import IconicDaishouhuo from './IconicDaishouhuo';
import IconicDaishouhuo from './IconicDaishouhuo';
import IconicJiayoudingdantubiao from './IconicJiayoudingdantubiao';
import IconicDizhibianji from './IconicDizhibianji';
import IconicJiayouzhan from './IconicJiayouzhan';
import IconicShangpinweixuanzhong from './IconicShangpinweixuanzhong';
import IconicShangpinxuanzhong from './IconicShangpinxuanzhong';
import IconicArrowdown from './IconicArrowdown';
import IconicClose from './IconicClose';
import IconicXianshijine from './IconicXianshijine';
import IconicMore from './IconicMore';
import IconicHomeSel from './IconicHomeSel';
import IconicHomeNor from './IconicHomeNor';
import IconicShopNor from './IconicShopNor';
import IconicShopNor from './IconicShopNor';
import IconicShopSel from './IconicShopSel';
import IconicShoppingcartNor from './IconicShoppingcartNor';
import IconicShoppingcartNor from './IconicShoppingcartNor';
import IconicShoppingcartSel from './IconicShoppingcartSel';
import IconicUserNor from './IconicUserNor';
import IconicUserSel from './IconicUserSel';

export type IconNames = 'xiankefu' | 'fapiaotaitou' | 'kaipiaojilu' | 'jinriyoujia' | 'wodejifen' | 'zhongjiangjilu' | 'wodeliuyan' | 'shezhi' | 'gouwuche' | 'huiyuanchongzhi' | 'huiyuanma' | 'huiyuankaika' | 'jingtengshanfu' | 'wodechoujiang' | 'saomazhifu' | 'zhandianfenbu' | 'jifenshangcheng' | 'youhuiquan' | 'wodefenxiao' | 'home' | 'lishidingdan' | 'refresh' | 'ic-huiyuankachongzhi' | 'ic-xuanzhong' | 'ic-weixinzhifu' | 'ic-huiyuanzhifu' | 'clear_keyboard' | 'ic_huiyuan_erweima' | 'ic_huiyuan_huiyuanka' | 'ic_huiyuan_erweimafenge' | 'addToShoppingCart' | 'ic_shenheshibai' | 'ic_shenhezhong' | 'jia' | 'jian' | 'huoqudingwei' | 'sort-down' | 'sort-up' | 'sort-no' | 'xiugai' | 'car' | 'sangedian' | 'erweima' | 'fenxiang' | 'shanchu' | 'dingwei' | 'tianjiachepai' | 'sousuo' | 'weixin' | 'yiwancheng-dingdan' | 'zhifuchenggong' | 'yiwancheng' | 'ic_daifahuo-' | 'ic_daifukuan' | 'ic_daifukuan-' | 'ic_daifahuo' | 'ic_daishouhuo-' | 'ic_daishouhuo' | 'ic_jiayoudingdantubiao' | 'ic_dizhibianji' | 'ic_jiayouzhan' | 'ic_shangpinweixuanzhong' | 'ic_shangpinxuanzhong' | 'ic_arrowdown_' | 'ic_close_' | 'ic_xianshijine' | 'ic_More_' | 'ic_home_sel' | 'ic_home_nor' | 'ic_shop_nor' | 'ic_shop_nor-' | 'ic_shop_sel' | 'ic_shoppingcart_nor-' | 'ic_shoppingcart_nor' | 'ic_shoppingcart_sel' | 'ic_user_nor' | 'ic_user_sel';

interface Props extends DOMAttributes<SVGElement> {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'xiankefu':
      return <Iconxiankefu {...rest} />;
    case 'fapiaotaitou':
      return <Iconfapiaotaitou {...rest} />;
    case 'kaipiaojilu':
      return <Iconkaipiaojilu {...rest} />;
    case 'jinriyoujia':
      return <Iconjinriyoujia {...rest} />;
    case 'wodejifen':
      return <Iconwodejifen {...rest} />;
    case 'zhongjiangjilu':
      return <Iconzhongjiangjilu {...rest} />;
    case 'wodeliuyan':
      return <Iconwodeliuyan {...rest} />;
    case 'shezhi':
      return <Iconshezhi {...rest} />;
    case 'gouwuche':
      return <Icongouwuche {...rest} />;
    case 'huiyuanchongzhi':
      return <Iconhuiyuanchongzhi {...rest} />;
    case 'huiyuanma':
      return <Iconhuiyuanma {...rest} />;
    case 'huiyuankaika':
      return <Iconhuiyuankaika {...rest} />;
    case 'jingtengshanfu':
      return <Iconjingtengshanfu {...rest} />;
    case 'wodechoujiang':
      return <Iconwodechoujiang {...rest} />;
    case 'saomazhifu':
      return <Iconsaomazhifu {...rest} />;
    case 'zhandianfenbu':
      return <Iconzhandianfenbu {...rest} />;
    case 'jifenshangcheng':
      return <Iconjifenshangcheng {...rest} />;
    case 'youhuiquan':
      return <Iconyouhuiquan {...rest} />;
    case 'wodefenxiao':
      return <Iconwodefenxiao {...rest} />;
    case 'home':
      return <Iconhome {...rest} />;
    case 'lishidingdan':
      return <Iconlishidingdan {...rest} />;
    case 'refresh':
      return <Iconrefresh {...rest} />;
    case 'ic-huiyuankachongzhi':
      return <IconicHuiyuankachongzhi {...rest} />;
    case 'ic-xuanzhong':
      return <IconicXuanzhong {...rest} />;
    case 'ic-weixinzhifu':
      return <IconicWeixinzhifu {...rest} />;
    case 'ic-huiyuanzhifu':
      return <IconicHuiyuanzhifu {...rest} />;
    case 'clear_keyboard':
      return <IconclearKeyboard {...rest} />;
    case 'ic_huiyuan_erweima':
      return <IconicHuiyuanErweima {...rest} />;
    case 'ic_huiyuan_huiyuanka':
      return <IconicHuiyuanHuiyuanka {...rest} />;
    case 'ic_huiyuan_erweimafenge':
      return <IconicHuiyuanErweimafenge {...rest} />;
    case 'addToShoppingCart':
      return <IconaddToShoppingCart {...rest} />;
    case 'ic_shenheshibai':
      return <IconicShenheshibai {...rest} />;
    case 'ic_shenhezhong':
      return <IconicShenhezhong {...rest} />;
    case 'jia':
      return <Iconjia {...rest} />;
    case 'jian':
      return <Iconjian {...rest} />;
    case 'huoqudingwei':
      return <Iconhuoqudingwei {...rest} />;
    case 'sort-down':
      return <IconsortDown {...rest} />;
    case 'sort-up':
      return <IconsortUp {...rest} />;
    case 'sort-no':
      return <IconsortNo {...rest} />;
    case 'xiugai':
      return <Iconxiugai {...rest} />;
    case 'car':
      return <Iconcar {...rest} />;
    case 'sangedian':
      return <Iconsangedian {...rest} />;
    case 'erweima':
      return <Iconerweima {...rest} />;
    case 'fenxiang':
      return <Iconfenxiang {...rest} />;
    case 'shanchu':
      return <Iconshanchu {...rest} />;
    case 'dingwei':
      return <Icondingwei {...rest} />;
    case 'tianjiachepai':
      return <Icontianjiachepai {...rest} />;
    case 'sousuo':
      return <Iconsousuo {...rest} />;
    case 'weixin':
      return <Iconweixin {...rest} />;
    case 'yiwancheng-dingdan':
      return <IconyiwanchengDingdan {...rest} />;
    case 'zhifuchenggong':
      return <Iconzhifuchenggong {...rest} />;
    case 'yiwancheng':
      return <Iconyiwancheng {...rest} />;
    case 'ic_daifahuo-':
      return <IconicDaifahuo {...rest} />;
    case 'ic_daifukuan':
      return <IconicDaifukuan {...rest} />;
    case 'ic_daifukuan-':
      return <IconicDaifukuan {...rest} />;
    case 'ic_daifahuo':
      return <IconicDaifahuo {...rest} />;
    case 'ic_daishouhuo-':
      return <IconicDaishouhuo {...rest} />;
    case 'ic_daishouhuo':
      return <IconicDaishouhuo {...rest} />;
    case 'ic_jiayoudingdantubiao':
      return <IconicJiayoudingdantubiao {...rest} />;
    case 'ic_dizhibianji':
      return <IconicDizhibianji {...rest} />;
    case 'ic_jiayouzhan':
      return <IconicJiayouzhan {...rest} />;
    case 'ic_shangpinweixuanzhong':
      return <IconicShangpinweixuanzhong {...rest} />;
    case 'ic_shangpinxuanzhong':
      return <IconicShangpinxuanzhong {...rest} />;
    case 'ic_arrowdown_':
      return <IconicArrowdown {...rest} />;
    case 'ic_close_':
      return <IconicClose {...rest} />;
    case 'ic_xianshijine':
      return <IconicXianshijine {...rest} />;
    case 'ic_More_':
      return <IconicMore {...rest} />;
    case 'ic_home_sel':
      return <IconicHomeSel {...rest} />;
    case 'ic_home_nor':
      return <IconicHomeNor {...rest} />;
    case 'ic_shop_nor':
      return <IconicShopNor {...rest} />;
    case 'ic_shop_nor-':
      return <IconicShopNor {...rest} />;
    case 'ic_shop_sel':
      return <IconicShopSel {...rest} />;
    case 'ic_shoppingcart_nor-':
      return <IconicShoppingcartNor {...rest} />;
    case 'ic_shoppingcart_nor':
      return <IconicShoppingcartNor {...rest} />;
    case 'ic_shoppingcart_sel':
      return <IconicShoppingcartSel {...rest} />;
    case 'ic_user_nor':
      return <IconicUserNor {...rest} />;
    case 'ic_user_sel':
      return <IconicUserSel {...rest} />;

  }

  return null;
};

export default IconFont;
