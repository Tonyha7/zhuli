(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-unregister-unregister"],
  {
    "3d24": function (t, e, n) {
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
            { staticStyle: { height: "100%", "background-color": "#f7f7f7" } },
            [
              n(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  n(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("账户注销")]
                  ),
                ],
                2
              ),
              n(
                "v-uni-view",
                { staticClass: "content-container" },
                [
                  n("v-uni-view", { staticClass: "buytitle" }, [
                    t._v("信息确认"),
                  ]),
                  n(
                    "v-uni-view",
                    { staticClass: "info-detail" },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "user-info-view" },
                        [
                          n("v-uni-text", { staticClass: "info-title" }, [
                            t._v("当前学校"),
                          ]),
                          n("v-uni-text", { staticClass: "info-content" }, [
                            t._v(t._s(t.projectname)),
                          ]),
                        ],
                        1
                      ),
                      n(
                        "v-uni-view",
                        {
                          staticClass: "user-info-view",
                          staticStyle: { "margin-bottom": "0 !important" },
                        },
                        [
                          n("v-uni-text", { staticClass: "info-title" }, [
                            t._v("账户余额"),
                          ]),
                          n("v-uni-text", { staticClass: "info-content" }, [
                            t._v(t._s(t.balance) + "元"),
                          ]),
                        ],
                        1
                      ),
                      n(
                        "v-uni-view",
                        {
                          staticClass: "user-info-view",
                          staticStyle: { "padding-bottom": "20upx" },
                        },
                        [
                          n("v-uni-text", { staticClass: "info-title" }, [
                            t._v("优惠券"),
                          ]),
                          n("v-uni-text", { staticClass: "info-content" }, [
                            t._v(t._s(t.cashcouponcount) + "张"),
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
                  staticClass: "buytitle",
                  staticStyle: { "margin-top": "40upx" },
                },
                [t._v("密码确认")]
              ),
              n(
                "v-uni-view",
                {
                  staticClass: "cu-form-group",
                  staticStyle: {
                    "border-bottom": "1upx solid #eee !important",
                    margin: "30upx",
                    "border-radius": "5px",
                  },
                },
                [
                  n("v-uni-input", {
                    staticClass: "number-pwd-text",
                    attrs: {
                      type: "number",
                      placeholder: "请输入密码",
                      maxlength: "6",
                      "placeholder-class": "number-pwd-placeholder-text",
                    },
                    on: {
                      confirm: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)),
                          t.confirmregister.apply(void 0, arguments);
                      },
                    },
                    model: {
                      value: t.pwd,
                      callback: function (e) {
                        t.pwd = e;
                      },
                      expression: "pwd",
                    },
                  }),
                  t.pwd
                    ? n("v-uni-text", {
                        staticClass: "cuIcon-roundclosefill",
                        on: {
                          click: function (e) {
                            e.stopPropagation(),
                              (arguments[0] = e = t.$handleEvent(e)),
                              (t.pwd = "");
                          },
                        },
                      })
                    : t._e(),
                ],
                1
              ),
              n(
                "v-uni-view",
                { staticStyle: { margin: "60upx 30upx", color: "#696969" } },
                [
                  n("v-uni-text", { staticClass: "warin-text" }, [
                    t._v("注意："),
                  ]),
                  t._v(
                    "请确保历史使用过的项目中无可用余额，否则无法完成此操作"
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
                            t.confirmregister();
                        },
                      },
                    },
                    [t._v("确认注销")]
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
    4830: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("af41"),
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
    "4b99": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("3d24"),
        a = n("4830");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      n("961c");
      var s = n("f0c5"),
        r = Object(s["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "8bed2162",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = r.exports;
    },
    "4e71": function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          ".cuIcon-roundclosefill[data-v-8bed2162]{color:#d9d9d9}.content-container[data-v-8bed2162]{padding-top:%?30?%}.buytitle[data-v-8bed2162]{padding-left:%?20?%;font-size:%?32?%;font-weight:700}.info-detail[data-v-8bed2162]{background-color:#fff;margin:%?30?% %?30?% 0 %?30?%;border-radius:5px}.user-info-view[data-v-8bed2162]{padding:%?20?% 0 0 %?20?%;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}.info-title[data-v-8bed2162]{margin-left:%?20?%}.info-content[data-v-8bed2162]{float:right;margin-right:%?30?%}",
          "",
        ]),
        (t.exports = e);
    },
    "87e3": function (t, e, n) {
      var i = n("4e71");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("214bce7d", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "961c": function (t, e, n) {
      "use strict";
      var i = n("87e3"),
        a = n.n(i);
      a.a;
    },
    af41: function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = i(n("6972")),
        o = {
          components: {},
          data: function () {
            return {
              userdata: this.$store.state.user,
              project: this.$store.state.project,
              pwd: "",
            };
          },
          computed: {
            projectname: function () {
              return this.$store.getters.projectName;
            },
            balance: function () {
              return this.$store.getters.userToalBalance;
            },
            cashcouponcount: function () {
              return this.$store.getters.userCashCount;
            },
          },
          filters: {},
          methods: {
            confirmregister: function () {
              var t = this;
              if (a.default.isNullOrEmpty(t.pwd))
                return a.default.showalert("提示", "请输入密码");
              a.default.showloading("加载中..."),
                a.default
                  .sendauthget(
                    a.default.AUTH_SERVER_ADDR +
                      a.default.API_PATH.pmunregister,
                    { phone: t.userdata.detailinfo.phone, password: t.pwd }
                  )
                  .then(function (e) {
                    return (
                      uni.hideLoading(),
                      t.$store.commit("SetUserData", null),
                      t.$store.commit("SetProjectData", null),
                      uni.reLaunch({ url: "../applogin/applogin" })
                    );
                  })
                  .catch(function (t) {
                    uni.hideLoading(), a.default.showalert("注销失败", t);
                  });
            },
          },
        };
      e.default = o;
    },
  },
]);
