(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-repairlist-repairlist"],
  {
    1768: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("7d73"),
        n = i("bbc0");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("e478");
      var r = i("f0c5"),
        s = Object(r["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "4da072ff",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "3a90": function (t, e, i) {
      "use strict";
      i("7a82");
      var a = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("a9e3"),
        i("99af");
      i("26cb");
      var n = a(i("6972")),
        o = a(i("5cd9")),
        r = {
          components: {},
          data: function () {
            return {
              userdata: this.$store.state.user,
              project: this.$store.state.project,
              repairlist: [],
              mescroll: null,
              upOption: {
                page: { num: 0, size: 10 },
                toTop: {},
                noMoreSize: 1,
                textNoMore: "-- 我是有底线的 --",
                empty: { tip: "~这里空空如也~" },
              },
              type: "",
              titletext: "报修记录",
            };
          },
          onLoad: function (t) {
            (this.type = t.type),
              1 == this.type && (this.titletext = "投诉记录");
          },
          onShow: function () {},
          onReachBottom: function () {
            this.mescroll && this.mescroll.onReachBottom();
          },
          onPageScroll: function (t) {
            this.mescroll && this.mescroll.onPageScroll(t);
          },
          filters: {
            parsestatus: function (t) {
              return o.default.EnumRepairStatus[t];
            },
            parsedamagestatus: function (t) {
              return JSON.parse(t).join();
            },
            parsedevbuild: function (t) {
              var e = "未知";
              if (
                (n.default.isNullOrEmpty(t.building_name) ||
                  (e = n.default.getBuildingInfo(
                    t.building_name,
                    t.floor_name,
                    t.room_name
                  )),
                0 != Number(t.device_addr) ||
                  n.default.isNullOrEmpty(t.address) ||
                  (e = t.address),
                !n.default.isNullOrEmpty(t.extend))
              ) {
                var i = JSON.parse(t.extend);
                n.default.isNullOrEmpty(i.device_name) ||
                  (e += "/" + i.device_name);
              }
              return e;
            },
            parseiconsrc: function (t) {
              return n.default.GetDeviceIconByDevType(t);
            },
          },
          computed: {
            TopHeight: function () {
              return "".concat(this.CustomBar, "px");
            },
          },
          methods: {
            getcomplaintorderinfo: function (t) {
              var e = { money: 0, time: 0 };
              try {
                if (
                  !n.default.isNullOrEmpty(t) &&
                  !n.default.isNullOrEmpty(t.extend)
                ) {
                  var i = JSON.parse(t.extend);
                  n.default.isNullOrEmpty(i.consume_money) ||
                    (e.money = Number(i.consume_money).toFixed(2)),
                    n.default.isNullOrEmpty(i.consume_time) ||
                      (e.time = i.consume_time);
                }
              } catch (a) {
                return e;
              }
              return e;
            },
            getstatusstyle: function (t) {
              var e = { style: "color: #b7b7b7;background-color: #f6f6f6;" };
              switch (t.status) {
                case "untreat":
                  e.style = "color: #05a1ff;background-color: #cbebff;";
                  break;
                case "handling":
                  e.style = "color: white;background-color: #f37a7a;";
                  break;
                case "treat":
                  e.style = "color: white;background-color: #07c160;";
                  break;
                case "evaluated":
                  e.style = "color: white;background-color: #07c160;";
                  break;
                default:
                  break;
              }
              return e;
            },
            mescrollInit: function (t) {
              (this.mescroll = t),
                1 != this.type && (this.mescroll.optUp.toTop.src = "");
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
                  function (i) {
                    t.endSuccess(i.length),
                      1 == t.num && (e.repairlist = []),
                      (e.repairlist = e.repairlist.concat(i));
                  },
                  function () {
                    t.endErr();
                  }
                );
            },
            getListDataFromNet: function (t, e, i, a) {
              try {
                this.loadrepair(function (t, e) {
                  return t ? i && i(t) : e ? a && a() : void 0;
                });
              } catch (n) {
                a && a();
              }
            },
            loadrepair: function (t) {
              var e = this,
                i = {
                  page_index: e.upOption.page.num,
                  page_size: e.upOption.page.size,
                  type: this.type,
                },
                a = e.project.server_addr + n.default.API_PATH.listRepair;
              n.default
                .sendapppost(a, i)
                .then(function (e) {
                  var i = [];
                  return n.default.isNullOrEmpty(e) || (i = e.rows), t(i, null);
                })
                .catch(function (i) {
                  return (e.mescroll.optUp.empty.tip = i), t([], i);
                });
            },
            opendetail: function (t) {
              var e =
                "../repairdetail/repairdetail?repairid=" +
                t +
                "&type=" +
                this.type;
              uni.navigateTo({ url: e });
            },
            gotoaddrepair: function () {
              uni.navigateTo({
                url: "../addrepair/addrepair?type=" + this.type,
              });
            },
          },
        };
      e.default = r;
    },
    7697: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          "uni-page-body[data-v-4da072ff]{background-color:#f7f7f7}body.?%PAGE?%[data-v-4da072ff]{background-color:#f7f7f7}.bottom-border-eee[data-v-4da072ff]{border-bottom:%?1?% solid #eee}.complaint-order-info uni-view[data-v-4da072ff]{margin:%?10?% %?0?%}.title-img-container[data-v-4da072ff]{margin:%?0?%!important;position:relative}.title-img[data-v-4da072ff]{width:%?60?%!important;height:%?60?%!important;border-radius:100%}.type-text[data-v-4da072ff]{margin-left:%?20?%;margin-bottom:%?10?%;width:calc(100% - %?60?%);word-break:break-all;white-space:normal}.content-container[data-v-4da072ff]{margin:%?40?%;background-color:#fff;border-radius:%?10?%}.item[data-v-4da072ff]{padding:%?30?% %?0?%;margin:%?0?% %?20?%}.item-title[data-v-4da072ff]{color:#999}.item-content[data-v-4da072ff]{color:#000;-webkit-user-select:text;word-break:break-all}.status-text[data-v-4da072ff]{position:absolute;right:10px;background-color:#ff0;border-radius:20px;padding:5px 15px;bottom:10px}",
          "",
        ]),
        (t.exports = e);
    },
    "7d73": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return o;
        }),
        i.d(e, "a", function () {
          return a;
        });
      var a = { mescrollUni: i("11c9").default },
        n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
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
                    [t._v(t._s(t.titletext))]
                  ),
                ],
                2
              ),
              i(
                "mescroll-uni",
                {
                  attrs: { top: t.TopHeight, up: t.upOption },
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
                t._l(t.repairlist, function (e) {
                  return i(
                    "v-uni-view",
                    {
                      key: e.id,
                      staticClass: "content-container",
                      on: {
                        click: function (i) {
                          (arguments[0] = i = t.$handleEvent(i)),
                            t.opendetail(e.id);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        {
                          staticClass: "content",
                          staticStyle: { position: "relative" },
                        },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "item bottom-border-eee" },
                            [
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "type-container",
                                  staticStyle: {
                                    display: "flex",
                                    "align-items": "center",
                                  },
                                },
                                [
                                  i(
                                    "v-uni-view",
                                    { staticClass: "title-img-container" },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "title-img",
                                        attrs: {
                                          "data-type": e.device_type,
                                          src: t._f("parseiconsrc")(
                                            e.device_type
                                          ),
                                          mode: "aspectFit",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "type-text" },
                                    [t._v(t._s(t._f("parsedevbuild")(e)))]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          0 == e.order_type
                            ? i(
                                "v-uni-view",
                                { staticClass: "item bottom-border-eee" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-title" },
                                    [t._v("故障原因：")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "item-content" },
                                    [
                                      t._v(
                                        t._s(
                                          t._f("parsedamagestatus")(
                                            e.damage_status
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                          1 == e.order_type
                            ? i(
                                "v-uni-view",
                                {
                                  staticClass:
                                    "item bottom-border-eee complaint-order-info",
                                },
                                [
                                  i(
                                    "v-uni-view",
                                    [
                                      i(
                                        "v-uni-text",
                                        { staticClass: "item-title" },
                                        [t._v("订单时长：")]
                                      ),
                                      i(
                                        "v-uni-text",
                                        { staticClass: "item-content" },
                                        [
                                          t._v(
                                            t._s(
                                              t.getcomplaintorderinfo(e).time
                                            ) + "秒"
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    [
                                      i(
                                        "v-uni-text",
                                        { staticClass: "item-title" },
                                        [t._v("消费金额：")]
                                      ),
                                      i(
                                        "v-uni-text",
                                        { staticClass: "item-content" },
                                        [
                                          t._v(
                                            t._s(
                                              t.getcomplaintorderinfo(e).money
                                            ) + "元"
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    [
                                      i(
                                        "v-uni-text",
                                        { staticClass: "item-title" },
                                        [t._v("投诉内容：")]
                                      ),
                                      i(
                                        "v-uni-text",
                                        { staticClass: "item-content" },
                                        [t._v(t._s(e.description))]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                          i(
                            "v-uni-view",
                            { staticClass: "item" },
                            [
                              i("v-uni-text", { staticClass: "item-title" }, [
                                t._v(t._s(e.create_at)),
                              ]),
                              i(
                                "v-uni-text",
                                {
                                  staticClass: "status-text",
                                  style: t.getstatusstyle(e).style,
                                },
                                [t._v(t._s(t._f("parsestatus")(e.status)))]
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
                }),
                1
              ),
              i(
                "v-uni-view",
                [
                  0 == t.type
                    ? i(
                        "v-uni-view",
                        {
                          staticStyle: {
                            position: "fixed",
                            bottom: "100upx",
                            right: "40upx",
                            width: "100upx",
                            height: "100upx",
                            "background-color": "#00BFFF",
                            "border-radius": "50%",
                            "text-align": "center",
                            "line-height": "110upx",
                            "z-index": "9999",
                          },
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.gotoaddrepair.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          i("v-uni-image", {
                            staticStyle: {
                              width: "100upx",
                              height: "100upx",
                              color: "white",
                            },
                            attrs: { src: "/static/add.png" },
                          }),
                        ],
                        1
                      )
                    : t._e(),
                ],
                1
              ),
            ],
            1
          );
        },
        o = [];
    },
    bbc0: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("3a90"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    e478: function (t, e, i) {
      "use strict";
      var a = i("f4c0"),
        n = i.n(a);
      n.a;
    },
    f4c0: function (t, e, i) {
      var a = i("7697");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("023401db", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
