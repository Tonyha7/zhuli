(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesB-bindProject-projects"],
  {
    "04d1a": function (t, e, n) {
      "use strict";
      var i = n("b5f3"),
        a = n.n(i);
      a.a;
    },
    "0621": function (t, e, n) {
      "use strict";
      var i = n("f287"),
        a = n.n(i);
      a.a;
    },
    "1ea6": function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.empty[data-v-759aee57]{display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;box-sizing:border-box;padding:%?80?% 0;background-color:#fff}.empty .empty__image[data-v-759aee57]{width:%?320?%;height:%?348?%}.empty .empty__image uni-image[data-v-759aee57]{-webkit-user-select:none;user-select:none;width:100%;height:100%;vertical-align:top;object-fit:contain}.empty .empty__description[data-v-759aee57]{margin-top:%?40?%}.empty .empty__description uni-text[data-v-759aee57]{margin:0;font-size:%?28?%;color:#909399}.empty .empty__bottom[data-v-759aee57]{margin-top:%?40?%}',
          "",
        ]),
        (t.exports = e);
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
    "2cb8": function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.main-container[data-v-303bcc31]{display:block;height:100%;background-color:#fff;padding:%?20?% %?40?%}.search-container[data-v-303bcc31]{z-index:9999}.search-container .input-view[data-v-303bcc31]{display:flex;flex-direction:row;flex:1;align-items:center;height:%?88?%;border:%?1?% solid #dee0e5;border-radius:%?44?%;padding:0 %?24?%;flex-wrap:nowrap}.search-container .input-view .input-uni-icon[data-v-303bcc31]{line-height:inherit}.search-container .input-view .nav-bar-input[data-v-303bcc31]{height:100%;line-height:inherit;width:calc(100% - %?26?% - %?26?% - %?128?% - %?1?% - 1em);padding:0 %?10?%;font-size:%?28?%}.search-container .input-view .divider[data-v-303bcc31]{display:inline-block;width:%?1?%;height:1.5em;margin:0 .5em;vertical-align:middle;position:relative;background-color:#999}.search-container .input-view .search-button[data-v-303bcc31]{font-size:%?34?%;font-weight:500;color:#999}.body-container[data-v-303bcc31]{position:relative;padding:%?20?% 0 0;height:calc(100% - %?88?%);background-repeat:no-repeat;background-size:100% 100%;background-attachment:fixed;overflow-y:auto}',
          "",
        ]),
        (t.exports = e);
    },
    5125: function (t, e, n) {
      var i = n("85ae");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("4c915334", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "6e41": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("e702"),
        a = n("853b");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(r);
      n("0621");
      var o = n("f0c5"),
        c = Object(o["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "759aee57",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    "78d7": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("8bee"),
        a = n("c864");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(r);
      n("04d1a");
      var o = n("f0c5"),
        c = Object(o["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "303bcc31",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    "853b": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("db87"),
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
    "8bee": function (t, e, n) {
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
      var i = {
          basicLayout: n("c593").default,
          uniIcons: n("00fa").default,
          uniList: n("7f29").default,
          uniListItem: n("a7f9").default,
          empty: n("6e41").default,
        },
        a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "basic-layout",
            { attrs: { title: "搜索项目", shadow: !0, padding: "0" } },
            [
              n(
                "v-uni-view",
                { staticClass: "main-container" },
                [
                  n(
                    "v-uni-view",
                    { staticClass: "search-container" },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "input-view" },
                        [
                          n("uni-icons", {
                            staticClass: "input-uni-icon",
                            attrs: {
                              type: "search",
                              size: "26",
                              color: "#999999",
                            },
                          }),
                          n("v-uni-input", {
                            staticClass: "nav-bar-input",
                            attrs: {
                              type: "text",
                              "confirm-type": "search",
                              placeholder: "输入学校/公司/项目名称搜索",
                            },
                            on: {
                              confirm: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.searchProjects();
                              },
                            },
                            model: {
                              value: t.queryInfo.name,
                              callback: function (e) {
                                t.$set(t.queryInfo, "name", e);
                              },
                              expression: "queryInfo.name",
                            },
                          }),
                          n(
                            "v-uni-view",
                            {
                              staticClass: "input-uni-icon",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.scanCode();
                                },
                              },
                            },
                            [
                              n("uni-icons", {
                                attrs: {
                                  type: "scan",
                                  size: "26",
                                  color: "#999999",
                                },
                              }),
                            ],
                            1
                          ),
                          n("v-uni-view", { staticClass: "divider" }),
                          n(
                            "v-uni-text",
                            {
                              staticClass: "search-button",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.searchProjects();
                                },
                              },
                            },
                            [t._v("搜索")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticClass: "body-container" },
                    [
                      t.projectList.length > 0
                        ? n(
                            "uni-list",
                            { attrs: { border: !1 } },
                            t._l(t.projectList, function (e) {
                              return n("uni-list-item", {
                                key: e.id,
                                attrs: {
                                  showArrow: !0,
                                  clickable: !0,
                                  title: e.projectname,
                                },
                                on: {
                                  click: function (n) {
                                    (arguments[0] = n = t.$handleEvent(n)),
                                      t.selectedProject(e);
                                  },
                                },
                              });
                            }),
                            1
                          )
                        : n("empty"),
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
    b5f3: function (t, e, n) {
      var i = n("2cb8");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("72d55e7a", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    c2ce: function (t, e, n) {
      t.exports = n.p + "static/empty.png";
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
    c864: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("ff09"),
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
    db87: function (t, e, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var i = {
        name: "Empty",
        props: {
          image: { type: String, default: "" },
          imageWidth: { type: String, default: "" },
          imageHeight: { type: String, default: "" },
          description: { type: String, default: "暂无数据" },
        },
        computed: {
          imageStyle: function () {
            return { width: this.imageWidth, height: this.imageHeight };
          },
        },
      };
      e.default = i;
    },
    e702: function (t, e, n) {
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
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticClass: "empty" },
            [
              i(
                "v-uni-view",
                { staticClass: "empty__image", style: [t.imageStyle] },
                [
                  t.image
                    ? i("v-uni-image", { attrs: { src: t.image } })
                    : t._t("image", [
                        i("v-uni-image", { attrs: { src: n("c2ce") } }),
                      ]),
                ],
                2
              ),
              i(
                "v-uni-view",
                { staticClass: "empty__description" },
                [
                  t.$slots.description
                    ? t._t("description")
                    : i("v-uni-text", [t._v(t._s(t.description))]),
                ],
                2
              ),
              t.$slots.default
                ? i(
                    "v-uni-view",
                    { staticClass: "empty__bottom" },
                    [t._t("default")],
                    2
                  )
                : t._e(),
            ],
            1
          );
        },
        a = [];
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
      var u = {
        getProjectInfoByDeviceId: o,
        getProjectInfoById: c,
        getProjectInfoByPhone: s,
      };
      e.default = u;
    },
    f287: function (t, e, n) {
      var i = n("1ea6");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("21b82c98", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    ff09: function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82");
        var i = n("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = i(n("f07e")),
          r = i(n("c964")),
          o = i(n("6972")),
          c = (i(n("3508")), i(n("edb4"))),
          s = {
            name: "BindProjectProjects",
            data: function () {
              return {
                queryInfo: { name: "", id: "", is_hide: 0 },
                projectList: [],
                total: 0,
                userInfo: {},
                projectInfo: {},
              };
            },
            onLoad: function (t) {
              (this.queryInfo.is_hide =
                this.$store.state.user.usertype ||
                this.$store.state.user.user_type),
                (this.userInfo = t);
            },
            created: function () {},
            methods: {
              searchProjects: function () {
                var t = this;
                return (0, r.default)(
                  (0, a.default)().mark(function e() {
                    var n, i;
                    return (0, a.default)().wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((t.projectList = []), t.queryInfo.name)) {
                                e.next = 4;
                                break;
                              }
                              return (
                                o.default.showalert("提示", "请输入搜索条件"),
                                e.abrupt("return")
                              );
                            case 4:
                              return (
                                o.default.showloading("正在查询..."),
                                (t.loadStatus = "loading"),
                                (e.prev = 6),
                                (n =
                                  o.default.AUTH_SERVER_ADDR +
                                  o.default.API_PATH.getallproject),
                                (e.next = 10),
                                o.default.sendauthget(n, t.queryInfo)
                              );
                            case 10:
                              (i = e.sent),
                                (t.projectList = i.projects),
                                (t.total = i.count),
                                (e.next = 18);
                              break;
                            case 15:
                              (e.prev = 15),
                                (e.t0 = e["catch"](6)),
                                o.default.showalert("获取项目失败", e.t0);
                            case 18:
                              return (
                                (e.prev = 18), uni.hideLoading(), e.finish(18)
                              );
                            case 21:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[6, 15, 18, 21]]
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
                        var s, u;
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
                                    (u = o.default.ParseScanResult(i)),
                                    o.default.isNullOrEmpty(u.d))
                                  ) {
                                    n.next = 23;
                                    break;
                                  }
                                  return (
                                    e.$loading("正在查询..."),
                                    (n.prev = 6),
                                    (n.next = 9),
                                    c.default.getProjectInfoByDeviceId(u.d)
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
                                  o.default.isNullOrEmpty(u.pid)
                                    ? o.default.isNullOrEmpty(u.rc) ||
                                      (s = { referral_code: u.rc })
                                    : (s = { id: u.pid });
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
              selectedProject: function (t) {
                var e = this;
                return (0, r.default)(
                  (0, a.default)().mark(function n() {
                    return (0, a.default)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (e.projectInfo = {
                                _id: t._id,
                                id: t.id,
                                name: t.projectname,
                                area: t.area,
                              }),
                              (n.next = 3),
                              o.default.bindProject(e.projectInfo)
                            );
                          case 3:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
            },
          };
        e.default = s;
      }).call(this, n("5a52")["default"]);
    },
  },
]);
