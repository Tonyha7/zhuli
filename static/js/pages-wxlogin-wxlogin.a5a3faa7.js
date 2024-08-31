(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-wxlogin-wxlogin"],
  {
    "2e36": function (e, t, n) {
      "use strict";
      var i = n("ee02"),
        a = n.n(i);
      a.a;
    },
    6868: function (e, t, n) {
      "use strict";
      (function (e) {
        n("7a82");
        var i = n("ee27").default;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var a = i(n("0122")),
          r = i(n("f07e")),
          o = i(n("c964"));
        n("d3b7"), n("c975"), n("e9c4");
        n("26cb");
        var s = i(n("6972")),
          u = (n("fb18"), null),
          c = {
            data: function () {
              return {
                launch_type: "",
                userinfo: {},
                phoneinfo: {},
                flagbtndisplay: !0,
                flagbindphonedisplay: !1,
                tel: "",
                code: "",
                sendmsgdisabled: !1,
                sendmsgval: "获取验证码",
                countdown: 60,
                args: null,
                EncryptedPhoneData: { data: "", iv: "" },
                PhoneInterval: null,
                loginCode: "",
                attributes: null,
                LaunchData: null,
                pid: "",
                isProjectInfoError: !1,
              };
            },
            comments: {},
            onUnload: function () {
              u && (clearInterval(u), (u = null), (this.countdown = 60));
            },
            onHide: function () {},
            onLoad: function (e) {
              (this.LaunchData = this.$store.state.LaunchData),
                (this.args = e),
                e && e.pid && (this.pid = e.pid),
                "bind_phone" == e.launch_type &&
                  ((this.launch_type = e.launch_type),
                  (this.flagbindphonedisplay = !0),
                  (this.userinfo.authid = e.auth_id));
            },
            onShow: function () {
              this.GetLoginCode();
            },
            methods: {
              initThirdLoginInfo: function () {
                var e = this;
                if (e.LaunchData) {
                  var t = e.LaunchData.query;
                  if (s.default.isNullOrEmpty(t)) e.attributes = null;
                  else {
                    var n = 0;
                    for (var i in t)
                      "ticket" == i && (n += 1),
                        "pid" == i && ((this.pid = t[i]), (n += 1));
                    2 == n
                      ? (s.default.showloading("加载中..."),
                        uni.request({
                          method: "GET",
                          url: "https://cnyz.qnzhixiao.com/gateway/casService/serviceValidate",
                          data: {
                            format: "json",
                            service: "https://whxinna.com",
                            ticket: t.ticket,
                          },
                          success: function (t) {
                            var n =
                              t.data.serviceResponse.authenticationSuccess;
                            n
                              ? (e.attributes = n.attributes)
                              : (e.isProjectInfoError = !0),
                              uni.hideLoading();
                          },
                          fail: function (t) {
                            (e.attributes = null),
                              uni.hideLoading(),
                              (e.isProjectInfoError = !0);
                          },
                        }))
                      : s.default.isNullOrEmpty(t.pid) &&
                        !s.default.isNullOrEmpty(t.ticket)
                      ? ((e.attributes = null), (e.isProjectInfoError = !0))
                      : (e.attributes = null);
                  }
                } else e.attributes = null;
              },
              GetLoginCode: function () {
                var t = this;
                return new Promise(
                  (function () {
                    var n = (0, o.default)(
                      (0, r.default)().mark(function n(i, a) {
                        return (0, r.default)().wrap(function (n) {
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
                                      (t.loginCode = n.code),
                                      i(!0);
                                  },
                                  fail: function (e) {
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
                    return function (e, t) {
                      return n.apply(this, arguments);
                    };
                  })()
                );
              },
              OnGetPhoneNumber: function (e) {
                e.detail.errMsg && e.detail.errMsg.indexOf("fail") > -1
                  ? (this.EncryptedPhoneData.data = "fail")
                  : ((this.EncryptedPhoneData.data = e.detail.encryptedData),
                    (this.EncryptedPhoneData.iv = e.detail.iv));
              },
              WaitGetPhoneNumber: function () {
                var e = this;
                return (0, o.default)(
                  (0, r.default)().mark(function t() {
                    return (0, r.default)().wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt(
                              "return",
                              new Promise(
                                (function () {
                                  var t = (0, o.default)(
                                    (0, r.default)().mark(function t(n, i) {
                                      var a;
                                      return (0, r.default)().wrap(function (
                                        t
                                      ) {
                                        while (1)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              0,
                                                (a = function () {
                                                  "" !=
                                                    e.EncryptedPhoneData.data &&
                                                    (clearInterval(
                                                      e.PhoneInterval
                                                    ),
                                                    n(!0));
                                                }),
                                                (e.PhoneInterval = setInterval(
                                                  function () {
                                                    a();
                                                  },
                                                  100
                                                ));
                                            case 3:
                                            case "end":
                                              return t.stop();
                                          }
                                      },
                                      t);
                                    })
                                  );
                                  return function (e, n) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              )
                            );
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              GetUserinfo: function (t) {
                e.log(t);
              },
              servelogin: function (t) {
                var n = this;
                s.default.showloading("登录中...");
                var i = s.default.AUTH_SERVER_ADDR + s.default.API_PATH.login;
                s.default
                  .sendauthpost(i, t)
                  .then(function (t) {
                    e.log("----------绑定完成手机号-----------"),
                      e.log(t),
                      (t.opendatainfo = n.userinfo),
                      (t.id = t.serveruserid),
                      delete t["serveruserid"],
                      n.$store.commit("SetUserData", t),
                      (n.userinfo = t);
                    if (!t.isbindphone && "isbindphone" in t)
                      return (
                        uni.hideLoading(),
                        (n.flagbindphonedisplay = !0),
                        void (n.tel = t.phone)
                      );
                    if (!t.isbind)
                      return (
                        uni.hideLoading(),
                        void n.toPage({
                          url: "/pagesB/bindProject/navigation",
                          params: {
                            loginType: "account",
                            userId: t.userid,
                            authId: t.authid,
                          },
                          type: "redirect",
                        })
                      );
                    var i = t.project;
                    if (
                      (n.$store.commit(
                        "SetFaceServerSecret",
                        t.face_server_secret
                      ),
                      n.$store.commit("SetProjectData", i),
                      "yes" == n.args.isapp)
                    )
                      return (
                        uni.hideLoading(),
                        uni.redirectTo({
                          url:
                            "../apprecharge/apprecharge?logined=yes&moneytype=" +
                            n.args.moneytype +
                            "&price=" +
                            n.args.price +
                            "&userid=" +
                            n.args.userid +
                            "&cashcouponid=" +
                            n.args.cashcouponid +
                            "&name=" +
                            n.args.name,
                        })
                      );
                    uni.hideLoading(),
                      n.$store.commit("SetAllRequestFlagDefault"),
                      uni.redirectTo({ url: "/pages/index/index" });
                  })
                  .catch(function (e) {
                    return (
                      uni.hideLoading(),
                      s.default.showalert(
                        "提示",
                        e,
                        null,
                        function () {
                          n.GetLoginCode();
                        },
                        !1
                      )
                    );
                  });
              },
              getmsgcodeclick: function () {
                var e = this,
                  t = { phone: e.tel };
                return s.default.isNullOrEmpty(t.phone)
                  ? s.default.showalert("提示", "请输入手机号")
                  : t.phone == this.$store.state.user.phone &&
                    "bind_phone" == this.launch_type
                  ? s.default.showalert("提示", "不能使用当前手机号")
                  : void s.default
                      .sendauthpost(
                        s.default.AUTH_SERVER_ADDR + s.default.API_PATH.sendmsg,
                        t
                      )
                      .then(function (t) {
                        if (t)
                          return (
                            uni.showToast({ title: "发送成功" }),
                            e.refreshbtntime()
                          );
                      })
                      .catch(function (e) {
                        var t = e;
                        return (
                          (0, a.default)(t) == Object &&
                            (t = JSON.stringify(e)),
                          uni.showToast({ title: t, icon: "none" })
                        );
                      });
              },
              bindclick: function () {
                var e = this,
                  t = this.userinfo,
                  n = { phone: e.tel, code: e.code, authid: t.authid };
                return s.default.isNullOrEmpty(n.phone)
                  ? s.default.showalert("提示", "请输入手机号")
                  : s.default.isNullOrEmpty(n.code)
                  ? s.default.showalert("提示", "请输入短信验证码")
                  : (s.default.showloading("绑定中..."),
                    void s.default
                      .sendauthpost(
                        s.default.AUTH_SERVER_ADDR +
                          s.default.API_PATH.binduserphone,
                        n
                      )
                      .then(function (i) {
                        if ((uni.hideLoading(), i)) {
                          if (
                            ((i.opendatainfo = e.userinfo.opendatainfo),
                            (t.isbindphone = !0),
                            (i.phone = n.phone),
                            e.$store.commit("SetUserData", i),
                            !i.isbind)
                          )
                            return void e.toPage({
                              url: "/pagesB/bindProject/navigation",
                              params: {
                                loginType: "account",
                                userId: i.userid,
                                authId: i.authid,
                              },
                              type: "redirect",
                            });
                          var a = i.project;
                          if (
                            (e.$store.commit("SetProjectData", a),
                            "yes" == e.args.isapp)
                          )
                            return uni.redirectTo({
                              url:
                                "../apprecharge/apprecharge?logined=yes&moneytype=" +
                                e.args.moneytype +
                                "&price=" +
                                e.args.price +
                                "&userid=" +
                                e.args.userid +
                                "&cashcouponid=" +
                                e.args.cashcouponid +
                                "&name=" +
                                e.args.name,
                            });
                          if (
                            (uni.showToast({
                              icon: "success",
                              title: "手机号绑定成功",
                            }),
                            "bind_phone" == e.launch_type)
                          )
                            return void (e.flagbindphonedisplay = !1);
                          e.$store.commit("SetAllRequestFlagDefault"),
                            uni.reLaunch({ url: "/pages/index/index" });
                        }
                      })
                      .catch(function (e) {
                        uni.hideLoading(), s.default.showalert("绑定失败", e);
                      }));
              },
              refreshbtntime: function () {
                var e = this;
                u && (clearInterval(u), (u = null)),
                  e.settime(),
                  (u = setInterval(function () {
                    e.settime();
                  }, 1e3));
              },
              settime: function (e) {
                if (0 == this.countdown)
                  return (
                    (this.sendmsgdisabled = !1),
                    (this.sendmsgval = "获取验证码"),
                    (this.countdown = 60),
                    clearInterval(u),
                    void (u = null)
                  );
                (this.sendmsgdisabled = !0),
                  (this.sendmsgval = this.countdown + "s"),
                  this.countdown--;
              },
              RequestUserinfo: function () {
                var e = this;
                return (0, o.default)(
                  (0, r.default)().mark(function t() {
                    var n, i;
                    return (0, r.default)().wrap(function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = e), (t.next = 3), s.default.RefreshUserinfo()
                            );
                          case 3:
                            (i = t.sent),
                              (n.userinfo = i),
                              s.default.isNullOrEmpty(n.args.device_id) ||
                                s.default.getdevinfobyidormac(
                                  n.$store.state.project.server_addr +
                                    s.default.API_PATH.getdevicebyid,
                                  { id: n.args.device_id },
                                  "ScanRedirectToConsume"
                                );
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
            },
          };
        t.default = c;
      }).call(this, n("5a52")["default"]);
    },
    "6d4b": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "a", function () {});
      var i = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
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
                    [e._v("授权登录")]
                  ),
                ],
                2
              ),
              i(
                "v-uni-view",
                { staticClass: "header" },
                [
                  i("v-uni-image", { attrs: { src: n("a5a4") } }),
                  i("v-uni-view", { staticStyle: { "font-size": "20px" } }, [
                    e._v("住理生活"),
                  ]),
                ],
                1
              ),
              i(
                "v-uni-view",
                { staticClass: "content" },
                [
                  e.flagbindphonedisplay
                    ? e._e()
                    : i(
                        "v-uni-view",
                        { staticClass: "auth_view" },
                        [
                          i(
                            "v-uni-view",
                            { staticStyle: { margin: "0 20upx" } },
                            [
                              e._v("住理生活小程序申请获取以下权限"),
                              i("br"),
                              i("br"),
                              e.isProjectInfoError
                                ? i(
                                    "v-uni-text",
                                    { staticStyle: { color: "#dd524d" } },
                                    [e._v("*授权信息错误，禁止使用")]
                                  )
                                : e._e(),
                            ],
                            1
                          ),
                          i("v-uni-view", { staticClass: "btn-view" }),
                        ],
                        1
                      ),
                  e.flagbindphonedisplay
                    ? i(
                        "v-uni-view",
                        { staticClass: "bindphone_view" },
                        [
                          i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                "text-align": "center",
                                "margin-bottom": "20upx",
                                "padding-top": "5px",
                              },
                            },
                            [e._v("请获取验证码以绑定手机号")]
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "cu-form-group" },
                            [
                              i("v-uni-view", { staticClass: "title" }, [
                                e._v("手机号码"),
                              ]),
                              i("v-uni-input", {
                                attrs: {
                                  name: "input",
                                  placeholder: "请输入手机号码",
                                  maxlength: "11",
                                  type: "number",
                                },
                                model: {
                                  value: e.tel,
                                  callback: function (t) {
                                    e.tel = t;
                                  },
                                  expression: "tel",
                                },
                              }),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "cu-form-group",
                              staticStyle: {
                                "border-bottom": "1px solid #EEEEEE",
                              },
                            },
                            [
                              i("v-uni-view", { staticClass: "title" }, [
                                e._v("验 证 码"),
                              ]),
                              i("v-uni-input", {
                                attrs: {
                                  placeholder: "请输入验证码",
                                  name: "input",
                                  maxlength: "6",
                                  type: "number",
                                },
                                model: {
                                  value: e.code,
                                  callback: function (t) {
                                    e.code = t;
                                  },
                                  expression: "code",
                                },
                              }),
                              i(
                                "v-uni-button",
                                {
                                  staticClass: "cu-btn confirm-btn",
                                  attrs: {
                                    type: "primary",
                                    disabled: e.sendmsgdisabled,
                                  },
                                  on: {
                                    click: function (t) {
                                      (arguments[0] = t = e.$handleEvent(t)),
                                        e.getmsgcodeclick();
                                    },
                                  },
                                },
                                [e._v(e._s(e.sendmsgval))]
                              ),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "padding-xl" },
                            [
                              i(
                                "v-uni-button",
                                {
                                  staticClass: "btn-row-submit confirm-btn",
                                  attrs: { type: "primary" },
                                  on: {
                                    click: function (t) {
                                      (arguments[0] = t = e.$handleEvent(t)),
                                        e.bindclick();
                                    },
                                  },
                                },
                                [e._v("绑定手机号")]
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
              ),
            ],
            1
          );
        },
        a = [];
    },
    a5a4: function (e, t, n) {
      e.exports = n.p + "static/applogo.png";
    },
    c4ab: function (e, t, n) {
      var i = n("24fb");
      (t = i(!1)),
        t.push([
          e.i,
          ".header[data-v-8c583512]{padding-top:20%;text-align:center;width:100%}.header uni-image[data-v-8c583512]{width:%?200?%;height:%?200?%}.content .auth_view[data-v-8c583512]{height:60%;width:100%;text-align:center;color:#9d9d9d;line-height:%?50?%}.bottom[data-v-8c583512]{margin:%?50?% %?50?% %?20?% %?50?%;font-size:%?35?%}",
          "",
        ]),
        (e.exports = t);
    },
    d498: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("6868"),
        a = n.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return i[e];
            });
          })(r);
      t["default"] = a.a;
    },
    ee02: function (e, t, n) {
      var i = n("c4ab");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
      var a = n("4f06").default;
      a("807a79c4", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f95a: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("6d4b"),
        a = n("d498");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(r);
      n("2e36");
      var o = n("f0c5"),
        s = Object(o["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "8c583512",
          null,
          !1,
          i["a"],
          void 0
        );
      t["default"] = s.exports;
    },
  },
]);
