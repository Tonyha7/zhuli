(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-advertising-advertising"],
  {
    "0cbe": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("f0b9"),
        r = n.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = r.a;
    },
    "3dff": function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 无任何数据的空布局 */.mescroll-empty[data-v-d9aa3fda]{box-sizing:border-box;width:100%;padding:%?100?% %?50?%;text-align:center}.mescroll-empty.empty-fixed[data-v-d9aa3fda]{z-index:99;position:absolute; /*transform会使fixed失效,最终会降级为absolute */top:%?100?%;left:0}.mescroll-empty .empty-icon[data-v-d9aa3fda]{width:%?280?%;height:%?280?%}.mescroll-empty .empty-tip[data-v-d9aa3fda]{margin-top:%?20?%;font-size:%?24?%;color:grey}.mescroll-empty .empty-btn[data-v-d9aa3fda]{display:inline-block;margin-top:%?40?%;min-width:%?200?%;padding:%?18?%;font-size:%?28?%;border:%?1?% solid #32b1fe;border-radius:%?60?%;color:#32b1fe}.mescroll-empty .empty-btn[data-v-d9aa3fda]:active{opacity:.75}",
          "",
        ]),
        (t.exports = e);
    },
    5350: function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = {
        down: { offset: 80, native: !1 },
        up: {
          offset: 150,
          toTop: {
            src: "https://www.mescroll.com/img/mescroll-totop.png",
            offset: 1e3,
            right: 20,
            bottom: 120,
            width: 72,
          },
          empty: {
            use: !0,
            icon: "https://www.mescroll.com/img/mescroll-empty.png",
          },
        },
        i18n: {
          zh: {
            down: {
              textInOffset: "下拉刷新",
              textOutOffset: "释放更新",
              textLoading: "加载中 ...",
              textSuccess: "加载成功",
              textErr: "加载失败",
            },
            up: {
              textLoading: "加载中 ...",
              textNoMore: "-- END --",
              empty: { tip: "~ 空空如也 ~" },
            },
          },
          en: {
            down: {
              textInOffset: "drop down refresh",
              textOutOffset: "release updates",
              textLoading: "loading ...",
              textSuccess: "loaded successfully",
              textErr: "loading failed",
            },
            up: {
              textLoading: "loading ...",
              textNoMore: "-- END --",
              empty: { tip: "~ absolutely empty ~" },
            },
          },
        },
      };
      e.default = i;
    },
    "5a1b": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("8abc"),
        r = n("fa40");
      for (var a in r)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      n("adab");
      var o = n("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "d9aa3fda",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    6408: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var i = { mescrollEmpty: n("5a1b").default },
        r = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            {
              staticClass: "advertising_page",
              staticStyle: { height: "100%" },
            },
            [
              n(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  n(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("领券")]
                  ),
                ],
                2
              ),
              n(
                "v-uni-view",
                { staticClass: "ads" },
                [
                  t._l(t.ads, function (e) {
                    return n(
                      "v-uni-view",
                      {
                        key: e.id,
                        staticClass: "ads_item",
                        on: {
                          click: function (n) {
                            (arguments[0] = n = t.$handleEvent(n)),
                              t.handleGoFinishAd(e);
                          },
                        },
                      },
                      [
                        n("v-uni-image", {
                          attrs: { src: e.icon, mode: "aspectFit" },
                        }),
                        n("v-uni-view", { staticClass: "title" }, [
                          t._v(t._s(e.title)),
                        ]),
                        n("v-uni-view", { staticClass: "btn" }, [t._v("领券")]),
                      ],
                      1
                    );
                  }),
                  t.ads.length < 1
                    ? n(
                        "v-uni-view",
                        {
                          staticStyle: {
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                          },
                        },
                        [
                          n("mescroll-empty", {
                            attrs: { option: { tip: "暂无广告数据" } },
                          }),
                        ],
                        1
                      )
                    : t._e(),
                ],
                2
              ),
            ],
            1
          );
        },
        a = [];
    },
    "8abc": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            {
              staticClass: "mescroll-empty",
              class: { "empty-fixed": t.option.fixed },
              style: { "z-index": t.option.zIndex, top: t.option.top },
            },
            [
              n(
                "v-uni-view",
                [
                  t.icon
                    ? n("v-uni-image", {
                        staticClass: "empty-icon",
                        attrs: { src: t.icon, mode: "widthFix" },
                      })
                    : t._e(),
                ],
                1
              ),
              t.tip
                ? n("v-uni-view", { staticClass: "empty-tip" }, [
                    t._v(t._s(t.tip)),
                  ])
                : t._e(),
              t.btnText
                ? n(
                    "v-uni-view",
                    {
                      staticClass: "empty-btn",
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.emptyClick.apply(void 0, arguments);
                        },
                      },
                    },
                    [t._v(t._s(t.btnText))]
                  )
                : t._e(),
            ],
            1
          );
        },
        r = [];
    },
    "8ba7": function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = {
          def: "zh",
          getType: function () {
            return uni.getStorageSync("mescroll-i18n") || this.def;
          },
          setType: function (t) {
            uni.setStorageSync("mescroll-i18n", t);
          },
        },
        r = i;
      e.default = r;
    },
    "92e5": function (t, e, n) {
      var i = n("af46");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var r = n("4f06").default;
      r("4f7ca096", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    9732: function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var r = i(n("5350")),
        a = i(n("8ba7")),
        o = {
          props: {
            option: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          computed: {
            icon: function () {
              if (null != this.option.icon) return this.option.icon;
              var t = a.default.getType();
              return this.option.i18n
                ? this.option.i18n[t].icon
                : r.default.i18n[t].up.empty.icon || r.default.up.empty.icon;
            },
            tip: function () {
              if (null != this.option.tip) return this.option.tip;
              var t = a.default.getType();
              return this.option.i18n
                ? this.option.i18n[t].tip
                : r.default.i18n[t].up.empty.tip || r.default.up.empty.tip;
            },
            btnText: function () {
              if (this.option.i18n) {
                var t = a.default.getType();
                return this.option.i18n[t].btnText;
              }
              return this.option.btnText;
            },
          },
          methods: {
            emptyClick: function () {
              this.$emit("emptyclick");
            },
          },
        };
      e.default = o;
    },
    "988d": function (t, e, n) {
      var i = n("3dff");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var r = n("4f06").default;
      r("5ec8b5c7", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    adab: function (t, e, n) {
      "use strict";
      var i = n("988d"),
        r = n.n(i);
      r.a;
    },
    af46: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.advertising_page[data-v-6e2011e4]{padding-top:%?30?%;text-align:center}.advertising_page uni-image[data-v-6e2011e4]{height:100%;width:100%}.advertising_page .ads[data-v-6e2011e4]{width:100%}.advertising_page .ads .ads_item[data-v-6e2011e4]{display:flex;justify-content:space-between;align-items:center;width:100%;background-color:#f7f7f7;padding:%?30?%;margin-bottom:%?30?%}.advertising_page .ads .ads_item uni-image[data-v-6e2011e4]{width:%?100?%;height:%?100?%;border-radius:%?16?%;margin-right:%?20?%}.advertising_page .ads .ads_item .title[data-v-6e2011e4]{font-size:%?32?%}.advertising_page .ads .ads_item .btn[data-v-6e2011e4]{border-radius:50%;background-color:red;width:%?80?%;height:%?80?%;color:#fff;line-height:%?80?%}.advertising_page .finished[data-v-6e2011e4]{position:fixed;bottom:%?100?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);height:%?100?%;width:%?600?%;border-radius:%?50?%;background-color:#ff5000;color:#fff;line-height:%?100?%;font-size:%?36?%}',
          "",
        ]),
        (t.exports = e);
    },
    bd48: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("6408"),
        r = n("0cbe");
      for (var a in r)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return r[t];
            });
          })(a);
      n("eaa7");
      var o = n("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "6e2011e4",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    eaa7: function (t, e, n) {
      "use strict";
      var i = n("92e5"),
        r = n.n(i);
      r.a;
    },
    f0b9: function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82"),
          Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var i = n("995e"),
          r = {
            data: function () {
              return {
                user: {},
                pid: "",
                appid: "",
                ads: [],
                activeItem: {},
                tag_id: "",
                media_id: "",
              };
            },
            created: function () {
              (this.user = this.$store.state.user),
                (this.pid = this.$store.state.project.server_appid),
                (this.appid =
                  this.$store.state.project.serverAppid ||
                  this.$store.state.project.server_id),
                t.log(this.$store.state.project, "project============="),
                this.getAdvertsiing();
            },
            onShow: function () {
              this.activeItem.imps && this.getUserFinishedAd(this.activeItem);
            },
            methods: {
              getAdvertsiing: function () {
                var e = this;
                t.log(this.pid),
                  t.log(this.user.openid),
                  t.log(this.user.phone),
                  t.log(this.appid),
                  (0, i.GetAdvertsiing)({
                    pid: this.pid,
                    openid: this.user.openid,
                    page: "advertising",
                    phone: this.user.phone,
                    appid: this.appid,
                  })
                    .then(function (n) {
                      t.log(n, "res=========>"),
                        (e.ads = n.ads),
                        (e.media_id = n.media_id),
                        (e.tag_id = n.tag_id);
                    })
                    .catch(function (e) {
                      t.log(e), uni.showToast({ title: e, icon: "error" });
                    });
              },
              getUserFinishedAd: function (t) {
                var e = this;
                (0, i.GetUserFinishedAd)({
                  pid: this.pid,
                  openid: this.user.openid,
                  imps: t.imps[0],
                  mediaid: this.media_id,
                  tagid: this.tag_id,
                  adid: t.id,
                  phone: this.user.phone,
                  appid: this.appid,
                })
                  .then(function (t) {
                    uni.showToast({
                      title: "您已完成广告，请查看优惠券!",
                      icon: "none",
                    });
                  })
                  .catch(function (t) {
                    "empty_result" === t && e.getAdvertsiing(),
                      uni.showToast({ title: t, icon: "error" });
                  });
              },
              handleGoFinishAd: function (t) {
                (this.activeItem = t),
                  my.ap.navigateToAlipayPage({
                    path: encodeURIComponent(
                      "https://render.alipay.com/p/h5/cloudcode-fe/redirect.html?target=".concat(
                        encodeURIComponent(t.crurl)
                      )
                    ),
                  });
              },
              handleGoTest: function () {},
            },
          };
        e.default = r;
      }).call(this, n("5a52")["default"]);
    },
    fa40: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("9732"),
        r = n.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = r.a;
    },
  },
]);
