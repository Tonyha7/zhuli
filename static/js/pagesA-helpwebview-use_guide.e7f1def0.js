(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-helpwebview-use_guide"],
  {
    "3f18": function (e, t, n) {
      "use strict";
      var i = n("4e0f"),
        a = n.n(i);
      a.a;
    },
    "4e0f": function (e, t, n) {
      var i = n("ce04");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
      var a = n("4f06").default;
      a("2fd4987e", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "698a": function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("e1bb"),
        a = n("816e9");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      n("3f18");
      var c = n("f0c5"),
        l = Object(c["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "4f5921d7",
          null,
          !1,
          i["a"],
          void 0
        );
      t["default"] = l.exports;
    },
    "816e9": function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("88fc"),
        a = n.n(i);
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return i[e];
            });
          })(o);
      t["default"] = a.a;
    },
    "88fc": function (e, t, n) {
      "use strict";
      n("7a82");
      var i = n("ee27").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = i(n("f07e")),
        o = i(n("c964")),
        c = i(n("6972")),
        l = {
          data: function () {
            return { commonHelpList: [], defaultHelpList: [] };
          },
          mounted: function () {
            this.getCommonHelpList();
          },
          methods: {
            getCommonHelpList: function () {
              var e = this;
              return (0, o.default)(
                (0, a.default)().mark(function t() {
                  var n;
                  return (0, a.default)().wrap(
                    function (t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              c.default.sendapppost(
                                e.$store.state.project.server_addr +
                                  c.default.API_PATH.listcommonhelp,
                                { label_id: "use_guide", type: 1 }
                              )
                            );
                          case 3:
                            (n = t.sent),
                              (e.commonHelpList = n.data),
                              (t.next = 9);
                            break;
                          case 7:
                            (t.prev = 7), (t.t0 = t["catch"](0));
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 7]]
                  );
                })
              )();
            },
            updateSlideshowClick: function (e) {
              c.default
                .sendapppost(
                  this.$store.state.project.server_addr +
                    c.default.API_PATH.commonhelpclick,
                  { id: e }
                )
                .then(function (e) {
                  e.data;
                })
                .catch(function (e) {});
            },
            clickhelperItem: function (e) {
              if (e.url) {
                this.updateSlideshowClick(e.id);
                var t =
                  "/pagesA/helpwebview/helpwebview?url=" +
                  encodeURIComponent(e.url) +
                  "&title=" +
                  e.title +
                  "&id=" +
                  e.id;
                uni.navigateTo({ url: t });
              }
            },
          },
        };
      t.default = l;
    },
    ce04: function (e, t, n) {
      var i = n("24fb");
      (t = i(!1)),
        t.push([
          e.i,
          ".item-title[data-v-4f5921d7]{width:100%;height:%?90?%;line-height:%?90?%;font-size:%?32?%;border-bottom:%?3?% solid #e5e5e5;padding-left:%?20?%}",
          "",
        ]),
        (e.exports = t);
    },
    e1bb: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "a", function () {});
      var i = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
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
                    [e._v("使用指南")]
                  ),
                ],
                2
              ),
              e._l(e.defaultHelpList, function (t, i) {
                return e.commonHelpList.length < 1
                  ? n(
                      "v-uni-view",
                      {
                        key: i,
                        staticClass: "item-title",
                        on: {
                          click: function (n) {
                            (arguments[0] = n = e.$handleEvent(n)),
                              e.clickhelperItem(t);
                          },
                        },
                      },
                      [e._v(e._s(t.title))]
                    )
                  : e._e();
              }),
              e._l(e.commonHelpList, function (t, i) {
                return n(
                  "v-uni-view",
                  {
                    key: i,
                    staticClass: "item-title",
                    on: {
                      click: function (n) {
                        (arguments[0] = n = e.$handleEvent(n)),
                          e.clickhelperItem(t);
                      },
                    },
                  },
                  [e._v(e._s(t.title))]
                );
              }),
            ],
            2
          );
        },
        a = [];
    },
  },
]);
