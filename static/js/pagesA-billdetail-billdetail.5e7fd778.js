(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-billdetail-billdetail"],
  {
    "134d": function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          "[v-cloak][data-v-6a1fa364]{display:none!important}uni-page-body[data-v-6a1fa364]{background-color:#f7f7f7}body.?%PAGE?%[data-v-6a1fa364]{background-color:#f7f7f7}.head-title[data-v-6a1fa364]{text-align:center;padding-top:%?40?%}.title-type[data-v-6a1fa364]{font-size:%?30?%;margin:%?5?% 0}.title-money[data-v-6a1fa364]{font-size:%?60?%;margin:%?10?% 0}.title-status[data-v-6a1fa364]{font-size:%?30?%;color:#a4d5be}.line[data-v-6a1fa364]{border-top:1px solid #ddd;margin:5px %?20?% 0 %?20?%}.item-container[data-v-6a1fa364]{background-color:#fff;margin:%?40?% %?20?%;border-radius:%?10?%}.detail-item[data-v-6a1fa364]{\n\t/* border-bottom: 1px solid #eeeeee; */margin:0 %?20?%;padding:%?20?% 0}.detail-item>.item-title[data-v-6a1fa364]{color:#909090}.detail-item>.item-content[data-v-6a1fa364]{float:right}.warn-text[data-v-6a1fa364]{color:#f64101!important}.runlog-container>.detail-item[data-v-6a1fa364]{display:flex;justify-content:space-between;margin-top:%?-20?%\n\t/* font-size: 0.75rem; */}.runlog-container>.detail-item>.item-title[data-v-6a1fa364]{flex:1}.runlog-container>.detail-item>.item-content[data-v-6a1fa364]{flex:1;text-align:right}.deduct-records[data-v-6a1fa364]{margin:%?20?% 0 %?30?% %?20?%;font-size:%?32?%}",
          "",
        ]),
        (t.exports = e);
    },
    "2bd5": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("991d"),
        a = i("61c5");
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(s);
      i("3620");
      var r = i("f0c5"),
        o = Object(r["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "6160c7d4",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = o.exports;
    },
    3620: function (t, e, i) {
      "use strict";
      var n = i("4a15"),
        a = i.n(n);
      a.a;
    },
    "4a15": function (t, e, i) {
      var n = i("d764");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("4563aed8", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "61c5": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("72be"),
        a = i.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(s);
      e["default"] = a.a;
    },
    "72be": function (t, e, i) {
      "use strict";
      i("7a82");
      var n = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = n(i("6972")),
        s = {
          name: "ContactService",
          emits: ["click"],
          props: {
            height: { type: String, default: "88rpx" },
            backgroundColor: { type: String, default: "#ffffff" },
            type: { type: String, default: "column" },
            top: { type: String, default: "50%" },
          },
          data: function () {
            return { project: this.$store.state.project };
          },
          created: function () {},
          mounted: function () {},
          computed: {
            phone: function () {
              var t = "暂未开放";
              return (
                a.default.isNullOrEmpty(this.project) ||
                  a.default.isNullOrEmpty(this.project.projectswitch) ||
                  a.default.isNullOrEmpty(
                    this.project.projectswitch.customer_service
                  ) ||
                  a.default.isNullOrEmpty(
                    this.project.projectswitch.customer_service[0].phone
                  ) ||
                  (t = this.project.projectswitch.customer_service[0].phone),
                t
              );
            },
          },
          methods: {
            onClick: function () {
              this.$emit("click"), a.default.callKefu();
            },
          },
        };
      e.default = s;
    },
    "79de": function (t, e, i) {
      var n = i("134d");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("24c14564", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "7b5b": function (t, e, i) {
      "use strict";
      var n = i("79de"),
        a = i.n(n);
      a.a;
    },
    "873f": function (t, e, i) {
      "use strict";
      (function (t) {
        i("7a82");
        var n = i("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          i("a9e3"),
          i("ac1f"),
          i("5319"),
          i("4de4"),
          i("d3b7"),
          i("c975"),
          i("e9c4"),
          i("99af"),
          i("14d9");
        var a = n(i("6972")),
          s = n(i("5cd9")),
          r = {
            components: {},
            onLoad: function (t) {
              (this.billid = t.billid), (this.type = t.type);
            },
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                billid: "",
                type: "",
                order: {},
                isShowAllDetail: !1,
                RunLogList: [],
                deductRecords: [],
                deductionMode: 0,
              };
            },
            computed: {
              ContentStyle: function () {
                return "height:calc(100% - ".concat(
                  this.CustomBar,
                  "px);overflow-y: scroll;"
                );
              },
              isDisplayWaterValue: function () {
                return (
                  ("bath" == this.order.consume_type ||
                    "drinking" == this.order.consume_type ||
                    "blower" == this.order.consume_type) &&
                  1 ==
                    Number(
                      this.project.projectswitch.water_value_display_enable
                    )
                );
              },
              isDisplayRefundValue: function () {
                return 11 == this.order.status || this.order.refund_value > 0;
              },
              isDisplayBillingMethod: function () {
                return "retail" != this.order.consume_type;
              },
              isUseDeductRecord: function () {
                return (
                  this.order.deduct_record &&
                  this.order.deduct_record.length > 0
                );
              },
            },
            mounted: function () {
              this.getdetail(this.billid, this.type);
            },
            filters: {
              getIconName: function (t) {
                switch (t) {
                  case "metering":
                  case "timing":
                    return "/static/yinshui.png";
                  case "recharge":
                    return "/static/recharge.png";
                  case "drinking":
                    return "/static/yinshui.png";
                  case "bath":
                    return "/static/xiyu.png";
                  case "blower":
                    return "/static/chuifeng.png";
                  case "laundry":
                    return "/static/xiyi.png";
                  case "shoe":
                    return "/static/xixie.png";
                  case "dryer":
                    return "/static/honggan.png";
                  case "retail":
                    return "/static/lingshou.png";
                  default:
                    return "";
                }
              },
              getconsumestatus: function (t) {
                return s.default.EnumConsumeOrderStatus[t];
              },
              parseConsumeType: function (t) {
                return s.default.EnumConsumeOrderType[t];
              },
              parseChargeOptionType: function (t) {
                return s.default.EnumConsumeType[t];
              },
              getdownmoneytype: function (t) {
                return s.default.EnumDownMoneyType[t];
              },
              numbertofixed: function (t) {
                var e = "";
                return (
                  a.default.isNullOrEmpty(t) ||
                    (e = Number(t).toFixed(2) + "元"),
                  e
                );
              },
              getconsumemoney: function (t) {
                var e = "";
                return (
                  a.default.isNullOrEmpty(t) || (e = Number(t).toFixed(2)), e
                );
              },
              getconsumevalue: function (t) {
                var e = "0.00",
                  i = "";
                switch (t.charge_option) {
                  case 0:
                    e = 0;
                    var n = "升";
                    "blower" == t.consume_type && (n = "度"),
                      t.device_port_count >= 1 &&
                        ((e += t.water_volume_1),
                        (i += "端口1：" + t.water_volume_1 + " " + n + ";")),
                      t.device_port_count >= 2 &&
                        ((e += t.water_volume_2),
                        (i += "端口2：" + t.water_volume_2 + " " + n + ";")),
                      t.device_port_count >= 3 &&
                        ((e += t.water_volume_3),
                        (i += "端口3：" + t.water_volume_3 + " " + n + ";")),
                      t.device_port_count >= 4 &&
                        ((e += t.water_volume_4),
                        (i += "端口4：" + t.water_volume_4 + " " + n + ";")),
                      (e =
                        t.deductionMode && 1 == t.deductionMode
                          ? Math.ceil(e) + " " + n
                          : e.toFixed("2") + " " + n);
                    break;
                  case 1:
                    (e = t.consume_value + " 秒"),
                      a.default.isNullOrEmpty(t.consume_value_1) ||
                        0 == t.consume_value_1 ||
                        (i += "端口1：" + t.consume_value_1 + " 秒；"),
                      a.default.isNullOrEmpty(t.consume_value_2) ||
                        0 == t.consume_value_2 ||
                        (i += "端口2：" + t.consume_value_2 + " 秒；"),
                      a.default.isNullOrEmpty(t.consume_value_3) ||
                        0 == t.consume_value_3 ||
                        (i += "端口3：" + t.consume_value_3 + " 秒；"),
                      a.default.isNullOrEmpty(t.consume_value_4) ||
                        0 == t.consume_value_4 ||
                        (i += "端口4：" + t.consume_value_4 + " 秒；");
                    break;
                  case 2:
                    (e = t.consume_value), 5 == t.device_type && (e += " 秒");
                    for (var s = 1; s <= 4; s++)
                      a.default.isNullOrEmpty(t["consume_value_" + s]) ||
                        0 == t["consume_value_" + s] ||
                        ((i += "端口" + s + "：" + t["consume_value_" + s]),
                        5 == t.device_type && (i += " 秒"),
                        (i += "；"));
                    break;
                  default:
                    break;
                }
                return (
                  a.default.isNullOrEmpty(i) || (i = "(" + i + ")"),
                  "blower" == t.consume_type && (e = e.replace("升", "度")),
                  e
                );
              },
              getrechargestatus: function (t) {
                return s.default.EnumRechargeStatus[t.status];
              },
              getrechargetype: function (t) {
                return s.default.EnumRechargeType[t];
              },
              parseusedowntype: function (t) {
                var e = "",
                  i = t.deduct_record.filter(function (t) {
                    return "随机立减" == t.desc;
                  });
                return (
                  i.length > 0 && (e += "优惠券(随机立减) "),
                  1 == t.use_coupon &&
                    Number(t.deduct_from_coupon) > 0 &&
                    (e += "优惠券 "),
                  Number(t.deduct_from_balance) > 0 && (e += "余额 "),
                  Number(t.pay_money) > 0 &&
                    (e += s.default.EnumPaymentChannel[t.pay_channel] + "支付"),
                  e
                );
              },
              deductrecordtype: function (t) {
                var e = "";
                return (
                  (e =
                    1 == t.channel && null !== t.desc && "随机立减" === t.desc
                      ? s.default.EnumConsumeDeductChannel[t.channel] +
                        "(随机立减)"
                      : s.default.EnumConsumeDeductChannel[t.channel]),
                  e
                );
              },
              parsesource: function (t) {
                return s.default.EnumActionSource[t];
              },
              parsedesc: function (t) {
                var e = "无";
                return a.default.isNullOrEmpty(t) || (e = t), e;
              },
              parserechargevalue: function (t) {
                if (a.default.isNullOrEmpty(t)) return "";
                var e = "+" + Number(t).toFixed(2);
                return -1 != e.indexOf("-") && (e = e.replace("+", "")), e;
              },
              getConsumeOperationModel: function (t) {
                var e = t.device_model,
                  i = t.consume_value,
                  n = t.net_type;
                return (
                  (e = "DEFAULT" === e ? e + "-" + n : e),
                  s.default.EnumConsumeOperationModel[e] &&
                  s.default.EnumConsumeOperationModel[e][i]
                    ? s.default.EnumConsumeOperationModel[e][i]
                    : i
                );
              },
              getTempLevel: function (t) {
                return s.default.EnumTempLevel[t];
              },
              parseconsumetime: function (t) {
                var e = a.default.MillisecondToDate(Number(t));
                return e;
              },
              parseConsumingTime: function (t) {
                var e = "";
                return (
                  a.default.isNullOrEmpty(t.consume_timing_1) ||
                    0 == t.consume_timing_1 ||
                    (e +=
                      "端口1：" +
                      a.default.MillisecondToDate(Number(t.consume_timing_1)) +
                      " ；"),
                  a.default.isNullOrEmpty(t.consume_timing_2) ||
                    0 == t.consume_timing_2 ||
                    (e +=
                      "端口2：" +
                      a.default.MillisecondToDate(Number(t.consume_timing_2)) +
                      " ；"),
                  a.default.isNullOrEmpty(t.consume_timing_3) ||
                    0 == t.consume_timing_3 ||
                    (e +=
                      "端口3：" +
                      a.default.MillisecondToDate(Number(t.consume_timing_3)) +
                      " ；"),
                  a.default.isNullOrEmpty(t.consume_timing_4) ||
                    0 == t.consume_timing_4 ||
                    (e +=
                      "端口4：" +
                      a.default.MillisecondToDate(Number(t.consume_timing_4)) +
                      " ；"),
                  a.default.isNullOrEmpty(e) || (e = "（" + e + "）"),
                  a.default.MillisecondToDate(Number(t.consume_timing))
                );
              },
            },
            methods: {
              getcosnumestatus: function (t) {
                var e = { style: "", text: "" };
                if (
                  (t.status &&
                    (e.text = s.default.EnumConsumeOrderStatus[t.status]),
                  "device_settle_type" in t &&
                    "finished" == t.status &&
                    ("laundry" == t.consume_type ||
                      "shoe" == t.consume_type ||
                      "dryer" == t.consume_type))
                )
                  switch (t.device_settle_type) {
                    case 240:
                      (e.text = "订单运行异常，交易已取消"),
                        (e.style = "color:#f64101");
                      break;
                    case 248:
                      (e.text = "订单运行异常，系统已取消"),
                        (e.style = "color:#f64101");
                      break;
                    default:
                      break;
                  }
                return e;
              },
              getdetail: function (t, e) {
                var i = this,
                  n = { bill_id: t, use_type: e };
                uni.showLoading({ mask: !0, title: "正在查询中" }),
                  a.default
                    .sendapppost(
                      i.project.server_addr +
                        a.default.API_PATH.getrecorddetail,
                      n
                    )
                    .then(function (t) {
                      if (
                        (uni.hideLoading(),
                        (i.order = t),
                        "bath" == t.consume_type ||
                          "drinking" == t.consume_type)
                      ) {
                        var e = i.userdata.detailinfo.ChargeRules.filter(
                          function (e) {
                            return e.device_type == t.device_type;
                          }
                        );
                        i.deductionMode = e[0].deduction_mode;
                      }
                      (i.order.deductionMode = i.deductionMode),
                        i.order &&
                          null !== i.order.deduct_record &&
                          void 0 !== i.order.deduct_record &&
                          i.order.deduct_record.length > 0 &&
                          (i.deductRecords = i.order.deduct_record),
                        i.ParseRunLog(t.process_log);
                    })
                    .catch(function (t) {
                      return (
                        uni.hideLoading(),
                        a.default.showalert("提示", t, null, function () {
                          uni.navigateBack({ delta: 1 });
                        })
                      );
                    });
              },
              complain: function (t) {
                var e = {
                    create_at: t.create_at,
                    consume_money: t.consume_money,
                    consume_type: t.consume_type,
                    device_id: t.device_id,
                    building_name: t.building_name,
                    floor_name: t.floor_name,
                    room_name: t.room_name,
                    order_id: t.order_id,
                    consume_value: t.consume_value,
                    consume_timing: t.consume_timing,
                    device_name: t.device_name,
                    charge_option: t.charge_option,
                  },
                  i =
                    "../addrepair/addrepair?type=1&order=" +
                    encodeURIComponent(JSON.stringify(e));
                uni.navigateTo({ url: i });
              },
              ParseRunLog: function (e) {
                if (!a.default.isNullOrEmpty(e))
                  try {
                    for (
                      var i = [], n = e.split(";"), s = 0;
                      s < n.length;
                      s++
                    ) {
                      var r = !1;
                      (0 != s && s != n.length - 1 && s != n.length - 2) ||
                        (r = !0);
                      for (
                        var o = n[s].split(","), u = {}, c = "", l = 0;
                        l < o.length;
                        l++
                      ) {
                        var d = o[l],
                          v = d.split(":");
                        (u.type = "info"),
                          (u.text = c + d),
                          "设备告警" == v[0] && ((u.type = "warn"), (r = !0)),
                          "时间" == v[0]
                            ? (u.date = ""
                                .concat(v[1], ":")
                                .concat(v[2], ":")
                                .concat(v[3]))
                            : -1 != v[0].indexOf("状态") &&
                              o.length > 2 &&
                              (c = d + ","),
                          -1 != n[s].indexOf("结束") && (u.text = d);
                      }
                      r && i.push(u);
                    }
                    this.RunLogList = i;
                  } catch (m) {
                    t.log(m);
                  }
              },
            },
          };
        e.default = r;
      }).call(this, i("5a52")["default"]);
    },
    "991d": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return a;
        }),
        i.d(e, "a", function () {});
      var n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            [
              "column" == t.type
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "column-container",
                      style: [
                        { "background-color": t.backgroundColor },
                        { top: t.top },
                      ],
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.onClick.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "column-icon-container" },
                        [
                          i("v-uni-image", {
                            attrs: { src: "/static/imgs/contact_service.png" },
                          }),
                        ],
                        1
                      ),
                      i("v-uni-view", { staticClass: "text-container" }, [
                        t._v("联系"),
                        i("br"),
                        t._v("客服"),
                      ]),
                    ],
                    1
                  )
                : i(
                    "v-uni-view",
                    {
                      staticClass: "row-container",
                      style: [{ top: t.top }],
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.onClick.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "row-icon-container" },
                        [
                          i("v-uni-image", {
                            attrs: { src: "/static/imgs/contact_service.png" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "text-container",
                          staticStyle: {
                            "writing-mode": "vertical-lr",
                            "text-orientation": "upright",
                          },
                        },
                        [t._v("联系客服")]
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
    c0ef: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return s;
        }),
        i.d(e, "a", function () {
          return n;
        });
      var n = { contactService: i("2bd5").default },
        a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticStyle: { height: "100%" } },
            [
              i(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  i(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("账单详情")]
                  ),
                ],
                2
              ),
              "consume" == t.type
                ? i(
                    "v-uni-view",
                    { style: t.ContentStyle },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "head-title" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "title-img-container" },
                            [
                              i("v-uni-image", {
                                staticClass: "title-img",
                                attrs: {
                                  src: t._f("getIconName")(
                                    t.order.consume_type
                                  ),
                                },
                              }),
                            ],
                            1
                          ),
                          i("v-uni-view", { staticClass: "title-type" }, [
                            t._v(
                              t._s(
                                t._f("parseConsumeType")(t.order.consume_type)
                              )
                            ),
                          ]),
                          i("v-uni-view", { staticClass: "title-money" }, [
                            t._v(
                              "-" +
                                t._s(
                                  t._f("getconsumemoney")(t.order.consume_money)
                                )
                            ),
                          ]),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "title-status",
                              style: t.getcosnumestatus(t.order).style,
                            },
                            [t._v(t._s(t.getcosnumestatus(t.order).text))]
                          ),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "item-container" },
                        [
                          i(
                            "v-uni-view",
                            {
                              staticClass: "margin-tb-sm",
                              staticStyle: {
                                display: "flex",
                                "justify-content": "center",
                                "align-items": "center",
                                "padding-top": "10upx",
                              },
                            },
                            [
                              i("v-uni-text", { staticClass: "lg text-gray" }, [
                                t._v("对此订单有疑问？"),
                              ]),
                              i(
                                "v-uni-button",
                                {
                                  staticClass: "cu-btn round sm line-blue",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.complain(t.order);
                                    },
                                  },
                                },
                                [t._v("去投诉")]
                              ),
                              i("contact-service", { attrs: { top: "20%" } }),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v("订单号"),
                              ]),
                              i("v-uni-text", { staticClass: "item-content" }, [
                                t._v(t._s(t.order.order_id)),
                              ]),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v("创建时间"),
                              ]),
                              i("v-uni-text", { staticClass: "item-content" }, [
                                t._v(t._s(t.order.create_at)),
                              ]),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v("冻结金额"),
                              ]),
                              i("v-uni-text", { staticClass: "item-content" }, [
                                t._v(
                                  t._s(
                                    t._f("numbertofixed")(t.order.charge_money)
                                  )
                                ),
                              ]),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v("实际消费"),
                              ]),
                              i("v-uni-text", { staticClass: "item-content" }, [
                                t._v(
                                  t._s(
                                    t._f("numbertofixed")(t.order.consume_money)
                                  )
                                ),
                              ]),
                            ],
                            1
                          ),
                          ("bath" != t.order.consume_type &&
                            "blower" != t.order.consume_type) ||
                          void 0 == t.order.keep_time
                            ? t._e()
                            : i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("订单时长")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("parseconsumetime")(
                                            t.order.keep_time
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                          ("bath" != t.order.consume_type &&
                            "drinking" != t.order.consume_type &&
                            "blower" != t.order.consume_type) ||
                          void 0 == t.order.consume_timing
                            ? t._e()
                            : i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  "bath" == t.order.consume_type ||
                                  "drinking" == t.order.consume_type
                                    ? i(
                                        "v-uni-text",
                                        { staticClass: "item-title" },
                                        [t._v("用水时长")]
                                      )
                                    : i(
                                        "v-uni-text",
                                        { staticClass: "item-title" },
                                        [t._v("使用时长")]
                                      ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("parseConsumingTime")(t.order)
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                          t.isDisplayWaterValue
                            ? i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("消费量")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(t._f("getconsumevalue")(t.order))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                          "laundry" == t.order.consume_type ||
                          "shoe" == t.order.consume_type
                            ? i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("消费模式")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("getConsumeOperationModel")(
                                            t.order
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                          "dryer" == t.order.consume_type
                            ? i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("温度等级")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("getTempLevel")(
                                            t.order.temp_level
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                          "dryer" == t.order.consume_type
                            ? i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("烘衣时长")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [t._v(t._s(t.order.consume_value) + "分钟")]
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                          i(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v("使用设备"),
                              ]),
                              i("v-uni-text", { staticClass: "item-content" }, [
                                t._v(t._s(t.order.device_id)),
                              ]),
                            ],
                            1
                          ),
                          0 == t.isShowAllDetail
                            ? i(
                                "v-uni-view",
                                {
                                  staticClass: "flex-sub text-center",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        (t.isShowAllDetail = !0);
                                    },
                                  },
                                },
                                [
                                  i("v-uni-view", { staticClass: "cu-item" }),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "solid-bottom padding" },
                                    [
                                      i(
                                        "v-uni-text",
                                        { staticClass: "lg text-gray" },
                                        [t._v("更多")]
                                      ),
                                      i("v-uni-text", {
                                        staticClass:
                                          "lg text-gray cuIcon-unfold",
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                        ],
                        1
                      ),
                      t.isShowAllDetail && t.isUseDeductRecord
                        ? i(
                            "v-uni-view",
                            {},
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "deduct-records" },
                                [t._v("扣款记录")]
                              ),
                              t._l(t.deductRecords, function (e, n) {
                                return i(
                                  "v-uni-view",
                                  {
                                    staticClass: "item-container",
                                    staticStyle: { "margin-top": "-20upx" },
                                    attrs: { keys: n },
                                  },
                                  [
                                    i(
                                      "v-uni-view",
                                      { staticClass: "detail-item" },
                                      [
                                        i(
                                          "v-uni-text",
                                          { staticClass: "item-title" },
                                          [t._v("扣费方式")]
                                        ),
                                        i(
                                          "v-uni-text",
                                          { staticClass: "item-content" },
                                          [
                                            t._v(
                                              t._s(
                                                t._f("deductrecordtype")(
                                                  e,
                                                  t.order
                                                )
                                              )
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                    i(
                                      "v-uni-view",
                                      { staticClass: "detail-item" },
                                      [
                                        i(
                                          "v-uni-text",
                                          { staticClass: "item-title" },
                                          [t._v("扣款金额")]
                                        ),
                                        i(
                                          "v-uni-text",
                                          { staticClass: "item-content" },
                                          [
                                            t._v(
                                              t._s(
                                                t._f("numbertofixed")(e.money)
                                              )
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                );
                              }),
                            ],
                            2
                          )
                        : t._e(),
                      t.isShowAllDetail
                        ? i(
                            "v-uni-view",
                            {
                              staticClass: "item-container",
                              staticStyle: { "margin-top": "-20upx" },
                            },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("账单分类")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("parseConsumeType")(
                                            t.order.consume_type
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("扣费方式")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(t._f("parseusedowntype")(t.order))
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              null != t.order.source && void 0 != t.order.source
                                ? i(
                                    "v-uni-view",
                                    { staticClass: "detail-item" },
                                    [
                                      i(
                                        "v-uni-text",
                                        { staticClass: "item-title" },
                                        [t._v("消费渠道")]
                                      ),
                                      i(
                                        "v-uni-text",
                                        { staticClass: "item-content" },
                                        [
                                          t._v(
                                            t._s(
                                              t._f("parsesource")(
                                                t.order.source
                                              )
                                            )
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t.isDisplayBillingMethod
                                ? i(
                                    "v-uni-view",
                                    { staticClass: "detail-item" },
                                    [
                                      i(
                                        "v-uni-text",
                                        { staticClass: "item-title" },
                                        [t._v("计费方式")]
                                      ),
                                      i(
                                        "v-uni-text",
                                        { staticClass: "item-content" },
                                        [
                                          t._v(
                                            t._s(
                                              t._f("parseChargeOptionType")(
                                                t.order.charge_option
                                              )
                                            )
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t.isUseDeductRecord
                                ? t._e()
                                : i(
                                    "v-uni-view",
                                    [
                                      null != t.order.deduct_from_balance &&
                                      void 0 != t.order.deduct_from_balance
                                        ? i(
                                            "v-uni-view",
                                            { staticClass: "detail-item" },
                                            [
                                              i(
                                                "v-uni-text",
                                                { staticClass: "item-title" },
                                                [t._v("余额扣费")]
                                              ),
                                              i(
                                                "v-uni-text",
                                                { staticClass: "item-content" },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t._f("numbertofixed")(
                                                        t.order
                                                          .deduct_from_balance
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                      null != t.order.deduct_from_coupon &&
                                      void 0 != t.order.deduct_from_coupon
                                        ? i(
                                            "v-uni-view",
                                            { staticClass: "detail-item" },
                                            [
                                              i(
                                                "v-uni-text",
                                                { staticClass: "item-title" },
                                                [t._v("优惠券扣费")]
                                              ),
                                              i(
                                                "v-uni-text",
                                                { staticClass: "item-content" },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t._f("numbertofixed")(
                                                        t.order
                                                          .deduct_from_coupon
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                      1 == t.order.use_pay &&
                                      void 0 != t.order.deduct_from_pay
                                        ? i(
                                            "v-uni-view",
                                            { staticClass: "detail-item" },
                                            [
                                              i(
                                                "v-uni-text",
                                                { staticClass: "item-title" },
                                                [t._v("支付扣费")]
                                              ),
                                              i(
                                                "v-uni-text",
                                                { staticClass: "item-content" },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t._f("numbertofixed")(
                                                        t.order.deduct_from_pay
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                      1 == t.order.use_withhold &&
                                      void 0 != t.order.deduct_from_withhold
                                        ? i(
                                            "v-uni-view",
                                            { staticClass: "detail-item" },
                                            [
                                              i(
                                                "v-uni-text",
                                                { staticClass: "item-title" },
                                                [t._v("免密扣费")]
                                              ),
                                              i(
                                                "v-uni-text",
                                                { staticClass: "item-content" },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t._f("numbertofixed")(
                                                        t.order
                                                          .deduct_from_withhold
                                                      )
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                    ],
                                    1
                                  ),
                              i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("解冻金额")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("numbertofixed")(
                                            t.order.refund_money
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("账户余额")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("numbertofixed")(t.order.balance)
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : t._e(),
                      !t.isShowAllDetail ||
                      ("laundry" != t.order.consume_type &&
                        "shoe" != t.order.consume_type &&
                        "dryer" != t.order.consume_type)
                        ? t._e()
                        : i(
                            "v-uni-view",
                            { staticClass: "item-container runlog-container" },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("订单进度")]
                                  ),
                                  0 == t.RunLogList.length
                                    ? i(
                                        "v-uni-text",
                                        { staticClass: "item-content" },
                                        [t._v("暂无进度上传")]
                                      )
                                    : t._e(),
                                ],
                                1
                              ),
                              t._l(t.RunLogList, function (e) {
                                return "" != e.text
                                  ? i(
                                      "v-uni-view",
                                      { staticClass: "detail-item" },
                                      [
                                        i(
                                          "v-uni-text",
                                          {
                                            staticClass: "item-title",
                                            class: [
                                              { "warn-text": "warn" == e.type },
                                            ],
                                          },
                                          [t._v(t._s(e.date))]
                                        ),
                                        i(
                                          "v-uni-text",
                                          {
                                            staticClass: "item-content",
                                            class: [
                                              { "warn-text": "warn" == e.type },
                                            ],
                                          },
                                          [t._v(t._s(e.text))]
                                        ),
                                      ],
                                      1
                                    )
                                  : t._e();
                              }),
                            ],
                            2
                          ),
                    ],
                    1
                  )
                : t._e(),
              "recharge" == t.type
                ? i(
                    "v-uni-view",
                    { style: t.ContentStyle },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "head-title" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "title-img-container" },
                            [
                              i("v-uni-image", {
                                staticClass: "title-img",
                                attrs: { src: t._f("getIconName")("recharge") },
                              }),
                            ],
                            1
                          ),
                          i("v-uni-view", { staticClass: "title-type" }, [
                            t._v("充值"),
                          ]),
                          i("v-uni-view", { staticClass: "title-money" }, [
                            t._v(
                              t._s(
                                t._f("parserechargevalue")(
                                  t.order.recharge_value
                                )
                              )
                            ),
                          ]),
                          i("v-uni-view", { staticClass: "title-status" }, [
                            t._v(t._s(t._f("getrechargestatus")(t.order))),
                          ]),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "item-container" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v("创建时间"),
                              ]),
                              i("v-uni-text", { staticClass: "item-content" }, [
                                t._v(t._s(t.order.create_at)),
                              ]),
                            ],
                            1
                          ),
                          0 == t.order.status
                            ? i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("支付时间")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [t._v(t._s(t.order.pay_time))]
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                          i(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v("订单号"),
                              ]),
                              i("v-uni-text", { staticClass: "item-content" }, [
                                t._v(t._s(t.order.out_trade_no)),
                              ]),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v("交易号"),
                              ]),
                              i("v-uni-text", { staticClass: "item-content" }, [
                                t._v(t._s(t.order.trade_no || "无")),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "item-container",
                          staticStyle: { "margin-top": "-20upx" },
                        },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v("账单分类"),
                              ]),
                              i("v-uni-text", { staticClass: "item-content" }, [
                                t._v("充值"),
                              ]),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v("账单说明"),
                              ]),
                              i("v-uni-text", { staticClass: "item-content" }, [
                                t._v(t._s(t._f("parsedesc")(t.order.body))),
                              ]),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v("支付方式"),
                              ]),
                              i("v-uni-text", { staticClass: "item-content" }, [
                                t._v(
                                  t._s(
                                    t._f("getrechargetype")(
                                      t.order.recharge_type
                                    )
                                  )
                                ),
                              ]),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v("充值金额"),
                              ]),
                              i("v-uni-text", { staticClass: "item-content" }, [
                                t._v(
                                  t._s(
                                    t._f("numbertofixed")(
                                      t.order.recharge_value
                                    )
                                  )
                                ),
                              ]),
                            ],
                            1
                          ),
                          0 == t.order.status
                            ? i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("账户余额")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("numbertofixed")(t.order.balance)
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                          t.isDisplayRefundValue
                            ? i(
                                "v-uni-view",
                                { staticClass: "detail-item" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("退款金额")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("numbertofixed")(
                                            t.order.refund_value
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : t._e(),
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
        s = [];
    },
    d764: function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.column-container[data-v-6160c7d4]{width:%?220?%;height:%?120?%;position:fixed;border-top-left-radius:%?30?%;border-bottom-left-radius:%?30?%;display:flex;align-items:center;justify-content:space-between;right:0;top:50%;padding:0 %?40?% 0 %?20?%;z-index:15}.column-icon-container[data-v-6160c7d4]{width:%?80?%;height:%?80?%}.column-icon-container uni-image[data-v-6160c7d4]{width:100%;height:100%}.row-container[data-v-6160c7d4]{width:%?70?%;height:%?200?%;background-image:linear-gradient(180deg,#d0dcff,#d1f4fe);position:fixed;border-top-left-radius:%?30?%;border-bottom-left-radius:%?30?%;display:flex;flex-flow:column;align-items:center;justify-content:space-between;right:0;padding:%?20?% 0 %?20?% 0;z-index:15}.row-icon-container[data-v-6160c7d4]{width:%?40?%;height:%?40?%}.row-icon-container uni-image[data-v-6160c7d4]{width:100%;height:100%}',
          "",
        ]),
        (t.exports = e);
    },
    f705: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("873f"),
        a = i.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(s);
      e["default"] = a.a;
    },
    fed6: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("c0ef"),
        a = i("f705");
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(s);
      i("7b5b");
      var r = i("f0c5"),
        o = Object(r["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "6a1fa364",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = o.exports;
    },
  },
]);
