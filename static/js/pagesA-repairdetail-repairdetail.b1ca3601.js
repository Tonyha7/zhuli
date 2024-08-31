(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-repairdetail-repairdetail"],
  {
    "0867": function (e, t, a) {
      "use strict";
      a("7a82"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = {
        props: {
          headPicShow: { type: [String, Boolean], default: !0 },
          headPicValue: { type: String, default: a("a552") },
          headTitleShow: { type: [String, Boolean], default: !0 },
          headTitleValue: { type: String, default: "描述相符" },
          starsShow: { type: [String, Boolean], default: !0 },
          starsLines: {
            type: Array,
            default: function () {
              return [5, 5, 5];
            },
          },
          starDefault: { type: String, default: a("bed7") },
          starActive: { type: String, default: a("5b45") },
          starsDisabled: { type: [Boolean], default: !1 },
          textareaShow: { type: [String, Boolean], default: !0 },
          textareaPlaceholder: {
            type: [String],
            default: "宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧",
          },
          submitShow: { type: [String, Boolean], default: !0 },
          submitText: { type: String, default: "发布" },
          infoReceive: {
            type: Object,
            default: function () {
              return { score: [], textareaValue: "" };
            },
          },
          diystyle: { type: [String], default: "" },
        },
        computed: {
          headTitleValueArray: function () {
            return this.headTitleValue.split(",");
          },
        },
        data: function () {
          return {};
        },
        methods: {
          formatScore: function (e) {
            var t = this.infoReceive.score[e];
            return void 0 == t && (t = 1), t;
          },
          setScore: function (e, t) {
            !1 === this.starsDisabled &&
              (void 0 == this.infoReceive.score &&
                (this.infoReceive.score = []),
              (this.infoReceive.score[e] = t),
              this.$emit("scoreChange", t),
              this.$forceUpdate());
          },
          blur: function (e) {
            this.infoReceive.textareaValue = e.detail.value;
          },
          doSubmit: function () {
            this.$emit("submit", this.infoReceive);
          },
        },
        created: function () {
          this.score = [];
          var e = 0;
          while (e < this.headTitleValueArray.length)
            (this.score[e] = 5), (e += 1);
          this.infoReceive.score = this.score;
        },
      };
      t.default = i;
    },
    "0da9": function (e, t, a) {
      "use strict";
      var i = a("2f1c"),
        r = a.n(i);
      r.a;
    },
    "10a0": function (e, t, a) {
      "use strict";
      var i = a("8e22"),
        r = a.n(i);
      r.a;
    },
    "1aba": function (e, t, a) {
      var i = a("24fb");
      (t = i(!1)),
        t.push([
          e.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.issue[data-v-52a12d14]{background-color:#f9f9f9}.issue-head[data-v-52a12d14]{background-color:#fff;height:%?100?%;padding:0 %?25?%}.issue-head-pic[data-v-52a12d14]{width:%?70?%;height:%?70?%;border-radius:50%;vertical-align:middle;margin-right:%?17?%}.issue-head-title[data-v-52a12d14]{line-height:%?100?%;font-size:%?30?%;vertical-align:middle;margin-right:%?35?%}.issue-head-star-box[data-v-52a12d14]{display:inline-block}.issue-head-star-box uni-image[data-v-52a12d14]{width:%?32?%;height:%?32?%;vertical-align:middle;margin-right:%?14?%}.issue-head-star-box uni-image.active[data-v-52a12d14]{-webkit-animation:star_move-data-v-52a12d14 ease-in 1 1s,star_rotate-data-v-52a12d14 ease 1.5s infinite 1s;animation:star_move-data-v-52a12d14 ease-in 1 1s,star_rotate-data-v-52a12d14 ease 1.5s infinite 1s}.issue uni-textarea[data-v-52a12d14]{width:100%;height:%?220?%;background-color:#fff;font-size:%?28?%;color:#898989;padding:%?24?%;box-sizing:border-box;line-height:%?40?%}.issue-btn-box[data-v-52a12d14]{padding:%?54?% %?30?%;background-color:#fff}.issue-btn-box uni-button[data-v-52a12d14]{width:100%;height:%?80?%;border-radius:%?80?%;font-size:%?28?%;background-color:#3682ff;line-height:%?80?%}@-webkit-keyframes star_move-data-v-52a12d14{from{width:%?50?%;height:%?50?%;-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{width:%?32?%;height:%?32?%;-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes star_move-data-v-52a12d14{from{width:%?50?%;height:%?50?%;-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{width:%?32?%;height:%?32?%;-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes star_rotate-data-v-52a12d14{0%{-webkit-transform:rotateY(1turn);transform:rotateY(1turn)}100%{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}@keyframes star_rotate-data-v-52a12d14{0%{-webkit-transform:rotateY(1turn);transform:rotateY(1turn)}100%{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}}',
          "",
        ]),
        (e.exports = t);
    },
    "2f1c": function (e, t, a) {
      var i = a("1aba");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
      var r = a("4f06").default;
      r("0b00025e", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    3449: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("bea0"),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return i[e];
            });
          })(n);
      t["default"] = r.a;
    },
    3475: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("7620"),
        r = a("942d");
      for (var n in r)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return r[e];
            });
          })(n);
      a("0da9");
      var o = a("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "52a12d14",
          null,
          !1,
          i["a"],
          void 0
        );
      t["default"] = s.exports;
    },
    "5b45": function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAADVUlEQVRYR7XXX4iUVRjH8c8z7qq7mRnVkkZJRS0RYUWRpI1ua2im/bFYsBspKiIioiK6KPAmEgq6C4IIomWDtCjFSKIdd1cjULoqWRWtiJUQCv9Vos6ceGctVp113llnz+15zu/5vs97nj8nTHClkhl4G/cJu5W9EN32TUQuJnIofWqKDi/hTbSe1ugz1VNxt38a1ZwYxKDbJZskc8Y4PC55Orr0TjpE9TeEPqys4WyPKe6Pe+xvBKThSKSSF7FOmHaOo1CRfCR5LroczwvSEEQquVXYiKvP4yC7E2tisfVNh0g7tTvmY6yqK578pOKB6PZrXVvkikTaa5oRz+AdTK0rnP2Wig+1eTnmO1LPflyItEm7GW4UbsISPIaZ9QTH7J/EN/hSGHbccCx1sNb5KkTKIrJTm6NmCrcIy1XcIVxLNQ1zRWxcwOSwgn2SYcmgZKupDljgrwiVSEMudUoPHhbm4WKhXVJo4KsbMT2Bo5K9Cjar6I004C3Jq0ya03qAX0XaajOW17OcxP3dkfo9quADzJpER+NJZ5f39Ujva9XpFWGtlCP9mkU6msZ9Tnh2NDtKpgvv4Ylm+cihM6RsdXQb+T/10jZzlH0iKeYQuFCTX9ATi+3IhM7I/zTgNskGXHehXs5z/oiCJ6Pos/9szilCacCDUrVHNFId8zJnF3GtRdZlRWp8iGxqusJrwhvUaNd53Z1tN9rme7V4PhY6Ona7ZjlOX5ttugHcMFGfNc6NSJZFlx/P5athXc0Wvj9dxpvFsUeyKLr8nhdilrANNzeLAPuFJbHIz/kgtutw0iA6mwjxm4JlUbQrH8SQa5T14/omQhxQsDKKfsgH0a9T2CLMbSLEQRWr4l7b80EMmadc7a5XNRHiTwU9UfRtXoi7lH2BK+tAZJP1YVyOljq2WaV8PIrVjztj1a4TJYuxQbispnDyh9Av2ahilym6JUuFBVTTu9b6W7ImuqptIQfEgKLkc86AyKbm7MHbK1Uv7fDYB04qVeeR7F2yGksx+6zJfNz3SO1IbHGRad4VHpIcUrFdwXottlngWEQ2G9deqaRFqw5lj0hWYP7pgWmHpCe6ZB20fiQyi/SdNqeqk/chC+09n+NxgbJnwyXulMzN5vlaNSI7+y+jHvkCgjlOdgAAAABJRU5ErkJggg==";
    },
    "62d7": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("9ce9"),
        r = a("3449");
      for (var n in r)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return r[e];
            });
          })(n);
      a("10a0");
      var o = a("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "5fc902bf",
          null,
          !1,
          i["a"],
          void 0
        );
      t["default"] = s.exports;
    },
    "6bec": function (e, t, a) {
      var i = a("24fb");
      (t = i(!1)),
        t.push([
          e.i,
          '.item-title[data-v-5fc902bf]{min-width:%?150?%;color:#999}.bg-img[data-v-5fc902bf]{margin:%?20?% 0}.issue-content[data-v-5fc902bf]{border-radius:%?20?%;padding:%?20?%;background-color:#fff}.contentContainer[data-v-5fc902bf]{padding:%?10?% %?20?%;overflow-y:scroll}.itemcontainer[data-v-5fc902bf]{margin:%?20?%}.repair-item-detail[data-v-5fc902bf]{padding:%?10?% 0 0 %?20?%;line-height:%?50?%;-webkit-user-select:text;word-break:break-all}.cu-timeline[data-v-5fc902bf]{background-color:#f7f7f7;width:100%}.cu-timeline>.cu-item[data-v-5fc902bf]{position:relative;left:%?90?%;width:calc(100% - %?90?%)}.cu-timeline>.cu-item>.content[data-v-5fc902bf]{left:%?10?%;margin-top:%?20?%;background-color:#fff!important;border-radius:%?20?%;position:relative}.cu-timeline>.cu-item>.content[data-v-5fc902bf]::before{content:"";border-width:%?20?%;border-style:solid;border-color:transparent #fff transparent transparent;-webkit-transform:rotate(1turn);transform:rotate(1turn);position:absolute;left:%?-40?%}.cu-timeline>.cu-item[data-v-5fc902bf]::before{background-color:initial!important;left:%?38?%;content:""!important}.cu-timeline>.cu-item[data-v-5fc902bf]::after{width:1px;background-color:#dfdfdf}.cu-timeline>.cu-item[data-v-5fc902bf]:first-child:after{top:%?70?%}.cu-timeline>.cu-item[data-v-5fc902bf]:last-child:after{top:%?-30?%}.consume-icon[data-v-5fc902bf]{width:%?70?%;height:%?70?%;border-radius:%?80?%;display:inline-flex;justify-content:center;align-items:center;position:absolute;left:%?-103?%;top:%?40?%;margin-top:%?-25?%;z-index:10;background-color:#fff;padding:%?8?%;border:1px solid #e4e7ee}.icondaichulicontainer[data-v-5fc902bf]{background-color:#d9d9d9;color:#fff;border:none}.iconwanchengcontainer[data-v-5fc902bf]{background-color:#58db57;color:#fff;border:none}.iconweixiucontainer[data-v-5fc902bf]{background-color:#f5bb2c;color:#fff;border:none}.iconguanjicontainer[data-v-5fc902bf]{background-color:#ff6e7e;color:#fff;border:none}.iconpingjiacontainer[data-v-5fc902bf]{background-color:#2da9f6;color:#fff;border:none}.title-icon[data-v-5fc902bf]{font-size:%?40?%;line-height:%?40?%;color:#fff}.only-oneitem[data-v-5fc902bf]:after{\n\t/* height: calc(100% - 80upx) !important; */height:0!important;top:%?50?%!important}.handel-time[data-v-5fc902bf]{position:absolute;top:%?55?%;left:%?-75?%}.handel-time>.create-time[data-v-5fc902bf]{font-size:%?28?%;color:#8b8b93}.handel-time>.create-date[data-v-5fc902bf]{font-size:%?24?%;color:#8b8b93;background-color:#e7e7e7;padding:%?5?% %?10?%;border-radius:%?20?%;margin-top:%?10?%;position:relative;right:%?2?%}.text-tip-grey[data-v-5fc902bf]{font-size:%?30?%;color:#8d8d99}.repairdetailcontainer[data-v-5fc902bf]{background-color:#fff;border-radius:%?20?%;padding:%?20?%}.desccontainer[data-v-5fc902bf]{font-size:%?30?%;color:#8d8d99;margin-top:%?10?%;min-height:%?50?%}.text-desc-container[data-v-5fc902bf]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;\n\t/* -webkit-line-clamp: 2; */word-break:break-all;-webkit-box-orient:vertical}.replypersoncontainer[data-v-5fc902bf]{font-size:%?30?%;color:#8d8d99;margin-top:%?10?%}.repair-text-view[data-v-5fc902bf]{margin:%?32?% 0 %?30?%;height:%?200?%;width:100%;flex:1;font-size:%?28?%;padding:%?20?%;border-radius:%?20?%;background-color:#f7f7f7}.cancel-btn[data-v-5fc902bf]{background-color:#c4c6c9!important;color:#fff!important;border-radius:%?50?%;border:none;width:50%;margin-right:%?20?%}.cancel-btn[data-v-5fc902bf]::after{border:none}',
          "",
        ]),
        (e.exports = t);
    },
    7620: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "c", function () {
          return r;
        }),
        a.d(t, "a", function () {});
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a(
            "v-uni-view",
            { staticClass: "issue" },
            [
              a(
                "v-uni-view",
                { staticStyle: { "border-radius": "10px" } },
                e._l(e.starsLines, function (t, i) {
                  return a(
                    "v-uni-view",
                    { staticClass: "issue-head", style: e.diystyle },
                    [
                      e._t("headPic"),
                      e.headPicShow
                        ? a("v-uni-image", {
                            staticClass: "issue-head-pic",
                            attrs: { src: e.headPicValue },
                          })
                        : e._e(),
                      e.headTitleShow
                        ? a("v-uni-text", { staticClass: "issue-head-title" }, [
                            e._v(e._s(e.headTitleValueArray[i].slice(0, 5))),
                          ])
                        : e._e(),
                      e.starsShow
                        ? a(
                            "v-uni-view",
                            { staticClass: "issue-head-star-box" },
                            e._l(t, function (t, r) {
                              return a("v-uni-image", {
                                key: r,
                                attrs: {
                                  src:
                                    r + 1 > e.formatScore(i)
                                      ? e.starDefault
                                      : e.starActive,
                                },
                                on: {
                                  click: function (t) {
                                    (arguments[0] = t = e.$handleEvent(t)),
                                      e.setScore(i, r + 1);
                                  },
                                },
                              });
                            }),
                            1
                          )
                        : e._e(),
                    ],
                    2
                  );
                }),
                1
              ),
              e.textareaShow
                ? a("v-uni-textarea", {
                    attrs: {
                      maxlength: "-1",
                      placeholder: e.textareaPlaceholder,
                    },
                    on: {
                      blur: function (t) {
                        (arguments[0] = t = e.$handleEvent(t)),
                          e.blur.apply(void 0, arguments);
                      },
                    },
                    model: {
                      value: e.infoReceive.textareaValue,
                      callback: function (t) {
                        e.$set(e.infoReceive, "textareaValue", t);
                      },
                      expression: "infoReceive.textareaValue",
                    },
                  })
                : e._e(),
              e.submitShow
                ? a(
                    "v-uni-view",
                    { staticClass: "issue-btn-box" },
                    [
                      a(
                        "v-uni-button",
                        {
                          staticClass: "submit-btn",
                          attrs: { type: "primary" },
                          on: {
                            click: function (t) {
                              (arguments[0] = t = e.$handleEvent(t)),
                                e.doSubmit.apply(void 0, arguments);
                            },
                          },
                        },
                        [e._v(e._s(e.submitText))]
                      ),
                      e._t("submit"),
                    ],
                    2
                  )
                : e._e(),
            ],
            1
          );
        },
        r = [];
    },
    "8e22": function (e, t, a) {
      var i = a("6bec");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
      var r = a("4f06").default;
      r("25e74cfb", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "942d": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("0867"),
        r = a.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            a.d(t, e, function () {
              return i[e];
            });
          })(n);
      t["default"] = r.a;
    },
    "9ce9": function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "c", function () {
          return r;
        }),
        a.d(t, "a", function () {});
      var i = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return e.orderselectedflag
            ? a(
                "v-uni-view",
                {
                  staticStyle: {
                    "background-color": "#F7F7F7",
                    height: "100%",
                    "overflow-y": "scroll",
                  },
                },
                [
                  a(
                    "cu-custom",
                    { attrs: { bgColor: "titleview", isBack: !0 } },
                    [
                      a(
                        "template",
                        { attrs: { slot: "content" }, slot: "content" },
                        [e._v(e._s(e.titleText))]
                      ),
                    ],
                    2
                  ),
                  a(
                    "v-uni-view",
                    {
                      staticClass: "contentContainer",
                      style: e.contentContainerStyle,
                    },
                    [
                      a(
                        "v-uni-view",
                        { staticClass: "cu-timeline" },
                        [
                          e._l(e.repairrecord, function (t, i) {
                            return e.repairrecord.length > 0
                              ? a(
                                  "v-uni-view",
                                  { key: i, staticClass: "cu-item text-blue" },
                                  [
                                    a(
                                      "v-uni-view",
                                      { staticClass: "content" },
                                      [
                                        a(
                                          "v-uni-view",
                                          {
                                            staticStyle: {
                                              "font-size": "30upx",
                                              color: "#8d8d99",
                                            },
                                          },
                                          [
                                            e._v(
                                              e._s(
                                                e._f("parsestatus")(t.status)
                                              )
                                            ),
                                          ]
                                        ),
                                        a("br"),
                                        "evaluated" == t.status &&
                                        "user_reply" != t.operation_type
                                          ? a(
                                              "v-uni-view",
                                              { staticClass: "desccontainer" },
                                              [
                                                a("my-issue", {
                                                  attrs: {
                                                    starsLines: [
                                                      t.service_quality_stars,
                                                      t.service_attitude_stars,
                                                      t.service_efficiency_stars,
                                                    ],
                                                    headPicShow: !1,
                                                    starsDisabled: !0,
                                                    textareaShow: !1,
                                                    headTitleValue:
                                                      "服务质量,服务态度,服务效率",
                                                    submitShow: !1,
                                                    diystyle: "padding:0px",
                                                  },
                                                  on: {
                                                    submit: function (t) {
                                                      (arguments[0] = t =
                                                        e.$handleEvent(t)),
                                                        e.submitIssue.apply(
                                                          void 0,
                                                          arguments
                                                        );
                                                    },
                                                    scoreChange: function (t) {
                                                      (arguments[0] = t =
                                                        e.$handleEvent(t)),
                                                        e.scoreChange.apply(
                                                          void 0,
                                                          arguments
                                                        );
                                                    },
                                                  },
                                                }),
                                                a(
                                                  "v-uni-view",
                                                  {
                                                    staticClass:
                                                      "text-desc-container",
                                                  },
                                                  [
                                                    a("v-uni-text", [
                                                      e._v("评价内容"),
                                                    ]),
                                                    a(
                                                      "v-uni-text",
                                                      {
                                                        staticStyle: {
                                                          "margin-left":
                                                            "30upx",
                                                        },
                                                      },
                                                      [
                                                        e._v(
                                                          e._s(
                                                            e._f(
                                                              "ShowIsNullText"
                                                            )(
                                                              t.evaluate_content
                                                            )
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            )
                                          : a(
                                              "v-uni-view",
                                              {
                                                staticClass:
                                                  "desccontainer text-desc-container",
                                              },
                                              [
                                                e._v(
                                                  e._s(
                                                    e._f("parserecordresult")(t)
                                                  )
                                                ),
                                              ]
                                            ),
                                        "evaluated" != t.status
                                          ? a(
                                              "v-uni-view",
                                              {
                                                staticClass:
                                                  "replypersoncontainer",
                                              },
                                              [
                                                e._v(
                                                  e._s(
                                                    e._f("parsereplyperson")(t)
                                                  )
                                                ),
                                              ]
                                            )
                                          : e._e(),
                                        a("br"),
                                        a(
                                          "v-uni-view",
                                          {
                                            staticClass: "consume-icon",
                                            class: e.getrecordicon(t.status)
                                              .iconcontainer,
                                          },
                                          [
                                            a("v-uni-text", {
                                              staticClass:
                                                "iconfont  title-icon",
                                              class: e.getrecordicon(t.status)
                                                .icon,
                                            }),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    a(
                                      "v-uni-view",
                                      { staticClass: "handel-time" },
                                      [
                                        a(
                                          "v-uni-view",
                                          { staticClass: "create-time" },
                                          [
                                            e._v(
                                              e._s(e._f("gettime")(t.create_at))
                                            ),
                                          ]
                                        ),
                                        a(
                                          "v-uni-view",
                                          { staticClass: "create-date" },
                                          [
                                            e._v(
                                              e._s(e._f("getdate")(t.create_at))
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                )
                              : e._e();
                          }),
                          a(
                            "v-uni-view",
                            {
                              staticClass: "cu-item text-blue",
                              class: {
                                "only-oneitem": 0 == e.repairrecord.length,
                              },
                            },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "content" },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "text-tip-grey" },
                                    [e._v("待处理")]
                                  ),
                                  a("br"),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "desccontainer" },
                                    [e._v("正在等待处理...")]
                                  ),
                                  a("br"),
                                  a(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "consume-icon icondaichulicontainer",
                                    },
                                    [
                                      a("v-uni-text", {
                                        staticClass:
                                          "iconfont  title-icon icondaichuli",
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                { staticClass: "handel-time" },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "create-time" },
                                    [
                                      e._v(
                                        e._s(
                                          e._f("gettime")(
                                            e.repairorder.create_at
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "create-date" },
                                    [
                                      e._v(
                                        e._s(
                                          e._f("getdate")(
                                            e.repairorder.create_at
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        2
                      ),
                      a(
                        "v-uni-view",
                        { staticClass: "repairdetailcontainer itemcontainer" },
                        [
                          a(
                            "v-uni-view",
                            {
                              staticClass: "repair-item-detail",
                              staticStyle: {
                                display: "flex",
                                "justify-content": "space-between",
                                "align-items": "center",
                              },
                            },
                            [
                              a(
                                "v-uni-view",
                                {
                                  staticStyle: {
                                    display: "flex",
                                    "align-items": "center",
                                  },
                                },
                                [
                                  a("v-uni-text", {
                                    staticClass: "cuIcon-locationfill",
                                    staticStyle: {
                                      "font-size": "45upx",
                                      color: "#32b1fe",
                                    },
                                  }),
                                  a(
                                    "v-uni-text",
                                    { staticStyle: { "margin-left": "10upx" } },
                                    [
                                      e._v(
                                        e._s(
                                          e._f("parsedevbuild")(e.repairorder)
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                {
                                  staticClass: "title-img-container",
                                  staticStyle: { margin: "0px" },
                                },
                                [
                                  a("v-uni-image", {
                                    staticClass: "title-img",
                                    staticStyle: { "border-radius": "0px" },
                                    attrs: {
                                      src: e._f("parseiconsrc")(
                                        e.repairorder.device_type
                                      ),
                                      mode: "aspectFit",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          1 == Number(e.type)
                            ? a(
                                "v-uni-view",
                                { staticClass: "repair-item-detail" },
                                [e._v("订单号：" + e._s(e.complaintorderid))]
                              )
                            : e._e(),
                          a(
                            "v-uni-view",
                            { staticClass: "repair-item-detail" },
                            [
                              e._v(
                                "设备编号：" + e._s(e.repairorder.device_addr)
                              ),
                            ]
                          ),
                          0 == Number(e.type)
                            ? a(
                                "v-uni-view",
                                { staticClass: "repair-item-detail" },
                                [
                                  e._v(
                                    "故障原因：" +
                                      e._s(
                                        e._f("parsedamagestatus")(
                                          e.repairorder.damage_status
                                        )
                                      )
                                  ),
                                ]
                              )
                            : e._e(),
                          0 == Number(e.type)
                            ? a(
                                "v-uni-view",
                                { staticClass: "repair-item-detail" },
                                [
                                  e._v(
                                    "故障说明：" +
                                      e._s(e.repairorder.description)
                                  ),
                                ]
                              )
                            : e._e(),
                          1 == Number(e.type)
                            ? a(
                                "v-uni-view",
                                { staticClass: "repair-item-detail" },
                                [
                                  e._v(
                                    "订单时长：" +
                                      e._s(
                                        e.getcomplaintorderinfo(e.repairorder)
                                          .time
                                      ) +
                                      "秒"
                                  ),
                                ]
                              )
                            : e._e(),
                          1 == Number(e.type)
                            ? a(
                                "v-uni-view",
                                { staticClass: "repair-item-detail" },
                                [
                                  e._v(
                                    "消费金额：" +
                                      e._s(
                                        e.getcomplaintorderinfo(e.repairorder)
                                          .money
                                      ) +
                                      "元"
                                  ),
                                ]
                              )
                            : e._e(),
                          1 == Number(e.type)
                            ? a(
                                "v-uni-view",
                                { staticClass: "repair-item-detail" },
                                [
                                  e._v(
                                    "投诉内容：" +
                                      e._s(e.repairorder.description)
                                  ),
                                ]
                              )
                            : e._e(),
                          e.imgurllist.length > 0
                            ? a(
                                "v-uni-view",
                                {
                                  staticClass: "repairimg-container",
                                  staticStyle: { "margin-left": "20upx" },
                                },
                                e._l(e.imgurllist, function (t, i) {
                                  return a(
                                    "v-uni-view",
                                    {
                                      key: i,
                                      staticClass: "bg-img",
                                      staticStyle: {
                                        width: "200upx",
                                        height: "200upx",
                                      },
                                      attrs: { "data-url": e.imgurllist[i] },
                                      on: {
                                        click: function (t) {
                                          (arguments[0] = t =
                                            e.$handleEvent(t)),
                                            e.ViewImage.apply(
                                              void 0,
                                              arguments
                                            );
                                        },
                                      },
                                    },
                                    [
                                      a("v-uni-image", {
                                        staticStyle: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        attrs: {
                                          src: e.imgurllist[i],
                                          mode: "aspectFill",
                                        },
                                      }),
                                    ],
                                    1
                                  );
                                }),
                                1
                              )
                            : e._e(),
                        ],
                        1
                      ),
                      e.canSubmitIssue
                        ? a(
                            "v-uni-view",
                            { staticClass: "issue-content itemcontainer" },
                            [
                              a("my-issue", {
                                attrs: {
                                  headPicShow: !1,
                                  starsDisabled: !1,
                                  textareaPlaceholder:
                                    "服务是否满意?写个评价呗~",
                                  headTitleValue: "服务质量,服务态度,服务效率",
                                },
                                on: {
                                  submit: function (t) {
                                    (arguments[0] = t = e.$handleEvent(t)),
                                      e.submitIssue.apply(void 0, arguments);
                                  },
                                  scoreChange: function (t) {
                                    (arguments[0] = t = e.$handleEvent(t)),
                                      e.scoreChange.apply(void 0, arguments);
                                  },
                                },
                              }),
                            ],
                            1
                          )
                        : e._e(),
                      e.isSubmitAgainRecord && !e.canSubmitIssue
                        ? a(
                            "v-uni-view",
                            { staticClass: "issue-content itemcontainer" },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "title" },
                                [a("v-uni-text", [e._v("追加反馈")])],
                                1
                              ),
                              a(
                                "v-uni-view",
                                { staticStyle: { "margin-top": "20upx" } },
                                [
                                  a("v-uni-textarea", {
                                    staticClass: "repair-text-view",
                                    attrs: {
                                      enableNative: !1,
                                      maxlength: "-1",
                                      placeholder: "请输入你要反馈的内容",
                                    },
                                    model: {
                                      value: e.againrecordcontent,
                                      callback: function (t) {
                                        e.againrecordcontent = t;
                                      },
                                      expression: "againrecordcontent",
                                    },
                                  }),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                {
                                  staticStyle: {
                                    padding: "20px 15px",
                                    display: "flex",
                                  },
                                },
                                [
                                  e.isDisplayCancelBtn && e.isGreaterV310
                                    ? a(
                                        "v-uni-button",
                                        {
                                          staticClass: "cancel-btn",
                                          attrs: { type: "default" },
                                          on: {
                                            click: function (t) {
                                              (arguments[0] = t =
                                                e.$handleEvent(t)),
                                                e.submitCancelRepair.apply(
                                                  void 0,
                                                  arguments
                                                );
                                            },
                                          },
                                        },
                                        [e._v(e._s(e.cancelText))]
                                      )
                                    : e._e(),
                                  a(
                                    "v-uni-button",
                                    {
                                      staticClass: "confirm-btn",
                                      style: [
                                        {
                                          width:
                                            e.isDisplayCancelBtn &&
                                            e.isGreaterV310
                                              ? "50%"
                                              : "100%",
                                        },
                                      ],
                                      attrs: { type: "primary" },
                                      on: {
                                        click: function (t) {
                                          (arguments[0] = t =
                                            e.$handleEvent(t)),
                                            e.SubmitAgainRecord.apply(
                                              void 0,
                                              arguments
                                            );
                                        },
                                      },
                                    },
                                    [e._v("提交")]
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
              )
            : e._e();
        },
        r = [];
    },
    a0e1: function (e, t, a) {
      "use strict";
      a("7a82");
      var i = a("ee27").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.CancelRepair = void 0),
        a("99af");
      i(a("6972"));
      var r = i(a("1783")),
        n = a("f55c"),
        o = a("5aba"),
        s = function (e) {
          return (0, o.sendapppost)(
            ""
              .concat(r.default.state.project.server_addr)
              .concat(n.API_PATH.addRepairRecord),
            e
          );
        };
      t.CancelRepair = s;
      var c = { CancelRepair: s };
      t.default = c;
    },
    a552: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    bea0: function (e, t, a) {
      "use strict";
      (function (e) {
        a("7a82");
        var i = a("ee27").default;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = i(a("f07e")),
          n = i(a("c964"));
        a("ac1f"), a("5319"), a("a9e3"), a("d3b7"), a("159b");
        var o = i(a("6972")),
          s = i(a("5cd9")),
          c = i(a("3475")),
          u = a("a0e1"),
          d = {
            components: { myIssue: c.default },
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                repairid: "",
                repairorder: {},
                orderselectedflag: !1,
                repairrecord: [],
                imgurllist: [],
                canSubmitIssue: !1,
                againrecordcontent: "",
                isGreaterV310: this.$store.getters.isGreaterV310,
                type: 0,
              };
            },
            onLoad: function (e) {
              (this.repairid = e.repairid),
                (this.type = e.type),
                this.getorder();
            },
            computed: {
              complaintorderid: function () {
                var e = "";
                if (
                  !o.default.isNullOrEmpty(this.repairorder) &&
                  !o.default.isNullOrEmpty(this.repairorder.extend)
                ) {
                  var t = JSON.parse(this.repairorder.extend);
                  e = t.order_id;
                }
                return e;
              },
              titleText: function () {
                return 1 == this.type ? "投诉详情" : "报修详情";
              },
              cancelText: function () {
                return 1 == this.type ? "取消投诉" : "取消报修";
              },
              isDisplayCancelBtn: function () {
                return "untreat" == this.repairorder.status;
              },
              isSubmitAgainRecord: function () {
                return "canceled" != this.repairorder.status;
              },
              contentContainerStyle: function () {
                var e = "height:calc(100% - ".concat(
                  this.$store.state.SystemInfo.CustomBar,
                  "px);"
                );
                return e;
              },
            },
            filters: {
              parsestatus: function (e) {
                return s.default.EnumRepairStatus[e];
              },
              parseiconsrc: function (e) {
                if (!o.default.isNullOrEmpty(e))
                  return o.default.GetDeviceIconByDevType(e);
              },
              parsedevbuild: function (e) {
                var t = "未知";
                if (
                  (o.default.isNullOrEmpty(e.building_name) ||
                    (t = o.default.getBuildingInfo(
                      e.building_name,
                      e.floor_name,
                      e.room_name
                    )),
                  o.default.isNullOrEmpty(e.address) || (t = e.address),
                  !o.default.isNullOrEmpty(e.extend))
                ) {
                  var a = JSON.parse(e.extend);
                  o.default.isNullOrEmpty(a.device_name) ||
                    (t += "-" + a.device_name);
                }
                return t;
              },
              parsedamagestatus: function (e) {
                if (!o.default.isNullOrEmpty(e)) {
                  var t = JSON.parse(e);
                  return t.join(",");
                }
              },
              parsehandelrepairstatus: function (e) {
                return s.default.EnumRepairStatus[e];
              },
              parserecordresult: function (e) {
                var t = "备注:";
                return o.default.isNullOrEmpty(e.result) || (t += e.result), t;
              },
              gettime: function (e) {
                if (!o.default.isNullOrEmpty(e)) {
                  var t = new Date(
                    new Date(e.replace(/\-/g, "/")).getTime()
                  ).Format("hh:mm");
                  return t;
                }
              },
              getdate: function (e) {
                if (!o.default.isNullOrEmpty(e)) {
                  var t = new Date(
                    new Date(e.replace(/\-/g, "/")).getTime()
                  ).Format("MM-dd");
                  return t;
                }
              },
              parsereplyperson: function (e) {
                var t = "";
                return (
                  o.default.isNullOrEmpty(e.create_name) ||
                    ("user_reply" == e.operation_type
                      ? (t = "用户:".concat(e.create_name))
                      : "admin_reply" == e.operation_type &&
                        (t = "处理人:管理员")),
                  t
                );
              },
              ShowIsNullText: function (e) {
                return o.default.isNullOrEmpty(e) ? "无" : e;
              },
            },
            onShow: function () {
              e.log("--------onShow---------");
            },
            methods: {
              getcomplaintorderinfo: function (e) {
                var t = { money: 0, time: 0 };
                try {
                  if (
                    !o.default.isNullOrEmpty(e) &&
                    !o.default.isNullOrEmpty(e.extend)
                  ) {
                    var a = JSON.parse(e.extend);
                    o.default.isNullOrEmpty(a.consume_money) ||
                      (t.money = Number(a.consume_money).toFixed(2)),
                      o.default.isNullOrEmpty(a.consume_time) ||
                        (t.time = a.consume_time);
                  }
                } catch (i) {
                  return t;
                }
                return t;
              },
              submitIssue: function (e) {
                var t = {},
                  a = {};
                (a.create_name = this.userdata.detailinfo.name),
                  (a.service_quality_stars = e.score[0]),
                  (a.service_attitude_stars = e.score[1]),
                  (a.service_efficiency_stars = e.score[2]),
                  (a.operation_type = "user_evaluate"),
                  (a.result = "已评价"),
                  this.repairrecord.length > 0 &&
                    (a.create_by = this.repairrecord[0].create_by),
                  e.textareaValue && (a.evaluate_content = e.textareaValue),
                  (a.status = "evaluated"),
                  (t.repairId = this.repairorder.id),
                  (t.repair_record = a),
                  this.SubmitRecord(t, "evaluated");
              },
              scoreChange: function (e) {},
              getrecordicon: function (e) {
                var t = { icon: "", iconcontainer: "" };
                switch (e) {
                  case "untreat":
                  case "canceled":
                    (t.icon = "icondaichuli"),
                      (t.iconcontainer = "icondaichulicontainer");
                    break;
                  case "handling":
                    (t.icon = "iconweixiu"),
                      (t.iconcontainer = "iconweixiucontainer");
                    break;
                  case "treat":
                    (t.icon = "iconwancheng"),
                      (t.iconcontainer = "iconwanchengcontainer");
                    break;
                  case "close":
                    (t.icon = "iconguanji"),
                      (t.iconcontainer = "iconguanjicontainer");
                    break;
                  case "evaluated":
                    (t.icon = "iconpingjia"),
                      (t.iconcontainer = "iconpingjiacontainer");
                    break;
                  default:
                    break;
                }
                return t;
              },
              getorder: function () {
                var e = this;
                o.default.showloading("正在加载中"),
                  o.default
                    .sendapppost(
                      e.project.server_addr +
                        o.default.API_PATH.getrepairdetail,
                      { repairId: e.repairid }
                    )
                    .then(function (t) {
                      uni.hideLoading(),
                        (e.repairorder = t),
                        "treat" == e.repairorder.status &&
                          (e.canSubmitIssue = !0),
                        (e.repairrecord = t.record),
                        e.repairrecord.forEach(function (t) {
                          ("user_evaluate" != t.operation_type &&
                            "evaluated" != t.status &&
                            "canceled" != t.status) ||
                            (e.canSubmitIssue = !1);
                        }),
                        (e.imgurllist = t.img_url_list);
                    })
                    .catch(function (e) {
                      return (
                        uni.hideLoading(),
                        o.default.showalert(
                          "提示",
                          e,
                          null,
                          function () {
                            uni.navigateBack({ delta: 1 });
                          },
                          !1
                        )
                      );
                    })
                    .finally(function () {
                      e.orderselectedflag = !0;
                    });
              },
              ViewImage: function (e) {
                uni.previewImage({
                  urls: this.imgurllist,
                  current: e.currentTarget.dataset.url,
                  showmenu: !0,
                });
              },
              SubmitAgainRecord: function () {
                if (o.default.isNullOrEmpty(this.againrecordcontent))
                  return o.default.showalert("提示", "请输入反馈内容");
                var e = {},
                  t = {};
                (t.create_name = this.userdata.detailinfo.name),
                  (t.status = "untreat"),
                  (t.result = this.againrecordcontent),
                  (t.create_at = new Date().Format("yyyy-MM-dd hh:mm:ss")),
                  (t.operation_type = "user_reply"),
                  (e.repairId = this.repairorder.id),
                  (e.repair_record = t),
                  this.SubmitRecord(e, "untreat");
              },
              SubmitRecord: function (e, t) {
                var a = this;
                o.default.showloading("提交中..."),
                  o.default
                    .sendapppost(
                      this.project.server_addr +
                        o.default.API_PATH.addRepairRecord,
                      e
                    )
                    .then(function (e) {
                      if ((uni.hideLoading(), e)) {
                        if ("evaluated" == t)
                          return o.default.showalert(
                            "提示",
                            "提交成功",
                            null,
                            function () {
                              var e = getCurrentPages(),
                                t = e[e.length - 2];
                              return (
                                "pagesA/repairlist/repairlist" == t.route &&
                                  t.$vm.mescroll.resetUpScroll(),
                                uni.navigateBack({ delta: 1 })
                              );
                            },
                            !1
                          );
                        (a.againrecordcontent = ""), a.getorder();
                      }
                    })
                    .catch(function (e) {
                      uni.hideLoading(), o.default.showalert("提交失败", e);
                    });
              },
              refreshList: function () {
                var e = getCurrentPages(),
                  t = e[e.length - 2];
                "pagesA/repairlist/repairlist" == t.route &&
                  t.$vm.mescroll.resetUpScroll();
              },
              submitCancelRepair: function () {
                var e = this,
                  t = (function () {
                    var t = (0, n.default)(
                      (0, r.default)().mark(function t() {
                        var a, i;
                        return (0, r.default)().wrap(
                          function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    !o.default.isNullOrEmpty(
                                      e.againrecordcontent
                                    )
                                  ) {
                                    t.next = 2;
                                    break;
                                  }
                                  return t.abrupt(
                                    "return",
                                    o.default.showalert(
                                      "提示",
                                      "请输入反馈内容"
                                    )
                                  );
                                case 2:
                                  return (
                                    (a = {}),
                                    (i = {}),
                                    (i.create_name =
                                      e.userdata.detailinfo.name),
                                    (i.status = "canceled"),
                                    (i.create_at = new Date().Format(
                                      "yyyy-MM-dd hh:mm:ss"
                                    )),
                                    (i.operation_type = "user_cancel"),
                                    (i.result = e.againrecordcontent),
                                    (a.repairId = e.repairorder.id),
                                    (a.repair_record = i),
                                    uni.showLoading({
                                      mask: !0,
                                      title: "正在取消中",
                                    }),
                                    (t.prev = 12),
                                    (t.next = 15),
                                    (0, u.CancelRepair)(a)
                                  );
                                case 15:
                                  uni.hideLoading(), (t.next = 22);
                                  break;
                                case 18:
                                  (t.prev = 18),
                                    (t.t0 = t["catch"](12)),
                                    uni.hideLoading(),
                                    o.default.showalert("提示", t.t0);
                                case 22:
                                  (e.againrecordcontent = ""),
                                    e.getorder(),
                                    e.refreshList();
                                case 25:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[12, 18]]
                        );
                      })
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })();
                o.default.showalert(
                  "提示",
                  "确定要取消该".concat(this.titleText.substring(0, 2), "吗?"),
                  null,
                  function () {
                    t();
                  },
                  !0
                );
              },
            },
          };
        t.default = d;
      }).call(this, a("5a52")["default"]);
    },
    bed7: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAD9klEQVRYR8WXX2gcVRTGv3M3u9tsNDREiq2suzOz40REUkNEQVDBivVPtVYJ1JeiqIiIiIr4oNAXsaDgm08iiCFCWsU/RBAx0dqC0MUQiCHtZnc2CV2koLRpdLPu7P3kSiJJupvMpls6r/ec8/3mzNzvnivY4jM5OXlNe3v7ewDuJ3ma5Muu6+a3Uk62kjQ8PBzp6+t7VUTeARBdrjEUi8WeTSaT5WZrbgmiWCz2aa2/IblrleCSiDxn2/bgFYcwnyGRSAyR3FdH7ExbW9uDqVSq0AxI053I5/OvADgCIL5eSEQ0yU+UUi9alrUUFqQpCN/3d2utvwaQ3ECgrLU+5Lru0ZZDlEqlRLlc/hTAgRDFfxORh23bng0Ri1CdyOVy8Ugk8jzJ9wHENitsPovW+mOSr7muu7BpfKOAbDab6O7uvklrfTOAPQCeBNC5WcGVdZJVEfme5FdKqWmt9XQmkzlXL3+lE1IqldorlUonyVtJPgSgH4AFwGzDUB3bAPACAGNk0ySPB0HwI4CS53l/ma7J7OxsV7VaHQCwXynVS/JaEUmQVGHfusm4f0TkotY6p5QaqVQqg5LP598F8AaAKyW6ISPJbw3ECADT/qv1nDYQTwD4CMD2q0BRJfmWZLPZaFdX1+sADofZfq0CXXbXocXFxRf+++t939+mtf4QwNOtEglR5+dYLHYwmUye/X/rzc3N7QqC4DOSd4cocLkhxSAIBjzPO2UKrdn/xWLxtiAIjomIfbkqjfJJLojIM47jfL4Sc4kJFQqFR0maMyK0OzYBbFz0sGVZR8w/0RDCTE39/f1vkny73nHdhOCa0OXzZDAIgpd6enourl6sa8dTU1M74/H4TwDcrYquzyN5FsDeTCYzuX6tLsTybvkFQG+rIACcUUrdY1nW76EgxsfHt3d2dp4AcEurIESkoJTak06n/VAQMzMzO0TkOACvVRAk50nudV13KhREqVS6sVwujwJwWgUhIiWl1L50Ov1rKIhCoeCR/A5AqlUQAM6RPJDJZE6GhejVWo+IyA0thPgTwIDjOD+EgvB9/w6t9ZcArt8Ewty2LpC8TkTaNok1s+ZTjuOY0WGth9RLzOVy94qIse/ueusk/1BKjdZqNTP+T4nIfSLyAIC7AGxrAPO3iByybftYKIhCoWAOsS9IroZYIJkXkcFarTYajUanV19wfN8388hukgdJGqCd60aDhveRumY1MTHR0dHR8YGIPAbgvNb6ZDQaPbq0tHTC87xFEWGj1o+NjbU5jrMjCILHtdaPiMidywPTKaXUgGVZxVCdMEHz8/Pt1WrVTN7nbdvObSTcCMhcmCqVyu0kU5FIJJtKpS7xCJP7L8jJrBUMCpKaAAAAAElFTkSuQmCC";
    },
  },
]);
