(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesB-ZhuliPay-center"],
  {
    "3d08": function (e, t, n) {
      "use strict";
      (function (e) {
        n("7a82");
        var a = n("ee27").default;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0),
          n("d3b7"),
          n("e9c4"),
          n("c975");
        var i,
          r = a(n("fc11")),
          o = a(n("f07e")),
          u = a(n("c964")),
          s = a(n("6972")),
          c = {
            name: "LoginButton",
            props: {
              text: { type: String, default: "" },
              deviceId: { type: String, default: "" },
              pid: { type: String, default: "" },
            },
            data: function () {
              return {
                PhoneInterval: null,
                OauthLogin: {
                  EncryptedPhoneData: "",
                  EncryptedPhoneDataIv: "",
                  code: "",
                  userinfo: {},
                },
              };
            },
            computed: {},
            methods:
              ((i = {
                WaitGetPhoneNumber: function () {
                  var t = this;
                  return (0, u.default)(
                    (0, o.default)().mark(function n() {
                      return (0, o.default)().wrap(function (n) {
                        while (1)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return n.abrupt(
                                "return",
                                new Promise(
                                  (function () {
                                    var n = (0, u.default)(
                                      (0, o.default)().mark(function n(a, i) {
                                        var r;
                                        return (0, o.default)().wrap(function (
                                          n
                                        ) {
                                          while (1)
                                            switch ((n.prev = n.next)) {
                                              case 0:
                                                0,
                                                  (r = function () {
                                                    e.log(
                                                      "-------------" +
                                                        t.OauthLogin
                                                          .EncryptedPhoneData
                                                    ),
                                                      "" !=
                                                        t.OauthLogin
                                                          .EncryptedPhoneData &&
                                                        (clearInterval(
                                                          t.PhoneInterval
                                                        ),
                                                        a(!0));
                                                  }),
                                                  (t.PhoneInterval =
                                                    setInterval(function () {
                                                      r();
                                                    }, 100));
                                              case 3:
                                              case "end":
                                                return n.stop();
                                            }
                                        },
                                        n);
                                      })
                                    );
                                    return function (e, t) {
                                      return n.apply(this, arguments);
                                    };
                                  })()
                                )
                              );
                            case 1:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
                },
                OnGetPhoneNumber: function (t) {
                  e.log(
                    "-------------加密手机号---------------" +
                      JSON.stringify(t.detail)
                  ),
                    t.detail.errMsg && t.detail.errMsg.indexOf("fail") > -1
                      ? (this.OauthLogin.EncryptedPhoneData = "fail")
                      : ((this.OauthLogin.EncryptedPhoneData =
                          t.detail.encryptedData),
                        (this.OauthLogin.EncryptedPhoneDataIv = t.detail.iv));
                },
                GetUserinfo: function () {
                  this.$emit("LoginSuccess", { a: 0 });
                },
                GetLoginCode: function () {
                  var t = this;
                  return new Promise(
                    (function () {
                      var n = (0, u.default)(
                        (0, o.default)().mark(function n(a, i) {
                          return (0, o.default)().wrap(function (n) {
                            while (1)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  uni.login({
                                    scopes: "auth_user",
                                    success: function (n) {
                                      e.log(
                                        "----------------登录信息------loginRes-------",
                                        n
                                      ),
                                        (t.OauthLogin.code = n.code),
                                        a(!0);
                                    },
                                    fail: function (t) {
                                      e.log(
                                        "----------------登录信息------err-------",
                                        t
                                      ),
                                        a(!1);
                                    },
                                  });
                                case 1:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        })
                      );
                      return function (e, t) {
                        return n.apply(this, arguments);
                      };
                    })()
                  );
                },
              }),
              (0, r.default)(i, "GetUserinfo", function (t) {
                e.log(
                  "----------------登录信息------------------",
                  this.OauthLogin.code
                );
              }),
              (0, r.default)(i, "ServeLogin", function (t) {
                var n = this;
                return (0, u.default)(
                  (0, o.default)().mark(function a() {
                    var i, r, u;
                    return (0, o.default)().wrap(
                      function (a) {
                        while (1)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (a.prev = 0),
                                s.default.showloading("登录授权中..."),
                                (a.next = 4),
                                s.default.sendauthpost(
                                  s.default.AUTH_SERVER_ADDR +
                                    s.default.API_PATH.login,
                                  t
                                )
                              );
                            case 4:
                              if (
                                ((i = a.sent),
                                e.log(i),
                                i.isbind || !("isbind" in i))
                              ) {
                                a.next = 10;
                                break;
                              }
                              return (
                                uni.hideLoading(),
                                (r =
                                  "../userbindproject/userbindproject?logintype=account&userid=" +
                                  i.userid +
                                  "&authid=" +
                                  i.authid),
                                a.abrupt("return", uni.redirectTo({ url: r }))
                              );
                            case 10:
                              (i.opendatainfo = n.OauthLogin.userinfo),
                                (i.id = i.serveruserid),
                                delete i["serveruserid"],
                                n.$store.commit("SetUserData", i),
                                (n.OauthLogin.userinfo = i),
                                "",
                                (u = i.project),
                                n.$store.commit("SetProjectData", u),
                                n.$emit("LoginSuccess", i),
                                (a.next = 26);
                              break;
                            case 21:
                              (a.prev = 21),
                                (a.t0 = a["catch"](0)),
                                e.log(a.t0),
                                uni.hideLoading(),
                                n.$emit("LoginFail", a.t0);
                            case 26:
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
              }),
              i),
          };
        t.default = c;
      }).call(this, n("5a52")["default"]);
    },
    "541d": function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("5fa3"),
        i = n("ec22");
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return i[e];
            });
          })(r);
      n("64f8");
      var o = n("f0c5"),
        u = Object(o["a"])(
          i["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "016613ee",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = u.exports;
    },
    "5fa3": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "a", function () {
          return a;
        });
      var a = { loginButton: n("f34f").default },
        i = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "v-uni-view",
            { staticClass: "viewcontainer" },
            [
              n("v-uni-image", {
                staticClass: "viewimgbg",
                attrs: {
                  src: "/pagesB/static/pay_center_bg.png",
                  mode: "scaleToFill",
                },
              }),
              n(
                "cu-custom",
                { attrs: { bgColor: "white", isBack: !0 } },
                [
                  n(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [e._v("住理收银")]
                  ),
                ],
                2
              ),
              n(
                "v-uni-view",
                { staticClass: "content-container" },
                [
                  n(
                    "v-uni-view",
                    { staticClass: "top-content" },
                    [
                      n("v-uni-view", { staticClass: "title" }, [
                        e._v("需支付"),
                      ]),
                      n(
                        "v-uni-view",
                        { staticClass: "money" },
                        [
                          n("v-uni-text", { staticClass: "icon" }, [
                            e._v("￥"),
                          ]),
                          n("v-uni-text", { staticClass: "text" }, [
                            e._v(e._s(e.PreConsumeData.money)),
                          ]),
                        ],
                        1
                      ),
                      n("v-uni-view", { staticClass: "time-down-container" }),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "v-uni-view",
                { staticClass: "info-container" },
                [
                  n(
                    "v-uni-view",
                    { staticClass: "item-info" },
                    [
                      n("v-uni-view", { staticClass: "item-title" }, [
                        e._v("商品名称"),
                      ]),
                      n("v-uni-view", { staticClass: "item-content" }, [
                        e._v(e._s(e.PreConsumeData.title)),
                      ]),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticClass: "item-info" },
                    [
                      n("v-uni-view", { staticClass: "item-title" }, [
                        e._v("所属项目"),
                      ]),
                      n("v-uni-view", { staticClass: "item-content" }, [
                        e._v(e._s(e.projectname)),
                      ]),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticClass: "item-info" },
                    [
                      n("v-uni-view", { staticClass: "item-title" }, [
                        e._v("可用余额"),
                      ]),
                      n("v-uni-view", { staticClass: "item-content" }, [
                        e._v(e._s(e.balance) + "元"),
                      ]),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticClass: "item-info" },
                    [
                      n("v-uni-view", { staticClass: "item-title" }, [
                        e._v("手机号"),
                      ]),
                      n("v-uni-view", { staticClass: "item-content" }, [
                        e._v(e._s(e.phone)),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "v-uni-view",
                { staticClass: "btn-container" },
                [
                  e.OauthLogin.show
                    ? n("login-button", {
                        ref: "LoginButton",
                        attrs: {
                          deviceId: e.OauthLogin.device_id,
                          text: "立即支付",
                        },
                        on: {
                          LoginSuccess: function (t) {
                            (arguments[0] = t = e.$handleEvent(t)),
                              e.LoginSuccessCallback.apply(void 0, arguments);
                          },
                          LoginFail: function (t) {
                            (arguments[0] = t = e.$handleEvent(t)),
                              e.LoginFailCallback.apply(void 0, arguments);
                          },
                        },
                      })
                    : n(
                        "v-uni-button",
                        {
                          staticClass: "confirm-btn",
                          attrs: {
                            type: "primary",
                            disabled: e.PreConsumeBtnStyle.disabled,
                          },
                          on: {
                            click: function (t) {
                              (arguments[0] = t = e.$handleEvent(t)),
                                e.ConfirmConsumePreOrder.apply(
                                  void 0,
                                  arguments
                                );
                            },
                          },
                        },
                        [e._v(e._s(e.PreConsumeBtnStyle.text))]
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
    "64f8": function (e, t, n) {
      "use strict";
      var a = n("8492"),
        i = n.n(a);
      i.a;
    },
    "7b28": function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("3d08"),
        i = n.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(r);
      t["default"] = i.a;
    },
    "7ee5": function (e, t, n) {
      var a = n("24fb");
      (t = a(!1)),
        t.push([
          e.i,
          ".viewimgbg[data-v-016613ee]{height:%?420?%}.content-container[data-v-016613ee]{position:fixed;width:100%}.top-content[data-v-016613ee]{text-align:center;line-height:1.5;margin-top:%?50?%}.top-content>.title[data-v-016613ee]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#fff;opacity:.6}.top-content>.money>.icon[data-v-016613ee]{color:#fff}.top-content>.money>.text[data-v-016613ee]{font-size:%?80?%;font-family:Arial;font-weight:400;color:#fff}.info-container[data-v-016613ee]{top:%?450?%;position:fixed;width:100%}.item-info[data-v-016613ee]{display:flex;align-items:center;justify-content:space-between;margin:%?50?% %?60?%}.item-info>.item-title[data-v-016613ee]{flex:0 0 %?220?%;font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#8b93aa}.item-info>.item-content[data-v-016613ee]{font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#333}.btn-container[data-v-016613ee]{width:100%;text-align:center;position:relative;top:%?1000?%}.confirm-btn[data-v-016613ee]{background-image:linear-gradient(90deg,#32b1fe,#338af9);background:#32b1fe!important;margin:0 %?120?%}",
          "",
        ]),
        (e.exports = t);
    },
    8492: function (e, t, n) {
      var a = n("7ee5");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
      var i = n("4f06").default;
      i("5c652f4c", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    9713: function (e, t, n) {
      "use strict";
      (function (e) {
        n("7a82");
        var a = n("ee27").default;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0),
          n("d3b7"),
          n("a9e3"),
          n("e9c4"),
          n("c975"),
          n("d401"),
          n("25f0"),
          n("99af");
        var i = a(n("0122")),
          r = a(n("f07e")),
          o = a(n("c964")),
          u = a(n("6972")),
          s = (a(n("5cd9")), a(n("f34f"))),
          c =
            (n("e143"),
            {
              data: function () {
                return {
                  userdata: this.$store.state.user,
                  project: this.$store.state.project,
                  PreConsumeData: {
                    money: "-.--",
                    title: "消费支付",
                    order_id: "",
                    device_id: "",
                  },
                  OauthLogin: { show: !1, device_id: "" },
                  PreConsumeBtnStyle: { disabled: !1, text: "立即支付" },
                  isAllowClick: !0,
                };
              },
              onLoad: function (t) {
                var n = this;
                if (t.device_id) {
                  if (
                    (e.log("---------消费机消费-----------"),
                    this.$store.commit("SetLaunchData", null),
                    (this.PreConsumeData.device_id = t.device_id),
                    (this.PreConsumeData.order_id = t.order_id),
                    !this.$store.getters.hasLogin ||
                      !this.$store.getters.hasBindProject)
                  )
                    return (
                      (this.OauthLogin.device_id = t.device_id),
                      (this.OauthLogin.show = !0),
                      void setTimeout(function () {
                        e.log(n.$refs.LoginButton),
                          n.$refs.LoginButton.GetLoginCode();
                      }, 500)
                    );
                  this.InitDevAndCheckInfo();
                }
              },
              components: { LoginButton: s.default },
              computed: {
                balance: function () {
                  return this.$store.getters.userCanUseBalance;
                },
                cashcount: function () {
                  return this.$store.getters.userCashCount;
                },
                projectname: function () {
                  return this.$store.getters.projectName;
                },
                phone: function () {
                  return this.$store.getters.userPhone;
                },
              },
              methods: {
                InitDevAndCheckInfo: function () {
                  var t = this;
                  return (0, o.default)(
                    (0, r.default)().mark(function n() {
                      var a, i;
                      return (0, r.default)().wrap(function (n) {
                        while (1)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                uni.showLoading({
                                  mask: !0,
                                  title: "准备支付中",
                                }),
                                (n.next = 3),
                                u.default
                                  .GetDevById(t.PreConsumeData.device_id)
                                  .catch(function (t) {
                                    e.log("-----查询设备信息------", t);
                                  })
                              );
                            case 3:
                              if (
                                ((a = n.sent),
                                e.log("-----------deviceInfo-----------", a),
                                (i = !1),
                                !a)
                              ) {
                                n.next = 11;
                                break;
                              }
                              return (
                                (n.next = 9),
                                u.default.WaitCompareDeviceProjectInfo(
                                  t.PreConsumeData.device_id
                                )
                              );
                            case 9:
                              (i = n.sent),
                                e.log("-----------compare_ret-----------", i);
                            case 11:
                              if (!a || !i) {
                                n.next = 15;
                                break;
                              }
                              t.QueryConsumePreOrder(), (n.next = 24);
                              break;
                            case 15:
                              return (
                                t.changBtnStatusUI("wait_changeproject"),
                                (n.next = 18),
                                u.default
                                  .ChangeProject(t.PreConsumeData.device_id)
                                  .catch(function (n) {
                                    e.log("-----发起切换项目------", n),
                                      t.changBtnStatusUI("query_error", n),
                                      u.default.showalert("提示", n);
                                  })
                              );
                            case 18:
                              n.sent,
                                (t.userdata = t.$store.state.user),
                                (t.project = t.$store.state.project),
                                t.$store.commit("SetAllRequestFlagDefault"),
                                e.log("-----切换完成查询项目信息------"),
                                t.QueryConsumePreOrder();
                            case 24:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
                },
                changBtnStatusUI: function (e, t) {
                  switch (e) {
                    case "query_error":
                      (this.PreConsumeBtnStyle.disabled = !0),
                        (this.PreConsumeBtnStyle.text = t);
                      break;
                    case "wait_changeproject":
                      (this.PreConsumeBtnStyle.disabled = !0),
                        (this.PreConsumeBtnStyle.text = "环境切换中");
                      break;
                    case "wait_payfinishedresult":
                      (this.PreConsumeBtnStyle.disabled = !0),
                        (this.PreConsumeBtnStyle.text = "查询结果中");
                      break;
                    case "enable_startpay":
                      (this.PreConsumeBtnStyle.disabled = !1),
                        (this.PreConsumeBtnStyle.text = "立即支付");
                      break;
                    case "paying":
                      (this.PreConsumeBtnStyle.disabled = !0),
                        (this.PreConsumeBtnStyle.text = "准备支付中");
                      break;
                    default:
                      break;
                  }
                },
                LoginSuccessCallback: function (t) {
                  var n = this;
                  return (0, o.default)(
                    (0, r.default)().mark(function a() {
                      var i;
                      return (0, r.default)().wrap(function (a) {
                        while (1)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                e.log(t),
                                (n.OauthLogin.show = !1),
                                (a.next = 4),
                                u.default.RefreshUserinfo()
                              );
                            case 4:
                              return (
                                a.sent,
                                (n.userdata = n.$store.state.user),
                                (n.project = n.$store.state.project),
                                (a.next = 9),
                                n.QueryConsumePreOrder()
                              );
                            case 9:
                              (i = a.sent), i && n.ConfirmConsumePreOrder();
                            case 11:
                            case "end":
                              return a.stop();
                          }
                      }, a);
                    })
                  )();
                },
                LoginFailCallback: function (t) {
                  var n = this;
                  return (
                    e.log(t),
                    u.default.showalert(
                      "提示",
                      t,
                      null,
                      function () {
                        n.$refs.LoginButton.GetLoginCode();
                      },
                      !1
                    )
                  );
                },
                QueryConsumePreOrder: function () {
                  var t = this;
                  return (0, o.default)(
                    (0, r.default)().mark(function n() {
                      return (0, r.default)().wrap(function (n) {
                        while (1)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                uni.showLoading({ title: "订单信息查询中..." }),
                                n.abrupt(
                                  "return",
                                  new Promise(function (n, a) {
                                    u.default
                                      .sendapppost(
                                        t.project.server_addr +
                                          u.default.API_PATH
                                            .ConsumeQueryPreOrder,
                                        {
                                          prepare_id: t.PreConsumeData.order_id,
                                          device_id: t.PreConsumeData.device_id,
                                        }
                                      )
                                      .then(function (a) {
                                        e.log(a),
                                          (t.PreConsumeData.money = Number(
                                            a.Amount
                                          ).toFixed(2)),
                                          t.changBtnStatusUI("enable_startpay"),
                                          n(!0);
                                      })
                                      .catch(function (a) {
                                        return (
                                          e.log(a),
                                          n(!1),
                                          t.changBtnStatusUI("query_error", a),
                                          t.HandleErrTip(a)
                                        );
                                      })
                                      .finally(function () {
                                        uni.hideLoading();
                                      });
                                  })
                                )
                              );
                            case 2:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
                },
                ConfirmConsumePreOrder: function () {
                  var t = this;
                  return (0, o.default)(
                    (0, r.default)().mark(function n() {
                      return (0, r.default)().wrap(function (n) {
                        while (1)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (t.isAllowClick) {
                                n.next = 2;
                                break;
                              }
                              return n.abrupt("return");
                            case 2:
                              (t.isAllowClick = !1),
                                uni.showLoading({ title: "订单信息确认中..." }),
                                u.default
                                  .sendapppost(
                                    t.project.server_addr +
                                      u.default.API_PATH.ConsumeRetailConfirm,
                                    {
                                      prepare_id: t.PreConsumeData.order_id,
                                      device_id: t.PreConsumeData.device_id,
                                    }
                                  )
                                  .then(function (n) {
                                    return (
                                      e.log(
                                        "-----------------ret--------------------"
                                      ),
                                      e.log(n),
                                      "prepare_pay" == n.status ||
                                      "waiting_pay" == n.status
                                        ? (u.default.showloading("请求支付..."),
                                          t.changBtnStatusUI("order_paying"),
                                          t.StartPaymentOrder(n))
                                        : uni.redirectTo({
                                            url:
                                              "/pagesA/consumeend/consumeend?orderid=" +
                                              n.order_id,
                                          })
                                    );
                                  })
                                  .catch(function (n) {
                                    e.log(
                                      "-----------------err--------------------"
                                    ),
                                      e.log(JSON.stringify(n));
                                    var a = n;
                                    if (n && "object" == (0, i.default)(n)) {
                                      if (
                                        "请求签约支卡通以及商户代扣" == n.msg ||
                                        "请签约支卡通" == n.msg ||
                                        "请签约免密支付" == n.msg
                                      ) {
                                        var r = n.msg;
                                        0 ==
                                          Number(
                                            t.project.projectswitch
                                              .branch_card_enable
                                          ) &&
                                          ("alipayWithhold",
                                          (r = "请签约免密支付")),
                                          uni.hideLoading();
                                        return u.default.showalert(
                                          "提示",
                                          r,
                                          function () {
                                            t.changBtnStatusUI(
                                              "enable_startpay"
                                            );
                                          },
                                          function () {
                                            (function () {
                                              t.changBtnStatusUI(
                                                "enable_startpay"
                                              );
                                            })();
                                          },
                                          !0,
                                          "不用了",
                                          "立即签约"
                                        );
                                      }
                                      if (
                                        "请支付" == n.msg &&
                                        !u.default.isNullOrEmpty(n.order)
                                      )
                                        return (
                                          u.default.showloading("请求支付..."),
                                          t.changBtnStatusUI("order_paying"),
                                          t.StartPaymentOrder(n.order)
                                        );
                                      a = n.msg;
                                    }
                                    return a.indexOf("余额不足") > -1
                                      ? t.DisplayBalanceNotEnoughModal(a)
                                      : t.HandleErrTip(a);
                                  })
                                  .finally(function () {
                                    uni.hideLoading(), (t.isAllowClick = !0);
                                  });
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
                },
                StartPaymentOrder: function (e) {
                  var t = {
                    consumetype: 1,
                    order: {
                      pay_money: e.pay_money,
                      order_id: e.order_id,
                      create_at: e.create_at,
                    },
                  };
                  uni.navigateTo({
                    url: "/pages/immediatepaymentorder/immediatepaymentorder?launchtype=pre_consume&parameterobj=".concat(
                      encodeURIComponent(JSON.stringify(t))
                    ),
                  }),
                    uni.hideLoading();
                },
                cancelpaymentorder: function (e) {
                  var t = this;
                  return new Promise(function (n, a) {
                    u.default
                      .sendapppost(
                        t.$store.state.project.server_addr +
                          u.default.API_PATH.cancelimmediatepaymentorder,
                        { order_id: e }
                      )
                      .then(function (e) {
                        return n(e);
                      })
                      .catch(function (e) {
                        return a(e);
                      });
                  });
                },
                finishedpaystartquerystatus: function (e) {
                  u.default.showloading("确认结果中"),
                    this.changBtnStatusUI("wait_payfinishedresult"),
                    this.refreshorderstatus(e.order_id);
                },
                refreshorderstatus: function (t) {
                  var n = this,
                    a = 0,
                    i = (function () {
                      var s = (0, o.default)(
                        (0, r.default)().mark(function o() {
                          var s;
                          return (0, r.default)().wrap(
                            function (r) {
                              while (1)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    return (
                                      (r.prev = 0),
                                      (r.next = 3),
                                      u.default.sendapppost(
                                        n.project.server_addr +
                                          u.default.API_PATH.getrecorddetail,
                                        { bill_id: t, use_type: "consume" }
                                      )
                                    );
                                  case 3:
                                    if (
                                      ((s = r.sent), "finished" != s.status)
                                    ) {
                                      r.next = 7;
                                      break;
                                    }
                                    return (
                                      uni.hideLoading(),
                                      r.abrupt(
                                        "return",
                                        uni.redirectTo({
                                          url:
                                            "/pagesA/consumeend/consumeend?orderid=" +
                                            s.order_id,
                                        })
                                      )
                                    );
                                  case 7:
                                    if (!(a > 2)) {
                                      r.next = 10;
                                      break;
                                    }
                                    return (
                                      uni.hideLoading(),
                                      r.abrupt(
                                        "return",
                                        u.default.showalert(
                                          "订单状态异常，请留意设备是否已经完成扣费"
                                        )
                                      )
                                    );
                                  case 10:
                                    setTimeout(function () {
                                      a++, i();
                                    }, 1e3),
                                      (r.next = 18);
                                    break;
                                  case 13:
                                    return (
                                      (r.prev = 13),
                                      (r.t0 = r["catch"](0)),
                                      e.log(r.t0),
                                      uni.hideLoading(),
                                      r.abrupt(
                                        "return",
                                        u.default.showalert(r.t0)
                                      )
                                    );
                                  case 18:
                                  case "end":
                                    return r.stop();
                                }
                            },
                            o,
                            null,
                            [[0, 13]]
                          );
                        })
                      );
                      return function () {
                        return s.apply(this, arguments);
                      };
                    })();
                  i();
                },
                UserChangeProjectAndPay: function () {
                  var e = this;
                  return (0, o.default)(
                    (0, r.default)().mark(function t() {
                      return (0, r.default)().wrap(function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), u.default.RefreshUserinfo();
                            case 2:
                              t.sent,
                                (e.userdata = e.$store.state.user),
                                (e.project = e.$store.state.project);
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )();
                },
                DisplayBalanceNotEnoughModal: function (e) {
                  return (
                    uni.hideLoading(),
                    this.changBtnStatusUI("query_error", e),
                    u.default.showalert(
                      "提示",
                      e + "是否前去充值",
                      null,
                      function () {
                        setTimeout(function () {
                          uni.navigateTo({
                            url: "/pages/rechargeContainer/rechargeContainer",
                          });
                        }, 500);
                      },
                      !0,
                      "取消",
                      "确认"
                    )
                  );
                },
                HandleErrTip: function (e) {
                  var t = { 订单已失效: "订单已失效,请重新扫码发起支付" },
                    n = u.default.isNullOrEmpty(t[e]) ? e : t[e];
                  return u.default.showalert(
                    "提示",
                    n,
                    null,
                    function () {
                      uni.navigateBack({ delta: 1 });
                    },
                    !1
                  );
                },
              },
            });
        t.default = c;
      }).call(this, n("5a52")["default"]);
    },
    aa1f9: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "a", function () {});
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "v-uni-button",
            {
              staticClass: "confirm-btn",
              attrs: { type: "primary", "open-type": "getPhoneNumber" },
              on: {
                getphonenumber: function (t) {
                  (arguments[0] = t = e.$handleEvent(t)),
                    e.OnGetPhoneNumber.apply(void 0, arguments);
                },
                click: function (t) {
                  (arguments[0] = t = e.$handleEvent(t)),
                    e.GetUserinfo.apply(void 0, arguments);
                },
              },
            },
            [e._v(e._s(e.text))]
          );
        },
        i = [];
    },
    ec22: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("9713"),
        i = n.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(r);
      t["default"] = i.a;
    },
    f34f: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("aa1f9"),
        i = n("7b28");
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return i[e];
            });
          })(r);
      var o = n("f0c5"),
        u = Object(o["a"])(
          i["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "f23639c8",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = u.exports;
    },
  },
]);
