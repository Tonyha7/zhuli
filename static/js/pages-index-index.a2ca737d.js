(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-index-index"],
  {
    "001f": function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("6556"),
        n = a("3630");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      a("3552");
      var o = a("f0c5"),
        s = Object(o["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "48260474",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "009d": function (t, e, a) {
      "use strict";
      (function (t) {
        a("7a82");
        var i = a("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = function (t, e) {
            return c.apply(this, arguments);
          }),
          a("3ca3"),
          a("ddb0"),
          a("14d9"),
          a("d3b7");
        var n = i(a("f07e")),
          r = i(a("c964")),
          o = i(a("1783")),
          s = i(a("6972"));
        function c() {
          return (
            (c = (0, r.default)(
              (0, n.default)().mark(function e(a, i) {
                var r, c, d;
                return (0, n.default)().wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (r = o.default.state.project.imglist),
                          s.default.isNullOrEmpty(r) && (r = {}),
                          (c = (0, n.default)().mark(function e(c) {
                            var l, d, f, h, p, g;
                            return (0, n.default)().wrap(function (e) {
                              while (1)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((l = a[c]),
                                      (d = l.image
                                        .split("/")
                                        [l.image.split("/").length - 1].split(
                                          "."
                                        )[0]),
                                      (f = r[d]),
                                      (h = {
                                        type: "image",
                                        img: l.image,
                                        title: l.title,
                                        url_path: l.detail,
                                      }),
                                      (p = !1),
                                      !f)
                                    ) {
                                      e.next = 9;
                                      break;
                                    }
                                    return (e.next = 8), u(f);
                                  case 8:
                                    p = e.sent;
                                  case 9:
                                    p
                                      ? (h.img = f)
                                      : ((g = function (t) {
                                          var e = t,
                                            a = o.default.state.project;
                                          s.default.isNullOrEmpty(a.imglist) &&
                                            (a.imglist = {}),
                                            (a.imglist[d] = e),
                                            o.default.commit(
                                              "SetProjectData",
                                              a
                                            );
                                        }),
                                        uni.downloadFile({
                                          url: l.image,
                                          success: function (t) {
                                            200 === t.statusCode &&
                                              g(t.tempFilePath);
                                          },
                                          fail: function (e) {
                                            t.log("下载失败------" + e);
                                          },
                                        })),
                                      i.swiperList.push(h);
                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })),
                          (d = 0);
                      case 4:
                        if (!(d < a.length)) {
                          e.next = 9;
                          break;
                        }
                        return e.delegateYield(c(d), "t0", 6);
                      case 6:
                        d++, (e.next = 4);
                        break;
                      case 9:
                        (i.swiperCurrent = 0),
                          setTimeout(function () {
                            l(a);
                          }, 5e3);
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            c.apply(this, arguments)
          );
        }
        function l(e) {
          var a = o.default.state.project.imglist;
          for (var i in (s.default.isNullOrEmpty(a) && (a = {}), a)) {
            for (var n = !1, r = 0; r < e.length; r++) {
              var c = e[r].image
                .split("/")
                [e[r].image.split("/").length - 1].split(".")[0];
              if (i == c) {
                n = !0;
                break;
              }
            }
            if (!n) {
              var l = o.default.state.project;
              s.default.isNullOrEmpty(l.imglist) && (l.imglist = {});
              var u = l.imglist[i];
              delete l.imglist[i],
                o.default.commit("SetProjectData", l),
                t.log("--------开始删除----------"),
                uni.removeSavedFile({ filePath: u, complete: function (t) {} });
            }
          }
        }
        function u(t) {
          return d.apply(this, arguments);
        }
        function d() {
          return (
            (d = (0, r.default)(
              (0, n.default)().mark(function t(e) {
                return (0, n.default)().wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          new Promise(function (t, a) {
                            uni.getFileInfo({
                              filePath: e,
                              success: function (e) {
                                t(!0);
                              },
                              fail: function (e) {
                                t(!1);
                              },
                            });
                          })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            d.apply(this, arguments)
          );
        }
      }).call(this, a("5a52")["default"]);
    },
    "02a7": function (t, e, a) {
      var i = a("c812");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("174fd553", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "04a4": function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("ec02"),
        n = a("8121");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      a("6d7a");
      var o = a("f0c5"),
        s = Object(o["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "57d1e4de",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "0637": function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return n;
      }),
        a.d(e, "c", function () {
          return r;
        }),
        a.d(e, "a", function () {
          return i;
        });
      var i = { tkiQrcode: a("17f9").default },
        n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-uni-view",
            {
              staticClass: "cu-modal",
              class: [{ show: t.UserCodeModal.showflag }],
              on: {
                touchmove: function (e) {
                  e.stopPropagation(),
                    e.preventDefault(),
                    (arguments[0] = e = t.$handleEvent(e)),
                    t.moveStop.apply(void 0, arguments);
                },
              },
            },
            [
              a(
                "v-uni-view",
                { staticClass: "cu-dialog user-code-moal" },
                [
                  a(
                    "v-uni-view",
                    {
                      staticClass: "desc-container",
                      staticStyle: { height: "100%", "margin-top": "50%" },
                    },
                    [
                      a("v-uni-view", { staticClass: "title" }, [
                        t._v(t._s(t.UserCodeModal.title)),
                      ]),
                      a(
                        "v-uni-view",
                        { staticStyle: { "padding-top": "40upx" } },
                        [
                          a("tki-qrcode", {
                            ref: "qrcode",
                            staticStyle: { display: "inline-block" },
                            attrs: {
                              val: t.UserCodeModal.content,
                              size: 400,
                              unit: "upx",
                              background: "#ffffff",
                              foreground: "#000000",
                              pdground: "#000000",
                              lv: 0,
                              onval: !0,
                              loadMake: !0,
                              usingComponents: !0,
                              showLoading: !0,
                            },
                          }),
                        ],
                        1
                      ),
                      a(
                        "v-uni-view",
                        { staticClass: "desc" },
                        [
                          t._v("每60s自动"),
                          a(
                            "v-uni-text",
                            {
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.RefreshUserCode.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v("刷新")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-uni-view",
                    {
                      staticClass: "closemodal-icon",
                      staticStyle: { top: "calc(70% + 10upx)" },
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.clickclose.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      a("v-uni-text", {
                        staticClass: "cuIcon-close",
                        staticStyle: { "font-size": "40upx" },
                      }),
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
        r = [];
    },
    "0aa8": function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("0637"),
        n = a("8949");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      a("0cf8");
      var o = a("f0c5"),
        s = Object(o["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "063b453e",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "0cf8": function (t, e, a) {
      "use strict";
      var i = a("f1e2"),
        n = a.n(i);
      n.a;
    },
    "0de3e": function (t, e, a) {
      "use strict";
      a("7a82");
      var i = a("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          e.RemovePendingOrder =
          e.QueryPendingOrder =
          e.GetStaffLastConsumeRecord =
          e.GetStaffConsumeing =
          e.CancelImmediatePaymentOrder =
            void 0),
        a("99af");
      i(a("6972"));
      var n = i(a("1783")),
        r = a("f55c"),
        o = a("5aba"),
        s = function (t) {
          return (0, o.sendapppost)(
            ""
              .concat(n.default.state.project.server_addr)
              .concat(r.API_PATH.cancelimmediatepaymentorder),
            { order_id: t }
          );
        };
      e.CancelImmediatePaymentOrder = s;
      var c = function () {
        return (0, o.sendapppost)(
          ""
            .concat(n.default.state.project.server_addr)
            .concat(r.API_PATH.getStaffLastConsumeRecord),
          { staff_id: n.default.state.user.detailinfo.id }
        );
      };
      e.GetStaffLastConsumeRecord = c;
      var l = function (t) {
        return (0, o.sendapppost)(
          ""
            .concat(n.default.state.project.server_addr)
            .concat(r.API_PATH.getStaffConsumeing),
          { net_type: t }
        );
      };
      e.GetStaffConsumeing = l;
      var u = function () {
        return (0, o.sendapppost)(
          ""
            .concat(n.default.state.project.server_addr)
            .concat(r.API_PATH.QueryPendingOrder),
          {}
        );
      };
      e.QueryPendingOrder = u;
      var d = function (t) {
        return (0, o.sendapppost)(
          ""
            .concat(n.default.state.project.server_addr)
            .concat(r.API_PATH.RemovePendingOrder),
          { order_id: t }
        );
      };
      e.RemovePendingOrder = d;
      var f = {
        GetStaffConsumeing: l,
        RemovePendingOrder: d,
        CancelImmediatePaymentOrder: s,
        QueryPendingOrder: u,
        GetStaffLastConsumeRecord: c,
      };
      e.default = f;
    },
    1306: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("59c1"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = n.a;
    },
    1391: function (t, e, a) {
      "use strict";
      (function (t) {
        a("7a82");
        var i = a("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          a("d401"),
          a("d3b7"),
          a("25f0"),
          a("fb6a");
        var n = a("c097"),
          r = i(a("6972")),
          o = i(a("17f9")),
          s = {
            name: "PaymentCode",
            components: { tkiQrcode: o.default },
            data: function () {
              return {
                UserCodeModal: {
                  showflag: !1,
                  title: "我的二维码",
                  content: "",
                  coveringCode: 0,
                },
                ScreenBrightness: "",
                earlierTime: "",
                times: null,
              };
            },
            computed: {},
            watch: {
              "UserCodeModal.showflag": function (t, e) {
                var a = this;
                t
                  ? ((this.earlierTime = (0, n.formatCurrentTime)(new Date())),
                    (this.times = setInterval(function () {
                      a.refreshPayCode(!0);
                    }, 1e3)))
                  : clearInterval(this.times);
              },
            },
            created: function () {
              this.ScreenBrightness = zl.system.getScreenBrightness();
            },
            methods: {
              moveStop: function () {},
              getZhuliPayCode: function (t, e, a, i, r) {
                var o = (0, n.autoFillZero)(6, i),
                  s = (0, n.autoFillZero)(2, r),
                  c = a.toString().length,
                  l = (0, n.hashCode)(
                    i.toString() +
                      a.toString() +
                      e +
                      t.toString() +
                      s.toString()
                  )
                    .toString()
                    .slice(-4),
                  u = (0, n.autoFillZero)(4, l),
                  d = "27" + o + c + a.toString() + s + u;
                return d;
              },
              refreshPayCode: function (e) {
                if (this.UserCodeModal.showflag) {
                  var a = new Date(),
                    i = (0, n.formatCurrentTime)(a);
                  if (this.earlierTime == i) {
                    if (e) return;
                    this.UserCodeModal.coveringCode += 1;
                  } else this.UserCodeModal.coveringCode = 0;
                  this.earlierTime = i;
                  var r = this.$store.state.user.detailinfo.cardno,
                    o = this.$store.state.project.server_appid,
                    s = this.$store.state.user.detailinfo.identity_code;
                  t.log("------accesstoken---------" + s);
                  var c = this.getZhuliPayCode(
                    i,
                    s,
                    r,
                    o,
                    this.UserCodeModal.coveringCode
                  );
                  this.UserCodeModal.content = c.toString();
                }
              },
              RefreshUserCode: function () {
                var t = r.default.checklogin();
                t &&
                  (zl.system.setScreenBrightness({ value: 1 }),
                  (this.UserCodeModal.showflag = !0),
                  this.refreshPayCode());
              },
              clickclose: function () {
                var t = 0.3;
                r.default.isNullOrEmpty(this.ScreenBrightness) ||
                  (t = this.ScreenBrightness),
                  zl.system.setScreenBrightness({ value: t }),
                  (this.UserCodeModal.showflag = !1);
              },
            },
          };
        e.default = s;
      }).call(this, a("5a52")["default"]);
    },
    1495: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("bf87"),
        n = a("9143");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      a("b1f2");
      var o = a("f0c5"),
        s = Object(o["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "2f824018",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    1697: function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          ".viewcontainer[data-v-3ffd25a1]{\n\t/* height: calc(100% - 130upx) !important; */\n\t/* height: calc(90%) !important; */}.store-page[data-v-3ffd25a1]{width:100vw;height:100%;overflow-x:hidden;overflow-y:auto}.top[data-v-3ffd25a1]{\n\t/* height: 550upx; */position:relative;background-color:#fff}.userimgbg[data-v-3ffd25a1]{position:absolute;top:0;left:0;width:100%;height:100%\n\t/* height: 540upx; */}.item1[data-v-3ffd25a1]{display:flex;align-items:center;padding-top:%?40?%;position:relative;display:flex;align-items:center;flex-direction:row;flex:1;justify-content:flex-start}.item1 .headportrait[data-v-3ffd25a1]{width:%?140?%;border-radius:50%;height:%?140?%;overflow:hidden;margin:%?60?% %?0?% %?0?% %?60?%}.item1 .headportrait uni-image[data-v-3ffd25a1]{border-radius:50%}.item1 .projectinfo[data-v-3ffd25a1]{margin-top:%?50?%;padding:%?30?%;max-width:%?500?%}.item1 .top-icon[data-v-3ffd25a1]{position:absolute;right:%?50?%;\n}.item2[data-v-3ffd25a1]{position:relative;display:flex;justify-content:center}.info-item[data-v-3ffd25a1]{display:inline-block;text-align:center;margin:%?45?% %?0?%;width:45%}.username[data-v-3ffd25a1]{font-size:%?35?%;color:#fff;word-wrap:break-word}.projectname[data-v-3ffd25a1]{padding:%?10?% %?20?% %?4?% %?4?%;border-radius:%?100?%;margin-top:%?10?%;display:inline-block;font-size:%?20?%;height:%?45?%;line-height:1.5;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;background-color:#fff06f}.insidle-div .grid-img[data-v-3ffd25a1]{width:%?60?%;height:%?60?%}.insidle-div .action-title[data-v-3ffd25a1]{margin-top:%?20?%}.border-bottom[data-v-3ffd25a1]{border-bottom:1px solid #eaeaea}.url-list[data-v-3ffd25a1]{overflow-y:scroll!important;-webkit-overflow-scrolling:auto}.url-item[data-v-3ffd25a1]{background-color:#fff;height:%?85?%;line-height:%?85?%;display:flex;align-items:center;flex-direction:row;flex:1;justify-content:space-between}.url-item uni-image[data-v-3ffd25a1]{margin:%?20?% %?20?%;width:%?50?%;height:%?50?%}.url-item .title[data-v-3ffd25a1]{width:100%}.url-item .cuicon[data-v-3ffd25a1]{font-size:%?30?%;margin:%?0?% %?30?%;color:#ccc}.abouticon[data-v-3ffd25a1]{width:%?58?%!important}.project-title-icon[data-v-3ffd25a1]{width:%?20?%;height:%?20?%;margin:0 %?10?%;position:relative;top:%?2?%}.project-text[data-v-3ffd25a1]{background-color:#fff06f;white-space:nowrap}\n\n\n\n",
          "",
        ]),
        (t.exports = e);
    },
    "17f9": function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("9adb"),
        n = a("3c51");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      a("b56c");
      var o = a("f0c5"),
        s = Object(o["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "32aa0478",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "1a1c": function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("bd82"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = n.a;
    },
    "1faf": function (t, e, a) {
      "use strict";
      a("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.spaceCode = void 0);
      e.spaceCode = {
        homeFeeds: "27_2023110722700069535",
        homePreferredStyle: "50_2023110725000069536",
        consumePreferredStyle: "50_2023111625000070819",
        rechargePicture: "ad_tiny_2021001155694496_202311162200070856",
        rechargeFullScreen: "50_2023110725000069539",
        myPagePicture: "ad_tiny_2021001155694496_202311162200070838",
        consumeBillPicture: "ad_tiny_2021001155694496_202311152200070696",
        consumeendFeeds: "27_2023111622700070859",
        consumeBtn: "50_2023112225000071293",
        consumeCheckBox: "50_2023112225000071298",
        consumeFeeds: "27_2023112222700071301",
        myPageFeeds: "27_2023112222700071328",
        consumeEndToast: "50_2023112725000071965",
        rechargeEndToast: "50_2023112725000071994",
        rechargeConfirmFeeds: "27_2023112722700072037",
        commonEquipmentFeeds: "27_2023112722700072038",
        consumeStatusFeeds: "27_2023112922700072343",
        moreProgressFeeds: "27_2023112922700072438",
        consumeEndBtn: "50_2023120725000073705",
        consumeEndCheckBox: "50_2023120725000073716",
      };
    },
    2343: function (t, e, a) {
      "use strict";
      a("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        a("a9e3");
      var i = {
        name: "t-refresh",
        props: {
          height: { type: String, default: "100vh" },
          topheight: { type: Number, default: 0 },
          tPadding: { type: [String || Number], default: "0" },
          openLoadMore: { type: Boolean, default: !0 },
          openRefresh: { type: Boolean, default: !0 },
          loadingType: { type: Number, default: 0 },
          loadingText: {
            type: Array,
            default: function () {
              return ["上拉或点击加载更多", "已加载全部数据", "加载中", ""];
            },
          },
        },
        data: function () {
          return {
            icon_class: "",
            top: -90,
            touchstart_num: 0,
            touchmove_num: 0,
            move_number: 0,
            rotate_number: 0,
            timer: null,
            is_refresh: !1,
            move_timer: null,
          };
        },
        methods: {
          scroll: function (t) {
            t.detail.scrollTop > 20
              ? (this.is_refresh = !0)
              : (this.is_refresh = !1);
          },
          loadMore: function (t) {
            this.openLoadMore && this.$emit("bottomEvent");
          },
          touchstart: function (t) {
            this.touchstart_num = t.touches[0].clientY;
          },
          touchmove: function (t) {
            !this.is_refresh &&
              t.touches.length <= 1 &&
              this.openRefresh &&
              ((this.move_number = t.touches[0].clientY - this.touchstart_num),
              (this.rotate_number = 2 * this.move_number),
              this.move_number < uni.upx2px(200) &&
                (this.top = this.move_number));
          },
          touchend: function (t) {
            var e = this;
            this.is_refresh ||
              t.touches.length >= 1 ||
              !this.openRefresh ||
              (this.move_number > uni.upx2px(200)
                ? ((this.icon_class = "refresh-icon-active"),
                  (this.top = 10 + this.topheight),
                  (this.is_refresh = !0),
                  this.$emit("refresh"),
                  (this.move_timer = setInterval(function () {
                    e.rotate_number += 8;
                  }, 10)))
                : (this.move_timer = setInterval(function () {
                    (e.top -= 8), e.top <= -90 && clearInterval(e.move_timer);
                  }, 10)));
          },
          endRefresh: function () {
            (this.top = -90),
              (this.icon_class = ""),
              (this.move_number = this.rotate_number = 0),
              (this.is_refresh = !1),
              clearInterval(this.move_timer);
          },
        },
      };
      e.default = i;
    },
    "254f": function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          ".home-view-container[data-v-720983a0]{height:100%;background-color:#fff}.index-titlebar[data-v-720983a0]{display:flex;align-items:center;justify-content:space-between;position:fixed;width:100%;background-image:linear-gradient(90deg,#32b1fe,#338af9);z-index:3;position:fixed;top:--window-top;left:0}.mescroll-body-container[data-v-720983a0]{-webkit-overflow-scrolling:touch}.search-form[data-v-720983a0]{background-color:initial!important;color:#fff!important;font-size:%?30?%!important;position:relative;\nmax-width:calc(100% - %?380?%);\n\n\nmargin-left:%?20?%;height:%?40?%;line-height:%?40?%}.head-image-container[data-v-720983a0]{\n\n\n\nborder:none!important;display:flex;align-items:center;\nmargin:0 %?20?% 0 0!important\n}.head-image-container>.image[data-v-720983a0]{width:%?40?%;height:%?40?%;margin:0 %?30?%}.head-image-container>.notice-img[data-v-720983a0]{-webkit-animation:shake-data-v-720983a0 2.5s ease infinite;animation:shake-data-v-720983a0 2.5s ease infinite}.head-image-container>.code-image[data-v-720983a0]{display:flex;align-items:center;justify-content:center}.head-image-container>.code-image uni-image[data-v-720983a0]{width:%?40?%;height:%?40?%;margin-right:%?2?%}.head-image-container>.image uni-image[data-v-720983a0]{width:100%;height:100%}\n\n\t/* .notice-img::after {\n\tcontent: '';\n\tposition: absolute;\n\theight: 5px;\n\twidth: 5px;\n\tborder-radius: 100%;\n\tright: 0;\n\ttop: 0;\n\tbackground-color: #f83c5f;\n} */@-webkit-keyframes shake-data-v-720983a0{0%,\n\t\t50%,\n\t\t100%{-webkit-transform:rotate(0);transform:rotate(0)}5%,\n\t\t10%,\n\t\t15%,\n\t\t20%,\n\t\t25%,\n\t\t30%,\n\t\t35%,\n\t\t40%{-webkit-transform:rotate(6deg);transform:rotate(6deg)}45%{-webkit-transform:rotate(4deg);transform:rotate(4deg)}7.5%,\n\t\t12.5%,\n\t\t17.5%,\n\t\t22.5%,\n\t\t27.5%,\n\t\t32.5%,\n\t\t37.5%,\n\t\t42.5%{-webkit-transform:rotate(-6deg);transform:rotate(-6deg)}47.5%{-webkit-transform:rotate(-2deg);transform:rotate(-2deg)}}@keyframes shake-data-v-720983a0{0%,\n\t\t50%,\n\t\t100%{-webkit-transform:rotate(0);transform:rotate(0)}5%,\n\t\t10%,\n\t\t15%,\n\t\t20%,\n\t\t25%,\n\t\t30%,\n\t\t35%,\n\t\t40%{-webkit-transform:rotate(6deg);transform:rotate(6deg)}45%{-webkit-transform:rotate(4deg);transform:rotate(4deg)}7.5%,\n\t\t12.5%,\n\t\t17.5%,\n\t\t22.5%,\n\t\t27.5%,\n\t\t32.5%,\n\t\t37.5%,\n\t\t42.5%{-webkit-transform:rotate(-6deg);transform:rotate(-6deg)}47.5%{-webkit-transform:rotate(-2deg);transform:rotate(-2deg)}}.projectbox[data-v-720983a0]{width:100%;height:100%;text-align:left;overflow:hidden;position:relative;white-space:nowrap;font-size:%?34?%}.text-ellipsis[data-v-720983a0]{width:100%;display:inline-block;overflow:hidden;text-overflow:ellipsis}.projecttext[data-v-720983a0]{padding:0 %?10?%;text-align:center;font-size:%?28?%;\n\t\t/* display: inline-block; */height:100%;white-space:nowrap}.userinfo-view[data-v-720983a0]{height:%?140?%;margin:0 %?20?%;border-radius:15px;background-color:#fff;box-shadow:0 3px 10px 1px #e9e8e8;display:flex;align-items:center;justify-content:center;position:relative;bottom:%?20?%;z-index:1}.info-type[data-v-720983a0]{width:33%;display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;-webkit-box-orient:vertical}.info-type[data-v-720983a0]{width:100%;text-align:center}.info-type[data-v-720983a0]:not(:last-of-type){border-right:1px solid #eee}.info-type-value[data-v-720983a0]{padding-top:%?20?%}.menu-grid-img[data-v-720983a0]{width:50px;height:50px}.action-title[data-v-720983a0]{padding-top:%?10?%}.action-area[data-v-720983a0]{height:%?200?%;text-align:center;display:flex;align-items:center;justify-content:center;background-color:#fff;margin-top:%?10?%}.item-area[data-v-720983a0]{width:45%;height:80%;margin:5px;display:flex;align-items:center;border-radius:15px;position:relative;box-shadow:0 3px 1px 1px #e9e8e8}.item-area-0[data-v-720983a0]{background-image:linear-gradient(90deg,#f9b985,#ff6e7e)}.item-area-1[data-v-720983a0]{background-image:linear-gradient(90deg,#a7c6fe,#a97dff)}.area-title[data-v-720983a0]{color:#fff;padding:%?20?%;text-align:left;margin-left:%?30?%}.area-title-desc[data-v-720983a0]{display:inline-block;margin-top:5px}.area-img[data-v-720983a0]{height:%?100?%;width:%?100?%;position:absolute;right:%?20?%;top:%?20?%}.device-area[data-v-720983a0]{\n\t\t/* margin-top: 10upx; */padding-bottom:%?20?%}.device-laset-title[data-v-720983a0]{display:flex;justify-content:space-between;padding:%?20?% %?20?% %?10?% %?30?%}.device-laset-title span[data-v-720983a0]{font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#333}.dev-img[data-v-720983a0]{width:%?80?%;height:%?80?%;margin:%?10?%}.ad-area[data-v-720983a0]{background-color:#fff;margin:%?20?% %?20?% 0 %?20?%}.flex-sub[data-v-720983a0]{position:relative;width:%?154?%}.flex-sub1[data-v-720983a0]{position:relative;width:%?144?%}.repair-dialog[data-v-720983a0]{width:80%;height:41%;border-radius:%?20?%;background-color:#fff}.consuming-status-view[data-v-720983a0]{background-color:#e74026;color:#fff;display:inline-block;font-size:%?20?%;position:absolute;padding:%?6?%;border-radius:%?20?%;width:%?75?%;right:%?-30?%}.swiper-container[data-v-720983a0]{position:relative}.swiper-container .dots[data-v-720983a0]{position:absolute;left:0;right:0;bottom:%?30?%;display:flex;justify-content:center}.swiper-container .dots .dot[data-v-720983a0]{margin:0 %?8?%;width:%?14?%;height:%?14?%;background:#ccc;border-radius:%?8?%;transition:all .6s}.swiper-container .dots .dot.dotactive[data-v-720983a0]{width:%?24?%;background:#32b1fe}.ad-view[data-v-720983a0]{width:100%;height:100%}.z-card-moal[data-v-720983a0]{width:80%;height:45%;border-radius:%?20?%;background-color:#fff}.desc-container>.title[data-v-720983a0]{margin:%?50?% 0;height:%?38?%;font-size:%?40?%;font-family:PingFang SC;font-weight:700;color:#333}.desc-container>.content[data-v-720983a0]{height:calc(100% - %?38?% - %?50?%);font-size:%?32?%;line-height:%?50?%;font-family:PingFang SC;font-weight:500;color:#999aa5;margin:0 %?20?%;width:calc(100% - %?40?%)\n\t\t/* word-break: break-all; */\n\t\t/* text-overflow: ellipsis; */\n\t\t/* display: -webkit-box; */\n\t\t/* -webkit-box-orient: vertical; */\n\t\t/* -webkit-line-clamp: 3; */\n\t\t/* overflow: hidden; */}.z-card-btncontainer[data-v-720983a0]{width:calc(100% - %?80?%);display:flex;align-items:flex-end;justify-content:space-between;margin:%?20?% %?40?% 0 %?40?%;height:calc(15% - %?20?%)}.z-card-btncontainer>.confirm-btn[data-v-720983a0]{font-size:%?30?%;line-height:%?70?%;width:%?240?%;height:%?70?%;font-size:%?30?%;line-height:%?70?%;width:%?240?%;height:%?70?%}.z-card-btncontainer>.disable-btn[data-v-720983a0]{border:1px solid #cfd2dc;background-image:linear-gradient(90deg,#fff,#fff)!important;color:#8990a5!important}.user-code-moal[data-v-720983a0]{width:100%;height:100%;border-radius:%?20?%;background-color:#fff}.get_more_device[data-v-720983a0]{display:flex;align-items:center;margin:%?15?% 0;font-size:%?32?%;color:#333;text-align:center}.get_more_device uni-image[data-v-720983a0]{width:%?34?%;height:%?34?%;-webkit-transform:rotate(180deg);transform:rotate(180deg)}\n\n\t/* 常用设备 */.dev-list[data-v-720983a0]{display:flex;padding:0 0 0 %?20?%}",
          "",
        ]),
        (t.exports = e);
    },
    "2ca9": function (t, e, a) {
      "use strict";
      a("7a82");
      var i = a("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = i(a("0122"));
      a("14d9"), a("d9e2"), a("d401"), a("a9e3"), a("cb29"), a("e9c4");
      var r = {};
      (function () {
        function t(t) {
          var e, a, i;
          return t < 128
            ? [t]
            : t < 2048
            ? ((e = 192 + (t >> 6)), (a = 128 + (63 & t)), [e, a])
            : ((e = 224 + (t >> 12)),
              (a = 128 + ((t >> 6) & 63)),
              (i = 128 + (63 & t)),
              [e, a, i]);
        }
        function e(e, a) {
          (this.typeNumber = -1),
            (this.errorCorrectLevel = a),
            (this.modules = null),
            (this.moduleCount = 0),
            (this.dataCache = null),
            (this.rsBlocks = null),
            (this.totalDataCount = -1),
            (this.data = e),
            (this.utf8bytes = (function (e) {
              for (var a = [], i = 0; i < e.length; i++)
                for (
                  var n = e.charCodeAt(i), r = t(n), o = 0;
                  o < r.length;
                  o++
                )
                  a.push(r[o]);
              return a;
            })(e)),
            this.make();
        }
        (e.prototype = {
          constructor: e,
          getModuleCount: function () {
            return this.moduleCount;
          },
          make: function () {
            this.getRightType(),
              (this.dataCache = this.createData()),
              this.createQrcode();
          },
          makeImpl: function (t) {
            (this.moduleCount = 4 * this.typeNumber + 17),
              (this.modules = new Array(this.moduleCount));
            for (var e = 0; e < this.moduleCount; e++)
              this.modules[e] = new Array(this.moduleCount);
            this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(!0, t),
              this.typeNumber >= 7 && this.setupTypeNumber(!0),
              this.mapData(this.dataCache, t);
          },
          setupPositionProbePattern: function (t, e) {
            for (var a = -1; a <= 7; a++)
              if (!(t + a <= -1 || this.moduleCount <= t + a))
                for (var i = -1; i <= 7; i++)
                  e + i <= -1 ||
                    this.moduleCount <= e + i ||
                    (this.modules[t + a][e + i] =
                      (0 <= a && a <= 6 && (0 == i || 6 == i)) ||
                      (0 <= i && i <= 6 && (0 == a || 6 == a)) ||
                      (2 <= a && a <= 4 && 2 <= i && i <= 4));
          },
          createQrcode: function () {
            for (var t = 0, e = 0, a = null, i = 0; i < 8; i++) {
              this.makeImpl(i);
              var n = o.getLostPoint(this);
              (0 == i || t > n) && ((t = n), (e = i), (a = this.modules));
            }
            (this.modules = a),
              this.setupTypeInfo(!1, e),
              this.typeNumber >= 7 && this.setupTypeNumber(!1);
          },
          setupTimingPattern: function () {
            for (var t = 8; t < this.moduleCount - 8; t++)
              null == this.modules[t][6] &&
                ((this.modules[t][6] = t % 2 == 0),
                null == this.modules[6][t] &&
                  (this.modules[6][t] = t % 2 == 0));
          },
          setupPositionAdjustPattern: function () {
            for (
              var t = o.getPatternPosition(this.typeNumber), e = 0;
              e < t.length;
              e++
            )
              for (var a = 0; a < t.length; a++) {
                var i = t[e],
                  n = t[a];
                if (null == this.modules[i][n])
                  for (var r = -2; r <= 2; r++)
                    for (var s = -2; s <= 2; s++)
                      this.modules[i + r][n + s] =
                        -2 == r ||
                        2 == r ||
                        -2 == s ||
                        2 == s ||
                        (0 == r && 0 == s);
              }
          },
          setupTypeNumber: function (t) {
            for (
              var e = o.getBCHTypeNumber(this.typeNumber), a = 0;
              a < 18;
              a++
            ) {
              var i = !t && 1 == ((e >> a) & 1);
              (this.modules[Math.floor(a / 3)][
                (a % 3) + this.moduleCount - 8 - 3
              ] = i),
                (this.modules[(a % 3) + this.moduleCount - 8 - 3][
                  Math.floor(a / 3)
                ] = i);
            }
          },
          setupTypeInfo: function (t, e) {
            for (
              var i = (a[this.errorCorrectLevel] << 3) | e,
                n = o.getBCHTypeInfo(i),
                r = 0;
              r < 15;
              r++
            ) {
              var s = !t && 1 == ((n >> r) & 1);
              r < 6
                ? (this.modules[r][8] = s)
                : r < 8
                ? (this.modules[r + 1][8] = s)
                : (this.modules[this.moduleCount - 15 + r][8] = s);
              s = !t && 1 == ((n >> r) & 1);
              r < 8
                ? (this.modules[8][this.moduleCount - r - 1] = s)
                : r < 9
                ? (this.modules[8][15 - r - 1 + 1] = s)
                : (this.modules[8][15 - r - 1] = s);
            }
            this.modules[this.moduleCount - 8][8] = !t;
          },
          createData: function () {
            var t = new d(),
              a = this.typeNumber > 9 ? 16 : 8;
            t.put(4, 4), t.put(this.utf8bytes.length, a);
            for (var i = 0, n = this.utf8bytes.length; i < n; i++)
              t.put(this.utf8bytes[i], 8);
            t.length + 4 <= 8 * this.totalDataCount && t.put(0, 4);
            while (t.length % 8 != 0) t.putBit(!1);
            while (1) {
              if (t.length >= 8 * this.totalDataCount) break;
              if ((t.put(e.PAD0, 8), t.length >= 8 * this.totalDataCount))
                break;
              t.put(e.PAD1, 8);
            }
            return this.createBytes(t);
          },
          createBytes: function (t) {
            for (
              var e = 0,
                a = 0,
                i = 0,
                n = this.rsBlock.length / 3,
                r = new Array(),
                s = 0;
              s < n;
              s++
            )
              for (
                var c = this.rsBlock[3 * s + 0],
                  u = this.rsBlock[3 * s + 1],
                  d = this.rsBlock[3 * s + 2],
                  f = 0;
                f < c;
                f++
              )
                r.push([d, u]);
            for (
              var h = new Array(r.length), p = new Array(r.length), g = 0;
              g < r.length;
              g++
            ) {
              var m = r[g][0],
                v = r[g][1] - m;
              (a = Math.max(a, m)), (i = Math.max(i, v)), (h[g] = new Array(m));
              for (s = 0; s < h[g].length; s++) h[g][s] = 255 & t.buffer[s + e];
              e += m;
              var b = o.getErrorCorrectPolynomial(v),
                w = new l(h[g], b.getLength() - 1),
                y = w.mod(b);
              p[g] = new Array(b.getLength() - 1);
              for (s = 0; s < p[g].length; s++) {
                var x = s + y.getLength() - p[g].length;
                p[g][s] = x >= 0 ? y.get(x) : 0;
              }
            }
            var C = new Array(this.totalDataCount),
              _ = 0;
            for (s = 0; s < a; s++)
              for (g = 0; g < r.length; g++)
                s < h[g].length && (C[_++] = h[g][s]);
            for (s = 0; s < i; s++)
              for (g = 0; g < r.length; g++)
                s < p[g].length && (C[_++] = p[g][s]);
            return C;
          },
          mapData: function (t, e) {
            for (
              var a = -1,
                i = this.moduleCount - 1,
                n = 7,
                r = 0,
                s = this.moduleCount - 1;
              s > 0;
              s -= 2
            ) {
              6 == s && s--;
              while (1) {
                for (var c = 0; c < 2; c++)
                  if (null == this.modules[i][s - c]) {
                    var l = !1;
                    r < t.length && (l = 1 == ((t[r] >>> n) & 1));
                    var u = o.getMask(e, i, s - c);
                    u && (l = !l),
                      (this.modules[i][s - c] = l),
                      n--,
                      -1 == n && (r++, (n = 7));
                  }
                if (((i += a), i < 0 || this.moduleCount <= i)) {
                  (i -= a), (a = -a);
                  break;
                }
              }
            }
          },
        }),
          (e.PAD0 = 236),
          (e.PAD1 = 17);
        for (
          var a = [1, 0, 3, 2],
            i = {
              PATTERN000: 0,
              PATTERN001: 1,
              PATTERN010: 2,
              PATTERN011: 3,
              PATTERN100: 4,
              PATTERN101: 5,
              PATTERN110: 6,
              PATTERN111: 7,
            },
            o = {
              PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170],
              ],
              G15: 1335,
              G18: 7973,
              G15_MASK: 21522,
              getBCHTypeInfo: function (t) {
                var e = t << 10;
                while (o.getBCHDigit(e) - o.getBCHDigit(o.G15) >= 0)
                  e ^= o.G15 << (o.getBCHDigit(e) - o.getBCHDigit(o.G15));
                return ((t << 10) | e) ^ o.G15_MASK;
              },
              getBCHTypeNumber: function (t) {
                var e = t << 12;
                while (o.getBCHDigit(e) - o.getBCHDigit(o.G18) >= 0)
                  e ^= o.G18 << (o.getBCHDigit(e) - o.getBCHDigit(o.G18));
                return (t << 12) | e;
              },
              getBCHDigit: function (t) {
                var e = 0;
                while (0 != t) e++, (t >>>= 1);
                return e;
              },
              getPatternPosition: function (t) {
                return o.PATTERN_POSITION_TABLE[t - 1];
              },
              getMask: function (t, e, a) {
                switch (t) {
                  case i.PATTERN000:
                    return (e + a) % 2 == 0;
                  case i.PATTERN001:
                    return e % 2 == 0;
                  case i.PATTERN010:
                    return a % 3 == 0;
                  case i.PATTERN011:
                    return (e + a) % 3 == 0;
                  case i.PATTERN100:
                    return (Math.floor(e / 2) + Math.floor(a / 3)) % 2 == 0;
                  case i.PATTERN101:
                    return ((e * a) % 2) + ((e * a) % 3) == 0;
                  case i.PATTERN110:
                    return (((e * a) % 2) + ((e * a) % 3)) % 2 == 0;
                  case i.PATTERN111:
                    return (((e * a) % 3) + ((e + a) % 2)) % 2 == 0;
                  default:
                    throw new Error("bad maskPattern:" + t);
                }
              },
              getErrorCorrectPolynomial: function (t) {
                for (var e = new l([1], 0), a = 0; a < t; a++)
                  e = e.multiply(new l([1, s.gexp(a)], 0));
                return e;
              },
              getLostPoint: function (t) {
                for (
                  var e = t.getModuleCount(), a = 0, i = 0, n = 0;
                  n < e;
                  n++
                )
                  for (var r = 0, o = t.modules[n][0], s = 0; s < e; s++) {
                    var c = t.modules[n][s];
                    if (
                      (s < e - 6 &&
                        c &&
                        !t.modules[n][s + 1] &&
                        t.modules[n][s + 2] &&
                        t.modules[n][s + 3] &&
                        t.modules[n][s + 4] &&
                        !t.modules[n][s + 5] &&
                        t.modules[n][s + 6] &&
                        (s < e - 10
                          ? t.modules[n][s + 7] &&
                            t.modules[n][s + 8] &&
                            t.modules[n][s + 9] &&
                            t.modules[n][s + 10] &&
                            (a += 40)
                          : s > 3 &&
                            t.modules[n][s - 1] &&
                            t.modules[n][s - 2] &&
                            t.modules[n][s - 3] &&
                            t.modules[n][s - 4] &&
                            (a += 40)),
                      n < e - 1 && s < e - 1)
                    ) {
                      var l = 0;
                      c && l++,
                        t.modules[n + 1][s] && l++,
                        t.modules[n][s + 1] && l++,
                        t.modules[n + 1][s + 1] && l++,
                        (0 != l && 4 != l) || (a += 3);
                    }
                    o ^ c
                      ? r++
                      : ((o = c), r >= 5 && (a += 3 + r - 5), (r = 1)),
                      c && i++;
                  }
                for (s = 0; s < e; s++)
                  for (r = 0, o = t.modules[0][s], n = 0; n < e; n++) {
                    c = t.modules[n][s];
                    n < e - 6 &&
                      c &&
                      !t.modules[n + 1][s] &&
                      t.modules[n + 2][s] &&
                      t.modules[n + 3][s] &&
                      t.modules[n + 4][s] &&
                      !t.modules[n + 5][s] &&
                      t.modules[n + 6][s] &&
                      (n < e - 10
                        ? t.modules[n + 7][s] &&
                          t.modules[n + 8][s] &&
                          t.modules[n + 9][s] &&
                          t.modules[n + 10][s] &&
                          (a += 40)
                        : n > 3 &&
                          t.modules[n - 1][s] &&
                          t.modules[n - 2][s] &&
                          t.modules[n - 3][s] &&
                          t.modules[n - 4][s] &&
                          (a += 40)),
                      o ^ c
                        ? r++
                        : ((o = c), r >= 5 && (a += 3 + r - 5), (r = 1));
                  }
                var u = Math.abs((100 * i) / e / e - 50) / 5;
                return (a += 10 * u), a;
              },
            },
            s = {
              glog: function (t) {
                if (t < 1) throw new Error("glog(" + t + ")");
                return s.LOG_TABLE[t];
              },
              gexp: function (t) {
                while (t < 0) t += 255;
                while (t >= 256) t -= 255;
                return s.EXP_TABLE[t];
              },
              EXP_TABLE: new Array(256),
              LOG_TABLE: new Array(256),
            },
            c = 0;
          c < 8;
          c++
        )
          s.EXP_TABLE[c] = 1 << c;
        for (c = 8; c < 256; c++)
          s.EXP_TABLE[c] =
            s.EXP_TABLE[c - 4] ^
            s.EXP_TABLE[c - 5] ^
            s.EXP_TABLE[c - 6] ^
            s.EXP_TABLE[c - 8];
        for (c = 0; c < 255; c++) s.LOG_TABLE[s.EXP_TABLE[c]] = c;
        function l(t, e) {
          if (void 0 == t.length) throw new Error(t.length + "/" + e);
          var a = 0;
          while (a < t.length && 0 == t[a]) a++;
          this.num = new Array(t.length - a + e);
          for (var i = 0; i < t.length - a; i++) this.num[i] = t[i + a];
        }
        l.prototype = {
          get: function (t) {
            return this.num[t];
          },
          getLength: function () {
            return this.num.length;
          },
          multiply: function (t) {
            for (
              var e = new Array(this.getLength() + t.getLength() - 1), a = 0;
              a < this.getLength();
              a++
            )
              for (var i = 0; i < t.getLength(); i++)
                e[a + i] ^= s.gexp(s.glog(this.get(a)) + s.glog(t.get(i)));
            return new l(e, 0);
          },
          mod: function (t) {
            var e = this.getLength(),
              a = t.getLength();
            if (e - a < 0) return this;
            for (var i = new Array(e), n = 0; n < e; n++) i[n] = this.get(n);
            while (i.length >= a) {
              var r = s.glog(i[0]) - s.glog(t.get(0));
              for (n = 0; n < t.getLength(); n++)
                i[n] ^= s.gexp(s.glog(t.get(n)) + r);
              while (0 == i[0]) i.shift();
            }
            return new l(i, 0);
          },
        };
        var u = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16],
        ];
        function d() {
          (this.buffer = new Array()), (this.length = 0);
        }
        (e.prototype.getRightType = function () {
          for (var t = 1; t < 41; t++) {
            var e = u[4 * (t - 1) + this.errorCorrectLevel];
            if (void 0 == e)
              throw new Error(
                "bad rs block @ typeNumber:" +
                  t +
                  "/errorCorrectLevel:" +
                  this.errorCorrectLevel
              );
            for (var a = e.length / 3, i = 0, n = 0; n < a; n++) {
              var r = e[3 * n + 0],
                o = e[3 * n + 2];
              i += o * r;
            }
            var s = t > 9 ? 2 : 1;
            if (this.utf8bytes.length + s < i || 40 == t) {
              (this.typeNumber = t),
                (this.rsBlock = e),
                (this.totalDataCount = i);
              break;
            }
          }
        }),
          (d.prototype = {
            get: function (t) {
              var e = Math.floor(t / 8);
              return (this.buffer[e] >>> (7 - (t % 8))) & 1;
            },
            put: function (t, e) {
              for (var a = 0; a < e; a++) this.putBit((t >>> (e - a - 1)) & 1);
            },
            putBit: function (t) {
              var e = Math.floor(this.length / 8);
              this.buffer.length <= e && this.buffer.push(0),
                t && (this.buffer[e] |= 128 >>> this.length % 8),
                this.length++;
            },
          });
        var f = [];
        (r = function (t) {
          if (
            ((this.options = {
              text: "",
              size: 256,
              correctLevel: 3,
              background: "#ffffff",
              foreground: "#000000",
              pdground: "#000000",
              image: "",
              imageSize: 30,
              canvasId: "_myQrCodeCanvas",
              context: t.context,
              usingComponents: t.usingComponents,
              showLoading: t.showLoading,
              loadingText: t.loadingText,
            }),
            "string" === typeof t && (t = { text: t }),
            t)
          )
            for (var a in t) this.options[a] = t[a];
          for (var i = null, r = ((a = 0), f.length); a < r; a++)
            if (
              f[a].text == this.options.text &&
              f[a].text.correctLevel == this.options.correctLevel
            ) {
              i = f[a].obj;
              break;
            }
          a == r &&
            ((i = new e(this.options.text, this.options.correctLevel)),
            f.push({
              text: this.options.text,
              correctLevel: this.options.correctLevel,
              obj: i,
            }));
          var o = function (t) {
            var e = t.options;
            return e.pdground &&
              ((t.row > 1 && t.row < 5 && t.col > 1 && t.col < 5) ||
                (t.row > t.count - 6 &&
                  t.row < t.count - 2 &&
                  t.col > 1 &&
                  t.col < 5) ||
                (t.row > 1 &&
                  t.row < 5 &&
                  t.col > t.count - 6 &&
                  t.col < t.count - 2))
              ? e.pdground
              : e.foreground;
          };
          (function (t) {
            t.showLoading &&
              uni.showLoading({ title: t.loadingText, mask: !0 });
            for (
              var e = uni.createCanvasContext(t.canvasId, t.context),
                a = i.getModuleCount(),
                n = t.size,
                r = t.imageSize,
                c = (n / a).toPrecision(4),
                l = (n / a).toPrecision(4),
                u = 0;
              u < a;
              u++
            )
              for (var d = 0; d < a; d++) {
                var f = Math.ceil((d + 1) * c) - Math.floor(d * c),
                  h = Math.ceil((u + 1) * c) - Math.floor(u * c),
                  p = o({ row: u, col: d, count: a, options: t });
                e.setFillStyle(i.modules[u][d] ? p : t.background),
                  e.fillRect(Math.round(d * c), Math.round(u * l), f, h);
              }
            if (t.image) {
              var g = Number(((n - r) / 2).toFixed(2)),
                m = Number(((n - r) / 2).toFixed(2));
              (function (e, a, i, n, r, o, s, c, l) {
                e.setLineWidth(s),
                  e.setFillStyle(t.background),
                  e.setStrokeStyle(t.background),
                  e.beginPath(),
                  e.moveTo(a + o, i),
                  e.arcTo(a + n, i, a + n, i + o, o),
                  e.arcTo(a + n, i + r, a + n - o, i + r, o),
                  e.arcTo(a, i + r, a, i + r - o, o),
                  e.arcTo(a, i, a + o, i, o),
                  e.closePath(),
                  c && e.fill(),
                  l && e.stroke();
              })(e, g, m, r, r, 2, 6, !0, !0),
                e.drawImage(t.image, g, m, r, r);
            }
            setTimeout(
              function () {
                e.draw(!0, function () {
                  setTimeout(function () {
                    uni.canvasToTempFilePath(
                      {
                        width: t.width,
                        height: t.height,
                        destWidth: t.width,
                        destHeight: t.height,
                        canvasId: t.canvasId,
                        quality: Number(1),
                        success: function (e) {
                          t.cbResult &&
                            (s(e.tempFilePath)
                              ? s(e.apFilePath)
                                ? t.cbResult(e.tempFilePath)
                                : t.cbResult(e.apFilePath)
                              : t.cbResult(e.tempFilePath));
                        },
                        fail: function (e) {
                          t.cbResult && t.cbResult(e);
                        },
                        complete: function () {
                          uni.hideLoading();
                        },
                      },
                      t.context
                    );
                  }, t.text.length + 100);
                });
              },
              t.usingComponents ? 0 : 150
            );
          })(this.options);
          var s = function (t) {
            var e = (0, n.default)(t),
              a = !1;
            return (
              ("number" == e && "" == String(t)) || "undefined" == e
                ? (a = !0)
                : "object" == e
                ? ("{}" != JSON.stringify(t) &&
                    "[]" != JSON.stringify(t) &&
                    null != t) ||
                  (a = !0)
                : "string" == e
                ? ("" != t &&
                    "undefined" != t &&
                    "null" != t &&
                    "{}" != t &&
                    "[]" != t) ||
                  (a = !0)
                : "function" == e && (a = !1),
              a
            );
          };
        }),
          (r.prototype.clear = function (t) {
            var e = uni.createCanvasContext(
              this.options.canvasId,
              this.options.context
            );
            e.clearRect(0, 0, this.options.size, this.options.size),
              e.draw(!1, function () {
                t && t();
              });
          });
      })();
      var o = r;
      e.default = o;
    },
    3552: function (t, e, a) {
      "use strict";
      var i = a("4af2"),
        n = a.n(i);
      n.a;
    },
    3630: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("eeab"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = n.a;
    },
    3937: function (t, e, a) {
      "use strict";
      (function (t) {
        a("7a82");
        var i = a("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = i(a("f07e")),
          r = i(a("c964"));
        a("a9e3"),
          a("99af"),
          a("14d9"),
          a("e9c4"),
          a("2ca0"),
          a("ac1f"),
          a("5319"),
          a("466d"),
          a("d3b7"),
          a("159b"),
          a("a434");
        var o = i(a("6972")),
          s = i(a("5cd9")),
          c = (i(a("e143")), i(a("009d"))),
          l = i(a("04a4")),
          u = i(a("517c")),
          d = a("f5cd"),
          f = a("7795"),
          h = a("05fe"),
          p =
            (a("c097"),
            {
              props: {
                userdata: { type: Object, default: {} },
                project: { type: Object, default: {} },
                custombar: { type: Number, default: 0 },
                statusbar: { type: Number, default: 0 },
                winheight: { type: Number, default: 0 },
                devicelist: { type: Array, default: [] },
                consumingflagobj: { type: Object, default: {} },
              },
              components: {
                historyDeviceItem: l.default,
                smallHistoryDeviceItem: u.default,
              },
              data: function () {
                return {
                  swiperList: [
                    {
                      id: 0,
                      type: "image",
                      img: "https://zhuli.whxinna.com/static-resources/slider/001.jpg",
                    },
                    {
                      id: 1,
                      type: "image",
                      img: "https://zhuli.whxinna.com/static-resources/slider/002.jpg",
                    },
                    {
                      id: 2,
                      type: "image",
                      img: "https://zhuli.whxinna.com/static-resources/slider/003.png",
                    },
                  ],
                  noticemodal: {
                    showflag: !1,
                    noticearr: [],
                    swipercurrent: 0,
                  },
                  RepairPromptmodal: { showflag: !1, obj: { title: "" } },
                  mescroll: null,
                  upOption: { use: !1, toTop: { src: "" } },
                  downOption: {
                    bgColor: "linear-gradient(to right, #32b1fe, #338af9)",
                    auto: !1,
                    offset: 40,
                    isLock: !1,
                  },
                  swiperCurrent: 0,
                  ZcardPromptmodal: {
                    showflag: !1,
                    title: "支卡通免密开通",
                    content:
                      "开通支卡通及免密签约后，可通过支付宝使用“支卡通”进行消费记账",
                    type: "ZCard",
                  },
                  UserCodeModal: {
                    showflag: !1,
                    title: "我的二维码",
                    content: "",
                  },
                  ScreenBrightness: "",
                  isAdComponentShow: !0,
                  isFeedsShow: !0,
                  isAdComShow: !0,
                  placement1: null,
                  placement2: null,
                  placement3: [],
                  placement4: null,
                };
              },
              watch: {
                "$store.state.adPlacement": {
                  handler: function () {
                    this.handleAdPlacement();
                  },
                  deep: !0,
                  immediate: !0,
                },
              },
              filters: {},
              computed: {
                cubarstyle: function () {
                  return "height:"
                    .concat(
                      this.$store.state.SystemInfo.CustomBar,
                      "px;padding-top:"
                    )
                    .concat(this.$store.state.SystemInfo.StatusBar, "px;");
                },
                custombarpx: function () {
                  var t = "".concat(
                    this.$store.state.SystemInfo.CustomBar,
                    "px"
                  );
                  return t;
                },
                bottompx: function () {
                  return 0;
                },
                diyminheight: function () {
                  return "";
                },
                balance: function () {
                  return this.$store.getters.userToalBalance;
                },
                cashcount: function () {
                  return this.$store.getters.userCashCount;
                },
                projectname: function () {
                  return this.$store.getters.projectName;
                },
                isEnableAppointment: function () {
                  var t = !1;
                  if (o.default.isNullOrEmpty(this.project)) return t;
                  if (o.default.isNullOrEmpty(this.project.projectswitch))
                    return t;
                  var e = this.project.projectswitch || {};
                  return (
                    (1 != Number(e.device_status_view) &&
                      1 != Number(e.appointment_enable)) ||
                      (t = !0),
                    t
                  );
                },
                rechargeDisplayEnable: function () {
                  return this.$store.getters.rechargeDisplayEnable;
                },
                onlyShowThreeDeviceList: function () {
                  if (this.devicelist.length <= 2) return this.devicelist;
                  for (var t = [], e = 0; e < 2; e++)
                    t.push(this.devicelist[e]);
                  return t;
                },
                smallhistorydeviceitemstyle: function () {
                  return o.default.isNullOrEmpty(
                    this.onlyShowThreeDeviceList
                  ) || this.onlyShowThreeDeviceList.length <= 0
                    ? ""
                    : this.onlyShowThreeDeviceList.length >= 2
                    ? "width: 50%;"
                    : "width: 100%;";
                },
                isEnableDynamicConsume: function () {
                  return this.$store.getters.isEnableDynamicConsume;
                },
              },
              created: function () {
                var t = this;
                this.$nextTick(function () {
                  t.OpenScrollSwitch();
                });
              },
              methods: {
                showCode: function () {
                  this.$parent.$parent.$parent.$refs.paymentCode.RefreshUserCode();
                },
                handleAdPlacement: function () {
                  (this.placement1 = null),
                    (this.placement2 = null),
                    (this.placement3 = []),
                    (this.placement4 = null);
                  var e = this.$store.state.adPlacement;
                  if (
                    (t.log("adPlacement==========>", JSON.stringify(e)),
                    !o.default.isNullOrEmpty(e))
                  )
                    for (var a = 0; a < e.length; a++) {
                      var i = e[a].enum_ad_placement,
                        n = s.default.EnumAdPlacementReverse;
                      i == n["首页-轮播图与功能按钮之间"]
                        ? (this.placement1 = e[a])
                        : i == n["首页-功能按钮与常用设备之间"]
                        ? (this.placement2 = e[a])
                        : i == n["首页-页面底部"]
                        ? this.placement3.push(e[a])
                        : i == n["首页-弹框"] && (this.placement4 = e[a]);
                    }
                },
                checkIfAddedToDesktop: function () {
                  my.getSystemInfo({
                    success: function (e) {
                      if (e.miniprogram) {
                        var a = e.miniprogram.isAddToDesktop;
                        t.log("小程序是否已添加到桌面", a);
                      }
                    },
                  });
                },
                clickclose: function () {
                  o.default.isNullOrEmpty(this.ScreenBrightness) ||
                    this.ScreenBrightness,
                    uni.setScreenBrightness({
                      value: this.ScreenBrightness,
                      success: function () {},
                    }),
                    (this.UserCodeModal.showflag = !1);
                },
                moveStop: function () {},
                swipeItemTap: function (e) {
                  if (e.url_path)
                    if (
                      e.url_path.startsWith("alipays") ||
                      e.url_path.startsWith("weixin")
                    ) {
                      var a = e.url_path;
                      (a = a.replace(
                        /\{\{phone\}\}/g,
                        this.$store.getters.userPhone
                      )),
                        zl.system.launchApplication({ url: a });
                    } else if (e.url_path.startsWith("zhuli")) {
                      var i = e.url_path.match(/^.*\/\/([^?]*)/)[1],
                        n = e.url_path.split("?")[1],
                        r = n.split("&"),
                        o = [];
                      if (
                        (r.forEach(function (t) {
                          var e = t.split("=")[0],
                            a = t.split("=")[1];
                          o[e] = a;
                        }),
                        "openPage" == i)
                      ) {
                        var s = o["url"] + "?" + decodeURIComponent(o["query"]);
                        uni.navigateTo({ url: s });
                      } else if ("openWebview" == i) {
                        var c = decodeURIComponent(
                          o["url"] +
                            "?" +
                            "staff_phone="
                              .concat(this.$store.getters.userPhone, "&pid=")
                              .concat(this.$store.getters.projectId)
                        );
                        t.log("----------H5Url----------" + c),
                          zl.system.launchWeb(
                            { way: "url", url: c },
                            function (t) {}
                          );
                      } else uni.showToast("轮播图详情加载失败");
                    } else {
                      var l = { content: e.url_path, title: e.title },
                        u =
                          "/pagesA/noticedetail/noticedetail?act_type=slider&obj=" +
                          encodeURIComponent(JSON.stringify(l));
                      uni.navigateTo({ url: u });
                    }
                },
                handlerMove: function (t) {
                  var e = this;
                  (function (t) {
                    return new Promise(function (a, i) {
                      var n = null;
                      (n = uni.createSelectorQuery().in(e).select(t)),
                        n
                          .fields({ size: !0, rect: !0 }, function (t) {
                            a(t);
                          })
                          .exec();
                    });
                  })("#swipercontainer").then(function (t) {
                    t && t.top > e.custombar - 4
                      ? e.mescroll.lockDownScroll(!1)
                      : e.mescroll.lockDownScroll(!0);
                  });
                },
                silderChange: function (t) {
                  var e = t.detail,
                    a = e.current,
                    i = e.source;
                  ("autoplay" != i && "touch" != i) || (this.swiperCurrent = a);
                },
                swiperChange: function (e) {
                  var a = e.detail,
                    i = a.current,
                    n = a.source;
                  ("autoplay" != n && "touch" != n) ||
                    (this.noticemodal.swipercurrent = i),
                    t.log(this.noticemodal.swipercurrent);
                },
                mescrollInit: function (t) {
                  this.mescroll = t;
                },
                downCallback: function (t) {
                  var e = this;
                  (0, h.getUserShowAd)(),
                    this.$parent.$parent.$parent.OnShowRefreshUserInfo(
                      !0,
                      "HomedownRefresh"
                    ),
                    setTimeout(function () {
                      e.mescroll.endDownScroll();
                    }, 1500);
                },
                gethistroydevimg: function (t) {
                  var e = "/static/xiyu.png";
                  switch (t) {
                    case 2:
                    case 4:
                      e = "/static/yinshui.png";
                      break;
                    case 3:
                      e = "/static/xiyi.png";
                      break;
                    case 5:
                      e = "/static/chuifeng.png";
                      break;
                    case 8:
                      e = "/static/xixie.png";
                      break;
                    case 9:
                      e = "/static/honggan.png";
                      break;
                    default:
                      break;
                  }
                  return e;
                },
                ControlAppointmentViewDisplay: function () {
                  return (0, r.default)(
                    (0, n.default)().mark(function e() {
                      var a, i, r, c, l;
                      return (0, n.default)().wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a = "/pagesA/appointment/appointment"),
                                  (i = { timeout: 1e3 }),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  (0, f.GetSuccessedAppappointment)(
                                    { querydevicelist: "False" },
                                    i
                                  )
                                );
                              case 5:
                                (r = e.sent),
                                  (c = encodeURIComponent(JSON.stringify(r))),
                                  (a =
                                    "/pagesA/appointmentdetail/appointmentdetail?appointmentorder=" +
                                    c),
                                  (e.next = 13);
                                break;
                              case 10:
                                (e.prev = 10),
                                  (e.t0 = e["catch"](2)),
                                  t.log(e.t0);
                              case 13:
                                return (
                                  (e.prev = 13),
                                  (e.next = 16),
                                  (0, f.GetStaffConsumeingCount)(
                                    {
                                      net_type:
                                        s.default.GetAppointmentUseDevnetType(
                                          "consume"
                                        ),
                                      consume_types: "bath",
                                    },
                                    i
                                  )
                                );
                              case 16:
                                (l = e.sent),
                                  o.default.isNullOrEmpty(l) ||
                                    "0" == JSON.stringify(l) ||
                                    (a = "/pagesA/consuming/consuming"),
                                  (e.next = 23);
                                break;
                              case 20:
                                (e.prev = 20),
                                  (e.t1 = e["catch"](13)),
                                  t.log(e.t1);
                              case 23:
                                return uni.hideLoading(), e.abrupt("return", a);
                              case 25:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [
                          [2, 10],
                          [13, 20],
                        ]
                      );
                    })
                  )();
                },
                startmenu: function (t) {
                  var e = this;
                  return (0, r.default)(
                    (0, n.default)().mark(function a() {
                      var i, r, s, c, l;
                      return (0, n.default)().wrap(function (a) {
                        while (1)
                          switch ((a.prev = a.next)) {
                            case 0:
                              if (((i = e), (r = o.default.checklogin()), r)) {
                                a.next = 4;
                                break;
                              }
                              return a.abrupt("return");
                            case 4:
                              (s = i.project.projectswitch),
                                (c = ""),
                                (a.t0 = t),
                                (a.next =
                                  "project" === a.t0
                                    ? 9
                                    : "login" === a.t0
                                    ? 11
                                    : "balance" === a.t0
                                    ? 13
                                    : "cashcoupon" === a.t0
                                    ? 15
                                    : "kefu" === a.t0
                                    ? 17
                                    : "recharge" === a.t0
                                    ? 19
                                    : "find" === a.t0
                                    ? 27
                                    : "appointment" === a.t0
                                    ? 29
                                    : "xiyu" === a.t0
                                    ? 36
                                    : "xiyi" === a.t0
                                    ? 38
                                    : "yinshui" === a.t0
                                    ? 40
                                    : "chuifeng" === a.t0
                                    ? 42
                                    : "honggan" === a.t0
                                    ? 44
                                    : "xixie" === a.t0
                                    ? 46
                                    : "note" === a.t0
                                    ? 48
                                    : "notice" === a.t0
                                    ? 49
                                    : "paotui" === a.t0
                                    ? 51
                                    : "consume_code" === a.t0
                                    ? 52
                                    : 54);
                              break;
                            case 9:
                              return a.abrupt("return");
                            case 11:
                              return a.abrupt(
                                "return",
                                e.$emit("selecttab", 4)
                              );
                            case 13:
                              return (
                                (c = "/pagesA/balancedetail/balancedetail"),
                                a.abrupt("break", 54)
                              );
                            case 15:
                              return (
                                (c = "/pagesA/cashcoupon/cashcoupon"),
                                a.abrupt("break", 54)
                              );
                            case 17:
                              return a.abrupt(
                                "return",
                                e.$emit("selecttab", 3)
                              );
                            case 19:
                              if (
                                (!1,
                                (l = e.$parent.$parent.$parent.IsShowDiscover),
                                l)
                              ) {
                                a.next = 25;
                                break;
                              }
                              return a.abrupt(
                                "return",
                                e.$emit("selecttab", 1)
                              );
                            case 25:
                              c = "/pages/rechargeContainer/rechargeContainer";
                            case 26:
                              return a.abrupt("break", 54);
                            case 27:
                              return a.abrupt(
                                "return",
                                e.$emit("selecttab", 1)
                              );
                            case 29:
                              if (!e.isEnableAppointment) {
                                a.next = 35;
                                break;
                              }
                              return (
                                uni.showLoading({
                                  title: "加载中...",
                                  mask: !0,
                                }),
                                (a.next = 33),
                                e.ControlAppointmentViewDisplay()
                              );
                            case 33:
                              (c = a.sent), uni.hideLoading();
                            case 35:
                              return a.abrupt("break", 54);
                            case 36:
                              return (
                                ((!o.default.isNullOrEmpty(s) &&
                                  1 == s.bath_enable) ||
                                  o.default.isNullOrEmpty(s)) &&
                                  (c =
                                    "/pagesA/consume/consume?act=consume&consumetype=bath"),
                                a.abrupt("break", 54)
                              );
                            case 38:
                              return (
                                ((!o.default.isNullOrEmpty(s) &&
                                  1 == s.laundry_enable) ||
                                  o.default.isNullOrEmpty(s)) &&
                                  (c =
                                    "/pagesA/consume/consume?act=consume&consumetype=laundry"),
                                a.abrupt("break", 54)
                              );
                            case 40:
                              return (
                                ((!o.default.isNullOrEmpty(s) &&
                                  1 == s.drinking_enable) ||
                                  o.default.isNullOrEmpty(s)) &&
                                  (c =
                                    "/pagesA/consume/consume?act=consume&consumetype=drinking"),
                                a.abrupt("break", 54)
                              );
                            case 42:
                              return (
                                ((!o.default.isNullOrEmpty(s) &&
                                  1 == s.blower_enable) ||
                                  o.default.isNullOrEmpty(s)) &&
                                  (c =
                                    "/pagesA/consume/consume?act=consume&consumetype=blower"),
                                a.abrupt("break", 54)
                              );
                            case 44:
                              return (
                                ((!o.default.isNullOrEmpty(s) &&
                                  1 == s.dryer_enable) ||
                                  o.default.isNullOrEmpty(s)) &&
                                  (c =
                                    "/pagesA/consume/consume?act=consume&consumetype=dryer"),
                                a.abrupt("break", 54)
                              );
                            case 46:
                              return (
                                ((!o.default.isNullOrEmpty(s) &&
                                  1 == s.shoe_enable) ||
                                  o.default.isNullOrEmpty(s)) &&
                                  (c =
                                    "/pagesA/consume/consume?act=consume&consumetype=shoe"),
                                a.abrupt("break", 54)
                              );
                            case 48:
                              return a.abrupt("break", 54);
                            case 49:
                              return (
                                (c = "/pagesA/noticecenter/noticecenter"),
                                a.abrupt("break", 54)
                              );
                            case 51:
                              return a.abrupt("break", 54);
                            case 52:
                              return (
                                (c = "/pagesB/consume_code/consume_code"),
                                a.abrupt("break", 54)
                              );
                            case 54:
                              o.default.isNullOrEmpty(c) &&
                                (c =
                                  "/pagesA/servicenotopened/servicenotopened"),
                                e.SetParentQueueDefaultStatus(),
                                uni.navigateTo({ url: c });
                            case 57:
                            case "end":
                              return a.stop();
                          }
                      }, a);
                    })
                  )();
                },
                SetParentQueueDefaultStatus: function () {
                  this.$parent.$parent.$parent.SetQueueDefaultStatus();
                },
                checkUrl: function (t) {
                  var e = !1,
                    a = this.project.projectswitch;
                  switch (t) {
                    case "xiyu":
                      ((!o.default.isNullOrEmpty(a) && 1 == a.bath_enable) ||
                        o.default.isNullOrEmpty(a)) &&
                        (e = !0);
                      break;
                    case "xiyi":
                      ((!o.default.isNullOrEmpty(a) && 1 == a.laundry_enable) ||
                        o.default.isNullOrEmpty(a)) &&
                        (e = !0);
                      break;
                    case "yinshui":
                      ((!o.default.isNullOrEmpty(a) &&
                        1 == a.drinking_enable) ||
                        o.default.isNullOrEmpty(a)) &&
                        (e = !0);
                      break;
                    case "chuifeng":
                      ((!o.default.isNullOrEmpty(a) && 1 == a.blower_enable) ||
                        o.default.isNullOrEmpty(a)) &&
                        (e = !0);
                      break;
                    case "honggan":
                      ((!o.default.isNullOrEmpty(a) && 1 == a.dryer_enable) ||
                        o.default.isNullOrEmpty(a)) &&
                        (e = !0);
                      break;
                    case "xixie":
                      ((!o.default.isNullOrEmpty(a) && 1 == a.shoe_enable) ||
                        o.default.isNullOrEmpty(a)) &&
                        (e = !0);
                      break;
                    case "appointment":
                      ((o.default.isNullOrEmpty(a) ||
                        (1 != a.device_status_view &&
                          1 != a.appointment_enable)) &&
                        !o.default.isNullOrEmpty(a)) ||
                        (e = !0);
                      break;
                    default:
                      break;
                  }
                  return e;
                },
                startdev: function (t) {
                  this.$emit("clickdev", t.id);
                },
                getneedshownotice: function (t) {
                  var e = o.default.checkneedshownotice("pages/index/index", t),
                    a = !1,
                    i = null;
                  if (e.length > 0) {
                    for (var n = [], r = 0; r < e.length; r++)
                      1 == e[r].type
                        ? n.push(e[r])
                        : ((a = !0),
                          (i = e[r]),
                          this.$store.commit("SetRepairModalData", {
                            flag: a,
                            obj: i,
                          }));
                    !this.noticemodal.showflag &&
                      n.length > 0 &&
                      ((this.noticemodal.swipercurrent = 0),
                      (this.noticemodal.noticearr = []),
                      this.$store.state.msgQueue.add(
                        o.default.shownoticecontent.bind(this, this, n)
                      ));
                  }
                },
                closenoticemodal: function () {
                  o.default.closenoticemodal(this),
                    this.$store.commit("SetHomeViewNoticeDialogFlag", !0),
                    this.$store.state.msgQueue.emitNext();
                },
                GetHomeSilderImg: function () {
                  var t = this;
                  return (0, r.default)(
                    (0, n.default)().mark(function e() {
                      var a, i;
                      return (0, n.default)().wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (t.$store.getters.hasBindProject) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (
                                (a = t), (e.next = 5), (0, d.GetSlideList)()
                              );
                            case 5:
                              (i = e.sent),
                                i &&
                                  i.length > 0 &&
                                  ((a.swiperList = []), (0, c.default)(i, a));
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                OpenScrollSwitch: function () {
                  0 != this.devicelist.length &&
                    null != this.mescroll &&
                    uni.pageScrollTo({ scrollTop: 3e3, duration: 0 });
                },
                OpenRepairDetail: function (t) {
                  this.CloseRepairPromptModal(t, !1),
                    this.SetParentQueueDefaultStatus(),
                    setTimeout(function () {
                      var e = JSON.parse(t.extend),
                        a =
                          "/pagesA/repairdetail/repairdetail?repairid=" +
                          e.order_id +
                          "&type=" +
                          e.type;
                      uni.navigateTo({ url: a });
                    }, 300);
                },
                CloseRepairPromptModal: function (t, e) {
                  this.RepairPromptmodal.showflag = !1;
                  var a = [],
                    i = this.$store.state.project.nodisplaynotice;
                  o.default.isNullOrEmpty(i) || (a = i),
                    a.push({
                      noticeid: t.id,
                      noticetime: t.valid_date,
                      display_times: t.display_times,
                      showcount: 1,
                      addflag: !0,
                    });
                  var n = new Date().getTime();
                  new Date().getTime();
                  t.noticetime && t.noticetime,
                    a.forEach(function (t, e) {
                      new Date(t.noticetime.replace(/\-/g, "/")).getTime() <
                        n && a.splice(e, 1);
                    });
                  var r = JSON.parse(JSON.stringify(this.$store.state.project));
                  (r.nodisplaynotice = a),
                    this.$store.commit("SetProjectData", r),
                    (0, d.SetReadRepairNotice)(t.id),
                    this.$store.commit("SetRepairModalData", {
                      flag: !1,
                      obj: {},
                    }),
                    e && this.$store.state.msgQueue.emitNext();
                },
                installMP: function () {
                  return CheckMiniAppVersionAndOpen(
                    "__UNI__360A309",
                    "run_errands"
                  );
                },
                CloseZcardModal: function () {
                  (this.ZcardPromptmodal.showflag = !1),
                    this.$store.state.msgQueue.emitNext();
                },
                GotoPayCenter: function () {
                  (this.ZcardPromptmodal.showflag = !1),
                    this.$store.state.msgQueue.emitNext();
                },
                handleGoMoreDevices: function () {
                  uni.navigateTo({
                    url: "/pagesA/commonEquipment/commonEquipment",
                  });
                },
              },
            });
        e.default = p;
      }).call(this, a("5a52")["default"]);
    },
    "3b7e": function (t, e, a) {
      "use strict";
      var i = a("794b"),
        n = a.n(i);
      n.a;
    },
    "3c51": function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("cb33"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = n.a;
    },
    "3cb2": function (t, e, a) {
      "use strict";
      (function (t) {
        a("7a82");
        var i = a("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = i(a("f07e")),
          r = i(a("c964"));
        a("a9e3"),
          a("d3b7"),
          a("ac1f"),
          a("99af"),
          a("e9c4"),
          a("159b"),
          a("14d9");
        var o = i(a("6972")),
          s = i(a("1495")),
          c = i(a("f1fa")),
          l = {
            components: { tRefresh: s.default, tToast: c.default },
            props: {
              userdata: { type: Object, default: {} },
              project: { type: Object, default: {} },
              custombar: { type: Number, default: 0 },
              statusbar: { type: Number, default: 0 },
              winheight: { type: Number, default: 0 },
            },
            data: function () {
              return {
                ContentStyle: "height:100%",
                Tablist: [{ name: "全部", id: "" }],
                SelectedTab: { name: "全部", id: "" },
                ContentList: [],
                loading: !0,
                loadingType: 0,
                TopHeight: 0,
                pageIndex: 1,
                pageSize: 6,
              };
            },
            filters: {
              parsezenpin: function (t) {
                var e = "无赠品";
                return (
                  0 != t.gift_goods_id && (e = "赠品:" + t.gift_goods_name), e
                );
              },
            },
            computed: {
              cubarstyle: function () {
                return "padding-top:".concat(this.statusbar, "px;");
              },
            },
            created: function () {
              var t = this;
              setTimeout(function () {
                t.QueryCategoryList(),
                  t.QueryContentList(),
                  t.Querylistcontentstyle();
              }, 50);
            },
            methods: {
              AdonError: function (e) {
                t.log(e, "onError=====>>>>>");
              },
              AdonLoad: function (e) {
                t.log(e, "onLoad=====>>>>>");
              },
              Querylistcontentstyle: function () {
                var e = this;
                (function (t) {
                  return new Promise(function (a, i) {
                    var n = null;
                    (n = uni.createSelectorQuery().in(e).select(t)),
                      n
                        .fields({ size: !0, rect: !0 }, function (t) {
                          a(t);
                        })
                        .exec();
                  });
                })(".top-titlebar").then(function (a) {
                  t.log("top-titlebar=========>", a.height),
                    (e.TopHeight = a.height - uni.upx2px(50)),
                    (e.ContentStyle = "height:calc(100% - "
                      .concat(a.height, "px + ")
                      .concat(uni.upx2px(40), "px);"));
                });
              },
              DetailClick: function (t) {
                var e =
                  "/pagesA/content_detail/content_detail?Content=" +
                  encodeURIComponent(JSON.stringify(t));
                uni.navigateTo({ url: e });
              },
              OpenSearchView: function () {
                uni.navigateTo({
                  url: "/pagesA/content_search/content_search",
                });
              },
              QueryContentList: function (t) {
                var e = this;
                return new Promise(function (a, i) {
                  o.default
                    .sendapppost(
                      e.project.server_addr +
                        o.default.API_PATH.ListDiscoverContent,
                      {
                        title: "",
                        category: e.SelectedTab.id,
                        page_index: e.pageIndex,
                        page_size: e.pageSize,
                      }
                    )
                    .then(function (i) {
                      (e.ContentList =
                        "up" == t ? e.ContentList.concat(i.data) : i.data),
                        a(i);
                    })
                    .catch(function (t) {
                      a({ err: t });
                    });
                });
              },
              QueryCategoryList: function () {
                var t = this;
                o.default
                  .sendapppost(
                    this.project.server_addr +
                      o.default.API_PATH.ListDiscoverCategory,
                    {}
                  )
                  .then(function (e) {
                    e.data.forEach(function (e) {
                      t.Tablist.push({ name: e.name, id: e.id });
                    });
                  })
                  .catch(function (t) {});
              },
              loadMore: function () {
                var t = this;
                return (0, r.default)(
                  (0, n.default)().mark(function e() {
                    var a;
                    return (0, n.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t.pageIndex += 1),
                              (e.next = 3),
                              t.QueryContentList("up")
                            );
                          case 3:
                            (a = e.sent),
                              "data" in a && 0 == a.data.length
                                ? (t.loadingType = 1)
                                : a.err
                                ? ((t.loadingType = 1),
                                  t.$refs.toast.show("fail", a.err))
                                : (t.loadingType = 0);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              refresh: function (t) {
                var e = this;
                return (0, r.default)(
                  (0, n.default)().mark(function t() {
                    var a;
                    return (0, n.default)().wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.pageIndex = 1),
                              (t.next = 3),
                              e.QueryContentList("down")
                            );
                          case 3:
                            (a = t.sent),
                              e.$refs.refresh.endRefresh(),
                              "data" in a && 0 == a.data.length
                                ? (e.loadingType = 1)
                                : a.err
                                ? ((e.loadingType = 1),
                                  e.$refs.toast.show("fail", a.err))
                                : ((e.loadingType = 0),
                                  e.$refs.toast.show("success", "更新成功"));
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              TabItemClick: function (t) {
                (this.SelectedTab = t),
                  (this.pageIndex = 1),
                  this.QueryContentList("down");
              },
            },
          };
        e.default = l;
      }).call(this, a("5a52")["default"]);
    },
    "3d5b": function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.history-item[data-v-1705fde5]{flex:1;width:auto;height:auto;padding:%?20?% %?20?%;background:linear-gradient(-49deg,#336bfd,#26a7f4);border-radius:%?12?%;margin-right:%?20?%}.history-item .title[data-v-1705fde5]{font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#fff;overflow:hidden;text-overflow:ellipsis;\r\n  /* 将对象作为弹性伸缩盒子模型显示 */display:-webkit-box;\r\n  /* 设置或检索伸缩盒对象的子元素的排列方式 。 */-webkit-box-orient:vertical;\r\n  /*  用来限制在一个块元素显示的文本的行数 */-webkit-line-clamp:1;word-break:break-all}.history-item .history-item_info[data-v-1705fde5]{display:flex;align-items:center;margin-top:%?10?%}.history-item .history-item_info uni-image[data-v-1705fde5]{width:%?50?%;height:%?50?%;margin-right:%?20?%}.history-item .history-item_info .location[data-v-1705fde5]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#fff;opacity:.5;width:100%;display:inline-block;overflow:hidden;text-overflow:ellipsis;\r\n  /* 将对象作为弹性伸缩盒子模型显示 */display:-webkit-box;\r\n  /* 设置或检索伸缩盒对象的子元素的排列方式 。 */-webkit-box-orient:vertical;\r\n  /*  用来限制在一个块元素显示的文本的行数 */-webkit-line-clamp:1;word-break:break-all}',
          "",
        ]),
        (t.exports = e);
    },
    "3ee2": function (t, e, a) {
      var i = a("85ee");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("5628364b", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "3ffd": function (t, e, a) {
      var i = a("77e2");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("ec064f24", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "4af2": function (t, e, a) {
      var i = a("a41f");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("85b32478", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "4de3": function (t, e, a) {
      var i = a("3d5b");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("33c46c3f", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    5002: function (t, e, a) {
      "use strict";
      var i = a("a54f"),
        n = a.n(i);
      n.a;
    },
    5029: function (t, e, a) {
      "use strict";
      a("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = {
        name: "HistoryDeviceItem",
        emits: ["tap", "click"],
        props: { device: { type: Object } },
        computed: {
          GetDeviceInfo: function () {
            var t = {
              background:
                "background: linear-gradient(-49deg, #336bfd 0%, #26a7f4 100%);",
              image: "/static/history-device-images/bath.png",
            };
            switch (this.device.devicetype) {
              case 2:
              case 4:
                (t.background =
                  "background: linear-gradient(-49deg, #18D0CF 0%, #43D6AC 100%);"),
                  (t.image = "/static/history-device-images/drinking.png");
                break;
              case 3:
                (t.background =
                  "background: linear-gradient(-49deg, #79DFFD 0%, #3fBCFF 100%);"),
                  (t.image = "/static/history-device-images/laundry.png");
                break;
              case 5:
                (t.background =
                  "background: linear-gradient(-49deg, #FF51A1 0%, #FB60A7 100%);"),
                  (t.image = "/static/history-device-images/blower.png");
                break;
              case 8:
                (t.background =
                  "background: linear-gradient(-49deg, #59CE30 0%, #74D34B 100%);"),
                  (t.image = "/static/history-device-images/shoe.png");
                break;
              case 9:
                (t.background =
                  "background: linear-gradient(-49deg, #B361FD 0%, #CA71FB 100%);"),
                  (t.image = "/static/history-device-images/dryer.png");
                break;
              default:
                break;
            }
            return t;
          },
        },
        methods: {
          onClick: function () {
            this.$emit("click");
          },
        },
      };
      e.default = i;
    },
    "517c": function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("f1c6"),
        n = a("a0e9");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      a("cd79");
      var o = a("f0c5"),
        s = Object(o["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "1705fde5",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "53be": function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("5d62"),
        n = a("ba7b");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      a("faa4");
      var o = a("f0c5"),
        s = Object(o["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "3ffd25a1",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "55af": function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return i;
      }),
        a.d(e, "c", function () {
          return n;
        }),
        a.d(e, "a", function () {});
      var i = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return [
            this.showflag
              ? e(
                  "v-uni-view",
                  {
                    staticClass: "t-toast",
                    style: { top: this.topHeight + "px" },
                  },
                  [
                    e("v-uni-view", {
                      staticClass: "iconfont",
                      class: "type-" + this.type,
                    }),
                    e("v-uni-text", [this._v(this._s(this.msg))]),
                  ],
                  1
                )
              : this._e(),
          ];
        },
        n = [];
    },
    5671: function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.top-titlebar[data-v-28c6f62d]{width:100%;background-image:linear-gradient(-90deg,#3e93ff,#33b1fe);top:--window-top;left:0}.search-container[data-v-28c6f62d]{display:flex;align-items:center}.view-title[data-v-28c6f62d]{font-size:%?50?%;margin-left:%?30?%;font-family:PingFang SC;font-weight:700;color:#fff}.kf-search-form[data-v-28c6f62d]{background:hsla(0,0%,100%,.25);border:1px solid #fff;color:#fff;opacity:.4}.kf-search-form [class*="cuIcon-"][data-v-28c6f62d]{font-size:%?30?%}[data-v-28c6f62d] .search-input-placeholder{color:#fff!important}.tab-container[data-v-28c6f62d]{overflow:hidden}.flexbox-view[data-v-28c6f62d]{overflow-x:scroll;margin:0 %?15?%;width:calc(100% - %?30?%)}.flexbox[data-v-28c6f62d]{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;width:auto;min-width:100%;padding:%?30?% 0}.tab-item[data-v-28c6f62d]{color:#fff;font-size:%?30?%;margin:0 %?30?%;opacity:.8;white-space:nowrap}.tab-item-select[data-v-28c6f62d]{font-size:%?35?%;opacity:1;font-family:PingFang SC;font-weight:700;position:relative}.tab-item-select[data-v-28c6f62d]::after{content:"";width:%?60?%;height:%?8?%;background-image:linear-gradient(-90deg,#fff 40%,#32b1fe 85%);border-radius:3px;content:"";position:absolute;left:50%;top:calc(100% + %?12?%);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.refresh-container[data-v-28c6f62d]{position:relative;z-index:0}.discovery-content-container[data-v-28c6f62d]{height:100%;width:100%;background:#fbfcfd;border-radius:%?35?% %?35?% 0 0;display:flex;flex-direction:row;flex-wrap:wrap;padding:0 %?10?%}.swiper-show-container[data-v-28c6f62d]{width:100%;padding:%?20?% %?10?% 0 %?10?%}.swiper-show-container uni-image[data-v-28c6f62d]{height:%?300?%;width:100%;border-radius:%?20?%}.content-item[data-v-28c6f62d]{width:calc(50% - %?20?%);margin:%?10?%;height:%?400?%;background:#fff;box-shadow:0 3px 4px 0 rgba(0,0,0,.06);border-radius:8px}.content-item > .head[data-v-28c6f62d]{width:100%;height:50%;position:relative}.content-item > .head > .tip-container[data-v-28c6f62d]{width:100%;height:%?40?%;position:absolute;bottom:0;display:flex;align-items:center;background:linear-gradient(0deg,rgba(0,0,0,.5),transparent);border-radius:0}.content-item > .head > .tip-container > .read-count-container[data-v-28c6f62d],\r\n.show-time-container[data-v-28c6f62d]{width:50%;display:flex}.content-item > .head > .tip-container uni-image[data-v-28c6f62d]{width:%?30?%;height:%?30?%;margin:0 %?10?%}.content-item > .head > .tip-container uni-view[data-v-28c6f62d]{color:#fff;font-size:%?22?%}.content-item > .head > .tip-container > .show-time-container[data-v-28c6f62d]{right:0;justify-content:flex-end;padding-right:%?10?%}.content-item > .head uni-image[data-v-28c6f62d]{width:100%;height:100%;border-radius:8px 8px 0 0}.content-item > .body[data-v-28c6f62d]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#212121;line-height:%?40?%;min-height:%?80?%;margin:%?20?% %?20?% %?20?% %?10?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.content-item > .foot[data-v-28c6f62d]{display:flex}.content-item > .foot > .label-item[data-v-28c6f62d]{font-size:%?24?%;background:#f1f9ff;border-radius:4px;color:#32b1fe;margin:%?10?% %?15?% %?10?% %?10?%;padding:%?10?% %?15?%}',
          "",
        ]),
        (t.exports = e);
    },
    "59c1": function (t, e, a) {
      "use strict";
      (function (t) {
        a("7a82");
        var i = a("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = i(a("f07e")),
          r = i(a("c964"));
        a("a9e3"),
          a("99af"),
          a("d3b7"),
          a("3ca3"),
          a("ddb0"),
          a("4de4"),
          a("159b"),
          a("e9c4");
        var o = a("ca00"),
          s = i(a("6972")),
          c = i(a("5cd9")),
          l = a("1db8"),
          u = { timeout: 3e3 },
          d = {
            components: {},
            props: {
              userdata: { type: Object, default: {} },
              project: { type: Object, default: {} },
              custombar: { type: Number, default: 0 },
              statusbar: { type: Number, default: 0 },
              winheight: { type: Number, default: 0 },
              isHome: { type: Boolean, default: !0 },
            },
            data: function () {
              return {
                checkednumber: "",
                rechargenumberlist: [],
                rechargeRebatelist: [],
                rechargeNormallist: [],
                cashcouponlist: [],
                requestfailflag: !1,
                requestfinishedflag: !1,
                showAdSwitch: !1,
                adHeight: 0,
                placement1: null,
                placement2: null,
                placement3: null,
                lastCall: 0,
              };
            },
            filters: {
              parsezenpin: function (t) {
                var e = "无赠品";
                return (
                  0 != t.gift_goods_id && (e = "赠品:" + t.gift_goods_name), e
                );
              },
            },
            computed: {
              cubarstyle: function () {
                return "height:"
                  .concat(this.custombar, "px;padding-top:")
                  .concat(this.statusbar, "px;");
              },
              contentheightstyle: function () {
                var t = uni.upx2px(110);
                return (
                  this.isHome || (t = uni.upx2px(40)),
                  0 == this.rechargenumberlist.length && (t -= uni.upx2px(120)),
                  "height:calc(100% - "
                    .concat(this.custombar, "px - ")
                    .concat(t, "px);")
                );
              },
              actionButtonContainerstyle: function () {
                var t = uni.upx2px(180);
                return (
                  this.isHome || (t = uni.upx2px(30)),
                  "bottom: ".concat(t, "px")
                );
              },
              loginedflag: function () {
                var t = !1;
                return s.default.isNullOrEmpty(this.userdata) || (t = !0), t;
              },
              recharge_enable: function () {
                var t = !0;
                return s.default.isNullOrEmpty(this.project)
                  ? t
                  : s.default.isNullOrEmpty(this.project) ||
                    s.default.isNullOrEmpty(this.project.projectswitch)
                  ? ((t = !1), t)
                  : (0 == this.project.projectswitch.recharge_enable &&
                      (t = !1),
                    t);
              },
              recharge_unenable_desc: function () {
                var t = "";
                return (
                  s.default.isNullOrEmpty(this.project) ||
                    s.default.isNullOrEmpty(this.project.projectswitch) ||
                    ((t = this.project.projectswitch.recharge_unenable_desc),
                    s.default.isNullOrEmpty(t) &&
                      (t = "未开启支付选项,请联系管理员")),
                  t
                );
              },
              third_part_account_type: function () {
                var t = "DEFAULT",
                  e = this.$store.state.project.projectswitch;
                return (
                  s.default.isNullOrEmpty(e) ||
                    s.default.isNullOrEmpty(e.third_part_account_type) ||
                    (t = e.third_part_account_type),
                  t
                );
              },
            },
            created: function () {
              var t = this;
              this.$store.state.project;
              this.getalldata(),
                this.$nextTick(function () {
                  t.createRechargeModalAd();
                });
            },
            watch: {
              "$store.state.adPlacement": {
                handler: function () {
                  this.handleAdPlacement();
                },
                deep: !0,
                immediate: !0,
              },
            },
            methods: {
              getPartnerPermissions: function () {
                return (0, r.default)(
                  (0, n.default)().mark(function e() {
                    var a;
                    return (0, n.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), (0, o.GetPartnerPermissions)({})
                            );
                          case 2:
                            (a = e.sent), t.log(a);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              handleGoWechat: function () {
                this.getPartnerPermissions();
              },
              handleAdPlacement: function () {
                t.log("处理广告埋点数据/eqwewqeq//"),
                  (this.placement1 = null),
                  (this.placement2 = null),
                  (this.placement3 = null);
                var e = this.$store.state.adPlacement;
                if (e && !(e.length <= 0))
                  for (var a = 0; a < e.length; a++) {
                    var i = e[a].enum_ad_placement,
                      n = c.default.EnumAdPlacementReverse;
                    i == n["商城页面-页面顶部"]
                      ? (this.placement1 = e[a])
                      : i == n["商城页面-页面底部"]
                      ? (this.placement2 = e[a])
                      : i == n["商城页面-弹框"] && (this.placement3 = e[a]);
                  }
              },
              smallWalletDisplayEnable: function () {
                return this.$store.getters.smallWalletDisplayEnable;
              },
              getalldata: function () {
                var e = this;
                s.default.isNullOrEmpty(this.userdata) ||
                  s.default.isNullOrEmpty(this.project) ||
                  (s.default.showloading("正在加载中"),
                  Promise.all([
                    this.getallrechargelist(),
                    this.getallcashcouponlist(),
                  ])
                    .then(function (t) {
                      e.requestfailflag = !1;
                    })
                    .catch(function (a) {
                      t.log(a), (e.requestfailflag = !0), uni.hideLoading();
                    })
                    .finally(function () {
                      setTimeout(function () {
                        (e.requestfinishedflag = !0), uni.hideLoading();
                      }, 500);
                    }));
              },
              parsecashcoupontype: function (t) {
                for (
                  var e = { userlimit: "", flagbuyed: !1 },
                    a = t.use_limit.split(","),
                    i = "",
                    n = 0;
                  n < a.length;
                  n++
                )
                  switch (a[n]) {
                    case "bath":
                      i += "洗浴 ";
                      break;
                    case "laundry":
                      i += "洗衣 ";
                      break;
                    case "drinking":
                      i += "饮水 ";
                      break;
                    case "blower":
                      i += "吹风 ";
                      break;
                    case "dryer":
                      i += "烘干 ";
                      break;
                    case "shoe":
                      i += "洗鞋 ";
                      break;
                    case "retail":
                      i += "零售 ";
                      break;
                    default:
                      break;
                  }
                return (
                  "gained_count" in t &&
                    0 != t.limit_count &&
                    t.gained_count >= t.limit_count &&
                    (e.flagbuyed = !0),
                  (e.userlimit = i),
                  e
                );
              },
              getRebateCouponLimit: function (t) {
                if (void 0 != t) {
                  for (var e = t.split(","), a = "", i = 0; i < e.length; i++)
                    switch (e[i]) {
                      case "bath":
                        a += "洗浴 ";
                        break;
                      case "laundry":
                        a += "洗衣 ";
                        break;
                      case "drinking":
                        a += "饮水 ";
                        break;
                      case "blower":
                        a += "吹风 ";
                        break;
                      case "dryer":
                        a += "烘干 ";
                        break;
                      case "shoe":
                        a += "洗鞋 ";
                        break;
                      case "retail":
                        a += "零售 ";
                        break;
                      default:
                        break;
                    }
                  return a;
                }
              },
              getallrechargelist: function () {
                var t = this;
                s.default
                  .sendapppost(
                    t.project.server_addr +
                      s.default.API_PATH.getlistrechargequota,
                    {},
                    u
                  )
                  .then(function (e) {
                    (t.rechargenumberlist = e),
                      (t.rechargeRebatelist = e.filter(function (t) {
                        return "00000000-0000-0000-0000-000000000000" != t.id;
                      })),
                      (t.rechargeNormallist = e.filter(function (t) {
                        return "00000000-0000-0000-0000-000000000000" == t.id;
                      })),
                      e.length > 0 && (t.checkednumber = e[0].quota);
                  })
                  .catch(function (t) {});
              },
              getallcashcouponlist: function () {
                var t = this;
                s.default
                  .sendapppost(
                    t.project.server_addr + s.default.API_PATH.getcashcoupon,
                    {},
                    u
                  )
                  .then(function (e) {
                    e.forEach(function (e, a) {
                      var i = t.parsecashcoupontype(e);
                      (e.userlimit = i.userlimit), (e.flagbuyed = i.flagbuyed);
                    }),
                      (t.cashcouponlist = e);
                  })
                  .catch(function (t) {});
              },
              tabnumber: function (t) {
                this.checkednumber = t;
              },
              rechargeBySmallPurse: function (t, e) {},
              throttle: function (t, e) {
                var a = new Date().getTime();
                a - this.lastCall < e ||
                  ((this.lastCall = a), t.apply(this, arguments));
              },
              rechargeconfirm: function (t, e) {
                var a = this;
                return (0, r.default)(
                  (0, n.default)().mark(function i() {
                    var r, o, c, l;
                    return (0, n.default)().wrap(function (i) {
                      while (1)
                        switch ((i.prev = i.next)) {
                          case 0:
                            if (((r = s.default.checklogin()), r)) {
                              i.next = 3;
                              break;
                            }
                            return i.abrupt("return");
                          case 3:
                            return (
                              (i.next = 5),
                              s.default.CheckIsNeedAlipayAgreement()
                            );
                          case 5:
                            if (((o = i.sent), !o.result)) {
                              i.next = 8;
                              break;
                            }
                            return i.abrupt("return", o.fn());
                          case 8:
                            if ("coupon" != t) {
                              i.next = 11;
                              break;
                            }
                            if (!e.flagbuyed) {
                              i.next = 11;
                              break;
                            }
                            return i.abrupt(
                              "return",
                              uni.showToast({
                                title: "该优惠券不可再购买，换张试试吧",
                                icon: "none",
                                duration: 2e3,
                              })
                            );
                          case 11:
                            if ("coupon" != t) {
                              i.next = 14;
                              break;
                            }
                            if (!(e.total_count <= 0)) {
                              i.next = 14;
                              break;
                            }
                            return i.abrupt(
                              "return",
                              uni.showToast({
                                title: "该优惠券已售罄，换张试试吧",
                                icon: "none",
                                duration: 2e3,
                              })
                            );
                          case 14:
                            if (
                              ((c = a.project.projectswitch),
                              0 != c.alipay_enable ||
                                0 != c.wechatpay_enable ||
                                0 != c.abcpay_enable ||
                                "fujianyike" === a.third_part_account_type)
                            ) {
                              i.next = 17;
                              break;
                            }
                            return i.abrupt(
                              "return",
                              s.default.showalert(
                                "提示",
                                "未开启支付选项,请联系管理员"
                              )
                            );
                          case 17:
                            return (
                              (l =
                                "/pages/rechargeconfirm/rechargeconfirm?moneytype=" +
                                t +
                                "&obj=" +
                                encodeURIComponent(JSON.stringify(e))),
                              i.abrupt("return", uni.navigateTo({ url: l }))
                            );
                          case 19:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  })
                )();
              },
              emptyClick: function () {
                var t = s.default.checklogin();
                t && uni.reLaunch({ url: url });
              },
              handleNavGoAd: function () {
                uni.navigateTo({ url: "/pages/advertising/advertising" });
              },
              createRechargeModalAd: function () {
                null != this.placement3 &&
                  (0, l.createBeiZiInterstitialAd)(this.placement3);
              },
            },
          };
        e.default = d;
      }).call(this, a("5a52")["default"]);
    },
    "5d62": function (t, e, a) {
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
            { staticClass: "store-page" },
            [
              a(
                "v-uni-view",
                { staticStyle: { height: "100%" } },
                [
                  a("v-uni-view", { attrs: { id: "content" } }, [
                    a(
                      "div",
                      { staticClass: "top", style: t.cubarstyle },
                      [
                        a("v-uni-image", {
                          staticClass: "userimgbg",
                          attrs: {
                            src: "/static/user_bg.png",
                            mode: "scaleToFill",
                          },
                        }),
                        a(
                          "div",
                          {
                            staticClass: "item1",
                            on: {
                              click: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.navigatetourl("login");
                              },
                            },
                          },
                          [
                            a(
                              "div",
                              { staticClass: "headportrait" },
                              [
                                t.loginedflag
                                  ? a("v-uni-image", {
                                      staticStyle: { height: "100%" },
                                      attrs: {
                                        src: t.parseuserheadimg,
                                        mode: "aspectFit",
                                      },
                                    })
                                  : t._e(),
                                t.loginedflag
                                  ? t._e()
                                  : a("v-uni-image", {
                                      staticStyle: {
                                        height: "100%",
                                        width: "100%",
                                      },
                                      attrs: {
                                        src: "/static/unlogin.png",
                                        mode: "aspectFit",
                                      },
                                    }),
                              ],
                              1
                            ),
                            a(
                              "div",
                              { staticClass: "projectinfo" },
                              [
                                t.loginedflag
                                  ? t._e()
                                  : a(
                                      "v-uni-text",
                                      { staticClass: "username" },
                                      [t._v("未登录")]
                                    ),
                                t.loginedflag
                                  ? a(
                                      "v-uni-text",
                                      { staticClass: "username" },
                                      [t._v(t._s(t.username))]
                                    )
                                  : t._e(),
                                a("br"),
                                t.loginedflag
                                  ? a(
                                      "v-uni-view",
                                      { staticClass: "projectname" },
                                      [
                                        a("v-uni-image", {
                                          staticClass: "project-title-icon",
                                          attrs: {
                                            src: "/static/biaoqian.png",
                                          },
                                        }),
                                        a(
                                          "v-uni-text",
                                          { staticClass: "project-text" },
                                          [t._v(t._s(t.projectname))]
                                        ),
                                      ],
                                      1
                                    )
                                  : t._e(),
                              ],
                              1
                            ),
                          ]
                        ),
                        a("div", { staticClass: "item2" }, [
                          a(
                            "div",
                            {
                              staticClass: "info-item",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.navigatetourl("balance");
                                },
                              },
                            },
                            [
                              a("v-uni-image", {
                                staticStyle: {
                                  width: "100upx",
                                  height: "100upx",
                                },
                                attrs: { src: "/static/balance.png" },
                              }),
                              a(
                                "v-uni-view",
                                {
                                  staticStyle: {
                                    "margin-top": "0upx",
                                    color: "white",
                                    "font-size": "30upx",
                                  },
                                },
                                [
                                  a("v-uni-text", [t._v("余额")]),
                                  a(
                                    "v-uni-text",
                                    { staticStyle: { "margin-left": "20upx" } },
                                    [t._v(t._s(t.balance))]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            "div",
                            {
                              staticClass: "info-item",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.navigatetourl("cashcoupon");
                                },
                              },
                            },
                            [
                              a("v-uni-image", {
                                staticStyle: {
                                  width: "100upx",
                                  height: "100upx",
                                },
                                attrs: { src: "/static/quan.png" },
                              }),
                              a(
                                "v-uni-view",
                                {
                                  staticStyle: {
                                    "margin-top": "0upx",
                                    color: "white",
                                    "font-size": "30upx",
                                  },
                                },
                                [
                                  a("v-uni-text", [t._v("优惠券")]),
                                  a(
                                    "v-uni-text",
                                    {
                                      staticStyle: {
                                        "font-size": "20upx !important",
                                        margin: "0 20upx 0 10upx",
                                      },
                                    },
                                    [t._v("(张)")]
                                  ),
                                  a("v-uni-text", [t._v(t._s(t.cashcount))]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]),
                      ],
                      1
                    ),
                    a("div", { staticClass: "bill-container" }, [
                      a(
                        "div",
                        { staticClass: "insidle-div bg-white" },
                        [
                          a(
                            "v-uni-view",
                            {
                              staticClass: "bg-white",
                              staticStyle: { padding: "20upx 40upx" },
                            },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "flex" },
                                [
                                  a(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.navigatetourl("bill");
                                        },
                                      },
                                    },
                                    [
                                      a("v-uni-image", {
                                        staticClass: " grid-img",
                                        attrs: {
                                          src: "/static/allbill.png",
                                          mode: "aspectFit",
                                        },
                                      }),
                                      a(
                                        "div",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("全部账单")]
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.navigatetourl("consumebill");
                                        },
                                      },
                                    },
                                    [
                                      a("v-uni-image", {
                                        staticClass: " grid-img",
                                        attrs: {
                                          src: "/static/xiaofei.png",
                                          mode: "aspectFit",
                                        },
                                      }),
                                      a(
                                        "div",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("消费账单")]
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.navigatetourl("rechargebill");
                                        },
                                      },
                                    },
                                    [
                                      a("v-uni-image", {
                                        staticClass: " grid-img",
                                        attrs: {
                                          src: "/static/chongzhi.png",
                                          mode: "aspectFit",
                                        },
                                      }),
                                      a(
                                        "div",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("充值账单")]
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.navigatetourl("yuyue");
                                        },
                                      },
                                    },
                                    [
                                      a("v-uni-image", {
                                        staticClass: " grid-img",
                                        attrs: {
                                          src: "/static/appointment.png",
                                          mode: "aspectFit",
                                        },
                                      }),
                                      a(
                                        "div",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("预约记录")]
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
                    ]),
                  ]),
                  a("div", { staticClass: "url-list", style: t.urlliststyle }, [
                    a(
                      "div",
                      {
                        staticClass: "url-item border-bottom",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.navigatetourl("tixian");
                          },
                        },
                      },
                      [
                        a("v-uni-image", {
                          attrs: {
                            src: "/static/money.png",
                            mode: "aspectFit",
                          },
                        }),
                        a("v-uni-text", { staticClass: "title" }, [
                          t._v("我要提现"),
                        ]),
                        a("v-uni-text", { staticClass: "cuicon cuIcon-right" }),
                      ],
                      1
                    ),
                    a(
                      "div",
                      {
                        staticClass: "url-item border-bottom",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.navigatetourl("bindcard");
                          },
                        },
                      },
                      [
                        a("v-uni-image", {
                          attrs: { src: "/static/card.png", mode: "aspectFit" },
                        }),
                        a("v-uni-text", { staticClass: "title" }, [
                          t._v("绑定卡片"),
                        ]),
                        a("v-uni-text", { staticClass: "cuicon cuIcon-right" }),
                      ],
                      1
                    ),
                    t.Wcs6CardTransferFlag
                      ? a(
                          "div",
                          {
                            staticClass: "url-item border-bottom",
                            on: {
                              click: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.navigatetourl("card_transfer");
                              },
                            },
                          },
                          [
                            a("v-uni-image", {
                              attrs: {
                                src: "/static/card_transfer.png",
                                mode: "aspectFit",
                              },
                            }),
                            a("v-uni-text", { staticClass: "title" }, [
                              t._v("卡片转存"),
                            ]),
                            a("v-uni-text", {
                              staticClass: "cuicon cuIcon-right",
                            }),
                          ],
                          1
                        )
                      : t._e(),
                    t.withholdpaydisplayflag
                      ? a(
                          "div",
                          {
                            staticClass: "url-item border-bottom",
                            on: {
                              click: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.navigatetourl("pay");
                              },
                            },
                          },
                          [
                            a("v-uni-image", {
                              attrs: {
                                src: "/static/pay_way.png",
                                mode: "aspectFit",
                              },
                            }),
                            a("v-uni-text", { staticClass: "title" }, [
                              t._v("支付方式"),
                            ]),
                            a("v-uni-text", {
                              staticClass: "cuicon cuIcon-right",
                            }),
                          ],
                          1
                        )
                      : t._e(),
                    a(
                      "div",
                      {
                        staticClass: "url-item border-bottom",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.navigatetourl("changeproject");
                          },
                        },
                      },
                      [
                        a("v-uni-image", {
                          attrs: {
                            src: "/static/exchange.png",
                            mode: "aspectFit",
                          },
                        }),
                        a("v-uni-text", { staticClass: "title" }, [
                          t._v("切换学校"),
                        ]),
                        a("v-uni-text", { staticClass: "cuicon cuIcon-right" }),
                      ],
                      1
                    ),
                    t.CollectionFaceFlag
                      ? a(
                          "div",
                          {
                            staticClass: "url-item border-bottom",
                            on: {
                              click: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.navigatetourl("facecollect");
                              },
                            },
                          },
                          [
                            a("v-uni-image", {
                              attrs: {
                                src: "/static/face.png",
                                mode: "aspectFit",
                              },
                            }),
                            a("v-uni-text", { staticClass: "title" }, [
                              t._v("人脸采集"),
                            ]),
                            a("v-uni-text", {
                              staticClass: "cuicon cuIcon-right",
                            }),
                          ],
                          1
                        )
                      : t._e(),
                    a(
                      "div",
                      {
                        staticClass: "url-item border-bottom",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.navigatetourl("userinfo");
                          },
                        },
                      },
                      [
                        a("v-uni-image", {
                          attrs: { src: "/static/info.png", mode: "aspectFit" },
                        }),
                        a("v-uni-text", { staticClass: "title" }, [
                          t._v("个人信息"),
                        ]),
                        a("v-uni-text", { staticClass: "cuicon cuIcon-right" }),
                      ],
                      1
                    ),
                    t.MyCollectionflag
                      ? a(
                          "div",
                          {
                            staticClass: "url-item border-bottom",
                            on: {
                              click: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.navigatetourl("discovercontent");
                              },
                            },
                          },
                          [
                            a("v-uni-image", {
                              attrs: {
                                src: "/static/collection.png",
                                mode: "aspectFit",
                              },
                            }),
                            a("v-uni-text", { staticClass: "title" }, [
                              t._v("我的收藏"),
                            ]),
                            a("v-uni-text", {
                              staticClass: "cuicon cuIcon-right",
                            }),
                          ],
                          1
                        )
                      : t._e(),
                    a(
                      "div",
                      {
                        staticClass: "url-item border-bottom",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.navigatetourl("security");
                          },
                        },
                      },
                      [
                        a("v-uni-image", {
                          attrs: {
                            src: "/static/h5/securitysetting.png",
                            mode: "aspectFit",
                          },
                        }),
                        a("v-uni-text", { staticClass: "title" }, [
                          t._v("安全设置"),
                        ]),
                        a("v-uni-text", { staticClass: "cuicon cuIcon-right" }),
                      ],
                      1
                    ),
                    t.IsShowSystemSetting
                      ? a(
                          "div",
                          {
                            staticClass: "url-item border-bottom",
                            on: {
                              click: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.navigatetourl("systemsetting");
                              },
                            },
                          },
                          [
                            a("v-uni-image", {
                              attrs: {
                                src: "/static/h5/system_setting.png",
                                mode: "aspectFit",
                              },
                            }),
                            a("v-uni-text", { staticClass: "title" }, [
                              t._v("系统设置"),
                            ]),
                            a("v-uni-text", {
                              staticClass: "cuicon cuIcon-right",
                            }),
                          ],
                          1
                        )
                      : t._e(),
                    a(
                      "div",
                      {
                        staticClass: "url-item border-bottom",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.navigatetourl("unregister");
                          },
                        },
                      },
                      [
                        a("v-uni-image", {
                          attrs: {
                            src: "/static/h5/unregister.png",
                            mode: "aspectFit",
                          },
                        }),
                        a("v-uni-text", { staticClass: "title" }, [
                          t._v("账户注销"),
                        ]),
                        a("v-uni-text", { staticClass: "cuicon cuIcon-right" }),
                      ],
                      1
                    ),
                    a(
                      "div",
                      {
                        staticClass: "url-item border-bottom out-login-item",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.navigatetourl("loginout");
                          },
                        },
                      },
                      [
                        a("v-uni-image", {
                          staticStyle: { position: "relative", left: "5upx" },
                          attrs: { src: "/static/exit.png", mode: "aspectFit" },
                        }),
                        a("v-uni-text", { staticClass: "title" }, [
                          t._v("退出登录"),
                        ]),
                        a("v-uni-text", { staticClass: "cuicon cuIcon-right" }),
                      ],
                      1
                    ),
                    a(
                      "div",
                      {
                        staticClass: "url-item border-bottom",
                        staticStyle: { "margin-bottom": "50upx" },
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.navigatetourl("about");
                          },
                        },
                      },
                      [
                        a("v-uni-image", {
                          staticClass: "abouticon",
                          attrs: {
                            src: "/static/christmas.png",
                            mode: "aspectFit",
                          },
                        }),
                        a("v-uni-text", { staticClass: "title" }, [
                          t._v("住理生活"),
                        ]),
                        a("v-uni-text", { staticStyle: { color: "#9E9E9E" } }, [
                          t._v(t._s(t.version)),
                        ]),
                        a("v-uni-text", { staticClass: "cuicon cuIcon-right" }),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [];
    },
    "649b": function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          "._qrCode[data-v-32aa0478]{position:relative}._qrCodeCanvas[data-v-32aa0478]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",
          "",
        ]),
        (t.exports = e);
    },
    6556: function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return n;
      }),
        a.d(e, "c", function () {
          return r;
        }),
        a.d(e, "a", function () {
          return i;
        });
      var i = { adComponents: a("a5e3").default },
        n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-uni-view",
            { staticStyle: { height: "100%", "background-color": "white" } },
            [
              a(
                "v-uni-view",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 0 == t.currertab,
                      expression: "currertab == 0",
                    },
                  ],
                  staticClass: "viewcontainer",
                },
                [
                  a("home", {
                    ref: "home",
                    attrs: {
                      userdata: t.userdata,
                      project: t.project,
                      custombar: t.CustomBar,
                      statusbar: t.StatusBar,
                      winheight: t.WinHeight,
                      devicelist: t.devicelist,
                      consumingflagobj: t.consumingflagobj,
                    },
                    on: {
                      selecttab: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)),
                          t.selecttab.apply(void 0, arguments);
                      },
                      clickdev: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)),
                          t.ClickDevToConsume.apply(void 0, arguments);
                      },
                    },
                  }),
                ],
                1
              ),
              1 == t.currertab
                ? a(
                    "v-uni-view",
                    { staticClass: "viewcontainer" },
                    [
                      t.IsShowDiscover
                        ? t._e()
                        : a("recharge", {
                            ref: "recharge",
                            attrs: {
                              userdata: t.userdata,
                              project: t.project,
                              custombar: t.CustomBar,
                              statusbar: t.StatusBar,
                              winheight: t.WinHeight,
                              isHome: !0,
                            },
                          }),
                      t.IsShowDiscover
                        ? a("discovery-content", {
                            ref: "discovery",
                            attrs: {
                              userdata: t.userdata,
                              project: t.project,
                              custombar: t.CustomBar,
                              statusbar: t.StatusBar,
                              winheight: t.WinHeight,
                            },
                          })
                        : t._e(),
                    ],
                    1
                  )
                : t._e(),
              3 == t.currertab
                ? a(
                    "v-uni-view",
                    { staticClass: "viewcontainer" },
                    [
                      a("kefu", {
                        ref: "kefu",
                        attrs: {
                          userdata: t.userdata,
                          project: t.project,
                          custombar: t.CustomBar,
                          statusbar: t.StatusBar,
                          winheight: t.WinHeight,
                        },
                      }),
                    ],
                    1
                  )
                : t._e(),
              4 == t.currertab
                ? a(
                    "v-uni-view",
                    { staticClass: "viewcontainer" },
                    [
                      a("zluser", {
                        ref: "zluser",
                        attrs: {
                          userdata: t.userdata,
                          project: t.project,
                          custombar: t.CustomBar,
                          statusbar: t.StatusBar,
                          winheight: t.WinHeight,
                        },
                        on: {
                          selecttab: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.selecttab.apply(void 0, arguments);
                          },
                          "update:userdata": function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              (t.userdata = e);
                          },
                        },
                      }),
                    ],
                    1
                  )
                : t._e(),
              a(
                "v-uni-view",
                { staticClass: "footer", attrs: { id: "footer" } },
                [
                  a(
                    "v-uni-view",
                    { staticClass: "cu-bar tabbar" },
                    t._l(t.tablist, function (e, i) {
                      return 2 != i
                        ? a(
                            "v-uni-view",
                            {
                              key: i,
                              class: [
                                "action",
                                { selectedicon: t.currertab == i },
                              ],
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.selecttab(i);
                                },
                              },
                            },
                            [
                              a("v-uni-view", { class: e.icon }),
                              t._v(t._s(e.text)),
                            ],
                            1
                          )
                        : a(
                            "v-uni-view",
                            {
                              staticClass: "midbutton-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.OpenScan.apply(void 0, arguments);
                                },
                              },
                            },
                            [
                              a("v-uni-view", {
                                staticClass: "background-container",
                              }),
                              a("v-uni-button", {
                                staticClass: "cu-btn cuIcon-scan midbutton",
                              }),
                            ],
                            1
                          );
                    }),
                    1
                  ),
                ],
                1
              ),
              t.placement1 && t.displayPlacement1Flag
                ? a(
                    "v-uni-view",
                    { staticStyle: { "z-index": "999999" } },
                    [a("ad-components", { attrs: { aditem: t.placement1 } })],
                    1
                  )
                : t._e(),
              a("v-uni-image", {
                staticClass: "bottom-tab-bg-image",
                attrs: {
                  id: "border-image",
                  src: "/static/bottom_tab_bg.png",
                  mode: "scaleToFill",
                },
              }),
              a("PaymentCode", { ref: "paymentCode" }),
            ],
            1
          );
        },
        r = [];
    },
    "6d7a": function (t, e, a) {
      "use strict";
      var i = a("3ee2"),
        n = a.n(i);
      n.a;
    },
    "6e25": function (t, e, a) {
      var i = a("649b");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("2bdab5c0", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    7795: function (t, e, a) {
      "use strict";
      a("7a82");
      var i = a("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          e.GetSuccessedAppappointment =
          e.GetStaffConsumeingCount =
            void 0),
        a("99af");
      i(a("6972"));
      var n = i(a("1783")),
        r = a("f55c"),
        o = a("5aba"),
        s = function (t) {
          var e = t.querydevicelist,
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (0, o.sendapppost)(
            ""
              .concat(n.default.state.project.server_addr)
              .concat(r.API_PATH.getsucceedappappointment),
            { querydevicelist: e },
            a
          );
        };
      e.GetSuccessedAppappointment = s;
      var c = function (t) {
        var e = t.net_type,
          a = t.consume_types,
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, o.sendapppost)(
          ""
            .concat(n.default.state.project.server_addr)
            .concat(r.API_PATH.getStaffConsumeingCount),
          { net_type: e, consume_types: a },
          i
        );
      };
      e.GetStaffConsumeingCount = c;
      var l = { GetSuccessedAppappointment: s, GetStaffConsumeingCount: c };
      e.default = l;
    },
    "77e2": function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.refresh-body[data-v-2f824018]{box-sizing:border-box;height:100%}.refresh-body .refresh-scroll[data-v-2f824018]{position:relative;height:100%}.refresh-body .refresh-icon[data-v-2f824018]{width:%?80?%;height:%?80?%;text-align:center;line-height:%?80?%;border-radius:50%;background:#fff;box-shadow:0 0 %?10?% 0 rgba(0,0,0,.2);position:absolute;left:50%;color:#00aa7f;z-index:9999999999;display:flex;align-items:center;justify-content:center}.refresh-body .refresh-icon .iconfont[data-v-2f824018]{font-size:%?36?%}.refresh-body .refresh-icon uni-image[data-v-2f824018]{width:%?36?%}.refresh-body .refresh-icon-active[data-v-2f824018]{position:fixed}.refresh-body .t-loading-box[data-v-2f824018]{display:flex;align-items:center;justify-content:center;flex-direction:row;line-height:%?80?%;font-size:%?26?%;width:100%;padding-bottom:%?20?%;color:#888}.refresh-body .t-loading-box .t-loading-text[data-v-2f824018]{padding:0 %?10?%;display:flex;align-items:center;flex-direction:row}.refresh-body .t-loading-box .loading[data-v-2f824018]{width:%?25?%;height:%?25?%;border:%?2.5?% solid #888;border-bottom:#fff %?2.5?% solid;border-radius:50%;margin-right:%?15?%;-webkit-animation:grace-rotate360-data-v-2f824018 1.2s infinite linear;animation:grace-rotate360-data-v-2f824018 1.2s infinite linear}.refresh-body .t-loading-box .t-line[data-v-2f824018]{margin:0;border-bottom:1px solid #d4d4d4;width:20px;-webkit-transform:scaleY(.5);transform:scaleY(.5);border-top-color:#d4d4d4;border-right-color:#d4d4d4;border-left-color:#d4d4d4}@-webkit-keyframes grace-rotate360-data-v-2f824018{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes grace-rotate360-data-v-2f824018{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',
          "",
        ]),
        (t.exports = e);
    },
    "794b": function (t, e, a) {
      var i = a("5671");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("4b1c18fa", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    8121: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("5029"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = n.a;
    },
    8560: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("b065"),
        n = a("e374");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      a("3b7e");
      var o = a("f0c5"),
        s = Object(o["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "28c6f62d",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "85ee": function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.history-item[data-v-57d1e4de]{height:%?140?%;background:linear-gradient(-49deg,#336bfd,#26a7f4);border-radius:%?12?%;display:flex;align-items:center;margin:%?10?% %?30?%}.history-item .history-item_image[data-v-57d1e4de]{margin:0 %?20?%;flex:0 0 %?80?%}.history-item .history-item_image uni-image[data-v-57d1e4de]{width:%?90?%;height:%?90?%}.history-item .history-item_info[data-v-57d1e4de]{display:flex;flex-flow:column;flex:1 1 auto;width:calc(100% - %?90?% - %?32?% - %?100?%)}.history-item .history-item_info > .title[data-v-57d1e4de]{font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#fff}.history-item .history-item_info > .location[data-v-57d1e4de]{display:flex;align-items:center;margin-top:%?20?%}.history-item .history-item_info > .location uni-image[data-v-57d1e4de]{width:%?14?%;height:%?22?%}.history-item .history-item_info > .location uni-view[data-v-57d1e4de]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#fff;line-height:%?32?%;opacity:.5;margin-left:%?10?%}.history-item .history-item_action[data-v-57d1e4de]{margin:0 %?10?%;flex:0 0 %?52?%}.history-item .history-item_action uni-image[data-v-57d1e4de]{width:%?32?%;height:%?32?%}.history-item .history-item__title[data-v-57d1e4de]{font-size:%?34?%;font-family:PingFang SC;font-weight:500;color:#333;width:100%;margin-bottom:%?20?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.history-item .history-item__info[data-v-57d1e4de]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#949cb5;display:flex;align-items:center}.history-item .history-item__info .item__image[data-v-57d1e4de]{width:%?72?%;height:%?72?%;margin-right:%?12?%}.history-item .address-view[data-v-57d1e4de]{width:100%;display:inline-block;overflow:hidden;text-overflow:ellipsis;\r\n  /* 将对象作为弹性伸缩盒子模型显示 */display:-webkit-box;\r\n  /* 设置或检索伸缩盒对象的子元素的排列方式 。 */-webkit-box-orient:vertical;\r\n  /*  用来限制在一个块元素显示的文本的行数 */-webkit-line-clamp:1;overflow:hidden;word-break:break-all}',
          "",
        ]),
        (t.exports = e);
    },
    "884c": function (t, e, a) {
      "use strict";
      a("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = {
        name: "HistoryDeviceItem",
        emits: ["tap", "click"],
        props: { device: { type: Object } },
        computed: {
          GetDeviceInfo: function () {
            var t = {
              background:
                "background: linear-gradient(-49deg, #336bfd 0%, #26a7f4 100%);",
              image: "/static/history-device-images/bath.png",
            };
            switch (this.device.devicetype) {
              case 2:
              case 4:
                (t.background =
                  "background: linear-gradient(-49deg, #18D0CF 0%, #43D6AC 100%);"),
                  (t.image = "/static/history-device-images/drinking.png");
                break;
              case 3:
                (t.background =
                  "background: linear-gradient(-49deg, #79DFFD 0%, #3fBCFF 100%);"),
                  (t.image = "/static/history-device-images/laundry.png");
                break;
              case 5:
                (t.background =
                  "background: linear-gradient(-49deg, #FF51A1 0%, #FB60A7 100%);"),
                  (t.image = "/static/history-device-images/blower.png");
                break;
              case 8:
                (t.background =
                  "background: linear-gradient(-49deg, #59CE30 0%, #74D34B 100%);"),
                  (t.image = "/static/history-device-images/shoe.png");
                break;
              case 9:
                (t.background =
                  "background: linear-gradient(-49deg, #B361FD 0%, #CA71FB 100%);"),
                  (t.image = "/static/history-device-images/dryer.png");
                break;
              default:
                break;
            }
            return t;
          },
        },
        methods: {
          onClick: function () {
            this.$emit("click");
          },
        },
      };
      e.default = i;
    },
    8949: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("1391"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = n.a;
    },
    "89e4": function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("3937"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = n.a;
    },
    "8bec": function (t, e, a) {
      var i = a("1697");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("21661a5e", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "8d75": function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("b4a6"),
        n = a("1306");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      a("dd77");
      var o = a("f0c5"),
        s = Object(o["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "da72bb62",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "8d95": function (t, e, a) {
      "use strict";
      a("7a82");
      var i = a("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        a("a9e3"),
        a("d3b7"),
        a("ac1f");
      a("26cb");
      var n = i(a("6972")),
        r = a("1faf"),
        o =
          (a("5cfc"),
          {
            components: {},
            props: {
              userdata: { type: Object, default: {} },
              project: { type: Object, default: {} },
              custombar: { type: Number, default: 0 },
              statusbar: { type: Number, default: 0 },
              winheight: { type: Number, default: 0 },
            },
            data: function () {
              return {
                information: {},
                phoneinfo: {},
                urlliststyle: "",
                isFeedsShow: !0,
              };
            },
            computed: {
              version: function () {
                return this.$store.getters.AppVersion;
              },
              parseuserheadimg: function (t) {
                return this.$store.getters.userHeadImage;
              },
              cubarstyle: function () {
                return "padding-top:".concat(this.statusbar, "px;");
              },
              username: function () {
                return this.$store.getters.userName;
              },
              loginedflag: function () {
                return this.$store.getters.hasLogin;
              },
              balance: function () {
                return this.$store.getters.userToalBalance;
              },
              cashcount: function () {
                return this.$store.getters.userCashCount;
              },
              projectname: function () {
                return this.$store.getters.projectName;
              },
              IsShowSystemSetting: function () {
                return !(
                  "android" != this.$store.state.SystemInfo.platform ||
                  !this.$store.state.isShowAd
                );
              },
              MyCollectionflag: function () {
                var t = !1;
                if (n.default.isNullOrEmpty(this.project)) return t;
                var e = this.project.projectswitch;
                return (
                  n.default.isNullOrEmpty(e) ||
                    (1 == e.discover_content_enable && (t = !0)),
                  t
                );
              },
              CollectionFaceFlag: function () {
                var t = !1;
                if (n.default.isNullOrEmpty(this.project)) return t;
                var e = this.project.projectswitch;
                return (
                  n.default.isNullOrEmpty(e) ||
                    (1 == e.collect_face_enable && (t = !0)),
                  t
                );
              },
              withholdpaydisplayflag: function () {
                var t = !1;
                if (n.default.isNullOrEmpty(this.project)) return t;
                var e = this.project.projectswitch;
                return (
                  n.default.isNullOrEmpty(e) ||
                    (1 != e.alipay_withhold_enable &&
                      1 != e.wechat_withhold_enable &&
                      1 != e.branch_card_enable) ||
                    (t = !0),
                  t
                );
              },
              Wcs6CardTransferFlag: function () {
                var t = !1;
                if (n.default.isNullOrEmpty(this.project)) return t;
                var e = this.project.projectswitch;
                return (
                  n.default.isNullOrEmpty(e) ||
                    (1 == e.wcs6_card_transfer_enable && (t = !0)),
                  t
                );
              },
              isShowAd: function () {
                return this.$store.state.isShowAd;
              },
              spaceCode: function () {
                return r.spaceCode;
              },
            },
            mounted: function () {},
            methods: {
              urllistcontentstyle: function () {
                var t = this;
                (function (e) {
                  return new Promise(function (a, i) {
                    var n = null;
                    (n = uni.createSelectorQuery().in(t).select(e)),
                      n
                        .fields({ size: !0, rect: !0 }, function (t) {
                          a(t);
                        })
                        .exec();
                  });
                })("#content")
                  .then(function (e) {
                    (t.urlliststyle = "height:calc(100% - ".concat(
                      e.height,
                      "px);"
                    )),
                      t.urlliststyle;
                  })
                  .catch(function (t) {});
              },
              showCode: function () {
                this.$parent.$refs.paymentCode.RefreshUserCode();
              },
              navigatetourl: function (t) {
                var e = this,
                  a = n.default.checklogin();
                if (a) {
                  var i = "";
                  switch (t) {
                    case "xieyi":
                      i = "/pages/useragreement/useragreement";
                      break;
                    case "unregister":
                      i = "/pages/unregister/unregister";
                      break;
                    case "pay":
                      i = "/pagesB/payway/payway";
                      break;
                    case "security":
                      i = "/pages/securitysetting/securitysetting";
                      break;
                    case "systemsetting":
                      i = "/pages/systemsetting/systemsetting";
                      break;
                    case "login":
                      return;
                    case "balance":
                      i = "/pagesA/balancedetail/balancedetail";
                      break;
                    case "cashcoupon":
                      i = "/pagesA/cashcoupon/cashcoupon";
                      break;
                    case "bill":
                      i = "/pagesA/bill/bill";
                      break;
                    case "consumebill":
                      i = "/pagesA/consumebill/consumebill";
                      break;
                    case "rechargebill":
                      i = "/pagesA/rechargebill/rechargebill";
                      break;
                    case "yuyue":
                      i = "/pagesA/appointmentlist/appointmentlist";
                      break;
                    case "consumepwd":
                      break;
                    case "changeproject":
                      i = "/pages/changeproject/changeproject";
                      break;
                    case "xianjinquan":
                      i = "/pagesA/cashcoupon/cashcoupon";
                      break;
                    case "bindcard":
                      i = "/pages/bindcard/bindcard";
                      break;
                    case "card_transfer":
                      i = "/pagesB/Wcs6/CardTransfer/CardTransfer";
                      break;
                    case "userinfo":
                      i = "/pagesA/userinfo/userinfo?scenetype=active";
                      break;
                    case "baoxiu":
                      i = "/pagesA/repairlist/repairlist";
                      break;
                    case "kefu":
                      return this.$emit("selecttab", 3);
                    case "about":
                      i = "/pagesA/about/about";
                      break;
                    case "tixian":
                      i = "/pagesA/cashrefund/cashrefund";
                      break;
                    case "xiaoxi":
                      i = "/pagesA/noticecenter/noticecenter";
                      break;
                    case "discovercontent":
                      i = "/pagesA/collection_content/collection_content";
                      break;
                    case "history_project":
                      i = "/pagesA/history_project/history_project";
                      break;
                    case "facecollect":
                      i = "/pagesA/facecollect/facecollect";
                      break;
                    case "loginout":
                      return n.default.showalert(
                        "提示",
                        "确定要退出登录吗?",
                        null,
                        function () {
                          e.$store.commit("SetUserData", null),
                            e.$store.commit("SetProjectData", null),
                            e.$store.commit("SetIsShowAd", !1);
                          uni.reLaunch({ url: "/pages/applogin/applogin" });
                        },
                        !0
                      );
                    default:
                      break;
                  }
                  return n.default.isNullOrEmpty(i)
                    ? uni.showToast({ icon: "none", title: "暂未开放" })
                    : uni.navigateTo({ url: i });
                }
              },
              OpenMpPrivacy: function () {
                return uni.navigateTo({
                  url: "/pagesA/webview/webview?title=住理生活小程序隐私保护指引&url=https://zhuli.whxinna.com/mp-weixin-privacy.html",
                });
              },
            },
          });
      e.default = o;
    },
    "8dfb": function (t, e, a) {
      t.exports = a.p + "static/img/arrowDown.699f1f89.svg";
    },
    9143: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("2343"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = n.a;
    },
    9520: function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          ".kefu-info[data-v-66a46e18]{background-color:#edf8ff;height:auto;padding:%?20?%;display:flex;align-items:center;justify-content:baseline}.kefuimgcontainer[data-v-66a46e18]{width:%?150?%;height:%?150?%;border-radius:100%}.desccontainer[data-v-66a46e18]{width:calc(100% - %?150?%);margin-left:%?20?%}.desccontainer>.time-text[data-v-66a46e18]{font-size:%?40?%;font-weight:700}.desccontainer>.desc-text[data-v-66a46e18]{font-size:%?24?%;margin-top:%?20?%;color:#939393}.call-info[data-v-66a46e18]{height:auto;display:flex;align-items:center;justify-content:space-between;margin-top:%?20?%}.callnumbercontainer[data-v-66a46e18]{display:flex;align-items:center;justify-content:center}.callnumbercontainer uni-image[data-v-66a46e18]{width:%?60?%;height:%?60?%}.callnumbercontainer>.phone-text[data-v-66a46e18]{color:#0196f3;font-size:%?48?%;margin-left:%?10?%}.callbtncontainer uni-button[data-v-66a46e18]{color:#fff;background-color:#0498f4;background-image:linear-gradient(90deg,#32b1fe,#0096f3);padding:%?36?% %?50?%}.menu-action-title[data-v-66a46e18]{display:flex;align-items:center}.menu-action-title>.title-icon[data-v-66a46e18]{width:5px;height:%?32?%;background-color:#32b1fe}.menu-action-title>.title-text[data-v-66a46e18]{font-weight:700;font-size:%?32?%;margin-left:%?10?%}.titlecontainer[data-v-66a46e18]{display:flex;align-items:center}.self-help-grid-img[data-v-66a46e18]{width:%?90?%;height:%?90?%}.help-item[data-v-66a46e18]{margin:0 15px;display:flex;flex-flow:column;justify-content:center;align-items:center}.action-title[data-v-66a46e18]{padding-top:%?15?%;font-size:%?25?%}.cu-list[data-v-66a46e18]{overflow-y:scroll!important}.label-item[data-v-66a46e18]{background-color:#f6f6f6;color:#aeaeae;display:inline-block;padding:5px 10px;border-radius:15px;margin-right:%?20?%}.label-item-active[data-v-66a46e18]{background-color:#def3ff;color:#32b1fe}.q-list-item[data-v-66a46e18]:active{background-color:#d6f2fe}.scroll-label-container[data-v-66a46e18]{height:%?100?%;padding:%?20?% 0}",
          "",
        ]),
        (t.exports = e);
    },
    "959e": function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAC+lBMVEUAAAD3tW/tZBb2bjn1vlHiQhT4gUH2azzxeiTwbyXyXivzfSvvWR77jFD0wMT1tT/xVhz+ya70Yir+y7Dzn0L0ezfvWR3vaiP+4c/6rED8tZT/697zeDH5qC+d8f/3nyub8f/uZiD/zbX9tJL4pS7ycCL9sZT9wJn/5cT1kDX4bEf0UDrrXRLrTyL/1sP5hk34pi/zZy7/7b7pVRjlSxP8sZP+x6zqWh3wZ0r/8Ob+0mv/7d/2mCD/zLLvVhz/zbH/0LfvcUWc8P//28v0VRf19QDvVCH8tpj/9sb5pCv3pCjaf//3jzX+17n5vpz447+c8P//+8D/7N/+7uL/zlDycy34kETxp4fveB/1vl3zzezZff//vGmb8P/agf///cH++cP/xKzhl3DvcBP+zWD7sEed8P///cL/7uKd8f//uqD3iRHbgf/11QHomXrbgf/7uX31+wD07ACd8P//8eb/zrX9t5T//cD/8Ob9yqz5oyv/uAjfkmv+qZbsTCHfOxD/1sX//tfyRA3xMgDnSRn6qjH2xmTsNwX6cjT3XSH5eUX4ZCj7djb8h1DvYB3803T7sjb5Ujb6bTLzYy/qWgv7SDf5ai32VhvwTBj/z2P+k135f0z7fkXrVBqc8P/9jlf0SxH+vqL/y0//zEjxVCDmQA3uPwzyPQb9xlz6ejf1Txb+rpf+0WzoQhT+vJr5m3r/zlj6XzXzZyL74JX9sYnyXCj/1Xn6l3D/x0T5dj73cjz+0r3+8rT/xa/98Kz9wUL2ajbxOAL8qoX2hmH8uj37tD383Tf5ZjT/wizoVAb/+834oYv/vh/+s5/504L3glb9wU74r0z8/Cj/uxT/3a77pX30oGrmVi7oTQb9uoT5sWz4j2z1imn4rlzveFLsZT//xjnxPzLqLinagP/+5bz8xqT86p3rh1jyfTv6Lzb/97r52oznm3r+v3L2cWPtUinssYz+6Fr7ulD9+j36OTbnGSb/6dXvwZvxrTDxz6z90o/viEnhkGb86ysr/7+XAAAAdXRSTlMAB+Hm/f7izA3hzCBr4hH4ne/l3hTgSjH+P/nr4NRrUz748+3s6+J6IP7m5ubk3Me6ukjy6tDPh/7z4tfLvrmpj/3y7ebm1buzm4J9cmFA++DGwKqpoqGWi10/JyYl+/bh2MvLwKqchoF/WOa45tza0MzMuF3sZKLhAAAK+klEQVRo3uzRv2rbQBzA8d8VrJ96+oMHycLgKvJg8NBUCBe8mAwOeLEpoWBj6jpLIdQQKG3pmnbQ7KXQTXoDL/cEfZMOeYC+Qu5OOSWRCcj5u+izSTd87/c7qFQqlUqlcjt/Cc/HHwbwbPy0WCfwZE7S9KhwHR+eyDLdigfpCTySj03jeuiIx/1i/HHqpBlqljXL87b//aptL0Ba8fssoTSn75VrT/8wxiwr9AgoqwCkxenx+anIL4dpOiRQWgMjs0wbmWDxugEF4+Nz7outHqK8OiJOjZvLMJytdrQWflvcTC+c2WQh+mMI/GG6gvIMigOe90DRJ6H2l3WiG/chZpIkPK5ZQpPAlg+8zQUB7MCkg6+vkOZxI9RcJk2uJbxE6mjSng7bxrAzPcLBtwHt59+hprXXEpvmdTKKhbaWaTrwIBqI+InShqpMXNdNBJGfE7X0mtBzM7OHih9QRIqRqjjYarWSOE4yjey//vYn12tl3Hm/frD//2zfgHuqj3gdTbX0vZdCHNdiqadng8u2POp02vHmTBq963a7tk3gznSTUqRqBmcuCy96tUt1ogZ/LcptxtabTSzb/378yh0evuHef4ZdeRek119IU1EcwPHp7qJstDlDrYjor+amlIkaYilpSVBi0t+Xoh6Kop6ybeGslV1WLcay1UNECY1YVkNWhG0NSlByqSSmpjUr3KbO0tBSs6DfOededzcfut2+L3If9LPf7xznlMfI2ROfuzMaNSc6OkNyBiWZHyWKSpBIMqKjl+J7eMsKNm64GdQQn7NeoykVML00fhrfEz2dCvtZu9YsXrFiNciEJjbRPQycmLNIg8sRCQ/wJYeADfmqjJVvcKuvQa+AxjarO5mR2db/H75g6yGVSrVu3TW2/g8fCN5lhcBm6uzs7a23L4eRuSX/D56QtSGji3XxsICjpqxnIurMv1lnvK0Jb59gen5WakVF5UOrtetVqKXd3R1QPxElaOJsb+B9fp0BdSUCPyl4bKArkA68tYtklVTmIzvgtb9cWP3cia/XIti14TquLgI/IhKalNEJD1Wi69779tQjn7bMCTCWyfWqu4y7HoGXioS3uYLw4MN+0Zq9j31YZkdmu3SRFIHvEG4nVDBVeb2IrnzvKysDmR2ZU+sN0g+ufGSf4CNPz8tG8LDX7vGifXfaGdeJ4Ijq75ASNUw5RSVRAuXkbbmbzjqHh7N7asrsMDQctWfZslhIC+VoZtRzjuTET01Naiids8MN8fzgeel5aWedy9LS4lDLr+DeajntmInb75HKNHqASUWHSxhfKhZn8aJzM+NiOdBjI+4lFy+aiXvOo861uhiY9dOBj18rnpUSM5vPUbMCi1/FhU2eNhOvQfJP5AX9as4r2J88Vw50ijiV195jw/FHl3F2Lae4SHpR6ZbbIKPcMj/tD+GHRTHITklVyPngceF49UXcUy23MLm4dN+85P2sRjlMtNpvYp4ORAGeklJ4PFWs4LP3TG1493E9Wm6JLPyjr6Wbmiw+UMLaLbRbRjkcMuYRTlyqUK4oLDymFEt54LmR+DlUvZbbWULrHS20LOjWhy64m3JRlJ+SMYsvQp/7VcqVhYUrleK1PPCNEfjdF6hWLTenJnFyXK/Xt0A0fFWHMj0wmdRu9rbhz8Ni5TGwxYq5/44/OY+6SR581eMLR6Ch8nKENzlofZCGwdncJgqO3c3eNvaXXKkUA85j73nhdqz3yZOq3t5ARweA3CbRxDRF0W6OTdE0NUg7mNs2j/y/pQAZ4TF/x5PiMnM35uUlbUvafTBE5V819gd+cfFiwNHOgQrhNOyd8rvI0zYRSU5swPm1nYWnbDaj0QYZDQajbYrDN6G1y2gH7eIsfYIObb1ExBSPZEWBPIEnvsozxEzcCME7nOEqfEF8gLGH9JCDkk2EBndRJnoCFj9IHreLmGZvVhQUoL8sfHGdTof5bLPZXGuBanHwMa2f8CMIp5r0LlcIh7EdMvbFjJcf3Duf2XtBgXS2iHcLT9UAD+NnWyzmsdrTF56N4VdhRvP3I3wc4TQVdHMOfAI2zr63usqhE7uP4r3L8UXnj58i/FeLZaCxYXR01DZgsdguWMy1jUZbAF92iJqg1NPB0mHn7BUYKR/ywA9I4glG4sQH/mPbt4a2BsvYp6o22xjoMHvgVzHCg0E1B1cHHWrmwPt8SK5pfr5FOE7G/9LQ8O33b/P3z1VtFwYsZsK/60O3Xc3J5HK0OODYB9t96Luaq5/DB75cwTjh7TrdO9Po6++fPxna6gYsoINvsNm62+FdJiyXTNaufaRDMsC4TME46U979hLaNBwHcLyChyLiA8UXlIEOpyerIEhR9CYT9TQQwYugF09eFP3LBCvxMZWkyrRpB2oqGiVqxZpFQSKa1B2qTjsPra+29KLQgfNx8OTv//+nNY2Pf5Zl9dLvLu0O/fT3fxS2DgwM9vZmRivl8onl8A7gEHyN9cfw9Ut8stMwcubXyBPAl9jx69cx3/s21v+tUql8/RgzssIduHtPi/apRy73Qo9vYdJX3OJvrymXK9/6s6++fMnC8HcSI8Sluwzw68FEwm/8NG7AOvvlb8tfZeH0L/8IO1+FI2eNnAEYcuI7/cLp2R+t4/2xN0eqB5/hKwW7nElMNk752ufPr7LlSmwU4Pr5auD7J44vteH0L2+KW37m5YdR61OkrmQu0hz4HH9xyjdGnmz8LA5wW9bILcDP4wC3d3mfEz9Dc+CzJ4g/+J/4CYL3MfDH/uGr7fgpHBNP0nzGz44Lz/wXfIDmN34Sx8T7aD7j513hry38cfOvF7cGv0/zAd9oc05dwCVZ+AOaA3/oC97XEnzuwu3bt+8tjBt/RPOOL+yJKIqYTktpSK5R5+QNnAO/5cRvW/hrj3hXhBe1ofwhUn6oJElywT1+jnbbE74joipDoNKon0rVAL+ES3rBIXc2r4owdHO5VOrY/gsE75tMfJeq5qj4o5qvKpYOsxdc4vdonvCIqgJG9e+8bfTahSiOhQ9a+KBH3Nrx9MiBu5KFl2DyGwRPsvArNE/4blXl6bqr3w8sEBurrk8Qn+IGD5m8ykuYz2lVuG/kAdioeOMazis+ww0+E3Eyz+OLnsvl8/kcvuZSSkCoGCc4c8/jNE94hEOIGxYVSBTFNCTpQCOhFnc1+RsLf2s9P/hcSae0VLpnoZurpoCOMWMY0g3BeqoVLtF/vu5v7m/4E/q08YGV03qC7D0X1TEOOeL0lFCMEjzJwqPRq3E4mBR/zucBljRyY3pc7Lms8rLJ2WRBS2kCehc9inOB38Q/FOcVzH5fQPCpTHwqLDGcOEWRdQPSpTScNxMhrkZx5rJfpVFcViUYfeQuua4z2Xs+hiBzWBZx+LgZZBX0gjv8bRM+JoiKVNJKQyVYvE4mHhZlwGhc45GgCUUvuGIizsAHF/aRm8nGkczLAmpK0DUO7Y67w4/TrMnl+mtxhs4x8Q6wZNjxMZMjmYYmafACncHgrOPjwF+QZ8eQCfsnQbqAYHJWm5x7DisGNv6MwPwTl/j7fYvXb5mxmwzOcWT0UIBdR2djz1G9MP1SBvgVi/6NP7HwFaumkHUchjUUBMHQDbTJ1ZfWHWFkr7Pb/tE4o2sJC785bXrQNolgmgKHwHZZsGNTdzgUCq0Nd2+e/9ub61r6D/zwynnNk+AXWtu9eW7Ar/as/hMO27wHjMlv60YnPmfD1kDL2rENn72DVF7XtSzQyujZW7yP3KlAu3bt2rVr1+4nMsIz4o/kRBEAAAAASUVORK5CYII=";
    },
    "9adb": function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return i;
      }),
        a.d(e, "c", function () {
          return n;
        }),
        a.d(e, "a", function () {});
      var i = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            "v-uni-view",
            { staticClass: "_qrCode" },
            [
              e("v-uni-canvas", {
                staticClass: "_qrCodeCanvas",
                style: {
                  width: this.cpSize + "px",
                  height: this.cpSize + "px",
                },
                attrs: {
                  id: "_myQrCodeCanvas",
                  "canvas-id": "_myQrCodeCanvas",
                },
              }),
              e("v-uni-image", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: this.show,
                    expression: "show",
                  },
                ],
                style: {
                  width: this.cpSize + "px",
                  height: this.cpSize + "px",
                },
                attrs: { src: this.result },
              }),
            ],
            1
          );
        },
        n = [];
    },
    a0e9: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("884c"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = n.a;
    },
    a41f: function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          'uni-page-body[data-v-48260474]{height:100%;background-color:#f7f7f7!important}body.?%PAGE?%[data-v-48260474]{background-color:#f7f7f7!important}.viewcontainer[data-v-48260474]{height:calc(100% - %?120?%);border:none}.bottom-tab-bg-image[data-v-48260474]{width:100%;height:%?160?%;position:fixed;bottom:0;z-index:9}.footer[data-v-48260474]{position:fixed;width:100%;bottom:0;z-index:10;background-color:#fff}.footer>.cu-bar[data-v-48260474]{background-color:#fff;position:relative;height:%?110?%!important\n\t/* box-shadow: 0 0 1px rgba(0, 0, 0, 0.5); */}.selectedicon[data-v-48260474]{color:#108ee9;background-color:#108ee9}.midbutton-container[data-v-48260474]{background-color:#fff;border-radius:%?110?%;width:%?110?%;height:%?110?%;display:flex;align-items:center;justify-content:center;\n\t/* box-shadow: 0px 0px 10px 5px #e9e8e8; */position:relative;bottom:%?30?%;margin:0 %?20?%;right:%?5?%}\n\n/* .midbutton-container>.background-container{\n\tposition: absolute;\n\tbackground-color: red;\n\ttop: -100upx;\n\theight: 160upx;\n\twidth: 160upx;\n\tborder-radius: 50%;\n\tz-index: 0;\n\ttransform-origin: center bottom;\n\ttransform: perspective(150upx) rotateX(30deg);\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n\n.midbutton-container>.background-container::before,\n.midbutton-container>.background-container::after {\n  content: "";\n  position: absolute;\n  width: 60upx;\n  height: 60upx;\n  bottom: 0;\n  background: #ed6a5e;\n}\n\n.midbutton-container>.background-container::before {\n  left: -60upx;\n  background: radial-gradient(circle at 0 0, transparent 60upx, #ed6a5e 60upx);\n}\n\n.midbutton-container>.background-container::after {\n  right: -60upx;\n  background: radial-gradient(circle at 60upx 0, transparent 60upx, #ed6a5e 60upx); \n} */.midbutton[data-v-48260474]{border-radius:%?110?%;color:#fff;background-color:#108ee9;height:%?110?%!important;width:%?110?%!important;font-size:%?55?%!important}.midbutton[data-v-48260474]:hover{background-color:#108ee9;color:#fff}.cu-bar.tabbar[data-v-48260474]{padding-bottom:0!important}.action[data-v-48260474]{top:0!important}.cu-bar.tabbar .action.add-action[data-v-48260474]:after{width:0;height:0}',
          "",
        ]),
        (t.exports = e);
    },
    a54f: function (t, e, a) {
      var i = a("9520");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("1fece2cc", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    b065: function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return n;
      }),
        a.d(e, "c", function () {
          return r;
        }),
        a.d(e, "a", function () {
          return i;
        });
      var i = { tRefresh: a("1495").default, tToast: a("f1fa").default },
        n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-uni-view",
            { staticStyle: { height: "100%" } },
            [
              a(
                "v-uni-view",
                {
                  staticClass: "top-titlebar",
                  style: t.cubarstyle,
                  attrs: { id: "title-container" },
                },
                [
                  a(
                    "v-uni-view",
                    { staticClass: "search-container" },
                    [
                      a("v-uni-view", { staticClass: "view-title" }, [
                        t._v("发现"),
                      ]),
                      a(
                        "v-uni-view",
                        { staticClass: "kf-search-form round cu-search" },
                        [
                          a("v-uni-text", { staticClass: "cuIcon-search" }),
                          a("v-uni-input", {
                            attrs: {
                              type: "text",
                              placeholder: "搜索你想看的内容",
                              "placeholder-class": "search-input-placeholder",
                              disabled: "true",
                              "confirm-type": "search",
                            },
                            on: {
                              click: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.OpenSearchView.apply(void 0, arguments);
                              },
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
                    { staticClass: "tab-container" },
                    [
                      a(
                        "v-uni-view",
                        { staticClass: "flexbox-view" },
                        [
                          a(
                            "v-uni-view",
                            { staticClass: "flexbox" },
                            t._l(t.Tablist, function (e, i) {
                              return a(
                                "v-uni-view",
                                {
                                  key: e.id,
                                  class: [
                                    "tab-item",
                                    {
                                      "tab-item-select":
                                        t.SelectedTab.id == e.id,
                                    },
                                  ],
                                  on: {
                                    click: function (a) {
                                      (arguments[0] = a = t.$handleEvent(a)),
                                        t.TabItemClick(e);
                                    },
                                  },
                                },
                                [t._v(t._s(e.name))]
                              );
                            }),
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
                { staticClass: "refresh-container", style: t.ContentStyle },
                [
                  a(
                    "t-refresh",
                    {
                      ref: "refresh",
                      attrs: {
                        loadingType: t.loadingType,
                        topheight: t.TopHeight,
                      },
                      on: {
                        refresh: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.refresh.apply(void 0, arguments);
                        },
                        bottomEvent: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.loadMore.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      a(
                        "template",
                        { slot: "content" },
                        [
                          a(
                            "v-uni-view",
                            { staticClass: "discovery-content-container" },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "swiper-show-container" },
                                [
                                  a("v-uni-image", {
                                    attrs: { src: "/static/kj_test.png" },
                                  }),
                                ],
                                1
                              ),
                              t._l(t.ContentList, function (e) {
                                return a(
                                  "v-uni-view",
                                  {
                                    key: e.id,
                                    staticClass: "content-item",
                                    on: {
                                      click: function (a) {
                                        a.stopPropagation(),
                                          (arguments[0] = a =
                                            t.$handleEvent(a)),
                                          t.DetailClick(e);
                                      },
                                    },
                                  },
                                  [
                                    a(
                                      "v-uni-view",
                                      { staticClass: "head" },
                                      [
                                        a("v-uni-image", {
                                          attrs: { src: e.image_url },
                                        }),
                                        a(
                                          "v-uni-view",
                                          { staticClass: "tip-container" },
                                          [
                                            a(
                                              "v-uni-view",
                                              {
                                                staticClass:
                                                  "read-count-container",
                                              },
                                              [
                                                a("v-uni-image", {
                                                  attrs: {
                                                    src: "/static/read_icon.png",
                                                  },
                                                }),
                                                a("v-uni-view", [
                                                  t._v(t._s(e.read_count)),
                                                ]),
                                              ],
                                              1
                                            ),
                                            a(
                                              "v-uni-view",
                                              {
                                                staticClass:
                                                  "show-time-container",
                                              },
                                              [
                                                a("v-uni-image", {
                                                  attrs: {
                                                    src: "/static/content_time.png",
                                                  },
                                                }),
                                                a("v-uni-view", [
                                                  t._v(
                                                    t._s(e.read_time) + "分钟"
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
                                    a("v-uni-view", { staticClass: "body" }, [
                                      t._v(t._s(e.title) + t._s(e.title)),
                                    ]),
                                    a(
                                      "v-uni-view",
                                      { staticClass: "foot" },
                                      t._l(e.label, function (e) {
                                        return a(
                                          "v-uni-view",
                                          { key: e, staticClass: "label-item" },
                                          [t._v(t._s(e))]
                                        );
                                      }),
                                      1
                                    ),
                                  ],
                                  1
                                );
                              }),
                            ],
                            2
                          ),
                        ],
                        1
                      ),
                    ],
                    2
                  ),
                  a("t-toast", {
                    ref: "toast",
                    attrs: { topHeight: t.TopHeight },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [];
    },
    b11f: function (t, e, a) {
      "use strict";
      a("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        a("a9e3");
      var i = {
        name: "t-toast",
        props: {
          showTime: { type: [String, Number], default: 1500 },
          topHeight: { type: [String, Number], default: 0 },
        },
        data: function () {
          return { showflag: !1, msg: "", type: "" };
        },
        methods: {
          show: function (t, e) {
            var a = this;
            (this.showflag = !0),
              "fail" === t
                ? ((this.msg = e || "失败"), (this.type = "fail"))
                : ((this.msg = e || "成功"), (this.type = "success")),
              setTimeout(function () {
                a.showflag = !1;
              }, this.showTime);
          },
        },
      };
      e.default = i;
    },
    b1f2: function (t, e, a) {
      "use strict";
      var i = a("3ffd"),
        n = a.n(i);
      n.a;
    },
    b4a6: function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return n;
      }),
        a.d(e, "c", function () {
          return r;
        }),
        a.d(e, "a", function () {
          return i;
        });
      var i = {
          mescrollEmpty: a("5a1b").default,
          contactService: a("2bd5").default,
        },
        n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticStyle: { height: "100%" } },
            [
              i(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !t.isHome } },
                [
                  i(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("商城")]
                  ),
                ],
                2
              ),
              t.loginedflag && !t.requestfailflag && t.recharge_enable
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "recharge-all-container-view",
                      style: t.contentheightstyle,
                    },
                    [
                      t.rechargenumberlist.length > 0
                        ? i(
                            "v-uni-view",
                            { staticClass: "balanceRecharge" },
                            [
                              i("v-uni-view", { staticClass: "buytitle" }, [
                                t._v("余额充值"),
                              ]),
                              i(
                                "v-uni-view",
                                {
                                  staticClass:
                                    "grid margin-bottom text-center col-5",
                                },
                                [
                                  t._l(t.rechargeRebatelist, function (e, a) {
                                    return e.uselimit
                                      ? i(
                                          "v-uni-view",
                                          {
                                            key: a,
                                            staticClass: "itemsWithDiscount",
                                          },
                                          [
                                            i(
                                              "v-uni-view",
                                              {
                                                staticClass:
                                                  "rechargeWithDiscount",
                                                on: {
                                                  click: function (a) {
                                                    (arguments[0] = a =
                                                      t.$handleEvent(a)),
                                                      t.rechargeconfirm(
                                                        "balance",
                                                        { price: e.quota }
                                                      );
                                                  },
                                                },
                                              },
                                              [
                                                i(
                                                  "v-uni-view",
                                                  {
                                                    staticClass: "discountLeft",
                                                  },
                                                  [
                                                    i("v-uni-text", [
                                                      t._v(
                                                        "￥" + t._s(e.quota)
                                                      ),
                                                    ]),
                                                    e.cash_coupon_money &&
                                                    e.cash_coupon_count
                                                      ? i("v-uni-text", [
                                                          t._v(
                                                            "赠" +
                                                              t._s(
                                                                e.cash_coupon_money
                                                              ) +
                                                              "元优惠券x" +
                                                              t._s(
                                                                e.cash_coupon_count
                                                              )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                    e.uselimit
                                                      ? i("v-uni-text", [
                                                          t._v(
                                                            "优惠券适用于" +
                                                              t._s(
                                                                t.getRebateCouponLimit(
                                                                  e.uselimit
                                                                )
                                                              )
                                                          ),
                                                        ])
                                                      : t._e(),
                                                  ],
                                                  1
                                                ),
                                                i(
                                                  "v-uni-view",
                                                  {
                                                    staticClass: "rechargeNow",
                                                  },
                                                  [t._v("点击充值")]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        )
                                      : t._e();
                                  }),
                                  t.rechargeRebatelist.length > 0
                                    ? i(
                                        "v-uni-view",
                                        {
                                          staticStyle: {
                                            display: "grid",
                                            "grid-template-columns":
                                              "1fr 1fr 1fr",
                                            width: "100%",
                                            "padding-top": "30upx",
                                            "grid-row-gap": "30upx",
                                            "grid-column-gap": "26upx",
                                          },
                                        },
                                        t._l(
                                          t.rechargeRebatelist,
                                          function (e, a) {
                                            return e.uselimit
                                              ? t._e()
                                              : i(
                                                  "v-uni-view",
                                                  {
                                                    key: a,
                                                    staticClass:
                                                      "itemsNoDiscount",
                                                    on: {
                                                      click: function (a) {
                                                        (arguments[0] = a =
                                                          t.$handleEvent(a)),
                                                          t.tabnumber(e.quota);
                                                      },
                                                    },
                                                  },
                                                  [
                                                    i(
                                                      "v-uni-view",
                                                      {
                                                        staticClass:
                                                          "rechargeNoDiscount",
                                                        on: {
                                                          click: function (a) {
                                                            (arguments[0] = a =
                                                              t.$handleEvent(
                                                                a
                                                              )),
                                                              t.rechargeconfirm(
                                                                "balance",
                                                                {
                                                                  price:
                                                                    e.quota,
                                                                }
                                                              );
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i(
                                                          "v-uni-text",
                                                          {
                                                            class: [
                                                              e.quota.toString()
                                                                .length > 7
                                                                ? "noDiscountTextSmall"
                                                                : e.quota.toString()
                                                                    .length > 5
                                                                ? "noDiscountTextMiddle"
                                                                : "noDiscountTextBig",
                                                            ],
                                                            staticStyle: {
                                                              padding:
                                                                "0 12upx",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "￥" +
                                                                t._s(e.quota)
                                                            ),
                                                          ]
                                                        ),
                                                        i(
                                                          "v-uni-button",
                                                          {
                                                            staticClass:
                                                              "rechargeNow",
                                                          },
                                                          [t._v("点击充值")]
                                                        ),
                                                      ],
                                                      1
                                                    ),
                                                  ],
                                                  1
                                                );
                                          }
                                        ),
                                        1
                                      )
                                    : t._e(),
                                  i(
                                    "v-uni-view",
                                    {
                                      staticStyle: {
                                        display: "grid",
                                        "grid-template-columns": "1fr 1fr 1fr",
                                        width: "100%",
                                        "padding-top": "30upx",
                                        "grid-row-gap": "30upx",
                                        "grid-column-gap": "26upx",
                                      },
                                    },
                                    t._l(t.rechargeNormallist, function (e, a) {
                                      return i(
                                        "v-uni-view",
                                        {
                                          key: a,
                                          staticClass: "itemsNoDiscount",
                                          on: {
                                            click: function (a) {
                                              (arguments[0] = a =
                                                t.$handleEvent(a)),
                                                t.tabnumber(e.quota);
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "v-uni-view",
                                            {
                                              staticClass: "rechargeNoDiscount",
                                              on: {
                                                click: function (a) {
                                                  (arguments[0] = a =
                                                    t.$handleEvent(a)),
                                                    t.rechargeconfirm(
                                                      "balance",
                                                      { price: e.quota }
                                                    );
                                                },
                                              },
                                            },
                                            [
                                              i(
                                                "v-uni-text",
                                                {
                                                  class: [
                                                    e.quota.toString().length >
                                                    7
                                                      ? "noDiscountTextSmall"
                                                      : e.quota.toString()
                                                          .length > 5
                                                      ? "noDiscountTextMiddle"
                                                      : "noDiscountTextBig",
                                                  ],
                                                  staticStyle: {
                                                    padding: "0 12upx",
                                                  },
                                                },
                                                [t._v("￥" + t._s(e.quota))]
                                              ),
                                              i(
                                                "v-uni-button",
                                                { staticClass: "rechargeNow" },
                                                [t._v("点击充值")]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      );
                                    }),
                                    1
                                  ),
                                ],
                                2
                              ),
                            ],
                            1
                          )
                        : t._e(),
                      t.cashcouponlist.length > 0
                        ? i("v-uni-view", { staticClass: "buyWithCoupon" }, [
                            t._v("购买优惠券"),
                          ])
                        : t._e(),
                      t._l(t.cashcouponlist, function (e, a) {
                        return i(
                          "v-uni-view",
                          {
                            key: a,
                            staticClass: "cashcoupons",
                            on: {
                              click: function (a) {
                                (arguments[0] = a = t.$handleEvent(a)),
                                  t.rechargeconfirm("coupon", e);
                              },
                            },
                          },
                          [
                            i(
                              "v-uni-view",
                              { staticClass: "cashcoupon-wrapper" },
                              [
                                i(
                                  "v-uni-view",
                                  {
                                    staticClass: "cashcoupon-content",
                                    class: {
                                      cashcouponouttime:
                                        e.total_count <= 0 || e.flagbuyed,
                                    },
                                  },
                                  [
                                    i(
                                      "v-uni-view",
                                      { staticClass: "cashcoupon-title" },
                                      [t._v(t._s(e.name))]
                                    ),
                                    i(
                                      "div",
                                      { staticClass: "cashcoupon-dec" },
                                      [t._v(t._s(t._f("parsezenpin")(e)))]
                                    ),
                                    i(
                                      "v-uni-view",
                                      { staticClass: "cashcoupon-sellmoney" },
                                      [
                                        i("v-uni-text", [
                                          t._v(
                                            "面额" +
                                              t._s(Number(e.money).toFixed(2)) +
                                              "元"
                                          ),
                                        ]),
                                        e.limit_count > 0
                                          ? i(
                                              "v-uni-text",
                                              {
                                                staticClass: "limit-count-tip",
                                              },
                                              [
                                                t._v("限购"),
                                                i(
                                                  "v-uni-text",
                                                  {
                                                    staticStyle: {
                                                      color: "#fc593b",
                                                    },
                                                  },
                                                  [t._v(t._s(e.limit_count))]
                                                ),
                                                t._v("张"),
                                              ],
                                              1
                                            )
                                          : i(
                                              "v-uni-text",
                                              {
                                                staticClass: "limit-count-tip",
                                              },
                                              [t._v("不限购")]
                                            ),
                                      ],
                                      1
                                    ),
                                    i(
                                      "div",
                                      { staticClass: "cashcoupon-userlimit" },
                                      [t._v(t._s(e.userlimit))]
                                    ),
                                    void 0 !== e.use_order
                                      ? i(
                                          "v-uni-text",
                                          {
                                            staticClass: "cashcoupon-sellmoney",
                                          },
                                          [
                                            t._v(
                                              "使用顺序：" +
                                                t._s(
                                                  0 == e.use_order
                                                    ? "优先用券"
                                                    : "优先用余额"
                                                )
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                  ],
                                  1
                                ),
                                i("v-uni-view", {
                                  staticClass: "cashcoupon-split-line",
                                }),
                                e.total_count > 0 && !e.flagbuyed
                                  ? i(
                                      "v-uni-view",
                                      { staticClass: "cashcoupon-tip" },
                                      [
                                        i(
                                          "v-uni-view",
                                          {
                                            staticClass:
                                              "cashcoupon-totalmoney",
                                          },
                                          [
                                            i("v-uni-text", [
                                              t._v(
                                                t._s(Number(e.price).toFixed(2))
                                              ),
                                            ]),
                                            i(
                                              "v-uni-text",
                                              { staticClass: "yuan-text" },
                                              [t._v("元")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    )
                                  : t._e(),
                                e.total_count <= 0 && !e.flagbuyed
                                  ? i(
                                      "v-uni-view",
                                      { staticClass: "cashcoupon-outsell-tip" },
                                      [
                                        i(
                                          "v-uni-view",
                                          { staticClass: "text-container" },
                                          [
                                            i("v-uni-text", [
                                              t._v(
                                                t._s(Number(e.price).toFixed(2))
                                              ),
                                            ]),
                                            i(
                                              "v-uni-text",
                                              { staticClass: "yuan-text" },
                                              [t._v("元")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    )
                                  : t._e(),
                                e.flagbuyed
                                  ? i("v-uni-view", {
                                      staticClass: "cashcoupon-buyed-tip",
                                    })
                                  : t._e(),
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
              t.rechargenumberlist.length > 0 &&
              t.loginedflag &&
              !t.requestfailflag &&
              t.requestfinishedflag &&
              t.recharge_enable
                ? i("v-uni-view", {
                    staticClass: "action-button-container",
                    style: t.actionButtonContainerstyle,
                  })
                : t._e(),
              t.loginedflag
                ? t._e()
                : i(
                    "v-uni-view",
                    {
                      staticStyle: {
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                      },
                    },
                    [
                      i("mescroll-empty", {
                        attrs: {
                          option: { tip: "请先进行登录~", btnText: "去登录" },
                        },
                        on: {
                          emptyclick: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.emptyClick.apply(void 0, arguments);
                          },
                        },
                      }),
                    ],
                    1
                  ),
              t.requestfailflag
                ? i(
                    "v-uni-view",
                    {
                      staticStyle: {
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                      },
                    },
                    [
                      i("mescroll-empty", {
                        attrs: {
                          option: { tip: "加载错误~", btnText: "重新加载" },
                        },
                        on: {
                          emptyclick: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.getalldata.apply(void 0, arguments);
                          },
                        },
                      }),
                    ],
                    1
                  )
                : t._e(),
              t.recharge_enable
                ? t._e()
                : i(
                    "v-uni-view",
                    {
                      staticStyle: {
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                      },
                    },
                    [
                      i("mescroll-empty", {
                        attrs: { option: { tip: t.recharge_unenable_desc } },
                      }),
                    ],
                    1
                  ),
              t.showAdSwitch
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "advertising",
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.handleNavGoAd.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      i("v-uni-image", {
                        attrs: { src: a("959e"), mode: "aspectFit" },
                      }),
                      i("v-uni-view", { staticClass: "send" }, [
                        t._v("点我送券"),
                      ]),
                    ],
                    1
                  )
                : t._e(),
              i("contact-service", {
                attrs: { backgroundColor: "#D2eef7", type: "row" },
              }),
            ],
            1
          );
        },
        r = [];
    },
    b4a8: function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return n;
      }),
        a.d(e, "c", function () {
          return r;
        }),
        a.d(e, "a", function () {
          return i;
        });
      var i = {
          uniIcons: a("00fa").default,
          mescrollUni: a("11c9").default,
          mpHtml: a("b035").default,
        },
        n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              staticClass: "home-view-container",
              on: {
                touchmove: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.handlerMove.apply(void 0, arguments);
                },
              },
            },
            [
              i(
                "v-uni-view",
                { staticClass: "index-titlebar", style: t.cubarstyle },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "search-form" },
                    [
                      i(
                        "v-uni-view",
                        {
                          staticClass: "projectbox",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.startmenu("project");
                            },
                          },
                        },
                        [
                          i(
                            "v-uni-view",
                            {
                              staticClass: "text-ellipsis",
                              staticStyle: { height: "100%" },
                            },
                            [t._v(t._s(t.projectname))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "text-center head-image-container" },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "notice-img image" },
                        [
                          i("v-uni-image", {
                            attrs: { src: "/static/imgs/notice.png" },
                            on: {
                              click: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.startmenu("notice");
                              },
                            },
                          }),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "code-image",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.showCode.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          i("v-uni-image", {
                            attrs: { src: "/static/imgs/pay_code.png" },
                          }),
                          i("uni-icons", {
                            staticClass: "uni-icon-wrapper",
                            attrs: {
                              size: 15,
                              color: "#9ec7ff",
                              type: "arrowright",
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
              i(
                "mescroll-uni",
                {
                  ref: "mescrollRef",
                  attrs: {
                    top: t.custombarpx,
                    bottom: t.bottompx,
                    up: t.upOption,
                    down: t.downOption,
                    height: "100%",
                    height: t.diyminheight,
                  },
                  on: {
                    down: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.downCallback.apply(void 0, arguments);
                    },
                    init: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.mescrollInit.apply(void 0, arguments);
                    },
                  },
                },
                [
                  i(
                    "v-uni-view",
                    {
                      staticClass: "swiper-container",
                      attrs: { id: "swipercontainer" },
                    },
                    [
                      i(
                        "v-uni-view",
                        [
                          i(
                            "v-uni-swiper",
                            {
                              staticClass: "screen-swiper",
                              staticStyle: { "min-height": "300upx" },
                              attrs: {
                                current: t.swiperCurrent,
                                circular: !0,
                                autoplay: !0,
                                interval: "5000",
                                duration: "500",
                              },
                              on: {
                                change: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.silderChange.apply(void 0, arguments);
                                },
                              },
                            },
                            t._l(t.swiperList, function (e, a) {
                              return i(
                                "v-uni-swiper-item",
                                { key: a },
                                [
                                  i(
                                    "v-uni-view",
                                    {
                                      staticStyle: {
                                        height: "100%",
                                        width: "100%",
                                      },
                                      on: {
                                        click: function (a) {
                                          (arguments[0] = a =
                                            t.$handleEvent(a)),
                                            t.swipeItemTap(e);
                                        },
                                      },
                                    },
                                    [
                                      "image" == e.type
                                        ? i("v-uni-image", {
                                            attrs: {
                                              src: e.img,
                                              mode: "scaleToFill",
                                            },
                                          })
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              );
                            }),
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "dots" },
                            [
                              t._l(t.swiperList, function (e, a) {
                                return [
                                  i("v-uni-view", {
                                    key: a + "_0",
                                    class: [
                                      "dot",
                                      { dotactive: a == t.swiperCurrent },
                                    ],
                                  }),
                                ];
                              }),
                            ],
                            2
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  i(
                    "v-uni-view",
                    { attrs: { id: "insidle-view" } },
                    [
                      i(
                        "v-uni-view",
                        {
                          staticClass: "bg-white",
                          staticStyle: {
                            padding: "0 40upx",
                            "margin-top": "15upx",
                          },
                        },
                        [
                          i(
                            "v-uni-view",
                            {
                              staticClass: "flex",
                              staticStyle: { "flex-wrap": "wrap" },
                            },
                            [
                              t.checkUrl("xiyu")
                                ? i(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub1 margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.startmenu("xiyu");
                                        },
                                      },
                                    },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "menu-grid-img",
                                        attrs: { src: "/static/xiyu.png" },
                                      }),
                                      t.consumingflagobj.xiyuconsumingflag
                                        ? i(
                                            "v-uni-view",
                                            {
                                              staticClass:
                                                "consuming-status-view",
                                            },
                                            [t._v("消费中")]
                                          )
                                        : t._e(),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("洗浴")]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t.checkUrl("xiyi")
                                ? i(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub1 margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.startmenu("xiyi");
                                        },
                                      },
                                    },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "menu-grid-img",
                                        attrs: { src: "/static/xiyi.png" },
                                      }),
                                      t.consumingflagobj.xiyiconsumingflag
                                        ? i(
                                            "v-uni-view",
                                            {
                                              staticClass:
                                                "consuming-status-view",
                                            },
                                            [t._v("消费中")]
                                          )
                                        : t._e(),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("洗衣")]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t.checkUrl("yinshui")
                                ? i(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub1 margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.startmenu("yinshui");
                                        },
                                      },
                                    },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "menu-grid-img",
                                        attrs: { src: "/static/yinshui.png" },
                                      }),
                                      t.consumingflagobj.yinshuiconsumingflag
                                        ? i(
                                            "v-uni-view",
                                            {
                                              staticClass:
                                                "consuming-status-view",
                                            },
                                            [t._v("消费中")]
                                          )
                                        : t._e(),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("饮水")]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t.checkUrl("chuifeng")
                                ? i(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub1 margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.startmenu("chuifeng");
                                        },
                                      },
                                    },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "menu-grid-img",
                                        attrs: { src: "/static/chuifeng.png" },
                                      }),
                                      t.consumingflagobj.chuifengconsumingflag
                                        ? i(
                                            "v-uni-view",
                                            {
                                              staticClass:
                                                "consuming-status-view",
                                            },
                                            [t._v("消费中")]
                                          )
                                        : t._e(),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("吹风")]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t.checkUrl("honggan")
                                ? i(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub1 margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.startmenu("honggan");
                                        },
                                      },
                                    },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "menu-grid-img",
                                        attrs: { src: "/static/honggan.png" },
                                      }),
                                      t.consumingflagobj.hongganconsumingflag
                                        ? i(
                                            "v-uni-view",
                                            {
                                              staticClass:
                                                "consuming-status-view",
                                            },
                                            [t._v("消费中")]
                                          )
                                        : t._e(),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("烘干")]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t.checkUrl("xixie")
                                ? i(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub1 margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.startmenu("xixie");
                                        },
                                      },
                                    },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "menu-grid-img",
                                        attrs: { src: "/static/xixie.png" },
                                      }),
                                      t.consumingflagobj.xixieconsumingflag
                                        ? i(
                                            "v-uni-view",
                                            {
                                              staticClass:
                                                "consuming-status-view",
                                            },
                                            [t._v("消费中")]
                                          )
                                        : t._e(),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("洗鞋")]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t.checkUrl("appointment")
                                ? i(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub1 margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.startmenu("appointment");
                                        },
                                      },
                                    },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "menu-grid-img",
                                        attrs: {
                                          src: "/static/appointment_new.png",
                                        },
                                      }),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("预约")]
                                      ),
                                    ],
                                    1
                                  )
                                : t._e(),
                              t.rechargeDisplayEnable
                                ? i(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub1 margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.startmenu("recharge");
                                        },
                                      },
                                    },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "menu-grid-img",
                                        attrs: { src: "/static/rechange.png" },
                                      }),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("充值")]
                                      ),
                                    ],
                                    1
                                  )
                                : i(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub1 margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.startmenu("find");
                                        },
                                      },
                                    },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "menu-grid-img",
                                        attrs: { src: "/static/rechange.png" },
                                      }),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("发现")]
                                      ),
                                    ],
                                    1
                                  ),
                            ],
                            1
                          ),
                          t.isEnableDynamicConsume
                            ? i(
                                "v-uni-view",
                                {
                                  staticClass: "flex",
                                  staticStyle: { "flex-wrap": "wrap" },
                                },
                                [
                                  i(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "flex-sub1 margin-xs radius text-center",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.startmenu("consume_code");
                                        },
                                      },
                                    },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "menu-grid-img",
                                        attrs: {
                                          src: "/static/consume_code.png",
                                        },
                                      }),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "text-bold action-title",
                                        },
                                        [t._v("动态码")]
                                      ),
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
                    ],
                    1
                  ),
                  0 != t.devicelist.length
                    ? i(
                        "v-uni-view",
                        { staticClass: "bg-white device-area" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "device-laset-title" },
                            [
                              i("span", [t._v("常用设备")]),
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "get_more_device",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.handleGoMoreDevices.apply(
                                          void 0,
                                          arguments
                                        );
                                    },
                                  },
                                },
                                [
                                  i("v-uni-text", [t._v("更多")]),
                                  i("v-uni-image", {
                                    attrs: { src: a("8dfb"), mode: "" },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "justify-start dev-list" },
                            t._l(t.onlyShowThreeDeviceList, function (e, a) {
                              return i("small-history-device-item", {
                                key: a,
                                style: t.smallhistorydeviceitemstyle,
                                attrs: { device: e },
                                on: {
                                  click: function (a) {
                                    (arguments[0] = a = t.$handleEvent(a)),
                                      t.startdev(e);
                                  },
                                },
                              });
                            }),
                            1
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
                {
                  staticClass: "cu-modal",
                  class: [{ show: t.noticemodal.showflag }],
                },
                [
                  i(
                    "v-uni-view",
                    {
                      staticClass: "cu-dialog swiper-container",
                      staticStyle: {
                        width: "85%",
                        height: "60%",
                        "border-radius": "20upx",
                      },
                    },
                    [
                      i(
                        "v-uni-swiper",
                        {
                          staticClass: "screen-swiper full-height",
                          attrs: {
                            duration: "500",
                            current: t.noticemodal.swipercurrent,
                            "indicator-dots": !1,
                            "indicator-color": "#8799a3",
                            "indicator-active-color": "#32b1fe",
                          },
                          on: {
                            change: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.swiperChange.apply(void 0, arguments);
                            },
                          },
                        },
                        t._l(t.noticemodal.noticearr, function (e, a) {
                          return i(
                            "v-uni-swiper-item",
                            {
                              key: a,
                              staticStyle: { color: "black", height: "100%" },
                              attrs: { "data-desc": e.title },
                            },
                            [
                              i(
                                "v-uni-view",
                                {
                                  staticClass:
                                    "text-ellipsis noticemodal-title",
                                },
                                [t._v(t._s(e.title))]
                              ),
                              i(
                                "v-uni-scroll-view",
                                {
                                  staticClass: "noticemodal-content",
                                  attrs: { "scroll-y": "true" },
                                },
                                [
                                  i("mp-html", {
                                    attrs: {
                                      content: e.htmlstr,
                                      selectable: !0,
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          );
                        }),
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "dots",
                          staticStyle: { bottom: "20upx" },
                        },
                        [
                          t._l(t.noticemodal.noticearr, function (e, a) {
                            return [
                              i("v-uni-view", {
                                key: a + "_0",
                                class: [
                                  "dot",
                                  {
                                    dotactive: a == t.noticemodal.swipercurrent,
                                  },
                                ],
                              }),
                            ];
                          }),
                        ],
                        2
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "closemodal-icon",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.closenoticemodal.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          i("v-uni-text", {
                            staticClass: "cuIcon-close",
                            staticStyle: { "font-size": "40upx" },
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
              i(
                "v-uni-view",
                {
                  staticClass: "cu-modal",
                  class: [{ show: t.RepairPromptmodal.showflag }],
                },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "cu-dialog repair-dialog" },
                    [
                      i(
                        "v-uni-view",
                        {
                          staticStyle: {
                            width: "100%",
                            height: "100%",
                            padding: "20upx",
                          },
                        },
                        [
                          i(
                            "v-uni-view",
                            {
                              staticClass: "imgagecontainer",
                              staticStyle: { width: "100%", height: "80%" },
                            },
                            [
                              i(
                                "v-uni-view",
                                {
                                  staticStyle: {
                                    "font-weight": "bold",
                                    margin: "10upx 0",
                                    "font-size": "28upx",
                                  },
                                },
                                [t._v(t._s(t.RepairPromptmodal.obj.title))]
                              ),
                              i("v-uni-image", {
                                staticStyle: { width: "70%", height: "85%" },
                                attrs: {
                                  src: "/static/staff_1024.png",
                                  mode: "aspectFit",
                                },
                              }),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "btncontainer",
                              staticStyle: { width: "100%" },
                            },
                            [
                              i(
                                "v-uni-button",
                                {
                                  staticClass: "confirm-btn",
                                  staticStyle: {
                                    width: "80%",
                                    margin: "0 auto",
                                  },
                                  attrs: { type: "primary" },
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.OpenRepairDetail(
                                          t.RepairPromptmodal.obj
                                        );
                                    },
                                  },
                                },
                                [t._v("前去回复/评价")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "closemodal-icon",
                          staticStyle: { top: "calc(72% + 10px)" },
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.CloseRepairPromptModal(
                                  t.RepairPromptmodal.obj,
                                  !0
                                );
                            },
                          },
                        },
                        [
                          i("v-uni-text", {
                            staticClass: "cuIcon-close",
                            staticStyle: { "font-size": "40upx" },
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
          );
        },
        r = [];
    },
    b526: function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          ".title[data-v-063b453e]{width:100%}.user-code-moal[data-v-063b453e]{width:100%;height:100%;border-radius:%?20?%;background-color:#fff}.desc-container>.title[data-v-063b453e]{margin:%?50?% 0;height:%?38?%;font-size:%?40?%;font-family:PingFang SC;font-weight:700;color:#333}.desc-container>.desc[data-v-063b453e]{margin:%?50?% 0;height:%?38?%;font-family:PingFang SC;color:#333}.desc-container>.desc uni-text[data-v-063b453e]{color:#32b1fe;margin:0 %?10?%}.desc-container>.content[data-v-063b453e]{height:calc(100% - %?38?% - %?50?%);font-size:%?32?%;line-height:%?50?%;font-family:PingFang SC;font-weight:500;color:#999aa5;margin:0 %?20?%;width:calc(100% - %?40?%)}",
          "",
        ]),
        (t.exports = e);
    },
    b56c: function (t, e, a) {
      "use strict";
      var i = a("6e25"),
        n = a.n(i);
      n.a;
    },
    ba7b: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("8d95"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = n.a;
    },
    bb87: function (t, e, a) {
      "use strict";
      a("7a82");
      var i = a("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = e.GetCommonhelpList = void 0),
        a("99af");
      i(a("6972"));
      var n = i(a("1783")),
        r = a("f55c"),
        o = a("5aba"),
        s = function (t) {
          return (0, o.sendapppost)(
            ""
              .concat(n.default.state.project.server_addr)
              .concat(r.API_PATH.listcommonhelp),
            t
          );
        };
      e.GetCommonhelpList = s;
      var c = { GetCommonhelpList: s };
      e.default = c;
    },
    bd82: function (t, e, a) {
      "use strict";
      (function (t) {
        a("7a82");
        var i = a("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = i(a("d0ff")),
          r = i(a("f07e")),
          o = i(a("c964"));
        a("a9e3"),
          a("4e82"),
          a("99af"),
          a("d3b7"),
          a("159b"),
          a("c975"),
          a("14d9");
        var s = i(a("6972")),
          c = a("bb87"),
          l = {
            props: {
              userdata: { type: Object, default: {} },
              project: { type: Object, default: {} },
              custombar: { type: Number, default: 0 },
              statusbar: { type: Number, default: 0 },
              winheight: { type: Number, default: 0 },
            },
            data: function () {
              return {
                scrollLeft: "",
                TabCur: 0,
                commonHelpLabelList: [],
                commonHelpList: [],
                commonHelpListDict: this.$store.state.commonHelpListDict,
                searchStr: "",
              };
            },
            filters: {
              showCustomerNumber: function (t) {
                if (s.default.isNullOrEmpty(t)) return t;
                for (var e = "", a = 0; a < t.length; a++)
                  2 < a && a < t.length - 2
                    ? (e += "*")
                    : (e += t.substring(a, a + 1));
                return e;
              },
            },
            computed: {
              phone: function () {
                return this.$store.getters.CustomerServicePhoneNumber;
              },
              opentime: function () {
                var t = "客服24小时为您竭诚服务!";
                return (
                  s.default.isNullOrEmpty(this.project) ||
                    s.default.isNullOrEmpty(this.project.projectswitch) ||
                    s.default.isNullOrEmpty(
                      this.project.projectswitch.customer_service
                    ) ||
                    s.default.isNullOrEmpty(
                      this.project.projectswitch.customer_service[0].weeks
                    ) ||
                    s.default.isNullOrEmpty(
                      this.project.projectswitch.customer_service[0].start_time
                    ) ||
                    s.default.isNullOrEmpty(
                      this.project.projectswitch.customer_service[0].end_time
                    ) ||
                    (t = this.GetShowTimeTextByConfig()),
                  t
                );
              },
            },
            mounted: function () {
              var t = this;
              this.$nextTick(function () {
                t.loadCommonHelperLabel();
              });
            },
            methods: {
              GetShowTimeTextByConfig: function () {
                var t = this.project.projectswitch.customer_service[0].weeks
                    .split(",")
                    .sort(),
                  e = ""
                    .concat(
                      this.project.projectswitch.customer_service[0].start_time,
                      "至"
                    )
                    .concat(
                      this.project.projectswitch.customer_service[0].end_time
                    );
                if (7 == t.length) return e;
                if (t.length > 3) {
                  var a = s.default.GetIsExistArrItem(
                      ["1", "2", "3", "4", "5", "6", "7"],
                      t
                    ),
                    i = "\n(";
                  a.forEach(function (t) {
                    i += s.default.toWeekName(Number(t)) + "、";
                  }),
                    (i = i.substring(0, i.length - 1) + "除外)"),
                    (e += i);
                } else {
                  var n = "";
                  t.forEach(function (t) {
                    n += s.default.toWeekName(Number(t)) + "、";
                  }),
                    (n = n.substring(0, n.length - 1) + "\n" + e),
                    (e = n);
                }
                return e;
              },
              loadCommonHelperLabel: function () {
                if (this.$store.getters.hasBindProject) {
                  var t = this.$store.state.commonHelpLabelList;
                  s.default.isNullOrEmpty(t)
                    ? this.requestCommonHelperLabel()
                    : ((this.commonHelpLabelList = t),
                      this.loadCommonHelperList(
                        this.commonHelpLabelList[0].id,
                        !0
                      ));
                }
              },
              requestCommonHelperLabel: function () {
                var e = this;
                return (0, o.default)(
                  (0, r.default)().mark(function a() {
                    var i, n, o, c, l;
                    return (0, r.default)().wrap(
                      function (a) {
                        while (1)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (a.prev = 0),
                                (i = e),
                                (a.next = 4),
                                s.default.sendapppost(
                                  e.project.server_addr +
                                    s.default.API_PATH.listcommonhelplabel,
                                  {}
                                )
                              );
                            case 4:
                              if (
                                ((n = a.sent), (o = n), !(o && o.length > 0))
                              ) {
                                a.next = 19;
                                break;
                              }
                              for (
                                i.commonHelpLabelList = [], c = 0;
                                c < o.length;
                                c++
                              )
                                i.commonHelpLabelList[c] = {
                                  id: o[c].id,
                                  label: o[c].label,
                                };
                              return (
                                i.$store.commit(
                                  "SetCommonHelpLabelList",
                                  i.commonHelpLabelList
                                ),
                                (a.next = 12),
                                i.loadCommonHelperList(
                                  i.commonHelpLabelList[0].id,
                                  !0
                                )
                              );
                            case 12:
                              l = 1;
                            case 13:
                              if (!(l < i.commonHelpLabelList.length)) {
                                a.next = 19;
                                break;
                              }
                              return (
                                (a.next = 16),
                                i.loadCommonHelperList(
                                  i.commonHelpLabelList[l].id,
                                  !1
                                )
                              );
                            case 16:
                              l++, (a.next = 13);
                              break;
                            case 19:
                              a.next = 24;
                              break;
                            case 21:
                              (a.prev = 21),
                                (a.t0 = a["catch"](0)),
                                t.log("loadCommonHelperLabel====>", a.t0);
                            case 24:
                            case "end":
                              return a.stop();
                          }
                      },
                      a,
                      null,
                      [[0, 21]]
                    );
                  })
                )();
              },
              searchCommonHelperList: function () {
                if (s.default.isNullOrEmpty(this.searchStr))
                  this.tabSelect(0, this.commonHelpLabelList[0].id);
                else if (this.commonHelpListDict)
                  for (var t in ((this.commonHelpList = []),
                  this.commonHelpListDict))
                    for (
                      var e = this.commonHelpListDict[t], a = 0;
                      a < e.length;
                      a++
                    )
                      e[a].title.indexOf(this.searchStr) > -1 &&
                        (this.commonHelpList[this.commonHelpList.length] = {
                          id: e[a].id,
                          title: e[a].title,
                          type: e[a].type,
                          label: e[a].label,
                          url: e[a].url,
                        });
              },
              loadCommonHelperList: function (e, a) {
                var i = this;
                return (0, o.default)(
                  (0, r.default)().mark(function n() {
                    var o, s, l, u, d, f;
                    return (0, r.default)().wrap(
                      function (n) {
                        while (1)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (((o = i.commonHelpListDict[e]), !o)) {
                                n.next = 5;
                                break;
                              }
                              for (
                                i.commonHelpList = [], s = 0;
                                s < o.length;
                                s++
                              )
                                i.commonHelpList[s] = {
                                  id: o[s].id,
                                  title: o[s].title,
                                  type: o[s].type,
                                  label: o[s].label,
                                  url: o[s].url,
                                };
                              return n.abrupt("return");
                            case 5:
                              return (
                                (l = i),
                                (n.prev = 6),
                                (n.next = 9),
                                (0, c.GetCommonhelpList)({ label_id: e })
                              );
                            case 9:
                              if (
                                ((u = n.sent),
                                (d = u.data),
                                (l.commonHelpListDict[e] = d),
                                l.$store.commit(
                                  "SetCommonHelpListDict",
                                  l.commonHelpListDict
                                ),
                                d && d.length > 0 && a)
                              )
                                for (
                                  l.commonHelpList = [], f = 0;
                                  f < d.length;
                                  f++
                                )
                                  l.commonHelpList[f] = {
                                    id: d[f].id,
                                    title: d[f].title,
                                    type: d[f].type,
                                    label: d[f].label,
                                    url: d[f].url,
                                  };
                              n.next = 19;
                              break;
                            case 16:
                              (n.prev = 16),
                                (n.t0 = n["catch"](6)),
                                t.log("this.commonHelpListDict==err==>", n.t0);
                            case 19:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[6, 16]]
                    );
                  })
                )();
              },
              clickhelperItem: function (t) {
                if (t.url) {
                  this.updateSlideshowClick(t.id);
                  var e =
                    "/pagesA/helpwebview/helpwebview?url=" +
                    encodeURIComponent(t.url) +
                    "&id=" +
                    t.id +
                    "&title=" +
                    t.title +
                    "&act_type=common_help";
                  uni.navigateTo({ url: e });
                }
              },
              updateSlideshowClick: function (t) {
                s.default
                  .sendapppost(
                    this.project.server_addr +
                      s.default.API_PATH.commonhelpclick,
                    { id: t }
                  )
                  .then(function (t) {
                    t.data;
                  })
                  .catch(function (t) {});
              },
              callkefu: function () {
                s.default.callKefu();
              },
              CheckIsNowTimeInOpenTime: function () {
                var t = !0;
                if (
                  !s.default.isNullOrEmpty(
                    this.project.projectswitch.customer_service[0].weeks
                  ) &&
                  !s.default.isNullOrEmpty(
                    this.project.projectswitch.customer_service[0].start_time
                  ) &&
                  !s.default.isNullOrEmpty(
                    this.project.projectswitch.customer_service[0].end_time
                  )
                ) {
                  var e = this.project.projectswitch.customer_service[0].weeks
                      .split(",")
                      .sort(),
                    a =
                      this.project.projectswitch.customer_service[0].start_time,
                    i = this.project.projectswitch.customer_service[0].end_time,
                    n = new Date(),
                    r = !1;
                  if (
                    (e.forEach(function (t) {
                      Number(t) == n.getDay() && (r = !0);
                    }),
                    r)
                  ) {
                    var o = new Date(
                        n.getFullYear() +
                          "/" +
                          Number(n.getMonth() + 1) +
                          "/" +
                          n.getDate() +
                          " " +
                          a
                      ).getTime(),
                      c = new Date(
                        n.getFullYear() +
                          "/" +
                          Number(n.getMonth() + 1) +
                          "/" +
                          n.getDate() +
                          " " +
                          i
                      ).getTime();
                    t = o <= n.getTime() && n.getTime() <= c;
                  } else t = !1;
                }
                return t;
              },
              tabSelect: function (t, e) {
                (this.TabCur = t),
                  (this.scrollLeft = 60 * (t - 1)),
                  this.loadCommonHelperList(e, !0);
              },
              navigatetourl: function (t) {
                var e = s.default.checklogin();
                if (e) {
                  var a = "";
                  switch (t) {
                    case "baoxiu":
                      a = "/pagesA/repairlist/repairlist?type=0";
                      break;
                    case "tousu":
                      a = "/pagesA/repairlist/repairlist?type=1";
                      break;
                    case "zhinan":
                      a = "/pagesA/helpwebview/use_guide";
                    default:
                      break;
                  }
                  return s.default.isNullOrEmpty(a)
                    ? uni.showToast({ icon: "none", title: "暂未开放" })
                    : uni.navigateTo({ url: a });
                }
              },
              linktosearchview: function () {
                var t = this;
                uni.navigateTo({
                  url: "../searchquestion/searchquestion",
                  events: {},
                  success: function (e) {
                    var a = [];
                    for (var i in t.commonHelpListDict)
                      a.push.apply(a, (0, n.default)(t.commonHelpListDict[i]));
                    e.eventChannel.emit("acceptDataFromOpenerPage", {
                      commonHelpList: a,
                    });
                  },
                });
              },
            },
          };
        e.default = l;
      }).call(this, a("5a52")["default"]);
    },
    bf87: function (t, e, a) {
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
            {
              staticClass: "refresh-body",
              on: {
                touchmove: function (e) {
                  e.stopPropagation(),
                    e.preventDefault(),
                    (arguments[0] = e = t.$handleEvent(e));
                },
              },
            },
            [
              a(
                "v-uni-scroll-view",
                {
                  staticClass: "refresh-scroll",
                  attrs: { "scroll-y": !0 },
                  on: {
                    scroll: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.scroll.apply(void 0, arguments);
                    },
                    touchstart: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.touchstart.apply(void 0, arguments);
                    },
                    scrolltolower: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.loadMore.apply(void 0, arguments);
                    },
                    touchmove: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.touchmove.apply(void 0, arguments);
                    },
                    touchend: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.touchend.apply(void 0, arguments);
                    },
                  },
                },
                [
                  a(
                    "v-uni-view",
                    {
                      staticClass: "refresh-icon",
                      class: t.icon_class,
                      style: {
                        top: t.top + "px",
                        transform:
                          "translateX(-50%) rotate(" + t.rotate_number + "deg)",
                      },
                    },
                    [
                      a("v-uni-image", {
                        attrs: {
                          src: "/static/tRefresh/refresh.png",
                          mode: "widthFix",
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "v-uni-view",
                    { staticClass: "content" },
                    [
                      t._t("content"),
                      3 != t.loadingType && t.openLoadMore
                        ? a(
                            "v-uni-view",
                            {
                              staticClass: "t-loading-box",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.loadMore.apply(void 0, arguments);
                                },
                              },
                            },
                            [
                              a("v-uni-view", { staticClass: "t-line" }),
                              a(
                                "v-uni-view",
                                { staticClass: "t-loading-text" },
                                [
                                  2 == t.loadingType
                                    ? a("v-uni-view", {
                                        staticClass: "loading",
                                      })
                                    : t._e(),
                                  a("v-uni-text", [
                                    t._v(t._s(t.loadingText[t.loadingType])),
                                  ]),
                                ],
                                1
                              ),
                              a("v-uni-view", { staticClass: "t-line" }),
                            ],
                            1
                          )
                        : t._e(),
                    ],
                    2
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [];
    },
    c476: function (t, e, a) {
      "use strict";
      var i = a("02a7"),
        n = a.n(i);
      n.a;
    },
    c812: function (t, e, a) {
      var i = a("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.t-toast[data-v-5ec3be6c]{position:absolute;padding:0 %?30?%;height:%?80?%;line-height:%?80?%;text-align:center;background-color:rgba(0,0,0,.4);left:50%;box-shadow:0 0 %?10?% 0 rgba(0,0,0,.2);border-radius:%?12?%;transition:all .5s;color:#fff;font-size:%?28?%;-webkit-transform:translate(-50%,-300%);transform:translate(-50%,-300%);display:flex;align-items:center;flex-direction:row;z-index:999999}.t-toast .iconfont[data-v-5ec3be6c]{margin-right:%?10?%;display:flex;align-items:center}.t-toast .iconfont uni-image[data-v-5ec3be6c]{width:%?32?%}.t-toast .type-success[data-v-5ec3be6c]{color:#00c300}.t-toast .type-fail[data-v-5ec3be6c]{color:red}',
          "",
        ]),
        (t.exports = e);
    },
    ca00: function (t, e, a) {
      "use strict";
      a("7a82");
      var i = a("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.UploadImg =
          e.SearchPermissionsByOpenId =
          e.MerchantOrderSync =
          e.GetPartnerPermissions =
          e.CreateWxSignOrder =
          e.CompleteWxSignOrder =
            void 0);
      var n = i(a("6972")),
        r = n.default.sendAppGetToPayServer,
        o = "http://zhuli-pay-admin.whxinna.com";
      e.SearchPermissionsByOpenId = function (t) {
        return r("POST", o + "/webapi/v1/wx_sign_api/search_pernissions", t);
      };
      e.GetPartnerPermissions = function (t) {
        return r("POST", o + "/webapi/v1/wx_sign_api/partner_permissions", t);
      };
      e.CreateWxSignOrder = function (t) {
        return r("POST", o + "/webapi/v1/wx_sign_api/create_wx_sign_order", t);
      };
      e.CompleteWxSignOrder = function (t) {
        return r(
          "POST",
          o + "/webapi/v1/wx_sign_api/complete_wx_sign_order",
          t
        );
      };
      e.UploadImg = function (t) {
        return r("POST", o + "/webapi/v1/order/upload_img", t);
      };
      e.MerchantOrderSync = function (t) {
        return r("POST", o + "/webapi/v1/order/merchant_order_sync", t);
      };
    },
    cb29: function (t, e, a) {
      "use strict";
      var i = a("23e7"),
        n = a("81d5"),
        r = a("44d2");
      i({ target: "Array", proto: !0 }, { fill: n }), r("fill");
    },
    cb33: function (t, e, a) {
      "use strict";
      a("7a82");
      var i = a("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = i(a("0122"));
      a("a9e3"), a("e9c4");
      var r,
        o = i(a("2ca9")),
        s = {
          name: "tki-qrcode",
          props: {
            size: { type: Number, default: 200 },
            unit: { type: String, default: "upx" },
            show: { type: Boolean, default: !0 },
            val: { type: String, default: "" },
            background: { type: String, default: "#ffffff" },
            foreground: { type: String, default: "#000000" },
            pdground: { type: String, default: "#000000" },
            icon: { type: String, default: "" },
            iconSize: { type: Number, default: 40 },
            lv: { type: Number, default: 3 },
            onval: { type: Boolean, default: !1 },
            loadMake: { type: Boolean, default: !1 },
            usingComponents: { type: Boolean, default: !0 },
            showLoading: { type: Boolean, default: !0 },
            loadingText: { type: String, default: "二维码生成中" },
          },
          data: function () {
            return { result: "" };
          },
          methods: {
            _makeCode: function () {
              var t = this;
              this._empty(this.val)
                ? uni.showToast({
                    title: "二维码内容不能为空",
                    icon: "none",
                    duration: 2e3,
                  })
                : (r = new o.default({
                    context: t,
                    usingComponents: t.usingComponents,
                    showLoading: t.showLoading,
                    loadingText: t.loadingText,
                    text: t.val,
                    size: t.cpSize,
                    background: t.background,
                    foreground: t.foreground,
                    pdground: t.pdground,
                    correctLevel: t.lv,
                    image: t.icon,
                    imageSize: t.iconSize,
                    cbResult: function (e) {
                      t._result(e);
                    },
                  }));
            },
            _clearCode: function () {
              this._result(""), r.clear();
            },
            _saveCode: function () {
              "" != this.result &&
                uni.saveImageToPhotosAlbum({
                  filePath: this.result,
                  success: function () {
                    uni.showToast({
                      title: "二维码保存成功",
                      icon: "success",
                      duration: 2e3,
                    });
                  },
                });
            },
            _result: function (t) {
              (this.result = t), this.$emit("result", t);
            },
            _empty: function (t) {
              var e = (0, n.default)(t),
                a = !1;
              return (
                ("number" == e && "" == String(t)) || "undefined" == e
                  ? (a = !0)
                  : "object" == e
                  ? ("{}" != JSON.stringify(t) &&
                      "[]" != JSON.stringify(t) &&
                      null != t) ||
                    (a = !0)
                  : "string" == e
                  ? ("" != t &&
                      "undefined" != t &&
                      "null" != t &&
                      "{}" != t &&
                      "[]" != t) ||
                    (a = !0)
                  : "function" == e && (a = !1),
                a
              );
            },
          },
          watch: {
            size: function (t, e) {
              var a = this;
              t == e ||
                this._empty(t) ||
                ((this.cSize = t),
                this._empty(this.val) ||
                  setTimeout(function () {
                    a._makeCode();
                  }, 100));
            },
            val: function (t, e) {
              var a = this;
              this.onval &&
                (t == e ||
                  this._empty(t) ||
                  setTimeout(function () {
                    a._makeCode();
                  }, 0));
            },
          },
          computed: {
            cpSize: function () {
              return "upx" == this.unit ? uni.upx2px(this.size) : this.size;
            },
          },
          mounted: function () {
            var t = this;
            this.loadMake &&
              (this._empty(this.val) ||
                setTimeout(function () {
                  t._makeCode();
                }, 0));
          },
        };
      e.default = s;
    },
    cd79: function (t, e, a) {
      "use strict";
      var i = a("4de3"),
        n = a.n(i);
      n.a;
    },
    d1d5: function (t, e, a) {
      var i = a("254f");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("0f1f2e14", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d577: function (t, e, a) {
      var i = a("24fb"),
        n = a("1de5"),
        r = a("aedd"),
        o = a("4c16"),
        s = a("c57c"),
        c = a("9f9c"),
        l = a("d39a"),
        u = a("0567");
      e = i(!1);
      var d = n(r),
        f = n(o),
        h = n(s),
        p = n(c),
        g = n(l),
        m = n(u);
      e.push([
        t.i,
        '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.cashcoupon[data-v-da72bb62]{width:100%;padding:10px}.cashcoupon-wrapper[data-v-da72bb62]{width:100%;display:flex;background:#fff;border-radius:8px}.cashcoupon-content[data-v-da72bb62]{flex:1;padding:%?40?%;border-radius:8px 0 0 8px;background:#fff}.cashcoupon-title[data-v-da72bb62]{font-size:%?35?%;font-weight:700;display:inline-block;word-break:break-all}.cashcoupon-totalmoney[data-v-da72bb62]{font-size:%?40?%;color:#fc593b}.yuan-text[data-v-da72bb62]{font-size:%?20?%!important;color:#000}.cashcoupon-dec[data-v-da72bb62]{display:inline-block;margin:0 %?20?%;font-size:%?20?%;color:#ff8f30;border:1px solid #ff8f30;border-radius:%?10?%;padding:%?0?% %?20?%}.cashcoupon-tip[data-v-da72bb62],\r\n.cashcoupon-outsell-tip[data-v-da72bb62],\r\n.cashcoupon-buyed-tip[data-v-da72bb62],\r\n.cashcoupon-outcount-tip[data-v-da72bb62],\r\n.cashcoupon-outtime-tip[data-v-da72bb62]{position:relative;flex:0 0 100px;text-align:center;color:#fc593b;border-radius:0 8px 8px 0;background:#fff;display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;-webkit-box-orient:vertical;text-align:center}.cashcoupon-tip[data-v-da72bb62]::after,\r\n.cashcoupon-outsell-tip[data-v-da72bb62]::after,\r\n.cashcoupon-buyed-tip[data-v-da72bb62]::after,\r\n.cashcoupon-outcount-tip[data-v-da72bb62]::after,\r\n.cashcoupon-outtime-tip[data-v-da72bb62]::after{content:"";display:block;height:100%;width:100%;background:url(' +
          d +
          ") 100% 100% no-repeat;background-size:%?60?%;position:absolute;z-index:1;top:0;left:0}\r\n/* 已售罄 */.cashcoupon-outsell-tip[data-v-da72bb62]::after{background:url(" +
          f +
          ") 50% no-repeat!important;background-size:%?120?%!important}\r\n/* 超过限购数量 */.cashcoupon-buyed-tip[data-v-da72bb62]::after{background:url(" +
          h +
          ") 50% no-repeat!important;background-size:%?120?%!important}\r\n/* 已用完 */.cashcoupon-outcount-tip[data-v-da72bb62]::after{background:url(" +
          p +
          ") 50% no-repeat!important;background-size:%?120?%!important}\r\n/* 已过期 */.cashcoupon-outtime-tip[data-v-da72bb62]::after{background:url(" +
          g +
          ') 50% no-repeat!important;background-size:%?120?%!important}.cashcoupon-outsell-tip[data-v-da72bb62]::before,\r\n.cashcoupon-buyed-tip[data-v-da72bb62]::before,\r\n.cashcoupon-outcount-tip[data-v-da72bb62]::before,\r\n.cashcoupon-outtime-tip[data-v-da72bb62]::before{content:"";display:block;height:100%;width:100%;background:url(' +
          m +
          ') 100% 100% no-repeat;background-size:%?60?%;position:absolute;z-index:1;top:0;left:0}.cashcoupon-split-line[data-v-da72bb62]{position:relative;flex:0 0 0;border-left:1px solid #eee;margin:0 5px 0 3px;background:#fff}.cashcoupon-split-line[data-v-da72bb62]:before,\r\n.cashcoupon-split-line[data-v-da72bb62]:after{content:"";position:absolute;width:16px;height:8px;background:#f7f7f7;left:-9px;z-index:1}.cashcoupon-split-line[data-v-da72bb62]:before{border-radius:0 0 8px 8px;top:0}.cashcoupon-split-line[data-v-da72bb62]:after{border-radius:8px 8px 0 0;bottom:0}.cashcoupon-sellmoney[data-v-da72bb62]{font-size:12px;position:relative;top:%?10?%;\r\n\t/* text-decoration: line-through; */color:#9e9e9e}.cashcoupon-time[data-v-da72bb62]{font-size:12px;color:#9e9e9e;position:relative;top:%?20?%}.cashcoupon-pay-line[data-v-da72bb62]{height:33%;margin-top:2px;font-size:12px;color:#696969}.cashcoupon-pay-user[data-v-da72bb62]{height:33%}.cashcoupon-pay-user-btn[data-v-da72bb62]{border-radius:20px;margin-top:5px}.cashcoupon-userlimit[data-v-da72bb62]{position:relative;top:%?20?%;font-size:12px;color:#9e9e9e}.rechargenumber[data-v-da72bb62]{border:1px solid #ddd;margin:%?10?%;height:%?100?%;line-height:%?100?%;background-color:#fff;border-radius:%?10?%;white-space:nowrap;\r\n\t/* 超出的部分隐藏 */overflow:hidden;\r\n\t/*文字用省略号替代超出的部分 */text-overflow:ellipsis;padding:0 %?20?%}\r\n/* 充值金额选中样式 */.rechargenumberactive[data-v-da72bb62]{border:1px solid #ff001e}\r\n/* 优惠券过期 */.cashcouponouttime[data-v-da72bb62]{color:#9e9e9e!important}.recharge-all-container-view[data-v-da72bb62]{background-color:#f7f7f7;position:fixed;width:100%;overflow-y:scroll}.recharge-all-container-view .balanceRecharge[data-v-da72bb62]{margin:%?30?% %?30?% 0;padding:%?20?%;border-radius:%?20?%;background-color:#fff}.recharge-all-container-view .balanceRecharge .itemsWithDiscount[data-v-da72bb62]{width:100%}.recharge-all-container-view .balanceRecharge .rechargeNoDiscount[data-v-da72bb62]{position:relative;display:inline-block;width:100%;height:%?200?%;border-radius:%?10?%;background-color:#f8f0df;font-family:Arial;font-weight:400;color:#865922;line-height:%?160?%}.recharge-all-container-view .balanceRecharge .rechargeNoDiscount .noDiscountTextSmall[data-v-da72bb62]{font-size:%?30?%}.recharge-all-container-view .balanceRecharge .rechargeNoDiscount .noDiscountTextMiddle[data-v-da72bb62]{font-size:%?36?%}.recharge-all-container-view .balanceRecharge .rechargeNoDiscount .noDiscountTextBig[data-v-da72bb62]{font-size:%?46?%}.recharge-all-container-view .balanceRecharge .rechargeNoDiscount .rechargeNow[data-v-da72bb62]{position:absolute;bottom:0;left:0;width:100%;height:%?60?%;line-height:%?60?%;border-radius:0 0 %?10?% %?10?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#865922;background:linear-gradient(180deg,#f9dead,#deb773);letter-spacing:%?2?%}.recharge-all-container-view .balanceRecharge .rechargeNoDiscount .rechargeNow[data-v-da72bb62]::after{border:none}.recharge-all-container-view .balanceRecharge .rechargeWithDiscount[data-v-da72bb62]{display:flex;position:relative;width:100%;border-radius:%?10?%;background-color:#f8f0e0;margin-top:%?40?%}.recharge-all-container-view .balanceRecharge .rechargeWithDiscount[data-v-da72bb62]::before{content:"超值";position:absolute;top:%?-16?%;left:0;width:%?70?%;height:%?32?%;background:#ff5858;border-radius:%?20?% 0 %?20?% 0;font-size:%?20?%;font-family:PingFang SC;font-weight:500;color:#fff}.recharge-all-container-view .balanceRecharge .rechargeWithDiscount .discountLeft[data-v-da72bb62]{position:relative;flex:1;text-align:left;padding:%?20?% 0 %?20?% %?20?%}.recharge-all-container-view .balanceRecharge .rechargeWithDiscount .discountLeft[data-v-da72bb62]::before{content:"";position:absolute;right:%?-10?%;top:%?-10?%;width:%?20?%;height:%?20?%;background:#fff;border-radius:50%;z-index:9}.recharge-all-container-view .balanceRecharge .rechargeWithDiscount .discountLeft[data-v-da72bb62]::after{content:"";position:absolute;right:%?-10?%;bottom:%?-10?%;width:%?20?%;height:%?20?%;background:#fff;border-radius:50%;z-index:9}.recharge-all-container-view .balanceRecharge .rechargeWithDiscount .discountLeft uni-text[data-v-da72bb62]:nth-child(1){font-size:%?36?%;font-family:Arial;font-weight:400;color:#865922}.recharge-all-container-view .balanceRecharge .rechargeWithDiscount .discountLeft uni-text[data-v-da72bb62]:nth-child(2){display:inline-block;margin-left:%?18?%;border:%?1.5?% solid #b08f62;padding:%?7?% %?16?%;font-size:%?20?%;border-radius:%?6?%;font-family:PingFang SC;font-weight:500;color:#865922;vertical-align:text-bottom}.recharge-all-container-view .balanceRecharge .rechargeWithDiscount .discountLeft uni-text[data-v-da72bb62]:nth-child(3){display:block;margin-top:%?20?%;font-size:%?20?%;font-family:PingFang SC;font-weight:500;color:#af8756;overflow:hidden}.recharge-all-container-view .balanceRecharge .rechargeWithDiscount .rechargeNow[data-v-da72bb62]{position:relative;width:%?140?%;height:%?170?%;background:linear-gradient(90deg,#f9dead,#deb773);border-radius:%?10?%;font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#865922;padding:%?40?% %?15?% %?10?% %?25?%;letter-spacing:%?6?%}.recharge-all-container-view .balanceRecharge .rechargeWithDiscount .rechargeNow[data-v-da72bb62]::after{border:none}.buyWithCoupon[data-v-da72bb62]{padding:0 %?30?%;margin:%?40?% 0 %?20?% 0;font-size:%?36?%;font-family:PingFang SC;font-weight:700}.cashcoupons[data-v-da72bb62]{margin:0 %?30?% %?20?%}.cashcoupons .cashcoupon-wrapper[data-v-da72bb62]{background-color:#f0ebdf}.cashcoupons .cashcoupon-wrapper .cashcoupon-content[data-v-da72bb62]{padding:%?22?% 0 %?18?% %?26?%;background-color:#f0ebdf}.cashcoupons .cashcoupon-wrapper .cashcoupon-content .cashcoupon-title[data-v-da72bb62]{font-size:%?34?%;word-break:break-all}.cashcoupons .cashcoupon-wrapper .cashcoupon-content .cashcoupon-dec[data-v-da72bb62]{vertical-align:text-top}.cashcoupons .cashcoupon-wrapper .cashcoupon-content .cashcoupon-userlimit[data-v-da72bb62],\r\n.cashcoupons .cashcoupon-wrapper .cashcoupon-content .cashcoupon-sellmoney[data-v-da72bb62]{font-size:%?20?%}.cashcoupons .cashcoupon-wrapper .cashcoupon-content .cashcoupon-userlimit[data-v-da72bb62]{margin-bottom:%?10?%}.cashcoupons .cashcoupon-split-line[data-v-da72bb62]{border-color:#d4c4a5}.cashcoupons .cashcoupon-totalmoney[data-v-da72bb62]{font-size:%?48?%;font-family:PingFang SC;font-weight:700;text-align:right}.cashcoupons .cashcoupon-totalmoney .prePrice[data-v-da72bb62]{display:block;font-size:%?22?%;font-family:PingFang SC;font-weight:500;color:#af8756;text-decoration:line-through}.cashcoupons .cashcoupon-tip[data-v-da72bb62],\r\n.cashcoupons .cashcoupon-outsell-tip[data-v-da72bb62]{background-color:#f0ebdf}\r\n/* 已售罄 */.cashcoupon-outsell-tip[data-v-da72bb62]::after{background-size:%?100?%!important;top:%?-20?%}.cashcoupon-outsell-tip > .text-container[data-v-da72bb62]{position:absolute;bottom:%?5?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100%;font-size:%?30?%}.cashcoupon-outsell-tip > .text-container uni-text[data-v-da72bb62]{color:#9e9e9e}.limit-count-tip[data-v-da72bb62]{position:relative;left:%?10?%}.action-button-container[data-v-da72bb62]{padding:0 %?30?%;position:fixed;width:100%}.advertising[data-v-da72bb62]{position:fixed;right:0;top:%?800?%;width:%?200?%;height:%?200?%}.advertising uni-image[data-v-da72bb62]{width:%?200?%;height:%?200?%}.advertising .send[data-v-da72bb62]{font-weight:600;font-size:%?32?%;text-align:center}.adView[data-v-da72bb62]{margin:%?20?% 0 %?20?% 0}',
        "",
      ]),
        (t.exports = e);
    },
    d76c: function (t, e, a) {
      "use strict";
      var i = a("d1d5"),
        n = a.n(i);
      n.a;
    },
    dd77: function (t, e, a) {
      "use strict";
      var i = a("e9c5"),
        n = a.n(i);
      n.a;
    },
    e374: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("3cb2"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = n.a;
    },
    e5c8: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("b11f"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = n.a;
    },
    e9c5: function (t, e, a) {
      var i = a("d577");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("f0ebccb4", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    ea0c: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("b4a8"),
        n = a("89e4");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      a("d76c");
      var o = a("f0c5"),
        s = Object(o["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "720983a0",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    ec02: function (t, e, a) {
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
            {
              staticClass: "history-item",
              style: t.GetDeviceInfo.background,
              on: {
                click: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.onClick.apply(void 0, arguments);
                },
              },
            },
            [
              a(
                "v-uni-view",
                { staticClass: "history-item_image" },
                [a("v-uni-image", { attrs: { src: t.GetDeviceInfo.image } })],
                1
              ),
              a(
                "v-uni-view",
                { staticClass: "history-item_info" },
                [
                  a("v-uni-view", { staticClass: "title" }, [
                    t._v(t._s(t.device.projectname)),
                  ]),
                  a(
                    "v-uni-view",
                    { staticClass: "location" },
                    [
                      a("v-uni-image", {
                        attrs: {
                          src: "/static/history-device-images/location.png",
                        },
                      }),
                      a("v-uni-view", { staticClass: "address-view" }, [
                        t._v(t._s(t.device.address)),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              a(
                "v-uni-view",
                { staticClass: "history-item_action" },
                [
                  a("v-uni-image", {
                    attrs: { src: "/static/history-device-images/arrow.png" },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [];
    },
    eeab: function (t, e, a) {
      "use strict";
      (function (t) {
        a("7a82");
        var i = a("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          a("e9c4"),
          a("a434"),
          a("14d9"),
          a("d3b7"),
          a("159b"),
          a("d401"),
          a("25f0"),
          a("a9e3"),
          a("99af"),
          a("d81d");
        var n = i(a("f3f3")),
          r = i(a("f07e")),
          o = i(a("c964")),
          s = i(a("6972")),
          c = i(a("5cd9")),
          l = i(a("fea5")),
          u = i(a("ea0c")),
          d = i(a("8d75")),
          f = i(a("8560")),
          h = i(a("f753")),
          p = i(a("53be")),
          g = i(a("0aa8")),
          m = a("05fe"),
          v = a("d5ff"),
          b = (i(a("e143")), a("26cb"), a("0de3e")),
          w = a("f5cd"),
          y =
            (a("1faf"),
            {
              components: {
                Home: u.default,
                Recharge: d.default,
                Kefu: h.default,
                Zluser: p.default,
                DiscoveryContent: f.default,
                PaymentCode: g.default,
              },
              data: function () {
                return {
                  userdata: this.$store.state.user,
                  project: this.$store.state.project,
                  currertab: 0,
                  tablist: [
                    { text: "首页", icon: "cuIcon-home" },
                    { text: "商城", icon: "cuIcon-cart" },
                    { text: "", icon: "" },
                    { text: "客服", icon: "cuIcon-service" },
                    { text: "我的", icon: "cuIcon-my" },
                  ],
                  devicelist: [],
                  consumingflagobj: {
                    xiyuconsumingflag: !1,
                    xiyiconsumingflag: !1,
                    yinshuiconsumingflag: !1,
                    chuifengconsumingflag: !1,
                  },
                  scanedflag: !1,
                  jumpPageOptions: {},
                  IsShowDiscover: !1,
                  ModalViewObjs: [],
                  placement1: null,
                  displayPlacement1Flag: !0,
                  onLoadParams: null,
                };
              },
              watch: {
                currertab: function (e, a) {
                  var i = this;
                  switch ((t.log("-----tab页触发-------" + e), e)) {
                    case 0:
                      (0, m.createHomeBottomNativeAd)(this);
                      break;
                    case 1:
                      break;
                    case 3:
                      break;
                    case 4:
                      setTimeout(function () {
                        i.$refs.zluser.urllistcontentstyle();
                      }, 50);
                      break;
                  }
                  e > 0 && (0, m.closeHomeBottomNativeAd)(this);
                },
                "$store.state.adPlacement": {
                  handler: function () {
                    this.handleAdPlacement();
                  },
                  deep: !0,
                  immediate: !0,
                },
              },
              onLoad: function (t) {
                var e = this;
                return (0, o.default)(
                  (0, r.default)().mark(function a() {
                    return (0, r.default)().wrap(function (a) {
                      while (1)
                        switch ((a.prev = a.next)) {
                          case 0:
                            (e.onLoadParams = t),
                              uni.onNetworkStatusChange(function (t) {
                                "none" !== t.networkType &&
                                  e.loadCommonHelperLabel();
                              }),
                              e.$nextTick(function () {
                                (0, m.HandleHomeOnlaunch)(e.onLoadParams, e);
                              });
                          case 3:
                          case "end":
                            return a.stop();
                        }
                    }, a);
                  })
                )();
              },
              onShow: function (t) {
                var e = this;
                return (0, o.default)(
                  (0, r.default)().mark(function a() {
                    return (0, r.default)().wrap(function (a) {
                      while (1)
                        switch ((a.prev = a.next)) {
                          case 0:
                            l.default.closeBluetoothAdapter(),
                              zl.system.onBackPress(function () {
                                return { allow: !1 };
                              }),
                              (0, m.HandleHomeOnShow)(t, e);
                          case 3:
                          case "end":
                            return a.stop();
                        }
                    }, a);
                  })
                )();
              },
              onHide: function (t) {
                (0, m.HandleHomeOnHide)(t, this);
              },
              computed: {
                IsDisableDevUseSwitch: function () {
                  var t = !1,
                    e = null;
                  return (
                    s.default.isNullOrEmpty(this.$store.state.project) ||
                      (e = this.$store.state.project.projectswitch),
                    s.default.isNullOrEmpty(e) ||
                      0 != e.bath_enable ||
                      0 != e.laundry_enable ||
                      0 != e.drinking_enable ||
                      0 != e.blower_enable ||
                      0 != e.dryer_enable ||
                      0 != e.shoe_enable ||
                      (t = !0),
                    t
                  );
                },
                systemSettings: function () {
                  return this.$store.state.project.projectswitch || {};
                },
                CustomBar: function () {
                  return this.$store.state.SystemInfo.CustomBar;
                },
                StatusBar: function () {
                  return this.$store.state.SystemInfo.StatusBar;
                },
                WinHeight: function () {
                  return this.$store.state.SystemInfo.WinHeight;
                },
                isShowAd: function () {
                  return this.$store.state.isShowAd;
                },
              },
              methods: {
                fixFooterStyle: function () {
                  this.$nextTick(function () {
                    var t = zl.runtime.navigationBarHeight || 0,
                      e = document.getElementById("footer"),
                      a = document.getElementById("border-image");
                    (e.style.paddingBottom = t + "px"),
                      (a.style.bottom = t + "px");
                    for (
                      var i = document.getElementsByClassName("viewcontainer"),
                        n = 0;
                      n < i.length;
                      n++
                    ) {
                      var r = i[n];
                      r.style.paddingBottom = t + "px";
                    }
                  });
                },
                handleAdPlacement: function () {
                  var t = this;
                  this.placement1 = null;
                  var e = this.$store.state.adPlacement;
                  if (e && !(e.length <= 0))
                    for (var a = 0; a < e.length; a++) {
                      var i = e[a].enum_ad_placement,
                        n = c.default.EnumAdPlacementReverse;
                      i == n["首页-弹框"] &&
                        ((this.placement1 = e[a]),
                        setTimeout(function () {
                          t.displayPlacement1Flag = !1;
                        }, 500));
                    }
                },
                WaitNavigatorToConsume: function () {
                  var t = this;
                  return (0, o.default)(
                    (0, r.default)().mark(function e() {
                      var a, i;
                      return (0, r.default)().wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), s.default.RefreshUserinfo();
                            case 2:
                              return (
                                (a = e.sent),
                                (t.userdata = JSON.parse(JSON.stringify(a))),
                                (e.next = 6),
                                t.GetContentAndConfig()
                              );
                            case 6:
                              return (
                                (e.next = 8), t.$refs.home.GetHomeSilderImg()
                              );
                            case 8:
                              return (e.next = 10), (0, w.GetServerNotice)();
                            case 10:
                              return (
                                (i = e.sent),
                                t.CompareLvnoticeWithServer(i, !1),
                                t.SetQueueDefaultStatus(),
                                (e.next = 15),
                                t.ClickDevToConsume(t.jumpPageOptions.device_id)
                              );
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                selecttab: function (t) {
                  0 !== this.currertab &&
                    0 === t &&
                    (0, v.InitZcardModalContent)(),
                    (this.currertab = t);
                },
                OnShowRefreshUserInfo: function (e, a) {
                  var i = this;
                  return (0, o.default)(
                    (0, r.default)().mark(function a() {
                      var n, o, c, l, u, d;
                      return (0, r.default)().wrap(
                        function (a) {
                          while (1)
                            switch ((a.prev = a.next)) {
                              case 0:
                                if (
                                  ((a.prev = 0),
                                  (n = i),
                                  JSON.parse(
                                    JSON.stringify(i.$store.state.user)
                                  ),
                                  (i.project = JSON.parse(
                                    JSON.stringify(i.$store.state.project)
                                  )),
                                  i.$store.getters.hasLogin &&
                                    i.$store.getters.hasBindProject)
                                ) {
                                  a.next = 6;
                                  break;
                                }
                                return a.abrupt("return");
                              case 6:
                                return (
                                  (a.next = 8), s.default.RefreshUserinfo()
                                );
                              case 8:
                                if (
                                  ((o = a.sent),
                                  (n.userdata = o),
                                  n.GetStaffConsumingOrder(),
                                  n.$refs.home.GetHomeSilderImg(),
                                  (c = !0),
                                  t.log(
                                    "-------------refreshConfig----------------",
                                    e
                                  ),
                                  !e)
                                ) {
                                  a.next = 23;
                                  break;
                                }
                                return (a.next = 17), n.GetContentAndConfig();
                              case 17:
                                (l = a.sent),
                                  t.log(
                                    "----------------GetContentAndConfig-------------------",
                                    l
                                  ),
                                  (c = !l.hasCompleteInfo),
                                  i.$store.commit("SetInit", c),
                                  (u = s.default.CheckStaffConsumePwdStatus(
                                    i.jumpPageOptions
                                  )),
                                  u.result &&
                                    i.$store.state.msgQueue.add(
                                      u.CallBack.bind(i)
                                    );
                              case 23:
                                if (e || 0 !== i.currertab) {
                                  a.next = 26;
                                  break;
                                }
                                return (
                                  (a.next = 26), (0, v.InitZcardModalContent)(n)
                                );
                              case 26:
                                if (
                                  (c &&
                                    "consume" == n.jumpPageOptions.jumpTo &&
                                    n.ClickDevToConsume(
                                      n.jumpPageOptions.device_id
                                    ),
                                  !i.$store.state.HomeViewNoticeDialogFlag)
                                ) {
                                  a.next = 30;
                                  break;
                                }
                                return (
                                  t.log(
                                    "----------------app单次生命周期内只请求一次系统通知-------------------"
                                  ),
                                  a.abrupt("return")
                                );
                              case 30:
                                return (a.next = 32), (0, w.GetServerNotice)();
                              case 32:
                                (d = a.sent),
                                  n.CompareLvnoticeWithServer(d, !0),
                                  t.log(
                                    "----------------加载消息完成-------------------"
                                  ),
                                  (a.next = 41);
                                break;
                              case 37:
                                (a.prev = 37),
                                  (a.t0 = a["catch"](0)),
                                  t.log(a.t0),
                                  ("请重新登录" != a.t0 &&
                                    "服务器开小差了~~" != a.t0) ||
                                    s.default.HandleLoginTimeout(a.t0);
                              case 41:
                                return (
                                  (a.prev = 41),
                                  e && (0, v.InitModalContent)(i),
                                  a.finish(41)
                                );
                              case 44:
                              case "end":
                                return a.stop();
                            }
                        },
                        a,
                        null,
                        [[0, 37, 41, 44]]
                      );
                    })
                  )();
                },
                OpenScan: function () {
                  var t = this;
                  this.scanedflag = !0;
                  var e = s.default.checklogin();
                  if (e)
                    return this.IsDisableDevUseSwitch
                      ? uni.showToast({
                          title: "暂未开放设备使用",
                          icon: "none",
                        })
                      : void s.default.StartScan(function (e, a) {
                          return (
                            setTimeout(function () {
                              t.scanedflag = !1;
                            }, 500),
                            a
                              ? uni.showToast({
                                  title: a,
                                  position: "center",
                                  icon: "none",
                                })
                              : (0, m.ParseScanResult)(e)
                          );
                        });
                },
                GetHistroyDevice: function () {
                  if (!s.default.isNullOrEmpty(this.$store.state.user)) {
                    var t = this.$store.state.HistoryDevice;
                    s.default.isNullOrEmpty(t) || 0 == t.length
                      ? (this.devicelist = [])
                      : (this.devicelist = t);
                  }
                },
                ClickDevToConsume: function (t) {
                  var e = this;
                  return (0, o.default)(
                    (0, r.default)().mark(function a() {
                      var i;
                      return (0, r.default)().wrap(function (a) {
                        while (1)
                          switch ((a.prev = a.next)) {
                            case 0:
                              if (((i = s.default.checklogin()), i)) {
                                a.next = 3;
                                break;
                              }
                              return a.abrupt("return");
                            case 3:
                              return (
                                (e.jumpPageOptions = {}),
                                (a.next = 6),
                                s.default.getdevinfobyidormac(
                                  e.$store.state.project.server_addr +
                                    s.default.API_PATH.getdevicebyid,
                                  { id: t },
                                  "HistroyDeviceConsume"
                                )
                              );
                            case 6:
                            case "end":
                              return a.stop();
                          }
                      }, a);
                    })
                  )();
                },
                GetStaffConsumingOrder: function () {
                  var t = this;
                  return (0, o.default)(
                    (0, r.default)().mark(function e() {
                      var a, i, n;
                      return (0, r.default)().wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a = t),
                                !s.default.isNullOrEmpty(a.userdata) &&
                                  !s.default.isNullOrEmpty(a.project))
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              if (
                                !s.default.isNullOrEmpty(a.userdata.detailinfo)
                              ) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return");
                            case 5:
                              return (
                                (i =
                                  c.default.GetAppointmentUseDevnetType(
                                    "consume"
                                  )),
                                (e.next = 8),
                                (0, b.GetStaffConsumeing)(i)
                              );
                            case 8:
                              (n = e.sent), a.HandleConsumingOrder(n);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                HandleConsumingOrder: function (t) {
                  if (
                    ((this.consumingflagobj.xiyuconsumingflag = !1),
                    (this.consumingflagobj.xiyiconsumingflag = !1),
                    (this.consumingflagobj.yinshuiconsumingflag = !1),
                    (this.consumingflagobj.chuifengconsumingflag = !1),
                    (this.consumingflagobj.hongganconsumingflag = !1),
                    (this.consumingflagobj.xixieconsumingflag = !1),
                    0 != t.length && !s.default.isNullOrEmpty(t))
                  )
                    for (var e = 0; e < t.length; e++)
                      switch (t[e].consume_type) {
                        case "bath":
                          this.consumingflagobj.xiyuconsumingflag = !0;
                          break;
                        case "laundry":
                          this.consumingflagobj.xiyiconsumingflag = !0;
                          break;
                        case "drinking":
                          this.consumingflagobj.yinshuiconsumingflag = !0;
                          break;
                        case "blower":
                          this.consumingflagobj.chuifengconsumingflag = !0;
                          break;
                        case "dryer":
                          this.consumingflagobj.hongganconsumingflag = !0;
                          break;
                        case "shoe":
                          this.consumingflagobj.xixieconsumingflag = !0;
                          break;
                        default:
                          break;
                      }
                },
                GetContentAndConfig: function () {
                  var e = this;
                  return (0, o.default)(
                    (0, r.default)().mark(function a() {
                      var i, o;
                      return (0, r.default)().wrap(function (a) {
                        while (1)
                          switch ((a.prev = a.next)) {
                            case 0:
                              if (
                                ((i = { hasCompleteInfo: !1 }),
                                (o = e),
                                e.$store.getters.hasLogin &&
                                  e.$store.getters.hasBindProject)
                              ) {
                                a.next = 4;
                                break;
                              }
                              return a.abrupt("return", i);
                            case 4:
                              try {
                                1 !=
                                  o.$store.state.project.projectswitch
                                    .edituserinfo_enable ||
                                  e.$store.getters.hasCompleteInfo ||
                                  (e.toPage({
                                    url: "/pagesA/userinfo/userinfo?scenetype=passive",
                                    params: (0, n.default)(
                                      {},
                                      e.jumpPageOptions
                                    ),
                                    type: "redirect",
                                  }),
                                  (i.hasCompleteInfo = !0)),
                                  o.InitTabTwoContent(),
                                  o.queryStaffPendingOrder(),
                                  o.queryStaffLastConsumeOrder(!1);
                              } catch (r) {
                                t.log(r);
                              }
                              return a.abrupt("return", i);
                            case 6:
                            case "end":
                              return a.stop();
                          }
                      }, a);
                    })
                  )();
                },
                CompareLvnoticeWithServer: function (t, e) {
                  var a = [],
                    i = this.$store.state.project.nodisplaynotice;
                  if (s.default.isNullOrEmpty(i)) a = t;
                  else
                    for (var n = 0; n < t.length; n++) {
                      for (var r = !1, o = 0; o < i.length; o++)
                        i[o].noticeid == t[n].id &&
                          i[o].noticetime == t[n].valid_date &&
                          (r = !0),
                          i[o].noticeid == t[n].id &&
                            i[o].display_times != t[n].display_times &&
                            ((r = !1),
                            (t[n].showcount = i[o].showcount),
                            t[n].showcount >= t[n].display_times &&
                              (t[n].showcount = 0),
                            i.splice(o, 1));
                      r || a.push(t[n]);
                    }
                  var c = JSON.parse(JSON.stringify(this.$store.state.project)),
                    l = c.notice || [];
                  a.forEach(function (t, e) {
                    s.default.isNullOrEmpty(t.showcount) && (t.showcount = 0),
                      l.forEach(function (e, a) {
                        t.id == e.id && (t.showcount = e.showcount),
                          "-1" == e.display_times.toString() &&
                            Number(t.display_times) > 0 &&
                            t.id == e.id &&
                            (t.showcount = 0);
                      });
                  }),
                    (c.notice = a),
                    (c.nodisplaynotice = i),
                    (this.project = c),
                    this.$store.commit("SetProjectData", c),
                    a.length > 0 && e && this.$refs.home.getneedshownotice(a);
                },
                queryStaffLastConsumeOrder: function (e) {
                  var a = this;
                  return (0, o.default)(
                    (0, r.default)().mark(function i() {
                      var n, o, c, l, u, d, f, h;
                      return (0, r.default)().wrap(
                        function (i) {
                          while (1)
                            switch ((i.prev = i.next)) {
                              case 0:
                                if (
                                  !a.$store.state.HomeQueryLastOrderFlag ||
                                  e
                                ) {
                                  i.next = 2;
                                  break;
                                }
                                return i.abrupt("return");
                              case 2:
                                return (
                                  (i.prev = 2),
                                  (i.next = 5),
                                  (0, b.GetStaffLastConsumeRecord)()
                                );
                              case 5:
                                if (
                                  ((n = i.sent),
                                  uni.hideLoading(),
                                  5 != n.consume_mode)
                                ) {
                                  i.next = 9;
                                  break;
                                }
                                return i.abrupt("return");
                              case 9:
                                if (a.CheckEquallyView()) {
                                  i.next = 11;
                                  break;
                                }
                                return i.abrupt("return");
                              case 11:
                                if (
                                  "prepare_pay" != n.status &&
                                  "waiting_pay" != n.status
                                ) {
                                  i.next = 32;
                                  break;
                                }
                                if (
                                  ((o = "appointment"),
                                  "consume" == n.act && (o = "consume"),
                                  !e)
                                ) {
                                  i.next = 21;
                                  break;
                                }
                                return (
                                  a.$store.commit(
                                    "SetHomeQueryLastOrderFlag",
                                    !1
                                  ),
                                  (c = {
                                    order: {
                                      pay_money: n.pay_money,
                                      order_id: n.order_id,
                                      create_at: n.create_at,
                                    },
                                  }),
                                  5 == n.consume_mode &&
                                    ((c = [
                                      {
                                        pay_money: n.pay_money,
                                        order_id: n.order_id,
                                        create_at: n.create_at,
                                      },
                                    ]),
                                    (o = "paycharges")),
                                  i.abrupt(
                                    "return",
                                    uni.navigateTo({
                                      url: "/pages/immediatepaymentorder/immediatepaymentorder?launchtype="
                                        .concat(o, "&parameterobj=")
                                        .concat(
                                          encodeURIComponent(JSON.stringify(c))
                                        ),
                                    })
                                  )
                                );
                              case 21:
                                (l = !0),
                                  (u = "放弃支付"),
                                  (d = function () {
                                    a.$store.state.msgQueue.emitNext(),
                                      (0, b.CancelImmediatePaymentOrder)(
                                        n.order_id
                                      );
                                  }),
                                  "前去支付",
                                  (f = function () {
                                    return (
                                      s.default.showloading("正在确认中..."),
                                      a.$store.state.msgQueue.emitNext(),
                                      a.queryStaffLastConsumeOrder(!0)
                                    );
                                  }),
                                  "paycharges" == o &&
                                    ((l = !1), (u = ""), (d = null)),
                                  a.$store.commit(
                                    "SetHomeQueryLastOrderFlag",
                                    !0
                                  ),
                                  (h = function () {
                                    s.default.showalert(
                                      "提示",
                                      "你有一笔待支付的订单,是否前去支付？",
                                      d,
                                      f,
                                      l,
                                      u,
                                      "前去支付"
                                    );
                                  }),
                                  a.$store.state.msgQueue.add(h.bind(a));
                              case 30:
                                i.next = 33;
                                break;
                              case 32:
                                e && s.default.showalert("提示", "订单已失效");
                              case 33:
                                i.next = 38;
                                break;
                              case 35:
                                (i.prev = 35),
                                  (i.t0 = i["catch"](2)),
                                  t.log(i.t0);
                              case 38:
                              case "end":
                                return i.stop();
                            }
                        },
                        i,
                        null,
                        [[2, 35]]
                      );
                    })
                  )();
                },
                queryStaffPendingOrder: function () {
                  var t = this;
                  return (0, o.default)(
                    (0, r.default)().mark(function e() {
                      var a, i, n, o, c, l, u;
                      return (0, r.default)().wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t.$store.state.HomeQueryPendingOrderFlag) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              return (e.next = 4), (0, b.QueryPendingOrder)();
                            case 4:
                              if (((a = e.sent), (i = a.length), 0 != i)) {
                                e.next = 8;
                                break;
                              }
                              return e.abrupt("return");
                            case 8:
                              if (t.CheckEquallyView()) {
                                e.next = 10;
                                break;
                              }
                              return e.abrupt("return");
                            case 10:
                              for (n = [], o = [], c = 0; c < a.length; c++)
                                "finished" == a[c].order_status
                                  ? n.push(a[c])
                                  : o.push(a[c]);
                              o.length > 0 &&
                                ((l = function () {
                                  s.default.showalert(
                                    "提示",
                                    "你有".concat(
                                      o.length,
                                      "笔待支付的订单,请前去支付"
                                    ),
                                    null,
                                    function () {
                                      return (
                                        t.$store.state.msgQueue.emitNext(),
                                        uni.navigateTo({
                                          url: "/pages/immediatepaymentorder/immediatepaymentorder?launchtype=paycharges&parameterobj=".concat(
                                            encodeURIComponent(
                                              JSON.stringify(o)
                                            )
                                          ),
                                        })
                                      );
                                    },
                                    !1,
                                    "",
                                    "前去支付"
                                  );
                                }),
                                t.$store.state.msgQueue.add(l.bind(t))),
                                n.length > 0 &&
                                  ((u = function () {
                                    s.default.showalert(
                                      "提示",
                                      "你有一笔系统自动取消的订单,是否前去查看详情?",
                                      function () {
                                        t.$store.state.msgQueue.emitNext(),
                                          (0, b.RemovePendingOrder)(
                                            n[0].order_id
                                          );
                                      },
                                      function () {
                                        t.SetQueueDefaultStatus(),
                                          (0, b.RemovePendingOrder)(
                                            n[0].order_id
                                          );
                                        var e =
                                          "/pagesA/billdetail/billdetail?billid=" +
                                          n[0].order_id +
                                          "&type=consume";
                                        uni.navigateTo({ url: e });
                                      },
                                      !0,
                                      "不再提醒",
                                      "立即查看"
                                    );
                                  }),
                                  t.$store.state.msgQueue.add(u.bind(t))),
                                t.$store.commit(
                                  "SetHomeQueryPendingOrderFlag",
                                  !0
                                );
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                CheckEquallyView: function () {
                  var t = getCurrentPages(),
                    e = t[t.length - 1];
                  return !e || "pages/index/index" == e.route;
                },
                InitTabTwoContent: function () {
                  try {
                    if (s.default.isNullOrEmpty(this.$store.state.project))
                      return;
                    if (
                      s.default.isNullOrEmpty(
                        this.$store.state.project.projectswitch
                      )
                    )
                      return;
                    1 !=
                      this.$store.state.project.projectswitch
                        .discover_content_enable &&
                    this.$store.getters.rechargeDisplayEnable
                      ? ((this.IsShowDiscover = !1),
                        (this.tablist[1] = {
                          text: "商城",
                          icon: "cuIcon-cart",
                        }))
                      : ((this.IsShowDiscover = !0),
                        (this.tablist[1] = {
                          text: "发现",
                          icon: "iconfont icondiscover cuIcon-icondiscover",
                        }));
                  } catch (e) {
                    t.log(e);
                  }
                },
                SetQueueDefaultStatus: function () {
                  this.$store.commit("SetZcardNoticeDisplayFlag", !1),
                    (this.$refs.home.noticemodal.showflag = !1),
                    this.ModalViewObjs.map(function (t) {
                      t && t.close();
                    }),
                    this.$store.state.msgQueue.clear(!0);
                },
                loadCommonHelperLabel: function () {
                  var t = this;
                  this.$nextTick(function () {
                    setTimeout(function () {
                      t.$refs.home.GetHomeSilderImg(),
                        t.$refs.kefu &&
                          t.$refs.kefu.commonHelpLabelList.length <= 0 &&
                          t.$refs.kefu.loadCommonHelperLabel();
                    }, 500);
                  });
                },
              },
            });
        e.default = y;
      }).call(this, a("5a52")["default"]);
    },
    ef75: function (t, e, a) {
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
            { staticStyle: { height: "100%", "overflow-y": "scroll" } },
            [
              a(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !1 } },
                [
                  a(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("客服")]
                  ),
                ],
                2
              ),
              a(
                "v-uni-view",
                { ref: "top-container", attrs: { id: "top-container" } },
                [
                  a(
                    "v-uni-view",
                    {
                      staticClass: "bg-white",
                      staticStyle: { padding: "20upx 40upx 20upx 40upx" },
                    },
                    [
                      a(
                        "v-uni-view",
                        { staticClass: "kefu-info" },
                        [
                          a(
                            "v-uni-view",
                            { staticClass: "kefuimgcontainer" },
                            [
                              a("v-uni-image", {
                                staticClass: "kefuimg",
                                staticStyle: { width: "100%", height: "100%" },
                                attrs: {
                                  src: "/static/kefu_top.png",
                                  mode: "aspectFit",
                                },
                              }),
                            ],
                            1
                          ),
                          a(
                            "v-uni-view",
                            { staticClass: "desccontainer" },
                            [
                              a("v-uni-text", { staticClass: "time-text" }, [
                                t._v(t._s(t.opentime)),
                              ]),
                              a("v-uni-view", { staticClass: "desc-text" }, [
                                t._v("其他问题,请联系客服"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      a(
                        "v-uni-view",
                        { staticClass: "call-info" },
                        [
                          a(
                            "v-uni-view",
                            { staticClass: "callnumbercontainer" },
                            [
                              a("v-uni-image", {
                                staticClass: "kefuimg",
                                attrs: {
                                  src: "/static/kefucall.png",
                                  mode: "aspectFit",
                                },
                              }),
                              a("v-uni-view", { staticClass: "phone-text" }, [
                                t._v(t._s(t._f("showCustomerNumber")(t.phone))),
                              ]),
                            ],
                            1
                          ),
                          a(
                            "v-uni-view",
                            { staticClass: "callbtncontainer" },
                            [
                              a(
                                "v-uni-button",
                                {
                                  staticClass: "cu-btn round text-white",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.callkefu();
                                    },
                                  },
                                },
                                [t._v("联系客服")]
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
                    {
                      staticClass: "bg-white",
                      staticStyle: {
                        padding: "20upx 40upx 20upx 40upx",
                        "margin-top": "20upx",
                      },
                    },
                    [
                      a(
                        "v-uni-view",
                        { staticClass: "menu-action-title" },
                        [
                          a("v-uni-view", { staticClass: "title-icon" }),
                          a("v-uni-view", { staticClass: "title-text" }, [
                            t._v("自助服务"),
                          ]),
                        ],
                        1
                      ),
                      a(
                        "v-uni-view",
                        {
                          staticClass: "bg-white",
                          staticStyle: { "padding-top": "20upx" },
                        },
                        [
                          a(
                            "v-uni-view",
                            { staticClass: "flex" },
                            [
                              a(
                                "v-uni-view",
                                {
                                  staticClass: "radius help-item",
                                  staticStyle: {
                                    "margin-right": "30upx",
                                    "margin-left": "0px",
                                  },
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.navigatetourl("zhinan");
                                    },
                                  },
                                },
                                [
                                  a("v-uni-image", {
                                    staticClass: "self-help-grid-img",
                                    attrs: { src: "/static/user_help.png" },
                                  }),
                                  a(
                                    "div",
                                    { staticClass: "text-bold action-title" },
                                    [t._v("使用指南")]
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                {
                                  staticClass: "radius help-item",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.navigatetourl("tousu");
                                    },
                                  },
                                },
                                [
                                  a("v-uni-image", {
                                    staticClass: "self-help-grid-img",
                                    attrs: { src: "/static/complaint.png" },
                                  }),
                                  a(
                                    "div",
                                    { staticClass: "text-bold action-title" },
                                    [t._v("订单投诉")]
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                {
                                  staticClass: "radius help-item",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.navigatetourl("baoxiu");
                                    },
                                  },
                                },
                                [
                                  a("v-uni-image", {
                                    staticClass: "self-help-grid-img",
                                    attrs: { src: "/static/device_repair.png" },
                                  }),
                                  a(
                                    "div",
                                    { staticClass: "text-bold action-title" },
                                    [t._v("设备报修")]
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
                  a(
                    "v-uni-view",
                    {
                      staticClass: "bg-white",
                      staticStyle: {
                        padding: "20upx 20upx 0 40upx",
                        "margin-top": "20upx",
                      },
                    },
                    [
                      a(
                        "v-uni-view",
                        { staticClass: "titlecontainer cu-bar cu-mybar" },
                        [
                          a(
                            "v-uni-view",
                            { staticClass: "menu-action-title" },
                            [
                              a("v-uni-view", { staticClass: "title-icon" }),
                              a("v-uni-view", { staticClass: "title-text" }, [
                                t._v("猜你想问"),
                              ]),
                            ],
                            1
                          ),
                          a(
                            "v-uni-view",
                            {
                              staticClass: "kf-search-form round cu-search",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.linktosearchview.apply(void 0, arguments);
                                },
                              },
                            },
                            [
                              a("v-uni-text", { staticClass: "cuIcon-search" }),
                              a("v-uni-input", {
                                attrs: {
                                  type: "text",
                                  placeholder: "搜索",
                                  disabled: "true",
                                  "confirm-type": "search",
                                },
                                on: {
                                  input: function (e) {
                                    (arguments[0] = e = t.$handleEvent(e)),
                                      t.searchCommonHelperList.apply(
                                        void 0,
                                        arguments
                                      );
                                  },
                                  confirm: function (e) {
                                    (arguments[0] = e = t.$handleEvent(e)),
                                      t.searchCommonHelperList.apply(
                                        void 0,
                                        arguments
                                      );
                                  },
                                },
                                model: {
                                  value: t.searchStr,
                                  callback: function (e) {
                                    t.searchStr = e;
                                  },
                                  expression: "searchStr",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      a(
                        "v-uni-scroll-view",
                        {
                          staticClass: "bg-white nav scroll-label-container",
                          attrs: {
                            "scroll-x": !0,
                            "scroll-with-animation": !0,
                            "scroll-left": t.scrollLeft,
                          },
                        },
                        t._l(t.commonHelpLabelList, function (e, i) {
                          return a(
                            "v-uni-view",
                            {
                              key: i,
                              staticClass: "label-item",
                              class: i == t.TabCur ? "label-item-active" : "",
                              attrs: { "data-id": i },
                              on: {
                                click: function (a) {
                                  (arguments[0] = a = t.$handleEvent(a)),
                                    t.tabSelect(i, e.id);
                                },
                              },
                            },
                            [t._v(t._s(e.label))]
                          );
                        }),
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
                { staticClass: "cu-list menu bg-white" },
                t._l(t.commonHelpList, function (e, i) {
                  return a(
                    "v-uni-view",
                    {
                      key: i,
                      staticClass: "cu-item q-list-item",
                      on: {
                        click: function (a) {
                          (arguments[0] = a = t.$handleEvent(a)),
                            t.clickhelperItem(e);
                        },
                      },
                    },
                    [
                      a(
                        "v-uni-view",
                        { staticClass: "content" },
                        [a("v-uni-text", [t._v(t._s(e.title))])],
                        1
                      ),
                    ],
                    1
                  );
                }),
                1
              ),
            ],
            1
          );
        },
        n = [];
    },
    f1c6: function (t, e, a) {
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
            {
              staticClass: "history-item",
              style: t.GetDeviceInfo.background,
              on: {
                click: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.onClick.apply(void 0, arguments);
                },
              },
            },
            [
              a("v-uni-view", { staticClass: "title" }, [
                t._v(t._s(t.device.projectname)),
              ]),
              a(
                "v-uni-view",
                { staticClass: "history-item_info" },
                [
                  a("v-uni-image", {
                    attrs: { src: t.GetDeviceInfo.image, mode: "aspectFit" },
                  }),
                  a("v-uni-view", { staticClass: "location" }, [
                    t._v(t._s(t.device.address)),
                  ]),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [];
    },
    f1e2: function (t, e, a) {
      var i = a("b526");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("0e2c7079", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f1fa: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("55af"),
        n = a("e5c8");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      a("c476");
      var o = a("f0c5"),
        s = Object(o["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "5ec3be6c",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    f753: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("ef75"),
        n = a("1a1c");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      a("5002");
      var o = a("f0c5"),
        s = Object(o["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "66a46e18",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    faa4: function (t, e, a) {
      "use strict";
      var i = a("8bec"),
        n = a.n(i);
      n.a;
    },
  },
]);
