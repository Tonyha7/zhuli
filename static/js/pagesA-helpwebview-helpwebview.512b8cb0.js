(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-helpwebview-helpwebview"],
  {
    "3cc7": function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82");
        var i = n("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = i(n("f07e")),
          c = i(n("c964"));
        n("99af"), n("d3b7");
        var u = i(n("6972")),
          o =
            (i(n("5cd9")),
            {
              components: {},
              data: function () {
                return {
                  userdata: this.$store.state.user,
                  project: this.$store.state.project,
                  titletext: "",
                  url: "",
                  html: "",
                  unusefulClicked: !1,
                  usefulClicked: !1,
                  type: !1,
                  id: void 0,
                };
              },
              onLoad: function (e) {
                t.log(e);
                var n = decodeURIComponent(e.url);
                if (
                  ((this.type = e.act_type),
                  (this.titletext = e.title),
                  (this.url = n),
                  this.RequestHtmlDataStr(n),
                  "common_help" == this.type)
                ) {
                  this.id = e.id;
                  var i = uni.getStorageSync("common_help_useful_" + this.id);
                  1 === i
                    ? ((this.unusefulClicked = !1), (this.usefulClicked = !0))
                    : 0 === i &&
                      ((this.unusefulClicked = !0), (this.usefulClicked = !1));
                }
                this.url += "?t=".concat(new Date().getTime());
              },
              computed: {
                contentContainerStyle: function () {
                  var t = "height:calc(100% - "
                    .concat(this.$store.state.SystemInfo.CustomBar, "px ")
                    .concat(
                      "common_help" == this.type
                        ? " - ".concat(uni.upx2px(120), "px")
                        : "",
                      ");"
                    );
                  return t;
                },
              },
              filters: {},
              methods: {
                checkcanBack: function () {
                  var t = this;
                  return (0, c.default)(
                    (0, a.default)().mark(function e() {
                      var n;
                      return (0, a.default)().wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), t.canBack();
                            case 2:
                              (n = e.sent),
                                n ? null.back() : uni.navigateBack();
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                canBack: function () {
                  return new Promise(function (t, e) {
                    null.canBack(function (e) {
                      (n = !0), e.canBack ? t(!0) : t(!1);
                    });
                    var n = !1,
                      i = 0;
                    (function e() {
                      if (((i += 1), !n))
                        return i > 2
                          ? ((i = 0), void t(!1))
                          : void setTimeout(function () {
                              e();
                            }, 100);
                    })();
                  });
                },
                RequestHtmlDataStr: function (e) {
                  var n = this;
                  uni.request({
                    url: ""
                      .concat(e, "?timespan=")
                      .concat(new Date().getTime()),
                    header: { "content-type": "text/html" },
                    dataType: "text",
                    success: function (t) {
                      n.html = t.data;
                    },
                    fail: function (e) {
                      t.log(e);
                    },
                  });
                },
                clickUseful: function (t) {
                  var e = "";
                  0 == t
                    ? ((this.unusefulClicked = !0),
                      (this.usefulClicked = !1),
                      (e = "非常抱歉，我们已收到您的反馈。"))
                    : ((this.usefulClicked = !0),
                      (this.unusefulClicked = !1),
                      (e = "感谢您的支持,我们将努力为您提供更好的服务。")),
                    uni.showToast({
                      position: "bottom",
                      icon: "none",
                      title: e,
                      duration: 2e3,
                    }),
                    this.id &&
                      (uni.setStorageSync("common_help_useful_" + this.id, t),
                      u.default
                        .sendapppost(
                          this.project.server_addr +
                            u.default.API_PATH.commonhelpstar,
                          { id: this.id, star: t }
                        )
                        .then(function (t) {})
                        .catch(function (t) {}));
                },
              },
            });
        e.default = o;
      }).call(this, n("5a52")["default"]);
    },
    7698: function (t, e, n) {
      var i = n("c8a6");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("fe14a2ba", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "9f0e": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var i = { mpHtml: n("b035").default },
        a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            { staticStyle: { height: "100%" } },
            [
              n(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  n(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v(t._s(t.titletext))]
                  ),
                ],
                2
              ),
              n(
                "v-uni-view",
                {
                  staticClass: "contentContainer",
                  style: t.contentContainerStyle,
                },
                [n("mp-html", { attrs: { content: t.html, selectable: !0 } })],
                1
              ),
              "common_help" == t.type
                ? n(
                    "v-uni-view",
                    {
                      staticClass: "action-foot text-xl flex  justify-center ",
                    },
                    [
                      n(
                        "v-uni-view",
                        {
                          class: [t.usefulClicked ? "text-blue" : "text-grey"],
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.clickUseful(1);
                            },
                          },
                        },
                        [
                          n("v-uni-text", {
                            staticClass: "lg   cuIcon-appreciate",
                          }),
                          n("v-uni-text", [t._v("有用")]),
                        ],
                        1
                      ),
                      n("v-uni-view", { staticStyle: { width: "100upx" } }),
                      n(
                        "v-uni-view",
                        {
                          class: [
                            t.unusefulClicked ? "text-blue" : "text-grey",
                          ],
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.clickUseful(0);
                            },
                          },
                        },
                        [
                          n(
                            "v-uni-text",
                            {
                              staticClass:
                                "cu-item text-center text-xl  mirrorRotate",
                              staticStyle: { display: "inline-block" },
                            },
                            [
                              n("v-uni-text", {
                                staticClass:
                                  "lg cuIcon-appreciate mirrorRotate",
                              }),
                            ],
                            1
                          ),
                          n("v-uni-text", [t._v("没用")]),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        c = [];
    },
    af78: function (t, e, n) {
      "use strict";
      var i = n("7698"),
        a = n.n(i);
      a.a;
    },
    b73f: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("9f0e"),
        a = n("c9db");
      for (var c in a)
        ["default"].indexOf(c) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(c);
      n("af78");
      var u = n("f0c5"),
        o = Object(u["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "215fe2f6",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = o.exports;
    },
    c8a6: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          ".mirrorRotate[data-v-215fe2f6]{-moz-transform:scaleY(-1);-webkit-transform:scaleY(-1);-o-transform:scaleY(-1);transform:scaleY(-1)}.contentContainer[data-v-215fe2f6]{padding:%?10?% %?20?%;overflow-y:scroll}.html-container[data-v-215fe2f6]{padding:0 %?20?%}.action-foot[data-v-215fe2f6]{width:100%;padding:%?30?%}",
          "",
        ]),
        (t.exports = e);
    },
    c9db: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("3cc7"),
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
  },
]);
