(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesB-bindProject-navigation"],
  {
    1912: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var i = { basicLayout: n("c593").default, uniIcons: n("00fa").default },
        a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "basic-layout",
            { attrs: { title: "绑定项目", shadow: !0, padding: "0" } },
            [
              n(
                "v-uni-view",
                { staticClass: "nav-container" },
                [
                  n(
                    "v-uni-view",
                    { staticClass: "select-container" },
                    [
                      t.isOperation
                        ? n(
                            "v-uni-view",
                            {
                              staticClass: "nav-item bind-project-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.toProjects();
                                },
                              },
                            },
                            [
                              n("v-uni-image", {
                                staticClass: "item-bg viewimgbg",
                                attrs: {
                                  src: "/pagesB/static/bind-project.png",
                                  mode: "scaleToFill",
                                },
                              }),
                              n(
                                "v-uni-view",
                                { staticClass: "text-container" },
                                [
                                  t._v("输入所在学校名称"),
                                  n("br"),
                                  t._v("进行绑定"),
                                ]
                              ),
                            ],
                            1
                          )
                        : t._e(),
                      n(
                        "v-uni-view",
                        {
                          staticClass: "nav-item scan-code-container",
                          style: t.scanCodeContainerStyle,
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.scanCode();
                            },
                          },
                        },
                        [
                          n("v-uni-image", {
                            staticClass: "item-bg viewimgbg",
                            attrs: {
                              src: "/pagesB/static/san-code.png",
                              mode: "scaleToFill",
                            },
                          }),
                          n("v-uni-view", { staticClass: "text-container" }, [
                            t._v("扫描二维码"),
                            n("br"),
                            t._v("进行绑定"),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticClass: "project-list-container" },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "title-container" },
                        [
                          n(
                            "v-uni-view",
                            { staticClass: "text-container" },
                            [
                              n("v-uni-image", {
                                attrs: {
                                  src: "/pagesB/static/location-project.png",
                                },
                              }),
                              n(
                                "v-uni-text",
                                [
                                  t._v("选择附近学校"),
                                  t.projectList.length > 0 && !t.isShowErrTip
                                    ? n("v-uni-text", [
                                        t._v(
                                          "(共" +
                                            t._s(t.projectList.length) +
                                            "个)"
                                        ),
                                      ])
                                    : t._e(),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          n(
                            "v-uni-view",
                            { staticClass: "refresh-container" },
                            [
                              n("uni-icons", {
                                staticClass: "uni-icon",
                                attrs: {
                                  size: "40rpx",
                                  type: "refreshempty",
                                  color: "#2376ea",
                                },
                                on: {
                                  click: function (e) {
                                    (arguments[0] = e = t.$handleEvent(e)),
                                      t.getCurrentLoction();
                                  },
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
                        { staticClass: "content-container" },
                        t._l(t.projectList, function (e, i) {
                          return (i < 5 || t.isShowAllProject) &&
                            !t.isShowErrTip
                            ? n(
                                "v-uni-view",
                                {
                                  key: e.id,
                                  staticClass: "project-item",
                                  on: {
                                    click: function (n) {
                                      (arguments[0] = n = t.$handleEvent(n)),
                                        t.clickProject(e);
                                    },
                                  },
                                },
                                [
                                  n("v-uni-view", { staticClass: "name" }, [
                                    t._v(
                                      t._s(i + 1) + "." + t._s(e.projectname)
                                    ),
                                  ]),
                                  n("v-uni-view", { staticClass: "location" }, [
                                    t._v(
                                      t._s(t._f("parseDistance")(e.distance))
                                    ),
                                  ]),
                                ],
                                1
                              )
                            : t._e();
                        }),
                        1
                      ),
                      t.projectList.length > 5 &&
                      !t.isShowAllProject &&
                      !t.isShowErrTip
                        ? n(
                            "v-uni-view",
                            {
                              staticClass: "more-action-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    (t.isShowAllProject = !t.isShowAllProject);
                                },
                              },
                            },
                            [
                              n("v-uni-text", [t._v("展开")]),
                              n("v-uni-text", {
                                staticClass: "lg cuIcon-unfold",
                              }),
                            ],
                            1
                          )
                        : t._e(),
                      t.isShowAllProject
                        ? n(
                            "v-uni-view",
                            {
                              staticClass: "more-action-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    (t.isShowAllProject = !t.isShowAllProject);
                                },
                              },
                            },
                            [
                              n("v-uni-text", [t._v("收起")]),
                              n("v-uni-text", {
                                staticClass: "lg cuIcon-fold",
                              }),
                            ],
                            1
                          )
                        : t._e(),
                      t.isShowErrTip
                        ? n(
                            "v-uni-view",
                            { staticClass: "error-container" },
                            [
                              n(
                                "v-uni-view",
                                { staticClass: "tip-container" },
                                [
                                  n(
                                    "v-uni-view",
                                    { staticClass: "title" },
                                    [
                                      n("v-uni-view", { staticClass: "line" }),
                                      n("v-uni-view", [t._v(t._s(t.errTip))]),
                                      n("v-uni-view", { staticClass: "line" }),
                                    ],
                                    1
                                  ),
                                  n("v-uni-view", { staticClass: "desc" }, [
                                    t._v(t._s(t.errDesc)),
                                  ]),
                                  t.isShowRequestPermission
                                    ? n(
                                        "v-uni-view",
                                        {
                                          staticClass: "action-container",
                                          on: {
                                            click: function (e) {
                                              (arguments[0] = e =
                                                t.$handleEvent(e)),
                                                t.requestLocationPermission.apply(
                                                  void 0,
                                                  arguments
                                                );
                                            },
                                          },
                                        },
                                        [t._v("前去授权")]
                                      )
                                    : t._e(),
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
            ],
            1
          );
        },
        r = [];
    },
    "250e": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return r;
        }),
        n.d(e, "a", function () {
          return i;
        });
      var i = { uniIcons: n("00fa").default },
        a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            { staticClass: "basic-layout" },
            [
              n(
                "v-uni-view",
                {
                  staticClass: "basic-layout__title",
                  class: {
                    "basic-layout--border": t.border,
                    "basic-layout--shadow": t.shadow,
                  },
                  style: [t.titleStyle],
                },
                [
                  n(
                    "v-uni-view",
                    {
                      staticClass: "basic-layout__title--left",
                      style: [t.titleLeftStyle],
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.onClickLeft();
                        },
                      },
                    },
                    [
                      t._t("left", [
                        t.leftIcon
                          ? n("uni-icons", {
                              attrs: {
                                type: t.leftIcon,
                                size: t.frontSize,
                                color: t.frontColor,
                              },
                            })
                          : t._e(),
                        t.leftText
                          ? n("v-uni-text", [t._v(t._s(t.leftText))])
                          : t._e(),
                      ]),
                    ],
                    2
                  ),
                  n(
                    "v-uni-view",
                    {
                      staticClass: "basic-layout__title--content",
                      style: [t.titleContentStyle],
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.onClickTitle();
                        },
                      },
                    },
                    [t._t("title", [n("v-uni-text", [t._v(t._s(t.title))])])],
                    2
                  ),
                  n(
                    "v-uni-view",
                    {
                      staticClass: "basic-layout__title--right",
                      style: [t.titleRightStyle],
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.onClickRight();
                        },
                      },
                    },
                    [
                      t._t("right", [
                        t.rightIcon
                          ? n("uni-icons", {
                              attrs: {
                                type: t.rightIcon,
                                size: t.frontSize,
                                color: t.frontColor,
                              },
                            })
                          : t._e(),
                        t.rightText && !t.rightIcon
                          ? n("v-uni-text", [t._v(t._s(t.rightText))])
                          : t._e(),
                      ]),
                    ],
                    2
                  ),
                ],
                1
              ),
              n(
                "v-uni-view",
                { staticClass: "basic-layout__body", style: [t.bodyStyle] },
                [t._t("default")],
                2
              ),
            ],
            1
          );
        },
        r = [];
    },
    "25a5": function (t, e, n) {
      "use strict";
      var i = n("5125"),
        a = n.n(i);
      a.a;
    },
    "3a57": function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82");
        var i = n("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = i(n("f07e")),
          r = i(n("c964"));
        n("a9e3"), n("d3b7"), n("e9c4"), n("4e82");
        var o = i(n("6972")),
          c = (i(n("3508")), i(n("edb4"))),
          s = i(n("040a")),
          l = {
            name: "BindProjectNavigation",
            data: function () {
              return {
                userInfo: { userId: "", authId: "", phone: "", loginType: "" },
                projectList: [],
                longitude: "",
                latitude: "",
                isShowAllProject: !1,
                isShowErrTip: !1,
                isShowRequestPermission: !1,
                errTip: "",
                errDesc: "",
              };
            },
            computed: {
              isOperation: function () {
                return (
                  this.$store.state.user.usertype ||
                  this.$store.state.user.user_type
                );
              },
              scanCodeContainerStyle: function () {
                return "top: ".concat(
                  this.isOperation ? uni.upx2px(240) : uni.upx2px(120),
                  "px"
                );
              },
            },
            filters: {
              parseDistance: function (t) {
                var e = "未知",
                  n = Number(t);
                return (
                  n >= 1e3
                    ? (e = Number(n / 1e3).toFixed(2) + "km")
                    : n < 1e3 && (e = n + "m"),
                  e
                );
              },
            },
            onLoad: function (t) {},
            onShow: function () {
              this.getCurrentLoction(),
                zl.system.onBackPress(function () {
                  return { allow: !1 };
                });
            },
            methods: {
              requestLocationPermission: function () {
                s.default.gotoAppPermissionSetting();
              },
              toProjects: function () {
                this.toPage({
                  url: "/pagesB/bindProject/projects",
                  params: this.userInfo,
                });
              },
              getCurrentLoction: function () {
                var t = this;
                return (0, r.default)(
                  (0, a.default)().mark(function e() {
                    var n, i;
                    return (0, a.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("Android" !== zl.runtime.platform) {
                              e.next = 10;
                              break;
                            }
                            return (e.next = 3), t.RequestPermission();
                          case 3:
                            if (((n = e.sent), -1 != n)) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (t.isShowErrTip = !0),
                              (t.isShowRequestPermission = !0),
                              (t.errTip = "位置信息获取失败"),
                              (t.errDesc = "请检查住理生活定位权限是否授权"),
                              e.abrupt("return")
                            );
                          case 10:
                            if (
                              ((i = zl.location.getLocation()),
                              (t.longitude = i.longitude),
                              (t.latitude = i.latitude),
                              (t.isShowRequestPermission = !1),
                              !o.default.isNullOrEmpty(t.longitude) &&
                                !o.default.isNullOrEmpty(t.latitude) &&
                                t.longitude + "" != "-360" &&
                                t.latitude + "" != "-360")
                            ) {
                              e.next = 19;
                              break;
                            }
                            return (
                              (t.isShowErrTip = !0),
                              (t.errTip = "位置信息获取失败"),
                              (t.errDesc = "请检查手机定位开关是否开启"),
                              e.abrupt("return")
                            );
                          case 19:
                            (t.isShowErrTip = !1),
                              (t.errTip = ""),
                              (t.errDesc = ""),
                              t.searchProjects();
                          case 23:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              RequestPermission: function () {
                var e = [
                  "android.permission.ACCESS_COARSE_LOCATION",
                  "android.permission.ACCESS_FINE_LOCATION",
                ];
                return new Promise(function (n, i) {
                  s.default
                    .requestAndroidPermission(e)
                    .then(function (e) {
                      t.log(JSON.stringify(e)), n(e);
                    })
                    .catch(function (t) {
                      n(t);
                    });
                });
              },
              searchProjects: function () {
                var t = this;
                return (0, r.default)(
                  (0, a.default)().mark(function e() {
                    var n, i, r;
                    return (0, a.default)().wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = {
                                  is_hide:
                                    t.$store.state.user.usertype ||
                                    t.$store.state.user.user_type,
                                  longitude: t.longitude,
                                  latitude: t.latitude,
                                }),
                                (t.projectList = []),
                                (t.loadStatus = "loading"),
                                (e.prev = 3),
                                (i =
                                  o.default.AUTH_SERVER_ADDR +
                                  o.default.API_PATH.getallproject),
                                (e.next = 7),
                                o.default.sendauthget(i, n)
                              );
                            case 7:
                              (r = e.sent),
                                0 == r.projects.length &&
                                  ((t.isShowErrTip = !0),
                                  (t.errTip = "附近暂无学校")),
                                (t.projectList = r.projects.sort(function (
                                  t,
                                  e
                                ) {
                                  return (
                                    Number(t.distance) - Number(e.distance)
                                  );
                                })),
                                (e.next = 15);
                              break;
                            case 12:
                              (e.prev = 12),
                                (e.t0 = e["catch"](3)),
                                o.default.showalert("获取项目失败", e.t0);
                            case 15:
                              return (
                                (e.prev = 15), uni.hideLoading(), e.finish(15)
                              );
                            case 18:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[3, 12, 15, 18]]
                    );
                  })
                )();
              },
              scanCode: function () {
                var e = this;
                o.default.StartScan(
                  (function () {
                    var n = (0, r.default)(
                      (0, a.default)().mark(function n(i, r) {
                        var s, l;
                        return (0, a.default)().wrap(
                          function (n) {
                            while (1)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  if (!r) {
                                    n.next = 2;
                                    break;
                                  }
                                  return n.abrupt(
                                    "return",
                                    uni.showToast({
                                      title: r,
                                      position: "center",
                                      icon: "none",
                                    })
                                  );
                                case 2:
                                  if (
                                    ((s = null),
                                    (l = o.default.ParseScanResult(i)),
                                    o.default.isNullOrEmpty(l.d))
                                  ) {
                                    n.next = 23;
                                    break;
                                  }
                                  return (
                                    e.$loading("正在查询..."),
                                    (n.prev = 6),
                                    (n.next = 9),
                                    c.default.getProjectInfoByDeviceId(l.d)
                                  );
                                case 9:
                                  (s = n.sent),
                                    uni.hideLoading(),
                                    t.log("-----------", s),
                                    (n.next = 19);
                                  break;
                                case 14:
                                  return (
                                    (n.prev = 14),
                                    (n.t0 = n["catch"](6)),
                                    uni.hideLoading(),
                                    o.default.showalert("提示", n.t0),
                                    n.abrupt("return")
                                  );
                                case 19:
                                  return (n.prev = 19), n.finish(19);
                                case 21:
                                  n.next = 24;
                                  break;
                                case 23:
                                  o.default.isNullOrEmpty(l.pid)
                                    ? o.default.isNullOrEmpty(l.rc) ||
                                      (s = { referral_code: l.rc })
                                    : (s = { id: l.pid });
                                case 24:
                                  if (!o.default.isNullOrEmpty(s)) {
                                    n.next = 26;
                                    break;
                                  }
                                  return n.abrupt(
                                    "return",
                                    o.default.showalert(
                                      "提示",
                                      "二维码内容解析错误"
                                    )
                                  );
                                case 26:
                                  return (
                                    e.$loading("正在绑定..."),
                                    (n.prev = 27),
                                    (n.next = 30),
                                    o.default.bindProject(s)
                                  );
                                case 30:
                                  n.next = 35;
                                  break;
                                case 32:
                                  (n.prev = 32),
                                    (n.t1 = n["catch"](27)),
                                    o.default.showalert("提示", n.t1);
                                case 35:
                                  return (
                                    (n.prev = 35),
                                    uni.hideLoading(),
                                    n.finish(35)
                                  );
                                case 38:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          null,
                          [
                            [6, 14, 19, 21],
                            [27, 32, 35, 38],
                          ]
                        );
                      })
                    );
                    return function (t, e) {
                      return n.apply(this, arguments);
                    };
                  })()
                );
              },
              clickProject: function (t) {
                var e = this;
                this.projectActive = t.id;
                var n = { id: t.id, name: t.projectname };
                o.default.showalert(
                  "提示",
                  "确定要绑定".concat(t.projectname, "吗?"),
                  function () {
                    e.projectActive = "";
                  },
                  (0, r.default)(
                    (0, a.default)().mark(function t() {
                      return (0, a.default)().wrap(function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), o.default.bindProject(n);
                            case 2:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  ),
                  !0
                );
              },
            },
          };
        e.default = l;
      }).call(this, n("5a52")["default"]);
    },
    5125: function (t, e, n) {
      var i = n("85ae");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("4c915334", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "85ae": function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.basic-layout[data-v-3e5ae726]{position:relative;height:100vh;background-color:#f7f7f7}.basic-layout .basic-layout__title[data-v-3e5ae726]{z-index:9999;display:flex;justify-content:space-between;align-items:center}.basic-layout .basic-layout__title .basic-layout__title--left[data-v-3e5ae726]{display:block;height:100%;margin:0 %?30?%;text-align:left}.basic-layout .basic-layout__title .basic-layout__title--content[data-v-3e5ae726]{display:block;height:100%;flex:1;margin:0 %?30?%;text-align:center}.basic-layout .basic-layout__title .basic-layout__title--right[data-v-3e5ae726]{display:block;height:100%;margin:0 %?30?%;text-align:right}.basic-layout .basic-layout__title.basic-layout--border[data-v-3e5ae726]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#ededed}.basic-layout .basic-layout__title.basic-layout--shadow[data-v-3e5ae726]{box-shadow:0 0 %?5?% hsla(0,0%,84.7%,.5)}.basic-layout .basic-layout__body[data-v-3e5ae726]{position:relative;background-repeat:no-repeat;background-size:100% 100%;background-attachment:fixed}',
          "",
        ]),
        (t.exports = e);
    },
    9173: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("ad49"),
        a = n.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = a.a;
    },
    "9cc0": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("1912"),
        a = n("ec65");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(r);
      n("ae66");
      var o = n("f0c5"),
        c = Object(o["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "3a52a8ae",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    ad49: function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82"),
          Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          n("99af"),
          n("2ca0"),
          n("ac1f"),
          n("5319"),
          n("acd8"),
          n("e25e"),
          n("fb6a"),
          n("d401"),
          n("d3b7"),
          n("25f0");
        var i = {
          name: "BasicLayout",
          emits: ["clickLeft", "clickRight", "clickTitle"],
          props: {
            title: { type: String, default: "标题" },
            height: { type: String, default: "88rpx" },
            frontSize: { type: String, default: "34rpx" },
            frontColor: { type: String, default: "rgba(0, 0, 0, 1)" },
            titleBackgroundColor: {
              type: String,
              default: "rgba(255, 255, 255, 1)",
            },
            border: { type: Boolean, default: !1 },
            shadow: { type: Boolean, default: !0 },
            leftText: { type: String, default: "" },
            leftIcon: { type: String, default: "" },
            leftWidth: { type: String, default: "120rpx" },
            rightText: { type: String, default: "" },
            rightIcon: { type: String, default: "" },
            rightWidth: { type: String, default: "120rpx" },
            padding: { type: String, default: "40rpx" },
          },
          data: function () {
            return {
              titleStyle: {},
              titleLeftStyle: {},
              titleContentStyle: {},
              titleRightStyle: {},
              bodyStyle: {},
            };
          },
          created: function () {
            (this.titleStyle = {
              height: "calc("
                .concat(this.height, " + ")
                .concat(this.statusBarHeight, ")"),
              lineHeight: this.height,
              paddingTop: "".concat(this.statusBarHeight),
              fontSize: this.frontSize,
              backgroundColor: this.titleBackgroundColor,
            }),
              (this.titleLeftStyle = { width: this.leftWidth }),
              (this.titleContentStyle = {
                width: "calc(100% - "
                  .concat(this.leftWidth, " - ")
                  .concat(this.rightWidth, ")"),
              }),
              (this.titleRightStyle = { width: this.rightWidth }),
              (this.bodyStyle = {
                height: "calc(100% - "
                  .concat(this.height, " - ")
                  .concat(this.statusBarHeight, ")"),
                overflow: "auto",
                padding: this.padding,
              });
          },
          mounted: function () {
            uni.setNavigationBarColor({
              frontColor: this.frontColor,
              backgroundColor: this.hexify(this.titleBackgroundColor),
            });
          },
          computed: {
            statusBarHeight: function () {
              var e = uni.getSystemInfoSync().statusBarHeight;
              return (
                (e = zl.runtime.statusBarHeight),
                t.log(
                  "uni.getSystemInfoSync().statusBarHeight====>",
                  uni.getSystemInfoSync().statusBarHeight
                ),
                e + "px"
              );
            },
          },
          methods: {
            hexify: function (t) {
              if (!t || !t.startsWith("rgba(")) return t;
              var e = t
                  .replace(/rgba\(/, "")
                  .replace(/\)/, "")
                  .replace(/[s+]/g, "")
                  .split(","),
                n = parseFloat(e[3] || 1),
                i = Math.floor(n * parseInt(e[0]) + 255 * (1 - n)),
                a = Math.floor(n * parseInt(e[1]) + 255 * (1 - n));
              Math.floor(n * parseInt(e[2]) + 255 * (1 - n));
              return "#"
                .concat(("0" + i.toString(16)).slice(-2))
                .concat(("0" + a.toString(16)).slice(-2))
                .concat(("0" + a.toString(16)).slice(-2));
            },
            onClickLeft: function () {
              this.$emit("clickLeft");
            },
            onClickRight: function () {
              this.$emit("clickRight");
            },
            onClickTitle: function () {
              this.$emit("clickTitle");
            },
          },
        };
        e.default = i;
      }).call(this, n("5a52")["default"]);
    },
    ae66: function (t, e, n) {
      "use strict";
      var i = n("d779"),
        a = n.n(i);
      a.a;
    },
    c053: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.nav-container[data-v-3a52a8ae]{width:100%;height:100%;background-color:#fff}.nav-container .select-container[data-v-3a52a8ae]{display:flex;flex-direction:column;align-items:center;position:static;height:%?500?%}.nav-container .select-container .nav-item[data-v-3a52a8ae]{margin-top:%?20?%;display:inline-flex;justify-items:center;align-items:center;flex-direction:column;z-index:1;width:%?600?%;height:%?200?%;position:absolute}.nav-container .select-container .nav-item .item-bg[data-v-3a52a8ae]{position:absolute;width:%?600?%;height:%?200?%}.nav-container .select-container .nav-item .text-container[data-v-3a52a8ae]{position:absolute;color:#fff;top:%?60?%;left:%?220?%}.nav-container .project-list-container .title-container[data-v-3a52a8ae]{display:flex;align-items:center;padding:%?0?% %?80?%;justify-content:space-between}.nav-container .project-list-container .title-container .text-container[data-v-3a52a8ae]{display:flex;align-items:center}.nav-container .project-list-container .title-container .text-container > uni-image[data-v-3a52a8ae]{width:%?30?%;height:%?35?%}.nav-container .project-list-container .title-container .text-container > uni-text[data-v-3a52a8ae]{font-size:%?30?%;padding-left:%?20?%}.nav-container .project-list-container .content-container[data-v-3a52a8ae]{max-height:%?580?%;overflow-y:scroll}.nav-container .project-list-container .content-container .project-item[data-v-3a52a8ae]{display:flex;align-items:center;justify-content:space-between;padding:0 %?80?%;line-height:%?80?%}.nav-container .project-list-container .content-container .project-item .name[data-v-3a52a8ae]{color:#333}.nav-container .project-list-container .content-container .project-item .location[data-v-3a52a8ae]{color:#666}.nav-container .project-list-container .more-action-container[data-v-3a52a8ae]{text-align:center;color:#2377ec}.nav-container .project-list-container .more-action-container .lg[data-v-3a52a8ae]{font-size:%?20?%;padding-left:%?5?%}.nav-container .project-list-container .error-container[data-v-3a52a8ae]{display:flex;align-items:center;flex-direction:column}.nav-container .project-list-container .error-container .tip-container[data-v-3a52a8ae]{width:%?600?%;height:%?200?%;background-color:#eef2fb;display:flex;align-items:center;justify-content:center;color:#999;flex-flow:column;margin-top:%?20?%}.nav-container .project-list-container .error-container .tip-container .title[data-v-3a52a8ae]{display:flex;align-items:center;justify-content:center;font-size:%?25?%}.nav-container .project-list-container .error-container .tip-container .title .line[data-v-3a52a8ae]{width:%?40?%;height:%?4?%}.nav-container .project-list-container .error-container .tip-container .title > uni-view[data-v-3a52a8ae]{margin:0 5px}.nav-container .project-list-container .error-container .tip-container .desc[data-v-3a52a8ae]{margin-top:%?10?%}.nav-container .project-list-container .error-container .tip-container .action-container[data-v-3a52a8ae]{color:#2377ec;margin-top:%?10?%}',
          "",
        ]),
        (t.exports = e);
    },
    c593: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("250e"),
        a = n("9173");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(r);
      n("25a5");
      var o = n("f0c5"),
        c = Object(o["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "3e5ae726",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    d779: function (t, e, n) {
      var i = n("c053");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("35f981c2", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    ec65: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("3a57"),
        a = n.n(i);
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(r);
      e["default"] = a.a;
    },
    edb4: function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getProjectInfoByPhone =
          e.getProjectInfoById =
          e.getProjectInfoByDeviceId =
          e.default =
            void 0);
      var a = i(n("6972")),
        r = a.default.sendPlatformRequest,
        o = function (t) {
          return r({
            method: "GET",
            url: "project/get_by_device_id",
            params: { device_id: t },
          });
        };
      e.getProjectInfoByDeviceId = o;
      var c = function (t) {
        return r({
          method: "GET",
          url: "project/get_by_id",
          params: { id: t },
        });
      };
      e.getProjectInfoById = c;
      var s = function (t) {
        return r({
          method: "GET",
          url: "project/get_by_phone",
          params: { phone: t },
        });
      };
      e.getProjectInfoByPhone = s;
      var l = {
        getProjectInfoByDeviceId: o,
        getProjectInfoById: c,
        getProjectInfoByPhone: s,
      };
      e.default = l;
    },
  },
]);
