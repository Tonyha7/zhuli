(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesB-Wcs6-CardTransfer-CardTransfer"],
  {
    "02c1": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("5fb1"),
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
    "0838": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("1fc10"),
        a = n("02c1");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      n("5465");
      var r = n("f0c5"),
        s = Object(r["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "fc70b5c0",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "1fc10": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var i = { loginButton: n("f34f").default },
        a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            { staticClass: "viewcontainer" },
            [
              n("v-uni-image", {
                staticClass: "viewimgbg",
                attrs: {
                  src: "/pagesB/static/card_ransfer_bg.jpg",
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
                    [t._v("余额转存")]
                  ),
                ],
                2
              ),
              n(
                "v-uni-view",
                { staticClass: "action-container" },
                [
                  n(
                    "v-uni-view",
                    { staticClass: "logo-container" },
                    [
                      n("v-uni-image", {
                        staticClass: "logo-image",
                        attrs: { src: "/static/applogo.png" },
                      }),
                      t.OauthLogin.show
                        ? t._e()
                        : n(
                            "v-uni-text",
                            {
                              staticClass: "record-title",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.OpenRecord.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v("转存记录")]
                          ),
                    ],
                    1
                  ),
                  t.IsInCardProcess
                    ? n(
                        "v-uni-view",
                        { staticClass: "info-container" },
                        [
                          n(
                            "v-uni-view",
                            { staticClass: "item-info" },
                            [
                              n("v-uni-view", { staticClass: "item-title" }, [
                                t._v("设备编号"),
                              ]),
                              n("v-uni-view", { staticClass: "item-content" }, [
                                t._v(t._s(t.TipPromptmodal.device_id)),
                              ]),
                            ],
                            1
                          ),
                          n(
                            "v-uni-view",
                            { staticClass: "item-info" },
                            [
                              n("v-uni-view", { staticClass: "item-title" }, [
                                t._v("卡片余额"),
                              ]),
                              n("v-uni-view", { staticClass: "item-content" }, [
                                t._v(t._s(t.ProcessObj.balance) + "元"),
                              ]),
                            ],
                            1
                          ),
                          n(
                            "v-uni-view",
                            { staticClass: "item-info" },
                            [
                              n("v-uni-view", { staticClass: "item-title" }, [
                                t._v("转存状态"),
                              ]),
                              n("v-uni-view", { staticClass: "item-content" }, [
                                t._v(t._s(t.ProcessObj.status)),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : n(
                        "v-uni-view",
                        { staticClass: "info-container" },
                        [
                          n(
                            "v-uni-view",
                            { staticClass: "item-info" },
                            [
                              n("v-uni-view", { staticClass: "item-title" }, [
                                t._v("项目名称"),
                              ]),
                              n("v-uni-view", { staticClass: "item-content" }, [
                                t._v(t._s(t.projectname)),
                              ]),
                            ],
                            1
                          ),
                          n(
                            "v-uni-view",
                            { staticClass: "item-info" },
                            [
                              n("v-uni-view", { staticClass: "item-title" }, [
                                t._v("可用余额"),
                              ]),
                              n("v-uni-view", { staticClass: "item-content" }, [
                                t._v(t._s(t.balance) + "元"),
                              ]),
                            ],
                            1
                          ),
                          n(
                            "v-uni-view",
                            { staticClass: "item-info" },
                            [
                              n("v-uni-view", { staticClass: "item-title" }, [
                                t._v("可用优惠券"),
                              ]),
                              n("v-uni-view", { staticClass: "item-content" }, [
                                t._v(t._s(t.cashcount) + "张"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                  n(
                    "v-uni-view",
                    { staticClass: "tip-container" },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "title" },
                        [
                          n("v-uni-view", { staticClass: "title-text" }, [
                            t._v("注意事项"),
                          ]),
                        ],
                        1
                      ),
                      n("v-uni-view", { staticClass: "title-border" }),
                      n("v-uni-view", { staticClass: "content" }, [
                        t._v("1.插卡后请在10秒内核对原系统消费卡账户信息;"),
                        n("br"),
                        t._v(
                          "2.转存成功后原系统卡片余额将清零，余额转存到“住理生活”小程序账户内;"
                        ),
                        n("br"),
                        t._v("3.同一张卡片只能转存一次;"),
                        n("br"),
                        t._v(
                          "4.若支付宝“住理生活”小程序账户已绑定卡片则只会转存余额;"
                        ),
                        n("br"),
                        t._v(
                          "5.若支付宝“住理生活”小程序账户未绑定卡片则会将转存的卡片自关联到小程序账户原卡继续使用。"
                        ),
                      ]),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticClass: "btn-container" },
                    [
                      t.IsInCardProcess
                        ? n(
                            "v-uni-view",
                            [
                              n(
                                "v-uni-button",
                                {
                                  staticClass:
                                    "confirm-btn no-border-action-btn",
                                  staticStyle: { margin: "0 0.5rem" },
                                  attrs: { type: "primary", disabled: "true" },
                                },
                                [t._v(t._s(t.CardProcessTip))]
                              ),
                            ],
                            1
                          )
                        : t._e(),
                      t.OauthLogin.show && !t.IsInCardProcess
                        ? n("login-button", {
                            ref: "LoginButton",
                            attrs: {
                              deviceId: t.OauthLogin.device_id,
                              text: "开始转存",
                            },
                            on: {
                              LoginSuccess: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.LoginSuccessCallback.apply(
                                    void 0,
                                    arguments
                                  );
                              },
                              LoginFail: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.LoginFailCallback.apply(void 0, arguments);
                              },
                            },
                          })
                        : t._e(),
                      t.OauthLogin.show || t.IsInCardProcess
                        ? t._e()
                        : n(
                            "v-uni-button",
                            {
                              staticClass: "confirm-btn no-border-action-btn",
                              attrs: { type: "primary" },
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.clickBind.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v("开始转存")]
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
                  staticClass: "cu-modal ",
                  class: [{ show: t.TipPromptmodal.showflag }],
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
                  n(
                    "v-uni-view",
                    { staticClass: "cu-dialog tip-moal" },
                    [
                      n(
                        "v-uni-view",
                        { staticStyle: { width: "100%", height: "100%" } },
                        [
                          n(
                            "v-uni-view",
                            { staticClass: "dev-info-container" },
                            [
                              n(
                                "v-uni-view",
                                {
                                  staticClass: "title",
                                  staticStyle: { "padding-top": "20upx" },
                                },
                                [t._v("检测到设备：")]
                              ),
                              n("v-uni-view", { staticClass: "content" }, [
                                t._v(t._s(t.TipPromptmodal.device_id)),
                              ]),
                              n(
                                "v-uni-view",
                                {
                                  staticClass: "title",
                                  staticStyle: { "margin-top": "40upx" },
                                },
                                [t._v("设备地址：")]
                              ),
                              n(
                                "v-uni-view",
                                { staticClass: "content adress-text-ellipsis" },
                                [t._v(t._s(t.TipPromptmodal.device_addr))]
                              ),
                            ],
                            1
                          ),
                          n("v-uni-view", { staticClass: "desc-container" }, [
                            t._v("即将开始转存，是否立即开始？"),
                          ]),
                          n(
                            "v-uni-view",
                            {
                              staticClass: "btncontainer tip-moal-btncontainer",
                            },
                            [
                              n(
                                "v-uni-button",
                                {
                                  staticClass: "confirm-btn close-btn",
                                  attrs: { type: "primary" },
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        (t.TipPromptmodal.showflag = !1);
                                    },
                                  },
                                },
                                [t._v("再等等看")]
                              ),
                              n(
                                "v-uni-button",
                                {
                                  staticClass: "confirm-btn",
                                  attrs: { type: "primary" },
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.ConfirmBind.apply(void 0, arguments);
                                    },
                                  },
                                },
                                [t._v("立即开始")]
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
        o = [];
    },
    "3d08": function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82");
        var i = n("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          n("d3b7"),
          n("e9c4"),
          n("c975");
        var a,
          o = i(n("fc11")),
          r = i(n("f07e")),
          s = i(n("c964")),
          c = i(n("6972")),
          u = {
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
              ((a = {
                WaitGetPhoneNumber: function () {
                  var e = this;
                  return (0, s.default)(
                    (0, r.default)().mark(function n() {
                      return (0, r.default)().wrap(function (n) {
                        while (1)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return n.abrupt(
                                "return",
                                new Promise(
                                  (function () {
                                    var n = (0, s.default)(
                                      (0, r.default)().mark(function n(i, a) {
                                        var o;
                                        return (0, r.default)().wrap(function (
                                          n
                                        ) {
                                          while (1)
                                            switch ((n.prev = n.next)) {
                                              case 0:
                                                0,
                                                  (o = function () {
                                                    t.log(
                                                      "-------------" +
                                                        e.OauthLogin
                                                          .EncryptedPhoneData
                                                    ),
                                                      "" !=
                                                        e.OauthLogin
                                                          .EncryptedPhoneData &&
                                                        (clearInterval(
                                                          e.PhoneInterval
                                                        ),
                                                        i(!0));
                                                  }),
                                                  (e.PhoneInterval =
                                                    setInterval(function () {
                                                      o();
                                                    }, 100));
                                              case 3:
                                              case "end":
                                                return n.stop();
                                            }
                                        },
                                        n);
                                      })
                                    );
                                    return function (t, e) {
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
                OnGetPhoneNumber: function (e) {
                  t.log(
                    "-------------加密手机号---------------" +
                      JSON.stringify(e.detail)
                  ),
                    e.detail.errMsg && e.detail.errMsg.indexOf("fail") > -1
                      ? (this.OauthLogin.EncryptedPhoneData = "fail")
                      : ((this.OauthLogin.EncryptedPhoneData =
                          e.detail.encryptedData),
                        (this.OauthLogin.EncryptedPhoneDataIv = e.detail.iv));
                },
                GetUserinfo: function () {
                  this.$emit("LoginSuccess", { a: 0 });
                },
                GetLoginCode: function () {
                  var e = this;
                  return new Promise(
                    (function () {
                      var n = (0, s.default)(
                        (0, r.default)().mark(function n(i, a) {
                          return (0, r.default)().wrap(function (n) {
                            while (1)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  uni.login({
                                    scopes: "auth_user",
                                    success: function (n) {
                                      t.log(
                                        "----------------登录信息------loginRes-------",
                                        n
                                      ),
                                        (e.OauthLogin.code = n.code),
                                        i(!0);
                                    },
                                    fail: function (e) {
                                      t.log(
                                        "----------------登录信息------err-------",
                                        e
                                      ),
                                        i(!1);
                                    },
                                  });
                                case 1:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        })
                      );
                      return function (t, e) {
                        return n.apply(this, arguments);
                      };
                    })()
                  );
                },
              }),
              (0, o.default)(a, "GetUserinfo", function (e) {
                t.log(
                  "----------------登录信息------------------",
                  this.OauthLogin.code
                );
              }),
              (0, o.default)(a, "ServeLogin", function (e) {
                var n = this;
                return (0, s.default)(
                  (0, r.default)().mark(function i() {
                    var a, o, s;
                    return (0, r.default)().wrap(
                      function (i) {
                        while (1)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (
                                (i.prev = 0),
                                c.default.showloading("登录授权中..."),
                                (i.next = 4),
                                c.default.sendauthpost(
                                  c.default.AUTH_SERVER_ADDR +
                                    c.default.API_PATH.login,
                                  e
                                )
                              );
                            case 4:
                              if (
                                ((a = i.sent),
                                t.log(a),
                                a.isbind || !("isbind" in a))
                              ) {
                                i.next = 10;
                                break;
                              }
                              return (
                                uni.hideLoading(),
                                (o =
                                  "../userbindproject/userbindproject?logintype=account&userid=" +
                                  a.userid +
                                  "&authid=" +
                                  a.authid),
                                i.abrupt("return", uni.redirectTo({ url: o }))
                              );
                            case 10:
                              (a.opendatainfo = n.OauthLogin.userinfo),
                                (a.id = a.serveruserid),
                                delete a["serveruserid"],
                                n.$store.commit("SetUserData", a),
                                (n.OauthLogin.userinfo = a),
                                "",
                                (s = a.project),
                                n.$store.commit("SetProjectData", s),
                                n.$emit("LoginSuccess", a),
                                (i.next = 26);
                              break;
                            case 21:
                              (i.prev = 21),
                                (i.t0 = i["catch"](0)),
                                t.log(i.t0),
                                uni.hideLoading(),
                                n.$emit("LoginFail", i.t0);
                            case 26:
                            case "end":
                              return i.stop();
                          }
                      },
                      i,
                      null,
                      [[0, 21]]
                    );
                  })
                )();
              }),
              a),
          };
        e.default = u;
      }).call(this, n("5a52")["default"]);
    },
    5465: function (t, e, n) {
      "use strict";
      var i = n("8429"),
        a = n.n(i);
      a.a;
    },
    "5fb1": function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82");
        var i = n("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = i(n("f07e")),
          o = i(n("c964"));
        n("99af");
        var r = i(n("6972")),
          s = i(n("f34f")),
          c = {
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                TipPromptmodal: {
                  showflag: !1,
                  device_id: "",
                  device_addr: "",
                  record_id: "",
                },
                ProcessObj: {
                  record_id: "",
                  status: "",
                  balance: "",
                  message: "",
                },
                refreshTimer: null,
                TransferMode: "default",
                OauthLogin: { show: !1, device_id: "" },
              };
            },
            components: { LoginButton: s.default },
            onLoad: function (e) {
              var n = this;
              if (e.device_id) {
                if (
                  ((this.TransferMode = "scan"), !this.$store.getters.hasLogin)
                )
                  return (
                    (this.OauthLogin.show = !0),
                    (this.OauthLogin.device_id = e.device_id),
                    void setTimeout(function () {
                      t.log(n.$refs.LoginButton),
                        n.$refs.LoginButton.GetLoginCode();
                    }, 500)
                  );
                this.initDeviceInfoById(e.device_id, !1);
              }
            },
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
              IsInCardProcess: function () {
                return "" != this.TipPromptmodal.record_id;
              },
              CardProcessTip: function () {
                return "已转存" == this.ProcessObj.status
                  ? "转存成功"
                  : "正在转存中,请留意设备状态";
              },
            },
            onUnload: function () {
              clearTimeout(this.refreshTimer), (this.refreshTimer = null);
            },
            methods: {
              moveStop: function () {},
              ParseDeviceCode: function (t) {
                var e = { result: !1, tip: "", device_id: "" };
                try {
                  var n = r.default.CheckWcs6CardUsePlatform(t);
                  if (!n.result) return (e = n), e;
                  (e.result = !0),
                    (e.device_id = r.default.ParseScanResult(t).d);
                } catch (i) {
                  (e.result = !1),
                    (e.tip = "设备二维码解析错误"),
                    r.default.logger.warn(
                      "CardTransfer.vue",
                      "设备二维码解析错误,设备号:"
                        .concat(t, ",error:")
                        .concat(i),
                      "ParseDeviceCode"
                    );
                }
                return (
                  r.default.isNullOrEmpty(e.device_id) &&
                    ((e.result = !1), (e.tip = "未获取到设备编号")),
                  e
                );
              },
              clickBind: function () {
                var t = this;
                r.default.StartScan(function (e, n) {
                  if (n)
                    return uni.showToast({
                      title: n,
                      position: "center",
                      icon: "none",
                    });
                  r.default.showloading("加载中...");
                  var i = t.ParseDeviceCode(e);
                  if (!i.result)
                    return (
                      uni.hideLoading(),
                      uni.showToast({
                        mask: !0,
                        title: i.tip,
                        duration: 2e3,
                        icon: "none",
                      })
                    );
                  t.initDeviceInfoById(i.device_id, !1);
                });
              },
              initDeviceInfoById: function (e, n) {
                var i = this;
                r.default.showloading("设备加载中...");
                var s = { id: e };
                r.default
                  .sendapppost(
                    this.$store.state.project.server_addr +
                      r.default.API_PATH.getdevicebyid,
                    s
                  )
                  .then(function (t) {
                    (i.TipPromptmodal.device_id = t.device_id),
                      (i.TipPromptmodal.device_addr = r.default.getBuildingInfo(
                        t.building_name,
                        t.floor_name,
                        t.room_name
                      )),
                      setTimeout(function () {
                        n
                          ? i.ConfirmBind()
                          : ((i.TipPromptmodal.showflag = !0),
                            uni.hideLoading());
                      }, 500);
                  })
                  .catch(
                    (function () {
                      var e = (0, o.default)(
                        (0, a.default)().mark(function e(n) {
                          return (0, a.default)().wrap(function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  t.log("bindResult==err==>", n),
                                    uni.hideLoading(),
                                    r.default.showalert("提示", n);
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  );
              },
              ConfirmBind: function () {
                var e = this;
                r.default.showloading("请求开始中..."),
                  r.default
                    .sendapppost(
                      this.$store.state.project.server_addr +
                        r.default.API_PATH.StartOpenWcs6CardTransfer,
                      {
                        staff_id: this.userdata.detailinfo.id,
                        device_id: this.TipPromptmodal.device_id,
                      }
                    )
                    .then(function (t) {
                      uni.hideLoading(),
                        (e.TipPromptmodal.showflag = !1),
                        (e.TipPromptmodal.record_id = t.record_id),
                        e.RefreshProcessStatus(),
                        setTimeout(function () {
                          return uni.showToast({
                            mask: !0,
                            title: "请留意卡片转存状态",
                            duration: 2e3,
                            icon: "none",
                          });
                        }, 500);
                    })
                    .catch(
                      (function () {
                        var e = (0, o.default)(
                          (0, a.default)().mark(function e(n) {
                            return (0, a.default)().wrap(function (e) {
                              while (1)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    uni.hideLoading(),
                                      t.log(
                                        "StartOpenWcs6CardTransfer==err==>",
                                        n
                                      ),
                                      r.default.showalert("提示", n);
                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()
                    );
              },
              RefreshProcessStatus: function () {
                var e = this;
                return (0, o.default)(
                  (0, a.default)().mark(function n() {
                    var i;
                    return (0, a.default)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            (i = (function () {
                              var n = (0, o.default)(
                                (0, a.default)().mark(function n() {
                                  var o;
                                  return (0, a.default)().wrap(
                                    function (n) {
                                      while (1)
                                        switch ((n.prev = n.next)) {
                                          case 0:
                                            return (
                                              (n.prev = 0),
                                              (n.next = 3),
                                              r.default.sendapppost(
                                                e.$store.state.project
                                                  .server_addr +
                                                  r.default.API_PATH
                                                    .GetWcs6CardTransferStatus,
                                                {
                                                  record_id:
                                                    e.TipPromptmodal.record_id,
                                                }
                                              )
                                            );
                                          case 3:
                                            if (
                                              ((o = n.sent),
                                              uni.hideLoading(),
                                              (e.ProcessObj = o),
                                              "已转存" != o.status)
                                            ) {
                                              n.next = 10;
                                              break;
                                            }
                                            return n.abrupt(
                                              "return",
                                              r.default.showalert(
                                                "提示",
                                                "已完成卡片转存",
                                                null,
                                                function () {
                                                  uni.navigateBack();
                                                },
                                                !1
                                              )
                                            );
                                          case 10:
                                            e.refreshTimer = setTimeout(
                                              function () {
                                                i();
                                              },
                                              5e3
                                            );
                                          case 11:
                                            n.next = 18;
                                            break;
                                          case 13:
                                            (n.prev = 13),
                                              (n.t0 = n["catch"](0)),
                                              uni.hideLoading(),
                                              t.log(
                                                "StartOpenWcs6CardTransfer==err==>",
                                                n.t0
                                              ),
                                              (e.refreshTimer = setTimeout(
                                                function () {
                                                  i();
                                                },
                                                5e3
                                              ));
                                          case 18:
                                          case "end":
                                            return n.stop();
                                        }
                                    },
                                    n,
                                    null,
                                    [[0, 13]]
                                  );
                                })
                              );
                              return function () {
                                return n.apply(this, arguments);
                              };
                            })()),
                              i();
                          case 2:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
              OpenRecord: function () {
                uni.navigateTo({ url: "../CardTransfer/list" });
              },
              LoginSuccessCallback: function (e) {
                var n = this;
                return (0, o.default)(
                  (0, a.default)().mark(function i() {
                    return (0, a.default)().wrap(function (i) {
                      while (1)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (
                              t.log(e),
                              (n.OauthLogin.show = !1),
                              (i.next = 4),
                              r.default.RefreshUserinfo()
                            );
                          case 4:
                            i.sent,
                              (n.userdata = n.$store.state.user),
                              (n.project = n.$store.state.project),
                              n.initDeviceInfoById(n.OauthLogin.device_id, !0);
                          case 8:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  })
                )();
              },
              LoginFailCallback: function (e) {
                var n = this;
                return (
                  t.log(e),
                  r.default.showalert(
                    "提示",
                    e,
                    null,
                    function () {
                      n.$refs.LoginButton.GetLoginCode();
                    },
                    !1
                  )
                );
              },
            },
          };
        e.default = c;
      }).call(this, n("5a52")["default"]);
    },
    "7b28": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("3d08"),
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
    8429: function (t, e, n) {
      var i = n("f29f");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("6ee70786", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    aa1f9: function (t, e, n) {
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
            "v-uni-button",
            {
              staticClass: "confirm-btn",
              attrs: { type: "primary", "open-type": "getPhoneNumber" },
              on: {
                getphonenumber: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.OnGetPhoneNumber.apply(void 0, arguments);
                },
                click: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.GetUserinfo.apply(void 0, arguments);
                },
              },
            },
            [t._v(t._s(t.text))]
          );
        },
        a = [];
    },
    f29f: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          ".action-container[data-v-fc70b5c0]{position:absolute;width:calc(100% - %?120?%);height:auto;margin:%?10?% %?60?%;padding-bottom:%?20?%;background-color:#fff;border-radius:%?20?%}.logo-container[data-v-fc70b5c0]{text-align:center;margin:%?30?% 0}.record-title[data-v-fc70b5c0]{display:inline-block;color:#32b1fe;border-bottom:1px solid #32b1fe;position:absolute;right:%?40?%}.logo-image[data-v-fc70b5c0]{width:%?160?%;height:%?160?%}.info-container[data-v-fc70b5c0]{margin:0 %?60?%}.item-info[data-v-fc70b5c0]{display:flex;align-items:center;margin-top:%?20?%}.item-info > .item-title[data-v-fc70b5c0]{flex:0 0 %?220?%;font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#8b93aa}.item-info > .item-content[data-v-fc70b5c0]{font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#333}.tip-container[data-v-fc70b5c0]{margin:%?20?% %?30?%}.tip-container > .title[data-v-fc70b5c0]{font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#333;line-height:34px;position:relative;z-index:1}.title-border[data-v-fc70b5c0]{width:%?120?%;height:%?20?%;background:#ffe2e2;bottom:%?10?%;z-index:0;position:relative;bottom:%?30?%}.tip-container > .content[data-v-fc70b5c0]{font-size:%?25?%;font-family:PingFang SC;font-weight:500;color:#7c849c;line-height:%?48?%}.btn-container[data-v-fc70b5c0]{width:100%;text-align:center;position:relative\r\n\t/* bottom: -160upx; */}.btn-container uni-button[data-v-fc70b5c0]{background:#32b1fe!important;margin:0 %?120?%;color:#fff}.tip-moal[data-v-fc70b5c0]{width:80%;height:45%;border-radius:%?20?%;background-color:#fff}.dev-info-container[data-v-fc70b5c0]{width:calc(100% - %?80?%);height:calc(50% - %?20?%);background:#f4f5f9;border-radius:20px;margin:%?40?%}.dev-info-container > .title[data-v-fc70b5c0]{font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#333;line-height:%?50?%}.dev-info-container > .content[data-v-fc70b5c0]{font-size:%?32?%;font-family:Arial;font-weight:400;color:#32b1fe;line-height:%?50?%}.tip-moal-btncontainer[data-v-fc70b5c0]{width:calc(100% - %?80?%);display:flex;align-items:flex-end;justify-content:space-between;margin:%?20?% %?40?% 0 %?40?%;height:calc(15% - %?20?%)}.desc-container[data-v-fc70b5c0]{height:calc(25% - %?20?%);font-size:%?32?%;font-family:PingFang SC;font-weight:500;color:#333;line-height:calc(25% - %?20?%);display:flex;align-items:center;justify-content:center}.tip-moal-btncontainer > .close-btn[data-v-fc70b5c0]{border:1px solid #cfd2dc;background-image:linear-gradient(90deg,#fff,#fff)!important;color:#8990a5!important}.tip-moal-btncontainer > .confirm-btn[data-v-fc70b5c0]{background-image:#32b1fe!important;\r\n\t/* border: none !important; */font-size:%?30?%;line-height:%?70?%;width:%?240?%;height:%?70?%}.no-border-action-btn[data-v-fc70b5c0]::after{border:none!important}.adress-text-ellipsis[data-v-fc70b5c0]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;word-break:break-all;-webkit-box-orient:vertical}",
          "",
        ]),
        (t.exports = e);
    },
    f34f: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("aa1f9"),
        a = n("7b28");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      var r = n("f0c5"),
        s = Object(r["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "f23639c8",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
  },
]);
