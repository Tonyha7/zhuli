(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesB-PaySign-PaySign"],
  {
    "21b5": function (e, t, a) {
      var i = a("24fb"),
        n = a("1de5"),
        r = a("3618"),
        s = a("acea");
      t = i(!1);
      var o = n(r),
        c = n(s);
      t.push([
        e.i,
        ".card-view[data-v-592784c3]{height:%?200?%;position:relative;margin:%?40?% 5% 0 5%;background-size:100% 100%}.card-view uni-image[data-v-592784c3]{width:%?690?%;height:%?200?%}.card-view uni-view[data-v-592784c3]{width:100%;height:100%;border-radius:%?20?%}.card-view>.header[data-v-592784c3]{display:flex;height:%?100?%;justify-content:space-between;align-items:center}.pay-icon[data-v-592784c3]{position:absolute;width:%?130?%;height:%?110?%;right:calc(5% + %?40?%);top:%?200?%}.card-title[data-v-592784c3]{display:flex;font-size:%?32?%;color:#fff;font-size:%?45?%;margin-left:%?40?%}.card-content[data-v-592784c3]{display:flex;font-size:%?32?%;margin:0 %?100?% 0 %?40?%}.action-icon[data-v-592784c3]{display:flex;justify-content:center;align-items:center;font-size:%?32?%;color:#fff;margin-right:%?40?%}.cuIcon-close[data-v-592784c3]{font-size:%?50?%;color:#a7a7a7}.alipay-view[data-v-592784c3]{background-image:url(" +
          o +
          ")}.z-card-view[data-v-592784c3]{background-image:url(" +
          c +
          ")}.desc-container>.title[data-v-592784c3]{margin:%?20?% %?40?% %?20?% %?40?%;height:26px;font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#333}.desc-container>.content[data-v-592784c3]{margin:0 %?40?%;font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#888ea1;line-height:%?50?%}.btn-view[data-v-592784c3]{margin:%?40?%}.success-sign-container[data-v-592784c3]{text-align:center;padding-top:%?250?%}.success-sign-container uni-image[data-v-592784c3]{width:%?200?%;height:%?200?%}.success-sign-container>.tip-container[data-v-592784c3]{padding-top:%?50?%;height:%?100?%;font-size:%?40?%;font-family:PingFang SC;font-weight:700;color:#707994}",
        "",
      ]),
        (e.exports = t);
    },
    3618: function (e, t, a) {
      e.exports = a.p + "pagesB/static/alipay-bg.png";
    },
    5869: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "c", function () {
          return n;
        }),
        a.d(t, "a", function () {});
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "v-uni-view",
            [
              e.SignParams.SignResult
                ? e._e()
                : a(
                    "v-uni-view",
                    [
                      "ZCard" == e.SignParams.SignType
                        ? a(
                            "v-uni-view",
                            { staticClass: "card-view z-card-view" },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "header" },
                                [
                                  a(
                                    "v-uni-text",
                                    { staticClass: "card-title" },
                                    [e._v("支卡通")]
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                {
                                  staticClass: "card-content",
                                  staticStyle: { color: "#e787fb" },
                                },
                                [e._v("支付宝“支卡通”消费记账")]
                              ),
                            ],
                            1
                          )
                        : e._e(),
                      "alipayWithhold" == e.SignParams.SignType
                        ? a(
                            "v-uni-view",
                            { staticClass: "card-view alipay-view" },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "header" },
                                [
                                  a(
                                    "v-uni-text",
                                    { staticClass: "card-title" },
                                    [e._v("支付宝免密支付")]
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                {
                                  staticClass: "card-content",
                                  staticStyle: { color: "#8EDDFF" },
                                },
                                [e._v("享免充值、先用后付权益")]
                              ),
                            ],
                            1
                          )
                        : e._e(),
                      a(
                        "v-uni-view",
                        { staticClass: "desc-container" },
                        [
                          a("v-uni-view", { staticClass: "title" }, [
                            e._v("服务内容"),
                          ]),
                          a("v-uni-view", { staticClass: "content" }, [
                            e._v(e._s(e.AgreemengTip)),
                          ]),
                        ],
                        1
                      ),
                      a(
                        "v-uni-view",
                        {
                          staticClass: "desc-container",
                          staticStyle: { "margin-top": "40upx" },
                        },
                        [
                          a("v-uni-view", { staticClass: "title" }, [
                            e._v("操作说明"),
                          ]),
                          "ZCard" == e.SignParams.SignType
                            ? a("v-uni-view", { staticClass: "content" }, [
                                e._v(
                                  "1.支卡通签约完成后请点击“返回”按钮再进行免密签约；"
                                ),
                                a("br"),
                                e._v(
                                  "2.整个签约过程中请不要中途退出小程序以及支付宝；"
                                ),
                              ])
                            : e._e(),
                          "alipayWithhold" == e.SignParams.SignType
                            ? a("v-uni-view", { staticClass: "content" }, [
                                e._v(
                                  "整个签约过程中请不要中途退出小程序以及支付宝；"
                                ),
                              ])
                            : e._e(),
                        ],
                        1
                      ),
                      a(
                        "v-uni-view",
                        { staticClass: "btn-view" },
                        [
                          a(
                            "v-uni-button",
                            {
                              staticClass: "bottom confirm-btn",
                              attrs: { type: "primary" },
                              on: {
                                click: function (t) {
                                  (arguments[0] = t = e.$handleEvent(t)),
                                    e.GetLoginCode.apply(void 0, arguments);
                                },
                              },
                            },
                            [e._v("我已知晓，开始签约")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
              e.SignParams.SignResult
                ? a(
                    "v-uni-view",
                    { staticClass: "success-sign-container" },
                    [
                      a("v-uni-image", {
                        attrs: { src: "/static/success.png" },
                      }),
                      a("v-uni-view", { staticClass: "tip-container" }, [
                        e._v(e._s(e.SignParams.TipText)),
                      ]),
                      a(
                        "v-uni-view",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "MpAlipay" == e.SignParams.LaunchType,
                              expression: "SignParams.LaunchType == 'MpAlipay'",
                            },
                          ],
                          staticStyle: { margin: "40upx 20upx" },
                        },
                        [
                          a(
                            "v-uni-button",
                            {
                              staticClass: "confirm-btn",
                              attrs: { type: "primary" },
                              on: {
                                click: function (t) {
                                  (arguments[0] = t = e.$handleEvent(t)),
                                    e.closeview.apply(void 0, arguments);
                                },
                              },
                            },
                            [e._v("我知道了")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : e._e(),
            ],
            1
          );
        },
        n = [];
    },
    "62b9": function (e, t, a) {
      var i = a("21b5");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
      var n = a("4f06").default;
      n("5ce96a99", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "717d": function (e, t, a) {
      "use strict";
      var i = a("62b9"),
        n = a.n(i);
      n.a;
    },
    "72a7": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("eb6a"),
        n = a.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return i[e];
            });
          })(r);
      t["default"] = n.a;
    },
    acea: function (e, t, a) {
      e.exports = a.p + "pagesB/static/z-card-bg.png";
    },
    c080: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("5869"),
        n = a("72a7");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return n[e];
            });
          })(r);
      a("717d");
      var s = a("f0c5"),
        o = Object(s["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "592784c3",
          null,
          !1,
          i["a"],
          void 0
        );
      t["default"] = o.exports;
    },
    eb6a: function (e, t, a) {
      "use strict";
      (function (e) {
        a("7a82");
        var i = a("ee27").default;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0),
          a("e9c4"),
          a("99af"),
          a("d3b7"),
          a("c975"),
          a("ac1f"),
          a("5319");
        var n = i(a("f07e")),
          r = i(a("c964")),
          s = i(a("6972")),
          o = {
            data: function () {
              return {
                ViewTitle: "",
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                appParams: { userid: "", pid: "", phone: "" },
                IsReturn: !0,
                userinfo: {},
                loginCode: "",
                SignParams: {
                  SignType: "ZCard",
                  SignResult: !1,
                  LaunchType: "MpAlipay",
                  TipText: "签约完成,请返回住理生活APP继续使用",
                },
                LoadOption: {},
                SignSource: "",
              };
            },
            onShow: function () {
              this.loadpaystatus();
            },
            computed: {
              AgreemengTip: function () {
                var e =
                  "签约完成“支卡通”后，使用住理生活余额消费可在支付宝账单同步账单显示，余额不足时可通过“支付宝”自动扣款";
                return (
                  "alipayWithhold" == this.SignParams.SignType &&
                    (e =
                      "签约完成“支付宝免密支付”后，余额不足时可通过“支付宝”自动扣款。"),
                  s.default.isNullOrEmpty(
                    this.project.projectswitch.branch_card_service_description
                  ) ||
                    (e =
                      this.project.projectswitch
                        .branch_card_service_description),
                  e
                );
              },
            },
            onLoad: function (e) {
              this.InitPageParams(e),
                e.isFromBranchCardReturn &&
                  this.RequeseBranchCardAgreementParams(e);
            },
            onUnload: function () {},
            methods: {
              closeview: function () {
                uni.navigateBack();
              },
              loadpaystatus: function () {
                var e = this;
                return (0, r.default)(
                  (0, n.default)().mark(function t() {
                    return (0, n.default)().wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                (e,
                                !s.default.isNullOrEmpty(e.project.server_addr))
                              ) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt("return");
                            case 3:
                              return (
                                (t.prev = 3),
                                (t.next = 6),
                                s.default.RefreshUserinfo()
                              );
                            case 6:
                              e.$store.getters.hasAlipaySigned &&
                                (e.SignParams.SignResult = !0),
                                (t.next = 12);
                              break;
                            case 9:
                              (t.prev = 9),
                                (t.t0 = t["catch"](3)),
                                s.default.logger.warn(
                                  "PaySign.vue",
                                  "查询支卡通签约状态失败,err:".concat(
                                    JSON.stringify(err)
                                  ),
                                  "loadpaystatus_error"
                                );
                            case 12:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[3, 9]]
                    );
                  })
                )();
              },
              InitPageParams: function (t) {
                var a = this,
                  i = this.$store.state.LaunchData;
                if (i && i.query && "App" == i.query.LaunchType) {
                  if (
                    ((this.SignParams.LaunchType = "App"),
                    (this.SignParams.SignType = i.query.type),
                    (this.appParams.userid = i.query.userid),
                    (this.appParams.phone = i.query.phone),
                    (this.appParams.pid = i.query.pid),
                    (this.LoadOption = {
                      SignType: i.query.type,
                      LaunchType: "App",
                      userid: i.query.userid,
                      phone: i.query.phone,
                      pid: i.query.pid,
                    }),
                    (this.SignSource = i.query.source),
                    this.$store.commit("SetLaunchData", null),
                    this.userdata.id &&
                      this.userdata.id != this.appParams.userid)
                  ) {
                    s.default.logger.warn(
                      "PaySign.vue",
                      "app签约跳转信息不一致,住理生活AppUserid:"
                        .concat(this.appParams.userid, ",小程序Userid:")
                        .concat(this.userdata.id)
                    );
                    return s.default.showalert(
                      "提示",
                      "当前登录的住理生活账户信息与支付宝账户信息不一致，签约成功后将使用当前支付宝记账或扣费",
                      null,
                      function () {
                        (function () {
                          a.$store.commit("SetUserData", null),
                            a.$store.commit("SetProjectData", null),
                            uni.reLaunch({ url: "/pages/wxlogin/wxlogin" });
                        })();
                      },
                      !1,
                      "",
                      "好的"
                    );
                  }
                } else
                  (this.SignParams.SignType = t.SignType),
                    (this.SignParams.LaunchType = t.LaunchType || "MpAlipay"),
                    (this.SignParams.TipText = "签约完成,请前去消费使用"),
                    (this.appParams.userid = t.userid),
                    (this.appParams.phone = t.phone),
                    (this.appParams.pid = t.pid),
                    (this.LoadOption = t),
                    (this.SignSource = t.source);
                switch (
                  (e.log("----------this.SignParams----------"),
                  e.log(this.SignParams),
                  e.log("----------this.LoadOption"),
                  e.log(this.LoadOption),
                  this.SignParams.SignType)
                ) {
                  case "alipayWithhold":
                    this.ViewTitle = "支付宝免密签约";
                    break;
                  case "ZCard":
                    this.ViewTitle = "支卡通签约";
                    break;
                  default:
                    break;
                }
                uni.setNavigationBarTitle({ title: this.ViewTitle }),
                  e.log(this.appParams.phone);
              },
              RequestZCardSignParams: function () {
                var t = this;
                uni.showLoading({ title: "请求签约中...", mask: !0 }),
                  s.default
                    .sendapppost(
                      this.project.server_addr +
                        s.default.API_PATH.GetZcardWithholdingSign,
                      {}
                    )
                    .then(function (a) {
                      switch ((e.log(a), t.SignParams.SignType)) {
                        case "alipayWithhold":
                          t.RequeseWithholdAgreementParams(a);
                          break;
                        case "ZCard":
                          t.RequeseBranchCardAgreementParams(a);
                          break;
                        default:
                          break;
                      }
                    })
                    .catch(function (t) {
                      e.log(t), s.default.showalert("提示", t);
                    })
                    .finally(function () {
                      uni.hideLoading();
                    });
              },
              RequeseBranchCardAgreementParams: function (e) {
                var t = e.AccountId,
                  a = e.OutTradeNo;
                a.indexOf("#") > -1 && (a = a.replace("#", ""));
                var i = "plugin://myPlugin/mixedSign?accountId="
                  .concat(t, "&appId=")
                  .concat(e.AppId, "&externalAgreementNo=")
                  .concat(e.OutTradeNo, "&outTradeNo=")
                  .concat(e.OutTradeNo, "&outBizNo=")
                  .concat(a);
                my.navigateTo({ url: i });
              },
              RequeseWithholdAgreementParams: function (t) {
                var a = this;
                uni.showLoading({ title: "请求免密签约中..." }),
                  e.log(JSON.stringify(t));
                var i = t.OutTradeNo,
                  n = t.OutTradeNo,
                  r = t.AppId,
                  o = t.ProductCode;
                myPluginInterface
                  .paySignCenter({
                    outTradeNo: i,
                    externalAgreementNo: n,
                    appId: r,
                    productCode: o,
                  })
                  .then(function (t) {
                    e.log("myPluginInterface::success:", t),
                      uni.hideLoading(),
                      "001S1000" == t.resultCode &&
                        (a.SignParams.SignResult = !0);
                  })
                  .catch(function (a) {
                    uni.hideLoading(),
                      e.log("myPluginInterface::err", a),
                      s.default.showalert(
                        "提示",
                        a.resultMsg + ",请再试一下吧~"
                      ),
                      s.default.logger.warn(
                        "PaySign.vue",
                        "商户代扣签约失败,params:"
                          .concat(JSON.stringify(t), ",err:")
                          .concat(JSON.stringify(a)),
                        "RequeseWithholdAgreementParams_error"
                      );
                  });
              },
              GetLoginCode: function () {
                var t = this;
                if ("App" == this.SignParams.LaunchType)
                  return new Promise(
                    (function () {
                      var a = (0, r.default)(
                        (0, n.default)().mark(function a(i, r) {
                          return (0, n.default)().wrap(function (a) {
                            while (1)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  uni.login({
                                    scopes: "auth_user",
                                    success: function (a) {
                                      e.log(
                                        "----------------登录信息------loginRes-------",
                                        a
                                      ),
                                        (t.loginCode = a.code),
                                        i(!0);
                                    },
                                    fail: function (t) {
                                      e.log(
                                        "----------------登录信息------err-------",
                                        t
                                      ),
                                        i(!1);
                                    },
                                  });
                                case 1:
                                case "end":
                                  return a.stop();
                              }
                          }, a);
                        })
                      );
                      return function (e, t) {
                        return a.apply(this, arguments);
                      };
                    })()
                  );
                this.RequestZCardSignParams();
              },
              GetUserinfo: function (t) {
                e.log(t),
                  (this.userinfo["pid"] = this.appParams.pid),
                  (this.userinfo["phone"] = this.appParams.phone);
                var a = {
                  systeminfo: this.$store.state.SystemInfo,
                  userinfo: this.userinfo,
                  login_type: "zcard_signing",
                  code: this.loginCode,
                };
                this.servelogin(a);
              },
              servelogin: function (t) {
                var a = this;
                s.default.showloading("获取信息中...");
                var i = s.default.AUTH_SERVER_ADDR + s.default.API_PATH.login;
                s.default
                  .sendauthpost(i, t)
                  .then(function (t) {
                    e.log(t),
                      (t.opendatainfo = a.userinfo),
                      (t.id = t.serveruserid),
                      delete t["serveruserid"],
                      a.$store.commit("SetUserData", t),
                      (a.userinfo = t);
                    var i = t.project;
                    (a.project = i),
                      a.$store.commit("SetProjectData", i),
                      a.RequestZCardSignParams(),
                      s.default
                        .sendapppost(
                          i.server_addr + s.default.API_PATH.queryconfig,
                          {}
                        )
                        .then(function (e) {
                          var t = a.project;
                          (t.projectswitch = e),
                            (a.project = JSON.parse(JSON.stringify(t))),
                            a.$store.commit("SetProjectData", t);
                        });
                  })
                  .catch(function (e) {
                    return (
                      uni.hideLoading(),
                      s.default.showalert("提示", e, null, function () {}, !1)
                    );
                  });
              },
            },
          };
        t.default = o;
      }).call(this, a("5a52")["default"]);
    },
  },
]);
