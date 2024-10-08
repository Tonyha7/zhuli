(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-changeconsumepwd-changeconsumepwd"],
  {
    "0105": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            { staticStyle: { height: "100%" } },
            [
              n(
                "cu-custom",
                {
                  attrs: {
                    bgColor: "titleview",
                    isBack: "active" == t.SceneType,
                  },
                },
                [
                  n(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("设置消费密码")]
                  ),
                ],
                2
              ),
              n(
                "v-uni-view",
                { staticClass: "from-content" },
                [
                  n(
                    "v-uni-view",
                    { staticClass: "cu-form-group" },
                    [
                      n(
                        "v-uni-text",
                        [
                          t._v("手机号"),
                          n(
                            "v-uni-text",
                            {
                              staticStyle: {
                                "margin-left": "35upx",
                                color: "#ccc",
                              },
                            },
                            [t._v(t._s(t.userphone))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticClass: "cu-form-group" },
                    [
                      n("v-uni-view", [t._v("验证码")]),
                      n("v-uni-input", {
                        staticStyle: { "margin-left": "20upx" },
                        attrs: {
                          placeholder: "请输入验证码",
                          name: "input",
                          maxlength: "6",
                          type: "number",
                        },
                        model: {
                          value: t.code,
                          callback: function (e) {
                            t.code = e;
                          },
                          expression: "code",
                        },
                      }),
                      n(
                        "v-uni-button",
                        {
                          staticClass: "cu-btn confirm-btn",
                          attrs: {
                            type: "primary",
                            disabled: t.sendmsgdisabled,
                          },
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.getclick();
                            },
                          },
                        },
                        [t._v(t._s(t.sendmsgval))]
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    {
                      staticClass: "cu-form-group",
                      staticStyle: {
                        "border-bottom": "1upx solid #eee !important",
                      },
                    },
                    [
                      n("v-uni-view", { staticClass: "item-title" }, [
                        t._v("密 码"),
                      ]),
                      n("v-uni-input", {
                        staticClass: "number-pwd-text",
                        staticStyle: { "margin-left": "20upx" },
                        attrs: {
                          placeholder: "请输入6位数字密码",
                          type: "number",
                          maxlength: "6",
                          "placeholder-class": "number-pwd-placeholder-text",
                        },
                        model: {
                          value: t.pwd,
                          callback: function (e) {
                            t.pwd = e;
                          },
                          expression: "pwd",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "v-uni-view",
                { staticStyle: { margin: "20upx" } },
                [
                  n(
                    "v-uni-button",
                    {
                      staticClass: "confirm-btn",
                      attrs: { type: "primary" },
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.subchangepwd();
                        },
                      },
                    },
                    [t._v("设置密码")]
                  ),
                ],
                1
              ),
              n(
                "v-uni-view",
                { staticClass: "tip-bottom" },
                [
                  n(
                    "v-uni-view",
                    {
                      staticStyle: {
                        "text-align": "center",
                        "font-size": "30upx",
                        color: "#696969",
                        "margin-bottom": "20upx",
                      },
                    },
                    [t._v("密码说明")]
                  ),
                  t._v(
                    "1.如果您同时使用了住理生活APP，此密码即为您的APP登录密码和消费密码;"
                  ),
                  n("br"),
                  t._v(
                    "2.成功预约设备后输入该密码开始消费，你也可以直接在设备上输入手机号+密码进行消费"
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
    "40fe": function (t, e, n) {
      "use strict";
      n("7a82");
      var a = n("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("e9c4");
      var i = a(n("0122")),
        s = a(n("f3f3")),
        o = a(n("6972")),
        u = null,
        c = {
          components: {},
          onLoad: function (t) {
            (this.SceneType = t.scenetype),
              o.default.isNullOrEmpty(this.userdata) ||
                (this.userphone = this.userdata.detailinfo.phone),
              (this.is_check_pwd = t.is_check_pwd),
              this.SceneType;
          },
          onUnload: function () {
            u && (clearInterval(u), (u = null), (this.countdown = 60));
          },
          watch: {
            userdata: function (t) {
              this.userphone = t.detailinfo.phone;
            },
          },
          data: function () {
            return {
              userdata: this.$store.state.user,
              project: this.$store.state.project,
              pwd: "",
              code: "",
              userphone: "",
              sendmsgval: "获取验证码",
              sendmsgdisabled: !1,
              countdown: 60,
              SceneType: "",
              is_check_pwd: !1,
            };
          },
          methods: {
            subchangepwd: function () {
              var t = this;
              return o.default.isNullOrEmpty(t.pwd.length) || 6 != t.pwd.length
                ? o.default.showalert("提示", "请输入6位数字密码")
                : o.default.isNullOrEmpty(t.code)
                ? o.default.showalert("提示", "请输入验证码")
                : (o.default.showloading("加载中..."),
                  void o.default
                    .sendauthpost(
                      o.default.AUTH_SERVER_ADDR + o.default.API_PATH.resetpwd,
                      {
                        phone: t.userdata.detailinfo.phone,
                        pwd: t.pwd,
                        code: t.code,
                      }
                    )
                    .then(function (e) {
                      if ((uni.hideLoading(), e))
                        return o.default.showalert(
                          "提示",
                          "设置成功",
                          null,
                          function () {
                            "active" == t.SceneType
                              ? uni.navigateBack({ delta: 1 })
                              : t.is_check_pwd
                              ? o.default.CheckStaffBalance(
                                  t.$store.getters.userCanUseBalance,
                                  "consumepwd"
                                )
                              : t.toPage({
                                  url: "/pages/index/index",
                                  params: (0, s.default)({}, t.jumpPageOptions),
                                  type: "relaunch",
                                });
                          }
                        );
                    })
                    .catch(function (t) {
                      uni.hideLoading(), o.default.showalert("设置失败", t);
                    }));
            },
            getclick: function () {
              var t = this;
              if (o.default.isNullOrEmpty(t.userdata.detailinfo.phone))
                return o.default.showalert("提示", "请输入手机号");
              var e = { phone: t.userdata.detailinfo.phone };
              o.default
                .sendauthpost(
                  o.default.AUTH_SERVER_ADDR +
                    o.default.API_PATH.sendresetpwdcode,
                  e
                )
                .then(function (e) {
                  if (e)
                    return (
                      uni.showToast({ title: "发送成功" }), t.refreshbtntime()
                    );
                })
                .catch(function (t) {
                  var e = t;
                  return (
                    (0, i.default)(e) == Object && (e = JSON.stringify(t)),
                    uni.showToast({ title: e, icon: "none" })
                  );
                });
            },
            refreshbtntime: function () {
              var t = this;
              u && (clearInterval(u), (u = null)),
                t.settime(),
                (u = setInterval(function () {
                  t.settime();
                }, 1e3));
            },
            settime: function (t) {
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
          },
        };
      e.default = c;
    },
    4970: function (t, e, n) {
      "use strict";
      var a = n("902c"),
        i = n.n(a);
      i.a;
    },
    "529e": function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("0105"),
        i = n("db55");
      for (var s in i)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(s);
      n("4970");
      var o = n("f0c5"),
        u = Object(o["a"])(
          i["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "8ea62dfa",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = u.exports;
    },
    "902c": function (t, e, n) {
      var a = n("b9f1");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = n("4f06").default;
      i("59d1c167", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    b9f1: function (t, e, n) {
      var a = n("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          ".tip-top[data-v-8ea62dfa]{padding:%?20?%;font-size:%?30?%;line-height:%?40?%;color:#c7c7cc}.tip-bottom[data-v-8ea62dfa]{padding:%?20?%;font-size:%?30?%;line-height:%?40?%;color:#909090;line-height:%?50?%}",
          "",
        ]),
        (t.exports = e);
    },
    db55: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("40fe"),
        i = n.n(a);
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(s);
      e["default"] = i.a;
    },
  },
]);
