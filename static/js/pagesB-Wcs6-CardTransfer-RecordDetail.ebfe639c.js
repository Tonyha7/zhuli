(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesB-Wcs6-CardTransfer-RecordDetail"],
  {
    "289f": function (t, e, a) {
      var n = a("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          "[v-cloak][data-v-1bbb7376]{display:none!important}uni-page-body[data-v-1bbb7376]{background-color:#f7f7f7}body.?%PAGE?%[data-v-1bbb7376]{background-color:#f7f7f7}.head-title[data-v-1bbb7376]{text-align:center;padding-top:%?40?%}.title-img[data-v-1bbb7376]{border-radius:0}.title-type[data-v-1bbb7376]{font-size:%?30?%;margin:%?5?% 0}.title-money[data-v-1bbb7376]{font-size:%?60?%;margin:%?10?% 0}.title-status[data-v-1bbb7376]{font-size:%?30?%;color:#a4d5be}.line[data-v-1bbb7376]{border-top:1px solid #ddd;margin:5px %?20?% 0 %?20?%}.item-container[data-v-1bbb7376]{\r\n\t/* background-color: white; */margin:%?40?% %?20?%;border-radius:%?10?%}.card-item-title[data-v-1bbb7376]{border-left:3px solid #32b1fe;padding-left:%?16?%;margin:%?20?%}.detail-item[data-v-1bbb7376]{\r\n\t/* border-bottom: 1px solid #eeeeee; */margin:0 %?20?%;padding:%?20?%;background-color:#fff;display:flex;align-items:center;justify-content:space-between}.detail-item > .item-title[data-v-1bbb7376]{color:#909090;flex:0 0 %?200?%}.detail-item > .item-content[data-v-1bbb7376]{float:right}.warn-text[data-v-1bbb7376]{color:#f64101!important}.runlog-container > .detail-item[data-v-1bbb7376]{display:flex;justify-content:space-between;margin-top:%?-20?%\r\n\t/* font-size: 0.75rem; */}.runlog-container > .detail-item > .item-title[data-v-1bbb7376]{flex:1}.runlog-container > .detail-item > .item-content[data-v-1bbb7376]{flex:1;text-align:right}",
          "",
        ]),
        (t.exports = e);
    },
    6843: function (t, e, a) {
      var n = a("289f");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var i = a("4f06").default;
      i("7d562844", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "88f1": function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return n;
      }),
        a.d(e, "c", function () {
          return i;
        }),
        a.d(e, "a", function () {});
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-uni-view",
            { staticStyle: { height: "100%" } },
            [
              a(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  a(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("转存详情")]
                  ),
                ],
                2
              ),
              a(
                "v-uni-view",
                { style: t.ContentStyle },
                [
                  t._l(t.dataUI, function (e, n) {
                    return a(
                      "v-uni-view",
                      { staticClass: "item-container" },
                      [
                        a("h5", { staticClass: "card-item-title" }, [
                          t._v(t._s(n)),
                        ]),
                        t._l(e, function (e, n) {
                          return a(
                            "v-uni-view",
                            { staticClass: "detail-item" },
                            [
                              a("v-uni-text", { staticClass: "item-title" }, [
                                t._v(t._s(n)),
                              ]),
                              a("v-uni-text", { staticClass: "item-content" }, [
                                t._v(t._s(t._f("ParseContent")(e))),
                              ]),
                            ],
                            1
                          );
                        }),
                      ],
                      2
                    );
                  }),
                  a("v-uni-view", {
                    staticClass: "item-container",
                    staticStyle: { "margin-top": "-20upx" },
                  }),
                ],
                2
              ),
            ],
            1
          );
        },
        i = [];
    },
    9907: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("de0f"),
        i = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = i.a;
    },
    cfa8: function (t, e, a) {
      "use strict";
      var n = a("6843"),
        i = a.n(n);
      i.a;
    },
    de0f: function (t, e, a) {
      "use strict";
      a("7a82");
      var n = a("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        a("c975");
      var i = n(a("6972")),
        r = n(a("5cd9")),
        o = {
          components: {},
          onLoad: function (t) {
            this.id = t.id;
          },
          data: function () {
            return {
              userdata: this.$store.state.user,
              project: this.$store.state.project,
              id: "",
              type: "",
              Record: {},
              dataUI: {},
            };
          },
          computed: {
            ContentStyle: function () {
              return "height:calc(100% - ".concat(
                this.CustomBar,
                "px);overflow-y: scroll;"
              );
            },
          },
          mounted: function () {
            this.getdetail(this.id);
          },
          filters: {
            ParseContent: function (t) {
              return i.default.isNullOrEmpty(t) ? "" : t;
            },
          },
          methods: {
            GetStatusStyle: function (t) {
              var e = {
                style: "",
                text: r.default.EnumWcs6TransferRecordStatus[t],
              };
              return 5 == t && (e.style = " color:#f64101"), e;
            },
            getdetail: function (t) {
              var e = this,
                a = { id: t };
              uni.showLoading({ mask: !0, title: "正在查询中" }),
                i.default
                  .sendapppost(
                    e.project.server_addr +
                      i.default.API_PATH.GetWcs6CardTransferDetail,
                    a
                  )
                  .then(function (t) {
                    uni.hideLoading(),
                      (e.Record = t),
                      e.CalcDataDisplay(e.Record);
                  })
                  .catch(function (t) {
                    return (
                      uni.hideLoading(),
                      i.default.showalert("提示", t, null, function () {
                        uni.navigateBack({ delta: 1 });
                      })
                    );
                  });
            },
            CalcDataDisplay: function (t) {
              var e = {};
              (e.基本信息 = {
                用户名称: t.staff_name,
                手机号码: t.staff_phone,
                设备编号: t.device_id,
                转存前余额: t.balance_before + "元",
                转存后余额: 4 == t.status ? t.balance_after + "元" : "",
                开始时间: t.create_at,
              }),
                "未执行" != t.wcs6_result_msg &&
                  t.wcs6_result_msg.indexOf("读取成功_清卡成功") >= 0 &&
                  (e.卡片信息 = {
                    卡片余额: t.wcs6_balance + "元",
                    挂失状态: t.wcs6_lost_flag ? "已挂失" : "正常",
                    有效期限: t.wcs6_valid_date,
                  }),
                "未执行" != t.transfer_result_msg &&
                  (e.转存处理 = {
                    转存金额: 4 == t.status ? t.check_balance + "元" : "",
                    云卡编号: t.cloud_card_id,
                    处理结果: t.transfer_result_msg,
                    处理时间: t.transfer_end_time,
                  }),
                (this.dataUI = e);
            },
          },
        };
      e.default = o;
    },
    fd03: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("88f1"),
        i = a("9907");
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      a("cfa8");
      var o = a("f0c5"),
        s = Object(o["a"])(
          i["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "1bbb7376",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = s.exports;
    },
  },
]);
