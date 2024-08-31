(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-appointmentdetail-appointmentdetail"],
  {
    1501: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("6db6"),
        a = n.n(i);
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      e["default"] = a.a;
    },
    2727: function (t, e, n) {
      "use strict";
      var i = n("fd30"),
        a = n.n(i);
      a.a;
    },
    "5a2e": function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          ".content-view[data-v-452f2306]{position:relative;background-color:#59c3ff;border-radius:%?10?%;margin:%?30?% %?30?% %?60?% %?30?%;\n\t/* height: calc(100% - 90upx - 140upx); */height:auto;padding-bottom:%?20?%}.imgcontainer[data-v-452f2306]{text-align:center;height:%?160?%;width:%?160?%;background-color:#fff;border-radius:%?160?%;margin:%?40?% %?40?% %?20?% %?40?%}.cardview[data-v-452f2306]{text-align:center}.tip-title-container[data-v-452f2306]{display:flex;justify-content:center;align-items:center}.line[data-v-452f2306]{margin:0 auto;width:%?200?%;height:%?2?%;background-color:#d8d8d8}.time-view[data-v-452f2306]{display:flex;align-items:space-between;justify-content:space-between;color:#999;margin:0 %?30?%;border-bottom:1px solid #eee;padding:%?30?% 0}.yuyue_time_img[data-v-452f2306]{position:relative;left:%?20?%;top:%?20?%;width:%?60?%;height:%?60?%}.detail-item[data-v-452f2306]{font-size:1rem;display:flex;justify-content:space-between;padding:%?20?%}.detail-item>.item-title[data-v-452f2306]{color:#909090;font-size:14px}.detail-item>.item-content[data-v-452f2306]{font-size:16px}.dev[data-v-452f2306]{border:1px solid #ddd;margin:%?10?%;padding-top:%?10?%;padding-bottom:%?10?%}.cancel-button[data-v-452f2306]{background:transparent!important;color:#fff;margin-top:%?20?%;border:1px solid #fff}.cancel-button[data-v-452f2306]::after{width:0!important;-webkit-animation:none!important;animation:none!important}",
          "",
        ]),
        (t.exports = e);
    },
    "5a4d": function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([t.i, "uni-view[data-v-25e4db7b]{box-sizing:initial}", ""]),
        (t.exports = e);
    },
    60622: function (t, e, n) {
      var i = n("5a4d");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("02e2b149", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "6db6": function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("a9e3"),
        n("99af");
      var i = {
        data: function () {
          return { animationPercent: 0 };
        },
        mounted: function () {},
        watch: {
          percent: function (t) {
            this.animation
              ? this.loadAnimation()
              : (this.animationPercent = this.percent);
          },
          exception: function (t) {},
        },
        methods: {
          loadAnimation: function () {
            this.animationPercent = 0;
            var t = this,
              e = setInterval(function () {
                t.animationPercent >= t.percent
                  ? (clearInterval(e), t.$emit("onComplete"))
                  : ((t.animationPercent += 1),
                    t.$emit("animationPercent", t.animationPercent));
              }, t.animationSpeed);
          },
        },
        props: {
          size: { type: Number, default: 60 },
          circleColor: { type: String, default: "#32CDA5" },
          defaultColor: { type: String, default: "#e9e9e9" },
          circleWidth: { type: Number, default: 5 },
          percent: { type: Number, default: 0 },
          animation: { type: Boolean, default: !1 },
          animationSpeed: { type: Number, default: 1 },
          clockwise: { type: Boolean, default: !0 },
          direction: { type: Number, default: 0 },
          status: { type: String, default: "normal" },
        },
        computed: {
          sizeAdapter: function () {
            return this.size % 2 == 0 ? this.size : this.size - 1;
          },
          slot: function () {
            return !(!this.$slots || !this.$slots.content);
          },
          cBox: function () {
            var t = this.sizeAdapter,
              e = this.circleWidth,
              n = "\t\n\t\t\t\t\t\tposition:relative ;\n\t\t\t\t\t\theight:"
                .concat(2 * e + t, "px ;\n\t\t\t\t\t\twidth:")
                .concat(
                  2 * e + t,
                  "px ;\n\t\t\t\t\t\tdisplay:flex ;\n\t\t\t\t\t\tjustify-content: center ;\n\t\t\t\t\t\talign-items: center ;\n\t\t\t\t\t\tleft: calc(50% - "
                )
                .concat(Number(2 * e + t) / 2, "px);\n\t\t\t\t\t");
            return n;
          },
          slotStyle: function () {
            var t = this.sizeAdapter,
              e =
                (this.circleWidth,
                "\n\t\t\t\t\t\tborder-radius:50% ;\n\t\t\t\t\t\theight:"
                  .concat(t, "px ;\n\t\t\t\t\t\twidth:")
                  .concat(
                    t,
                    "px ;\n\t\t\t\t\t\tdisplay:flex ;\n\t\t\t\t\t\tjustify-content: center ;\n\t\t\t\t\t\talign-items: center ;\n\t\t\t\t\t"
                  ));
            return e;
          },
          faStyle: function () {
            var t = this.sizeAdapter,
              e = this.circleWidth,
              n = this.defaultColor,
              i = this.direction,
              a = this.clockwise,
              o =
                "\n\t\t\t\t\t\t\t position:absolute ;\n\t\t\t\t\t\t\t border-radius:50% ;\n\t\t\t\t\t\t\t display:flex ;\n\t\t\t\t\t\t\t justify-content: center ;\n\t\t\t\t\t\t\t align-items: center ;\n\t\t\t\t\t\t\t top:0 ;\n\t\t\t\t\t\t\t left:0 ;\n\t\t\t\t\t\t\t height:"
                  .concat(t, "px ;\n\t\t\t\t\t\t\t width:")
                  .concat(t, "px ;\n\t\t\t\t\t\t\t border:")
                  .concat(e, "px ")
                  .concat(n, " solid ;\n\t\t\t\t\t\t\t transform:rotate(")
                  .concat(i, "deg) rotateY(")
                  .concat(a ? 0 : 180, "deg) ;\n\t\t\t\t\t\t\t");
            return o;
          },
          leftBox: function () {
            var t = this.sizeAdapter,
              e = this.circleWidth,
              n = "\n\t\t\t\t\theight:"
                .concat(2 * e + t, "px ;\n\t\t\t\t\twidth:")
                .concat(
                  2 * e + t,
                  "px ;\n\t\t\t\t\tposition:absolute ;\n\t\t\t\t\ttop:-"
                )
                .concat(e, "px ;\n\t\t\t\t\tleft:-")
                .concat(
                  e,
                  "px ;\n\t\t\t\t\topacity:1 ;\n\t\t\t\t\tclip:rect(0 "
                )
                .concat((2 * e + t) / 2, "px ")
                .concat(2 * e + t, "px 0) ;\n\t\t\t\t");
            return n;
          },
          leftStyle: function () {
            this.top, this.clockwise;
            var t,
              e = this.sizeAdapter,
              n = this.circleColor,
              i = this.circleWidth,
              a = this.animation ? this.animationPercent : this.percent;
            return (
              (t = "\n\t\t\t\t\theight:"
                .concat(e, "px ;\n\t\t\t\t\twidth:")
                .concat(e, "px ;\n\t\t\t\t\tborder:")
                .concat(i, "px ")
                .concat(
                  n,
                  " solid ;\n\t\t\t\t\tborder-radius:50% ; \n\t\t\t\t\tz-index:0 ;\n\t\t\t\t\tposition:absolute ;\n\t\t\t\t\ttop:0px ;\n\t\t\t\t\tleft:0px ;\n\t\t\t\t\ttransform:rotate("
                )
                .concat(
                  a > 50 ? 180 : (a / 100) * 360,
                  "deg) ;\n\t\t\t\t\tclip:rect(0 "
                )
                .concat(2 * i + e, "px ")
                .concat(2 * i + e, "px ")
                .concat((2 * i + e) / 2, "px ) ;\n\t\t\t\t\t")),
              t
            );
          },
          rithStyle: function () {
            this.direction;
            var t = this.sizeAdapter,
              e = this.circleColor,
              n = this.defaultColor,
              i = this.circleWidth,
              a = this.animation ? this.animationPercent : this.percent,
              o = "\n\t\t\t\t\t\t\t height:"
                .concat(t, "px ;\n\t\t\t\t\t\t\t width:")
                .concat(
                  t,
                  "px ;\n\t\t\t\t\t\t\t position:absolute;\n\t\t\t\t\t\t\t border:"
                )
                .concat(i, "px ")
                .concat(
                  a > 50 ? e : n,
                  " solid ;\n\t\t\t\t\t\t\t border-radius:50% ;\n\t\t\t\t\t\t\t z-index:"
                )
                .concat(
                  a > 50 ? 0 : 100,
                  " ;\n\t\t\t\t\t\t\t position:absolute ;\n\t\t\t\t\t\t\t top:-"
                )
                .concat(i, "px;\n\t\t\t\t\t\t\t left:-")
                .concat(i, "px;\n\t\t\t\t\t\t\t transform:rotate(")
                .concat(
                  a > 50 ? (a / 100) * 360 : 0,
                  "deg) ;\n\t\t\t\t\t\t\t clip:rect(0 "
                )
                .concat(2 * i + t, "px ")
                .concat(2 * i + t, "px ")
                .concat((2 * i + t) / 2, "px ) ; \n\t\t\t\t\t\t\t");
            return o;
          },
        },
      };
      e.default = i;
    },
    "7abc": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("8611"),
        a = n("1501");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      n("c64d");
      var s = n("f0c5"),
        c = Object(s["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "25e4db7b",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    8611: function (t, e, n) {
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
            n = t._self._c || e;
          return n(
            "v-uni-view",
            [
              n(
                "v-uni-view",
                { style: t.cBox },
                [
                  t.slot || "normal" != t.status
                    ? t._e()
                    : n("v-uni-text", [t._v(t._s(t.animationPercent) + "%")]),
                  t.slot || "success" != t.status
                    ? t._e()
                    : n("v-uni-text", {
                        staticClass: "cuIcon-check",
                        staticStyle: {
                          color: "rgb(82,196,26)",
                          "font-size": "20px",
                        },
                      }),
                  t.slot || "exception" != t.status
                    ? t._e()
                    : n("v-uni-text", {
                        staticClass: "cuIcon-close",
                        staticStyle: {
                          color: "rgb(245,34,45)",
                          "font-size": "20px",
                        },
                      }),
                  t.slot
                    ? n(
                        "v-uni-view",
                        { style: t.slotStyle },
                        [t._t("content")],
                        2
                      )
                    : t._e(),
                  n(
                    "v-uni-view",
                    { style: t.faStyle },
                    [
                      n(
                        "v-uni-view",
                        { style: t.leftBox },
                        [n("v-uni-view", { style: t.leftStyle })],
                        1
                      ),
                      n("v-uni-view", { style: t.rithStyle }),
                    ],
                    1
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
    "93de": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("956f"),
        a = n.n(i);
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      e["default"] = a.a;
    },
    "956f": function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("99af"),
        n("d401"),
        n("d3b7"),
        n("25f0"),
        n("ac1f"),
        n("5319"),
        n("a9e3"),
        n("e9c4"),
        n("c975");
      var a = i(n("6972")),
        o = i(n("5cd9")),
        s = i(n("7abc")),
        c = null,
        r = { timeout: 15e3 },
        l = {
          components: { cCircle: s.default },
          data: function () {
            return {
              userdata: this.$store.state.user,
              project: this.$store.state.project,
              dev: {},
              usercount: null,
              order: {},
              devicelist: [],
              caldowntime: "",
              tipstr: "",
              pronumber: 0,
              prostatus: "normal",
              strokecolor: "rgb(16,142,233)",
              showprogressflag: !1,
              sendnum: 0,
              btnstatusobj: {
                btntext: "取消预约",
                appointmentdisableclick: !1,
              },
              getconsuminginterval: null,
              count_downinterval: null,
            };
          },
          computed: {
            cubarstyle: function () {
              return "height:"
                .concat(this.CustomBar, "px;padding-top:")
                .concat(this.StatusBar, "px;");
            },
            getorderviewstyle: function () {
              return "height:100%;height: 100vh;";
            },
            contentviewstyle: function () {
              return "height:calc(100% - "
                .concat(this.CustomBar, "px - ")
                .concat(uni.upx2px(90), "px );");
            },
            IsBathType: function () {
              var t = !0;
              return (
                a.default.isNullOrEmpty(this.order) ||
                  ("DeviceType" in this.order &&
                    0 != this.order.DeviceType &&
                    (t = !1)),
                t
              );
            },
          },
          onUnload: function () {
            this.clearallinterval();
          },
          watch: {},
          onLoad: function (t) {
            a.default.isNullOrEmpty(t.appointmentorder)
              ? this.getappointment()
              : this.handeltiptext(
                  JSON.parse(decodeURIComponent(t.appointmentorder))
                ),
              this.checkuserlossappointment();
          },
          filters: {
            capitalize: function (t) {
              return t ? ((t = t.toString()), t.substring(0, 3)) : "无名称";
            },
          },
          methods: {
            clearallinterval: function () {
              this.getconsuminginterval &&
                (clearInterval(this.getconsuminginterval),
                (this.getconsuminginterval = null)),
                this.count_downinterval &&
                  (clearInterval(this.count_downinterval),
                  (this.count_downinterval = null));
            },
            backevent: function () {
              return (
                !this.btnstatusobj.appointmentdisableclick &&
                (uni.navigateBack({ delta: 1 }), !0)
              );
            },
            getappointment: function () {
              var t = this;
              a.default.showloading("正在加载中"),
                a.default
                  .sendapppost(
                    t.project.server_addr +
                      a.default.API_PATH.getsucceedappappointment,
                    { querydevicelist: "False" }
                  )
                  .then(function (e) {
                    uni.hideLoading(), t.handeltiptext(e);
                  })
                  .catch(function (e) {
                    if ((uni.hideLoading(), "预约单不存在" == e))
                      return (
                        clearInterval(t.getconsuminginterval),
                        (t.getconsuminginterval = null),
                        uni.redirectTo({ url: "../consuming/consuming" })
                      );
                  });
            },
            refreshcountdown: function (t) {
              var e = this;
              (t = t.replace(/-/g, "/")),
                clearInterval(this.count_downinterval),
                (this.count_downinterval = null),
                this.count_down(t),
                (this.count_downinterval = setInterval(function () {
                  e.count_down(t);
                }, 1e3));
            },
            count_down: function (t) {
              var e = Date.parse(t) - Date.now();
              if (!(e >= 0))
                return this.clearallinterval(), uni.navigateBack({ delta: 1 });
              this.caldowntime = a.default.MillisecondToDate(e / 1e3);
            },
            cancelappointment: function (t) {
              var e = this;
              return a.default.showalert(
                "提示",
                "确定要取消预约吗?",
                null,
                function () {
                  e.controlprojessdisplay("start"),
                    (c = setInterval(e.intervalsetnumber, 200)),
                    a.default
                      .sendapppost(
                        e.project.server_addr +
                          a.default.API_PATH.cancelappointment,
                        { order_id: e.order.order_id },
                        r
                      )
                      .then(function (t) {
                        return (
                          clearInterval(c),
                          (c = null),
                          e.controlprojessdisplay("success"),
                          e.clearallinterval(),
                          uni.navigateBack({ delta: 1 })
                        );
                      })
                      .catch(function (t) {
                        clearInterval(c),
                          (c = null),
                          "网络错误,请检查网络" == t &&
                            "none" != e.$store.state.AppInfo.nettype &&
                            (t = "取消预约超时,请重试"),
                          e.controlprojessdisplay("error"),
                          a.default.showalert("提示", t);
                      });
                },
                !0
              );
            },
            controlprojessdisplay: function (t) {
              var e = this;
              switch (t) {
                case "start":
                  (this.pronumber = 0),
                    (this.prostatus = "normal"),
                    (this.showprogressflag = !0),
                    (this.strokecolor = "rgb(16,142,233)"),
                    (this.btnstatusobj.btntext = "请稍等..."),
                    (this.btnstatusobj.appointmentdisableclick = !0),
                    zl.system.onBackPress(function () {});
                  break;
                case "end":
                  (this.showprogressflag = !1),
                    (this.btnstatusobj.btntext = "取消预约"),
                    (this.btnstatusobj.appointmentdisableclick = !1),
                    zl.system.onBackPress(function () {});
                  break;
                case "success":
                  (this.pronumber = 100),
                    (this.prostatus = "success"),
                    (this.strokecolor = "rgb(82,196,26)"),
                    (this.btnstatusobj.appointmentdisableclick = !1),
                    zl.system.onBackPress(function () {}),
                    setTimeout(function () {
                      e.showprogressflag = !1;
                    }, 300);
                  break;
                case "error":
                  (this.pronumber = 100),
                    (this.prostatus = "exception"),
                    (this.strokecolor = "rgb(245,34,45)"),
                    (this.btnstatusobj.btntext = "取消预约"),
                    (this.btnstatusobj.appointmentdisableclick = !1),
                    zl.system.onBackPress(function () {}),
                    setTimeout(function () {
                      e.showprogressflag = !1;
                    }, 300);
                  break;
                default:
                  break;
              }
            },
            intervalsetnumber: function () {
              this.pronumber++,
                this.pronumber >= 100 &&
                  ((this.pronumber = 100), clearInterval(c), (c = null));
            },
            checkuserlossappointment: function () {
              var t = this.project.userappointmentcount;
              a.default.isNullOrEmpty(t) ||
                (0 != Number(t.timeout_count) &&
                  (a.default.isNullOrEmpty(t.timeout_count) ||
                    (this.usercount = t)));
            },
            refreshgetconsuming: function () {
              var t = this;
              this.getconsuminginterval &&
                (clearInterval(this.getconsuminginterval),
                (this.getconsuminginterval = null)),
                (this.getconsuminginterval = setInterval(function () {
                  t.getconsuming();
                }, 5e3));
            },
            getconsuming: function () {
              var t = this;
              a.default
                .sendapppost(
                  t.project.server_addr +
                    a.default.API_PATH.getStaffConsumeingCount,
                  {
                    net_type: o.default.GetAppointmentUseDevnetType("consume"),
                    consume_types: "bath",
                  }
                )
                .then(function (e) {
                  if ("0" != JSON.stringify(e))
                    return a.default.isNullOrEmpty(e) ||
                      "0" == JSON.stringify(e)
                      ? void 0
                      : (clearInterval(t.getconsuminginterval),
                        (t.getconsuminginterval = null),
                        uni.redirectTo({ url: "../consuming/consuming" }));
                })
                .catch(function (t) {});
            },
            gotoconsume: function () {
              var t = this;
              a.default.showloading("查询信息中..."),
                a.default
                  .sendapppost(
                    t.project.server_addr + a.default.API_PATH.getdevicebyid,
                    { id: t.order.deviceid }
                  )
                  .then(function (e) {
                    var n = JSON.stringify(e);
                    n.indexOf("%") > -1 && (n = n.replace(/%/g, "%25"));
                    var i = encodeURIComponent(n),
                      o = a.default.getConsumeTypeBydeviceType(
                        t.order.DeviceType
                      ),
                      s = "../consume/consume?act=appointment&dev="
                        .concat(i, "&consumetype=")
                        .concat(o);
                    uni.redirectTo({ url: s }), uni.hideLoading();
                  })
                  .catch(function (t) {
                    uni.hideLoading(), a.default.showalert("提示", t);
                  });
            },
            handeltiptext: function (t) {
              (this.order = t),
                (this.devicelist = t.devicelist),
                this.refreshcountdown(t.expritytime);
              var e =
                "1.预约成功后,请在过期时间内前往指定的浴室，在设备上输入你的App登录密码,即可开始消费使用;";
              switch (t.DeviceType) {
                case 3:
                  e =
                    "1.预约成功后,请在过期时间内前往指定的洗衣机，选择你需要的洗衣模式,即可开始消费使用;";
                  break;
                case 5:
                  e =
                    "1.预约成功后,请在过期时间内前往指定的吹风机，输入消费时长,即可开始消费使用;";
                  break;
                case 8:
                  e =
                    "1.预约成功后,请在过期时间内前往指定的洗鞋机，选择你需要的洗鞋模式,即可开始消费使用;";
                  break;
                case 9:
                  e =
                    "1.预约成功后,请在过期时间内前往指定的烘干机，选择温度模式及消费时长,即可开始消费使用;";
                  break;
                default:
                  break;
              }
              (this.tipstr = e), this.refreshgetconsuming();
            },
          },
        };
      e.default = l;
    },
    bb79: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("ddf5"),
        a = n("93de");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      n("2727");
      var s = n("f0c5"),
        c = Object(s["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "452f2306",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    c64d: function (t, e, n) {
      "use strict";
      var i = n("60622"),
        a = n.n(i);
      a.a;
    },
    ddf5: function (t, e, n) {
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
            n = t._self._c || e;
          return n(
            "v-uni-view",
            { staticStyle: { height: "100vh" } },
            [
              n("v-uni-image", {
                staticClass: "viewimgbg",
                attrs: {
                  src: "/pagesA/static/appointment_bg.jpg",
                  mode: "scaleToFill",
                },
              }),
              n(
                "cu-custom",
                {
                  attrs: { bgColor: "white", isBack: !0, isControlback: !0 },
                  on: {
                    backevent: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.backevent.apply(void 0, arguments);
                    },
                  },
                },
                [
                  n(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("预约结果")]
                  ),
                ],
                2
              ),
              n(
                "v-uni-view",
                { staticClass: "content-view", style: t.contentviewstyle },
                [
                  n(
                    "v-uni-view",
                    { staticClass: "cardview" },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "inlineflex-center imgcontainer" },
                        [
                          n("v-uni-text", {
                            staticClass: "iconfont iconsucceed",
                            staticStyle: {
                              "font-size": "120upx",
                              color: "#32b1fe",
                            },
                          }),
                        ],
                        1
                      ),
                      n(
                        "v-uni-view",
                        {
                          staticStyle: {
                            "text-align": "center",
                            "font-size": "50upx",
                            "line-height": "50upx",
                            color: "white",
                          },
                        },
                        [t._v("预约成功")]
                      ),
                      n(
                        "v-uni-view",
                        {
                          staticStyle: {
                            color: "white",
                            "margin-top": "20upx",
                          },
                        },
                        [t._v("请确保你的账户中余额充足")]
                      ),
                    ],
                    1
                  ),
                  null != t.order
                    ? n(
                        "v-uni-view",
                        {
                          staticClass: "cardview",
                          staticStyle: {
                            "margin-top": "20upx",
                            height: "auto",
                            "background-color": "white",
                            "border-radius": "20upx",
                          },
                        },
                        [
                          n(
                            "v-uni-view",
                            {
                              staticClass: "building-title",
                              staticStyle: {
                                color: "#32B1FE",
                                "font-size": "32upx",
                                padding: "30upx 0 20upx 0",
                              },
                            },
                            [
                              t._v(
                                t._s(t.order.buildingname) +
                                  " - " +
                                  t._s(t.order.floorname) +
                                  "F-" +
                                  t._s(t.order.roomname)
                              ),
                            ]
                          ),
                          n(
                            "v-uni-view",
                            { staticClass: "tip-title-container" },
                            [
                              n("v-uni-view", {
                                staticClass: "line",
                                staticStyle: {
                                  width: "140upx",
                                  "margin-left": "30upx",
                                },
                              }),
                              n(
                                "v-uni-view",
                                {
                                  staticStyle: {
                                    "font-size": "24upx",
                                    color: "#999999",
                                    "line-height": "40upx",
                                  },
                                },
                                [
                                  t._v("设备编号:" + t._s(t.order.deviceid)),
                                  n("br"),
                                  t._v("设备名称:" + t._s(t.order.devicename)),
                                ]
                              ),
                              n("v-uni-view", {
                                staticClass: "line",
                                staticStyle: { width: "140upx" },
                              }),
                            ],
                            1
                          ),
                          n(
                            "v-uni-view",
                            { staticClass: "time-view" },
                            [
                              n("tex", [t._v("剩余时间")]),
                              n(
                                "v-uni-text",
                                { staticStyle: { color: "#fe0d0d" } },
                                [t._v(t._s(t.caldowntime))]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  null != t.usercount
                    ? n(
                        "v-uni-view",
                        {
                          staticClass: "cardview",
                          staticStyle: { "font-size": "30upx", color: "white" },
                        },
                        [
                          t._v(
                            "每月失约" +
                              t._s(t.usercount.max_timeout_count) +
                              "次后将无法预约，已失约"
                          ),
                          n(
                            "v-uni-text",
                            { staticStyle: { "font-size": "40upx" } },
                            [t._v(t._s(t.usercount.timeout_count))]
                          ),
                          t._v("次"),
                        ],
                        1
                      )
                    : t._e(),
                  n(
                    "v-uni-view",
                    {
                      staticClass: "cardview",
                      staticStyle: { padding: "20upx" },
                    },
                    [
                      n(
                        "v-uni-button",
                        {
                          staticClass: "action-button",
                          staticStyle: { color: "#32B1FE" },
                          attrs: { type: "primary" },
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.gotoconsume.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v("前去消费")]
                      ),
                      n(
                        "v-uni-button",
                        {
                          staticClass: "action-button cancel-button",
                          attrs: {
                            type: "primary",
                            disabled: t.btnstatusobj.appointmentdisableclick,
                          },
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.cancelappointment.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v(t._s(t.btnstatusobj.btntext))]
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticStyle: { "margin-top": "20upx" } },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "tip-title-container" },
                        [
                          n("v-uni-view", {
                            staticClass: "line",
                            staticStyle: {
                              width: "170upx",
                              "background-color": "white",
                            },
                          }),
                          n(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "font-size": "30upx",
                                color: "white",
                              },
                            },
                            [t._v("预约使用说明")]
                          ),
                          n("v-uni-view", {
                            staticClass: "line",
                            staticStyle: {
                              width: "170upx",
                              "background-color": "white",
                            },
                          }),
                        ],
                        1
                      ),
                      n(
                        "v-uni-view",
                        {
                          staticStyle: {
                            color: "white",
                            padding: "20upx 40upx",
                            "line-height": "40upx",
                          },
                          attrs: { id: "tip-view" },
                        },
                        [
                          n(
                            "v-uni-view",
                            [
                              t._v(t._s(t.tipstr)),
                              n("v-uni-view", [
                                t._v(
                                  "2.若是启用动态密码，则只能输入动态码消费。"
                                ),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    {
                      staticClass: "cu-modal",
                      class: t.showprogressflag ? "show" : "",
                    },
                    [
                      n(
                        "v-uni-view",
                        {
                          staticClass: "cu-dialog",
                          staticStyle: { width: "85%" },
                        },
                        [
                          n(
                            "v-uni-view",
                            { staticClass: "padding-xl" },
                            [
                              n("cCircle", {
                                attrs: {
                                  size: 70,
                                  percent: t.pronumber,
                                  direction: 180,
                                  circleColor: t.strokecolor,
                                  status: t.prostatus,
                                },
                              }),
                              n(
                                "v-uni-view",
                                {
                                  staticStyle: {
                                    "padding-top": "30upx",
                                    "margin-bottom": "-20upx",
                                  },
                                },
                                [t._v("正在取消预约，请稍等...")]
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
                ],
                1
              ),
            ],
            1
          );
        },
        a = [];
    },
    fd30: function (t, e, n) {
      var i = n("5a2e");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("19e2fe2c", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
