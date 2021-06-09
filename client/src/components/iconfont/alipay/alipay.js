Component({
  props: {
    // xiankefu | fapiaotaitou | kaipiaojilu | jinriyoujia | wodejifen | zhongjiangjilu | wodeliuyan | shezhi | gouwuche | huiyuanchongzhi | huiyuanma | huiyuankaika | jingtengshanfu | wodechoujiang | saomazhifu | zhandianfenbu | jifenshangcheng | youhuiquan | wodefenxiao | home | lishidingdan | refresh | ic-huiyuankachongzhi | ic-xuanzhong | ic-weixinzhifu | ic-huiyuanzhifu | clear_keyboard | ic_huiyuan_erweima | ic_huiyuan_huiyuanka | ic_huiyuan_erweimafenge | addToShoppingCart | ic_shenheshibai | ic_shenhezhong | jia | jian | huoqudingwei | sort-down | sort-up | sort-no | xiugai | car | sangedian | erweima | fenxiang | shanchu | dingwei | tianjiachepai | sousuo | weixin | yiwancheng-dingdan | zhifuchenggong | yiwancheng | ic_daifahuo- | ic_daifukuan | ic_daifukuan- | ic_daifahuo | ic_daishouhuo- | ic_daishouhuo | ic_jiayoudingdantubiao | ic_dizhibianji | ic_jiayouzhan | ic_shangpinweixuanzhong | ic_shangpinxuanzhong | ic_arrowdown_ | ic_close_ | ic_xianshijine | ic_More_ | ic_home_sel | ic_home_nor | ic_shop_nor | ic_shop_nor- | ic_shop_sel | ic_shoppingcart_nor- | ic_shoppingcart_nor | ic_shoppingcart_sel | ic_user_nor | ic_user_sel
    name: null,
    // string | string[]
    color: '',
    size: 18,
  },
  data: {
    quot: '"',
    svgSize: 18,
    isStr: true,
  },
  didMount() {
    const size = this.props.size;
    const color = this.props.color;

    this.setData({
      isStr: typeof color === 'string',
    });

    if (size !== this.data.svgSize) {
      this.setData({
        svgSize: size / 750 * my.getSystemInfoSync().windowWidth,
      });
    }
  },
  disUpdate(prevProps) {
    const size = this.props.size;
    const color = this.props.color;

    if (color !== prevProps.color) {
      this.setData({
        isStr: typeof color === 'string',
      });
    }

    if (size !== prevProps.size) {
      this.setData({
        svgSize: size / 750 * my.getSystemInfoSync().windowWidth,
      });
    }
  },
});
