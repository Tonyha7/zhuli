(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesB-payway-payway"],
  {
    "0061": function (t, a, i) {
      var e = i("24fb"),
        s = i("1de5"),
        n = i("3618"),
        c = i("acea");
      a = e(!1);
      var u = s(n),
        r = s(c);
      a.push([
        t.i,
        ".card-view[data-v-1fc103f0]{height:%?200?%;position:relative;margin:%?0?% 5% 0 5%;top:%?40?%;background-size:100% 100%}.card-view uni-image[data-v-1fc103f0]{width:%?690?%;height:%?200?%}.card-view uni-view[data-v-1fc103f0]{width:100%;height:100%;border-radius:%?20?%}.card-view>.header[data-v-1fc103f0]{display:flex;height:%?100?%;justify-content:space-between;align-items:center}.pay-icon[data-v-1fc103f0]{position:absolute;width:%?130?%;height:%?110?%;right:calc(5% + %?40?%);top:%?200?%}.card-title[data-v-1fc103f0]{display:flex;font-size:%?32?%;color:#fff;font-size:%?45?%;margin-left:%?40?%}.card-content[data-v-1fc103f0]{display:flex;font-size:%?32?%;margin:0 %?100?% 0 %?40?%}.action-icon[data-v-1fc103f0]{display:flex;justify-content:center;align-items:center;font-size:%?32?%;color:#fff;margin-right:%?40?%}.cuIcon-close[data-v-1fc103f0]{font-size:%?50?%;color:#a7a7a7}.alipay-view[data-v-1fc103f0]{background-image:url(" +
          u +
          ")}.z-card-view[data-v-1fc103f0]{background-image:url(" +
          r +
          ")}",
        "",
      ]),
        (t.exports = a);
    },
    3618: function (t, a, i) {
      t.exports = i.p + "pagesB/static/alipay-bg.png";
    },
    "579d": function (t, a, i) {
      "use strict";
      var e = i("92bd"),
        s = i.n(e);
      s.a;
    },
    "8a5f": function (t, a, i) {
      "use strict";
      i.r(a);
      var e = i("ecaf"),
        s = i.n(e);
      for (var n in e)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(a, t, function () {
              return e[t];
            });
          })(n);
      a["default"] = s.a;
    },
    "92bd": function (t, a, i) {
      var e = i("0061");
      e.__esModule && (e = e.default),
        "string" === typeof e && (e = [[t.i, e, ""]]),
        e.locals && (t.exports = e.locals);
      var s = i("4f06").default;
      s("020c36d4", e, !0, { sourceMap: !1, shadowMode: !1 });
    },
    acea: function (t, a, i) {
      t.exports = i.p + "pagesB/static/z-card-bg.png";
    },
    bc20: function (t, a, i) {
      "use strict";
      i.r(a);
      var e = i("fded"),
        s = i("8a5f");
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(a, t, function () {
              return s[t];
            });
          })(n);
      i("579d");
      var c = i("f0c5"),
        u = Object(c["a"])(
          s["default"],
          e["b"],
          e["c"],
          !1,
          null,
          "1fc103f0",
          null,
          !1,
          e["a"],
          void 0
        );
      a["default"] = u.exports;
    },
    ecaf: function (t, a, i) {
      "use strict";
      (function (t) {
        i("7a82");
        var e = i("ee27").default;
        Object.defineProperty(a, "__esModule", { value: !0 }),
          (a.default = void 0),
          i("a9e3"),
          i("d3b7");
        var s = e(i("f07e")),
          n = e(i("c964")),
          c = e(i("6972")),
          u = {
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                withholdstatus: {
                  alipayswitch: 0,
                  wechatswitch: 0,
                  branchCardSwitch: 0,
                  alipaystatus: 0,
                  wechatstatus: 0,
                  branchCardStatus: 0,
                },
                IsReturn: !0,
                mescroll: null,
                upOption: { use: !1, toTop: { src: "" } },
              };
            },
            onShow: function () {},
            onLoad: function (t) {
              this.InitPayStatus();
            },
            computed: {
              containerstyle: function () {
                var t = "height:calc(100% - ".concat(this.CustomBar, "px)");
                return t;
              },
            },
            methods: {
              mescrollInit: function (t) {
                this.mescroll = t;
              },
              downCallback: function (t) {
                this.loadpaystatus();
              },
              InitPayStatus: function () {
                var t = this;
                return (0, n.default)(
                  (0, s.default)().mark(function a() {
                    var i, e, n;
                    return (0, s.default)().wrap(function (a) {
                      while (1)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.next = 2), c.default.QueryProjectSwitch();
                          case 2:
                            if (
                              ((i = t.$store.state.project.projectswitch),
                              c.default.isNullOrEmpty(i) ||
                                ((t.withholdstatus.alipayswitch =
                                  i.alipay_withhold_enable),
                                (t.withholdstatus.wechatswitch =
                                  i.wechat_withhold_enable),
                                (t.withholdstatus.branchCardSwitch =
                                  i.branch_card_enable)),
                              0 != t.withholdstatus.alipayswitch ||
                                0 != t.withholdstatus.wechatswitch ||
                                0 != t.withholdstatus.branchCardSwitch)
                            ) {
                              a.next = 6;
                              break;
                            }
                            return a.abrupt(
                              "return",
                              c.default.showalert(
                                "提示",
                                "该服务暂未开放",
                                null,
                                function () {
                                  uni.navigateBack({ delta: 1 });
                                },
                                !1
                              )
                            );
                          case 6:
                            e = {};
                            try {
                              c.default.isNullOrEmpty(
                                t.userdata.detailinfo.withhold
                              ) ||
                                (e = JSON.parse(
                                  t.userdata.detailinfo.withhold
                                ));
                            } catch (s) {
                              e = {};
                            }
                            (n = e.branch_card),
                              1 == Number(n.zcard_status) &&
                                ((t.withholdstatus.branchCardStatus = 1),
                                (t.withholdstatus.alipaystatus = 1)),
                              c.default.isNullOrEmpty(n.agreement_no)
                                ? ((t.withholdstatus.alipaystatus = 0),
                                  (t.withholdstatus.branchCardStatus = 0))
                                : (t.withholdstatus.alipaystatus = 1);
                          case 11:
                          case "end":
                            return a.stop();
                        }
                    }, a);
                  })
                )();
              },
              loadpaystatus: function () {
                var a = this;
                c.default
                  .sendapppost(
                    this.project.server_addr +
                      c.default.API_PATH.querywithholdstatus,
                    {}
                  )
                  .then(function (i) {
                    c.default.isNullOrEmpty(i) ||
                      (t.log(i),
                      (a.withholdstatus.alipaystatus = i.alipay.status),
                      (a.withholdstatus.wechatstatus = i.wechat.status),
                      "branch_card" in i &&
                        (1 == Number(i.branch_card.status) &&
                          ((a.withholdstatus.branchCardStatus = 1),
                          (a.withholdstatus.alipaystatus = 1)),
                        c.default.isNullOrEmpty(i.branch_card.agreement_no)
                          ? ((a.withholdstatus.alipaystatus = 0),
                            (a.withholdstatus.branchCardStatus = 0))
                          : (a.withholdstatus.alipaystatus = 1)));
                  })
                  .catch(function (t) {
                    uni.hideLoading(), c.default.showalert("提示", t);
                  })
                  .finally(function () {
                    a.mescroll.endDownScroll();
                  });
              },
              controlaction: function (a) {
                switch (a) {
                  case "alipay":
                    if (1 == this.withholdstatus.alipaystatus) return;
                    uni.showLoading({ title: "加载中", mask: !0 }),
                      c.default
                        .sendapppost(
                          this.project.server_addr +
                            c.default.API_PATH
                              .createalipayagreementsignparameters,
                          { staff_id: this.userdata.detailinfo.id }
                        )
                        .then(function (a) {
                          t.log(a),
                            uni.hideLoading(),
                            zl.system.launchApplication({ url: a });
                        })
                        .catch(function (t) {
                          uni.hideLoading(), c.default.showalert("提示", t);
                        });
                    break;
                  case "wechat":
                    uni.showToast({ title: "暂未开放", position: "center" });
                    break;
                  default:
                    break;
                }
              },
              RequestZCardSignParams: function (t) {
                1 != this.withholdstatus.branchCardStatus &&
                  ((1 == this.withholdstatus.alipaystatus &&
                    "alipayWithhold" == t) ||
                    (c.default.NavigateToAlipayPage("/pagesB/PaySign/PaySign", {
                      type: t,
                      source: "payway",
                    }),
                    setTimeout(function () {
                      uni.navigateBack();
                    }, 1e3)));
              },
            },
          };
        a.default = u;
      }).call(this, i("5a52")["default"]);
    },
    fded: function (t, a, i) {
      "use strict";
      i.d(a, "b", function () {
        return s;
      }),
        i.d(a, "c", function () {
          return n;
        }),
        i.d(a, "a", function () {
          return e;
        });
      var e = { mescrollUni: i("11c9").default },
        s = function () {
          var t = this,
            a = t.$createElement,
            i = t._self._c || a;
          return i(
            "v-uni-view",
            { staticStyle: { height: "100%" } },
            [
              i(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: t.IsReturn } },
                [
                  i(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("支付方式")]
                  ),
                ],
                2
              ),
              i(
                "v-uni-view",
                { style: t.containerstyle },
                [
                  i(
                    "mescroll-uni",
                    {
                      ref: "mescrollRef",
                      attrs: { up: t.upOption, height: "100%" },
                      on: {
                        down: function (a) {
                          (arguments[0] = a = t.$handleEvent(a)),
                            t.downCallback.apply(void 0, arguments);
                        },
                        init: function (a) {
                          (arguments[0] = a = t.$handleEvent(a)),
                            t.mescrollInit.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      1 == t.withholdstatus.branchCardSwitch
                        ? i(
                            "v-uni-view",
                            {
                              staticClass: "card-view z-card-view",
                              on: {
                                click: function (a) {
                                  (arguments[0] = a = t.$handleEvent(a)),
                                    t.RequestZCardSignParams("ZCard");
                                },
                              },
                            },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "header" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "card-title" },
                                    [t._v("支卡通")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "action-icon" },
                                    [
                                      1 == t.withholdstatus.branchCardStatus
                                        ? i("v-uni-text", [t._v("已开启")])
                                        : i("v-uni-text", [t._v("未开启")]),
                                      i("v-uni-text", {
                                        staticClass: "cuIcon-right",
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "card-content",
                                  staticStyle: { color: "#e787fb" },
                                },
                                [t._v("支付宝“支卡通”消费记账")]
                              ),
                            ],
                            1
                          )
                        : t._e(),
                      1 == t.withholdstatus.alipayswitch &&
                      0 == t.withholdstatus.branchCardSwitch
                        ? i(
                            "v-uni-view",
                            {
                              staticClass: "card-view alipay-view",
                              on: {
                                click: function (a) {
                                  (arguments[0] = a = t.$handleEvent(a)),
                                    t.RequestZCardSignParams("alipayWithhold");
                                },
                              },
                            },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "header" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "card-title" },
                                    [t._v("支付宝免密支付")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "action-icon" },
                                    [
                                      1 == t.withholdstatus.alipaystatus
                                        ? i("v-uni-text", [t._v("已开启")])
                                        : i("v-uni-text", [t._v("未开启")]),
                                      i("v-uni-text", {
                                        staticClass: "cuIcon-right",
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "card-content",
                                  staticStyle: { color: "#8EDDFF" },
                                },
                                [t._v("享免充值、先用后付权益")]
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
            ],
            1
          );
        },
        n = [];
    },
  },
]);
