(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-userinfo-userinfo"],
  {
    "03b9": function (t, e, i) {
      "use strict";
      var n = i("2999"),
        a = i.n(n);
      a.a;
    },
    "06d0": function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          ".tip-top[data-v-271b4c98]{padding:%?20?%;font-size:%?30?%;line-height:%?40?%;color:#c7c7cc}.tip-bottom[data-v-271b4c98]{padding:%?20?%;font-size:%?30?%;line-height:%?40?%;color:#909090;line-height:%?50?%}.add-form-group[data-v-271b4c98]{margin:%?30?%}.add-form-group>.title uni-text[data-v-271b4c98]{font-size:%?30?%;font-weight:700}.add-form-group>.content[data-v-271b4c98]{background-color:#f7f7f7;height:%?100?%;border-radius:%?80?%;margin-top:%?20?%}.add-form-group>.content uni-input[data-v-271b4c98]{width:100%;height:100%;line-height:1;border-radius:%?80?%;padding:%?0?% %?40?%;background-color:#fff!important}.action-icon[data-v-271b4c98]{font-size:%?40?%;position:absolute;right:%?30?%;top:%?25?%;color:#d9d9d9}.sex-icon-container[data-v-271b4c98]{width:50%;display:flex;align-items:center;justify-content:center}.sex-icon[data-v-271b4c98]{color:#d9d9d9;font-size:20px;border:1px solid #d5d5d5;\n\t/*鸿蒙OS border-radius 只支持px单位*/border-radius:%?40?%;padding:%?8?% %?10?%;margin-right:%?20?%}.sex-nan-icon-selected[data-v-271b4c98]{color:#fff!important;background-color:#32b1fe!important;border:1px solid #32b1fe!important}.sex-nv-icon-selected[data-v-271b4c98]{color:#fff!important;background-color:pink!important;border:1px solid pink!important}.content-text[data-v-271b4c98]{line-height:%?100?%;height:100%;border-radius:%?80?%;padding:0 %?60?% 0 %?40?%;background-color:#fff!important;word-break:break-all;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.change-image-container[data-v-271b4c98]{position:absolute;right:%?30?%;top:%?25?%;height:%?50?%;width:%?50?%}",
          "",
        ]),
        (t.exports = e);
    },
    "15d2": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("7d06"),
        a = i.n(n);
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      e["default"] = a.a;
    },
    2999: function (t, e, i) {
      var n = i("06d0");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("78ce1412", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "7d06": function (t, e, i) {
      "use strict";
      i("7a82");
      var n = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("d3b7"),
        i("14d9"),
        i("e9c4");
      var a = n(i("f3f3")),
        o = n(i("f07e")),
        s = n(i("c964")),
        r = n(i("6972")),
        c = {
          components: {},
          onLoad: function (t) {
            if (
              ((this.SceneType = t.scenetype),
              !r.default.isNullOrEmpty(this.userdata))
            )
              try {
                (this.userphone =
                  this.userdata.phone || this.userdata.detailinfo.phone),
                  "active" == this.SceneType &&
                    ((this.selectedsex = this.userdata.detailinfo.sex),
                    (this.selectbuildinfo.buildingname =
                      this.userdata.detailinfo.building_name),
                    (this.selectbuildinfo.floorname =
                      this.userdata.detailinfo.floor_name),
                    (this.selectbuildinfo.roomname =
                      this.userdata.detailinfo.room_name),
                    (this.selectbuildinfo.buildingid =
                      this.userdata.detailinfo.building_id),
                    (this.selectbuildinfo.floorid =
                      this.userdata.detailinfo.floor_id),
                    (this.selectbuildinfo.roomid =
                      this.userdata.detailinfo.room_id)),
                  this.calcattrlist();
              } catch (e) {}
            if (t.jumpTo)
              switch (t.jumpTo) {
                case "consume":
                  t.device_id &&
                    (this.jumpPageOptions = {
                      jumpTo: t.jumpTo,
                      device_id: t.device_id,
                    });
                  break;
                default:
                  break;
              }
            this.SceneType;
          },
          onBackPress: function (t) {
            return (
              "active" != this.SceneType &&
              (uni.showToast({
                title: "请填写个人信息",
                icon: "none",
                duration: 2e3,
              }),
              !0)
            );
          },
          data: function () {
            return {
              userdata: this.$store.state.user,
              project: this.$store.state.project,
              appconfig: this.$store.state.project.projectswitch,
              userphone: "",
              selectedsex: "0",
              selectbuildinfo: {
                buildingid: "00000000-0000-0000-0000-000000000000",
                buildingname: "",
                floorid: "00000000-0000-0000-0000-000000000000",
                floorname: "",
                roomid: "00000000-0000-0000-0000-000000000000",
                roomname: "",
              },
              SceneType: "",
              attrList: [],
              jumpPageOptions: {},
            };
          },
          computed: {
            showtext: function () {
              var t = "请选择宿舍";
              return (
                r.default.isNullOrEmpty(this.selectbuildinfo.buildingname) ||
                  r.default.isNullOrEmpty(this.selectbuildinfo.floorname) ||
                  r.default.isNullOrEmpty(this.selectbuildinfo.roomname) ||
                  (t = r.default.getBuildingInfo(
                    this.selectbuildinfo.buildingname,
                    this.selectbuildinfo.floorname,
                    this.selectbuildinfo.roomname
                  )),
                t
              );
            },
            projectInfo: function () {
              return this.$store.state.project || {};
            },
            recordAddress: function () {
              var t = this.projectInfo.projectswitch || {};
              return 1 === t.record_address;
            },
            third_part_account_type: function () {
              var t = "DEFAULT";
              return (
                r.default.isNullOrEmpty(this.appconfig) ||
                  r.default.isNullOrEmpty(
                    this.appconfig.third_part_account_type
                  ) ||
                  (t = this.appconfig.third_part_account_type),
                t
              );
            },
          },
          methods: {
            clickBind: function () {
              var t = this;
              return (0, s.default)(
                (0, o.default)().mark(function e() {
                  var i;
                  return (0, o.default)().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (i = t),
                            e.abrupt(
                              "return",
                              new Promise(function (t, e) {
                                r.default
                                  .sendapppost(
                                    i.project.server_addr +
                                      r.default.API_PATH.ThirdPartBindCard,
                                    { staff_id: i.userdata.id }
                                  )
                                  .then(function (e) {
                                    uni.hideLoading(), t(e);
                                  })
                                  .catch(function (t) {
                                    uni.hideLoading(), e(t);
                                  });
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            controlsexselect: function (t) {
              this.selectedsex != t && (this.selectedsex = t);
            },
            calcattrlist: function () {
              var t = [];
              if (this.appconfig && this.appconfig.staff_attribute_defined) {
                var e = JSON.parse(this.appconfig.staff_attribute_defined),
                  i = {};
                r.default.isNullOrEmpty(this.userdata.detailinfo) ||
                  (i = this.userdata.detailinfo.extends);
                for (var n = 0; n < e.length; n++) {
                  var a = !1;
                  if (i)
                    for (var o = 0; o < i.length; o++)
                      if (i[o].name == e[n].name) {
                        (a = !0),
                          t.push({
                            name: e[n].name,
                            value: i[o].value,
                            require: e[n].require,
                            placeholder: "请输入" + e[n].name,
                          });
                        break;
                      }
                  a ||
                    t.push({
                      name: e[n].name,
                      value: "",
                      require: e[n].require,
                      placeholder: "请输入" + e[n].name,
                    });
                }
              }
              (this.attrList = t), this.$forceUpdate();
            },
            openselectview: function () {
              uni.navigateTo({
                url: "../selectbuilding/selectbuilding?launchtype=buildinginfo",
              });
            },
            submit: function () {
              var t = this;
              if ("0" == this.selectedsex)
                return uni.showToast({
                  title: "请选择性别",
                  position: "center",
                  icon: "none",
                });
              for (var e = 0; e < this.attrList.length; e++)
                if (
                  this.attrList[e].require &&
                  r.default.isNullOrEmpty(this.attrList[e].value)
                )
                  return void uni.showToast({
                    title: "请输入" + this.attrList[e].name,
                    position: "center",
                    icon: "none",
                  });
              if (
                this.recordAddress &&
                (r.default.isNullOrEmpty(this.selectbuildinfo.buildingname) ||
                  r.default.isNullOrEmpty(this.selectbuildinfo.floorname) ||
                  r.default.isNullOrEmpty(this.selectbuildinfo.roomname))
              )
                return uni.showToast({
                  title: "请选择宿舍信息",
                  position: "center",
                  icon: "none",
                });
              r.default.showloading("提交中...");
              var i = this.userdata.detailinfo.name,
                n = {
                  name: i,
                  sex: this.selectedsex,
                  phone: this.userphone,
                  building_id: this.selectbuildinfo.buildingid,
                  floor_id: this.selectbuildinfo.floorid,
                  room_id: this.selectbuildinfo.roomid,
                  extends: JSON.stringify(this.attrList),
                };
              r.default
                .sendauthget(
                  r.default.DOMAIN_AUTH_SERVER_ADDR +
                    "webapi/" +
                    r.default.API_PATH.edituserinfo,
                  n
                )
                .then(
                  (function () {
                    var e = (0, s.default)(
                      (0, o.default)().mark(function e(i) {
                        return (0, o.default)().wrap(
                          function (e) {
                            while (1)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ((uni.hideLoading(), !i)) {
                                    e.next = 14;
                                    break;
                                  }
                                  if (
                                    (uni.showToast({ title: "填写完成" }),
                                    "shanghaijianqiao" !==
                                      t.third_part_account_type ||
                                      !r.default.isNullOrEmpty(
                                        t.userdata.detailinfo.code
                                      ))
                                  ) {
                                    e.next = 13;
                                    break;
                                  }
                                  return (
                                    (e.prev = 4), (e.next = 7), t.clickBind()
                                  );
                                case 7:
                                  e.next = 13;
                                  break;
                                case 9:
                                  return (
                                    (e.prev = 9),
                                    (e.t0 = e["catch"](4)),
                                    r.default.showalert("提示", e.t0),
                                    e.abrupt("return")
                                  );
                                case 13:
                                  return e.abrupt(
                                    "return",
                                    setTimeout(function () {
                                      "active" == t.SceneType
                                        ? uni.navigateBack({ delta: 1 })
                                        : t.toPage({
                                            url: "/pages/index/index",
                                            params: (0, a.default)(
                                              {},
                                              t.jumpPageOptions
                                            ),
                                            type: "relaunch",
                                          });
                                    }, 1e3)
                                  );
                                case 14:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[4, 9]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                )
                .catch(function (t) {
                  uni.hideLoading(), r.default.showalert("提示", t);
                });
            },
            ResetUserPhone: function () {
              var t = this;
              r.default.showalert(
                "提示",
                "确定要重新绑定手机号吗?",
                null,
                function () {
                  var e =
                    "/pages/wxlogin/wxlogin?launch_type=bind_phone&auth_id=".concat(
                      t.userdata.authid
                    );
                  uni.navigateTo({ url: e });
                },
                !0
              );
            },
          },
        };
      e.default = c;
    },
    b9808: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return a;
        }),
        i.d(e, "a", function () {});
      var n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              staticStyle: {
                "min-height": "100%",
                "background-color": "#F7F7F7",
              },
            },
            [
              i(
                "cu-custom",
                {
                  attrs: {
                    bgColor: "titleview",
                    isBack: "active" == t.SceneType,
                  },
                },
                [
                  i(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("个人信息")]
                  ),
                ],
                2
              ),
              i(
                "v-uni-view",
                { staticClass: "from-content" },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "add-form-group" },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "title" },
                        [i("v-uni-text", [t._v("手 机 号")])],
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "content",
                          staticStyle: { position: "relative" },
                        },
                        [
                          i("v-uni-view", { staticClass: "content-text" }, [
                            t._v(t._s(t.userphone)),
                          ]),
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
                        [i("v-uni-text", [t._v("性  别")])],
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "content",
                          staticStyle: {
                            position: "relative",
                            display: "flex",
                            "background-color": "white",
                          },
                        },
                        [
                          i(
                            "v-uni-view",
                            {
                              staticClass: "sex-icon-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    1 == t.selectedsex
                                      ? (t.selectedsex = 0)
                                      : (t.selectedsex = 1);
                                },
                              },
                            },
                            [
                              i("v-uni-text", {
                                staticClass: "iconfont iconnan sex-icon",
                                class:
                                  1 == t.selectedsex
                                    ? "sex-nan-icon-selected"
                                    : "",
                              }),
                              i("v-uni-text", [t._v("男")]),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "sex-icon-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    2 == t.selectedsex
                                      ? (t.selectedsex = 0)
                                      : (t.selectedsex = 2);
                                },
                              },
                            },
                            [
                              i("v-uni-text", {
                                staticClass: "iconfont iconnv sex-icon",
                                class:
                                  2 == t.selectedsex
                                    ? "sex-nv-icon-selected"
                                    : "",
                              }),
                              i("v-uni-text", [t._v("女")]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  t._l(t.attrList, function (e) {
                    return i(
                      "v-uni-view",
                      { staticClass: "add-form-group" },
                      [
                        i(
                          "v-uni-view",
                          { staticClass: "title" },
                          [
                            i("v-uni-text", [t._v(t._s(e.name))]),
                            e.require
                              ? i(
                                  "v-uni-text",
                                  {
                                    staticStyle: {
                                      position: "relative",
                                      top: "5upx",
                                      color: "red",
                                      left: "10upx",
                                    },
                                  },
                                  [t._v("*")]
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
                              attrs: {
                                "placeholder-style": "line-height:80upx",
                                name: "input",
                                enableNative: !1,
                                "adjust-position": !1,
                                placeholder: e.placeholder,
                              },
                              model: {
                                value: e.value,
                                callback: function (i) {
                                  t.$set(e, "value", i);
                                },
                                expression: "item.value",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    );
                  }),
                  t.recordAddress
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
                            [i("v-uni-text", [t._v("宿舍信息")])],
                            1
                          ),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "content",
                              staticStyle: { position: "relative" },
                            },
                            [
                              i("v-uni-view", { staticClass: "content-text" }, [
                                t._v(t._s(t.showtext)),
                              ]),
                              i("v-uni-text", {
                                staticClass: "cuIcon-right action-icon",
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                ],
                2
              ),
              i(
                "v-uni-view",
                { staticStyle: { padding: "20upx" } },
                [
                  i(
                    "v-uni-button",
                    {
                      staticClass: "confirm-btn",
                      attrs: { type: "primary" },
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)), t.submit();
                        },
                      },
                    },
                    [t._v("确认提交")]
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
    ba3d: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("b9808"),
        a = i("15d2");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      i("03b9");
      var s = i("f0c5"),
        r = Object(s["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "271b4c98",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = r.exports;
    },
  },
]);
