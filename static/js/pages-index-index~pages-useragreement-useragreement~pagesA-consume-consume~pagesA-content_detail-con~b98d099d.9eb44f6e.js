(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "pages-index-index~pages-useragreement-useragreement~pagesA-consume-consume~pagesA-content_detail-con~b98d099d",
  ],
  {
    1222: function (t, n, r) {
      "use strict";
      r.d(n, "b", function () {
        return e;
      }),
        r.d(n, "c", function () {
          return i;
        }),
        r.d(n, "a", function () {});
      var e = function () {
          var t = this,
            n = t.$createElement,
            r = t._self._c || n;
          return r(
            "v-uni-view",
            {
              class: "_block _" + t.name + " " + t.attrs.class,
              style: t.attrs.style,
              attrs: { id: t.attrs.id },
            },
            [
              t._l(t.childs, function (n, e) {
                return [
                  "img" === n.name &&
                  !n.t &&
                  ((t.opts[1] && !t.ctrl[e]) || t.ctrl[e] < 0)
                    ? r("v-uni-image", {
                        key: e + "_0",
                        staticClass: "_img",
                        style: n.attrs.style,
                        attrs: {
                          src: t.ctrl[e] < 0 ? t.opts[2] : t.opts[1],
                          mode: "widthFix",
                        },
                      })
                    : t._e(),
                  "img" === n.name
                    ? r("img", {
                        key: e + "_1",
                        class: "_img " + n.attrs.class,
                        style:
                          (-1 === t.ctrl[e] ? "display:none;" : "") +
                          n.attrs.style,
                        attrs: {
                          id: n.attrs.id,
                          src:
                            n.attrs.src ||
                            (t.ctrl.load ? n.attrs["data-src"] : ""),
                          "data-i": e,
                        },
                        on: {
                          load: function (n) {
                            (arguments[0] = n = t.$handleEvent(n)),
                              t.imgLoad.apply(void 0, arguments);
                          },
                          error: function (n) {
                            (arguments[0] = n = t.$handleEvent(n)),
                              t.mediaError.apply(void 0, arguments);
                          },
                          longpress: function (n) {
                            (arguments[0] = n = t.$handleEvent(n)),
                              t.imgLongTap.apply(void 0, arguments);
                          },
                          click: function (n) {
                            n.stopPropagation(),
                              (arguments[0] = n = t.$handleEvent(n)),
                              t.imgTap.apply(void 0, arguments);
                          },
                        },
                      })
                    : n.text
                    ? r("v-uni-text", { attrs: { decode: !0 } }, [
                        t._v(t._s(n.text)),
                      ])
                    : "br" === n.name
                    ? r("v-uni-text", [t._v("\\n")])
                    : "a" === n.name
                    ? r(
                        "v-uni-view",
                        {
                          class: (n.attrs.href ? "_a " : "") + n.attrs.class,
                          style: "display:inline;" + n.attrs.style,
                          attrs: {
                            id: n.attrs.id,
                            "hover-class": "_hover",
                            "data-i": e,
                          },
                          on: {
                            click: function (n) {
                              n.stopPropagation(),
                                (arguments[0] = n = t.$handleEvent(n)),
                                t.linkTap.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          r("node", {
                            staticStyle: { display: "inherit" },
                            attrs: {
                              name: "span",
                              childs: n.children,
                              opts: t.opts,
                            },
                          }),
                        ],
                        1
                      )
                    : "video" === n.name
                    ? r("v-uni-video", {
                        class: n.attrs.class,
                        style: n.attrs.style,
                        attrs: {
                          id: n.attrs.id,
                          autoplay: n.attrs.autoplay,
                          controls: n.attrs.controls,
                          loop: n.attrs.loop,
                          muted: n.attrs.muted,
                          "object-fit": n.attrs["object-fit"],
                          poster: n.attrs.poster,
                          src: n.src[t.ctrl[e] || 0],
                          "data-i": e,
                        },
                        on: {
                          play: function (n) {
                            (arguments[0] = n = t.$handleEvent(n)),
                              t.play.apply(void 0, arguments);
                          },
                          error: function (n) {
                            (arguments[0] = n = t.$handleEvent(n)),
                              t.mediaError.apply(void 0, arguments);
                          },
                        },
                      })
                    : "iframe" === n.name
                    ? r("iframe", {
                        style: n.attrs.style,
                        attrs: {
                          allowfullscreen: n.attrs.allowfullscreen,
                          frameborder: n.attrs.frameborder,
                          src: n.attrs.src,
                        },
                      })
                    : "embed" === n.name
                    ? r("embed", {
                        style: n.attrs.style,
                        attrs: { src: n.attrs.src },
                      })
                    : "audio" === n.name
                    ? r("v-uni-audio", {
                        class: n.attrs.class,
                        style: n.attrs.style,
                        attrs: {
                          id: n.attrs.id,
                          author: n.attrs.author,
                          controls: n.attrs.controls,
                          loop: n.attrs.loop,
                          name: n.attrs.name,
                          poster: n.attrs.poster,
                          src: n.src[t.ctrl[e] || 0],
                          "data-i": e,
                        },
                        on: {
                          play: function (n) {
                            (arguments[0] = n = t.$handleEvent(n)),
                              t.play.apply(void 0, arguments);
                          },
                          error: function (n) {
                            (arguments[0] = n = t.$handleEvent(n)),
                              t.mediaError.apply(void 0, arguments);
                          },
                        },
                      })
                    : ("table" === n.name && n.c) || "li" === n.name
                    ? r(
                        "v-uni-view",
                        {
                          class: "_" + n.name + " " + n.attrs.class,
                          style: n.attrs.style,
                          attrs: { id: n.attrs.id },
                        },
                        [
                          "li" === n.name
                            ? r("node", {
                                attrs: { childs: n.children, opts: t.opts },
                              })
                            : t._l(n.children, function (n, e) {
                                return r(
                                  "v-uni-view",
                                  {
                                    key: e,
                                    class: "_" + n.name + " " + n.attrs.class,
                                    style: n.attrs.style,
                                  },
                                  [
                                    "td" === n.name || "th" === n.name
                                      ? r("node", {
                                          attrs: {
                                            childs: n.children,
                                            opts: t.opts,
                                          },
                                        })
                                      : t._l(n.children, function (n, e) {
                                          return [
                                            "td" === n.name || "th" === n.name
                                              ? r(
                                                  "v-uni-view",
                                                  {
                                                    key: e + "_0",
                                                    class:
                                                      "_" +
                                                      n.name +
                                                      " " +
                                                      n.attrs.class,
                                                    style: n.attrs.style,
                                                  },
                                                  [
                                                    r("node", {
                                                      attrs: {
                                                        childs: n.children,
                                                        opts: t.opts,
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                )
                                              : r(
                                                  "v-uni-view",
                                                  {
                                                    class:
                                                      "_" +
                                                      n.name +
                                                      " " +
                                                      n.attrs.class,
                                                    style: n.attrs.style,
                                                  },
                                                  t._l(
                                                    n.children,
                                                    function (n, e) {
                                                      return r(
                                                        "v-uni-view",
                                                        {
                                                          key: e,
                                                          class:
                                                            "_" +
                                                            n.name +
                                                            " " +
                                                            n.attrs.class,
                                                          style: n.attrs.style,
                                                        },
                                                        [
                                                          r("node", {
                                                            attrs: {
                                                              childs:
                                                                n.children,
                                                              opts: t.opts,
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      );
                                                    }
                                                  ),
                                                  1
                                                ),
                                          ];
                                        }),
                                  ],
                                  2
                                );
                              }),
                        ],
                        2
                      )
                    : n.c || t.handler.isInline(n.name, n.attrs.style)
                    ? 2 === n.c
                      ? r(
                          "v-uni-view",
                          {
                            class: "_block _" + n.name + " " + n.attrs.class,
                            style: n.f + ";" + n.attrs.style,
                            attrs: { id: n.attrs.id },
                          },
                          t._l(n.children, function (n, e) {
                            return r("node", {
                              key: e,
                              style: n.f,
                              attrs: {
                                name: n.name,
                                attrs: n.attrs,
                                childs: n.children,
                                opts: t.opts,
                              },
                            });
                          }),
                          1
                        )
                      : r("node", {
                          style: n.f,
                          attrs: {
                            name: n.name,
                            attrs: n.attrs,
                            childs: n.children,
                            opts: t.opts,
                          },
                        })
                    : r("v-uni-rich-text", {
                        style: n.f,
                        attrs: {
                          id: n.attrs.id,
                          "user-select": t.opts[4],
                          nodes: [n],
                        },
                      }),
                ];
              }),
            ],
            2
          );
        },
        i = [];
    },
    1230: function (t, n, r) {
      "use strict";
      var e = r("bc25"),
        i = r.n(e);
      i.a;
    },
    "163d": function (t, n, r) {
      "use strict";
      r.r(n);
      var e = r("1222"),
        i = r("ea12");
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            r.d(n, t, function () {
              return i[t];
            });
          })(a);
      r("1230");
      var s = r("f0c5"),
        o = r("a84e"),
        l = Object(s["a"])(
          i["default"],
          e["b"],
          e["c"],
          !1,
          null,
          "5cd03dea",
          null,
          !1,
          e["a"],
          void 0
        );
      "function" === typeof o["a"] && Object(o["a"])(l),
        (n["default"] = l.exports);
    },
    "185d": function (t, n, r) {
      "use strict";
      r.r(n);
      var e = r("2b06"),
        i = r.n(e);
      for (var a in e)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            r.d(n, t, function () {
              return e[t];
            });
          })(a);
      n["default"] = i.a;
    },
    "21fe": function (t, n, r) {
      var e = r("24fb");
      (n = e(!1)),
        n.push([
          t.i,
          "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 根节点样式 */._root[data-v-0be73fa0]{padding:1px 0;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;word-break:break-all}\r\n/* 长按复制 */._select[data-v-0be73fa0]{-webkit-user-select:text;user-select:text}\r\n",
          "",
        ]),
        (t.exports = n);
    },
    "2b06": function (t, n, r) {
      "use strict";
      r("7a82");
      var e = r("ee27").default;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0),
        r("a9e3"),
        r("14d9"),
        r("d3b7"),
        r("d9e2"),
        r("d401"),
        r("e25e"),
        r("ac1f"),
        r("5319"),
        r("99af");
      var i = e(r("163d")),
        a = e(r("b2aa")),
        s = [],
        o = {
          name: "mp-html",
          data: function () {
            return { nodes: [] };
          },
          props: {
            containerStyle: { type: String, default: "" },
            content: { type: String, default: "" },
            copyLink: { type: [Boolean, String], default: !0 },
            domain: String,
            errorImg: { type: String, default: "" },
            lazyLoad: { type: [Boolean, String], default: !1 },
            loadingImg: { type: String, default: "" },
            pauseVideo: { type: [Boolean, String], default: !0 },
            previewImg: { type: [Boolean, String], default: !0 },
            scrollTable: [Boolean, String],
            selectable: [Boolean, String],
            setTitle: { type: [Boolean, String], default: !0 },
            showImgMenu: { type: [Boolean, String], default: !0 },
            tagStyle: Object,
            useAnchor: [Boolean, Number],
          },
          components: { node: i.default },
          watch: {
            content: function (t) {
              this.setContent(t);
            },
          },
          created: function () {
            this.plugins = [];
            for (var t = s.length; t--; ) this.plugins.push(new s[t](this));
          },
          mounted: function () {
            this.content && !this.nodes.length && this.setContent(this.content);
          },
          beforeDestroy: function () {
            this._hook("onDetached");
          },
          methods: {
            in: function (t, n, r) {
              t &&
                n &&
                r &&
                (this._in = { page: t, selector: n, scrollTop: r });
            },
            navigateTo: function (t, n) {
              var r = this;
              return new Promise(function (e, i) {
                if (r.useAnchor) {
                  n = n || parseInt(r.useAnchor) || 0;
                  var a = uni
                    .createSelectorQuery()
                    .in(r._in ? r._in.page : r)
                    .select(
                      (r._in ? r._in.selector : "._root") +
                        (t ? "".concat(" ", "#").concat(t) : "")
                    )
                    .boundingClientRect();
                  r._in
                    ? a
                        .select(r._in.selector)
                        .scrollOffset()
                        .select(r._in.selector)
                        .boundingClientRect()
                    : a.selectViewport().scrollOffset(),
                    a.exec(function (t) {
                      if (t[0]) {
                        var a =
                          t[1].scrollTop + t[0].top - (t[2] ? t[2].top : 0) + n;
                        r._in
                          ? (r._in.page[r._in.scrollTop] = a)
                          : uni.pageScrollTo({ scrollTop: a, duration: 300 }),
                          e();
                      } else i(Error("Label not found"));
                    });
                } else i(Error("Anchor is disabled"));
              });
            },
            getText: function (t) {
              var n = "";
              return (
                (function t(r) {
                  for (var e = 0; e < r.length; e++) {
                    var i = r[e];
                    if ("text" === i.type) n += i.text.replace(/&amp;/g, "&");
                    else if ("br" === i.name) n += "\n";
                    else {
                      var a =
                        "p" === i.name ||
                        "div" === i.name ||
                        "tr" === i.name ||
                        "li" === i.name ||
                        ("h" === i.name[0] &&
                          i.name[1] > "0" &&
                          i.name[1] < "7");
                      a && n && "\n" !== n[n.length - 1] && (n += "\n"),
                        i.children && t(i.children),
                        a && "\n" !== n[n.length - 1]
                          ? (n += "\n")
                          : ("td" !== i.name && "th" !== i.name) || (n += "\t");
                    }
                  }
                })(t || this.nodes),
                n
              );
            },
            getRect: function () {
              var t = this;
              return new Promise(function (n, r) {
                uni
                  .createSelectorQuery()
                  .in(t)
                  .select("#_root")
                  .boundingClientRect()
                  .exec(function (t) {
                    return t[0] ? n(t[0]) : r(Error("Root label not found"));
                  });
              });
            },
            pauseMedia: function () {
              for (var t = (this._videos || []).length; t--; )
                this._videos[t].pause();
            },
            setPlaybackRate: function (t) {
              this.playbackRate = t;
              for (var n = (this._videos || []).length; n--; )
                this._videos[n].playbackRate(t);
            },
            setContent: function (t, n) {
              var r = this;
              (n && this.imgList) || (this.imgList = []);
              var e = new a.default(this).parse(t);
              if (
                (this.$set(this, "nodes", n ? (this.nodes || []).concat(e) : e),
                (this._videos = []),
                this.$nextTick(function () {
                  r._hook("onLoad"), r.$emit("load");
                }),
                this.lazyLoad ||
                  this.imgList._unloadimgs < this.imgList.length / 2)
              ) {
                var i = 0,
                  s = function t(n) {
                    (n && n.height) || (n = {}),
                      n.height === i
                        ? r.$emit("ready", n)
                        : ((i = n.height),
                          setTimeout(function () {
                            r.getRect().then(t).catch(t);
                          }, 350));
                  };
                this.getRect().then(s).catch(s);
              } else
                this.imgList._unloadimgs ||
                  this.getRect()
                    .then(function (t) {
                      r.$emit("ready", t);
                    })
                    .catch(function () {
                      r.$emit("ready", {});
                    });
            },
            _hook: function (t) {
              for (var n = s.length; n--; )
                this.plugins[n][t] && this.plugins[n][t]();
            },
          },
        };
      n.default = o;
    },
    "3f79": function (t, n, r) {
      "use strict";
      r.d(n, "b", function () {
        return e;
      }),
        r.d(n, "c", function () {
          return i;
        }),
        r.d(n, "a", function () {});
      var e = function () {
          var t = this,
            n = t.$createElement,
            r = t._self._c || n;
          return r(
            "v-uni-view",
            {
              class: (t.selectable ? "_select " : "") + "_root",
              style: t.containerStyle,
              attrs: { id: "_root" },
            },
            [
              t.nodes[0]
                ? r("node", {
                    attrs: {
                      childs: t.nodes,
                      opts: [
                        t.lazyLoad,
                        t.loadingImg,
                        t.errorImg,
                        t.showImgMenu,
                        t.selectable,
                      ],
                      name: "span",
                    },
                  })
                : t._t("default"),
            ],
            2
          );
        },
        i = [];
    },
    "6d01": function (t, n, r) {
      var e = r("24fb");
      (n = e(!1)),
        n.push([
          t.i,
          "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* a 标签默认效果 */._a[data-v-5cd03dea]{padding:1.5px 0 1.5px 0;color:#366092;word-break:break-all}\r\n/* a 标签点击态效果 */._hover[data-v-5cd03dea]{text-decoration:underline;opacity:.7}\r\n/* 图片默认效果 */._img[data-v-5cd03dea]{max-width:100%;-webkit-touch-callout:none}\r\n/* 内部样式 */._block[data-v-5cd03dea]{display:block}._b[data-v-5cd03dea],\r\n._strong[data-v-5cd03dea]{font-weight:700}._code[data-v-5cd03dea]{font-family:monospace}._del[data-v-5cd03dea]{text-decoration:line-through}._em[data-v-5cd03dea],\r\n._i[data-v-5cd03dea]{font-style:italic}._h1[data-v-5cd03dea]{font-size:2em}._h2[data-v-5cd03dea]{font-size:1.5em}._h3[data-v-5cd03dea]{font-size:1.17em}._h5[data-v-5cd03dea]{font-size:.83em}._h6[data-v-5cd03dea]{font-size:.67em}._h1[data-v-5cd03dea],\r\n._h2[data-v-5cd03dea],\r\n._h3[data-v-5cd03dea],\r\n._h4[data-v-5cd03dea],\r\n._h5[data-v-5cd03dea],\r\n._h6[data-v-5cd03dea]{display:block;font-weight:700}._image[data-v-5cd03dea]{height:1px}._ins[data-v-5cd03dea]{text-decoration:underline}._li[data-v-5cd03dea]{display:list-item}._ol[data-v-5cd03dea]{list-style-type:decimal}._ol[data-v-5cd03dea],\r\n._ul[data-v-5cd03dea]{display:block;padding-left:40px;margin:1em 0}._q[data-v-5cd03dea]::before{content:'\"'}._q[data-v-5cd03dea]::after{content:'\"'}._sub[data-v-5cd03dea]{font-size:smaller;vertical-align:sub}._sup[data-v-5cd03dea]{font-size:smaller;vertical-align:super}._thead[data-v-5cd03dea],\r\n._tbody[data-v-5cd03dea],\r\n._tfoot[data-v-5cd03dea]{display:table-row-group}._tr[data-v-5cd03dea]{display:table-row}._td[data-v-5cd03dea],\r\n._th[data-v-5cd03dea]{display:table-cell;vertical-align:middle}._th[data-v-5cd03dea]{font-weight:700;text-align:center}._ul[data-v-5cd03dea]{list-style-type:disc}._ul ._ul[data-v-5cd03dea]{margin:0;list-style-type:circle}._ul ._ul ._ul[data-v-5cd03dea]{list-style-type:square}._abbr[data-v-5cd03dea],\r\n._b[data-v-5cd03dea],\r\n._code[data-v-5cd03dea],\r\n._del[data-v-5cd03dea],\r\n._em[data-v-5cd03dea],\r\n._i[data-v-5cd03dea],\r\n._ins[data-v-5cd03dea],\r\n._label[data-v-5cd03dea],\r\n._q[data-v-5cd03dea],\r\n._span[data-v-5cd03dea],\r\n._strong[data-v-5cd03dea],\r\n._sub[data-v-5cd03dea],\r\n._sup[data-v-5cd03dea]{display:inline}\r\n\r\n",
          "",
        ]),
        (t.exports = n);
    },
    a203: function (t, n, r) {
      "use strict";
      var e = r("a304"),
        i = r.n(e);
      i.a;
    },
    a304: function (t, n, r) {
      var e = r("21fe");
      e.__esModule && (e = e.default),
        "string" === typeof e && (e = [[t.i, e, ""]]),
        e.locals && (t.exports = e.locals);
      var i = r("4f06").default;
      i("83a0133a", e, !0, { sourceMap: !1, shadowMode: !1 });
    },
    a84e: function (t, n, r) {
      "use strict";
      n["a"] = function (t) {
        (t.options.wxs || (t.options.wxs = {}))["handler"] = (function (t) {
          var n = {
            abbr: !0,
            b: !0,
            big: !0,
            code: !0,
            del: !0,
            em: !0,
            i: !0,
            ins: !0,
            label: !0,
            q: !0,
            small: !0,
            span: !0,
            strong: !0,
            sub: !0,
            sup: !0,
          };
          return (
            (t.exports = {
              isInline: function (t, r) {
                return n[t] || -1 !== (r || "").indexOf("display:inline");
              },
            }),
            t.exports
          );
        })({ exports: {} });
      };
    },
    b035: function (t, n, r) {
      "use strict";
      r.r(n);
      var e = r("3f79"),
        i = r("185d");
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            r.d(n, t, function () {
              return i[t];
            });
          })(a);
      r("a203");
      var s = r("f0c5"),
        o = Object(s["a"])(
          i["default"],
          e["b"],
          e["c"],
          !1,
          null,
          "0be73fa0",
          null,
          !1,
          e["a"],
          void 0
        );
      n["default"] = o.exports;
    },
    b2aa: function (t, n, r) {
      "use strict";
      r("7a82"),
        Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0),
        r("c975"),
        r("e25e"),
        r("caad6"),
        r("2532"),
        r("a434"),
        r("fb6a"),
        r("99af"),
        r("acd8"),
        r("498a"),
        r("baa5"),
        r("ac1f"),
        r("5319"),
        r("14d9"),
        r("d401"),
        r("d3b7"),
        r("25f0");
      var e = {
          trustTags: c(
            "a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"
          ),
          blockTags: c(
            "address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"
          ),
          ignoreTags: c(
            "area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"
          ),
          voidTags: c(
            "area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"
          ),
          entities: {
            lt: "<",
            gt: ">",
            quot: '"',
            apos: "'",
            ensp: " ",
            emsp: " ",
            nbsp: " ",
            semi: ";",
            ndash: "–",
            mdash: "—",
            middot: "·",
            lsquo: "‘",
            rsquo: "’",
            ldquo: "“",
            rdquo: "”",
            bull: "•",
            hellip: "…",
            larr: "←",
            uarr: "↑",
            rarr: "→",
            darr: "↓",
          },
          tagStyle: {
            address: "font-style:italic",
            big: "display:inline;font-size:1.2em",
            caption: "display:table-caption;text-align:center",
            center: "text-align:center",
            cite: "font-style:italic",
            dd: "margin-left:40px",
            mark: "background-color:yellow",
            pre: "font-family:monospace;white-space:pre",
            s: "text-decoration:line-through",
            small: "display:inline;font-size:0.8em",
            strike: "text-decoration:line-through",
            u: "text-decoration:underline",
          },
          svgDict: {
            animatetransform: "animateTransform",
            lineargradient: "linearGradient",
            viewbox: "viewBox",
            attributename: "attributeName",
            repeatcount: "repeatCount",
            repeatdur: "repeatDur",
          },
        },
        i = {},
        a = uni.getSystemInfoSync(),
        s = a.windowWidth,
        o = c(" ,\r,\n,\t,\f"),
        l = 0;
      function c(t) {
        for (var n = Object.create(null), r = t.split(","), e = r.length; e--; )
          n[r[e]] = !0;
        return n;
      }
      function d(t, n) {
        var r = t.indexOf("&");
        while (-1 !== r) {
          var i = t.indexOf(";", r + 3),
            a = void 0;
          if (-1 === i) break;
          "#" === t[r + 1]
            ? ((a = parseInt(
                ("x" === t[r + 2] ? "0" : "") + t.substring(r + 2, i)
              )),
              isNaN(a) ||
                (t = t.substr(0, r) + String.fromCharCode(a) + t.substr(i + 1)))
            : ((a = t.substring(r + 1, i)),
              (e.entities[a] || ("amp" === a && n)) &&
                (t =
                  t.substr(0, r) + (e.entities[a] || "&") + t.substr(i + 1))),
            (r = t.indexOf("&", r + 1));
        }
        return t;
      }
      function h(t) {
        for (var n = t.length - 1, r = n; r >= -1; r--)
          (-1 === r ||
            t[r].c ||
            !t[r].name ||
            ("div" !== t[r].name &&
              "p" !== t[r].name &&
              "h" !== t[r].name[0]) ||
            (t[r].attrs.style || "").includes("inline")) &&
            (n - r >= 5 &&
              t.splice(r + 1, n - r, {
                name: "div",
                attrs: {},
                children: t.slice(r + 1, n + 1),
              }),
            (n = r - 1));
      }
      function u(t) {
        (this.options = t || {}),
          (this.tagStyle = Object.assign(
            {},
            e.tagStyle,
            this.options.tagStyle
          )),
          (this.imgList = t.imgList || []),
          (this.imgList._unloadimgs = 0),
          (this.plugins = t.plugins || []),
          (this.attrs = Object.create(null)),
          (this.stack = []),
          (this.nodes = []),
          (this.pre =
            (this.options.containerStyle || "").includes("white-space") &&
            this.options.containerStyle.includes("pre")
              ? 2
              : 0);
      }
      function p(t) {
        this.handler = t;
      }
      (e.ignoreTags.iframe = void 0),
        (e.trustTags.iframe = !0),
        (e.ignoreTags.embed = void 0),
        (e.trustTags.embed = !0),
        (u.prototype.parse = function (t) {
          for (var n = this.plugins.length; n--; )
            this.plugins[n].onUpdate &&
              (t = this.plugins[n].onUpdate(t, e) || t);
          new p(this).parse(t);
          while (this.stack.length) this.popNode();
          return this.nodes.length > 50 && h(this.nodes), this.nodes;
        }),
        (u.prototype.expose = function () {
          for (var t = this.stack.length; t--; ) {
            var n = this.stack[t];
            if (
              n.c ||
              "a" === n.name ||
              "video" === n.name ||
              "audio" === n.name
            )
              return;
            n.c = 1;
          }
        }),
        (u.prototype.hook = function (t) {
          for (var n = this.plugins.length; n--; )
            if (
              this.plugins[n].onParse &&
              !1 === this.plugins[n].onParse(t, this)
            )
              return !1;
          return !0;
        }),
        (u.prototype.getUrl = function (t) {
          var n = this.options.domain;
          return (
            "/" === t[0]
              ? "/" === t[1]
                ? (t = (n ? n.split("://")[0] : "http") + ":" + t)
                : n && (t = n + t)
              : t.includes("data:") ||
                t.includes("://") ||
                (n && (t = n + "/" + t)),
            t
          );
        }),
        (u.prototype.parseStyle = function (t) {
          var n = t.attrs,
            r = (this.tagStyle[t.name] || "")
              .split(";")
              .concat((n.style || "").split(";")),
            e = {},
            i = "";
          n.id &&
            !this.xml &&
            (this.options.useAnchor
              ? this.expose()
              : "img" !== t.name &&
                "a" !== t.name &&
                "video" !== t.name &&
                "audio" !== t.name &&
                (n.id = void 0)),
            n.width &&
              ((e.width =
                parseFloat(n.width) + (n.width.includes("%") ? "%" : "px")),
              (n.width = void 0)),
            n.height &&
              ((e.height =
                parseFloat(n.height) + (n.height.includes("%") ? "%" : "px")),
              (n.height = void 0));
          for (var a = 0, l = r.length; a < l; a++) {
            var c = r[a].split(":");
            if (!(c.length < 2)) {
              var d = c.shift().trim().toLowerCase(),
                h = c.join(":").trim();
              if (
                ("-" === h[0] && h.lastIndexOf("-") > 0) ||
                h.includes("safe")
              )
                i += ";".concat(d, ":").concat(h);
              else if (
                !e[d] ||
                h.includes("import") ||
                !e[d].includes("import")
              ) {
                if (h.includes("url")) {
                  var u = h.indexOf("(") + 1;
                  if (u) {
                    while ('"' === h[u] || "'" === h[u] || o[h[u]]) u++;
                    h = h.substr(0, u) + this.getUrl(h.substr(u));
                  }
                } else
                  h.includes("rpx") &&
                    (h = h.replace(/[0-9.]+\s*rpx/g, function (t) {
                      return (parseFloat(t) * s) / 750 + "px";
                    }));
                e[d] = h;
              }
            }
          }
          return (t.attrs.style = i), e;
        }),
        (u.prototype.onTagName = function (t) {
          (this.tagName = this.xml ? t : t.toLowerCase()),
            "svg" === this.tagName && (this.xml = (this.xml || 0) + 1);
        }),
        (u.prototype.onAttrName = function (t) {
          (t = this.xml ? t : t.toLowerCase()),
            "data-" === t.substr(0, 5)
              ? "data-src" !== t || this.attrs.src
                ? "img" === this.tagName || "a" === this.tagName
                  ? (this.attrName = t)
                  : (this.attrName = void 0)
                : (this.attrName = "src")
              : ((this.attrName = t), (this.attrs[t] = "T"));
        }),
        (u.prototype.onAttrVal = function (t) {
          var n = this.attrName || "";
          "style" === n || "href" === n
            ? (this.attrs[n] = d(t, !0))
            : n.includes("src")
            ? (this.attrs[n] = this.getUrl(d(t, !0)))
            : n && (this.attrs[n] = t);
        }),
        (u.prototype.onOpenTag = function (t) {
          var n = Object.create(null);
          (n.name = this.tagName),
            (n.attrs = this.attrs),
            this.options.nodes.length && (n.type = "node"),
            (this.attrs = Object.create(null));
          var r = n.attrs,
            a = this.stack[this.stack.length - 1],
            o = a ? a.children : this.nodes,
            c = this.xml ? t : e.voidTags[n.name];
          if (
            (i[n.name] &&
              (r.class = i[n.name] + (r.class ? " " + r.class : "")),
            "embed" === n.name && this.expose(),
            ("video" !== n.name && "audio" !== n.name) ||
              ("video" !== n.name || r.id || (r.id = "v" + l++),
              r.controls || r.autoplay || (r.controls = "T"),
              (n.src = []),
              r.src && (n.src.push(r.src), (r.src = void 0)),
              this.expose()),
            c)
          ) {
            if (!this.hook(n) || e.ignoreTags[n.name])
              return void ("base" !== n.name || this.options.domain
                ? "source" === n.name &&
                  a &&
                  ("video" === a.name || "audio" === a.name) &&
                  r.src &&
                  a.src.push(r.src)
                : (this.options.domain = r.href));
            var d = this.parseStyle(n);
            if ("img" === n.name) {
              if (
                r.src &&
                (r.src.includes("webp") && (n.webp = "T"),
                r.src.includes("data:") &&
                  !r["original-src"] &&
                  (r.ignore = "T"),
                !r.ignore || n.webp || r.src.includes("cloud://"))
              ) {
                for (var h = this.stack.length; h--; ) {
                  var u = this.stack[h];
                  "a" === u.name && (n.a = u.attrs),
                    "table" !== u.name ||
                      n.webp ||
                      r.src.includes("cloud://") ||
                      (!d.display || d.display.includes("inline")
                        ? (n.t = "inline-block")
                        : (n.t = d.display),
                      (d.display = void 0)),
                    (u.c = 1);
                }
                r.i = this.imgList.length.toString();
                var p = r["original-src"] || r.src;
                this.imgList.push(p),
                  n.t || (this.imgList._unloadimgs += 1),
                  this.options.lazyLoad &&
                    ((r["data-src"] = r.src), (r.src = void 0));
              }
              "inline" === d.display && (d.display = ""),
                r.ignore &&
                  ((d["max-width"] = d["max-width"] || "100%"),
                  (r.style += ";-webkit-touch-callout:none")),
                parseInt(d.width) > s && (d.height = void 0),
                isNaN(parseInt(d.width)) || (n.w = "T"),
                !isNaN(parseInt(d.height)) &&
                  (!d.height.includes("%") ||
                    (a && (a.attrs.style || "").includes("height"))) &&
                  (n.h = "T");
            } else if ("svg" === n.name)
              return o.push(n), this.stack.push(n), void this.popNode();
            for (var f in d)
              d[f] &&
                (r.style += ";"
                  .concat(f, ":")
                  .concat(d[f].replace(" !important", "")));
            r.style = r.style.substr(1) || void 0;
          } else
            ("pre" === n.name ||
              ((r.style || "").includes("white-space") &&
                r.style.includes("pre"))) &&
              2 !== this.pre &&
              (this.pre = n.pre = 1),
              (n.children = []),
              this.stack.push(n);
          o.push(n);
        }),
        (u.prototype.onCloseTag = function (t) {
          var n;
          for (t = this.xml ? t : t.toLowerCase(), n = this.stack.length; n--; )
            if (this.stack[n].name === t) break;
          if (-1 !== n) while (this.stack.length > n) this.popNode();
          else if ("p" === t || "br" === t) {
            var r = this.stack.length
              ? this.stack[this.stack.length - 1].children
              : this.nodes;
            r.push({
              name: t,
              attrs: { class: i[t] || "", style: this.tagStyle[t] || "" },
            });
          }
        }),
        (u.prototype.popNode = function () {
          var t = this.stack.pop(),
            n = t.attrs,
            r = t.children,
            i = this.stack[this.stack.length - 1],
            a = i ? i.children : this.nodes;
          if (!this.hook(t) || e.ignoreTags[t.name])
            return (
              "title" === t.name &&
                r.length &&
                "text" === r[0].type &&
                this.options.setTitle &&
                uni.setNavigationBarTitle({ title: r[0].text }),
              void a.pop()
            );
          if (t.pre && 2 !== this.pre) {
            this.pre = t.pre = void 0;
            for (var o = this.stack.length; o--; )
              this.stack[o].pre && (this.pre = 1);
          }
          var l = {};
          if ("svg" === t.name) {
            if (this.xml > 1) return void this.xml--;
            var c = "",
              d = n.style;
            return (
              (n.style = ""),
              (n.xmlns = "http://www.w3.org/2000/svg"),
              (function t(n) {
                if ("text" !== n.type) {
                  var r = e.svgDict[n.name] || n.name;
                  for (var i in ((c += "<" + r), n.attrs)) {
                    var a = n.attrs[i];
                    a &&
                      (c += " ".concat(e.svgDict[i] || i, '="').concat(a, '"'));
                  }
                  if (n.children) {
                    c += ">";
                    for (var s = 0; s < n.children.length; s++)
                      t(n.children[s]);
                    c += "</" + r + ">";
                  } else c += "/>";
                } else c += n.text;
              })(t),
              (t.name = "img"),
              (t.attrs = {
                src: "data:image/svg+xml;utf8," + c.replace(/#/g, "%23"),
                style: d,
                ignore: "T",
              }),
              (t.children = void 0),
              void (this.xml = !1)
            );
          }
          if (
            (n.align &&
              ("table" === t.name
                ? "center" === n.align
                  ? (l["margin-inline-start"] = l["margin-inline-end"] = "auto")
                  : (l.float = n.align)
                : (l["text-align"] = n.align),
              (n.align = void 0)),
            n.dir && ((l.direction = n.dir), (n.dir = void 0)),
            "font" === t.name &&
              (n.color && ((l.color = n.color), (n.color = void 0)),
              n.face && ((l["font-family"] = n.face), (n.face = void 0)),
              n.size))
          ) {
            var u = parseInt(n.size);
            isNaN(u) ||
              (u < 1 ? (u = 1) : u > 7 && (u = 7),
              (l["font-size"] = [
                "x-small",
                "small",
                "medium",
                "large",
                "x-large",
                "xx-large",
                "xxx-large",
              ][u - 1])),
              (n.size = void 0);
          }
          if (
            ((n.class || "").includes("align-center") &&
              (l["text-align"] = "center"),
            Object.assign(l, this.parseStyle(t)),
            "table" !== t.name &&
              parseInt(l.width) > s &&
              ((l["max-width"] = "100%"), (l["box-sizing"] = "border-box")),
            e.blockTags[t.name]
              ? (t.name = "div")
              : e.trustTags[t.name] || this.xml || (t.name = "span"),
            "a" === t.name || "ad" === t.name || "iframe" === t.name)
          )
            this.expose();
          else if ("video" === t.name)
            (l.height || "").includes("auto") && (l.height = void 0);
          else if (("ul" !== t.name && "ol" !== t.name) || !t.c) {
            if ("table" === t.name) {
              var p = parseFloat(n.cellpadding),
                f = parseFloat(n.cellspacing),
                g = parseFloat(n.border),
                m = l["border-color"],
                v = l["border-style"];
              if (
                (t.c && (isNaN(p) && (p = 2), isNaN(f) && (f = 2)),
                g &&
                  (n.style += ";border:"
                    .concat(g, "px ")
                    .concat(v || "solid", " ")
                    .concat(m || "gray")),
                t.flag && t.c)
              ) {
                (l.display = "grid"),
                  f
                    ? ((l["grid-gap"] = f + "px"), (l.padding = f + "px"))
                    : g && (n.style += ";border-left:0;border-top:0");
                var y = [],
                  b = [],
                  x = [],
                  _ = {};
                (function t(n) {
                  for (var r = 0; r < n.length; r++)
                    "tr" === n[r].name ? b.push(n[r]) : t(n[r].children || []);
                })(r);
                for (var w = 1; w <= b.length; w++) {
                  for (var k = 1, T = 0; T < b[w - 1].children.length; T++) {
                    var N = b[w - 1].children[T];
                    if ("td" === N.name || "th" === N.name) {
                      while (_[w + "." + k]) k++;
                      var O = N.attrs.style || "",
                        S = O.indexOf("width") ? O.indexOf(";width") : 0;
                      if (-1 !== S) {
                        var $ = O.indexOf(";", S + 6);
                        -1 === $ && ($ = O.length),
                          N.attrs.colspan ||
                            (y[k] = O.substring(S ? S + 7 : 6, $)),
                          (O = O.substr(0, S) + O.substr($));
                      }
                      if (
                        ((O += ";display:flex"),
                        (S = O.indexOf("vertical-align")),
                        -1 !== S)
                      ) {
                        var L = O.substr(S + 15, 10);
                        L.includes("middle")
                          ? (O += ";align-items:center")
                          : L.includes("bottom") &&
                            (O += ";align-items:flex-end");
                      } else O += ";align-items:center";
                      if (((S = O.indexOf("text-align")), -1 !== S)) {
                        var I = O.substr(S + 11, 10);
                        I.includes("center")
                          ? (O += ";justify-content: center")
                          : I.includes("right") &&
                            (O += ";justify-content: right");
                      }
                      if (
                        ((O =
                          (g
                            ? ";border:"
                                .concat(g, "px ")
                                .concat(v || "solid", " ")
                                .concat(m || "gray") +
                              (f ? "" : ";border-right:0;border-bottom:0")
                            : "") +
                          (p ? ";padding:".concat(p, "px") : "") +
                          ";" +
                          O),
                        N.attrs.colspan &&
                          ((O += ";grid-column-start:"
                            .concat(k, ";grid-column-end:")
                            .concat(k + parseInt(N.attrs.colspan))),
                          N.attrs.rowspan ||
                            (O += ";grid-row-start:"
                              .concat(w, ";grid-row-end:")
                              .concat(w + 1)),
                          (k += parseInt(N.attrs.colspan) - 1)),
                        N.attrs.rowspan)
                      ) {
                        (O += ";grid-row-start:"
                          .concat(w, ";grid-row-end:")
                          .concat(w + parseInt(N.attrs.rowspan))),
                          N.attrs.colspan ||
                            (O += ";grid-column-start:"
                              .concat(k, ";grid-column-end:")
                              .concat(k + 1));
                        for (var C = 1; C < N.attrs.rowspan; C++)
                          for (var j = 0; j < (N.attrs.colspan || 1); j++)
                            _[w + C + "." + (k - j)] = 1;
                      }
                      O && (N.attrs.style = O), x.push(N), k++;
                    }
                  }
                  if (1 === w) {
                    for (var z = "", A = 1; A < k; A++)
                      z += (y[A] ? y[A] : "auto") + " ";
                    l["grid-template-columns"] = z;
                  }
                }
                t.children = x;
              } else
                t.c && (l.display = "table"),
                  isNaN(f) || (l["border-spacing"] = f + "px"),
                  (g || p) &&
                    (function t(n) {
                      for (var r = 0; r < n.length; r++) {
                        var e = n[r];
                        "th" === e.name || "td" === e.name
                          ? (g &&
                              (e.attrs.style = "border:"
                                .concat(g, "px ")
                                .concat(v || "solid", " ")
                                .concat(m || "gray", ";")
                                .concat(e.attrs.style || "")),
                            p &&
                              (e.attrs.style = "padding:"
                                .concat(p, "px;")
                                .concat(e.attrs.style || "")))
                          : e.children && t(e.children);
                      }
                    })(r);
              if (
                this.options.scrollTable &&
                !(n.style || "").includes("inline")
              ) {
                var R = Object.assign({}, t);
                (t.name = "div"),
                  (t.attrs = { style: "overflow:auto" }),
                  (t.children = [R]),
                  (n = R.attrs);
              }
            } else if (
              ("td" !== t.name && "th" !== t.name) ||
              (!n.colspan && !n.rowspan)
            )
              if ("ruby" === t.name) {
                t.name = "span";
                for (var E = 0; E < r.length - 1; E++)
                  "text" === r[E].type &&
                    "rt" === r[E + 1].name &&
                    ((r[E] = {
                      name: "div",
                      attrs: {
                        style: "display:inline-block;text-align:center",
                      },
                      children: [
                        {
                          name: "div",
                          attrs: {
                            style:
                              "font-size:50%;" + (r[E + 1].attrs.style || ""),
                          },
                          children: r[E + 1].children,
                        },
                        r[E],
                      ],
                    }),
                    r.splice(E + 1, 1));
              } else
                t.c &&
                  (function (t) {
                    t.c = 2;
                    for (var n = t.children.length; n--; ) {
                      var r = t.children[n];
                      (r.c && "table" !== r.name) || (t.c = 1);
                    }
                  })(t);
            else
              for (var M = this.stack.length; M--; )
                if ("table" === this.stack[M].name) {
                  this.stack[M].flag = 1;
                  break;
                }
          } else {
            var q = {
              a: "lower-alpha",
              A: "upper-alpha",
              i: "lower-roman",
              I: "upper-roman",
            };
            q[n.type] &&
              ((n.style += ";list-style-type:" + q[n.type]), (n.type = void 0));
            for (var B = r.length; B--; ) "li" === r[B].name && (r[B].c = 1);
          }
          if ((l.display || "").includes("flex") && !t.c)
            for (var V = r.length; V--; ) {
              var P = r[V];
              P.f &&
                ((P.attrs.style = (P.attrs.style || "") + P.f), (P.f = void 0));
            }
          var D =
            i &&
            ((i.attrs.style || "").includes("flex") ||
              (i.attrs.style || "").includes("grid")) &&
            !t.c;
          for (var F in (D && (t.f = ";max-width:100%"),
          r.length >= 50 && t.c && !(l.display || "").includes("flex") && h(r),
          l))
            if (l[F]) {
              var U = ";"
                .concat(F, ":")
                .concat(l[F].replace(" !important", ""));
              D &&
              ((F.includes("flex") && "flex-direction" !== F) ||
                "align-self" === F ||
                F.includes("grid") ||
                "-" === l[F][0] ||
                (F.includes("width") && U.includes("%")))
                ? ((t.f += U), "width" === F && (n.style += ";width:100%"))
                : (n.style += U);
            }
          n.style = n.style.substr(1) || void 0;
        }),
        (u.prototype.onText = function (t) {
          if (!this.pre) {
            for (var n, r = "", e = 0, i = t.length; e < i; e++)
              o[t[e]]
                ? (" " !== r[r.length - 1] && (r += " "),
                  "\n" !== t[e] || n || (n = !0))
                : (r += t[e]);
            if (" " === r && n) return;
            t = r;
          }
          var a = Object.create(null);
          if (((a.type = "text"), (a.text = d(t)), this.hook(a))) {
            var s = this.stack.length
              ? this.stack[this.stack.length - 1].children
              : this.nodes;
            s.push(a);
          }
        }),
        (p.prototype.parse = function (t) {
          (this.content = t || ""),
            (this.i = 0),
            (this.start = 0),
            (this.state = this.text);
          for (var n = this.content.length; -1 !== this.i && this.i < n; )
            this.state();
        }),
        (p.prototype.checkClose = function (t) {
          var n = "/" === this.content[this.i];
          return (
            !!(
              ">" === this.content[this.i] ||
              (n && ">" === this.content[this.i + 1])
            ) &&
            (t && this.handler[t](this.content.substring(this.start, this.i)),
            (this.i += n ? 2 : 1),
            (this.start = this.i),
            this.handler.onOpenTag(n),
            "script" === this.handler.tagName
              ? ((this.i = this.content.indexOf("</", this.i)),
                -1 !== this.i && ((this.i += 2), (this.start = this.i)),
                (this.state = this.endTag))
              : (this.state = this.text),
            !0)
          );
        }),
        (p.prototype.text = function () {
          if (((this.i = this.content.indexOf("<", this.i)), -1 !== this.i)) {
            var t = this.content[this.i + 1];
            if ((t >= "a" && t <= "z") || (t >= "A" && t <= "Z"))
              this.start !== this.i &&
                this.handler.onText(this.content.substring(this.start, this.i)),
                (this.start = ++this.i),
                (this.state = this.tagName);
            else if ("/" === t || "!" === t || "?" === t) {
              this.start !== this.i &&
                this.handler.onText(this.content.substring(this.start, this.i));
              var n = this.content[this.i + 2];
              if (
                "/" === t &&
                ((n >= "a" && n <= "z") || (n >= "A" && n <= "Z"))
              )
                return (
                  (this.i += 2),
                  (this.start = this.i),
                  void (this.state = this.endTag)
                );
              var r = "--\x3e";
              ("!" === t &&
                "-" === this.content[this.i + 2] &&
                "-" === this.content[this.i + 3]) ||
                (r = ">"),
                (this.i = this.content.indexOf(r, this.i)),
                -1 !== this.i && ((this.i += r.length), (this.start = this.i));
            } else this.i++;
          } else
            this.start < this.content.length &&
              this.handler.onText(
                this.content.substring(this.start, this.content.length)
              );
        }),
        (p.prototype.tagName = function () {
          if (o[this.content[this.i]]) {
            this.handler.onTagName(this.content.substring(this.start, this.i));
            while (o[this.content[++this.i]]);
            this.i < this.content.length &&
              !this.checkClose() &&
              ((this.start = this.i), (this.state = this.attrName));
          } else this.checkClose("onTagName") || this.i++;
        }),
        (p.prototype.attrName = function () {
          var t = this.content[this.i];
          if (o[t] || "=" === t) {
            this.handler.onAttrName(this.content.substring(this.start, this.i));
            var n = "=" === t,
              r = this.content.length;
            while (++this.i < r)
              if (((t = this.content[this.i]), !o[t])) {
                if (this.checkClose()) return;
                if (n)
                  return (
                    (this.start = this.i), void (this.state = this.attrVal)
                  );
                if ("=" !== this.content[this.i])
                  return (
                    (this.start = this.i), void (this.state = this.attrName)
                  );
                n = !0;
              }
          } else this.checkClose("onAttrName") || this.i++;
        }),
        (p.prototype.attrVal = function () {
          var t = this.content[this.i],
            n = this.content.length;
          if ('"' === t || "'" === t) {
            if (
              ((this.start = ++this.i),
              (this.i = this.content.indexOf(t, this.i)),
              -1 === this.i)
            )
              return;
            this.handler.onAttrVal(this.content.substring(this.start, this.i));
          } else
            for (; this.i < n; this.i++) {
              if (o[this.content[this.i]]) {
                this.handler.onAttrVal(
                  this.content.substring(this.start, this.i)
                );
                break;
              }
              if (this.checkClose("onAttrVal")) return;
            }
          while (o[this.content[++this.i]]);
          this.i < n &&
            !this.checkClose() &&
            ((this.start = this.i), (this.state = this.attrName));
        }),
        (p.prototype.endTag = function () {
          var t = this.content[this.i];
          if (o[t] || ">" === t || "/" === t) {
            if (
              (this.handler.onCloseTag(
                this.content.substring(this.start, this.i)
              ),
              ">" !== t &&
                ((this.i = this.content.indexOf(">", this.i)), -1 === this.i))
            )
              return;
            (this.start = ++this.i), (this.state = this.text);
          } else this.i++;
        });
      var f = u;
      n.default = f;
    },
    baa5: function (t, n, r) {
      "use strict";
      var e = r("23e7"),
        i = r("e58c");
      e(
        { target: "Array", proto: !0, forced: i !== [].lastIndexOf },
        { lastIndexOf: i }
      );
    },
    bc25: function (t, n, r) {
      var e = r("6d01");
      e.__esModule && (e = e.default),
        "string" === typeof e && (e = [[t.i, e, ""]]),
        e.locals && (t.exports = e.locals);
      var i = r("4f06").default;
      i("d55e1bbe", e, !0, { sourceMap: !1, shadowMode: !1 });
    },
    dcfe: function (t, n, r) {
      "use strict";
      r("7a82");
      var e = r("ee27").default;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0),
        r("14d9"),
        r("e25e"),
        r("caad6"),
        r("2532");
      var i = e(r("163d")),
        a = {
          name: "node",
          options: {},
          data: function () {
            return { ctrl: {} };
          },
          props: {
            name: String,
            attrs: {
              type: Object,
              default: function () {
                return {};
              },
            },
            childs: Array,
            opts: Array,
          },
          components: { node: i.default },
          mounted: function () {
            var t = this;
            if (
              (this.$nextTick(function () {
                for (
                  t.root = t.$parent;
                  "mp-html" !== t.root.$options.name;
                  t.root = t.root.$parent
                );
              }),
              this.opts[0])
            ) {
              var n;
              for (n = this.childs.length; n--; )
                if ("img" === this.childs[n].name) break;
              -1 !== n &&
                ((this.observer = uni
                  .createIntersectionObserver(this)
                  .relativeToViewport({ top: 500, bottom: 500 })),
                this.observer.observe("._img", function (n) {
                  n.intersectionRatio &&
                    (t.$set(t.ctrl, "load", 1), t.observer.disconnect());
                }));
            }
          },
          beforeDestroy: function () {
            this.observer && this.observer.disconnect();
          },
          methods: {
            play: function (t) {
              if ((this.root.$emit("play"), this.root.pauseVideo)) {
                for (
                  var n = !1, r = t.target.id, e = this.root._videos.length;
                  e--;

                )
                  this.root._videos[e].id === r
                    ? (n = !0)
                    : this.root._videos[e].pause();
                if (!n) {
                  var i = uni.createVideoContext(r, this);
                  (i.id = r),
                    this.root.playbackRate &&
                      i.playbackRate(this.root.playbackRate),
                    this.root._videos.push(i);
                }
              }
            },
            imgTap: function (t) {
              var n = this.childs[t.currentTarget.dataset.i];
              n.a
                ? this.linkTap(n.a)
                : n.attrs.ignore ||
                  ((n.attrs.src = n.attrs.src || n.attrs["data-src"]),
                  this.root.$emit("imgtap", n.attrs),
                  this.root.previewImg &&
                    uni.previewImage({
                      current: parseInt(n.attrs.i),
                      urls: this.root.imgList,
                    }));
            },
            imgLongTap: function (t) {},
            imgLoad: function (t) {
              var n = t.currentTarget.dataset.i;
              ((this.opts[1] && !this.ctrl[n]) || -1 === this.ctrl[n]) &&
                this.$set(this.ctrl, n, 1),
                this.checkReady();
            },
            checkReady: function () {
              var t = this;
              this.root.lazyLoad ||
                ((this.root._unloadimgs -= 1),
                this.root._unloadimgs ||
                  setTimeout(function () {
                    t.root
                      .getRect()
                      .then(function (n) {
                        t.root.$emit("ready", n);
                      })
                      .catch(function () {
                        t.root.$emit("ready", {});
                      });
                  }, 350));
            },
            linkTap: function (t) {
              var n = t.currentTarget
                  ? this.childs[t.currentTarget.dataset.i]
                  : {},
                r = n.attrs || t,
                e = r.href;
              this.root.$emit(
                "linktap",
                Object.assign(
                  { innerText: this.root.getText(n.children || []) },
                  r
                )
              ),
                e &&
                  ("#" === e[0]
                    ? this.root.navigateTo(e.substring(1)).catch(function () {})
                    : e.split("?")[0].includes("://")
                    ? this.root.copyLink && window.open(e)
                    : uni.navigateTo({
                        url: e,
                        fail: function () {
                          uni.switchTab({ url: e, fail: function () {} });
                        },
                      }));
            },
            mediaError: function (t) {
              var n = t.currentTarget.dataset.i,
                r = this.childs[n];
              if ("video" === r.name || "audio" === r.name) {
                var e = (this.ctrl[n] || 0) + 1;
                if ((e > r.src.length && (e = 0), e < r.src.length))
                  return void this.$set(this.ctrl, n, e);
              } else
                "img" === r.name &&
                  (this.opts[2] && this.$set(this.ctrl, n, -1),
                  this.checkReady());
              this.root &&
                this.root.$emit("error", {
                  source: r.name,
                  attrs: r.attrs,
                  errMsg: t.detail.errMsg,
                });
            },
          },
        };
      n.default = a;
    },
    ea12: function (t, n, r) {
      "use strict";
      r.r(n);
      var e = r("dcfe"),
        i = r.n(e);
      for (var a in e)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            r.d(n, t, function () {
              return e[t];
            });
          })(a);
      n["default"] = i.a;
    },
  },
]);
