(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-consuming-consuming"],
  {
    "0c25": function (e, t, n) {
      "use strict";
      var i = n("3f72"),
        a = n.n(i);
      a.a;
    },
    "246c": function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("aaa9"),
        a = n("cf23");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      n("0c25");
      var r = n("f0c5"),
        d = Object(r["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "3ff2e04e",
          null,
          !1,
          i["a"],
          void 0
        );
      t["default"] = d.exports;
    },
    "28e1": function (e, t, n) {
      var i = n("24fb");
      (t = i(!1)),
        t.push([
          e.i,
          ".cardview[data-v-3ff2e04e]{font-size:14px;position:relative;overflow:hidden;margin:10px;border-radius:2px;background-color:#fff;background-clip:padding-box;box-shadow:0 1px 2px rgba(0,0,0,.3)\r\n\t/* border: 1px solid yellow; */}.cardview-header.cardview-media[data-v-3ff2e04e]{display:block;padding:10px}.cardview-content[data-v-3ff2e04e]{position:relative;font-size:14px}.cardview-footer[data-v-3ff2e04e]{color:#6d6d72;border-radius:0 0 2px 2px;padding:%?10?%;border-top:1px solid #ddd}.yuyue_time_img[data-v-3ff2e04e]{padding-top:%?20?%;width:%?60?%;height:%?60?%;padding-left:%?20?%}.detail-item[data-v-3ff2e04e]{font-size:1rem\r\n\t/* line-height: 2rem; */\r\n\t/*border: 1px solid red;*/}.detail-item > .item-title[data-v-3ff2e04e]{color:#909090;font-size:14px}.detail-item > .item-content[data-v-3ff2e04e]{float:right;font-size:16px}.dev[data-v-3ff2e04e]{border:1px solid #ddd;margin:%?10?%;padding-top:%?10?%;padding-bottom:%?10?%}.uni-list-item__icon-img[data-v-3ff2e04e]{height:%?70?%!important;width:%?70?%!important}",
          "",
        ]),
        (e.exports = t);
    },
    "3f72": function (e, t, n) {
      var i = n("28e1");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
      var a = n("4f06").default;
      a("019cbd12", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    aaa9: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return i;
        });
      var i = { uniList: n("7f29").default, uniListItem: n("a7f9").default },
        a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "v-uni-view",
            { staticStyle: { height: "100vh" } },
            [
              n(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  n(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [e._v("正在消费")]
                  ),
                ],
                2
              ),
              n(
                "uni-list",
                e._l(e.orderlist, function (t, i) {
                  return "bath" == t.consume_type
                    ? n("uni-list-item", {
                        key: i,
                        attrs: {
                          title: "设备编号：" + t.device_id,
                          thumb: e.getIconName(t.consume_type),
                          note: t.create_at,
                          showArrow: !1,
                          showBadge: !1,
                        },
                        scopedSlots: e._u(
                          [
                            {
                              key: "footer",
                              fn: function () {
                                return [
                                  n(
                                    "v-uni-button",
                                    {
                                      staticClass: "cu-btn confirm-btn",
                                      attrs: { type: "primary" },
                                      on: {
                                        click: function (n) {
                                          (arguments[0] = n =
                                            e.$handleEvent(n)),
                                            e.selected(t.order_id, t.device_id);
                                        },
                                      },
                                    },
                                    [e._v("结束")]
                                  ),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !0
                        ),
                      })
                    : e._e();
                }),
                1
              ),
            ],
            1
          );
        },
        o = [];
    },
    cf23: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("dde6"),
        a = n.n(i);
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return i[e];
            });
          })(o);
      t["default"] = a.a;
    },
    dde6: function (e, t, n) {
      "use strict";
      n("7a82");
      var i = n("ee27").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        n("e9c4");
      var a = i(n("6972")),
        o = i(n("5cd9")),
        r = {
          data: function () {
            return {
              userdata: this.$store.state.user,
              project: this.$store.state.project,
              orderlist: [],
              getconsuminginterval: null,
            };
          },
          onLoad: function (e) {
            this.getcosumingorder();
          },
          onUnload: function () {
            uni.hideLoading(),
              this.getconsuminginterval &&
                (clearInterval(this.getconsuminginterval),
                (this.getconsuminginterval = null));
          },
          onShow: function () {},
          methods: {
            selected: function (e, t) {
              this.remoteendconsume(e, t);
            },
            getcosumingorder: function () {
              var e = this;
              a.default.showloading("正在加载中"),
                a.default
                  .sendapppost(
                    e.project.server_addr +
                      a.default.API_PATH.getStaffConsumeing,
                    {
                      net_type:
                        o.default.GetAppointmentUseDevnetType("consume"),
                      consume_types: "bath",
                    }
                  )
                  .then(function (t) {
                    uni.hideLoading(),
                      (e.orderlist = t),
                      e.refreshgetconsuming();
                  })
                  .catch(function (e) {
                    uni.hideLoading();
                  });
            },
            getIconName: function (e) {
              var t = "";
              switch (e) {
                case "metering":
                case "drinking":
                case "timing":
                  t = "/static/yinshui.png";
                  break;
                case "bath":
                  t = "/static/xiyu.png";
                  break;
                case "laundry":
                  t = "/static/xiyi.png";
                  break;
                case "blower":
                  t = "/static/chuifeng.png";
                  break;
                case "shoe":
                  t = "/static/xixie.png";
                case "dryer":
                  t = "/static/honggan.png";
                  break;
              }
              return t;
            },
            remoteendconsume: function (e, t) {
              var n = this;
              this.getconsuminginterval &&
                (clearInterval(this.getconsuminginterval),
                (this.getconsuminginterval = null)),
                a.default.showloading("正在结束中..."),
                a.default
                  .sendapppost(
                    n.project.server_addr + a.default.API_PATH.remoteendorder,
                    { order_id: e, device_id: t }
                  )
                  .then(function (e) {
                    uni.hideLoading(),
                      uni.redirectTo({
                        url: "../consumeend/consumeend?orderid=" + e.order_id,
                      });
                  })
                  .catch(function (e) {
                    uni.hideLoading(),
                      a.default.showalert("结算失败", e),
                      n.refreshgetconsuming();
                  });
            },
            refreshgetconsuming: function () {
              var e = this;
              this.getconsuminginterval &&
                (clearInterval(this.getconsuminginterval),
                (this.getconsuminginterval = null)),
                e.getconsuming(),
                (this.getconsuminginterval = setInterval(function () {
                  e.getconsuming();
                }, 5e3));
            },
            getconsuming: function () {
              var e = this;
              a.default
                .sendapppost(
                  e.project.server_addr +
                    a.default.API_PATH.getStaffConsumeingCount,
                  {
                    net_type: o.default.GetAppointmentUseDevnetType("consume"),
                    consume_types: "bath",
                  }
                )
                .then(function (t) {
                  if ("0" == JSON.stringify(t))
                    return (
                      e.getconsuminginterval &&
                        (clearInterval(e.getconsuminginterval),
                        (e.getconsuminginterval = null)),
                      uni.navigateBack({ delta: 1 })
                    );
                })
                .catch(function (e) {});
            },
          },
        };
      t.default = r;
    },
  },
]);
