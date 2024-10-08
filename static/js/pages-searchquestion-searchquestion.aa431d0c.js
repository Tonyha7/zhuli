(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-searchquestion-searchquestion"],
  {
    3513: function (t, e, n) {
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
            { staticStyle: { height: "100%" } },
            [
              n(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  n(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("常见问题")]
                  ),
                ],
                2
              ),
              n(
                "v-uni-view",
                { staticClass: "cu-bar search bg-white" },
                [
                  n(
                    "v-uni-view",
                    {
                      staticClass: "search-form round",
                      staticStyle: { margin: "0 60upx" },
                    },
                    [
                      n("v-uni-text", {
                        staticClass: "cuIcon-search",
                        staticStyle: { "font-size": "40upx" },
                      }),
                      n("v-uni-input", {
                        staticStyle: { "padding-right": "0px" },
                        attrs: {
                          "adjust-position": !1,
                          type: "text",
                          placeholder: "请输入关键词",
                          "confirm-type": "search",
                        },
                        on: {
                          input: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.searchCommonHelperList.apply(void 0, arguments);
                          },
                          confirm: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.searchCommonHelperList.apply(void 0, arguments);
                          },
                        },
                        model: {
                          value: t.searchStr,
                          callback: function (e) {
                            t.searchStr = e;
                          },
                          expression: "searchStr",
                        },
                      }),
                      t.searchStr
                        ? n("v-uni-text", {
                            staticClass: "cuIcon-roundclosefill action-icon",
                            on: {
                              click: function (e) {
                                e.stopPropagation(),
                                  (arguments[0] = e = t.$handleEvent(e)),
                                  t.clear.apply(void 0, arguments);
                              },
                            },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "v-uni-view",
                {
                  staticClass: "cu-list menu bg-white",
                  style: t.contentviewstyle,
                },
                t._l(t.commonHelpList, function (e, i) {
                  return n(
                    "v-uni-view",
                    {
                      key: i,
                      staticClass: "cu-item q-list-item",
                      on: {
                        click: function (n) {
                          (arguments[0] = n = t.$handleEvent(n)),
                            t.clickhelperItem(e);
                        },
                      },
                    },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "content" },
                        [n("v-uni-text", [t._v(t._s(e.title))])],
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
        a = [];
    },
    "43a7": function (t, e, n) {
      var i = n("db2d");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("d0963256", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    4787: function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82");
        var i = n("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          n("99af"),
          n("c975"),
          n("14d9");
        var a = i(n("6972")),
          o = {
            onLoad: function (e) {
              var n = this,
                i = this.getOpenerEventChannel();
              i.on("acceptDataFromOpenerPage", function (e) {
                t.log(e),
                  (n.AllcommonHelpList = n.commonHelpList = e.commonHelpList);
              });
            },
            created: function () {},
            computed: {
              cubarstyle: function () {
                return "height:"
                  .concat(this.CustomBar, "px;padding-top:")
                  .concat(this.StatusBar, "px;");
              },
              contentviewstyle: function () {
                return "height:calc(100% - "
                  .concat(this.CustomBar, "px - ")
                  .concat(uni.upx2px(100), "px);position:fixed;");
              },
            },
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                scrollLeft: "",
                TabCur: 0,
                AllcommonHelpList: [],
                commonHelpList: [],
                searchStr: "",
              };
            },
            methods: {
              clear: function () {
                (this.searchStr = ""), this.searchCommonHelperList();
              },
              searchCommonHelperList: function () {
                a.default.isNullOrEmpty(this.searchStr)
                  ? (this.commonHelpList = this.AllcommonHelpList)
                  : (this.commonHelpList = this.getItem(
                      this.AllcommonHelpList,
                      "title",
                      this.searchStr
                    ));
              },
              clickhelperItem: function (t) {
                if (t.url) {
                  this.updateSlideshowClick(t.id);
                  var e =
                    "/pagesA/helpwebview/helpwebview?url=" +
                    encodeURIComponent(t.url) +
                    "&id=" +
                    t.id +
                    "&title=" +
                    t.title +
                    "&act_type=common_help";
                  uni.navigateTo({ url: e });
                }
              },
              updateSlideshowClick: function (t) {
                a.default
                  .sendapppost(
                    this.project.server_addr +
                      a.default.API_PATH.commonhelpclick,
                    { id: t }
                  )
                  .then(function (t) {})
                  .catch(function (t) {});
              },
              getItem: function (t, e, n) {
                for (var i = [], a = 0; a < t.length; a++)
                  t[a][e].indexOf(n) > -1 && i.push(t[a]);
                return i;
              },
            },
          };
        e.default = o;
      }).call(this, n("5a52")["default"]);
    },
    "7be9": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("4787"),
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
    a1b3: function (t, e, n) {
      "use strict";
      var i = n("43a7"),
        a = n.n(i);
      a.a;
    },
    b3bc: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("3513"),
        a = n("7be9");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      n("a1b3");
      var c = n("f0c5"),
        s = Object(c["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "5d7a2810",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    db2d: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          ".action-icon[data-v-5d7a2810]{font-size:%?45?%;margin:0 %?20?% 0 %?10?%!important;color:#d9d9d9}.scroll-label-container[data-v-5d7a2810]{height:%?100?%;padding:%?20?%}.label-item[data-v-5d7a2810]{background-color:#f6f6f6;color:#aeaeae;display:inline-block;padding:5px 10px;border-radius:15px;margin-right:%?20?%}.label-item-active[data-v-5d7a2810]{background-color:#def3ff;color:#32b1fe}.cu-list[data-v-5d7a2810]{width:100%!important;overflow-y:scroll!important}",
          "",
        ]),
        (t.exports = e);
    },
  },
]);
