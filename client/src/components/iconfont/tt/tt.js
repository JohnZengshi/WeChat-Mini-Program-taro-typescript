Component({
  properties: {
    // heart-fill | customerservice-fill | play-circle | reloadtime | message | home | sound | eye-fill | eyeclose-fill | check | arrowleft | adduser | deleteuser | user | file-add | delete | right | arrowright | unorderedlist | orderedlist | file-add-fill | delete-fill | switchuser | appstoreadd | rotate-right
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
          svgSize: size / 750 * tt.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    svgSize: 18 / 750 * tt.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
});
