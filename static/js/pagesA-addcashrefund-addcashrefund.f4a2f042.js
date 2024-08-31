(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-addcashrefund-addcashrefund"],
  {
    "10d3": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("aedf"),
        a = i("71f9");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      i("f967");
      var s = i("f0c5"),
        c = Object(s["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "67a6fb5c",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    "2bd5": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("991d"),
        a = i("61c5");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      i("3620");
      var s = i("f0c5"),
        c = Object(s["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "6160c7d4",
          null,
          !1,
          n["a"],
          void 0
        );
      e["default"] = c.exports;
    },
    3620: function (t, e, i) {
      "use strict";
      var n = i("4a15"),
        a = i.n(n);
      a.a;
    },
    "4a15": function (t, e, i) {
      var n = i("d764");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("4563aed8", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "61c5": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("72be"),
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
    "71f9": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("78eb"),
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
    "72be": function (t, e, i) {
      "use strict";
      i("7a82");
      var n = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = n(i("6972")),
        o = {
          name: "ContactService",
          emits: ["click"],
          props: {
            height: { type: String, default: "88rpx" },
            backgroundColor: { type: String, default: "#ffffff" },
            type: { type: String, default: "column" },
            top: { type: String, default: "50%" },
          },
          data: function () {
            return { project: this.$store.state.project };
          },
          created: function () {},
          mounted: function () {},
          computed: {
            phone: function () {
              var t = "暂未开放";
              return (
                a.default.isNullOrEmpty(this.project) ||
                  a.default.isNullOrEmpty(this.project.projectswitch) ||
                  a.default.isNullOrEmpty(
                    this.project.projectswitch.customer_service
                  ) ||
                  a.default.isNullOrEmpty(
                    this.project.projectswitch.customer_service[0].phone
                  ) ||
                  (t = this.project.projectswitch.customer_service[0].phone),
                t
              );
            },
          },
          methods: {
            onClick: function () {
              this.$emit("click"), a.default.callKefu();
            },
          },
        };
      e.default = o;
    },
    "76cc": function (t, e, i) {
      var n = i("7dfb");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("4f06").default;
      a("5e5b78ca", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "78eb": function (t, e, i) {
      "use strict";
      (function (t) {
        i("7a82");
        var n = i("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var a = n(i("f07e")),
          o = n(i("c964"));
        i("7db0"),
          i("d3b7"),
          i("a9e3"),
          i("ac1f"),
          i("00b4"),
          i("a434"),
          i("14d9"),
          i("e9c4"),
          i("c975"),
          i("5319");
        var s = n(i("6972")),
          c = (n(i("5cd9")), n(i("d320")), i("fb18")),
          r = {
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                showsetalipayviewflag: !1,
                showsetabcchinaviewflag: !1,
                showclosetipflag: !1,
                showclosetiptext: "",
                showaccountinfo: { type: "", account: "" },
                inputaccount: "",
                inputname: "",
                inputmoney: "",
                titletext: "申请提现",
                submitdisabled: !1,
                loaded: !1,
              };
            },
            computed: {
              contentviewcontainerstyle: function () {
                return "height:calc(100% - ".concat(this.CustomBar, "px);");
              },
              balance: function () {
                return this.$store.getters.userCanUseBalance;
              },
              AgreementCashInterface: function () {
                return this.$store.state.project.projectswitch
                  .agreementcash_interface;
              },
              serviceContainerTop: function () {
                return "".concat(uni.upx2px(760), "px");
              },
              disableCashwithdrawDesc: function () {
                var t =
                  "当前学校提现功能暂时关闭,账户提现的开放时间段由运营商和学校制定，住理生活仅作为平台服务的提供方，如若给您带来不便,敬请谅解。";
                return (
                  s.default.isNullOrEmpty(
                    this.$store.state.project.projectswitch
                      .disable_cashwithdraw_desc
                  ) ||
                    (t =
                      this.$store.state.project.projectswitch
                        .disable_cashwithdraw_desc),
                  t
                );
              },
            },
            onLoad: function (t) {
              this.refreshuserinfo(!0);
            },
            methods: {
              controlconfirmstatus: function () {
                this.submitdisabled
                  ? (this.submitdisabled = !1)
                  : (this.submitdisabled = !0),
                  t.log(this.submitdisabled);
              },
              checkIsSetAbcAccount: function () {
                var t = {};
                if (
                  s.default.isNullOrEmpty(this.userdata.detailinfo.pay_account)
                )
                  return t;
                var e = JSON.parse(this.userdata.detailinfo.pay_account),
                  i = e.find(function (t) {
                    return "abc" == t.platform;
                  });
                return (
                  s.default.isNullOrEmpty(i) ||
                    s.default.isNullOrEmpty(i.account) ||
                    s.default.isNullOrEmpty(i.name) ||
                    ((t.account = i.account), (t.name = i.name)),
                  t
                );
              },
              submitrequestcash: function () {
                if (s.default.isNullOrEmpty(this.inputmoney))
                  uni.showToast({ title: "请输入金额", icon: "none" });
                else {
                  var t = Number(this.inputmoney);
                  if (this.balance <= 0)
                    uni.showToast({ title: "余额不足,无法提现", icon: "none" });
                  else if (t > this.balance)
                    uni.showToast({
                      title: "提现金额必须小于账户余额",
                      icon: "none",
                    });
                  else if (/^\d+(\.\d{1,2})?$/.test(t))
                    if (t < 0.1)
                      uni.showToast({
                        title: "提现金额不能小于0.1",
                        icon: "none",
                      });
                    else {
                      var e = 2;
                      "农业银行" == this.showaccountinfo.type && (e = 5),
                        uni.showLoading({ title: "正在提交中..." }),
                        s.default
                          .sendapppost(
                            this.project.server_addr +
                              s.default.API_PATH.cashRefundRequest,
                            { money: t, channel: e }
                          )
                          .then(function (t) {
                            uni.hideLoading(),
                              uni.showToast({ title: "提交成功" });
                            var e = getCurrentPages(),
                              i = e[e.length - 2];
                            "pagesA/cashrefund/cashrefund" == i.route &&
                              i.$vm.mescroll.resetUpScroll(),
                              uni.navigateBack({ delta: 1 });
                          })
                          .catch(function (t) {
                            uni.hideLoading(), s.default.showalert("提示", t);
                          });
                    }
                  else
                    uni.showToast({
                      title: "最多只能输入2位小数",
                      icon: "none",
                    });
                }
              },
              submitaccountinfo: function () {
                var t = this;
                if (s.default.isNullOrEmpty(t.inputaccount)) {
                  var e = "请输入支付宝账号";
                  return (
                    this.showsetabcchinaviewflag && (e = "请输入银行卡号"),
                    void uni.showToast({ title: e, icon: "none" })
                  );
                }
                if (s.default.isNullOrEmpty(t.inputname)) {
                  var i = "请输入姓名";
                  return (
                    this.showsetabcchinaviewflag && (i = "请输入用户名"),
                    void uni.showToast({ title: i, icon: "none" })
                  );
                }
                var n = s.default.API_PATH.setStaffAliPayAccount,
                  a = {
                    alipay_account: t.inputaccount,
                    alipay_account_real_name: t.inputname,
                  };
                if (this.showsetabcchinaviewflag) {
                  n = s.default.API_PATH.setpayaccount;
                  var o = JSON.parse(this.userdata.detailinfo.pay_account);
                  s.default.isNullOrEmpty(o) && (o = []);
                  for (var c = 0; c < o.length; c++)
                    "abc" == o[c].platform &&
                      s.default.isNullOrEmpty(o[c].account) &&
                      s.default.isNullOrEmpty(o[c].name) &&
                      o.splice(c, 1);
                  o.push({
                    platform: "abc",
                    account: t.inputaccount,
                    name: t.inputname,
                  }),
                    (a = { pay_account: JSON.stringify(o) });
                }
                uni.showLoading({ title: "正在提交中..." }),
                  s.default
                    .sendapppost(t.project.server_addr + n, a)
                    .then(function (e) {
                      uni.hideLoading(),
                        t.refreshuserinfo(),
                        (t.titletext = "申请提现"),
                        t.showsetabcchinaviewflag
                          ? (t.showaccountinfo.type = "农业银行")
                          : (t.showaccountinfo.type = "支付宝"),
                        (t.showaccountinfo.account = t.parseaccountinfo(
                          t.inputaccount,
                          t.inputname
                        )),
                        (t.showsetabcchinaviewflag = !1),
                        (t.showsetalipayviewflag = !1);
                    })
                    .catch(function (t) {
                      uni.hideLoading(), s.default.showalert("提示", t);
                    });
              },
              parseaccountinfo: function (t, e) {
                var i = "";
                if (this.showsetalipayviewflag)
                  if (-1 == t.indexOf("@"))
                    i = t.replace(t.substring(3, 7), "****") + "(";
                  else {
                    var n = t.split("@"),
                      a = "";
                    if (n[0].length > 3)
                      for (var o = 0; o < n[0].length - 3; o++) a += "*";
                    i = n[0].substr(0, 3) + a + "@" + n[1];
                  }
                else {
                  for (var s = 0; s < t.length - 4; s++) i += "*";
                  i += t.substring(t.length - 4, t.length);
                }
                return (
                  (i += "("),
                  e.length <= 3
                    ? (i += "*" + e.substring(1, e.length))
                    : e.length > 3 && e.length <= 6
                    ? (i += "**" + e.substring(2, e.length))
                    : e.length > 6 &&
                      (i +=
                        e.substring(0, 2) + "****" + e.substring(6, e.length)),
                  (i += ")"),
                  i
                );
              },
              GetAgreementCashTime: function () {
                try {
                  this.loaded = !0;
                  var e = this.project.projectswitch;
                  if (0 == this.AgreementCashInterface)
                    switch (e.agreementcash_channel) {
                      case 0:
                        (this.showaccountinfo.type = "支付宝"),
                          s.default.isNullOrEmpty(
                            this.userdata.detailinfo.alipay_account
                          ) &&
                          s.default.isNullOrEmpty(
                            this.userdata.detailinfo.alipay_account_real_name
                          )
                            ? ((this.showsetalipayviewflag = !0),
                              (this.titletext = "绑定支付宝"))
                            : (this.showaccountinfo.account =
                                this.parseaccountinfo(
                                  this.userdata.detailinfo.alipay_account,
                                  this.userdata.detailinfo
                                    .alipay_account_real_name
                                ));
                        break;
                      case 1:
                        break;
                      case 2:
                        var i = this.checkIsSetAbcAccount();
                        (this.showaccountinfo.type = "农业银行"),
                          s.default.isNullOrEmpty(i)
                            ? ((this.showsetabcchinaviewflag = !0),
                              (this.titletext = "绑定农业银行账户"))
                            : (this.showaccountinfo.account =
                                this.parseaccountinfo(i.account, i.name));
                        break;
                      default:
                        break;
                    }
                  if (1 == this.userdata.detailinfo.refundcash_whitelist)
                    return;
                  if (0 == Number(e.agreementcashtime_enable)) return;
                  var n = this.$store.getters.agreementcashTimespan,
                    a = !1;
                  if (n.length > 0)
                    for (
                      var o = new Date(),
                        r = o.getMonth() + 1,
                        u = o.getDate(),
                        l = 0;
                      l < n.length;
                      l++
                    ) {
                      if (
                        s.default.isNullOrEmpty(n[l].start) &&
                        s.default.isNullOrEmpty(n[l].end)
                      )
                        break;
                      var d = Number(n[l].start.split("-")[0]),
                        f = Number(n[l].start.split("-")[1]),
                        p = Number(n[l].end.split("-")[0]),
                        h = Number(n[l].end.split("-")[1]),
                        v = (0, c.isWithinRange)(r, u, d, f, p, h);
                      if (v) {
                        a = !0;
                        break;
                      }
                    }
                  else {
                    var g = new Date(
                        e.agreementcash_starttime.replace(/\-/g, "/")
                      ).getTime(),
                      w = new Date(
                        e.agreementcash_endtime.replace(/\-/g, "/")
                      ).getTime(),
                      m = new Date().getTime();
                    m >= g && m <= w && (a = !0);
                  }
                  if (a) return;
                  this.showclosetipflag = !0;
                  var y = "";
                  if (n.length > 0)
                    for (var b = 0; b < n.length; b++)
                      s.default.isNullOrEmpty(n[b].start) ||
                        s.default.isNullOrEmpty(n[b].end) ||
                        (y += n[b].start + "至" + n[b].end + ";");
                  else {
                    var x = new Date(
                        new Date(
                          e.agreementcash_starttime.replace(/\-/g, "/")
                        ).getTime()
                      ).Format("yyyy年MM月dd日hh时"),
                      _ = new Date(
                        new Date(
                          e.agreementcash_endtime.replace(/\-/g, "/")
                        ).getTime()
                      ).Format("yyyy年MM月dd日hh时");
                    y = x + "至" + _ + ";";
                  }
                  s.default.isNullOrEmpty(y) ||
                    (this.showclosetiptext = "开放时间为" + y);
                } catch (C) {
                  t.log(C),
                    uni.hideLoading(),
                    s.default.logger.warn(
                      "addcashrefund.vue",
                      "处理统一提现时间异常," + C,
                      "GetAgreementCashTime"
                    ),
                    (this.showclosetipflag = !0);
                }
              },
              refreshuserinfo: function () {
                var t = this;
                return (0, o.default)(
                  (0, a.default)().mark(function e() {
                    var i;
                    return (0, a.default)().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (i = t), (e.next = 3), s.default.RefreshUserinfo()
                            );
                          case 3:
                            (t.userdata = e.sent),
                              i.GetAgreementCashTime(),
                              uni.hideLoading();
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              showUserAgreement: function () {
                uni.navigateTo({
                  url: "../mp-privacy-policy/mp-privacy-policy",
                });
              },
            },
          };
        e.default = r;
      }).call(this, i("5a52")["default"]);
    },
    "7dfb": function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          ".cuIcon-roundclosefill[data-v-67a6fb5c]{\n\t/* line-height: 80upx; */font-size:%?45?%;position:absolute;right:%?20?%;top:20%;color:#d9d9d9}.add-form-group[data-v-67a6fb5c]{margin:%?30?%}.add-form-group>.title uni-text[data-v-67a6fb5c]{font-size:%?30?%;font-weight:700}.add-form-group>.content[data-v-67a6fb5c]{background-color:#f7f7f7;height:%?80?%;border-radius:%?80?%;margin-top:%?20?%}.add-form-group>.content uni-input[data-v-67a6fb5c]{height:100%;line-height:1;border-radius:%?80?%;padding-left:%?30?%;background-color:#f7f7f7}.item-title[data-v-67a6fb5c]{min-width:%?150?%}.text-gray[data-v-67a6fb5c]{line-height:%?50?%}.tip-text-view[data-v-67a6fb5c]{color:#6f6f6f;line-height:%?60?%;margin:%?40?%;font-size:%?28?%}.account-info-text[data-v-67a6fb5c]{position:absolute;right:%?10?%;top:%?5?%;max-width:45%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:%?24?%!important}.content-tip[data-v-67a6fb5c]{margin-top:%?60?%}.submit-container[data-v-67a6fb5c]{position:fixed;bottom:10px;width:100%}.submit-tip-container[data-v-67a6fb5c]{display:flex;align-items:center;justify-content:space-between;margin:%?40?%;font-size:%?28?%}.requestcashview[data-v-67a6fb5c]{background-color:#f4f4f4;height:100%}.cash-type-container[data-v-67a6fb5c]{padding:%?40?% %?30?%;background-color:#fff;margin:0;position:relative;top:%?40?%}.cash-type-container>.title[data-v-67a6fb5c]{font-size:%?30?%;align-items:center;justify-content:center;position:relative}",
          "",
        ]),
        (t.exports = e);
    },
    "991d": function (t, e, i) {
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
            [
              "column" == t.type
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "column-container",
                      style: [
                        { "background-color": t.backgroundColor },
                        { top: t.top },
                      ],
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.onClick.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "column-icon-container" },
                        [
                          i("v-uni-image", {
                            attrs: { src: "/static/imgs/contact_service.png" },
                          }),
                        ],
                        1
                      ),
                      i("v-uni-view", { staticClass: "text-container" }, [
                        t._v("联系"),
                        i("br"),
                        t._v("客服"),
                      ]),
                    ],
                    1
                  )
                : i(
                    "v-uni-view",
                    {
                      staticClass: "row-container",
                      style: [{ top: t.top }],
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.onClick.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "row-icon-container" },
                        [
                          i("v-uni-image", {
                            attrs: { src: "/static/imgs/contact_service.png" },
                          }),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "text-container",
                          staticStyle: {
                            "writing-mode": "vertical-lr",
                            "text-orientation": "upright",
                          },
                        },
                        [t._v("联系客服")]
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
    aedf: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return o;
        }),
        i.d(e, "a", function () {
          return n;
        });
      var n = { contactService: i("2bd5").default },
        a = function () {
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
                "v-uni-view",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.loaded,
                      expression: "loaded",
                    },
                  ],
                  staticClass: "content-container",
                  style: t.contentviewcontainerstyle,
                },
                [
                  t.showsetalipayviewflag || t.showsetabcchinaviewflag
                    ? i(
                        "v-uni-view",
                        {
                          staticClass: "setalipayinfoview",
                          staticStyle: {
                            "overflow-y": "scroll",
                            height: "100%",
                          },
                        },
                        [
                          t.showsetalipayviewflag
                            ? i(
                                "v-uni-view",
                                [
                                  i(
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
                                          i("v-uni-text", [
                                            t._v("支付宝收款账号"),
                                          ]),
                                          i(
                                            "v-uni-text",
                                            {
                                              staticClass: "warin-text",
                                              staticStyle: {
                                                "margin-left": "20upx",
                                                "font-size": "24upx",
                                              },
                                            },
                                            [t._v("(支持邮箱和手机号格式)")]
                                          ),
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
                                            staticStyle: {
                                              "margin-right": "80upx",
                                            },
                                            attrs: {
                                              placeholder: "请输入账号",
                                              "placeholder-style":
                                                "line-height:80upx;",
                                              name: "input",
                                            },
                                            model: {
                                              value: t.inputaccount,
                                              callback: function (e) {
                                                t.inputaccount = e;
                                              },
                                              expression: "inputaccount",
                                            },
                                          }),
                                          t.inputaccount
                                            ? i("v-uni-text", {
                                                staticClass:
                                                  "cuIcon-roundclosefill",
                                                on: {
                                                  click: function (e) {
                                                    e.stopPropagation(),
                                                      (arguments[0] = e =
                                                        t.$handleEvent(e)),
                                                      (t.inputaccount = "");
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
                                  i(
                                    "v-uni-view",
                                    { staticClass: "add-form-group" },
                                    [
                                      i(
                                        "v-uni-view",
                                        { staticClass: "title" },
                                        [
                                          i("v-uni-text", [
                                            t._v("支付宝实名认证姓名"),
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
                                            staticStyle: {
                                              "margin-right": "80upx",
                                            },
                                            attrs: {
                                              placeholder: "请输入姓名",
                                              "placeholder-style":
                                                "line-height:80upx",
                                              name: "input",
                                            },
                                            model: {
                                              value: t.inputname,
                                              callback: function (e) {
                                                t.inputname = e;
                                              },
                                              expression: "inputname",
                                            },
                                          }),
                                          t.inputname
                                            ? i("v-uni-text", {
                                                staticClass:
                                                  "cuIcon-roundclosefill",
                                                on: {
                                                  click: function (e) {
                                                    e.stopPropagation(),
                                                      (arguments[0] = e =
                                                        t.$handleEvent(e)),
                                                      (t.inputname = "");
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
                                ],
                                1
                              )
                            : t._e(),
                          t.showsetabcchinaviewflag
                            ? i(
                                "v-uni-view",
                                [
                                  i(
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
                                          i("v-uni-text", [
                                            t._v("农业银行卡号"),
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
                                            staticStyle: {
                                              "margin-right": "80upx",
                                            },
                                            attrs: {
                                              placeholder: "请输入银行卡号",
                                              type: "number",
                                              "placeholder-style":
                                                "line-height:80upx;",
                                              name: "input",
                                            },
                                            model: {
                                              value: t.inputaccount,
                                              callback: function (e) {
                                                t.inputaccount = e;
                                              },
                                              expression: "inputaccount",
                                            },
                                          }),
                                          t.inputaccount
                                            ? i("v-uni-text", {
                                                staticClass:
                                                  "cuIcon-roundclosefill",
                                                on: {
                                                  click: function (e) {
                                                    e.stopPropagation(),
                                                      (arguments[0] = e =
                                                        t.$handleEvent(e)),
                                                      (t.inputaccount = "");
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
                                  i(
                                    "v-uni-view",
                                    { staticClass: "add-form-group" },
                                    [
                                      i(
                                        "v-uni-view",
                                        { staticClass: "title" },
                                        [i("v-uni-text", [t._v("农行用户名")])],
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
                                            staticStyle: {
                                              "margin-right": "80upx",
                                            },
                                            attrs: {
                                              placeholder: "请输入用户名",
                                              "placeholder-style":
                                                "line-height:80upx",
                                              name: "input",
                                            },
                                            model: {
                                              value: t.inputname,
                                              callback: function (e) {
                                                t.inputname = e;
                                              },
                                              expression: "inputname",
                                            },
                                          }),
                                          t.inputname
                                            ? i("v-uni-text", {
                                                staticClass:
                                                  "cuIcon-roundclosefill",
                                                on: {
                                                  click: function (e) {
                                                    e.stopPropagation(),
                                                      (arguments[0] = e =
                                                        t.$handleEvent(e)),
                                                      (t.inputname = "");
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
                                ],
                                1
                              )
                            : t._e(),
                          i("v-uni-view", {
                            staticStyle: {
                              height: "20upx",
                              "background-color": "#f7f7f7",
                              "margin-top": "60upx",
                            },
                          }),
                          i(
                            "v-uni-view",
                            { staticClass: "tip-text-view" },
                            [
                              i("v-uni-text", { staticClass: "warin-text" }, [
                                t._v("注意："),
                              ]),
                              t._v(
                                "请如实填写" +
                                  t._s(t.showaccountinfo.type) +
                                  "实名认证信息，以避免出现提现资金无法准确到达账户的情况"
                              ),
                              i("br"),
                              i("v-uni-text", { staticClass: "warin-text" }, [
                                t._v(
                                  "*" +
                                    t._s(t.showaccountinfo.type) +
                                    "账户设置后无法修改，如需修改请联系管理员"
                                ),
                              ]),
                              i("br"),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "submit-container" },
                            [
                              i(
                                "v-uni-view",
                                { staticStyle: { margin: "40upx 30upx" } },
                                [
                                  i(
                                    "v-uni-button",
                                    {
                                      staticClass: "confirm-btn",
                                      staticStyle: { "font-size": "32upx" },
                                      attrs: {
                                        type: "primary",
                                        disabled: t.submitdisabled,
                                      },
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.submitaccountinfo.apply(
                                              void 0,
                                              arguments
                                            );
                                        },
                                      },
                                    },
                                    [t._v("保存")]
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
                    : i(
                        "v-uni-view",
                        { staticClass: "requestcashview" },
                        [
                          t.showclosetipflag
                            ? i(
                                "v-uni-view",
                                {
                                  staticStyle: {
                                    "text-align": "center",
                                    padding: "50upx",
                                  },
                                },
                                [
                                  i("v-uni-image", {
                                    staticStyle: {
                                      width: "280upx",
                                      height: "280upx",
                                    },
                                    attrs: {
                                      src: "/static/wenju-mescroll/mescroll-empty.png",
                                    },
                                  }),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "text-gray" },
                                    [t._v(t._s(t.disableCashwithdrawDesc))]
                                  ),
                                  i(
                                    "v-uni-view",
                                    {
                                      staticClass: "text-gray",
                                      staticStyle: { "font-size": "24upx" },
                                    },
                                    [t._v(t._s(t.showclosetiptext))]
                                  ),
                                  i("v-uni-view", {
                                    staticClass: "text-gray",
                                    staticStyle: { "font-size": "24upx" },
                                  }),
                                ],
                                1
                              )
                            : i(
                                "v-uni-view",
                                [
                                  i(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "add-form-group cash-type-container",
                                    },
                                    [
                                      1 == t.AgreementCashInterface
                                        ? i(
                                            "v-uni-view",
                                            { staticClass: "title" },
                                            [
                                              i("v-uni-text", [
                                                t._v("提现方式："),
                                              ]),
                                              i(
                                                "v-uni-text",
                                                {
                                                  staticStyle: {
                                                    "margin-left": "10upx",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "充值退款(原支付方式退回)"
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          )
                                        : i(
                                            "v-uni-view",
                                            { staticClass: "title" },
                                            [
                                              i("v-uni-text", [
                                                t._v("提现方式："),
                                              ]),
                                              "支付宝" == t.showaccountinfo.type
                                                ? i("v-uni-image", {
                                                    staticStyle: {
                                                      width: "30upx",
                                                      height: "30upx",
                                                      top: "5upx",
                                                    },
                                                    attrs: {
                                                      src: "/static/alipay_icon.png",
                                                    },
                                                  })
                                                : i("v-uni-image", {
                                                    staticStyle: {
                                                      width: "30upx",
                                                      height: "30upx",
                                                      top: "5upx",
                                                    },
                                                    attrs: {
                                                      src: "/static/ABCChina.png",
                                                    },
                                                  }),
                                              i(
                                                "v-uni-text",
                                                {
                                                  staticStyle: {
                                                    "margin-left": "10upx",
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.showaccountinfo.type
                                                    ) + "转账"
                                                  ),
                                                ]
                                              ),
                                              i(
                                                "v-uni-text",
                                                {
                                                  staticClass:
                                                    "account-info-text",
                                                },
                                                [
                                                  t._v(
                                                    t._s(
                                                      t.showaccountinfo.account
                                                    )
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    {
                                      staticClass: "add-form-group",
                                      staticStyle: {
                                        padding: "20upx 30upx",
                                        "background-color": "white",
                                        margin: "0",
                                        "margin-top": "80upx",
                                      },
                                    },
                                    [
                                      i(
                                        "v-uni-view",
                                        { staticClass: "title" },
                                        [
                                          i("v-uni-text", [
                                            t._v("提现金额(单位:元)"),
                                          ]),
                                        ],
                                        1
                                      ),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "content",
                                          staticStyle: {
                                            "background-color": "white",
                                            height: "100upx",
                                            "border-radius": "0px",
                                            "margin-top": "20upx",
                                            display: "flex",
                                            "align-items": "center",
                                            "justify-content": "center",
                                            position: "relative",
                                          },
                                        },
                                        [
                                          i(
                                            "v-uni-text",
                                            {
                                              staticStyle: {
                                                "font-size": "60upx",
                                              },
                                            },
                                            [t._v("￥")]
                                          ),
                                          i("v-uni-input", {
                                            staticStyle: {
                                              "background-color": "white",
                                              width: "100%",
                                              "border-radius": "0px",
                                              "padding-left": "0",
                                              "font-size": "60upx",
                                              "margin-right": "100upx",
                                            },
                                            attrs: {
                                              name: "input",
                                              type: "digit",
                                            },
                                            model: {
                                              value: t.inputmoney,
                                              callback: function (e) {
                                                t.inputmoney = e;
                                              },
                                              expression: "inputmoney",
                                            },
                                          }),
                                          t.inputmoney
                                            ? i("v-uni-text", {
                                                staticClass:
                                                  "cuIcon-roundclosefill",
                                                staticStyle: {
                                                  color: "#d9d9d9",
                                                  "font-size": "40upx",
                                                  margin: "0 20upx",
                                                  top: "40upx",
                                                },
                                                on: {
                                                  click: function (e) {
                                                    e.stopPropagation(),
                                                      (arguments[0] = e =
                                                        t.$handleEvent(e)),
                                                      (t.inputmoney = "");
                                                  },
                                                },
                                              })
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticStyle: {
                                            "font-size": "24upx",
                                            "padding-top": "20upx",
                                          },
                                        },
                                        [
                                          i(
                                            "v-uni-text",
                                            {
                                              staticStyle: {
                                                color: "#aaaaaa",
                                                "font-size": "28upx",
                                              },
                                            },
                                            [
                                              t._v(
                                                "可用余额" +
                                                  t._s(t.balance) +
                                                  "元"
                                              ),
                                            ]
                                          ),
                                          i(
                                            "v-uni-text",
                                            {
                                              staticStyle: {
                                                color: "#32B1FE",
                                                float: "right",
                                                "font-size": "28upx",
                                              },
                                              on: {
                                                click: function (e) {
                                                  (arguments[0] = e =
                                                    t.$handleEvent(e)),
                                                    (t.inputmoney = t.balance);
                                                },
                                              },
                                            },
                                            [t._v("全部提现")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    {
                                      staticStyle: {
                                        margin: "20px 15px",
                                        "margin-top": "80upx",
                                      },
                                    },
                                    [
                                      i(
                                        "v-uni-button",
                                        {
                                          staticClass: "confirm-btn",
                                          attrs: { type: "primary" },
                                          on: {
                                            click: function (e) {
                                              (arguments[0] = e =
                                                t.$handleEvent(e)),
                                                t.submitrequestcash.apply(
                                                  void 0,
                                                  arguments
                                                );
                                            },
                                          },
                                        },
                                        [t._v("提现")]
                                      ),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "content-tip" },
                                    [
                                      i(
                                        "v-uni-view",
                                        {
                                          staticStyle: {
                                            "font-weight": "bold",
                                            "font-size": "16px",
                                          },
                                        },
                                        [t._v("提现说明")]
                                      ),
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "content-tip-text",
                                          staticStyle: {
                                            "margin-top": "20upx",
                                          },
                                        },
                                        [
                                          t._v(
                                            "1.申请金额在处理完成前将会被冻结;"
                                          ),
                                          i("br"),
                                          t._v(
                                            "2.提现成功金额将转至你的" +
                                              t._s(t.showaccountinfo.type) +
                                              "账户、充值订单原支付方式退款或者管理员线下人工处理,否则将退还至你的账户;"
                                          ),
                                          i("br"),
                                          t._v(
                                            "3.提现到账的周期由运营商和学校制定，住理生活仅作为平台服务的提供方，如有疑问请详询学校管理员。"
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
              ),
              i("contact-service", {
                attrs: { type: "row", top: t.serviceContainerTop },
              }),
            ],
            1
          );
        },
        o = [];
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
                c = atob(t[1]),
                r = c.length,
                u = new Uint8Array(r);
              while (r--) u[r] = c.charCodeAt(r);
              return e(
                (window.URL || window.webkitURL).createObjectURL(
                  new Blob([u], { type: n })
                )
              );
            }
            var l = t.split(",")[0].match(/data\:\S+\/(\S+);/);
            l ? (l = l[1]) : i(new Error("base64 error"));
            var d =
              (function () {
                return Date.now() + String(s++);
              })() +
              "." +
              l;
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
                f = wx.env.USER_DATA_PATH + "/" + d;
                wx.getFileSystemManager().writeFile({
                  filePath: f,
                  data: o(t),
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
              var f = "_doc/uniapp_temp/" + d;
              if (
                !(function (t, e) {
                  for (
                    var i = t.split("."), n = e.split("."), a = !1, o = 0;
                    o < n.length;
                    o++
                  ) {
                    var s = i[o] - n[o];
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
                          d,
                          { create: !0, exclusive: !1 },
                          function (n) {
                            n.createWriter(function (n) {
                              (n.onwrite = function () {
                                e(f);
                              }),
                                (n.onerror = i),
                                n.seek(0),
                                n.writeAsBinary(o(t));
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
              var p = new plus.nativeObj.Bitmap(d);
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
              var o = document.createElement("canvas"),
                s = o.getContext("2d"),
                c = new Image();
              return (
                (c.onload = function () {
                  (o.width = c.width),
                    (o.height = c.height),
                    s.drawImage(c, 0, 0),
                    e(o.toDataURL()),
                    (o.height = o.width = 0);
                }),
                (c.onerror = i),
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
      function o(t) {
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
    d764: function (t, e, i) {
      var n = i("24fb");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.column-container[data-v-6160c7d4]{width:%?220?%;height:%?120?%;position:fixed;border-top-left-radius:%?30?%;border-bottom-left-radius:%?30?%;display:flex;align-items:center;justify-content:space-between;right:0;top:50%;padding:0 %?40?% 0 %?20?%;z-index:15}.column-icon-container[data-v-6160c7d4]{width:%?80?%;height:%?80?%}.column-icon-container uni-image[data-v-6160c7d4]{width:100%;height:100%}.row-container[data-v-6160c7d4]{width:%?70?%;height:%?200?%;background-image:linear-gradient(180deg,#d0dcff,#d1f4fe);position:fixed;border-top-left-radius:%?30?%;border-bottom-left-radius:%?30?%;display:flex;flex-flow:column;align-items:center;justify-content:space-between;right:0;padding:%?20?% 0 %?20?% 0;z-index:15}.row-icon-container[data-v-6160c7d4]{width:%?40?%;height:%?40?%}.row-icon-container uni-image[data-v-6160c7d4]{width:100%;height:100%}',
          "",
        ]),
        (t.exports = e);
    },
    f967: function (t, e, i) {
      "use strict";
      var n = i("76cc"),
        a = i.n(n);
      a.a;
    },
  },
]);
