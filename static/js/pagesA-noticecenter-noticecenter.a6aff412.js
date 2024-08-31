(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-noticecenter-noticecenter"],
  {
    "02ac": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("5434"),
        a = n("70aa");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      n("e134");
      var c = n("f0c5"),
        r = Object(c["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "24b355aa",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = r.exports;
    },
    5434: function (t, e, n) {
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
      var i = { mescrollUni: n("11c9").default },
        a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "v-uni-view",
            { staticStyle: { height: "100%" } },
            [
              n(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  n(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("消息中心")]
                  ),
                ],
                2
              ),
              n(
                "mescroll-uni",
                {
                  attrs: { up: t.upOption, top: t.TopHeight },
                  on: {
                    up: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.upCallback.apply(void 0, arguments);
                    },
                    down: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.downCallback.apply(void 0, arguments);
                    },
                    init: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.mescrollInit.apply(void 0, arguments);
                    },
                  },
                },
                t._l(t.noticelist, function (e, i) {
                  return n(
                    "v-uni-view",
                    {
                      key: i,
                      staticClass: "cardview-container",
                      on: {
                        click: function (n) {
                          (arguments[0] = n = t.$handleEvent(n)),
                            t.opendetail(e);
                        },
                      },
                    },
                    [
                      n(
                        "v-uni-view",
                        {
                          staticClass: "title-view",
                          staticStyle: {
                            display: "flex",
                            "justify-content": "space-between",
                            "align-items": "center",
                          },
                        },
                        [
                          n(
                            "v-uni-view",
                            {
                              staticClass: "type-container",
                              staticStyle: {
                                display: "flex",
                                "align-items": "center",
                                padding: "20upx",
                              },
                            },
                            [
                              n(
                                "v-uni-view",
                                { staticClass: "title-img-container" },
                                [
                                  n("v-uni-image", {
                                    staticClass: "title-img",
                                    attrs: {
                                      src: t.gettypeimg(e.type),
                                      mode: "aspectFit",
                                    },
                                  }),
                                ],
                                1
                              ),
                              n("v-uni-view", { staticClass: "type-text" }, [
                                t._v(t._s(t._f("showtypetext")(e.type))),
                              ]),
                            ],
                            1
                          ),
                          n(
                            "v-uni-view",
                            { staticClass: "notice-time text-gray" },
                            [t._v(t._s(e.createat))]
                          ),
                        ],
                        1
                      ),
                      n("v-uni-view", { staticClass: "noticecontent" }, [
                        t._v(t._s(e.title)),
                      ]),
                      n(
                        "v-uni-view",
                        { staticClass: "noticeaction" },
                        [
                          n("v-uni-text", [
                            t._v(t._s(t._f("showactiontext")(e.type))),
                          ]),
                          n("v-uni-text", { staticClass: "cuIcon-right" }),
                        ],
                        1
                      ),
                    ],
                    1
                  );
                }),
                1
              ),
            ],
            1
          );
        },
        o = [];
    },
    "70aa": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("8e7b"),
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
    "8e7b": function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("99af"),
        n("e9c4");
      var a = i(n("6972")),
        o =
          (i(n("5cd9")),
          {
            components: {},
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                noticelist: [],
                mescroll: null,
                upOption: {
                  page: { num: 0, size: 20 },
                  noMoreSize: 1,
                  textNoMore: "-- 我是有底线的 --",
                  empty: { tip: "~没有更多消息了~" },
                },
              };
            },
            filters: {
              showactiontext: function (t) {
                var e = "查看详情";
                return 2 == t && (e = "回复/评价"), e;
              },
              showtypetext: function (t) {
                var e = "公告";
                return 2 == t && (e = "通知"), e;
              },
            },
            computed: {
              TopHeight: function () {
                return "".concat(this.CustomBar, "px");
              },
              contentContainerStyle: function () {
                var t = "height:calc(100% - "
                  .concat(this.$store.state.SystemInfo.CustomBar, "px ")
                  .concat(
                    "common_help" == this.type
                      ? " - ".concat(uni.upx2px(120), "px")
                      : "",
                    ");"
                  );
                return t;
              },
            },
            onReachBottom: function () {
              this.mescroll && this.mescroll.onReachBottom();
            },
            onPageScroll: function (t) {
              this.mescroll && this.mescroll.onPageScroll(t);
            },
            methods: {
              getnoticetype: function (t) {
                var e = { icon: "/static/noticeicon.png", title: "通知" };
                return e;
              },
              gettypeimg: function (t) {
                var e = "../static/notice_gg.png";
                return 2 == t && (e = "../static/noticeicon.png"), e;
              },
              mescrollInit: function (t) {
                this.mescroll = t;
              },
              downCallback: function (t) {
                t.resetUpScroll();
              },
              upCallback: function (t) {
                var e = this;
                (this.upOption.page.num = t.num),
                  this.getListDataFromNet(
                    t.num,
                    t.size,
                    function (n) {
                      t.endSuccess(n.length),
                        1 == t.num && (e.noticelist = []),
                        (e.noticelist = e.noticelist.concat(n));
                    },
                    function () {
                      t.endErr();
                    }
                  );
              },
              getListDataFromNet: function (t, e, n, i) {
                try {
                  this.loaddata(function (t, e) {
                    return t ? n && n(t) : e ? i && i() : void 0;
                  });
                } catch (a) {
                  i && i();
                }
              },
              loaddata: function (t) {
                var e = this,
                  n = {
                    page_index: e.upOption.page.num,
                    page_size: e.upOption.page.size,
                  },
                  i = e.project.server_addr + a.default.API_PATH.getallnotice;
                a.default
                  .sendapppost(i, n)
                  .then(function (e) {
                    var n = [];
                    return a.default.isNullOrEmpty(e) || (n = e), t(n, null);
                  })
                  .catch(function (n) {
                    return (e.mescroll.optUp.empty.tip = n), t([], n);
                  });
              },
              opendetail: function (t) {
                var e = "";
                if (1 == t.type)
                  (t = encodeURIComponent(JSON.stringify(t))),
                    (e = "../noticedetail/noticedetail?obj=" + t);
                else {
                  var n = JSON.parse(t.extend);
                  e =
                    "/pagesA/repairdetail/repairdetail?repairid=" +
                    n.order_id +
                    "&type=" +
                    n.type;
                }
                uni.navigateTo({ url: e });
              },
            },
          });
      e.default = o;
    },
    "911f": function (t, e, n) {
      var i = n("f60b");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("cbe31a1c", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    e134: function (t, e, n) {
      "use strict";
      var i = n("911f"),
        a = n.n(i);
      a.a;
    },
    f60b: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          ".contentContainer[data-v-24b355aa]{padding:%?10?% %?20?%;overflow-y:scroll}uni-page-body[data-v-24b355aa]{background-color:#f7f7f7}body.?%PAGE?%[data-v-24b355aa]{background-color:#f7f7f7}.cardview-container[data-v-24b355aa]{margin:%?20?% %?40?% %?0?% %?40?%;background-color:#fff;border-radius:15px}.title-img-container[data-v-24b355aa]{margin:0!important;position:relative}.title-img[data-v-24b355aa]{width:%?60?%!important;height:%?60?%!important;border-radius:100%}.type-text[data-v-24b355aa]{margin-left:%?20?%;margin-bottom:%?10?%}.notice-time[data-v-24b355aa]{font-size:%?24?%;margin-right:%?20?%;margin-bottom:%?20?%}.noticecontent[data-v-24b355aa]{color:#858896;margin:0 %?20?% %?20?% %?20?%;border-bottom:1px solid #edeef2;padding-bottom:%?30?%}.noticeaction[data-v-24b355aa]{color:#bbbfca;display:flex;align-items:center;justify-content:space-between;line-height:2.5;margin:%?20?%;position:relative;bottom:%?10?%}",
          "",
        ]),
        (t.exports = e);
    },
  },
]);
