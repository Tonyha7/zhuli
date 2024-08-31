(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-facecollect-facecollect"],
  {
    4983: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "a", function () {});
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "v-uni-view",
            {
              staticStyle: {
                height: "100%",
                "background-color": "white !important",
              },
            },
            [
              n(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  n(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [e._v("人脸采集")]
                  ),
                ],
                2
              ),
              n(
                "v-uni-view",
                { staticClass: "content-container" },
                [
                  n(
                    "v-uni-view",
                    { staticClass: "image-container" },
                    [
                      n("v-uni-image", {
                        staticClass: "face-instruct-image",
                        attrs: { src: "/pagesA/static/face_title.png" },
                      }),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticClass: "tip-container" },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "title" },
                        [
                          n("v-uni-view", { staticClass: "title-text" }, [
                            e._v("注意事项"),
                          ]),
                        ],
                        1
                      ),
                      n("v-uni-view", { staticClass: "title-border" }),
                      n("v-uni-view", { staticClass: "content" }, [
                        e._v("1.请正视摄像头，保证面部在取景框内;"),
                        n("br"),
                        e._v(
                          "2.采集过程中请摘下帽子以及取下口罩等可能会遮挡面部的物品;"
                        ),
                        n("br"),
                        e._v(
                          "3.完成人脸信息采集后,可以刷脸通过闸机以及消费设备。"
                        ),
                      ]),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticClass: "action-container" },
                    [
                      e.isShow
                        ? e._e()
                        : n(
                            "v-uni-button",
                            {
                              on: {
                                click: function (t) {
                                  (arguments[0] = t = e.$handleEvent(t)),
                                    e.StartTakePhoto.apply(void 0, arguments);
                                },
                              },
                            },
                            [e._v("我已知晓，开始采集")]
                          ),
                    ],
                    1
                  ),
                  n(
                    "v-uni-view",
                    { staticClass: "action-container" },
                    [
                      e.isShow
                        ? n(
                            "v-uni-button",
                            {
                              on: {
                                click: function (t) {
                                  (arguments[0] = t = e.$handleEvent(t)),
                                    e.StartTakePhoto.apply(void 0, arguments);
                                },
                              },
                            },
                            [e._v("我已知晓，重新采集")]
                          )
                        : e._e(),
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
        i = [];
    },
    6888: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("4983"),
        i = n("fc4e");
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return i[e];
            });
          })(o);
      n("fc08");
      var r = n("f0c5"),
        c = Object(r["a"])(
          i["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "6c5a7d52",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = c.exports;
    },
    a140: function (e, t, n) {
      var a = n("24fb");
      (t = a(!1)),
        t.push([
          e.i,
          ".face-image[data-v-6c5a7d52]{width:%?800?%!important;height:%?1200?%!important}.content-container[data-v-6c5a7d52]{\n\t/* text-align: center; */}.image-container[data-v-6c5a7d52]{text-align:center}.face-instruct-image[data-v-6c5a7d52]{margin-top:%?200?%;width:%?400?%;height:%?400?%}.face-title[data-v-6c5a7d52]{color:#32b1fe;font-size:%?35?%;margin:%?30?% 0}.desc-container[data-v-6c5a7d52]{color:#c1c1c1;margin:%?30?% 0;padding:0 %?80?%;line-height:%?40?%}.action-container[data-v-6c5a7d52]{margin:%?50?% %?29?% %?29?% %?29?%}.action-container uni-button[data-v-6c5a7d52]{\n\t/* width: 230upx; */height:%?80?%;background:#32b1fe;border-radius:%?8?%;color:#fff;font-size:%?30?%;font-weight:500;color:#fff;line-height:%?80?%}.tip-container[data-v-6c5a7d52]{margin:%?40?% %?30?%}.tip-container>.title[data-v-6c5a7d52]{font-size:%?30?%;font-family:PingFang SC;font-weight:500;color:#333;line-height:34px;position:relative;z-index:1}.title-border[data-v-6c5a7d52]{width:%?120?%;height:%?20?%;background:#ffe2e2;bottom:%?10?%;z-index:0;position:relative;bottom:%?30?%}.tip-container>.content[data-v-6c5a7d52]{font-size:%?25?%;font-family:PingFang SC;font-weight:500;color:#7c849c;line-height:%?48?%}",
          "",
        ]),
        (e.exports = t);
    },
    a908: function (e, t, n) {
      var a = n("a140");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
      var i = n("4f06").default;
      i("da05e9a4", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    b38b: function (e, t, n) {
      "use strict";
      n("7a82");
      var a = n("ee27").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.uploadFaceImage =
          t.RefreshFaceImage =
          t.QueryFaceServerUserInfo =
            void 0);
      var i = a(n("6972")),
        o = (a(n("5aba")), i.default.sendAppPostToFaceServer),
        r = "http://f5-zhuli.whxinna.com";
      t.uploadFaceImage = function (e) {
        return o(r + "/webapi/v1/add_face", e);
      };
      t.RefreshFaceImage = function (e) {
        return o(r + "/webapi/v1/refresh_face", e);
      };
      t.QueryFaceServerUserInfo = function (e) {
        return o(r + "/webapi/v1/user/details", e);
      };
    },
    ca19: function (e, t, n) {
      "use strict";
      (function (e) {
        n("7a82");
        var a = n("ee27").default;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = a(n("f07e")),
          o = a(n("c964")),
          r = a(n("6972")),
          c = n("b38b"),
          s = n("d320"),
          u = n("eb21"),
          d = {
            components: {},
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                imageData: "",
                isShow: !1,
                isTakePhoto: !1,
              };
            },
            onLoad: function () {
              this.GetFaceServerUserInfo();
            },
            methods: {
              StartTakePhoto: function () {
                var t = this;
                (0, u.emitPageOnhideEvent)({ scene: "进入人脸采集" }),
                  zl.face.init({}, function (n) {
                    e.log(n),
                      (0, u.emitPageOnshowEvent)({ scene: "离开人脸采集" }),
                      0 == n.code
                        ? t.UploadFaceImg(n.base64Image, t.isShow ? 1 : 0)
                        : uni.showToast({ title: "采集失败", icon: "fail" });
                  });
              },
              UploadFaceImg: function (t, n) {
                r.default.showloading("正在上传中...");
                var a = this;
                try {
                  var i = function (e) {
                      var t = e;
                      "未检测到人脸" == t && (t += ",请正对摄像头取景框"),
                        uni.hideLoading(),
                        r.default.showalert("采集失败", t);
                    },
                    o = this.$store.state.user,
                    s = this.$store.state.project;
                  if (0 == n) {
                    var u = {
                      pid: s.server_appid + "",
                      staff_id: o.id,
                      face_image: t,
                      name: o.detailinfo.name,
                      gender: 0 == o.detailinfo.sex ? 1 : o.detailinfo.sex,
                      phone: o.phone,
                      desc: "",
                      async: !1,
                      notify_url: "",
                    };
                    (0, c.uploadFaceImage)({ add_face_args: u })
                      .then(function (e) {
                        uni.hideLoading(),
                          uni.showToast({ title: "采集成功", icon: "success" }),
                          a.GetFaceServerUserInfo();
                      })
                      .catch(function (e) {
                        i(e);
                      });
                  } else if (1 == n) {
                    var d = {
                      staff_id: o.id,
                      face_image: t,
                      name: o.detailinfo.name,
                      gender: 0 == o.detailinfo.sex ? 1 : o.detailinfo.sex,
                      phone: o.phone,
                    };
                    (0, c.RefreshFaceImage)({ refresh_face_args: d })
                      .then(function (e) {
                        uni.hideLoading(),
                          uni.showToast({ title: "采集成功", icon: "success" }),
                          a.GetFaceServerUserInfo();
                      })
                      .catch(function (e) {
                        i(e);
                      });
                  }
                } catch (f) {
                  e.error(f), uni.hideLoading();
                }
              },
              GetFaceServerUserInfo: function () {
                var t = this,
                  n = this.$store.state.user,
                  a = { phone: n.phone };
                (0, c.QueryFaceServerUserInfo)(a)
                  .then(function (a) {
                    uni.hideLoading(),
                      e.log(a),
                      "0" == a.code &&
                        null != a.data &&
                        a.data.union_id == n.id &&
                        ((t.isShow = !0), (t.imageData = a.data.face_url));
                  })
                  .catch(function (e) {
                    uni.hideLoading();
                  });
              },
              FinishTakePhoto: function (t) {
                var n = this;
                return (0, o.default)(
                  (0, i.default)().mark(function a() {
                    var o, r;
                    return (0, i.default)().wrap(function (a) {
                      while (1)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.next = 2), (0, s.compressImg)(t);
                          case 2:
                            return (
                              (o = a.sent),
                              e.log(o),
                              (a.next = 6),
                              (0, s.pathToBase64)(o)
                            );
                          case 6:
                            (r = a.sent), n.UploadFaceImg(r, n.isShow ? 1 : 0);
                          case 8:
                          case "end":
                            return a.stop();
                        }
                    }, a);
                  })
                )();
              },
            },
          };
        t.default = d;
      }).call(this, n("5a52")["default"]);
    },
    d320: function (e, t, n) {
      "use strict";
      n("7a82");
      var a = n("ee27").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.base64ToPath = function (e) {
          return new Promise(function (t, n) {
            if (
              "object" ===
                ("undefined" === typeof window
                  ? "undefined"
                  : (0, i.default)(window)) &&
              "document" in window
            ) {
              e = e.split(",");
              var a = e[0].match(/:(.*?);/)[1],
                c = atob(e[1]),
                s = c.length,
                u = new Uint8Array(s);
              while (s--) u[s] = c.charCodeAt(s);
              return t(
                (window.URL || window.webkitURL).createObjectURL(
                  new Blob([u], { type: a })
                )
              );
            }
            var d = e.split(",")[0].match(/data\:\S+\/(\S+);/);
            d ? (d = d[1]) : n(new Error("base64 error"));
            var f =
              (function () {
                return Date.now() + String(r++);
              })() +
              "." +
              d;
            if (
              "object" !==
              ("undefined" === typeof plus ? "undefined" : (0, i.default)(plus))
            )
              if (
                "object" ===
                  ("undefined" === typeof wx
                    ? "undefined"
                    : (0, i.default)(wx)) &&
                wx.canIUse("getFileSystemManager")
              ) {
                l = wx.env.USER_DATA_PATH + "/" + f;
                wx.getFileSystemManager().writeFile({
                  filePath: l,
                  data: o(e),
                  encoding: "base64",
                  success: function () {
                    t(l);
                  },
                  fail: function (e) {
                    n(e);
                  },
                });
              } else n(new Error("not support"));
            else {
              var l = "_doc/uniapp_temp/" + f;
              if (
                !(function (e, t) {
                  for (
                    var n = e.split("."), a = t.split("."), i = !1, o = 0;
                    o < a.length;
                    o++
                  ) {
                    var r = n[o] - a[o];
                    if (0 !== r) {
                      i = r > 0;
                      break;
                    }
                  }
                  return i;
                })(
                  "Android" === plus.os.name ? "1.9.9.80627" : "1.9.9.80472",
                  plus.runtime.innerVersion
                )
              )
                return void plus.io.resolveLocalFileSystemURL(
                  "_doc",
                  function (a) {
                    a.getDirectory(
                      "uniapp_temp",
                      { create: !0, exclusive: !1 },
                      function (a) {
                        a.getFile(
                          f,
                          { create: !0, exclusive: !1 },
                          function (a) {
                            a.createWriter(function (a) {
                              (a.onwrite = function () {
                                t(l);
                              }),
                                (a.onerror = n),
                                a.seek(0),
                                a.writeAsBinary(o(e));
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
              var v = new plus.nativeObj.Bitmap(f);
              v.loadBase64Data(
                e,
                function () {
                  v.save(
                    l,
                    {},
                    function () {
                      v.clear(), t(l);
                    },
                    function (e) {
                      v.clear(), n(e);
                    }
                  );
                },
                function (e) {
                  v.clear(), n(e);
                }
              );
            }
          });
        }),
        (t.compressImg = function (e) {
          return new Promise(function (t, n) {
            uni.compressImage({
              src: e,
              quality: 50,
              success: function (e) {
                return t(e.tempFilePath);
              },
              fail: function (e) {
                return n("图片压缩失败");
              },
            });
          });
        }),
        (t.pathToBase64 = function (e) {
          return new Promise(function (t, n) {
            if (
              "object" ===
                ("undefined" === typeof window
                  ? "undefined"
                  : (0, i.default)(window)) &&
              "document" in window
            ) {
              if ("function" === typeof FileReader) {
                var a = new XMLHttpRequest();
                return (
                  a.open("GET", e, !0),
                  (a.responseType = "blob"),
                  (a.onload = function () {
                    if (200 === this.status) {
                      var e = new FileReader();
                      (e.onload = function (e) {
                        t(e.target.result);
                      }),
                        (e.onerror = n),
                        e.readAsDataURL(this.response);
                    }
                  }),
                  (a.onerror = n),
                  void a.send()
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
                    t(o.toDataURL()),
                    (o.height = o.width = 0);
                }),
                (c.onerror = n),
                void (c.src = e)
              );
            }
            "object" !==
            ("undefined" === typeof plus ? "undefined" : (0, i.default)(plus))
              ? "object" ===
                  ("undefined" === typeof wx
                    ? "undefined"
                    : (0, i.default)(wx)) && wx.canIUse("getFileSystemManager")
                ? wx.getFileSystemManager().readFile({
                    filePath: e,
                    encoding: "base64",
                    success: function (e) {
                      t("data:image/jpg;base64," + e.data);
                    },
                    fail: function (e) {
                      n(e);
                    },
                  })
                : n(new Error("not support"))
              : plus.io.resolveLocalFileSystemURL(
                  (function (e) {
                    if (
                      0 === e.indexOf("_www") ||
                      0 === e.indexOf("_doc") ||
                      0 === e.indexOf("_documents") ||
                      0 === e.indexOf("_downloads")
                    )
                      return e;
                    if (0 === e.indexOf("file://")) return e;
                    if (0 === e.indexOf("/storage/emulated/0/")) return e;
                    if (0 === e.indexOf("/")) {
                      var t = plus.io.convertAbsoluteFileSystem(e);
                      if (t !== e) return t;
                      e = e.substr(1);
                    }
                    return "_www/" + e;
                  })(e),
                  function (e) {
                    e.file(
                      function (e) {
                        var a = new plus.io.FileReader();
                        (a.onload = function (e) {
                          t(e.target.result);
                        }),
                          (a.onerror = function (e) {
                            n(e);
                          }),
                          a.readAsDataURL(e);
                      },
                      function (e) {
                        n(e);
                      }
                    );
                  },
                  function (e) {
                    n(e);
                  }
                );
          });
        });
      var i = a(n("0122"));
      function o(e) {
        var t = e.split(",");
        return t[t.length - 1];
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
    fc08: function (e, t, n) {
      "use strict";
      var a = n("a908"),
        i = n.n(a);
      i.a;
    },
    fc4e: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("ca19"),
        i = n.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      t["default"] = i.a;
    },
  },
]);
