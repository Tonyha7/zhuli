(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-addrepair-addrepair"],
  {
    "0280": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("8092"),
        a = i.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = a.a;
    },
    "0622": function (t, e, i) {
      "use strict";
      var n = i("7f68"),
        a = i.n(n);
      a.a;
    },
    "0d16": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("174f"),
        a = i("eabe");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      i("0622");
      var s = i("f0c5"),
        o = Object(s["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "0ae8138d",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = o.exports;
    },
    "13c2": function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-74540169]{height:100%}.contentContainer[data-v-74540169]{padding:%?10?% %?20?%;overflow-y:scroll}.add-form-group[data-v-74540169]{margin:%?30?%}.add-form-group > .title uni-text[data-v-74540169]{font-size:%?30?%;font-weight:700}.add-form-group > .content[data-v-74540169]{background-color:#f7f7f7;height:%?80?%;border-radius:%?80?%;margin-top:%?20?%}.add-form-group > .content uni-input[data-v-74540169]{height:100%;line-height:1;border-radius:%?80?%;padding-left:%?30?%;width:calc(100% - %?80?%);background-color:#f7f7f7!important}.item-title[data-v-74540169]{min-width:%?150?%}.addimg-view[data-v-74540169]{display:flex;flex-flow:column;flex-wrap:wrap;width:%?160?%;height:%?160?%;background-color:#fff;border-radius:%?20?%;justify-content:center;align-items:center;color:#8f8f94;margin-left:%?20?%;position:relative}\r\n/* 损坏症状 */.damagestatus[data-v-74540169]{display:inline-block;padding:%?15?% %?25?%;margin:%?10?%;text-align:center;background-clip:padding-box;color:#8f8f94;background-color:#f7f7f7;border-radius:%?50?%;max-width:80vw;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.damagestatusactive[data-v-74540169]{background-color:#32b1fe;color:#fff}.cu-tag[data-v-74540169]{width:20px;height:20px;position:absolute;right:0;top:0}.action-icon[data-v-74540169]{font-size:%?45?%;position:absolute;right:10px;top:10px;color:#d9d9d9}.warin-text[data-v-74540169]{margin-left:%?20?%;font-size:%?24?%}.repair-text-view[data-v-74540169]{margin:%?32?% 0 %?30?%;height:%?200?%;width:100%;flex:1;font-size:%?28?%;padding:%?20?%;border-radius:%?20?%;background-color:#f7f7f7}',
          "",
        ]),
        (t.exports = e);
    },
    "174f": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return a;
        }),
        i.d(e, "a", function () {});
      var n = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return this.canvasId
            ? e(
                "v-uni-view",
                { staticClass: "compress" },
                [
                  e("v-uni-canvas", {
                    style: {
                      width: this.canvasSize.width,
                      height: this.canvasSize.height,
                    },
                    attrs: { "canvas-id": this.canvasId },
                  }),
                ],
                1
              )
            : this._e();
        },
        a = [];
    },
    "3e15": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return r;
        }),
        i.d(e, "a", function () {
          return n;
        });
      var n = { helangCompress: i("0d16").default },
        a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              staticStyle: {
                height: "100%",
                "background-color": "white !important",
              },
            },
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
                "v-uni-view",
                {
                  staticClass: "contentContainer",
                  style: t.contentContainerStyle,
                },
                [
                  1 != t.type
                    ? i(
                        "v-uni-view",
                        {
                          staticClass: "add-form-group",
                          staticStyle: {
                            "margin-top": "0px",
                            "padding-top": "30upx",
                          },
                        },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "title" },
                            [
                              i("v-uni-text", [t._v("设备编号")]),
                              t.showselectbuildflag
                                ? i(
                                    "v-uni-text",
                                    { staticClass: "warin-text" },
                                    [t._v("(二选一)")]
                                  )
                                : t._e(),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "content",
                              staticStyle: { position: "relative" },
                            },
                            [
                              i("v-uni-input", {
                                staticStyle: { "margin-right": "80upx" },
                                attrs: {
                                  placeholder: "请输入设备编号",
                                  "placeholder-style": "line-height:80upx",
                                  name: "input",
                                  type: "number",
                                  "adjust-position": !1,
                                  maxlength: "9",
                                },
                                model: {
                                  value: t.inputdeviceid,
                                  callback: function (e) {
                                    t.inputdeviceid = e;
                                  },
                                  expression: "inputdeviceid",
                                },
                              }),
                              t.inputdeviceid
                                ? i("v-uni-text", {
                                    staticClass:
                                      "cuIcon-roundclosefill action-icon",
                                    on: {
                                      click: function (e) {
                                        e.stopPropagation(),
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                          (t.inputdeviceid = "");
                                      },
                                    },
                                  })
                                : t._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  1 == t.type
                    ? i(
                        "v-uni-view",
                        {
                          staticClass: "add-form-group",
                          staticStyle: {
                            "margin-top": "0px",
                            "padding-top": "30upx",
                          },
                        },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "title" },
                            [i("v-uni-text", [t._v("消费信息")])],
                            1
                          ),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "cardview",
                              staticStyle: {
                                "border-radius": "20upx",
                                background: "#f7f7f7",
                                width: "100%",
                                margin: "0px",
                                "margin-top": "20upx",
                              },
                            },
                            [
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "cardview-container",
                                  staticStyle: {
                                    "background-color": "#f7f7f7",
                                  },
                                },
                                [
                                  i(
                                    "v-uni-view",
                                    { staticClass: "title-img-container" },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "title-img",
                                        staticStyle: { "border-radius": "0px" },
                                        attrs: {
                                          src: t.getconsumetype(t.order).icon,
                                          mode: "aspectFit",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "content" },
                                    [
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "title",
                                          staticStyle: { "font-size": "30upx" },
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.getconsumetype(t.order).title
                                            )
                                          ),
                                        ]
                                      ),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "time",
                                          staticStyle: { "font-size": "24upx" },
                                        },
                                        [t._v(t._s(t.order.create_at))]
                                      ),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    {
                                      staticClass: "action",
                                      staticStyle: { top: "20upx" },
                                    },
                                    [
                                      i(
                                        "v-uni-text",
                                        {
                                          staticClass: "money-text",
                                          staticStyle: { "font-size": "30upx" },
                                        },
                                        [
                                          t._v(
                                            "￥" +
                                              t._s(t._f("parsemoney")(t.order))
                                          ),
                                        ]
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
                      )
                    : t._e(),
                  1 != t.type && t.showselectbuildflag
                    ? i(
                        "v-uni-view",
                        {
                          staticClass: "add-form-group",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.openselectview.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "title" },
                            [
                              i("v-uni-text", [t._v("设备位置")]),
                              i("v-uni-text", { staticClass: "warin-text" }, [
                                t._v("(二选一)"),
                              ]),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "content",
                              staticStyle: { position: "relative" },
                            },
                            [
                              i("v-uni-input", {
                                attrs: {
                                  placeholder: "请选择",
                                  "placeholder-style": "line-height:80upx",
                                  name: "input",
                                  "adjust-position": !1,
                                  disabled: "true",
                                },
                                model: {
                                  value: t.showaddrestext,
                                  callback: function (e) {
                                    t.showaddrestext = e;
                                  },
                                  expression: "showaddrestext",
                                },
                              }),
                              i("v-uni-text", {
                                staticClass: "cuIcon-locationfill action-icon",
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  1 != t.type
                    ? i(
                        "v-uni-view",
                        { staticClass: "add-form-group" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "title" },
                            [i("v-uni-text", [t._v("故障原因")])],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "damagestatusview" },
                            t._l(t.damagestatuslist, function (e) {
                              return i(
                                "v-uni-view",
                                {
                                  key: e.name,
                                  staticClass: "damagestatus",
                                  class: { damagestatusactive: e.addactive },
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)),
                                        t.checkdamagestatus(e);
                                    },
                                  },
                                },
                                [t._v(t._s(e.name))]
                              );
                            }),
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  i(
                    "v-uni-view",
                    { staticClass: "add-form-group" },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "title" },
                        [
                          0 == t.type
                            ? i("v-uni-text", [t._v("故障描述")])
                            : i("v-uni-text", [t._v("投诉描述")]),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        { staticStyle: { "margin-top": "20upx" } },
                        [
                          i("v-uni-textarea", {
                            staticClass: "repair-text-view",
                            attrs: {
                              enableNative: !1,
                              maxlength: "50",
                              placeholder: "请输入你要反馈的问题",
                            },
                            on: {
                              input: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.textareaAInput.apply(void 0, arguments);
                              },
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "add-form-group" },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "title" },
                        [
                          0 == t.type
                            ? i("v-uni-text", [t._v("设备图片")])
                            : i("v-uni-text", [t._v("相关图片")]),
                          i("v-uni-text", [t._v("(图片大小3M以内)")]),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "content",
                          staticStyle: {
                            height: "200upx",
                            "border-radius": "30upx",
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "flex-start",
                          },
                        },
                        [
                          t._l(t.imgList, function (e, n) {
                            return i(
                              "v-uni-view",
                              {
                                key: n,
                                staticClass: "bg-img addimg-view",
                                attrs: { "data-url": t.imgList[n] },
                                on: {
                                  click: function (e) {
                                    (arguments[0] = e = t.$handleEvent(e)),
                                      t.ViewImage.apply(void 0, arguments);
                                  },
                                },
                              },
                              [
                                i("v-uni-image", {
                                  attrs: {
                                    src: t.imgList[n],
                                    mode: "aspectFill",
                                  },
                                }),
                                i(
                                  "v-uni-view",
                                  {
                                    staticClass: "cu-tag bg-red",
                                    attrs: { "data-index": n },
                                    on: {
                                      click: function (e) {
                                        e.stopPropagation(),
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                          t.DelImg.apply(void 0, arguments);
                                      },
                                    },
                                  },
                                  [
                                    i("v-uni-text", {
                                      staticClass: "cuIcon-close",
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            );
                          }),
                          t.imgList.length < 1
                            ? i(
                                "v-uni-view",
                                {
                                  staticClass: "addimg-view",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.ChooseImage.apply(void 0, arguments);
                                    },
                                  },
                                },
                                [
                                  i("v-uni-text", {
                                    staticClass: "cuIcon-cameraadd",
                                    staticStyle: { "font-size": "60upx" },
                                  }),
                                  i("v-uni-text", [t._v("添加图片")]),
                                ],
                                1
                              )
                            : t._e(),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                  i(
                    "v-uni-view",
                    { staticStyle: { padding: "20px 15px" } },
                    [
                      i(
                        "v-uni-button",
                        {
                          staticClass: "confirm-btn",
                          attrs: {
                            type: "primary",
                            disabled: t.submitBtnStatus.disabled,
                          },
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.submitrepair.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v(t._s(t.submitBtnStatus.text))]
                      ),
                    ],
                    1
                  ),
                  i("helang-compress", { ref: "helangCompress" }),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [];
    },
    "5b6d": function (t, e, i) {
      var n = i("13c2");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("73cfbeec", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "7f68": function (t, e, i) {
      var n = i("ebcf");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("5732a9b3", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    8092: function (t, e, i) {
      "use strict";
      (function (t) {
        i("7a82");
        var n = i("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          i("a9e3"),
          i("d3b7"),
          i("159b"),
          i("99af"),
          i("a434"),
          i("14d9"),
          i("c975"),
          i("e9c4"),
          i("3ca3"),
          i("ddb0"),
          i("2b3d"),
          i("9861"),
          i("ac1f"),
          i("466d"),
          i("d401"),
          i("81b2"),
          i("0eb6"),
          i("b7ef"),
          i("8bd4"),
          i("ace4"),
          i("5cc6"),
          i("907a"),
          i("9a8c"),
          i("a975"),
          i("735e"),
          i("c1ac"),
          i("d139"),
          i("3a7b"),
          i("986a"),
          i("1d02"),
          i("d5d6"),
          i("82f8"),
          i("e91f"),
          i("60bd"),
          i("5f96"),
          i("3280"),
          i("3fcc"),
          i("ca91"),
          i("25a1"),
          i("cd26"),
          i("3c5d"),
          i("2954"),
          i("649e"),
          i("219c"),
          i("b39a"),
          i("72f7");
        n(i("040a"));
        var a = n(i("6972")),
          r = n(i("5cd9")),
          s = (n(i("d320")), i("ca00"), n(i("0d16"))),
          o = i("eb21"),
          u = {
            components: { helangCompress: s.default },
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                Systeminfo: this.$store.state.SystemInfo,
                showselectbuildflag: !0,
                imgList: [],
                damagestatuslist: [],
                checkeddamagestatus: [],
                inputdeviceid: "",
                inputrepairdesc: "",
                selectbuildinfo: {
                  buildingid: "00000000-0000-0000-0000-000000000000",
                  buildingname: "",
                  floorid: "00000000-0000-0000-0000-000000000000",
                  floorname: "",
                  roomid: "00000000-0000-0000-0000-000000000000",
                  roomname: "",
                },
                type: "",
                titletext: "添加报修",
                order: {},
                submitBtnStatus: { disabled: !1, text: "提交" },
              };
            },
            onLoad: function (e) {
              if (
                (a.default.isNullOrEmpty(e.deviceid) ||
                  ((this.inputdeviceid = e.deviceid),
                  (this.showselectbuildflag = !1)),
                (this.type = e.type),
                1 == this.type)
              )
                try {
                  (this.order = JSON.parse(decodeURIComponent(e.order))),
                    (this.titletext = "消费投诉");
                } catch (i) {
                  return (
                    t.log(i),
                    a.default.showalert(
                      "提示",
                      "消费订单错误",
                      null,
                      function () {
                        uni.navigateBack({ delta: 1 });
                      },
                      !1
                    )
                  );
                }
              else this.getdamagestatuslist();
            },
            computed: {
              showaddrestext: function () {
                var t = "";
                return (
                  a.default.isNullOrEmpty(this.selectbuildinfo.buildingname) ||
                    (t = a.default.getBuildingInfo(
                      this.selectbuildinfo.buildingname,
                      this.selectbuildinfo.floorname,
                      this.selectbuildinfo.roomname
                    )),
                  t
                );
              },
              contentContainerStyle: function () {
                var t = "height:calc(100% - ".concat(
                  this.$store.state.SystemInfo.CustomBar,
                  "px);"
                );
                return t;
              },
            },
            filters: {
              parsedevtype: function (t) {
                return r.default.EnumDeviceType[t];
              },
              parsedevbuild: function (t) {
                var e = "未知";
                return (
                  a.default.isNullOrEmpty(t.building_name) ||
                    (e = a.default.getBuildingInfo(
                      t.building_name,
                      t.floor_name,
                      t.room_name
                    )),
                  0 != Number(t.device_addr) ||
                    a.default.isNullOrEmpty(t.address) ||
                    (e = t.address),
                  e
                );
              },
              parsedamagestatus: function (t) {
                if (!a.default.isNullOrEmpty(t)) {
                  var e = JSON.parse(t);
                  return e.join(",");
                }
              },
              parsehandelrepairstatus: function (t) {
                return r.default.EnumRepairStatus[t];
              },
              parserecordresult: function (t) {
                if (a.default.isNullOrEmpty(t)) {
                  return "无";
                }
                return "备注:" + t;
              },
              parsemoney: function (t) {
                return a.default.isNullOrEmpty(t)
                  ? ""
                  : Number(t.consume_money).toFixed(2);
              },
            },
            onShow: function () {},
            methods: {
              getconsumetype: function (t) {
                var e = { icon: "", title: "" };
                if (a.default.isNullOrEmpty(t)) return e;
                var i = t.consume_type;
                if (a.default.isNullOrEmpty(i)) return e;
                var n = "/static/xiyu.png",
                  r = "洗浴";
                switch (i) {
                  case "metering":
                  case "drinking":
                  case "timing":
                    (n = "/static/yinshui.png"), (r = "饮水");
                    break;
                  case "bath":
                    (n = "/static/xiyu.png"), (r = "洗浴");
                    break;
                  case "laundry":
                    (n = "/static/xiyi.png"), (r = "洗衣");
                    break;
                  case "blower":
                    (n = "/static/chuifeng.png"), (r = "吹风");
                    break;
                  case "shoe":
                    (n = "/static/xixie.png"), (r = "洗鞋");
                    break;
                  case "dryer":
                    (n = "/static/honggan.png"), (r = "烘干");
                    break;
                  case "retail":
                    (n = "/static/lingshou.png"), (r = "零售");
                    break;
                }
                return (e.icon = n), (e.title = r), e;
              },
              openselectview: function () {
                uni.navigateTo({
                  url: "../selectbuilding/selectbuilding?launchtype=buildinginfo&showuserbuild=true",
                });
              },
              textareaAInput: function (t) {
                this.inputrepairdesc = t.detail.value;
              },
              getdamagestatuslist: function () {
                var t = this;
                a.default
                  .sendapppost(
                    t.project.server_addr +
                      a.default.API_PATH.listDamageSymptom,
                    {}
                  )
                  .then(function (e) {
                    var i = e.rows;
                    i.forEach(function (t, e) {
                      t.addactive = !1;
                    }),
                      (t.damagestatuslist = i);
                  })
                  .catch(function (t) {
                    uni.hideLoading(), a.default.showalert("获取失败", t);
                  });
              },
              ChooseImage: function () {
                var t = this;
                (0, o.emitPageOnhideEvent)({ scene: "进入照片选择" }),
                  uni.chooseImage({
                    count: 1,
                    sizeType: ["compressed"],
                    sourceType: ["album", "camera"],
                    success: function (e) {
                      (0, o.emitPageOnshowEvent)({ scene: "离开照片选择" }),
                        0 != t.imgList.length
                          ? (t.imgList = t.imgList.concat(e.tempFilePaths))
                          : (t.imgList = e.tempFilePaths);
                    },
                  });
              },
              DelImg: function (t) {
                this.imgList.splice(t.currentTarget.dataset.index, 1);
              },
              ViewImage: function (t) {
                uni.previewImage({
                  urls: [t.currentTarget.dataset.url],
                  current: t.currentTarget.dataset.url,
                });
              },
              checkdamagestatus: function (t) {
                if (t.addactive) {
                  t.addactive = !1;
                  var e = this.checkeddamagestatus.indexOf(t.name);
                  e > -1 && this.checkeddamagestatus.splice(e, 1);
                } else
                  (t.addactive = !0), this.checkeddamagestatus.push(t.name);
              },
              submitrepair: function () {
                var t = this,
                  e = this.Systeminfo,
                  i = t.inputdeviceid || 0,
                  n = a.default.getplatformtype(),
                  r = zl.system.getDeviceInfo();
                n = "Native version: "
                  .concat(r.appVersion, ", h5 version: ")
                  .concat(this.$store.getters.AppVersion);
                var s = {
                  app_version: n,
                  system_type: e.platform,
                  system_version: e.system,
                  mobile_model: e.model,
                  mobile_ui_mode: e.brand,
                  operator: "",
                  connection_type: this.$store.state.AppInfo.nettype,
                  device_addr: i,
                  phone: t.userdata.detailinfo.phone,
                  staff_id: t.userdata.detailinfo.id,
                  damage_status: JSON.stringify(t.checkeddamagestatus),
                  description: t.inputrepairdesc,
                  order_type: this.type,
                };
                if (
                  (a.default.isNullOrEmpty(this.showaddrestext) ||
                    (s.address = this.showaddrestext),
                  1 == this.type)
                ) {
                  (s.device_addr = this.order.device_id),
                    (s.address =
                      this.order.building_name +
                      "F" +
                      this.order.floor_name +
                      "F" +
                      this.order.room_name);
                  var o = {
                    order_id: this.order.order_id,
                    consume_money: this.order.consume_money,
                    consume_time: this.order.consume_timing,
                    device_name: this.order.device_name,
                  };
                  Number(1 == this.order.charge_option) &&
                    (o.consume_time = this.order.consume_value),
                    (s.extend = JSON.stringify(o));
                }
                if (
                  0 == this.type &&
                  (0 == s.device_addr ||
                    a.default.isNullOrEmpty(s.device_addr)) &&
                  a.default.isNullOrEmpty(this.showaddrestext)
                )
                  return a.default.showalert(
                    "提示",
                    "请输入设备编号或选择楼栋信息"
                  );
                if (
                  0 == t.checkeddamagestatus.length &&
                  a.default.isNullOrEmpty(t.inputrepairdesc)
                ) {
                  if (0 == this.type)
                    return a.default.showalert(
                      "提示",
                      "请选择故障原因或输入故障描述"
                    );
                  if (1 == this.type)
                    return a.default.showalert("提示", "请输入投诉原因");
                }
                var u = [],
                  c = 0;
                if (t.imgList.length > 0)
                  return (function e() {
                    var i = t.imgList[c];
                    return (
                      (t.submitBtnStatus.disabled = !0),
                      (t.submitBtnStatus.text = "正在提交中"),
                      t.compressImg(i, function (i, n) {
                        return n
                          ? (api.hideProgress(),
                            (u = []),
                            (c = 0),
                            (t.submitBtnStatus.disabled = !1),
                            (t.submitBtnStatus.text = "提交"),
                            a.default.showalert("提示", n))
                          : (u.push(i),
                            (c += 1),
                            c < t.imgList.length
                              ? e()
                              : void t.submitData(s, u));
                      })
                    );
                  })();
                t.submitData(s, u);
              },
              compressImg: function (e, i) {
                var n = this;
                this.$refs.helangCompress
                  .compress({
                    src: e,
                    maxSize: 800,
                    fileType: "jpg",
                    quality: 0.85,
                    minSize: 640,
                  })
                  .then(function (e) {
                    var a = n.dataURLtoBlob(e);
                    return (e = URL.createObjectURL(a)), t.log(e), i(e);
                  })
                  .catch(function (e) {
                    t.log(e);
                  }),
                  uni.compressImage({
                    src: e,
                    quality: 20,
                    success: function (t) {
                      return i(t.tempFilePath);
                    },
                    fail: function (t) {
                      return i("图片准备上传失败");
                    },
                  });
              },
              dataURLtoBlob: function (t) {
                var e = t.split(","),
                  i = e[0].match(/:(.*?);/)[1],
                  n = atob(e[1]),
                  a = n.length,
                  r = new Uint8Array(a);
                while (a--) r[a] = n.charCodeAt(a);
                return new Blob([r], { type: i });
              },
              submitData: function (t, e) {
                (this.submitBtnStatus.disabled = !0),
                  (this.submitBtnStatus.text = "正在提交中"),
                  a.default.showloading("提交中...");
                var i = this;
                a.default
                  .sendapppostwithfile(
                    i.project.server_addr + a.default.API_PATH.addRepairOrder,
                    { repair: t },
                    e
                  )
                  .then(function (t) {
                    if ((uni.hideLoading(), 0 == i.type)) {
                      var e = getCurrentPages(),
                        n = e[e.length - 2];
                      if (
                        ("pagesA/repairlist/repairlist" == n.route &&
                          n.$vm.mescroll.resetUpScroll(),
                        "pagesA/consumeend/consumeend" == n.route)
                      )
                        return uni.redirectTo({
                          url: "/pagesA/repairlist/repairlist?type=0",
                        });
                      uni.navigateBack({ delta: 1 });
                    } else uni.redirectTo({ url: "/pagesA/repairlist/repairlist?type=1" });
                  })
                  .catch(function (t) {
                    uni.hideLoading();
                    var e = t;
                    "重复报修" == t &&
                      1 == i.type &&
                      (e = "你已经投诉过该笔订单了~"),
                      (i.submitBtnStatus.disabled = !1),
                      (i.submitBtnStatus.text = "提交"),
                      a.default.showalert("提交失败", e);
                  });
              },
            },
          };
        e.default = u;
      }).call(this, i("5a52")["default"]);
    },
    af2c: function (t, e, i) {
      "use strict";
      var n = i("5b6d"),
        a = i.n(n);
      a.a;
    },
    ca00: function (t, e, i) {
      "use strict";
      i("7a82");
      var n = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.UploadImg =
          e.SearchPermissionsByOpenId =
          e.MerchantOrderSync =
          e.GetPartnerPermissions =
          e.CreateWxSignOrder =
          e.CompleteWxSignOrder =
            void 0);
      var a = n(i("6972")),
        r = a.default.sendAppGetToPayServer,
        s = "http://zhuli-pay-admin.whxinna.com";
      e.SearchPermissionsByOpenId = function (t) {
        return r("POST", s + "/webapi/v1/wx_sign_api/search_pernissions", t);
      };
      e.GetPartnerPermissions = function (t) {
        return r("POST", s + "/webapi/v1/wx_sign_api/partner_permissions", t);
      };
      e.CreateWxSignOrder = function (t) {
        return r("POST", s + "/webapi/v1/wx_sign_api/create_wx_sign_order", t);
      };
      e.CompleteWxSignOrder = function (t) {
        return r(
          "POST",
          s + "/webapi/v1/wx_sign_api/complete_wx_sign_order",
          t
        );
      };
      e.UploadImg = function (t) {
        return r("POST", s + "/webapi/v1/order/upload_img", t);
      };
      e.MerchantOrderSync = function (t) {
        return r("POST", s + "/webapi/v1/order/merchant_order_sync", t);
      };
    },
    d320: function (t, e, i) {
      "use strict";
      i("7a82");
      var n = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.base64ToPath = function (t) {
          return new Promise(function (e, i) {
            if (
              "object" ===
                ("undefined" === typeof window
                  ? "undefined"
                  : (0, a.default)(window)) &&
              "document" in window
            ) {
              t = t.split(",");
              var n = t[0].match(/:(.*?);/)[1],
                o = atob(t[1]),
                u = o.length,
                c = new Uint8Array(u);
              while (u--) c[u] = o.charCodeAt(u);
              return e(
                (window.URL || window.webkitURL).createObjectURL(
                  new Blob([c], { type: n })
                )
              );
            }
            var d = t.split(",")[0].match(/data\:\S+\/(\S+);/);
            d ? (d = d[1]) : i(new Error("base64 error"));
            var l =
              (function () {
                return Date.now() + String(s++);
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
                  data: r(t),
                  encoding: "base64",
                  success: function () {
                    e(f);
                  },
                  fail: function (t) {
                    i(t);
                  },
                });
              } else i(new Error("not support"));
            else {
              var f = "_doc/uniapp_temp/" + l;
              if (
                !(function (t, e) {
                  for (
                    var i = t.split("."), n = e.split("."), a = !1, r = 0;
                    r < n.length;
                    r++
                  ) {
                    var s = i[r] - n[r];
                    if (0 !== s) {
                      a = s > 0;
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
                  function (n) {
                    n.getDirectory(
                      "uniapp_temp",
                      { create: !0, exclusive: !1 },
                      function (n) {
                        n.getFile(
                          l,
                          { create: !0, exclusive: !1 },
                          function (n) {
                            n.createWriter(function (n) {
                              (n.onwrite = function () {
                                e(f);
                              }),
                                (n.onerror = i),
                                n.seek(0),
                                n.writeAsBinary(r(t));
                            }, i);
                          },
                          i
                        );
                      },
                      i
                    );
                  },
                  i
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
                      p.clear(), i(t);
                    }
                  );
                },
                function (t) {
                  p.clear(), i(t);
                }
              );
            }
          });
        }),
        (e.compressImg = function (t) {
          return new Promise(function (e, i) {
            uni.compressImage({
              src: t,
              quality: 50,
              success: function (t) {
                return e(t.tempFilePath);
              },
              fail: function (t) {
                return i("图片压缩失败");
              },
            });
          });
        }),
        (e.pathToBase64 = function (t) {
          return new Promise(function (e, i) {
            if (
              "object" ===
                ("undefined" === typeof window
                  ? "undefined"
                  : (0, a.default)(window)) &&
              "document" in window
            ) {
              if ("function" === typeof FileReader) {
                var n = new XMLHttpRequest();
                return (
                  n.open("GET", t, !0),
                  (n.responseType = "blob"),
                  (n.onload = function () {
                    if (200 === this.status) {
                      var t = new FileReader();
                      (t.onload = function (t) {
                        e(t.target.result);
                      }),
                        (t.onerror = i),
                        t.readAsDataURL(this.response);
                    }
                  }),
                  (n.onerror = i),
                  void n.send()
                );
              }
              var r = document.createElement("canvas"),
                s = r.getContext("2d"),
                o = new Image();
              return (
                (o.onload = function () {
                  (r.width = o.width),
                    (r.height = o.height),
                    s.drawImage(o, 0, 0),
                    e(r.toDataURL()),
                    (r.height = r.width = 0);
                }),
                (o.onerror = i),
                void (o.src = t)
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
                      i(t);
                    },
                  })
                : i(new Error("not support"))
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
                        var n = new plus.io.FileReader();
                        (n.onload = function (t) {
                          e(t.target.result);
                        }),
                          (n.onerror = function (t) {
                            i(t);
                          }),
                          n.readAsDataURL(t);
                      },
                      function (t) {
                        i(t);
                      }
                    );
                  },
                  function (t) {
                    i(t);
                  }
                );
          });
        });
      var a = n(i("0122"));
      function r(t) {
        var e = t.split(",");
        return e[e.length - 1];
      }
      i("d3b7"),
        i("c975"),
        i("d9e2"),
        i("d401"),
        i("ac1f"),
        i("466d"),
        i("81b2"),
        i("0eb6"),
        i("b7ef"),
        i("8bd4"),
        i("ace4"),
        i("5cc6"),
        i("907a"),
        i("9a8c"),
        i("a975"),
        i("735e"),
        i("c1ac"),
        i("d139"),
        i("3a7b"),
        i("986a"),
        i("1d02"),
        i("d5d6"),
        i("82f8"),
        i("e91f"),
        i("60bd"),
        i("5f96"),
        i("3280"),
        i("3fcc"),
        i("ca91"),
        i("25a1"),
        i("cd26"),
        i("3c5d"),
        i("2954"),
        i("649e"),
        i("219c"),
        i("b39a"),
        i("72f7"),
        i("3ca3"),
        i("ddb0"),
        i("2b3d"),
        i("9861");
      var s = 0;
    },
    e9ca: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("3e15"),
        a = i("0280");
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      i("af2c");
      var s = i("f0c5"),
        o = Object(s["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "74540169",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = o.exports;
    },
    eabe: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("eeb6"),
        a = i.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = a.a;
    },
    ebcf: function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.compress[data-v-0ae8138d]{position:fixed;width:12px;height:12px;overflow:hidden;top:-99999px;left:0}',
          "",
        ]),
        (t.exports = e);
    },
    eeb6: function (t, e, i) {
      "use strict";
      i("7a82");
      var n = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = n(i("f07e")),
        r = n(i("c964"));
      i("d3b7"), i("14d9");
      var s = {
        data: function () {
          return { pic: "", canvasSize: { width: 0, height: 0 }, canvasId: "" };
        },
        mounted: function () {
          uni && uni._helang_compress_canvas
            ? uni._helang_compress_canvas++
            : (uni._helang_compress_canvas = 1),
            (this.canvasId = "compress-canvas".concat(
              uni._helang_compress_canvas
            ));
        },
        methods: {
          compressFun: function (t) {
            var e = this;
            return new Promise(
              (function () {
                var i = (0, r.default)(
                  (0, a.default)().mark(function i(n, r) {
                    var s, o, u, c;
                    return (0, a.default)().wrap(function (i) {
                      while (1)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (
                              (i.next = 2),
                              e
                                .getImageInfo(t.src)
                                .then(function (t) {
                                  return t;
                                })
                                .catch(function () {
                                  return null;
                                })
                            );
                          case 2:
                            if (((s = i.sent), s)) {
                              i.next = 6;
                              break;
                            }
                            return r("获取图片信息异常"), i.abrupt("return");
                          case 6:
                            (o = t.maxSize || 1080),
                              t.minSize || 640,
                              (u = s.width),
                              (c = s.height),
                              (u > o || c > o) &&
                                (u > c
                                  ? ((c = Math.floor(c / (u / o))), (u = o))
                                  : ((u = Math.floor(u / (c / o))), (c = o))),
                              e.$set(e, "canvasSize", {
                                width: "".concat(u, "px"),
                                height: "".concat(c, "px"),
                              }),
                              setTimeout(function () {
                                var i = uni.createCanvasContext(e.canvasId, e);
                                i.clearRect(0, 0, u, c),
                                  i.drawImage(s.path, 0, 0, u, c),
                                  i.draw(!1, function () {
                                    uni.canvasToTempFilePath(
                                      {
                                        x: 0,
                                        y: 0,
                                        width: u,
                                        height: c,
                                        destWidth: u,
                                        destHeight: c,
                                        canvasId: e.canvasId,
                                        fileType: t.fileType || "png",
                                        quality: t.quality || 0.9,
                                        success: function (t) {
                                          n(t.tempFilePath);
                                        },
                                        fail: function (t) {
                                          r(null);
                                        },
                                      },
                                      e
                                    );
                                  });
                              }, 300);
                          case 12:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  })
                );
                return function (t, e) {
                  return i.apply(this, arguments);
                };
              })()
            );
          },
          getImageInfo: function (t) {
            return new Promise(function (e, i) {
              uni.getImageInfo({
                src: t,
                success: function (t) {
                  e(t);
                },
                fail: function () {
                  i(null);
                },
              });
            });
          },
          compress: function (t) {
            var e = this,
              i = 0,
              n = 0,
              s = 0,
              o = [],
              u = [];
            u = "string" == typeof t.src ? [t.src] : t.src;
            var c = function () {
                return new Promise(function (e, c) {
                  var l = (function () {
                    var c = (0, r.default)(
                      (0, a.default)().mark(function r() {
                        var c;
                        return (0, a.default)().wrap(function (a) {
                          while (1)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (a.next = 2),
                                  d().catch(function () {
                                    return null;
                                  })
                                );
                              case 2:
                                (c = a.sent),
                                  c ? (n++, o.push(c)) : s++,
                                  t.progress &&
                                    t.progress({
                                      done: n,
                                      fail: s,
                                      count: u.length,
                                    }),
                                  i++,
                                  i >= u.length ? e(!0) : l();
                              case 7:
                              case "end":
                                return a.stop();
                            }
                        }, r);
                      })
                    );
                    return function () {
                      return c.apply(this, arguments);
                    };
                  })();
                  l();
                });
              },
              d = function () {
                return e.compressFun({
                  src: u[i],
                  maxSize: t.maxSize,
                  fileType: t.fileType,
                  quality: t.quality,
                  minSize: t.minSize,
                });
              };
            return new Promise(
              (function () {
                var e = (0, r.default)(
                  (0, a.default)().mark(function e(i, n) {
                    var r;
                    return (0, a.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), c();
                          case 2:
                            (r = e.sent),
                              r
                                ? "string" == typeof t.src
                                  ? i(o[0])
                                  : i(o)
                                : n(null);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, i) {
                  return e.apply(this, arguments);
                };
              })()
            );
          },
        },
      };
      e.default = s;
    },
  },
]);
