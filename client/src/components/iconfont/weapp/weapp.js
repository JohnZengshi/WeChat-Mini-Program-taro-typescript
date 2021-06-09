Component({
  properties: {
    // xiankefu | fapiaotaitou | kaipiaojilu | jinriyoujia | wodejifen | zhongjiangjilu | wodeliuyan | shezhi | gouwuche | huiyuanchongzhi | huiyuanma | huiyuankaika | jingtengshanfu | wodechoujiang | saomazhifu | zhandianfenbu | jifenshangcheng | youhuiquan | wodefenxiao | home | lishidingdan | refresh | ic-huiyuankachongzhi | ic-xuanzhong | ic-weixinzhifu | ic-huiyuanzhifu | clear_keyboard | ic_huiyuan_erweima | ic_huiyuan_huiyuanka | ic_huiyuan_erweimafenge | addToShoppingCart | ic_shenheshibai | ic_shenhezhong | jia | jian | huoqudingwei | sort-down | sort-up | sort-no | xiugai | car | sangedian | erweima | fenxiang | shanchu | dingwei | tianjiachepai | sousuo | weixin | yiwancheng-dingdan | zhifuchenggong | yiwancheng | ic_daifahuo- | ic_daifukuan | ic_daifukuan- | ic_daifahuo | ic_daishouhuo- | ic_daishouhuo | ic_jiayoudingdantubiao | ic_dizhibianji | ic_jiayouzhan | ic_shangpinweixuanzhong | ic_shangpinxuanzhong | ic_arrowdown_ | ic_close_ | ic_xianshijine | ic_More_ | ic_home_sel | ic_home_nor | ic_shop_nor | ic_shop_nor- | ic_shop_sel | ic_shoppingcart_nor- | ic_shoppingcart_nor | ic_shoppingcart_sel | ic_user_nor | ic_user_sel
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 18 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
