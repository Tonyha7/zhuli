(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-servicenotopened-servicenotopened"],
  {
    "1a6b": function (t, e, n) {
      t.exports = n.p + "pagesA/static/nodevice_bg.png";
    },
    "475b": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("b537"),
        a = n.n(i);
      for (var c in i)
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(c);
      e["default"] = a.a;
    },
    b537: function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("99af"),
        n("a9e3");
      var i = {
        data: function () {
          return {};
        },
        computed: {
          cubarstyle: function () {
            return "height:"
              .concat(this.CustomBar, "px;padding-top:")
              .concat(this.StatusBar, "px;");
          },
          contentstyle: function () {
            return "position:absolute;top:"
              .concat(
                this.CustomBar,
                "px;left:0;bottom:0;right:0;height:calc(100% - "
              )
              .concat(Number(2 * this.CustomBar), "px);");
          },
        },
        onLoad: function () {},
        methods: {},
      };
      e.default = i;
    },
    c661: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            [
              i("v-uni-view", {
                staticClass: "viewimgbg",
                staticStyle: {
                  background: "linear-gradient(to right, #32b1fe, #338af9)",
                },
              }),
              i(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  i(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("提示")]
                  ),
                ],
                2
              ),
              i(
                "v-uni-view",
                { staticClass: "empty-container", style: t.contentstyle },
                [
                  i("v-uni-image", {
                    staticStyle: { width: "400upx", height: "400upx" },
                    attrs: { src: n("1a6b") },
                  }),
                  i("v-uni-view", { staticStyle: { height: "40upx" } }),
                  i(
                    "v-uni-view",
                    {
                      staticClass: "text-white",
                      staticStyle: { "margin-top": "20upx" },
                    },
                    [t._v("该服务暂未对你所在的学校开放")]
                  ),
                  i(
                    "v-uni-view",
                    {
                      staticClass: "text-white",
                      staticStyle: { "margin-top": "20upx" },
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.goback.apply(void 0, arguments);
                        },
                      },
                    },
                    [t._v("[返回]")]
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [];
    },
    cca0: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("c661"),
        a = n("475b");
      for (var c in a)
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(c);
      var o = n("f0c5"),
        u = Object(o["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "90e8f8b0",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = u.exports;
    },
  },
]);
