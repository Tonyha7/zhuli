(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-bindprojectconfirm-bindprojectconfirm"],
  {
    4089: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("d107"),
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
    5468: function (t, e, n) {
      "use strict";
      var i = n("95f4"),
        a = n.n(i);
      a.a;
    },
    "74f2": function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("f6f8"),
        a = n("4089");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      n("5468");
      var r = n("f0c5"),
        c = Object(r["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "0ba8a63f",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    "95f4": function (t, e, n) {
      var i = n("cf4a");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var a = n("4f06").default;
      a("106e5790", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    cf4a: function (t, e, n) {
      var i = n("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          "uni-page-body[data-v-0ba8a63f]{height:100%}.cuIcon-roundclosefill[data-v-0ba8a63f]{color:#d9d9d9}.add-form-group[data-v-0ba8a63f]{margin:%?30?%}.add-form-group > .title uni-text[data-v-0ba8a63f]{font-size:%?30?%}.add-form-group > .content[data-v-0ba8a63f]{background-color:#fff;height:%?100?%;border-radius:0;margin-top:%?20?%;display:flex;align-items:center;justify-content:center}.add-form-group > .content uni-input[data-v-0ba8a63f]{height:100%;background-color:#fff;width:100%;border-radius:0;padding-left:0;font-size:%?40?%;margin:0 %?20?%}.item-title[data-v-0ba8a63f]{min-width:%?150?%}.compress__canvas[data-v-0ba8a63f]{position:absolute;left:10000px;visibility:hidden;height:0;overflow:hidden}.cu-tag[data-v-0ba8a63f]{width:20px;height:20px;position:absolute;right:0;top:0}.action-icon[data-v-0ba8a63f]{font-size:%?45?%;position:absolute;right:10px;top:10px;color:#d9d9d9}.text-gray[data-v-0ba8a63f]{line-height:%?50?%}.tip-text-view[data-v-0ba8a63f]{color:#6f6f6f;line-height:%?60?%;margin:%?40?%;font-size:%?28?%}.project-area-text[data-v-0ba8a63f]{margin-left:%?20?%;max-width:60%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.project-name-text[data-v-0ba8a63f]{margin-top:%?40?%;font-size:%?40?%}",
          "",
        ]),
        (t.exports = e);
    },
    d107: function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("d3b7"),
        n("e9c4");
      var a = i(n("fc11")),
        o = i(n("6972")),
        r =
          (i(n("5cd9")),
          i(n("d320")),
          {
            data: function () {
              var t;
              return (
                (t = {
                  userdata: this.$store.state.user,
                  project: this.$store.state.project,
                }),
                (0, a.default)(t, "project", {
                  Area: "",
                  Name: "",
                  Id: "",
                  projectid: "",
                }),
                (0, a.default)(t, "inputpwd", ""),
                (0, a.default)(t, "logintype", "account"),
                t
              );
            },
            onLoad: function (t) {
              (this.logintype = t.logintype),
                o.default.isNullOrEmpty(t.project) ||
                  ((this.project = JSON.parse(decodeURIComponent(t.project))),
                  this.$forceUpdate());
            },
            computed: {
              contentheightstyle: function () {
                return "height:calc(100% - ".concat(this.CustomBar, "px)");
              },
            },
            methods: {
              submitbindproject: function () {
                var t = this;
                if (o.default.isNullOrEmpty(t.inputpwd))
                  uni.showToast({ title: "请输入密码", icon: "none" });
                else {
                  o.default.showloading("正在绑定中...");
                  var e = {
                    phone: t.userdata.phone,
                    id: t.project.projectid,
                    pwd: t.inputpwd,
                  };
                  "wechat_app" == this.logintype &&
                    (e.oauth_type = "wechat_app"),
                    this.ControlViewpopGestureenable(!1),
                    o.default
                      .sendauthget(
                        o.default.AUTH_SERVER_ADDR +
                          o.default.API_PATH.project_bind,
                        e
                      )
                      .then(function (e) {
                        uni.hideLoading();
                        var n = e.user_info;
                        (n.phone = t.userdata.phone),
                          t.$store.commit("SetUserData", n);
                        var i = e.server_info;
                        (i.projectname = t.project.Name),
                          (i.server_addr += "/webapi/v1/"),
                          t.$store.commit("SetProjectData", i),
                          t.queryprojectuserinfoswitch(i);
                      })
                      .catch(function (t) {
                        uni.hideLoading(), o.default.showalert("提示", t);
                      })
                      .finally(function () {
                        t.ControlViewpopGestureenable(!0);
                      });
                }
              },
              queryprojectuserinfoswitch: function (t) {
                var e = this;
                o.default
                  .sendapppost(
                    t.server_addr + o.default.API_PATH.queryconfig,
                    {}
                  )
                  .then(function (t) {
                    uni.hideLoading();
                    var n = JSON.parse(JSON.stringify(e.$store.state.project));
                    (n.projectswitch = t),
                      e.$store.commit("SetProjectData", n),
                      e.$store.commit("SetAllRequestFlagDefault"),
                      t.edituserinfo_enable
                        ? uni.reLaunch({
                            url: "/pagesA/userinfo/userinfo?scenetype=passive",
                          })
                        : uni.reLaunch({ url: "/pages/index/index" });
                  })
                  .catch(function (t) {
                    uni.hideLoading(),
                      uni.reLaunch({ url: "/pages/index/index" });
                  });
              },
              ControlViewpopGestureenable: function (t) {
                zl.system.onBackPress(function () {
                  return { allow: !!t };
                });
              },
            },
          });
      e.default = r;
    },
    d320: function (t, e, n) {
      "use strict";
      n("7a82");
      var i = n("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.base64ToPath = function (t) {
          return new Promise(function (e, n) {
            if (
              "object" ===
                ("undefined" === typeof window
                  ? "undefined"
                  : (0, a.default)(window)) &&
              "document" in window
            ) {
              t = t.split(",");
              var i = t[0].match(/:(.*?);/)[1],
                c = atob(t[1]),
                u = c.length,
                s = new Uint8Array(u);
              while (u--) s[u] = c.charCodeAt(u);
              return e(
                (window.URL || window.webkitURL).createObjectURL(
                  new Blob([s], { type: i })
                )
              );
            }
            var d = t.split(",")[0].match(/data\:\S+\/(\S+);/);
            d ? (d = d[1]) : n(new Error("base64 error"));
            var l =
              (function () {
                return Date.now() + String(r++);
              })() +
              "." +
              d;
            if (
              "object" !==
              ("undefined" === typeof plus ? "undefined" : (0, a.default)(plus))
            )
              if (
                "object" ===
                  ("undefined" === typeof wx
                    ? "undefined"
                    : (0, a.default)(wx)) &&
                wx.canIUse("getFileSystemManager")
              ) {
                f = wx.env.USER_DATA_PATH + "/" + l;
                wx.getFileSystemManager().writeFile({
                  filePath: f,
                  data: o(t),
                  encoding: "base64",
                  success: function () {
                    e(f);
                  },
                  fail: function (t) {
                    n(t);
                  },
                });
              } else n(new Error("not support"));
            else {
              var f = "_doc/uniapp_temp/" + l;
              if (
                !(function (t, e) {
                  for (
                    var n = t.split("."), i = e.split("."), a = !1, o = 0;
                    o < i.length;
                    o++
                  ) {
                    var r = n[o] - i[o];
                    if (0 !== r) {
                      a = r > 0;
                      break;
                    }
                  }
                  return a;
                })(
                  "Android" === plus.os.name ? "1.9.9.80627" : "1.9.9.80472",
                  plus.runtime.innerVersion
                )
              )
                return void plus.io.resolveLocalFileSystemURL(
                  "_doc",
                  function (i) {
                    i.getDirectory(
                      "uniapp_temp",
                      { create: !0, exclusive: !1 },
                      function (i) {
                        i.getFile(
                          l,
                          { create: !0, exclusive: !1 },
                          function (i) {
                            i.createWriter(function (i) {
                              (i.onwrite = function () {
                                e(f);
                              }),
                                (i.onerror = n),
                                i.seek(0),
                                i.writeAsBinary(o(t));
                            }, n);
                          },
                          n
                        );
                      },
                      n
                    );
                  },
                  n
                );
              var p = new plus.nativeObj.Bitmap(l);
              p.loadBase64Data(
                t,
                function () {
                  p.save(
                    f,
                    {},
                    function () {
                      p.clear(), e(f);
                    },
                    function (t) {
                      p.clear(), n(t);
                    }
                  );
                },
                function (t) {
                  p.clear(), n(t);
                }
              );
            }
          });
        }),
        (e.compressImg = function (t) {
          return new Promise(function (e, n) {
            uni.compressImage({
              src: t,
              quality: 50,
              success: function (t) {
                return e(t.tempFilePath);
              },
              fail: function (t) {
                return n("图片压缩失败");
              },
            });
          });
        }),
        (e.pathToBase64 = function (t) {
          return new Promise(function (e, n) {
            if (
              "object" ===
                ("undefined" === typeof window
                  ? "undefined"
                  : (0, a.default)(window)) &&
              "document" in window
            ) {
              if ("function" === typeof FileReader) {
                var i = new XMLHttpRequest();
                return (
                  i.open("GET", t, !0),
                  (i.responseType = "blob"),
                  (i.onload = function () {
                    if (200 === this.status) {
                      var t = new FileReader();
                      (t.onload = function (t) {
                        e(t.target.result);
                      }),
                        (t.onerror = n),
                        t.readAsDataURL(this.response);
                    }
                  }),
                  (i.onerror = n),
                  void i.send()
                );
              }
              var o = document.createElement("canvas"),
                r = o.getContext("2d"),
                c = new Image();
              return (
                (c.onload = function () {
                  (o.width = c.width),
                    (o.height = c.height),
                    r.drawImage(c, 0, 0),
                    e(o.toDataURL()),
                    (o.height = o.width = 0);
                }),
                (c.onerror = n),
                void (c.src = t)
              );
            }
            "object" !==
            ("undefined" === typeof plus ? "undefined" : (0, a.default)(plus))
              ? "object" ===
                  ("undefined" === typeof wx
                    ? "undefined"
                    : (0, a.default)(wx)) && wx.canIUse("getFileSystemManager")
                ? wx.getFileSystemManager().readFile({
                    filePath: t,
                    encoding: "base64",
                    success: function (t) {
                      e("data:image/jpg;base64," + t.data);
                    },
                    fail: function (t) {
                      n(t);
                    },
                  })
                : n(new Error("not support"))
              : plus.io.resolveLocalFileSystemURL(
                  (function (t) {
                    if (
                      0 === t.indexOf("_www") ||
                      0 === t.indexOf("_doc") ||
                      0 === t.indexOf("_documents") ||
                      0 === t.indexOf("_downloads")
                    )
                      return t;
                    if (0 === t.indexOf("file://")) return t;
                    if (0 === t.indexOf("/storage/emulated/0/")) return t;
                    if (0 === t.indexOf("/")) {
                      var e = plus.io.convertAbsoluteFileSystem(t);
                      if (e !== t) return e;
                      t = t.substr(1);
                    }
                    return "_www/" + t;
                  })(t),
                  function (t) {
                    t.file(
                      function (t) {
                        var i = new plus.io.FileReader();
                        (i.onload = function (t) {
                          e(t.target.result);
                        }),
                          (i.onerror = function (t) {
                            n(t);
                          }),
                          i.readAsDataURL(t);
                      },
                      function (t) {
                        n(t);
                      }
                    );
                  },
                  function (t) {
                    n(t);
                  }
                );
          });
        });
      var a = i(n("0122"));
      function o(t) {
        var e = t.split(",");
        return e[e.length - 1];
      }
      n("d3b7"),
        n("c975"),
        n("d9e2"),
        n("d401"),
        n("ac1f"),
        n("466d"),
        n("81b2"),
        n("0eb6"),
        n("b7ef"),
        n("8bd4"),
        n("ace4"),
        n("5cc6"),
        n("907a"),
        n("9a8c"),
        n("a975"),
        n("735e"),
        n("c1ac"),
        n("d139"),
        n("3a7b"),
        n("986a"),
        n("1d02"),
        n("d5d6"),
        n("82f8"),
        n("e91f"),
        n("60bd"),
        n("5f96"),
        n("3280"),
        n("3fcc"),
        n("ca91"),
        n("25a1"),
        n("cd26"),
        n("3c5d"),
        n("2954"),
        n("649e"),
        n("219c"),
        n("b39a"),
        n("72f7"),
        n("3ca3"),
        n("ddb0"),
        n("2b3d"),
        n("9861");
      var r = 0;
    },
    f6f8: function (t, e, n) {
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
                    [t._v("确认绑定")]
                  ),
                ],
                2
              ),
              n(
                "v-uni-view",
                {
                  staticStyle: {
                    height: "100%",
                    "background-color": "#f4f4f4",
                  },
                  style: t.contentheightstyle,
                },
                [
                  n(
                    "v-uni-view",
                    {
                      staticClass: "add-form-group",
                      staticStyle: {
                        padding: "40upx 30upx",
                        "background-color": "white",
                        margin: "0",
                        position: "relative",
                      },
                    },
                    [
                      n(
                        "v-uni-view",
                        {
                          staticClass: "title",
                          staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            position: "relative",
                          },
                        },
                        [
                          n("v-uni-text", {
                            staticClass: "cuIcon-locationfill",
                            staticStyle: {
                              color: "#32B1FE",
                              "font-size": "48upx",
                            },
                          }),
                          n(
                            "v-uni-text",
                            {
                              staticClass: "project-area-text",
                              staticStyle: { "font-size": "30upx" },
                            },
                            [t._v(t._s(t.project.Area))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    {
                      staticClass: "add-form-group",
                      staticStyle: {
                        padding: "40upx 30upx",
                        "background-color": "white",
                        margin: "0",
                        position: "relative",
                        top: "40upx",
                      },
                    },
                    [
                      n(
                        "v-uni-view",
                        {
                          staticClass: "title",
                          staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            position: "relative",
                          },
                        },
                        [
                          n("v-uni-text", [t._v("绑定至：")]),
                          n(
                            "v-uni-view",
                            {
                              staticStyle: {
                                width: "50upx",
                                height: "50upx",
                                "background-color": "#32b1fe",
                                "border-radius": "60upx",
                                display: "flex",
                                "align-items": "center",
                                "justify-content": "center",
                              },
                            },
                            [
                              n("v-uni-text", {
                                staticClass: "cuIcon-people",
                                staticStyle: { color: "white" },
                              }),
                            ],
                            1
                          ),
                          n(
                            "v-uni-text",
                            {
                              staticClass: "project-area-text",
                              staticStyle: { color: "#32B1FE" },
                            },
                            [t._v(t._s(t.project.Name))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    {
                      staticClass: "add-form-group",
                      staticStyle: {
                        padding: "20upx 30upx",
                        "background-color": "white",
                        margin: "0",
                        position: "relative",
                        top: "80upx",
                      },
                    },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "title" },
                        [n("v-uni-text", [t._v("请确认密码")])],
                        1
                      ),
                      n(
                        "v-uni-view",
                        {
                          staticClass: "content",
                          staticStyle: { height: "80upx" },
                        },
                        [
                          n("v-uni-text", {
                            staticClass: "iconfont iconmima",
                            staticStyle: {
                              color: "#d9d9d9",
                              "font-size": "40upx",
                            },
                          }),
                          n("v-uni-input", {
                            staticClass: "number-pwd-text",
                            attrs: {
                              type: "number",
                              maxlength: "6",
                              "placeholder-class":
                                "number-pwd-placeholder-text",
                            },
                            on: {
                              confirm: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.submitbindproject.apply(void 0, arguments);
                              },
                            },
                            model: {
                              value: t.inputpwd,
                              callback: function (e) {
                                t.inputpwd = e;
                              },
                              expression: "inputpwd",
                            },
                          }),
                          t.inputpwd
                            ? n("v-uni-text", {
                                staticClass: "cuIcon-roundclosefill",
                                staticStyle: {
                                  color: "#d9d9d9",
                                  "font-size": "40upx",
                                },
                                on: {
                                  click: function (e) {
                                    e.stopPropagation(),
                                      (arguments[0] = e = t.$handleEvent(e)),
                                      (t.inputpwd = "");
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
                      staticStyle: {
                        margin: "20px 15px",
                        position: "relative",
                        top: "100upx",
                      },
                    },
                    [
                      n(
                        "v-uni-button",
                        {
                          staticClass: "confirm-btn",
                          attrs: { type: "primary" },
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.submitbindproject.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v("确认绑定")]
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
        },
        a = [];
    },
  },
]);
