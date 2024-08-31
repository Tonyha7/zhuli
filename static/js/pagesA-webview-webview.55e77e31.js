(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-webview-webview"],
  {
    "0b05": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return c;
        }),
        n.d(e, "a", function () {});
      var a = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            "v-uni-view",
            [
              e(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  e(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [this._v(this._s(this.titletext))]
                  ),
                ],
                2
              ),
              e("v-uni-web-view", { attrs: { src: this.url } }),
            ],
            1
          );
        },
        c = [];
    },
    "2a84": function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82");
        var a = n("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var c = a(n("f07e")),
          r = a(n("c964"));
        n("99af"), n("d3b7"), n("e9c4");
        a(n("6972"));
        var i = {
          components: {},
          data: function () {
            return {
              titletext: "",
              url: "",
              html: "",
              type: !1,
              id: void 0,
              scene: "",
            };
          },
          onUnload: function () {
            this.ResetLastViewStatus();
          },
          onLoad: function (t) {
            var e = decodeURIComponent(t.url);
            (this.url = e),
              (this.type = t.act_type),
              (this.titletext = t.title),
              (this.scene = t.scene);
          },
          computed: {
            cubarstyle: function () {
              return "height:"
                .concat(this.CustomBar, "px;padding-top:")
                .concat(this.StatusBar, "px;");
            },
          },
          filters: {},
          methods: {
            checkcanBack: function () {
              var e = this;
              return (0, r.default)(
                (0, c.default)().mark(function n() {
                  var a;
                  return (0, c.default)().wrap(function (n) {
                    while (1)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), e.canBack();
                        case 2:
                          (a = n.sent),
                            t.log(a),
                            a ? null.back() : uni.navigateBack();
                        case 5:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              )();
            },
            ResetLastViewStatus: function () {
              var t = getCurrentPages(),
                e = t[t.length - 2];
              switch (e.route) {
                case "pages/immediatepaymentorder/immediatepaymentorder":
                  e.$vm.queryorderstatus("active");
                  break;
                case "pages/rechargeconfirm/rechargeconfirm":
                  setTimeout(function () {
                    e.$vm.BackFromAbcAction(t[t.length - 1].options.orderid);
                  }, 500);
                  break;
                case "pagesA/consume/consume":
                  "bleconn_consume" == e.$vm.btnstatusobj.startconsumeaction &&
                    e.$vm.changDeviceStatusUI("devreadyconnect_status");
                  break;
                default:
                  break;
              }
            },
            canBack: function () {
              return (
                t.log("-------"),
                new Promise(function (e, n) {
                  null.canBack(function (n) {
                    (a = !0),
                      t.log(JSON.stringify(n)),
                      n.canBack ? e(!0) : e(!1);
                  });
                  var a = !1,
                    c = 0;
                  (function t() {
                    if (((c += 1), !a))
                      return c > 2
                        ? ((c = 0), void e(!1))
                        : void setTimeout(function () {
                            t();
                          }, 100);
                  })();
                })
              );
            },
          },
        };
        e.default = i;
      }).call(this, n("5a52")["default"]);
    },
    "4cc7": function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("2a84"),
        c = n.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(r);
      e["default"] = c.a;
    },
    6500: function (t, e, n) {
      "use strict";
      var a = n("eb38"),
        c = n.n(a);
      c.a;
    },
    "69e4": function (t, e, n) {
      var a = n("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          ".mirrorRotate[data-v-48d4d256]{-moz-transform:scaleY(-1);-webkit-transform:scaleY(-1);-o-transform:scaleY(-1);transform:scaleY(-1)}",
          "",
        ]),
        (t.exports = e);
    },
    "9fd6": function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("0b05"),
        c = n("4cc7");
      for (var r in c)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return c[t];
            });
          })(r);
      n("6500");
      var i = n("f0c5"),
        o = Object(i["a"])(
          c["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "48d4d256",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = o.exports;
    },
    eb38: function (t, e, n) {
      var a = n("69e4");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var c = n("4f06").default;
      c("4168e95a", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
