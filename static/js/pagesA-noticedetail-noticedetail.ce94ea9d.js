(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-noticedetail-noticedetail"],
  {
    "1c66": function (t, e, n) {
      "use strict";
      var a = n("92d1"),
        i = n.n(a);
      i.a;
    },
    2544: function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82");
        var a = n("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          n("99af"),
          n("ac1f"),
          n("5319");
        var i = a(n("6972")),
          o =
            (a(n("5cd9")),
            {
              components: {},
              data: function () {
                return {
                  userdata: this.$store.state.user,
                  project: this.$store.state.project,
                  item: {},
                  titletext: "",
                  htmlStr: "",
                };
              },
              onLoad: function (t) {
                (this.item = JSON.parse(decodeURIComponent(t.obj))),
                  (this.titletext = this.item.title),
                  this.RequestHtmlDataStr(this.item.content),
                  "slider" == t.act_type &&
                    this.SendSliderContentReadNumber(this.item.content);
              },
              computed: {
                cubarstyle: function () {
                  return "height:"
                    .concat(this.CustomBar, "px;padding-top:")
                    .concat(this.StatusBar, "px;");
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
              filters: {},
              methods: {
                RequestHtmlDataStr: function (e) {
                  var n = this;
                  uni.request({
                    url: ""
                      .concat(e, "?timespan=")
                      .concat(new Date().getTime()),
                    header: { "content-type": "text" },
                    dataType: "text",
                    success: function (t) {
                      var e = t.data.replace(
                        /<a\b[^>]*>(.*?)<\/a>/gi,
                        function (t, e) {
                          return e;
                        }
                      );
                      n.htmlStr = e;
                    },
                    fail: function (e) {
                      t.log(e);
                    },
                  });
                },
                SendSliderContentReadNumber: function (t) {
                  i.default
                    .sendapppost(
                      this.project.server_addr +
                        i.default.API_PATH.setslidercontentrecord,
                      { detail: t }
                    )
                    .then(function (t) {})
                    .catch(function (t) {});
                },
              },
            });
        e.default = o;
      }).call(this, n("5a52")["default"]);
    },
    6486: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {
          return a;
        });
      var a = { mpHtml: n("b035").default },
        i = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            "v-uni-view",
            { staticStyle: { height: "100%" } },
            [
              e(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  e(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [this._v(this._s(this.titletext))]
                  ),
                ],
                2
              ),
              e(
                "v-uni-view",
                {
                  staticClass: "contentContainer",
                  style: this.contentContainerStyle,
                },
                [
                  e("mp-html", {
                    attrs: { content: this.htmlStr, selectable: !0 },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        o = [];
    },
    8874: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("6486"),
        i = n("f332");
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      n("1c66");
      var c = n("f0c5"),
        r = Object(c["a"])(
          i["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "4fa12d40",
          null,
          !1,
          a["a"],
          void 0
        );
      e["default"] = r.exports;
    },
    "92d1": function (t, e, n) {
      var a = n("a12f");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = n("4f06").default;
      i("423fadf3", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    a12f: function (t, e, n) {
      var a = n("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          ".html-container[data-v-4fa12d40]{\n\t/* padding: 0 20upx; */}.contentContainer[data-v-4fa12d40]{padding:%?10?% %?20?%;overflow-y:scroll}",
          "",
        ]),
        (t.exports = e);
    },
    f332: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("2544"),
        i = n.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = i.a;
    },
  },
]);
