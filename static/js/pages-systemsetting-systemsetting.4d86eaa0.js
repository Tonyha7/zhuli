(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-systemsetting-systemsetting"],
  {
    "0cbf": function (t, e, i) {
      var a = i("9c5d");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("d77aa89c", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "56bf": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            [
              i(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  i(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("系统设置")]
                  ),
                ],
                2
              ),
              i("div", { staticClass: "url-list" }, [
                i(
                  "div",
                  { staticClass: "url-item" },
                  [
                    i("v-uni-text", { staticClass: "title" }, [
                      t._v("接收个性化推荐"),
                    ]),
                    i("v-uni-switch", {
                      ref: "AdSwitchRef",
                      attrs: { checked: t.limit_personal, color: "#32b1fe" },
                      on: {
                        change: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.AdSwitchChange.apply(void 0, arguments);
                        },
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ],
            1
          );
        },
        n = [];
    },
    "57a1": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("f9b2"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "6ef9": function (t, e, i) {
      "use strict";
      var a = i("0cbf"),
        n = i.n(a);
      n.a;
    },
    "9c5d": function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          "uni-switch .uni-switch-input.uni-switch-input-checked[data-v-a943e5bc]{background-color:#32b1fe!important;border-color:#32b1fe!important}.url-list[data-v-a943e5bc]{overflow-y:scroll!important;-webkit-overflow-scrolling:auto;padding:%?20?%}.url-item[data-v-a943e5bc]{background-color:#fff;height:%?100?%;line-height:%?100?%;display:flex;align-items:center;flex-direction:row;flex:1;justify-content:space-between;padding:0 10px}.url-item uni-image[data-v-a943e5bc]{margin:%?20?% %?20?%;width:%?60?%!important;height:%?60?%!important}.url-item .title[data-v-a943e5bc]{width:75%}.url-item .content[data-v-a943e5bc]{width:25%;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.url-item .cuicon[data-v-a943e5bc]{font-size:%?30?%;margin:%?0?% %?30?%}",
          "",
        ]),
        (t.exports = e);
    },
    a7ea: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("56bf"),
        n = i("57a1");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("6ef9");
      var r = i("f0c5"),
        c = Object(r["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "a943e5bc",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    f9b2: function (t, e, i) {
      "use strict";
      (function (t) {
        i("7a82");
        var a = i("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = a(i("6972")),
          o = {
            components: {},
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                limit_personal: this.$store.getters.AdLimitPersonalFlag,
              };
            },
            computed: {},
            onLoad: function () {},
            onShow: function () {},
            methods: {
              AdSwitchChange: function (e) {
                var i = this;
                if (
                  ((this.limit_personal = e.detail.value), !this.limit_personal)
                )
                  return n.default.showalert(
                    "提示",
                    "关闭后将不会再为你推荐个性化内容，确定要关闭吗?",
                    function () {
                      t.log("-------点击取消----"), (i.limit_personal = !0);
                    },
                    function () {
                      i.$store.commit("SetAdLimitPersonalFlag", "false"),
                        zl.ad.switchLimitPersonal(!1);
                    },
                    !0
                  );
                this.$store.commit("SetAdLimitPersonalFlag", "true"),
                  zl.ad.switchLimitPersonal(!0);
              },
              navigatetourl: function (t) {
                return uni.navigateTo({ url: "" });
              },
            },
          };
        e.default = o;
      }).call(this, i("5a52")["default"]);
    },
  },
]);
