(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-moreprogress-moreprogress"],
  {
    "1faf": function (e, t, s) {
      "use strict";
      s("7a82"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.spaceCode = void 0);
      t.spaceCode = {
        homeFeeds: "27_2023110722700069535",
        homePreferredStyle: "50_2023110725000069536",
        consumePreferredStyle: "50_2023111625000070819",
        rechargePicture: "ad_tiny_2021001155694496_202311162200070856",
        rechargeFullScreen: "50_2023110725000069539",
        myPagePicture: "ad_tiny_2021001155694496_202311162200070838",
        consumeBillPicture: "ad_tiny_2021001155694496_202311152200070696",
        consumeendFeeds: "27_2023111622700070859",
        consumeBtn: "50_2023112225000071293",
        consumeCheckBox: "50_2023112225000071298",
        consumeFeeds: "27_2023112222700071301",
        myPageFeeds: "27_2023112222700071328",
        consumeEndToast: "50_2023112725000071965",
        rechargeEndToast: "50_2023112725000071994",
        rechargeConfirmFeeds: "27_2023112722700072037",
        commonEquipmentFeeds: "27_2023112722700072038",
        consumeStatusFeeds: "27_2023112922700072343",
        moreProgressFeeds: "27_2023112922700072438",
        consumeEndBtn: "50_2023120725000073705",
        consumeEndCheckBox: "50_2023120725000073716",
      };
    },
    "4b01": function (e, t, s) {
      "use strict";
      s.d(t, "b", function () {
        return r;
      }),
        s.d(t, "c", function () {
          return n;
        }),
        s.d(t, "a", function () {});
      var r = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "v-uni-view",
            { staticClass: "moreprogress" },
            [
              s(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  s(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [e._v(e._s(e.title) + "进度")]
                  ),
                ],
                2
              ),
              s(
                "v-uni-view",
                { staticClass: "status-view" },
                [
                  s(
                    "v-uni-view",
                    { staticClass: "header" },
                    [
                      s("v-uni-view", [e._v("时间")]),
                      s("v-uni-view", [e._v("当前状态")]),
                      s("v-uni-view", [e._v("进度")]),
                    ],
                    1
                  ),
                  e._l(e.progressList, function (t, r) {
                    return s(
                      "v-uni-view",
                      { key: r, staticClass: "list-item" },
                      [
                        s(
                          "v-uni-view",
                          {
                            staticClass: "title",
                            class: [{ "warn-text": "warn" == t.type }],
                          },
                          [e._v(e._s(t.date))]
                        ),
                        s("v-uni-view", { staticClass: "content" }, [
                          e._v(e._s(t.status)),
                        ]),
                        s(
                          "v-uni-view",
                          {
                            staticClass: "content",
                            class: [{ "warn-text": "warn" == t.type }],
                          },
                          [e._v(e._s(t.time))]
                        ),
                      ],
                      1
                    );
                  }),
                ],
                2
              ),
            ],
            1
          );
        },
        n = [];
    },
    "4ba6": function (e, t, s) {
      var r = s("24fb");
      (t = r(!1)),
        t.push([
          e.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.moreprogress[data-v-1c0c3884]{height:100%;background-color:#fdeeee}.status-view[data-v-1c0c3884]{margin:%?20?% %?32?%;background-color:#fff;border-radius:%?16?%}.status-view .header[data-v-1c0c3884]{display:flex;justify-content:space-between;align-items:center;margin:0 %?30?% 0 %?32?%;border-bottom:1px solid hsla(0,0%,100%,.2);padding:%?20?% 0;font-size:%?32?%;font-weight:500;color:#333;line-height:%?40?%}.status-view .header uni-view[data-v-1c0c3884]{width:33%}.status-view .list-item[data-v-1c0c3884]{display:flex;justify-content:space-between;align-items:center;margin:0 %?30?% 0 %?32?%;padding:%?20?% 0;font-size:%?28?%;font-weight:500;color:#333;line-height:%?40?%}.status-view .list-item uni-view[data-v-1c0c3884]{width:33%}',
          "",
        ]),
        (e.exports = t);
    },
    "50d7": function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s("5616"),
        n = s.n(r);
      for (var a in r)
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            s.d(t, e, function () {
              return r[e];
            });
          })(a);
      t["default"] = n.a;
    },
    5616: function (e, t, s) {
      "use strict";
      (function (e) {
        s("7a82");
        var r = s("ee27").default;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0),
          s("c975"),
          s("99af"),
          s("3c65");
        var n = r(s("6972")),
          a = s("1faf"),
          i = {
            data: function () {
              return {
                title: "",
                progressList: [],
                project: this.$store.state.project,
                isFeedsShow: !0,
                getorderstatusinterval: null,
              };
            },
            computed: {
              isShowAd: function () {
                return this.$store.state.isShowAd;
              },
              spaceCode: function () {
                return a.spaceCode;
              },
            },
            onLoad: function (e) {
              var t = e.id;
              this.refreshorderstatus(t);
            },
            onUnload: function () {
              clearInterval(this.getorderstatusinterval),
                (this.getorderstatusinterval = null);
            },
            methods: {
              refreshorderstatus: function (e) {
                var t = this;
                this.getorderstatusinterval &&
                  (clearInterval(this.getorderstatusinterval),
                  (this.getorderstatusinterval = null)),
                  t.getorderstatus(e),
                  (this.getorderstatusinterval = setInterval(function () {
                    t.getorderstatus(e);
                  }, 1e4));
              },
              getorderstatus: function (t) {
                var s = this;
                n.default
                  .sendapppost(
                    s.project.server_addr + n.default.API_PATH.getrecorddetail,
                    { bill_id: t, use_type: "consume" }
                  )
                  .then(function (e) {
                    if ("finished" == e.status || "refund" == e.status)
                      return (
                        clearInterval(s.getorderstatusinterval),
                        (s.getorderstatusinterval = null),
                        uni.redirectTo({
                          url:
                            "/pagesA/consumeend/consumeend?orderid=" +
                            e.order_id,
                        })
                      );
                    if (!n.default.isNullOrEmpty(e)) {
                      "laundry" == e.consume_type
                        ? (s.title = "洗衣")
                        : "dryer" == e.consume_type
                        ? (s.title = "烘干")
                        : "shoe" == e.consume_type && (s.title = "洗鞋");
                      -1 !== [3, 8, 9].indexOf(e.device_type) &&
                        s.ParseDeviceRunLog(e.process_log);
                    }
                  })
                  .catch(function (t) {
                    e.log(t);
                  });
              },
              ParseDeviceRunLog: function (e) {
                for (var t = [], s = e.split(";"), r = 0; r < s.length; r++) {
                  for (
                    var n = s[r].split(","), a = {}, i = 0;
                    i < n.length;
                    i++
                  ) {
                    var o = n[i],
                      u = o.split(":");
                    (a.type = "info"),
                      "时间" == u[0] &&
                        (a.date = ""
                          .concat(u[1], ":")
                          .concat(u[2], ":")
                          .concat(u[3])),
                      "剩余时间" == u[0] && (a.time = "剩余:" + u[1]),
                      "运行状态" == u[0] &&
                        ((a.time = u[1]), (a.status = u[1])),
                      "启动状态" == u[0] &&
                        ((a.time = u[1]), (a.status = u[1])),
                      "设备告警" == u[0] &&
                        ((a.time = u[1]), (a.status = u[1]), (a.type = "warn")),
                      "温度等级" == u[0] &&
                        (this.CurrentRecordStatus.mode = u[1]);
                  }
                  a.date &&
                    a.time &&
                    ((a.date = new Date(a.date).Format("hh:mm:ss")),
                    t.unshift(a));
                }
                this.progressList = t;
              },
            },
          };
        t.default = i;
      }).call(this, s("5a52")["default"]);
    },
    a924: function (e, t, s) {
      "use strict";
      var r = s("bbe9"),
        n = s.n(r);
      n.a;
    },
    bbe9: function (e, t, s) {
      var r = s("4ba6");
      r.__esModule && (r = r.default),
        "string" === typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
      var n = s("4f06").default;
      n("2d1326b4", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f28c: function (e, t, s) {
      "use strict";
      s.r(t);
      var r = s("4b01"),
        n = s("50d7");
      for (var a in n)
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            s.d(t, e, function () {
              return n[e];
            });
          })(a);
      s("a924");
      var i = s("f0c5"),
        o = Object(i["a"])(
          n["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "1c0c3884",
          null,
          !1,
          r["a"],
          void 0
        );
      t["default"] = o.exports;
    },
  },
]);
