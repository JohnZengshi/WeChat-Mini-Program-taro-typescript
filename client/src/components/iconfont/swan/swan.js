Component({
  properties: {
    // adduser | deleteuser | user | file-add | delete | right | arrowright | unorderedlist | orderedlist | file-add-fill | delete-fill | switchuser | appstoreadd | rotate-right
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function(color) {
        this.setData({
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * swan.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    quot: '"',
    svgSize: 18 / 750 * swan.getSystemInfoSync().windowWidth,
    isStr: true,
  },
});
