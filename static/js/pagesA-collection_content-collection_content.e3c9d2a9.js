(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-collection_content-collection_content"],
  {
    "035c": function (t, e, n) {
      t.exports = n.p + "static/empty-img.png";
    },
    "2c14": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("81a0"),
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
    "438a": function (t, e, n) {
      var i = n("4ea0");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("59a3c8af", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "444a": function (t, e, n) {
      "use strict";
      var i = n("6f1f"),
        a = n.n(i);
      a.a;
    },
    4587: function (t, e, n) {
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
            { staticClass: "uni-popup-share" },
            [
              n(
                "v-uni-view",
                { staticClass: "uni-share-title" },
                [
                  n("v-uni-text", { staticClass: "uni-share-title-text" }, [
                    t._v(t._s(t.shareTitleText)),
                  ]),
                ],
                1
              ),
              n(
                "v-uni-view",
                { staticClass: "uni-share-content" },
                [
                  n(
                    "v-uni-view",
                    { staticClass: "uni-share-content-box" },
                    t._l(t.bottomData, function (e, i) {
                      return n(
                        "v-uni-view",
                        {
                          key: i,
                          staticClass: "uni-share-content-item",
                          on: {
                            click: function (n) {
                              n.stopPropagation(),
                                (arguments[0] = n = t.$handleEvent(n)),
                                t.select(e, i);
                            },
                          },
                        },
                        [
                          n("v-uni-image", {
                            staticClass: "uni-share-image",
                            attrs: { src: e.icon, mode: "aspectFill" },
                          }),
                          n("v-uni-text", { staticClass: "uni-share-text" }, [
                            t._v(t._s(e.text)),
                          ]),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                ],
                1
              ),
              n(
                "v-uni-view",
                { staticClass: "uni-share-button-box" },
                [
                  n(
                    "v-uni-button",
                    {
                      staticClass: "uni-share-button",
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.close.apply(void 0, arguments);
                        },
                      },
                    },
                    [t._v(t._s(t.cancelText))]
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [];
    },
    "4ea0": function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '.top-titlebar[data-v-2105ea50]{display:flex;align-items:center}.backicon-container[data-v-2105ea50]{margin:%?32?% %?30?%}.cuIcon-back[data-v-2105ea50]{font-size:%?35?%}.kf-search-form[data-v-2105ea50]{background:#fafbfc;border-radius:%?29?%;border:none;margin:0;margin-right:%?31?%;\n}.search-input-placeholder[data-v-2105ea50]{color:#aaafb3;opacity:.5}.kf-search-form [class*="cuIcon-"][data-v-2105ea50]{font-size:%?30?%;color:#aaafb3}.top-history[data-v-2105ea50]{margin-top:%?30?%;display:flex;align-items:center;justify-content:space-between}.top-history > .title[data-v-2105ea50]{margin-left:%?29?%;font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#212121}.top-history > .delete-container[data-v-2105ea50]{margin-right:%?36?%;font-size:%?40?%;color:#aaafb3}.content-container[data-v-2105ea50]{display:flex;flex-direction:row;flex-wrap:wrap;padding:%?30?%}.history-item[data-v-2105ea50]{display:inline-block;font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#aaafb3;background:#fafbfc;border-radius:%?20?%;padding:%?10?% %?25?%;margin:%?15?% %?20?% 0 0}.empty-history-container[data-v-2105ea50]{text-align:center;padding-top:%?118?%}.empty-history-container uni-image[data-v-2105ea50]{width:%?200?%;height:%?200?%}.empty-history-container > .empty-text[data-v-2105ea50]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#b3bac3;line-height:%?22?%}.content-list-container-view[data-v-2105ea50]{margin-top:%?20?%;overflow-y:scroll}.content-list-container-view > .list-item[data-v-2105ea50]{display:flex;align-items:center;margin-bottom:%?20?%;height:%?168?%}.list-item > .left-container[data-v-2105ea50]{margin-left:%?16?%;position:relative}.list-item > .left-container uni-image[data-v-2105ea50]{width:%?168?%;height:%?168?%;border-radius:%?8?%}.list-item > .right-container[data-v-2105ea50]{width:100%;height:100%;display:flex;flex-flow:column;flex-wrap:wrap;justify-content:space-between;margin:%?10?% %?41?% %?10?% %?23?%}.list-item > .right-container > .title[data-v-2105ea50]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#212121;overflow:hidden;white-space:normal;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.list-item > .right-container > .desc[data-v-2105ea50]{display:flex;align-items:center;justify-content:space-between}.list-item > .right-container > .desc > .label-info[data-v-2105ea50]{font-size:%?24?%;background:#fff;border-radius:4px;color:#32b1fe;border:1px solid #32b1fe;margin:%?10?% %?15?% %?10?% %?10?%;padding:%?5?% %?15?%}.list-item > .right-container > .desc > .desc-item[data-v-2105ea50]{display:flex;align-items:center}.list-item > .right-container > .desc > .desc-item uni-image[data-v-2105ea50]{width:%?30?%;height:%?30?%;margin:0 %?10?%;border:1px solid red}.list-item > .right-container > .desc > .desc-item > .desc-text[data-v-2105ea50]{font-size:%?25?%;font-family:PingFang SC;font-weight:500;color:#b6bcc3;line-height:%?36?%}.tip-container[data-v-2105ea50]{width:100%;height:%?40?%;position:absolute;bottom:0;display:flex;align-items:center;background:linear-gradient(0deg,rgba(0,0,0,.5),transparent);\r\n\t/* opacity: 0.4; */border-radius:0;justify-content:flex-end}.tip-container > .read-count-container[data-v-2105ea50],\r\n.show-time-container[data-v-2105ea50]{\r\n\t/* width: 50%; */display:flex;padding-right:%?10?%}.tip-container uni-image[data-v-2105ea50]{width:%?30?%!important;height:%?30?%!important;margin:0 %?10?%}.tip-container uni-view[data-v-2105ea50]{color:#fff;font-size:%?22?%}',
          "",
        ]),
        (t.exports = e);
    },
    5181: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-share[data-v-623737be]{background-color:#fff;border-top-left-radius:11px;border-top-right-radius:11px}.uni-share-title[data-v-623737be]{display:flex;flex-direction:row;align-items:center;justify-content:center;height:40px}.uni-share-title-text[data-v-623737be]{font-size:14px;color:#666}.uni-share-content[data-v-623737be]{display:flex;flex-direction:row;justify-content:center;padding-top:10px}.uni-share-content-box[data-v-623737be]{display:flex;flex-direction:row;flex-wrap:wrap;width:360px}.uni-share-content-item[data-v-623737be]{width:90px;display:flex;flex-direction:column;justify-content:center;padding:10px 0;align-items:center}.uni-share-content-item[data-v-623737be]:active{background-color:#f5f5f5}.uni-share-image[data-v-623737be]{width:30px;height:30px}.uni-share-text[data-v-623737be]{margin-top:10px;font-size:14px;color:#3b4144}.uni-share-button-box[data-v-623737be]{display:flex;flex-direction:row;padding:10px 15px}.uni-share-button[data-v-623737be]{flex:1;border-radius:50px;color:#666;font-size:16px}.uni-share-button[data-v-623737be]::after{border-radius:50px}',
          "",
        ]),
        (t.exports = e);
    },
    "54e4": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("4587"),
        a = n("ea53");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      n("444a");
      var r = n("f0c5"),
        s = Object(r["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "623737be",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "6f1f": function (t, e, n) {
      var i = n("5181");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("e12e2c68", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "78b3": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("ac2b"),
        a = n("2c14");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      n("7f2f");
      var r = n("f0c5"),
        s = Object(r["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "2105ea50",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "7f2f": function (t, e, n) {
      "use strict";
      var i = n("438a"),
        a = n.n(i);
      a.a;
    },
    "803a": function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = i(n("0d73")),
        o = n("37dc"),
        r = i(n("f89b")),
        s = (0, o.initVueI18n)(r.default),
        c = s.t,
        l = {
          name: "UniPopupShare",
          mixins: [a.default],
          emits: ["select"],
          props: {
            title: { type: String, default: "" },
            beforeClose: { type: Boolean, default: !1 },
          },
          data: function () {
            return {
              bottomData: [
                {
                  text: "微信",
                  icon: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/c2b17470-50be-11eb-b680-7980c8a877b8.png",
                  name: "wx",
                },
                {
                  text: "支付宝",
                  icon: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/d684ae40-50be-11eb-8ff1-d5dcf8779628.png",
                  name: "wx",
                },
                {
                  text: "QQ",
                  icon: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/e7a79520-50be-11eb-b997-9918a5dda011.png",
                  name: "qq",
                },
                {
                  text: "新浪",
                  icon: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/0dacdbe0-50bf-11eb-8ff1-d5dcf8779628.png",
                  name: "sina",
                },
              ],
            };
          },
          created: function () {},
          computed: {
            cancelText: function () {
              return c("uni-popup.cancel");
            },
            shareTitleText: function () {
              return this.title || c("uni-popup.shareTitle");
            },
          },
          methods: {
            select: function (t, e) {
              this.$emit("select", { item: t, index: e }), this.close();
            },
            close: function () {
              this.beforeClose || this.popup.close();
            },
          },
        };
      e.default = l;
    },
    "81a0": function (t, e, n) {
      "use strict";
      (function (t) {
        n("7a82");
        var i = n("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          n("99af"),
          n("d3b7"),
          n("159b"),
          n("14d9"),
          n("e9c4");
        var a = i(n("f07e")),
          o = i(n("c964")),
          r = i(n("6972")),
          s = {
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                searchStr: "",
                allContentList: [],
                showContentList: [],
                ScrollContainerStyle: "",
                IsQueryEnd: !1,
                actionItem: {},
                actionbottom: [
                  {
                    text: "取消收藏",
                    icon: "/static/collection.png",
                    name: "miss",
                  },
                ],
              };
            },
            computed: {
              titlebarstyle: function () {
                return "padding-top:".concat(
                  this.$store.state.SystemInfo.StatusBar,
                  "px;"
                );
              },
            },
            watch: {
              searchStr: function (t) {
                var e = this.allContentList;
                if (r.default.isNullOrEmpty(t)) this.showContentList = e;
                else {
                  var n = r.default.getJsonItemByfield(e, "title", t);
                  this.showContentList = n;
                }
              },
            },
            onShow: function () {
              var t = this;
              setTimeout(function () {
                t.QueryContentIdList(), t.CalcContainerHeight();
              }, 100);
            },
            methods: {
              openPopup: function () {
                this.$refs.popup.open();
              },
              CalcContainerHeight: function () {
                var t = this;
                return (0, o.default)(
                  (0, a.default)().mark(function e() {
                    var n;
                    return (0, a.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              r.default.CalcDomHeight(".top-titlebar", t)
                            );
                          case 2:
                            (n = e.sent),
                              (t.ScrollContainerStyle = "height:calc(100% - "
                                .concat(n, "px - ")
                                .concat(uni.upx2px(20), "px)"));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              QueryContentIdList: function () {
                var e = this;
                uni.showLoading({ title: "加载中..." }),
                  r.default
                    .sendapppost(
                      this.project.server_addr +
                        r.default.API_PATH.ListStaffCollectDiscovercontent,
                      {}
                    )
                    .then(
                      (function () {
                        var t = (0, o.default)(
                          (0, a.default)().mark(function t(n) {
                            var i;
                            return (0, a.default)().wrap(function (t) {
                              while (1)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (i = []),
                                      n.forEach(function (t) {
                                        i.push(t.content_id);
                                      }),
                                      (t.next = 4),
                                      e.RefreshCollectionData(i)
                                    );
                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    )
                    .catch(function (e) {
                      t.log(e);
                    })
                    .finally(function () {
                      uni.hideLoading(), (e.IsQueryEnd = !0);
                    });
              },
              QueryContentListByIds: function (t) {
                var e = this;
                return new Promise(function (n, i) {
                  r.default
                    .sendapppost(
                      e.project.server_addr +
                        r.default.API_PATH.ListDiscoverContent,
                      { id_list: t.join(",") }
                    )
                    .then(function (t) {
                      n({ data: t.data });
                    })
                    .catch(function (t) {
                      n({ err: t });
                    });
                });
              },
              SearchInput: function (t) {
                var e = t.target.value;
                this.SearchContentList(e);
              },
              SearchContentList: function (e) {
                var n = this;
                r.default
                  .sendapppost(
                    this.project.server_addr +
                      r.default.API_PATH.ListDiscoverContent,
                    { page_index: 1, page_size: 10, title: e }
                  )
                  .then(function (t) {
                    n.showContentList = t.data;
                  })
                  .catch(function (e) {
                    t.log(e);
                  });
              },
              DetailClick: function (t) {
                var e =
                  "/pagesA/content_detail/content_detail?Content=" +
                  encodeURIComponent(JSON.stringify(t));
                uni.navigateTo({ url: e });
              },
              actionselect: function (t, e) {
                e(), this.CollectContent(this.actionItem.id);
              },
              CollectContent: function (t) {
                var e = this;
                uni.showLoading({ title: "取消中..." }),
                  r.default
                    .sendapppost(
                      this.project.server_addr +
                        r.default.API_PATH.SaveStaffCollectDiscovercontent,
                      { content_id: t }
                    )
                    .then(
                      (function () {
                        var t = (0, o.default)(
                          (0, a.default)().mark(function t(n) {
                            var i;
                            return (0, a.default)().wrap(function (t) {
                              while (1)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (i = []),
                                      n.forEach(function (t) {
                                        i.push(t.content_id);
                                      }),
                                      (t.next = 4),
                                      e.RefreshCollectionData(i)
                                    );
                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    )
                    .catch(function (t) {})
                    .finally(function () {
                      uni.hideLoading();
                    });
              },
              RefreshCollectionData: function (t) {
                var e = this;
                return (0, o.default)(
                  (0, a.default)().mark(function n() {
                    var i, o, r;
                    return (0, a.default)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              ((i = JSON.parse(
                                JSON.stringify(e.$store.state.project)
                              )),
                              (i.CollectionedContentId = t),
                              (e.project = i),
                              e.$store.commit("SetProjectData", i),
                              !(t.length > 0))
                            ) {
                              n.next = 11;
                              break;
                            }
                            return (n.next = 7), e.QueryContentListByIds(t);
                          case 7:
                            (o = n.sent),
                              "data" in o &&
                                ((r = o.data),
                                (e.allContentList = e.showContentList = r)),
                              (n.next = 12);
                            break;
                          case 11:
                            e.allContentList = e.showContentList = [];
                          case 12:
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
    ac2b: function (t, e, n) {
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
      var i = { uniPopup: n("f5b4").default, uniPopupShare: n("54e4").default },
        a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticStyle: { height: "100%" } },
            [
              i(
                "v-uni-view",
                { staticClass: "top-titlebar", style: t.titlebarstyle },
                [
                  i(
                    "v-uni-view",
                    {
                      staticClass: "backicon-container",
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)), t.goback();
                        },
                      },
                    },
                    [i("v-uni-text", { staticClass: "cuIcon-back" })],
                    1
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "kf-search-form round cu-search" },
                    [
                      i("v-uni-text", { staticClass: "cuIcon-search" }),
                      i("v-uni-input", {
                        attrs: {
                          type: "text",
                          placeholder: "搜索你收藏的内容",
                          "placeholder-class": "search-input-placeholder",
                          "confirm-type": "search",
                        },
                        model: {
                          value: t.searchStr,
                          callback: function (e) {
                            t.searchStr = e;
                          },
                          expression: "searchStr",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              0 == t.showContentList.length && t.IsQueryEnd
                ? i(
                    "v-uni-view",
                    { staticClass: "empty-history-container" },
                    [
                      i("v-uni-image", { attrs: { src: n("035c") } }),
                      i("v-uni-view", { staticClass: "empty-text" }, [
                        t._v("你还没有收藏过噢~"),
                      ]),
                    ],
                    1
                  )
                : t._e(),
              t.showContentList.length > 0
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "content-list-container-view",
                      style: t.ScrollContainerStyle,
                    },
                    t._l(t.showContentList, function (e) {
                      return i(
                        "v-uni-view",
                        {
                          key: e.id,
                          staticClass: "list-item",
                          on: {
                            click: function (n) {
                              n.stopPropagation(),
                                (arguments[0] = n = t.$handleEvent(n)),
                                t.DetailClick(e);
                            },
                          },
                        },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "left-container" },
                            [
                              i("v-uni-image", {
                                attrs: {
                                  mode: "scaleToFill",
                                  src: e.image_url,
                                },
                              }),
                              i(
                                "v-uni-view",
                                { staticClass: "tip-container" },
                                [
                                  i(
                                    "v-uni-view",
                                    { staticClass: "read-count-container" },
                                    [
                                      i("v-uni-image", {
                                        attrs: {
                                          src: "/static/content_time.png",
                                        },
                                      }),
                                      i("v-uni-view", [
                                        t._v(t._s(e.read_time)),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "right-container" },
                            [
                              i("v-uni-view", { staticClass: "title" }, [
                                t._v(t._s(e.title)),
                              ]),
                              i(
                                "v-uni-view",
                                { staticClass: "desc" },
                                [
                                  i(
                                    "v-uni-view",
                                    { staticClass: "label-info" },
                                    [t._v(t._s(e.label[0]))]
                                  ),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "desc-item" },
                                    [
                                      i(
                                        "v-uni-view",
                                        { staticClass: "desc-text" },
                                        [
                                          i("v-uni-text", {
                                            staticClass: "cuIcon-moreandroid",
                                            staticStyle: {
                                              color: "#cccccc",
                                              "font-size": "36upx",
                                            },
                                            on: {
                                              click: function (n) {
                                                n.stopPropagation(),
                                                  (arguments[0] = n =
                                                    t.$handleEvent(n)),
                                                  (t.actionItem = e),
                                                  t.openPopup();
                                              },
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
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
                  )
                : t._e(),
              i(
                "uni-popup",
                { ref: "popup", attrs: { type: "share" } },
                [
                  i("uni-popup-share", {
                    attrs: { titleShow: !1, bottomData: t.actionbottom },
                    on: {
                      select: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)),
                          t.actionselect.apply(void 0, arguments);
                      },
                    },
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
    ea53: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("803a"),
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
  },
]);
