(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-immediatepaymentorder-immediatepaymentorder"],
  {
    "4d84": function (t, e, a) {
      var n = a("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          ".order-info[data-v-b9c769b2]{text-align:center;padding-top:%?40?%}.order-info .Rmb-text[data-v-b9c769b2]{font-size:%?30?%;font-weight:700}.order-info .money-text[data-v-b9c769b2]{font-size:%?70?%}.order-info .desc-text[data-v-b9c769b2]{padding:%?20?%;color:#9d9d9d;font-size:%?25?%}.order-title[data-v-b9c769b2]{color:#9d9d9d}.pay-type[data-v-b9c769b2]{margin-top:%?20?%}.submit-btn[data-v-b9c769b2]{padding:%?30?%;position:fixed;bottom:5px;width:100%}.desc-div[data-v-b9c769b2]{margin:%?40?%;color:#9d9d9d;font-size:%?28?%;line-height:%?50?%}.pay-type-container[data-v-b9c769b2]{display:flex;align-items:center;justify-content:space-between}.pay-container[data-v-b9c769b2]{display:inline-flex;justify-content:center;align-items:center;background-color:#fff;padding:%?30?%;margin:%?30?%;border:1px solid #fff;flex-grow:1}.pay-container-active[data-v-b9c769b2]{border:1px solid #5dbbf5}.pay-container uni-image[data-v-b9c769b2]{width:%?50?%;height:%?40?%}.pay-container uni-text[data-v-b9c769b2]{margin-left:%?20?%;font-size:%?25?%}.info-detail[data-v-b9c769b2]{background-color:#fff;margin:%?30?% %?30?% 0 %?30?%;border-radius:5px}.type-container[data-v-b9c769b2]{display:flex;align-items:center;padding:%?20?%}.select-container[data-v-b9c769b2]{margin-right:%?60?%}.select-radio[data-v-b9c769b2]{background-color:#32b1fe;border-color:#32b1fe}uni-radio.checked .uni-radio-input[data-v-b9c769b2]{background-color:#32b1fe!important;color:#32b1fe!important;border-color:#32b1fe!important}.type-text[data-v-b9c769b2]{display:inline-block}.recommendicon[data-v-b9c769b2]{background-color:#32b1fe;color:#fff;padding:%?5?% %?10?%;font-size:%?20?%;border-radius:%?20?%;margin-left:%?10?%;display:inline-block}",
          "",
        ]),
        (t.exports = e);
    },
    "698d": function (t, e, a) {
      "use strict";
      (function (t) {
        a("7a82");
        var n = a("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          a("a9e3"),
          a("c975"),
          a("ac1f"),
          a("5319"),
          a("e25e"),
          a("d3b7"),
          a("e9c4"),
          a("c740"),
          a("7db0"),
          a("99af");
        var i = n(a("f07e")),
          r = n(a("c964")),
          s = n(a("6972")),
          o = n(a("5cd9")),
          c = a("eb21"),
          u = null,
          d = {
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                ordertitle: "订单消费",
                ordermoney: "0.00",
                downtime: 60,
                rechargemethod: "",
                btnstatusobj: { text: "确认支付", disabled: !1 },
                payswitch: {
                  wechatdisable: !1,
                  alipaydisable: !1,
                  abcdisable: !1,
                  wxpayscoredisabled: !1,
                },
                ModalAlert: null,
                Order: null,
                SceneType: null,
                ConsumeType: "",
                queryappointmentcount: 0,
                getorderstatusinterval: null,
                count_downinterval: null,
                paysuccessedflag: !1,
                PayChargesObj: { list: [] },
                PayOrderData: {},
                WakeUpAbcBank: { ConfirmFlag: !1, ModalDisplayFlag: !1 },
              };
            },
            onShow: function () {
              var t = this,
                e = "active";
              0 == this.downtime && (e = "timeout"),
                zl.system.onBackPress(function (e) {
                  var a = t.backevent();
                  return { allow: a };
                }),
                (0, c.emitPageOnshowEvent)({ scene: "离开即时支付" }),
                this.queryorderstatus(e);
            },
            onHide: function () {
              (0, c.emitPageOnhideEvent)({ scene: "进入即时支付" });
            },
            onLoad: function (e) {
              var a = this;
              return (0, r.default)(
                (0, i.default)().mark(function n() {
                  var r;
                  return (0, i.default)().wrap(
                    function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              ((n.prev = 0),
                              (u = a.project.projectswitch),
                              (a.SceneType = e.launchtype),
                              (r = JSON.parse(
                                decodeURIComponent(e.parameterobj)
                              )),
                              "paycharges" != a.SceneType)
                            ) {
                              n.next = 11;
                              break;
                            }
                            return (
                              (a.PayChargesObj.list = r),
                              (n.next = 8),
                              a.QueryOrderInfoAsync(
                                a.PayChargesObj.list[0].order_id
                              )
                            );
                          case 8:
                            (a.Order = n.sent), (n.next = 13);
                            break;
                          case 11:
                            (a.Order = r.order),
                              (a.ConsumeType = r.consumetype);
                          case 13:
                            "consume" == a.SceneType && a.refreshorderstatus(),
                              a.SceneType,
                              a.initpaytypeswitch(),
                              (n.next = 22);
                            break;
                          case 18:
                            (n.prev = 18),
                              (n.t0 = n["catch"](0)),
                              t.log(n.t0),
                              s.default.logger.error(
                                "immediatepaymentorder.vue",
                                "即时支付订单解析错误" + n.t0,
                                ""
                              );
                          case 22:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 18]]
                  );
                })
              )();
            },
            onUnload: function () {
              uni.hideLoading(), this.clearallinterval();
            },
            methods: {
              BackFromAbcAction: function () {
                var t = this;
                (this.WakeUpAbcBank.ModalDisplayFlag = !0),
                  s.default.showalert(
                    "提示",
                    "是否已完成了农行支付?",
                    function () {
                      (t.WakeUpAbcBank.ConfirmFlag = !1),
                        (t.WakeUpAbcBank.ModalDisplayFlag = !1);
                    },
                    function () {
                      (t.WakeUpAbcBank.ModalDisplayFlag = !1),
                        setTimeout(function () {
                          t.queryorderstatus("active");
                        }, 500);
                    },
                    !0,
                    "否",
                    "是"
                  );
              },
              CalcExpirePayTime: function () {
                var e = this;
                return (0, r.default)(
                  (0, i.default)().mark(function a() {
                    var n, r;
                    return (0, i.default)().wrap(
                      function (a) {
                        while (1)
                          switch ((a.prev = a.next)) {
                            case 0:
                              if (
                                ((a.prev = 0),
                                (n = 60 * u.consume_pay_expire_minutes),
                                s.default.isNullOrEmpty(u) ||
                                  s.default.isNullOrEmpty(
                                    u.consume_pay_expire_minutes
                                  ) ||
                                  !(Number(u.consume_pay_expire_minutes) > 0) ||
                                  s.default.isNullOrEmpty(e.Order.create_at))
                              ) {
                                a.next = 9;
                                break;
                              }
                              return (
                                (a.next = 5),
                                s.default.GetCorrectTimeFromNetwork()
                              );
                            case 5:
                              (r = a.sent),
                                r &&
                                  -1 != r.indexOf("-") &&
                                  (r = r.replace(/\-/g, "/")),
                                (n = parseInt(
                                  Number(60 * u.consume_pay_expire_minutes) -
                                    Math.abs(
                                      new Date(r).getTime() -
                                        new Date(
                                          e.Order.create_at.replace(/\-/g, "/")
                                        ).getTime()
                                    ) /
                                      1e3
                                )),
                                (isNaN(n) || n < 0) &&
                                  (n = 60 * u.consume_pay_expire_minutes);
                            case 9:
                              (e.downtime = n), (a.next = 16);
                              break;
                            case 12:
                              (a.prev = 12),
                                (a.t0 = a["catch"](0)),
                                t.log(a.t0),
                                (e.downtime = 60);
                            case 16:
                              return (
                                (a.prev = 16),
                                e.refreshcount_down(),
                                a.finish(16)
                              );
                            case 19:
                            case "end":
                              return a.stop();
                          }
                      },
                      a,
                      null,
                      [[0, 12, 16, 19]]
                    );
                  })
                )();
              },
              backevent: function () {
                var t = this;
                return (
                  null != this.ModalAlert ||
                  "确认结果中..." == this.btnstatusobj.text ||
                  ("paycharges" == this.SceneType
                    ? (uni.showToast({ icon: "none", title: "请完成支付" }), !1)
                    : ((this.ModalAlert = s.default.showalert(
                        "提示",
                        "确认要放弃支付吗？",
                        function () {
                          t.cancelpaymentorder("active"), (t.ModalAlert = null);
                        },
                        function () {
                          t.startpayorder(), (t.ModalAlert = null);
                        },
                        !0,
                        "放弃支付",
                        "继续支付"
                      )),
                      !1))
                );
              },
              initpaytypeswitch: function () {
                var t = "订单支付";
                switch (this.SceneType) {
                  case "appointment":
                    s.default.isNullOrEmpty(this.ConsumeType) ||
                      (t = { 0: "洗浴预约", 3: "洗衣预约" }[this.ConsumeType]);
                    break;
                  case "consume":
                    (t = "订单消费"),
                      s.default.isNullOrEmpty(this.ConsumeType) ||
                        (t = {
                          0: "洗浴消费",
                          1: "零售支付",
                          2: "饮水消费",
                          3: "洗衣消费",
                          4: "饮水消费",
                          5: "吹风消费",
                          8: "洗鞋消费",
                          9: "烘干消费",
                        }[this.ConsumeType]);
                    break;
                  default:
                    break;
                }
                (this.ordertitle = t),
                  (this.ordermoney = Number(this.Order.pay_money).toFixed(2)),
                  1 == u.alipay_instant_payment_type
                    ? ((this.payswitch.alipaydisable = !0),
                      (this.rechargemethod = "alipay"))
                    : (this.payswitch.alipaydisable = !1),
                  1 == u.wechat_instant_payment_type
                    ? ((this.payswitch.wechatdisable = !0),
                      (this.rechargemethod = "wechat"))
                    : (this.payswitch.wechatdisable = !1),
                  s.default.isNullOrEmpty(u.abc_instant_payment_type) ||
                  1 != u.abc_instant_payment_type
                    ? (this.payswitch.abcdisable = !1)
                    : ((this.payswitch.abcdisable = !0),
                      (this.rechargemethod = "abc_china")),
                  s.default.isNullOrEmpty(u.wechat_instant_payment_type) ||
                  1 != u.wechat_instant_payment_type ||
                  5 != u.wechat_merchant
                    ? (this.payswitch.wxpayscoredisabled = !1)
                    : ((this.payswitch.wxpayscoredisabled = !0),
                      (this.rechargemethod = "wx_payscore")),
                  "paycharges" != this.SceneType && this.CalcExpirePayTime();
              },
              refreshcount_down: function () {
                var t = this;
                clearInterval(this.count_downinterval),
                  (this.count_downinterval = null),
                  this.count_down(),
                  (this.count_downinterval = setInterval(function () {
                    t.count_down();
                  }, 1e3));
              },
              count_down: function () {
                this.downtime--,
                  0 == this.downtime &&
                    (clearInterval(this.count_downinterval),
                    (this.count_downinterval = null),
                    null != this.ModalAlert &&
                      (this.ModalAlert.close(), (this.ModalAlert = null)),
                    this.queryorderstatus("timeout"));
              },
              ResetBtnStatus: function () {
                (this.btnstatusobj.text = "确认支付"),
                  (this.btnstatusobj.disabled = !1);
              },
              queryorderstatus: function (t) {
                if (!s.default.isNullOrEmpty(this.Order)) {
                  "active" == t &&
                    uni.showLoading({ mask: !0, title: "订单确认中..." });
                  var e = this;
                  s.default
                    .sendapppost(
                      e.project.server_addr +
                        s.default.API_PATH.getrecorddetail,
                      { bill_id: e.Order.order_id, use_type: "consume" }
                    )
                    .then(function (a) {
                      if (!s.default.isNullOrEmpty(a)) {
                        var n =
                          "finished" == a.status ||
                          "created" == a.status ||
                          "consuming" == a.status;
                        if (n && "active" == t)
                          return e.clearallinterval(), e.pay_success(a);
                        "timeout" == t
                          ? (clearInterval(e.count_downinterval),
                            (e.count_downinterval = null),
                            e.cancelpaymentorder("active"))
                          : ("prepare_pay" != a.status &&
                              "waiting_pay" != a.status &&
                              "active" != t) ||
                            ((e.btnstatusobj.text = "确认支付"),
                            (e.btnstatusobj.disabled = !1));
                      }
                    })
                    .catch(function (t) {})
                    .finally(function () {
                      uni.hideLoading();
                    });
                }
              },
              startpayorder: function () {
                var e = this,
                  a = this;
                if ("wechat" != this.rechargemethod || 4 != u.wechat_merchant)
                  if (
                    "wx_payscore" != this.rechargemethod ||
                    5 != u.wechat_merchant
                  ) {
                    var n = "";
                    switch (this.rechargemethod) {
                      case "alipay":
                        n = 2;
                        break;
                      case "wechat":
                        n = 3;
                        break;
                      case "abc_china":
                        n = 6;
                        break;
                      case "wx_payscore":
                        n = 8;
                        break;
                      default:
                        break;
                    }
                    (this.btnstatusobj.text = "准备支付中..."),
                      (this.btnstatusobj.disabled = !0),
                      uni.showLoading({ mask: !0, title: "准备支付中..." }),
                      s.default
                        .sendapppost(
                          a.project.server_addr +
                            s.default.API_PATH.immediatepaymentorder,
                          {
                            order_id: a.Order.order_id,
                            payment_channel: n,
                            is_miniprogram: "FALSE",
                            use_platform: this.$store.state.SystemInfo.platform,
                          }
                        )
                        .then(
                          (function () {
                            var e = (0, r.default)(
                              (0, i.default)().mark(function e(n) {
                                var r, o, c, u;
                                return (0, i.default)().wrap(
                                  function (e) {
                                    while (1)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            (t.log(n),
                                            uni.hideLoading(),
                                            s.default.isNullOrEmpty(n) ||
                                              s.default.isNullOrEmpty(
                                                n.pay_qr_str
                                              ))
                                          ) {
                                            e.next = 46;
                                            break;
                                          }
                                          (r = { provider: "" }),
                                            (o = n.pay_qr_str),
                                            (r.orderInfo = o),
                                            (e.t0 = a.rechargemethod),
                                            (e.next =
                                              "wechat" === e.t0
                                                ? 9
                                                : "alipay" === e.t0
                                                ? 18
                                                : "abc_china" === e.t0
                                                ? 21
                                                : "wx_payscore" === e.t0
                                                ? 26
                                                : 34);
                                          break;
                                        case 9:
                                          (r.provider = "wxpay"),
                                            (e.prev = 10),
                                            (r.orderInfo = o),
                                            (e.next = 17);
                                          break;
                                        case 14:
                                          return (
                                            (e.prev = 14),
                                            (e.t1 = e["catch"](10)),
                                            e.abrupt(
                                              "return",
                                              Promise.reject("订单信息错误")
                                            )
                                          );
                                        case 17:
                                          return e.abrupt("break", 35);
                                        case 18:
                                          return (
                                            (r.provider = "alipay"),
                                            (r.orderInfo = o),
                                            e.abrupt("break", 35)
                                          );
                                        case 21:
                                          return (
                                            s.default.NavigateToABCPayPage(o),
                                            (a.WakeUpAbcBank.ConfirmFlag = !0),
                                            a.ResetBtnStatus(),
                                            e.abrupt("return")
                                          );
                                        case 26:
                                          return (
                                            (o = JSON.parse(o)),
                                            (c = o.package),
                                            (u = "postpaid"),
                                            "pre_consume" === a.SceneType &&
                                              (u = "prepaid"),
                                            (e.next = 32),
                                            s.default.openWxPayscore(
                                              c,
                                              a.Order.order_id,
                                              u
                                            )
                                          );
                                        case 32:
                                          return e.abrupt("return");
                                        case 34:
                                          return e.abrupt("break", 35);
                                        case 35:
                                          if (
                                            !s.default.isNullOrEmpty(
                                              r.orderInfo
                                            )
                                          ) {
                                            e.next = 37;
                                            break;
                                          }
                                          return e.abrupt(
                                            "return",
                                            s.default.showalert(
                                              "提示",
                                              "订单生成失败请联系管理员"
                                            )
                                          );
                                        case 37:
                                          return (
                                            (a.PayOrderData = r),
                                            (r.success = function (e) {
                                              t.log(e);
                                              var i = !1;
                                              if (
                                                (("requestPayment:ok" !=
                                                  e.errMsg &&
                                                  "9000" != e.resultCode) ||
                                                  (i = !0),
                                                (i = !0),
                                                !i)
                                              )
                                                return (
                                                  (a.btnstatusobj.text =
                                                    "确认支付"),
                                                  (a.btnstatusobj.disabled =
                                                    !1),
                                                  s.default.showalert(
                                                    "提示",
                                                    "支付取消"
                                                  )
                                                );
                                              a.pay_success(n);
                                            }),
                                            (r.fail = function (t) {
                                              a.pay_error(t);
                                            }),
                                            t.log(JSON.stringify(r)),
                                            zl.payment.pay(
                                              {
                                                paymentType: a.rechargemethod,
                                                orderInfo: r.orderInfo,
                                              },
                                              function (e) {
                                                t.log(
                                                  "zl.payment.pay=result==============>",
                                                  e
                                                ),
                                                  0 == e.code
                                                    ? r.success(e)
                                                    : r.fail(e);
                                              }
                                            ),
                                            e.abrupt("return")
                                          );
                                        case 46:
                                          return (
                                            (a.btnstatusobj.text = "确认支付"),
                                            (a.btnstatusobj.disabled = !1),
                                            e.abrupt(
                                              "return",
                                              s.default.showalert(
                                                "提示",
                                                "支付订单信息错误"
                                              )
                                            )
                                          );
                                        case 49:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[10, 14]]
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        )
                        .catch(function (e) {
                          return (
                            uni.hideLoading(),
                            (a.btnstatusobj.text = "确认支付"),
                            (a.btnstatusobj.disabled = !1),
                            t.log("err=======>", e),
                            s.default.showalert("提示", e, null, function () {
                              a.cancelpaymentorder("active");
                            })
                          );
                        });
                  } else {
                    var o = {
                      phone: this.userdata.detailinfo.phone,
                      project: this.project.projectname,
                      type: "immediatepay",
                      id: this.userdata.detailinfo.id,
                      order_id: a.Order.order_id,
                      money: Number(this.Order.pay_money).toFixed(2),
                      order_title: this.ordertitle,
                      platform: "zhuli_app",
                    };
                    s.default.openWxPayscoreApp(o);
                  }
                else {
                  var c = {
                    phone: this.userdata.detailinfo.phone,
                    project: this.project.projectname,
                    type: "immediatepay",
                    id: this.userdata.detailinfo.id,
                    order_id: a.Order.order_id,
                    money: Number(this.Order.pay_money).toFixed(2),
                    order_title: this.ordertitle,
                  };
                  s.default.JumpToWxMiniProgramPay(c, 2, function (t) {
                    e.queryorderstatus("active");
                  });
                }
              },
              cancelpaymentorder: function (t) {
                var e = this;
                "active" == t &&
                  uni.showLoading({ mask: !0, title: "正在取消中..." });
                var a = function () {
                  var a = getCurrentPages(),
                    n = a[a.length - 2];
                  "consume" == e.SceneType &&
                    n &&
                    "pagesA/consume/consume" == n.route &&
                    n.$vm.changDeviceStatusUI("enable_startconsume"),
                    "appointment" == e.SceneType &&
                      n &&
                      "pagesA/appointment/appointment" == n.route &&
                      n.$vm.calceledpayorderchangestatus(),
                    "active" == t && uni.navigateBack({ delta: 1 }),
                    e.clearallinterval();
                };
                return new Promise(function (t, n) {
                  s.default
                    .sendapppost(
                      e.project.server_addr +
                        s.default.API_PATH.cancelimmediatepaymentorder,
                      { order_id: e.Order.order_id }
                    )
                    .then(function (e) {
                      return a(), t(e);
                    })
                    .catch(function (t) {
                      return "订单已结束" == t
                        ? a()
                        : (uni.showToast({ icon: "none", title: t }), n(t));
                    })
                    .finally(function () {
                      uni.hideLoading();
                    });
                });
              },
              refreshorderstatus: function () {
                var t = this;
                this.getorderstatusinterval &&
                  (clearInterval(this.getorderstatusinterval),
                  (this.getorderstatusinterval = null)),
                  this.getorderstatus(),
                  (this.getorderstatusinterval = setInterval(function () {
                    t.getorderstatus();
                  }, 1e4));
              },
              getorderstatus: function (t) {
                var e = this;
                s.default
                  .sendapppost(
                    e.project.server_addr + s.default.API_PATH.getrecorddetail,
                    { bill_id: e.Order.order_id, use_type: "consume" }
                  )
                  .then(function (a) {
                    return t
                      ? t(a, null)
                      : s.default.isNullOrEmpty(a) || "consuming" != a.status
                      ? void 0
                      : e.pay_success(a);
                  })
                  .catch(function (e) {
                    if (t) return t(null, e);
                  });
              },
              clearallinterval: function () {
                clearInterval(this.count_downinterval),
                  (this.count_downinterval = null),
                  "appointment" == this.SceneType
                    ? (this.queryappointmentcount = 0)
                    : (clearInterval(this.getorderstatusinterval),
                      (this.getorderstatusinterval = null));
              },
              pay_success: function (e) {
                var a = this;
                return (0, r.default)(
                  (0, i.default)().mark(function n() {
                    var r, o, c, u, d, l, p, h;
                    return (0, i.default)().wrap(
                      function (n) {
                        while (1)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (((n.prev = 0), !a.paysuccessedflag)) {
                                n.next = 5;
                                break;
                              }
                              return n.abrupt("return");
                            case 5:
                              a.paysuccessedflag = !0;
                            case 6:
                              (a.btnstatusobj.text = "确认结果中..."),
                                (a.btnstatusobj.disabled = !0),
                                (n.t0 = a.SceneType),
                                (n.next =
                                  "appointment" === n.t0
                                    ? 11
                                    : "consume" === n.t0 ||
                                      "pre_consume" === n.t0
                                    ? 13
                                    : "paycharges" === n.t0
                                    ? 18
                                    : 42);
                              break;
                            case 11:
                              return (
                                a.refreshappointmentstatus(),
                                n.abrupt("break", 43)
                              );
                            case 13:
                              return (
                                (r = getCurrentPages()),
                                (o = r[r.length - 2]),
                                setTimeout(function () {
                                  o && o.$vm.finishedpaystartquerystatus(e);
                                }, 500),
                                n.abrupt(
                                  "return",
                                  uni.navigateBack({ delta: 1 })
                                )
                              );
                            case 18:
                              if (
                                ((c = a.PayChargesObj.list.findIndex(function (
                                  t
                                ) {
                                  return t.order_id == e.order_id;
                                })),
                                t.log(c),
                                (a.PayChargesObj.list[c].status = "finished"),
                                (u = a.PayChargesObj.list.find(function (t) {
                                  return "finished" != t.status;
                                })),
                                t.log(u),
                                !u)
                              ) {
                                n.next = 34;
                                break;
                              }
                              return (
                                uni.showToast({
                                  title: "请继续支付下一笔订单",
                                  duration: 2e3,
                                  position: "center",
                                }),
                                (a.paysuccessedflag = !1),
                                (n.next = 28),
                                a.QueryOrderInfoAsync(u.order_id)
                              );
                            case 28:
                              (a.Order = n.sent),
                                (a.btnstatusobj.text = "确认支付"),
                                (a.btnstatusobj.disabled = !1),
                                a.initpaytypeswitch(),
                                (n.next = 41);
                              break;
                            case 34:
                              return (
                                (a.btnstatusobj.text = "已完成支付"),
                                (d = "返回主页"),
                                (l = function () {
                                  return uni.reLaunch({
                                    url: "/pages/index/index",
                                  });
                                }),
                                (p = getCurrentPages()),
                                (h = p[p.length - 2]),
                                h &&
                                  "pagesA/consume/consume" == h.route &&
                                  ((d = "继续消费"),
                                  (l = function () {
                                    return uni.navigateBack();
                                  })),
                                n.abrupt(
                                  "return",
                                  s.default.showalert(
                                    "提示",
                                    "已完成支付",
                                    function () {
                                      l();
                                    },
                                    function () {
                                      var t =
                                        "/pagesA/billdetail/billdetail?billid=".concat(
                                          e.order_id,
                                          "&type=consume"
                                        );
                                      uni.redirectTo({ url: t });
                                    },
                                    !0,
                                    d,
                                    "查看详情"
                                  )
                                )
                              );
                            case 41:
                              return n.abrupt("break", 43);
                            case 42:
                              return n.abrupt("break", 43);
                            case 43:
                              n.next = 48;
                              break;
                            case 45:
                              (n.prev = 45),
                                (n.t1 = n["catch"](0)),
                                t.log(n.t1);
                            case 48:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[0, 45]]
                    );
                  })
                )();
              },
              pay_error: function (t) {
                var e = t.msg;
                return (
                  "wechat" != this.rechargemethod ||
                    e ||
                    -1 == t.errMsg.indexOf("cancel") ||
                    (e = "支付取消"),
                  "alipay" != this.rechargemethod ||
                    e ||
                    "9000" == t.resultCode ||
                    (e = o.default.Enumalipaycode[t.resultCode]),
                  s.default.isNullOrEmpty(e) && (e = "支付失败"),
                  (this.btnstatusobj.text = "确认支付"),
                  (this.btnstatusobj.disabled = !1),
                  s.default.logger.warn(
                    "immediatepaymentorder.vue",
                    ""
                      .concat(this.userdata.detailinfo.phone, "即时支付失败:")
                      .concat(JSON.stringify(t), ",")
                      .concat(JSON.stringify(this.PayOrderData)),
                    "requestPayment_error"
                  ),
                  s.default.showalert("提示", e)
                );
              },
              refreshappointmentstatus: function () {
                uni.showLoading({ mask: !0, title: "确认结果中..." }),
                  this.getappointmentstatus();
              },
              getappointmentstatus: function () {
                var t = this;
                s.default
                  .sendapppost(
                    t.project.server_addr + s.default.API_PATH.getrecorddetail,
                    { bill_id: t.Order.order_id, use_type: "consume" }
                  )
                  .then(function (e) {
                    return "finished" == e.status || "refund" == e.status
                      ? (uni.hideLoading(),
                        s.default.showalert(
                          "提示",
                          "预约失败,订单已结算",
                          null,
                          function () {
                            uni.navigateBack({ delta: 2 });
                          },
                          !1,
                          "确定"
                        ))
                      : "created" == e.status &&
                        1 == e.appointment_status &&
                        0 == e.appointment_use_status
                      ? ((t.queryappointmentcount = 0),
                        setTimeout(function () {
                          return (
                            uni.hideLoading(),
                            t.finishedPayResetAppointmentStatus(),
                            uni.redirectTo({
                              url: "/pagesA/appointmentdetail/appointmentdetail",
                            })
                          );
                        }, 50))
                      : "consuming" == e.status && 1 == e.appointment_use_status
                      ? ((t.queryappointmentcount = 0),
                        setTimeout(function () {
                          return (
                            uni.hideLoading(),
                            t.finishedPayResetAppointmentStatus(),
                            uni.redirectTo({
                              url: "/pagesA/consuming/consuming",
                            })
                          );
                        }, 50))
                      : t.queryappointmentcount > 2
                      ? void t.handelpayorderwaittimeout(e)
                      : setTimeout(function () {
                          t.getappointmentstatus();
                        }, 2e3);
                  })
                  .catch(function (e) {
                    return t.queryappointmentcount > 2
                      ? (uni.hideLoading(),
                        (t.queryappointmentcount = 0),
                        s.default.showalert("提示", e))
                      : setTimeout(function () {
                          t.getappointmentstatus();
                        }, 2e3);
                  })
                  .finally(function () {
                    t.queryappointmentcount++;
                  });
              },
              handelpayorderwaittimeout: function (t) {
                var e = this;
                return (
                  uni.hideLoading(),
                  (this.queryappointmentcount = 0),
                  s.default.showalert(
                    "提示",
                    "正在尝试预约中,设备可能长时间未响应，是否继续等待",
                    function () {
                      uni.navigateBack({ delta: 2 });
                    },
                    function () {
                      (e.btnstatusobj.text = "确认结果中..."),
                        (e.btnstatusobj.disabled = !0),
                        e.refreshappointmentstatus();
                    },
                    !0,
                    "否",
                    "是"
                  )
                );
              },
              QueryOrderInfoAsync: function (t) {
                var e = this;
                return new Promise(function (a, n) {
                  s.default
                    .sendapppost(
                      e.project.server_addr +
                        s.default.API_PATH.getrecorddetail,
                      { bill_id: t, use_type: "consume" }
                    )
                    .then(function (t) {
                      a(t);
                    })
                    .catch(function (t) {
                      n({});
                    });
                });
              },
              finishedPayResetAppointmentStatus: function () {
                var t = getCurrentPages(),
                  e = t[t.length - 2];
                e &&
                  "pagesA/appointment/appointment" == e.route &&
                  e.$vm.calceledpayorderchangestatus();
              },
            },
          };
        e.default = d;
      }).call(this, a("5a52")["default"]);
    },
    "746d": function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("698d"),
        i = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = i.a;
    },
    8343: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("e7f6"),
        i = a("746d");
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      a("a752");
      var s = a("f0c5"),
        o = Object(s["a"])(
          i["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "b9c769b2",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = o.exports;
    },
    a752: function (t, e, a) {
      "use strict";
      var n = a("f6aa"),
        i = a.n(n);
      i.a;
    },
    e7f6: function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return n;
      }),
        a.d(e, "c", function () {
          return i;
        }),
        a.d(e, "a", function () {});
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-uni-view",
            { staticStyle: { height: "100vh", "background-color": "#f7f7f7" } },
            [
              a(
                "cu-custom",
                {
                  attrs: {
                    bgColor: "titleview",
                    isBack: "paycharges" != t.SceneType,
                    isControlback: !0,
                  },
                  on: {
                    backevent: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.backevent.apply(void 0, arguments);
                    },
                  },
                },
                [
                  a(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("支付订单")]
                  ),
                ],
                2
              ),
              a(
                "v-uni-scroll-view",
                {
                  staticClass: "order-container",
                  staticStyle: { height: "calc(100% - 200upx)" },
                  attrs: { "scroll-y": "true" },
                },
                [
                  a("div", { staticClass: "order-info" }, [
                    a("div", { staticClass: "order-title" }, [
                      t._v(t._s(t.ordertitle)),
                    ]),
                    a(
                      "div",
                      {
                        staticStyle: {
                          display: "inline-block",
                          "margin-top": "30upx",
                        },
                      },
                      [
                        a("span", { staticClass: "Rmb-text" }, [t._v("¥")]),
                        a("span", { staticClass: "money-text" }, [
                          t._v(t._s(t.ordermoney)),
                        ]),
                      ]
                    ),
                    "paycharges" != t.SceneType
                      ? a("div", { staticClass: "desc-text" }, [
                          a("span", [
                            t._v("支付剩余时间"),
                            a("span", [t._v(t._s(t.downtime) + "s")]),
                          ]),
                        ])
                      : t._e(),
                  ]),
                  a(
                    "v-uni-view",
                    { staticClass: "content-container" },
                    [
                      a(
                        "v-uni-view",
                        { staticClass: "info-detail" },
                        [
                          a(
                            "v-uni-view",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.payswitch.abcdisable,
                                  expression: "payswitch.abcdisable",
                                },
                              ],
                              staticClass: "pay-type-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    (t.rechargemethod = "abc_china");
                                },
                              },
                            },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "type-container" },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "title-img-container" },
                                    [
                                      a("v-uni-image", {
                                        staticClass: "title-img",
                                        attrs: {
                                          src: "/static/ABCChina.png",
                                          mode: "aspectFit",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "desc-content-container" },
                                    [
                                      a(
                                        "v-uni-view",
                                        [
                                          a(
                                            "v-uni-view",
                                            { staticClass: "type-text" },
                                            [t._v("农行")]
                                          ),
                                          a(
                                            "v-uni-view",
                                            { staticClass: "recommendicon" },
                                            [
                                              a("v-uni-text", {
                                                staticClass:
                                                  "cuIcon-appreciate",
                                                staticStyle: {
                                                  "margin-right": "5upx",
                                                },
                                              }),
                                              t._v("推荐"),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                { staticClass: "select-container" },
                                [
                                  a("v-uni-radio", {
                                    staticClass: "round select-radio",
                                    class:
                                      "abc_china" == t.rechargemethod
                                        ? "checked"
                                        : "",
                                    attrs: {
                                      checked: "abc_china" == t.rechargemethod,
                                      value: "abc_china",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            "v-uni-view",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.payswitch.wechatdisable,
                                  expression: "payswitch.wechatdisable",
                                },
                              ],
                              staticClass: "pay-type-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    (t.rechargemethod = "wechat");
                                },
                              },
                            },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "type-container" },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "title-img-container" },
                                    [
                                      a("v-uni-image", {
                                        staticClass: "title-img",
                                        attrs: {
                                          src: "/static/wechat.png",
                                          mode: "aspectFit",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "desc-content-container" },
                                    [
                                      a(
                                        "v-uni-view",
                                        { staticClass: "type-text" },
                                        [t._v("微信")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                { staticClass: "select-container" },
                                [
                                  a("v-uni-radio", {
                                    staticClass: "round select-radio",
                                    class:
                                      "wechat" == t.rechargemethod
                                        ? "checked"
                                        : "",
                                    attrs: {
                                      checked: "wechat" == t.rechargemethod,
                                      value: "wechat",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            "v-uni-view",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.payswitch.alipaydisable,
                                  expression: "payswitch.alipaydisable",
                                },
                              ],
                              staticClass: "pay-type-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    (t.rechargemethod = "alipay");
                                },
                              },
                            },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "type-container" },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "title-img-container" },
                                    [
                                      a("v-uni-image", {
                                        staticClass: "title-img",
                                        attrs: {
                                          src: "/static/alipay_icon.png",
                                          mode: "aspectFit",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "desc-content-container" },
                                    [
                                      a(
                                        "v-uni-view",
                                        { staticClass: "type-text" },
                                        [t._v("支付宝")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                { staticClass: "select-container" },
                                [
                                  a("v-uni-radio", {
                                    staticClass: "round select-radio",
                                    class:
                                      "alipay" == t.rechargemethod
                                        ? "checked"
                                        : "",
                                    attrs: {
                                      checked: "alipay" == t.rechargemethod,
                                      value: "alipay",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            "v-uni-view",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.payswitch.wxpayscoredisabled,
                                  expression: "payswitch.wxpayscoredisabled",
                                },
                              ],
                              staticClass: "pay-type-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    (t.rechargemethod = "wx_payscore");
                                },
                              },
                            },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "type-container" },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "title-img-container" },
                                    [
                                      a("v-uni-image", {
                                        staticClass: "title-img",
                                        attrs: {
                                          src: "/static/wechat.png",
                                          mode: "aspectFit",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "desc-content-container" },
                                    [
                                      a(
                                        "v-uni-view",
                                        { staticClass: "type-text" },
                                        [t._v("微信支付分")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                { staticClass: "select-container" },
                                [
                                  a("v-uni-radio", {
                                    staticClass: "round select-radio",
                                    class:
                                      "wx_payscore" == t.rechargemethod
                                        ? "checked"
                                        : "",
                                    attrs: {
                                      checked:
                                        "wx_payscore" == t.rechargemethod,
                                      value: "wx_payscore",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a("div", { staticClass: "desc-div" }, [
                    a(
                      "div",
                      {
                        staticStyle: {
                          "text-align": "center",
                          "font-size": "30upx",
                        },
                      },
                      [t._v("支付说明")]
                    ),
                    "paycharges" != t.SceneType
                      ? a(
                          "div",
                          [
                            "pre_consume" == t.SceneType
                              ? a("v-uni-text", [
                                  t._v(
                                    "1.消费时首先使用优惠券额度，若优惠券额度不足则使用账户余额，余额不足则需要在线支付不足的金额。"
                                  ),
                                ])
                              : a("v-uni-text", [
                                  t._v(
                                    "1.消费时首先使用优惠券额度，若优惠券额度不足则使用账户余额，余额不足则需要冻结不足的金额。"
                                  ),
                                ]),
                            a("br"),
                            t._v("2.订单结算后系统自动找零。"),
                            a("br"),
                            t._v("3.请在倒计时结束之前完成支付。"),
                          ],
                          1
                        )
                      : a("div", { staticStyle: { color: "red" } }, [
                          t._v(
                            "请及时完成上一笔订单的支付，以免影响你的后续使用"
                          ),
                        ]),
                  ]),
                ],
                1
              ),
              a(
                "v-uni-view",
                { staticClass: "submit-btn" },
                [
                  a(
                    "v-uni-button",
                    {
                      staticClass: "confirm-btn",
                      attrs: {
                        type: "primary",
                        disabled: t.btnstatusobj.disabled,
                      },
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.startpayorder.apply(void 0, arguments);
                        },
                      },
                    },
                    [t._v(t._s(t.btnstatusobj.text))]
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        i = [];
    },
    f6aa: function (t, e, a) {
      var n = a("4d84");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var i = a("4f06").default;
      i("5250c1e4", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
