(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-authmanage-authmanage"],
  {
    "02e8": function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          ".url-list[data-v-94e5733e]{overflow-y:scroll!important;-webkit-overflow-scrolling:auto}.url-item[data-v-94e5733e]{background-color:#fff;height:%?85?%;line-height:%?85?%;display:flex;align-items:center;flex-direction:row;flex:1;justify-content:space-between}.url-item uni-image[data-v-94e5733e]{margin:%?20?% %?20?%;width:%?50?%;height:%?50?%}.url-item .title[data-v-94e5733e]{width:100%}.url-item .cuicon[data-v-94e5733e]{font-size:%?30?%;margin:%?0?% %?30?%;color:#ccc}",
          "",
        ]),
        (t.exports = e);
    },
    "0c7a": function (t, e, a) {
      "use strict";
      a("7a82");
      var i = a("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = i(a("6972")),
        s = {
          data: function () {
            return {
              userdata: this.$store.state.user,
              project: this.$store.state.project,
              withholdstatus: {
                alipayswitch: 0,
                wechatswitch: 0,
                alipaystatus: 0,
                wechatstatus: 0,
              },
            };
          },
          onShow: function () {},
          methods: {
            loadpaystatus: function () {
              var t = this;
              n.default
                .sendapppost(
                  this.project.server_addr +
                    n.default.API_PATH.querywithholdstatus,
                  {}
                )
                .then(function (e) {
                  uni.hideLoading(),
                    n.default.isNullOrEmpty(e) ||
                      ((t.withholdstatus.alipaystatus = e.alipay.status),
                      (t.withholdstatus.wechatstatus = e.wechat.status));
                })
                .catch(function (t) {
                  uni.hideLoading(), n.default.showalert("提示", t);
                });
            },
            controlaction: function (t) {
              switch (t) {
                case "alipay":
                  if (1 == this.withholdstatus.alipaystatus) return;
                  uni.showLoading({ title: "加载中", mask: !0 }),
                    n.default
                      .sendapppost(
                        this.project.server_addr +
                          n.default.API_PATH
                            .createalipayagreementsignparameters,
                        { staff_id: this.userdata.detailinfo.id }
                      )
                      .then(function (t) {
                        uni.hideLoading(),
                          zl.system.launchApplication({ url: t });
                      })
                      .catch(function (t) {
                        uni.hideLoading(), n.default.showalert("提示", t);
                      });
                  break;
                case "wechat":
                  uni.showToast({ title: "暂未开放", position: "center" });
                  break;
                default:
                  break;
              }
            },
          },
        };
      e.default = s;
    },
    4262: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("83d9"),
        n = a("4662");
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      a("b790");
      var u = a("f0c5"),
        o = Object(u["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "94e5733e",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = o.exports;
    },
    4662: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("0c7a"),
        n = a.n(i);
      for (var s in i)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(s);
      e["default"] = n.a;
    },
    "83d9": function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return i;
      }),
        a.d(e, "c", function () {
          return n;
        }),
        a.d(e, "a", function () {});
      var i = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-uni-view",
            [
              a(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  a(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("授权管理")]
                  ),
                ],
                2
              ),
              a("div", { staticClass: "url-list" }, [
                a(
                  "div",
                  {
                    staticClass: "url-item",
                    on: {
                      click: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)),
                          t.navigatetourl("kefu");
                      },
                    },
                  },
                  [
                    a("v-uni-image", {
                      attrs: { src: "/static/wechat.png", mode: "aspectFit" },
                    }),
                    a("v-uni-text", { staticClass: "title" }, [t._v("微信")]),
                    a("v-uni-text", { staticClass: "cuicon cuIcon-right" }),
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
    b790: function (t, e, a) {
      "use strict";
      var i = a("d1eb"),
        n = a.n(i);
      n.a;
    },
    d1eb: function (t, e, a) {
      var i = a("02e8");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("681d4fb8", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
