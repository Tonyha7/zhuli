(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-androidpermission-androidpermission"],
  {
    "0966": function (t, i, n) {
      "use strict";
      n.r(i);
      var e = n("870e"),
        a = n("46a4");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(i, t, function () {
              return a[t];
            });
          })(o);
      n("f36d");
      var s = n("f0c5"),
        c = Object(s["a"])(
          a["default"],
          e["b"],
          e["c"],
          !1,
          null,
          "083df472",
          null,
          !1,
          e["a"],
          void 0
        );
      i["default"] = c.exports;
    },
    2543: function (t, i, n) {
      "use strict";
      (function (t) {
        n("7a82");
        var e = n("ee27").default;
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.default = void 0),
          n("d3b7"),
          n("ac1f"),
          n("99af");
        var a = e(n("6972")),
          o = e(n("040a")),
          s = {
            data: function () {
              return {
                permissionlist: [
                  {
                    icon: "iconshouji",
                    title: "读取手机状态信息",
                    desc: "用于判别用户信息,预防恶意程序以及安全运营所需",
                  },
                  {
                    icon: "iconSDqia",
                    title: "访问设备上的照片、媒体内容和文件",
                    desc: "用于正常使用报修投诉时提交照片的功能",
                  },
                  {
                    icon: "iconweizhi",
                    title: "位置信息",
                    desc: "在连接使用蓝牙设备时提高蓝牙连接的成功率",
                  },
                  {
                    icon: "iconxiangji",
                    title: "使用手机摄像头",
                    desc: "用于扫描二维码以及拍摄设备照片功能",
                  },
                ],
                liststyle: "height:calc(100% - 800upx);",
              };
            },
            onLoad: function () {
              var t = this;
              setTimeout(function () {
                t.Querylistcontentstyle();
              }, 100);
            },
            methods: {
              Querylistcontentstyle: function () {
                var t = this,
                  i = function (i) {
                    return new Promise(function (n, e) {
                      var a = null;
                      (a = uni.createSelectorQuery().in(t).select(i)),
                        a
                          .fields({ size: !0, rect: !0 }, function (t) {
                            n(t);
                          })
                          .exec();
                    });
                  };
                i(".title-bar-text-desc").then(function (n) {
                  i(".title-bar-text").then(function (e) {
                    i(".bottom-view").then(function (i) {
                      t.liststyle = "height:calc(100% - "
                        .concat(t.CustomBar, "px - ")
                        .concat(n.height, "px - ")
                        .concat(e.height, "px - ")
                        .concat(i.height, "px - ")
                        .concat(uni.upx2px(40), "px - ")
                        .concat(uni.upx2px(60), "px);");
                    });
                  });
                });
              },
              QuitApp: function () {
                this.$store.commit("SetQueryPermissionFlag", !1),
                  uni.reLaunch({ url: "../applogin/applogin" });
              },
              ShowUseragreement: function () {
                uni.navigateTo({ url: "../useragreement/useragreement" });
              },
              RequestPermission: function () {
                var i = this;
                o.default
                  .requestAndroidPermission([
                    "android.permission.READ_PHONE_STATE",
                    "android.permission.WRITE_EXTERNAL_STORAGE",
                    "android.permission.ACCESS_COARSE_LOCATION",
                    "android.permission.ACCESS_FINE_LOCATION",
                    "android.permission.CAMERA",
                  ])
                  .then(function (t) {
                    if (-1 == t)
                      return a.default.showalert(
                        "提示",
                        "为保证正常使用相关功能,请正常给予权限",
                        null,
                        function () {
                          o.default.gotoAppPermissionSetting();
                        },
                        !1,
                        "",
                        "立即前往"
                      );
                    1 == t && a.default.GetApplicationInfo(),
                      i.$store.commit("SetQueryPermissionFlag", !0),
                      uni.reLaunch({ url: "../applogin/applogin" });
                  })
                  .catch(function (i) {
                    t.log(i);
                  });
              },
            },
          };
        i.default = s;
      }).call(this, n("5a52")["default"]);
    },
    "46a4": function (t, i, n) {
      "use strict";
      n.r(i);
      var e = n("2543"),
        a = n.n(e);
      for (var o in e)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(i, t, function () {
              return e[t];
            });
          })(o);
      i["default"] = a.a;
    },
    "870e": function (t, i, n) {
      "use strict";
      n.d(i, "b", function () {
        return e;
      }),
        n.d(i, "c", function () {
          return a;
        }),
        n.d(i, "a", function () {});
      var e = function () {
          var t = this,
            i = t.$createElement,
            n = t._self._c || i;
          return n(
            "v-uni-view",
            { staticStyle: { height: "100%" } },
            [
              n("cu-custom", {
                attrs: { bgColor: "whitestatusbar", isBack: !1 },
              }),
              n("v-uni-view", { staticClass: "title-bar-text" }, [
                t._v("欢迎使用"),
              ]),
              n(
                "v-uni-view",
                { staticClass: "title-bar-text-desc" },
                [
                  n("v-uni-view", [t._v("为保证您正常使用住理生活相关功能")]),
                  n("v-uni-view", [t._v("需要向您申请以下权限:")]),
                ],
                1
              ),
              n(
                "v-uni-scroll-view",
                {
                  staticClass: "permission-list-container",
                  style: t.liststyle,
                  attrs: { "scroll-y": "true" },
                },
                t._l(t.permissionlist, function (i, e) {
                  return n(
                    "v-uni-view",
                    { staticClass: "permission-item" },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "img-container" },
                        [n("v-uni-text", { class: ["iconfont", i.icon] })],
                        1
                      ),
                      n(
                        "v-uni-view",
                        { staticClass: "content" },
                        [
                          n("v-uni-view", { staticClass: "content-title" }, [
                            t._v(t._s(i.title)),
                          ]),
                          n("v-uni-view", { staticClass: "content-desc" }, [
                            t._v(t._s(i.desc)),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  );
                }),
                1
              ),
              n(
                "v-uni-view",
                { staticClass: "bottom-view" },
                [
                  n(
                    "v-uni-view",
                    { staticClass: "tip-view" },
                    [
                      t._v(
                        "在使用住理生活产品和服务前,为更好地保障用户权益,我们将依据最新的监管要求对住理生活的隐私政策进行更新。请您务必仔细阅读并理解"
                      ),
                      n(
                        "v-uni-text",
                        {
                          staticStyle: {
                            color: "#32B1FE",
                            "font-size": "25upx",
                          },
                          on: {
                            click: function (i) {
                              (arguments[0] = i = t.$handleEvent(i)),
                                t.ShowUseragreement.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v("《住理生活服务协议及隐私政策》")]
                      ),
                      t._v(
                        "，特别是粗体标识的条款，您应重点阅读，再充分理解并同意后开始使用，如您同意，可点击“同意”开始接收我们的服务。"
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticClass: "btn-view" },
                    [
                      n(
                        "v-uni-button",
                        {
                          staticClass: "confirm-btn",
                          staticStyle: {
                            width: "calc(30% - 40upx)",
                            margin: "0 20upx",
                            color: "#afafaf",
                            "background-color": "#f5f5f5",
                            "background-image": "none",
                          },
                          attrs: { type: "primary" },
                          on: {
                            click: function (i) {
                              (arguments[0] = i = t.$handleEvent(i)),
                                t.QuitApp();
                            },
                          },
                        },
                        [t._v("暂不同意")]
                      ),
                      n(
                        "v-uni-button",
                        {
                          staticClass: "confirm-btn",
                          staticStyle: {
                            margin: "0 20upx",
                            width: "calc(70% - 40upx)",
                          },
                          attrs: { type: "primary" },
                          on: {
                            click: function (i) {
                              (arguments[0] = i = t.$handleEvent(i)),
                                t.RequestPermission();
                            },
                          },
                        },
                        [t._v("同意并继续")]
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
    "886a": function (t, i, n) {
      var e = n("24fb");
      (i = e(!1)),
        i.push([
          t.i,
          ".whitestatusbar[data-v-083df472]{background-color:#fff}.title-bar-text[data-v-083df472]{font-size:%?50?%;font-weight:700;padding-left:%?40?%}.title-bar-text-desc[data-v-083df472]{color:#bcbcbc;margin:%?20?% 0;padding-left:%?40?%}.btn-view[data-v-083df472]{display:flex;margin-top:%?20?%}.tip-view[data-v-083df472]{margin:0 %?40?%;color:#bcbcbc;font-size:%?25?%}.confirm-btn[data-v-083df472]{border-radius:%?20?%!important;font-size:%?30?%}uni-button[data-v-083df472]:after{border:none!important}.permission-list-container[data-v-083df472]{\n\t/* height: calc(100% - 800upx); */padding:%?20?% %?40?%}.permission-item[data-v-083df472]{display:flex;align-items:center;border:1px solid #32b1fe;\n\t/* margin: 20upx 40upx; */padding:%?20?%;margin-bottom:%?20?%}.img-container[data-v-083df472]{width:%?100?%;height:%?100?%;display:flex;align-items:center;justify-content:center}.img-container uni-text[data-v-083df472]{font-size:%?80?%;color:#32b1fe}.content-title[data-v-083df472]{font-size:%?32?%;font-weight:700}.content-desc[data-v-083df472]{font-size:%?24?%;color:#bcbcbc}.bottom-view[data-v-083df472]{position:fixed;bottom:%?40?%}.iconshouji[data-v-083df472]:before{margin-left:%?10?%}",
          "",
        ]),
        (t.exports = i);
    },
    ce69: function (t, i, n) {
      var e = n("886a");
      e.__esModule && (e = e.default),
        "string" === typeof e && (e = [[t.i, e, ""]]),
        e.locals && (t.exports = e.locals);
      var a = n("4f06").default;
      a("2675648f", e, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f36d: function (t, i, n) {
      "use strict";
      var e = n("ce69"),
        a = n.n(e);
      a.a;
    },
  },
]);
