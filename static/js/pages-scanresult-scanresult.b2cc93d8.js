(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-scanresult-scanresult"],
  {
    "0970": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("c2ef"),
        o = n("73b8");
      for (var a in o)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(a);
      var u = n("f0c5"),
        c = Object(u["a"])(
          o["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "3372b4f5",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    "73b8": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("f6f5"),
        o = n.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = o.a;
    },
    c2ef: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            { staticStyle: { height: "100%", "background-color": "#F7F7F7" } },
            [
              n(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  n(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("扫描结果")]
                  ),
                ],
                2
              ),
              n(
                "v-uni-view",
                {
                  staticStyle: {
                    padding: "40upx",
                    position: "relative",
                    top: "25%",
                    "margin-bottom": "40upx",
                  },
                },
                [
                  n(
                    "v-uni-view",
                    {
                      staticStyle: {
                        "text-align": "center",
                        color: "#CCCCCC",
                        position: "absolute",
                        top: "-30upx",
                        left: "50%",
                        transform: "translateX(-50%)",
                      },
                    },
                    [t._v("已识别到二维码内容")]
                  ),
                  n(
                    "v-uni-view",
                    {
                      staticStyle: {
                        "text-align": "center",
                        "-webkit-user-select": "text",
                      },
                    },
                    [t._v(t._s(t.text))]
                  ),
                  n(
                    "v-uni-view",
                    {
                      staticStyle: {
                        color: "#32b1fe",
                        "text-align": "center",
                        position: "absolute",
                        bottom: "-80upx",
                        left: "50%",
                        transform: "translateX(-50%)",
                        "font-size": "32upx",
                        padding: "40upx",
                      },
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.copyToClip.apply(void 0, arguments);
                        },
                      },
                    },
                    [t._v("复制内容")]
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        o = [];
    },
    f6f5: function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = {
        data: function () {
          return { text: "" };
        },
        onLoad: function (t) {
          this.text = decodeURIComponent(t.text);
        },
        methods: {
          copyToClip: function (t) {
            uni.setClipboardData({
              data: this.text,
              success: function () {
                return uni.showToast({
                  mask: !0,
                  title: "已复制至剪贴板",
                  duration: 2e3,
                  icon: "success",
                });
              },
              fail: function () {
                return uni.showToast({
                  mask: !0,
                  title: "复制失败",
                  duration: 2e3,
                  icon: "none",
                });
              },
            });
          },
        },
      };
      e.default = i;
    },
  },
]);
