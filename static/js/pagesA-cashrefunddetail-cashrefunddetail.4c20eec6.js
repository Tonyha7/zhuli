(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-cashrefunddetail-cashrefunddetail"],
  {
    "14a3": function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("3069"),
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
    2356: function (t, e, a) {
      "use strict";
      var i = a("67a2"),
        n = a.n(i);
      n.a;
    },
    3069: function (t, e, a) {
      "use strict";
      a("7a82");
      var i = a("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = i(a("f07e")),
        s = i(a("c964"));
      a("a9e3"), a("d401"), a("d3b7"), a("25f0"), a("498a");
      var r = i(a("6972")),
        d = i(a("5cd9")),
        u = a("c7d3"),
        o = {
          components: {},
          onLoad: function (t) {
            (this.orderId = t.id), this.getorder();
          },
          data: function () {
            return {
              userdata: this.$store.state.user,
              project: this.$store.state.project,
              order: {},
              orderId: "",
              desc: "",
              isGreaterV310: this.$store.getters.isGreaterV310,
            };
          },
          computed: {
            isShowRefundDetail: function () {
              return (
                2 == this.order.status &&
                !r.default.isNullOrEmpty(this.order.refund_info)
              );
            },
            RefundDetail: function () {
              return r.default.isNullOrEmpty(this.order.refund_info)
                ? []
                : JSON.parse(this.order.refund_info);
            },
          },
          mounted: function () {},
          filters: {
            getstatus: function (t) {
              return d.default.EnumCashRefundStatus[t];
            },
            numbertofixed: function (t) {
              var e = "";
              return (
                r.default.isNullOrEmpty(t) || (e = Number(t).toFixed(2)),
                e + "元"
              );
            },
            ParseDesc: function (t) {
              return r.default.isNullOrEmpty(t) ? "" : t;
            },
            ParseRefundMethod: function (t) {
              return d.default.EnumRefundMethod[t];
            },
            ParseHandelType: function (t) {
              return d.default.EnumCashRefundType[t];
            },
          },
          methods: {
            GetOrderTypeNoText: function (t, e, a) {
              var i = "商户订单号";
              return (
                2 == t && 2 == e && (i = "原支付宝交易号"),
                2 == t && 3 == e && (i = "原微信交易号"),
                2 == t && 6 == e && (i = "原农行交易号"),
                i
              );
            },
            getstatusstyle: function () {
              var t = { style: "color: #e6e6e6;", text: "" };
              if (r.default.isNullOrEmpty(this.order)) return t;
              var e = this.order.status;
              switch (e.toString()) {
                case "1":
                  t.style = "color: #ffa002;";
                  break;
                case "3":
                  t.style = "color: #f37a7a;";
                  break;
                case "2":
                  t.style = "color: #07c160;";
                  break;
                default:
                  break;
              }
              return (t.text = d.default.EnumCashRefundStatus[e]), t;
            },
            textareaAInput: function (t) {
              this.desc = t.detail.value;
            },
            getorder: function () {
              var t = this,
                e = { id: this.orderId };
              uni.showLoading({ mask: !0, title: "正在加载中" }),
                r.default
                  .sendapppost(
                    t.project.server_addr +
                      r.default.API_PATH.getcashrefunddetailbyid,
                    e
                  )
                  .then(function (e) {
                    uni.hideLoading(), (t.loadedflag = !0), (t.order = e);
                  })
                  .catch(function (t) {
                    uni.hideLoading(), r.default.showalert("提示", t);
                  });
            },
            refreshList: function () {
              var t = getCurrentPages(),
                e = t[t.length - 2];
              "pagesA/cashrefund/cashrefund" == e.route &&
                e.$vm.mescroll.resetUpScroll();
            },
            cancelOrder: function () {
              var t = this;
              return (0, s.default)(
                (0, n.default)().mark(function e() {
                  var a, i;
                  return (0, n.default)().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = t.desc.trim()), !r.default.isNullOrEmpty(a))
                          ) {
                            e.next = 4;
                            break;
                          }
                          return (
                            r.default.showalert("提示", "请输入备注"),
                            e.abrupt("return")
                          );
                        case 4:
                          (i = (function () {
                            var e = (0, s.default)(
                              (0, n.default)().mark(function e() {
                                var i;
                                return (0, n.default)().wrap(
                                  function (e) {
                                    while (1)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (i = { id: t.orderId, desc: a }),
                                            uni.showLoading({
                                              mask: !0,
                                              title: "正在取消中",
                                            }),
                                            (e.prev = 2),
                                            (e.next = 5),
                                            (0, u.CancelCashrefund)(i)
                                          );
                                        case 5:
                                          uni.hideLoading(), (e.next = 12);
                                          break;
                                        case 8:
                                          (e.prev = 8),
                                            (e.t0 = e["catch"](2)),
                                            uni.hideLoading(),
                                            r.default.showalert("提示", e.t0);
                                        case 12:
                                          t.getorder(), t.refreshList();
                                        case 14:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[2, 8]]
                                );
                              })
                            );
                            return function () {
                              return e.apply(this, arguments);
                            };
                          })()),
                            r.default.showalert(
                              "提示",
                              "确定要取消该申请吗?",
                              null,
                              function () {
                                i();
                              },
                              !0
                            );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
        };
      e.default = o;
    },
    "67a2": function (t, e, a) {
      var i = a("d2cb");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("eb01fb04", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    b568: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("fe91"),
        n = a("14a3");
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(s);
      a("2356");
      var r = a("f0c5"),
        d = Object(r["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "6d7da466",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = d.exports;
    },
    c7d3: function (t, e, a) {
      "use strict";
      a("7a82");
      var i = a("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = e.CancelCashrefund = void 0),
        a("99af");
      i(a("6972"));
      var n = i(a("1783")),
        s = a("f55c"),
        r = a("5aba"),
        d = function (t) {
          return (0, r.sendapppost)(
            ""
              .concat(n.default.state.project.server_addr)
              .concat(s.API_PATH.CancelCashRefundRequest),
            t
          );
        };
      e.CancelCashrefund = d;
      var u = { CancelCashrefund: d };
      e.default = u;
    },
    d2cb: function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          "[v-cloak][data-v-6d7da466]{display:none!important}uni-page-body[data-v-6d7da466]{background-color:#f7f7f7}body.?%PAGE?%[data-v-6d7da466]{background-color:#f7f7f7}.ViewContainer[data-v-6d7da466]{background-color:#f7f7f7;height:100%;overflow-y:scroll}.head-title[data-v-6d7da466]{text-align:center;padding-top:%?40?%}.title-type[data-v-6d7da466]{font-size:%?30?%;margin:%?5?% 0}.title-money[data-v-6d7da466]{font-size:%?60?%;margin:%?10?% 0}.title-status[data-v-6d7da466]{font-size:%?30?%;color:#a4d5be}.line[data-v-6d7da466]{border-top:1px solid #ddd;margin:5px %?20?% 0 %?20?%}.item-container[data-v-6d7da466]{background-color:#fff;margin:%?40?% %?20?%;border-radius:%?10?%}.detail-item[data-v-6d7da466]{margin:0 %?20?%;padding:%?20?% 0;display:flex;justify-content:space-between}.detail-item>.item-title[data-v-6d7da466]{color:#909090;width:%?200?%}.detail-item>.item-content[data-v-6d7da466]{flex:1;text-align:right;word-break:break-all}.add-form-group[data-v-6d7da466]{background-color:#fff;margin:%?40?% %?20?%;border-radius:%?10?%}.add-form-group>.title[data-v-6d7da466]{font-size:%?30?%;font-weight:700;margin:10px;padding-top:10px}.add-form-group>.content[data-v-6d7da466]{background-color:#f7f7f7;height:%?80?%;border-radius:%?80?%;margin-top:%?20?%}.add-form-group>.content uni-input[data-v-6d7da466]{height:100%;line-height:1;border-radius:%?80?%;padding-left:%?30?%;width:calc(100% - %?80?%);background-color:#f7f7f7!important}.input-text-view[data-v-6d7da466]{margin:%?32?% %?30?%;height:%?200?%;flex:1;font-size:%?28?%;padding:%?20?%;border-radius:%?20?%;background-color:#f7f7f7}",
          "",
        ]),
        (t.exports = e);
    },
    fe91: function (t, e, a) {
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
            { staticClass: "ViewContainer" },
            [
              a(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  a(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("提现详情")]
                  ),
                ],
                2
              ),
              a(
                "v-uni-view",
                { staticClass: "head-title" },
                [
                  a(
                    "v-uni-view",
                    { staticClass: "title-img-container" },
                    [
                      a("v-uni-image", {
                        staticClass: "title-img",
                        attrs: { src: "/static/money.png" },
                      }),
                    ],
                    1
                  ),
                  a("v-uni-view", { staticClass: "title-type" }, [
                    t._v("提现"),
                  ]),
                  a("v-uni-view", { staticClass: "title-money" }, [
                    t._v(
                      "-" + t._s(t._f("numbertofixed")(t.order.refund_money))
                    ),
                  ]),
                  a(
                    "v-uni-view",
                    {
                      staticClass: "title-status",
                      style: t.getstatusstyle().style,
                    },
                    [t._v(t._s(t.getstatusstyle().text))]
                  ),
                ],
                1
              ),
              a(
                "v-uni-view",
                { staticClass: "item-container" },
                [
                  a(
                    "v-uni-view",
                    { staticClass: "detail-item" },
                    [
                      a("v-uni-text", { staticClass: "item-title" }, [
                        t._v("申请时间"),
                      ]),
                      a("v-uni-text", { staticClass: "item-content" }, [
                        t._v(t._s(t.order.create_at)),
                      ]),
                    ],
                    1
                  ),
                  a(
                    "v-uni-view",
                    { staticClass: "detail-item" },
                    [
                      a("v-uni-text", { staticClass: "item-title" }, [
                        t._v("提现金额"),
                      ]),
                      a("v-uni-text", { staticClass: "item-content" }, [
                        t._v(t._s(t._f("numbertofixed")(t.order.refund_money))),
                      ]),
                    ],
                    1
                  ),
                  a(
                    "v-uni-view",
                    { staticClass: "detail-item" },
                    [
                      a("v-uni-text", { staticClass: "item-title" }, [
                        t._v("提现时账户余额"),
                      ]),
                      a("v-uni-text", { staticClass: "item-content" }, [
                        t._v(t._s(t._f("numbertofixed")(t.order.balance))),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              1 != t.order.status
                ? a(
                    "v-uni-view",
                    {
                      staticClass: "item-container",
                      staticStyle: { "margin-top": "-20upx" },
                    },
                    [
                      a(
                        "v-uni-view",
                        { staticClass: "detail-item" },
                        [
                          a("v-uni-text", { staticClass: "item-title" }, [
                            t._v("提现类型"),
                          ]),
                          a("v-uni-text", { staticClass: "item-content" }, [
                            t._v(
                              t._s(
                                t._f("ParseRefundMethod")(t.order.refund_method)
                              )
                            ),
                          ]),
                        ],
                        1
                      ),
                      4 != t.order.type
                        ? a(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              a("v-uni-text", { staticClass: "item-title" }, [
                                t._v("提现方式"),
                              ]),
                              2 == t.order.refund_method
                                ? a(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [t._v("原支付方式退还")]
                                  )
                                : a(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("ParseHandelType")(t.order.type)
                                        )
                                      ),
                                    ]
                                  ),
                            ],
                            1
                          )
                        : t._e(),
                      a(
                        "v-uni-view",
                        { staticClass: "detail-item" },
                        [
                          a("v-uni-text", { staticClass: "item-title" }, [
                            t._v("处理时间"),
                          ]),
                          a("v-uni-text", { staticClass: "item-content" }, [
                            t._v(t._s(t.order.finish_at)),
                          ]),
                        ],
                        1
                      ),
                      a(
                        "v-uni-view",
                        { staticClass: "detail-item" },
                        [
                          a("v-uni-text", { staticClass: "item-title" }, [
                            t._v("处理人"),
                          ]),
                          a("v-uni-text", { staticClass: "item-content" }, [
                            t._v(t._s(t.order.finish_by_name)),
                          ]),
                        ],
                        1
                      ),
                      a(
                        "v-uni-view",
                        { staticClass: "detail-item" },
                        [
                          a("v-uni-text", { staticClass: "item-title" }, [
                            t._v("处理备注"),
                          ]),
                          a("v-uni-text", { staticClass: "item-content" }, [
                            t._v(t._s(t._f("ParseDesc")(t.order.finish_desc))),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
              t._l(t.RefundDetail, function (e) {
                return t.isShowRefundDetail
                  ? a(
                      "v-uni-view",
                      {
                        staticClass: "item-container",
                        staticStyle: { "margin-top": "-20upx" },
                      },
                      [
                        a(
                          "v-uni-view",
                          { staticClass: "detail-item" },
                          [
                            1 == t.order.refund_method && 2 == t.order.type
                              ? a("v-uni-text", { staticClass: "item-title" }, [
                                  t._v("支付宝交易号"),
                                ])
                              : a("v-uni-text", { staticClass: "item-title" }, [
                                  t._v("原充值订单号"),
                                ]),
                            a("v-uni-text", { staticClass: "item-content" }, [
                              t._v(t._s(e.order_id)),
                            ]),
                          ],
                          1
                        ),
                        a(
                          "v-uni-view",
                          { staticClass: "detail-item" },
                          [
                            a("v-uni-text", { staticClass: "item-title" }, [
                              t._v(
                                t._s(
                                  t.GetOrderTypeNoText(
                                    t.order.refund_method,
                                    e.refund_channel,
                                    e.type
                                  )
                                )
                              ),
                            ]),
                            a("v-uni-text", { staticClass: "item-content" }, [
                              t._v(t._s(e.out_trade_no)),
                            ]),
                          ],
                          1
                        ),
                        2 == t.order.refund_method &&
                        2 == e.refund_channel &&
                        e.buyer_logon_id
                          ? a(
                              "v-uni-view",
                              { staticClass: "detail-item" },
                              [
                                a("v-uni-text", { staticClass: "item-title" }, [
                                  t._v("支付宝账号"),
                                ]),
                                a(
                                  "v-uni-text",
                                  { staticClass: "item-content" },
                                  [t._v(t._s(e.buyer_logon_id))]
                                ),
                              ],
                              1
                            )
                          : t._e(),
                        a(
                          "v-uni-view",
                          { staticClass: "detail-item" },
                          [
                            a("v-uni-text", { staticClass: "item-title" }, [
                              t._v("充值金额"),
                            ]),
                            a("v-uni-text", { staticClass: "item-content" }, [
                              t._v(
                                t._s(t._f("numbertofixed")(e.recharge_value))
                              ),
                            ]),
                          ],
                          1
                        ),
                        a(
                          "v-uni-view",
                          { staticClass: "detail-item" },
                          [
                            a("v-uni-text", { staticClass: "item-title" }, [
                              t._v("退款金额"),
                            ]),
                            a("v-uni-text", { staticClass: "item-content" }, [
                              t._v(t._s(t._f("numbertofixed")(e.refund_money))),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : t._e();
              }),
              1 == t.order.status && t.isGreaterV310
                ? a(
                    "v-uni-view",
                    { staticClass: "add-form-group" },
                    [
                      a("v-uni-view", { staticClass: "title" }, [t._v("备注")]),
                      a(
                        "v-uni-view",
                        {
                          staticStyle: {
                            "margin-top": "20upx",
                            display: "flex",
                          },
                        },
                        [
                          a("v-uni-textarea", {
                            staticClass: "input-text-view",
                            attrs: { enableNative: !1, maxlength: "-1" },
                            on: {
                              input: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.textareaAInput.apply(void 0, arguments);
                              },
                            },
                          }),
                        ],
                        1
                      ),
                      a(
                        "v-uni-view",
                        {
                          staticStyle: {
                            padding: "30px 40px 20px 30px",
                            width: "100%",
                          },
                        },
                        [
                          a(
                            "v-uni-button",
                            {
                              staticClass: "confirm-btn",
                              attrs: { type: "primary" },
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.cancelOrder.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v("取消提现")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
            ],
            2
          );
        },
        n = [];
    },
  },
]);
