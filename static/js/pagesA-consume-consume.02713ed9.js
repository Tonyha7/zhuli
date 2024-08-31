(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-consume-consume"],
  {
    "1c6b": function (e, t, n) {
      e.exports = n.p + "static/img/setting.54b51164.svg";
    },
    "31f7": function (e, t, n) {
      e.exports = n.p + "static/img/desk.0c346ae9.svg";
    },
    4246: function (e, t, n) {
      var i = n("4e92");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
      var a = n("4f06").default;
      a("49e1f03b", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "45d6": function (e, t, n) {
      e.exports = n.p + "pagesA/static/xixie-mode-5.png";
    },
    "4e92": function (e, t, n) {
      var i = n("24fb");
      (t = i(!1)),
        t.push([
          e.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pointout[data-v-6b33266c]{position:fixed;right:%?30?%;z-index:999;display:flex;align-items:center;opacity:.99;-webkit-animation:opacity .9s linear infinite;animation:opacity .9s linear infinite;padding:%?10?% %?20?%;box-sizing:border-box;border-radius:%?16?%}.pointout .pleasetitle[data-v-6b33266c]{z-index:2;max-width:%?500?%;font-size:%?30?%;color:#fff}.pointout .closeimg[data-v-6b33266c]{width:%?36?%;height:%?36?%;margin-left:%?12?%}.pointout .pleaseposi[data-v-6b33266c]{position:absolute;right:%?95?%;top:%?-8?%;width:%?20?%;height:%?20?%;background:#dfdfdf;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.hidcls[data-v-6b33266c]{opacity:0;display:none}',
          "",
        ]),
        (e.exports = t);
    },
    "597c3": function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("6af9"),
        a = n.n(i);
      for (var s in i)
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return i[e];
            });
          })(s);
      t["default"] = a.a;
    },
    "5c22": function (e, t, n) {
      "use strict";
      (function (e) {
        n("7a82");
        var i = n("ee27").default;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var a = i(n("f07e")),
          s = i(n("c964")),
          o = i(n("0122")),
          r = i(n("f3f3"));
        n("ac1f"),
          n("5319"),
          n("a9e3"),
          n("7db0"),
          n("d3b7"),
          n("14d9"),
          n("e25e"),
          n("d401"),
          n("25f0"),
          n("c975"),
          n("e9c4"),
          n("99af"),
          n("acd8"),
          n("4de4");
        var c = i(n("6972")),
          l = i(n("5cd9")),
          u = i(n("fea5")),
          d = (i(n("040a")), n("f1cf")),
          f = i(n("db98")),
          h = n("05fe"),
          m = (n("f5cd"), n("1db8")),
          g = "",
          v = {
            components: { addtodesktop: f.default },
            data: function () {
              return {
                CustomBar: this.CustomBar,
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                CONSUMEVALUE: "",
                CONSUMEMONEY: "",
                dev: {},
                rules: [],
                btnstatusobj: {
                  startconsumedisplayflag: !0,
                  startconsumebtntip: "点击输入设备号",
                  startconsumeaction: "select_dev",
                  startconsumebtndisbaled: !1,
                  endconsumedisplayflag: !1,
                  endconsumetypeflag: !1,
                },
                modebtnflag: !0,
                selectmodalconfig: {
                  showmodalflag: !1,
                  showmodaltitle: "",
                  xiyiBarrelCleanEnable: 0,
                  xixieBarrelCleanEnable: 0,
                  xiyiFactoryType: "",
                  xiyiOriginalChargeRule: [],
                  xiyiSelectWorkerFlag: !1,
                  xiyiWorkerBaseModeSelected: {},
                  xiyiWorkerTemperatureSelected: {},
                  xiyiWorkerRinseSelected: [],
                  xiyiWorkerRinseContent: [{ name: "超净漂洗", disable: !0 }],
                  xiyiWorkerTemperatureContent: [
                    { name: "40度", disable: !0 },
                    { name: "60度", disable: !0 },
                  ],
                  xiyiBarrelCleanUseSwitch: !1,
                  xixieBarrelCleanUseSwitch: !1,
                  chuifengfixedvalueenable: 0,
                  hongganfixedvalueenable: 0,
                  hongganOriginalChargeRule: [],
                  modalchuifengcontent: [],
                  modalxiyicontent: [],
                  modalhonggancontent: [],
                  modalxixiecontent: [],
                },
                consumestyleconfig: {
                  viewimg: "",
                  bgimgurl: "",
                  changeimg: "",
                  titletext: "消费",
                  themecolor: "",
                  bgcolor: "",
                  pageurl: "pages/consume/consume-xiyu",
                },
                showinputmodalflag: !1,
                inputidtext: "",
                noticemodal: {
                  modalflag: !1,
                  showflag: !1,
                  htmlstr: "",
                  noticearr: [],
                },
                CONSUMETYPE: "",
                DEV_NETMODULE: [],
                DEV_NETTYPE: null,
                CURRENT_CONSUME_ORDER: null,
                twoconnected: !1,
                ACTFLAG: "consume",
                refreshdowndisconndeviceinterval: null,
                bledevisncountdown: 25,
                getorderstatusinterval: null,
                getorderstatusintcount: 0,
                FixValueConsumeModel: null,
                IsDryerProperCorrectTime: { flag: !1, text: "" },
                IsNeedOtherNetworkConnect: !1,
                LoadOption: null,
                IsNeedOtherNetworkEndConsume: !1,
                OauthLogin: {
                  isScanConsume: !1,
                  show: !1,
                  code: "",
                  EncryptedPhoneData: "",
                  EncryptedPhoneDataIv: "",
                  userinfo: {},
                },
                PayOrderData: {},
                colors: "#eb2a53",
                iconList: [
                  { name: "首页", icon: n("e534") },
                  { name: "客服", icon: n("671c") },
                  { name: "桌面", icon: n("31f7") },
                ],
                isShow: !1,
                showIconList: !1,
                btnRenderFailFlag: !0,
                btnRenderSuccessFlag: !1,
                placement1: null,
                placement2: null,
                placement3: [],
                placement4: null,
                placement5: null,
                placement6: null,
                isShowMaShangPop: !1,
              };
            },
            computed: {
              showbackiconflag: function () {
                return !0;
              },
              contentstyle: function () {
                return "height:calc(100% - ".concat(this.CustomBar, "px);");
              },
              btnStyle: function () {
                return "width: '630rpx';color: ".concat(
                  this.consumestyleconfig.themecolor,
                  ";"
                );
              },
              devicebuildinfo: function () {
                if (null != this.dev)
                  return c.default.isNullOrEmpty(this.dev.building_name) ||
                    c.default.isNullOrEmpty(this.dev.floor_name) ||
                    c.default.isNullOrEmpty(this.dev.room_name)
                    ? "未分配/未分配/未分配"
                    : c.default.getBuildingInfo(
                        this.dev.building_name,
                        this.dev.floor_name,
                        this.dev.room_name
                      );
              },
              GetDeviceStatusIcon: function () {
                var e = "";
                return (
                  0 == this.dev.status &&
                    1 == this.dev.consume_status &&
                    2 != this.dev.appointment_status &&
                    (e = "/pagesA/static/success.png"),
                  (2 != this.dev.consume_status &&
                    2 != this.dev.appointment_status) ||
                    (e = "/pagesA/static/device_consume.png"),
                  (3 != this.dev.status && 6 != this.dev.status) ||
                    (e = "/pagesA/static/fail.png"),
                  e
                );
              },
              IsOtherFactoryXiyi: function () {
                var e = !1;
                return (
                  (0, d.isShowAllConusmeModel)(
                    this.selectmodalconfig.xiyiFactoryType
                  ) || (e = !0),
                  e
                );
              },
              ConsumeBtnTipStyle: function () {
                var e = "";
                return (
                  this.btnstatusobj.startconsumebtntip.length > 25 &&
                    (e += "font-size:".concat(uni.upx2px(28), "px;")),
                  e
                );
              },
              isShowAd: function () {
                return this.$store.state.isShowAd;
              },
              phone: function () {
                var e = "暂未开放";
                return (
                  c.default.isNullOrEmpty(this.project) ||
                    c.default.isNullOrEmpty(this.project.projectswitch) ||
                    c.default.isNullOrEmpty(
                      this.project.projectswitch.customer_service
                    ) ||
                    c.default.isNullOrEmpty(
                      this.project.projectswitch.customer_service[0].phone
                    ) ||
                    (e = this.project.projectswitch.customer_service[0].phone),
                  e
                );
              },
            },
            onLoad: function (e) {
              var t = this;
              (this.LoadOption = e),
                (this.ACTFLAG = e.act),
                (this.CONSUMETYPE = e.consumetype);
              if (!c.default.isNullOrEmpty("") && "".indexOf("http") > -1)
                return (
                  this.$store.commit("SetIsShowAd", !1),
                  (this.consumestyleconfig = {
                    viewimg: "/pagesA/static/consume_xiyu_bg.png",
                    bgimgurl: "/pagesA/static/xiyu-bg-nan.png",
                    changeimg: "/pagesA/static/changeicon-xiyu.png",
                    titletext: "消费",
                    themecolor: "#47b6fe",
                    bgcolor: "#ffffff",
                    pageurl: "",
                  }),
                  this.HandelDevUrLaction("")
                );
              this.Systeminfo &&
                this.Systeminfo.platform &&
                (g = this.Systeminfo.platform),
                this.getbgimgandtitle(!0),
                this.checkequallyview(),
                this.handleAdPlacement(),
                this.$nextTick(function () {
                  t.createConsumeModalAd();
                });
            },
            onShow: function () {
              var e = this;
              this.$nextTick(function () {
                e.LoadConsumeBottomAd();
              }),
                this.ControlViewpopGestureenable(!0);
            },
            onHide: function () {
              this.CloseConsumeBottomAd();
            },
            onUnload: function () {
              uni.hideLoading(),
                this.refreshdowndisconndeviceinterval &&
                  (clearInterval(this.refreshdowndisconndeviceinterval),
                  (this.refreshdowndisconndeviceinterval = null),
                  (this.bledevisncountdown = 25)),
                this.getorderstatusinterval &&
                  (clearInterval(this.getorderstatusinterval),
                  (this.getorderstatusinterval = null),
                  (this.getorderstatusintcount = 0)),
                this.CloseConsumeBottomAd(),
                this.handleOnLoadEvent();
            },
            onBackPress: function (e) {
              if ("wait_orderstart" == this.btnstatusobj.startconsumeaction)
                return !0;
            },
            filters: {
              paserdevwatertime: function (e) {
                var t = "00:00-24:00";
                if (c.default.isNullOrEmpty(e)) return t;
                if (
                  "[]" != e.water_supply_time &&
                  !c.default.isNullOrEmpty(e.water_supply_time)
                ) {
                  var n = JSON.parse(e.water_supply_time);
                  t = "";
                  for (var i = 0; i < n.length; i++) {
                    var a = new Date(
                        n[i].start_time.replace("T", " ").replace(/\-/g, "/")
                      ),
                      s = new Date(
                        n[i].end_time.replace("T", " ").replace(/\-/g, "/")
                      );
                    t += a.Format("hh:mm") + "-" + s.Format("hh:mm") + " ";
                  }
                }
                return t;
              },
            },
            watch: {
              dev: function (e, t) {
                if (!c.default.isNullOrEmpty(e) && "" != e.device_id) {
                  1 != Number(e.device_type) && c.default.addhistroydev(e);
                  var n = !1;
                  "consuming" != this.ACTFLAG && (n = !0),
                    this.initconsumebydevicenettype(n);
                }
              },
              "$store.state.adPlacement": {
                handler: function () {
                  this.handleAdPlacement();
                },
                deep: !0,
                immediate: !0,
              },
            },
            methods: {
              handleOnLoadEvent: function () {
                var e = getCurrentPages();
                e.length <= 1 && this.$store.state.msgQueue.clear(!0);
              },
              getConsumeModalAdType: function () {
                var e = "";
                switch (this.CONSUMETYPE) {
                  case "bath":
                    e = "消费-洗浴页面-弹框";
                    break;
                  case "drinking":
                    e = "消费-饮水页面-弹框";
                    break;
                  case "laundry":
                    e = "消费-洗衣页面-弹框";
                    break;
                  case "blower":
                    e = "消费-吹风页面-弹框";
                    break;
                  case "shoe":
                    e = "消费-洗鞋页面-弹框";
                    break;
                  case "dryer":
                    e = "消费-烘干页面-弹框";
                    break;
                  default:
                    break;
                }
                return e;
              },
              handleAdPlacement: function () {
                var e = this.$store.state.adPlacement;
                if (!c.default.isNullOrEmpty(e)) {
                  var t = l.default.EnumAdPlacementReverse,
                    n = "消费页面-弹框";
                  (this.placement1 = null),
                    (this.placement2 = null),
                    (this.placement3 = []),
                    (this.placement4 = e.find(function (e) {
                      return e.enum_ad_placement == t[n];
                    })),
                    (this.placement5 = null),
                    (this.placement6 = null),
                    (n = this.getConsumeModalAdType());
                  for (var i = 0; i < e.length; i++) {
                    var a = e[i].enum_ad_placement;
                    a == t["消费页面-开始消费按钮上方"]
                      ? (this.placement1 = e[i])
                      : a == t["消费页面-开始消费按钮下方1"]
                      ? (this.placement2 = e[i])
                      : a == t["消费页面-开始消费按钮下方2"]
                      ? this.placement3.push(e[i])
                      : a == t[n]
                      ? (this.placement4 = e[i])
                      : a == t["消费页面-码上有钱结算按钮"]
                      ? (this.placement5 = e[i])
                      : a == t["消费页面-码上有钱勾选框"] &&
                        (this.placement6 = e[i]);
                  }
                }
              },
              parsevaluetime: function (e) {
                var t = Number(e);
                if (null != t && "" != t)
                  if (t >= 60) {
                    var n = parseInt(t / 60) + "分钟",
                      i = t % 60;
                    (t = n), i > 0 && (t += i + "秒");
                  } else t = parseInt(t) + "秒";
                return t;
              },
              backevent: function () {
                if ("wait_orderstart" == this.btnstatusobj.startconsumeaction)
                  return !0;
                this.OauthLogin.isScanConsume
                  ? uni.reLaunch({ url: "/pages/index/index" })
                  : uni.navigateBack({ delta: 1 });
              },
              upxtopx: function (e) {
                return uni.upx2px(e);
              },
              changedev: function () {
                this.querydevbyid(),
                  "stop_consume" != this.btnstatusobj.startconsumeaction &&
                    "bleconn_consume" != this.btnstatusobj.startconsumeaction &&
                    uni.navigateTo({
                      url:
                        "../selectbuilding/selectbuilding?launchtype=selectdev&consumetype=" +
                        this.CONSUMETYPE,
                    });
              },
              inputdevidclick: function () {
                "stop_consume" != this.btnstatusobj.startconsumeaction &&
                  "bleconn_consume" != this.btnstatusobj.startconsumeaction &&
                  (this.showinputmodalflag = !0);
              },
              getxiyimodeicon: function (e) {
                var t = "";
                switch (e) {
                  case 1:
                    t = "/pagesA/static/xiyi-mode-1.png";
                    break;
                  case 2:
                    t = "/pagesA/static/xiyi-mode-2.png";
                    break;
                  case 3:
                    t = "/pagesA/static/xiyi-mode-3.png";
                    break;
                  case 4:
                    t = "/pagesA/static/xiyi-mode-4.png";
                    break;
                  default:
                    break;
                }
                return (
                  c.default.isNullOrEmpty(t) && (t = "/static/xiyi.png"), t
                );
              },
              gethongganmodeicon: function (e) {
                return "/pagesA/static/honggan-mode-".concat(e + 1, ".png");
              },
              getxixiemodeicon: function (e) {
                return "/pagesA/static/xixie-mode-".concat(e + 1, ".png");
              },
              getbgimgandtitle: function (e) {
                var t = this.dev,
                  n = this.consumestyleconfig.viewimg,
                  i = this.consumestyleconfig.bgimgurl,
                  a = this.consumestyleconfig.changeimg,
                  s = this.consumestyleconfig.text,
                  o = this.consumestyleconfig.themecolor,
                  r = this.consumestyleconfig.bgcolor;
                if (null != t) {
                  var l = this.CONSUMETYPE;
                  if (!c.default.isNullOrEmpty(t.device_type))
                    switch (t.device_type) {
                      case 0:
                        l = "bath";
                        break;
                      case 2:
                      case 4:
                        l = "drinking";
                        break;
                      case 3:
                        l = "laundry";
                        break;
                      case 5:
                        l = "blower";
                        break;
                      case 8:
                        l = "shoe";
                        break;
                      case 9:
                        l = "dryer";
                        break;
                      default:
                        break;
                    }
                  var u = "";
                  switch (l) {
                    case "bath":
                      (i =
                        c.default.isNullOrEmpty(this.userdata.detailinfo) ||
                        "2" != this.userdata.detailinfo.sex.toString()
                          ? "/pagesA/static/xiyu-bg-nan.png"
                          : "/pagesA/static/xiyu-bg-nv.png"),
                        (n = "/pagesA/static/consume_xiyu_bg.png"),
                        (a = "/pagesA/static/changeicon-xiyu.png"),
                        (s = "洗浴"),
                        (o = "#47b6fe"),
                        (r = "white"),
                        (u = "pages/consume/consume-xiyu"),
                        (this.colors = "#617fef");
                      break;
                    case "drinking":
                      (n = "/pagesA/static/consume_yinshui_bg.png"),
                        (i = "/pagesA/static/yinshui-bg.png"),
                        (a = "/pagesA/static/changeicon-yinshui.png"),
                        (s = "饮水"),
                        (o = "#2a947d"),
                        (r = "#daffdd"),
                        (u = "pages/consume/consume-yinshui"),
                        (this.colors = "#56a986");
                      break;
                    case "laundry":
                      (n = "/pagesA/static/consume_xiyi_bg.png"),
                        (i = "/pagesA/static/xiyi-bg.png"),
                        (a = "/pagesA/static/changeicon-xiyu.png"),
                        (s = "洗衣"),
                        (o = "#47b6fe"),
                        (r = "white"),
                        (u = "pages/consume/consume-xiyi"),
                        (this.colors = "#2aadeb");
                      break;
                    case "blower":
                      (n = "/pagesA/static/consume_chuifeng_bg.png"),
                        (i = "/pagesA/static/chuifeng-bg.png"),
                        (a = "/pagesA/static/changeicon-chuifeng.png"),
                        (s = "吹风"),
                        (o = "#e72775"),
                        (r = "#ffffff"),
                        (u = "pages/consume/consume-chuifeng"),
                        (this.colors = "#eb2a53");
                      break;
                    case "dryer":
                      (n = "/pagesA/static/consume_honggan_bg.png"),
                        (i = "/pagesA/static/honggan-bg.png"),
                        (a = "/pagesA/static/changeicon-honggan.png"),
                        (s = "烘干"),
                        (o = "#9d55df"),
                        (r = "#ffffff"),
                        (u = "pages/consume/consume-honggan"),
                        (this.colors = "#6b54eb");
                      break;
                    case "shoe":
                      (n = "/pagesA/static/consume_xixie_bg.png"),
                        (i = "/pagesA/static/xixie-bg.png"),
                        (a = "/pagesA/static/changeicon-xixie.png"),
                        (s = "洗鞋"),
                        (o = "#50de56"),
                        (r = "#ffffff"),
                        (u = "pages/consume/consume-xixie"),
                        (this.colors = "#a9b928");
                      break;
                    default:
                      break;
                  }
                  (this.modebtnflag = "bath" != l && "drinking" != l),
                    (this.consumestyleconfig = {
                      viewimg: n,
                      bgimgurl: i,
                      titletext: s,
                      changeimg: a,
                      themecolor: o,
                      bgcolor: r,
                      pageurl: u,
                    }),
                    (this.CONSUMETYPE = l),
                    e &&
                      (this.getneedshownotice(),
                      this.GetStaffConsumingOrder(this.LoadOption.dev));
                }
              },
              hideselectmodal: function () {
                (this.selectmodalconfig.showmodalflag = !1),
                  (this.IsDryerProperCorrectTime.text = ""),
                  (this.IsDryerProperCorrectTime.flag = !1);
              },
              selectDeviceUseNetType: function () {
                var e = this;
                if (
                  ((this.DEV_NETTYPE = this.dev.net_type),
                  (this.DEV_NETMODULE = c.default.isNullOrEmpty(
                    this.dev.net_module
                  )
                    ? []
                    : this.dev.net_module.split(",")),
                  this.DEV_NETMODULE.length > 1
                    ? (this.IsNeedOtherNetworkConnect = !0)
                    : (this.IsNeedOtherNetworkConnect = !1),
                  "appointment" == this.ACTFLAG)
                )
                  this.DEV_NETTYPE = this.DEV_NETMODULE.find(function (e) {
                    return "4" != e;
                  });
                else {
                  if (this.dev.change_network)
                    return (
                      (this.DEV_NETTYPE = 4),
                      setTimeout(function () {
                        e.changDeviceStatusUI("devreadyconnect_status");
                      }, 200)
                    );
                  if (
                    c.default.isNullOrEmpty(
                      this.dev.primary_consume_net_type
                    ) ||
                    0 === Number(this.dev.primary_consume_net_type)
                  ) {
                    if (this.DEV_NETMODULE.length > 0) {
                      var t = 0;
                      if (
                        (c.default.isNullOrEmpty(this.project.projectswitch) ||
                          (t = this.project.projectswitch.network_selection),
                        -1 != this.DEV_NETMODULE.indexOf("7") &&
                          (this.DEV_NETTYPE = 2 == t ? 7 : 1),
                        -1 != this.DEV_NETMODULE.indexOf("4"))
                      )
                        for (var n = 0; n < this.DEV_NETMODULE.length; n++)
                          if ("4" != this.DEV_NETMODULE[n]) {
                            if (
                              (3 == t && "appointment" != this.ACTFLAG) ||
                              this.dev.change_network
                            )
                              return (
                                (this.DEV_NETTYPE = 4),
                                setTimeout(function () {
                                  e.changDeviceStatusUI(
                                    "devreadyconnect_status"
                                  );
                                }, 200)
                              );
                            (this.DEV_NETTYPE = Number(this.DEV_NETMODULE[n])),
                              "appointment" == this.ACTFLAG &&
                                (this.DEV_NETMODULE = [this.DEV_NETMODULE[n]]);
                            break;
                          }
                    }
                  } else this.DEV_NETTYPE = this.dev.primary_consume_net_type;
                }
              },
              initconsumebydevicenettype: function (t) {
                if (
                  (this.getbgimgandtitle(!1),
                  "consuming" != this.ACTFLAG && !this.OauthLogin.show)
                ) {
                  var n = this;
                  if (
                    c.default.isNullOrEmpty(n.userdata) ||
                    c.default.isNullOrEmpty(n.userdata.detailinfo)
                  )
                    return c.default.showalert(
                      "提示",
                      "计费规则不存在,请联系管理员",
                      null,
                      function () {
                        uni.navigateBack({ delta: 1 });
                      },
                      !1
                    );
                  if (
                    ((n.rules = n.userdata.detailinfo.ChargeRules),
                    c.default.isNullOrEmpty(n.rules) || 0 == n.rules.length)
                  )
                    return c.default.showalert(
                      "提示",
                      "计费规则不存在,请联系管理员",
                      null,
                      function () {
                        uni.navigateBack({ delta: 1 });
                      },
                      !1
                    );
                  if (6 == this.dev.status)
                    return n.changDeviceStatusUI("devinmaintain_status");
                  switch (
                    (this.selectDeviceUseNetType(),
                    (n.selectmodalconfig.modalxiyicontent = []),
                    (n.selectmodalconfig.modalchuifengcontent = []),
                    (n.selectmodalconfig.modalxixiecontent = []),
                    (n.selectmodalconfig.modalhonggancontent = []),
                    (n.selectmodalconfig.xiyiFactoryType = ""),
                    (n.selectmodalconfig.xiyiWorkerRinseContent = [
                      { name: "超净漂洗", disable: !0 },
                    ]),
                    (n.selectmodalconfig.xiyiWorkerTemperatureContent = [
                      { name: "40度", disable: !0 },
                      { name: "60度", disable: !0 },
                    ]),
                    n.dev.device_type)
                  ) {
                    case 1:
                      return c.default.showalert(
                        "提示",
                        "请等待收银员发起支付后再扫码",
                        null,
                        function () {
                          uni.navigateBack({ delta: 1 });
                        },
                        !1
                      );
                    case 0:
                    case 2:
                    case 4:
                      if (4 == this.DEV_NETTYPE)
                        return n.changDeviceStatusUI("devreadyconnect_status");
                      break;
                    case 3:
                      for (var i = [], a = 0; a < n.rules.length; a++)
                        if (n.rules[a].device_group_id == n.dev.group_id) {
                          if (
                            ((n.selectmodalconfig.xiyiOriginalChargeRule =
                              n.rules[a].charge_group),
                            (n.selectmodalconfig.xiyiFactoryType =
                              n.rules[a].device_model),
                            (n.selectmodalconfig.xiyiBarrelCleanEnable =
                              n.rules[a].barrel_clean),
                            n.IsOtherFactoryXiyi)
                          )
                            for (
                              var s = 0;
                              s < n.rules[a].charge_group.length;
                              s++
                            )
                              n.rules[a].charge_group[s].value < 10 &&
                                i.push(n.rules[a].charge_group[s]);
                          else i = n.rules[a].charge_group;
                          break;
                        }
                      if (0 == i.length)
                        return c.default.showalert(
                          "提示",
                          "计费规则不存在,请联系管理员",
                          null,
                          function () {
                            uni.navigateBack({ delta: 1 });
                          },
                          !1
                        );
                      if (
                        ((n.selectmodalconfig.modalxiyicontent = i),
                        n.IsOtherFactoryXiyi)
                      ) {
                        if (
                          (0, d.isSupportStrengthenWashing)(
                            n.selectmodalconfig.xiyiFactoryType
                          )
                        ) {
                          n.selectmodalconfig.xiyiWorkerRinseContent.push({
                            name: "加强洗",
                            disable: !0,
                          });
                          var o =
                            n.selectmodalconfig.xiyiOriginalChargeRule.find(
                              function (e) {
                                return 128 == e.value;
                              }
                            );
                          o &&
                            n.selectmodalconfig.xiyiWorkerRinseContent.push(o);
                        }
                        (n.selectmodalconfig.xiyiWorkerBaseModeSelected =
                          n.selectmodalconfig.modalxiyicontent[0]),
                          n.InitOtherXiyiExistedChargeRule();
                      }
                      return void (t && n.CheckSingleConsumeMode());
                    case 5:
                      for (var u = 0; u < n.rules.length; u++)
                        if (n.rules[u].device_group_id == n.dev.group_id) {
                          if (
                            ((n.selectmodalconfig.chuifengfixedvalueenable =
                              n.rules[u].fixed_value_enable),
                            0 == n.selectmodalconfig.chuifengfixedvalueenable)
                          )
                            return (
                              (n.modebtnflag = !1),
                              4 == this.DEV_NETTYPE
                                ? n.changDeviceStatusUI(
                                    "devreadyconnect_status"
                                  )
                                : n.changDeviceStatusUI("enable_startconsume")
                            );
                          n.selectmodalconfig.modalchuifengcontent =
                            n.rules[u].charge_group;
                          break;
                        }
                      return void (t && n.CheckSingleConsumeMode());
                    case 8:
                      for (var f = 0; f < n.rules.length; f++)
                        if (n.rules[f].device_group_id == n.dev.group_id) {
                          (n.selectmodalconfig.modalxixiecontent =
                            n.rules[f].charge_group || []),
                            (n.selectmodalconfig.xixieBarrelCleanEnable =
                              n.rules[f].barrel_clean);
                          break;
                        }
                      return void (t && n.CheckSingleConsumeMode());
                    case 9:
                      for (
                        var h = [],
                          m = {
                            type: "请选择温度以及时长",
                            temperaturelist: [],
                            timelist: [],
                          },
                          g = function (t) {
                            if (n.rules[t].device_group_id == n.dev.group_id) {
                              if (
                                (e.log(
                                  "--------烘干-----------" +
                                    JSON.stringify(n.rules[t])
                                ),
                                (n.selectmodalconfig.hongganOriginalChargeRule =
                                  n.rules[t].charge_group),
                                (n.selectmodalconfig.hongganfixedvalueenable =
                                  n.rules[t].fixed_value_enable),
                                0 ==
                                  n.selectmodalconfig.hongganfixedvalueenable)
                              ) {
                                m.ShowDiyinput = !0;
                                for (
                                  var i = function (e) {
                                      var i = m.timelist.find(function (i) {
                                        return (
                                          i.time ==
                                          n.rules[t].charge_group[e].value
                                        );
                                      });
                                      i ||
                                        m.timelist.push({
                                          time: n.rules[t].charge_group[e]
                                            .value,
                                          price: "",
                                          disable: !1,
                                        }),
                                        m.temperaturelist.push(
                                          n.rules[t].charge_group[e]
                                        );
                                    },
                                    a = 0;
                                  a < n.rules[t].charge_group.length;
                                  a++
                                )
                                  i(a);
                              } else {
                                m.ShowDiyinput = !1;
                                for (
                                  var s = function (e) {
                                      var i = n.rules[t].charge_group[e];
                                      i.name =
                                        l.default.Enumtemperature[i.temp_level];
                                      i.name;
                                      var a = m.temperaturelist.find(function (
                                        e
                                      ) {
                                        return e.name === i.name;
                                      });
                                      a ||
                                        m.temperaturelist.push({
                                          name: i.name,
                                          temp_level: i.temp_level,
                                        });
                                      var s = m.timelist.find(function (e) {
                                        return e.time === i.value;
                                      });
                                      s ||
                                        m.timelist.push({
                                          time: i.value,
                                          price: i.price,
                                          disable: !1,
                                        });
                                    },
                                    o = 0;
                                  o < n.rules[t].charge_group.length;
                                  o++
                                )
                                  s(o);
                              }
                              return "break";
                            }
                          },
                          v = 0;
                        v < n.rules.length;
                        v++
                      ) {
                        var p = g(v);
                        if ("break" === p) break;
                      }
                      return (
                        (m.timelist = c.default.jsonSort(
                          m.timelist,
                          "time",
                          !1
                        )),
                        (m.selectedtemperature =
                          (0, r.default)({}, m.temperaturelist[0]) || {}),
                        (m.selectedtime =
                          (0, r.default)({}, m.timelist[0]) || {}),
                        h.push(m),
                        (n.selectmodalconfig.modalhonggancontent = h),
                        1 == this.selectmodalconfig.hongganfixedvalueenable &&
                          this.HongganCreateTimeListBySelectTemp(
                            m.selectedtemperature
                          ),
                        void (t && n.CheckSingleConsumeMode())
                      );
                    default:
                      break;
                  }
                  if ("consuming" != this.ACTFLAG)
                    return n.changDeviceStatusUI("enable_startconsume");
                }
              },
              ClickModalItem: function (e, t) {
                switch (e) {
                  case "chuifeng":
                  case "xiyi":
                  case "xixie":
                    if ("xiyi" == e && this.IsOtherFactoryXiyi)
                      return (
                        (this.selectmodalconfig.xiyiWorkerBaseModeSelected = t),
                        void this.InitOtherXiyiExistedChargeRule()
                      );
                    (this.CONSUMEMONEY = t.price),
                      (this.CONSUMEVALUE = t.value),
                      (this.FixValueConsumeModel = (0, r.default)({}, t)),
                      ((this.selectmodalconfig.xiyiBarrelCleanUseSwitch &&
                        "xiyi" == e) ||
                        (this.selectmodalconfig.xixieBarrelCleanUseSwitch &&
                          "xixie" == e)) &&
                        (this.FixValueConsumeModel.name =
                          "桶自洁," + this.FixValueConsumeModel.name);
                    break;
                  case "honggan":
                    var n =
                      this.selectmodalconfig.modalhonggancontent[0]
                        .selectedtemperature;
                    if (
                      ((this.CONSUMEVALUE =
                        this.selectmodalconfig.modalhonggancontent[0].selectedtime.time),
                      0 == this.selectmodalconfig.hongganfixedvalueenable)
                    ) {
                      if (
                        isNaN(Number(this.CONSUMEVALUE)) ||
                        String(this.CONSUMEVALUE).indexOf(".") > -1
                      )
                        return (
                          (this.IsDryerProperCorrectTime.text =
                            "请输入正整数时间"),
                          void (this.IsDryerProperCorrectTime.flag = !0)
                        );
                      if (
                        Number(this.CONSUMEVALUE) < 2 ||
                        Number(this.CONSUMEVALUE) > 120
                      )
                        return (
                          (this.IsDryerProperCorrectTime.text =
                            "时间必须在2分钟至120分钟内"),
                          void (this.IsDryerProperCorrectTime.flag = !0)
                        );
                      (this.IsDryerProperCorrectTime.flag = !1),
                        (this.IsDryerProperCorrectTime.text = ""),
                        (this.CONSUMEMONEY =
                          (n.price / n.value) * this.CONSUMEVALUE);
                    } else
                      for (
                        var i = 0;
                        i <
                        this.selectmodalconfig.hongganOriginalChargeRule.length;
                        i++
                      ) {
                        var a =
                          this.selectmodalconfig.hongganOriginalChargeRule[i];
                        if (
                          a.temp_level == n.temp_level &&
                          a.value == this.CONSUMEVALUE
                        ) {
                          this.CONSUMEMONEY = a.price;
                          break;
                        }
                      }
                    this.FixValueConsumeModel = {
                      name: ""
                        .concat(n.name, ",")
                        .concat(this.CONSUMEVALUE, "分钟"),
                      tempLevel: n.temp_level,
                    };
                    break;
                  default:
                    break;
                }
                (this.selectmodalconfig.showmodalflag = !1),
                  4 == this.dev.net_type
                    ? this.changDeviceStatusUI("devreadyconnect_status")
                    : this.changDeviceStatusUI("enable_startconsume");
              },
              creategprsorkeyorder: function (t) {
                var n = this;
                c.default
                  .sendapppost(
                    n.$store.state.project.server_addr +
                      c.default.API_PATH.createorder,
                    t
                  )
                  .then(function (e) {
                    uni.hideLoading(),
                      (n.CURRENT_CONSUME_ORDER = e),
                      c.default.showloading("正在启动中..."),
                      n.changDeviceStatusUI("dev_setorder_waitstart"),
                      n.refreshorderstatus(e.order_id, "createorder_type"),
                      n.ControlViewpopGestureenable(!0);
                  })
                  .catch(function (i) {
                    e.log(i);
                    var a = i,
                      s = n.project.projectswitch;
                    c.default.isNullOrEmpty(s) || s.instant_payment_enable;
                    var r = function () {
                      n.changDeviceStatusUI("enable_startconsume");
                    };
                    if (i && "object" == (0, o.default)(i)) {
                      if ("存在待支付的订单！" == i.msg)
                        return n.queryStaffPendingOrder();
                      if ("请求支付宝单次代扣签名" == i.msg)
                        return n.RequesetAlipayOneAuthSignParams(
                          i.order.order_id
                        );
                      if (
                        "请求签约支卡通以及商户代扣" == i.msg ||
                        "请签约支卡通" == i.msg ||
                        "请签约免密支付" == i.msg
                      )
                        return n.StartRequestSign(i.msg);
                      if (
                        "请支付" == i.msg &&
                        !c.default.isNullOrEmpty(i.order)
                      )
                        return (
                          n.ControlViewpopGestureenable(!0),
                          c.default.showloading("请求支付..."),
                          n.changDeviceStatusUI("order_paying"),
                          n.startpaymentorder(i.order)
                        );
                      if (i.msg && i.msg.indexOf("余额不足") > -1)
                        return (
                          n.ControlViewpopGestureenable(!0),
                          n.DisplayBalanceNotEnoughModal(i.msg)
                        );
                      a = i.msg;
                    }
                    if (
                      (uni.hideLoading(),
                      n.ControlViewpopGestureenable(!0),
                      -1 != n.DEV_NETMODULE.indexOf("4") &&
                        -1 != n.CheckDeviceStatusNotNormal(i))
                    ) {
                      if (n.IsNeedOtherNetworkConnect)
                        return (
                          (n.DEV_NETTYPE = t.net_type),
                          n.SelectDevChangeBleToConsume()
                        );
                      r = function () {
                        (n.DEV_NETTYPE = 4),
                          n.changDeviceStatusUI("devreadyconnect_status");
                      };
                    }
                    return c.default.showalert(
                      "提示",
                      a,
                      null,
                      function () {
                        r();
                      },
                      !1
                    );
                  });
              },
              CheckDeviceStatusNotNormal: function (e) {
                return [
                  "设备已被占用",
                  "设备繁忙,请稍后重试",
                  "未开启即时支付，无法使用后付费消费",
                  "设备开小差了~",
                  "设备状态不正常",
                  "消费失败,重新试试吧",
                  "设备状态异常",
                  "请求失败",
                  "暂时无法连接设备,请稍后再试!",
                ].indexOf(e);
              },
              remotegprsorkeyorder: function () {
                var t = this;
                this.ControlViewpopGestureenable(!1),
                  this.getorderstatusinterval &&
                    (clearInterval(this.getorderstatusinterval),
                    (this.getorderstatusinterval = null),
                    (this.getorderstatusintcount = 0));
                var n = this;
                c.default.showloading("正在结束..."),
                  c.default
                    .sendapppost(
                      n.$store.state.project.server_addr +
                        c.default.API_PATH.remoteendorder,
                      {
                        order_id: n.CURRENT_CONSUME_ORDER.order_id,
                        device_id: n.CURRENT_CONSUME_ORDER.device_id,
                      }
                    )
                    .then(function (t) {
                      e.log("----结束完成----" + t), n.endconsumecallback(t);
                    })
                    .catch(function (e) {
                      if (
                        n.DEV_NETMODULE.length > 1 &&
                        "设备繁忙,请稍后重试" != e
                      )
                        return n.ChangeNetWorkToEndConsume(e);
                      uni.hideLoading(),
                        setTimeout(function () {
                          return c.default.showalert(
                            "结束失败",
                            "是否要更换其他设备消费?",
                            function () {
                              n.refreshorderstatus(
                                n.CURRENT_CONSUME_ORDER.order_id,
                                "createorder_type"
                              );
                            },
                            function () {
                              n.changDeviceStatusUI("devinit_status"),
                                (n.dev = {}),
                                (n.ACTFLAG = "consume");
                            },
                            !0,
                            "否",
                            "是"
                          );
                        }, 300);
                    })
                    .finally(function () {
                      t.ControlViewpopGestureenable(!0);
                    });
              },
              startgprsorkeyconsume: function (e) {
                var t = this,
                  n = {
                    device_id: t.dev.device_id,
                    send_to_device: 1,
                    staff_id: t.userdata.detailinfo.id,
                    act: "consume",
                    oauth_type: c.default.getplatformtype(),
                  };
                t.changDeviceStatusUI("order_waiting"),
                  t.ControlViewpopGestureenable(!1),
                  c.default.showloading("通讯中..."),
                  (n.net_type = Number(e)),
                  this.CONSUMEMONEY &&
                    (n.money = parseFloat(this.CONSUMEMONEY)),
                  this.CONSUMEVALUE && (n.consume_value = this.CONSUMEVALUE),
                  3 == t.dev.device_type && (n.isnew = 1),
                  "appointment" == this.ACTFLAG &&
                    (n.act = "appointment_consume"),
                  9 == t.dev.device_type &&
                    (n.temp_level = this.FixValueConsumeModel.tempLevel),
                  ((3 == t.dev.device_type &&
                    this.selectmodalconfig.xiyiBarrelCleanUseSwitch) ||
                    (8 == t.dev.device_type &&
                      this.selectmodalconfig.xixieBarrelCleanUseSwitch)) &&
                    (n.barrel_clean = 1),
                  c.default
                    .sendapppost(
                      t.$store.state.project.server_addr +
                        c.default.API_PATH.collectgprsdevicestatus,
                      n
                    )
                    .then(function (e) {
                      e &&
                        (c.default.showloading("准备消费..."),
                        t.creategprsorkeyorder(n));
                    })
                    .catch(function (e) {
                      if (e) {
                        if (
                          (-1 != t.DEV_NETMODULE.indexOf("1") ||
                            -1 != t.DEV_NETMODULE.indexOf("5")) &&
                          -1 != t.DEV_NETMODULE.indexOf("7") &&
                          !t.twoconnected
                        )
                          return (
                            (t.twoconnected = !0), t.startgprsorkeyconsume(7)
                          );
                        var n = function () {
                          t.changDeviceStatusUI("enable_startconsume");
                        };
                        if (
                          -1 != t.DEV_NETMODULE.indexOf("4") &&
                          -1 != t.CheckDeviceStatusNotNormal(e)
                        ) {
                          if (t.IsNeedOtherNetworkConnect)
                            return (
                              uni.hideLoading(), t.SelectDevChangeBleToConsume()
                            );
                          n = function () {
                            (t.DEV_NETTYPE = 4),
                              t.changDeviceStatusUI("devreadyconnect_status");
                          };
                        }
                        return (
                          (t.twoconnected = !1),
                          "设备未连接" == e &&
                            (e = "设备未连接，请检查设备是否正常"),
                          "网络错误,请检查网络" == e &&
                            "none" != t.$store.state.AppInfo.nettype &&
                            (e = "设备连接超时，请重试"),
                          uni.hideLoading(),
                          t.ControlViewpopGestureenable(!0),
                          c.default.showalert(
                            "提示",
                            e,
                            null,
                            function () {
                              n();
                            },
                            !1
                          )
                        );
                      }
                    });
              },
              bledevstartconnection: function (t) {
                var n = this,
                  i = this;
                (function () {
                  n.changDeviceStatusUI("enable_connect"),
                    u.default.initbledevice(i, function (a, s) {
                      if ((e.log(a), e.log(s), n.checkequallyview())) {
                        if (s) {
                          e.log(s);
                          var o = function () {
                            uni.navigateBack({ delta: 1 });
                          };
                          return n.IsNeedOtherNetworkConnect
                            ? i.SelectBleDevOtherNettypeToConsume()
                            : ((o = function () {
                                (i.DEV_NETTYPE = 4),
                                  i.changDeviceStatusUI(
                                    "devreadyconnect_status"
                                  );
                              }),
                              1001 === s || 1002 === s
                                ? void o()
                                : c.default.showalert(
                                    "提示",
                                    s,
                                    null,
                                    function () {
                                      o();
                                    },
                                    !1
                                  ));
                        }
                        u.default.onBluetoothAdapterStateChange(function () {
                          (i.bledevisncountdown = 25),
                            clearInterval(i.refreshdowndisconndeviceinterval),
                            (i.refreshdowndisconndeviceinterval = null),
                            i.changDeviceStatusUI("device_isn_outtime"),
                            u.default.closecoon();
                        }),
                          n.scanbleandtryconn(function (a, s) {
                            if ((uni.hideLoading(), n.checkequallyview())) {
                              if (
                                (e.log(
                                  "scanbleandtryconn--------------------------",
                                  s
                                ),
                                s)
                              ) {
                                if (
                                  (c.default.logger.bleerror(
                                    "consume.vue",
                                    "蓝牙设备连接失败," + s,
                                    "scanbleandtryconn",
                                    JSON.stringify({
                                      deviceid: i.dev.device_id,
                                      blename: i.dev.ble_name,
                                      blemac: i.dev.ble_mac,
                                    })
                                  ),
                                  i.changDeviceStatusUI("disable_startconsume"),
                                  "ble_err" == s)
                                )
                                  return c.default.showalert(
                                    "检查蓝牙",
                                    "蓝牙未开启或不可用",
                                    null,
                                    function () {
                                      uni.navigateBack({ delta: 1 });
                                    },
                                    !1
                                  );
                                if ("conn_timeout" == s || "conn_err" == s) {
                                  if (t)
                                    return (
                                      (i.IsNeedOtherNetworkEndConsume = !1),
                                      i.changDeviceStatusUI(
                                        "enable_endconsume"
                                      ),
                                      c.default.showalert(
                                        "结算失败",
                                        "设备连接超时，请重试"
                                      )
                                    );
                                  var o = null;
                                  return n.IsNeedOtherNetworkConnect
                                    ? i.SelectBleDevOtherNettypeToConsume()
                                    : ((o = function () {
                                        (i.DEV_NETTYPE = 4),
                                          i.changDeviceStatusUI(
                                            "devreadyconnect_status"
                                          );
                                      }),
                                      (s =
                                        "连接超时,请确保手机与设备3米内距离且并未使用,是否重新连接"),
                                      c.default.showalert(
                                        "提示",
                                        s,
                                        function () {
                                          o();
                                        },
                                        function () {
                                          i.bledevstartconnection();
                                        },
                                        !0
                                      ));
                                }
                                return c.default.showalert(
                                  "提示",
                                  s,
                                  null,
                                  function () {
                                    uni.navigateBack({ delta: 1 });
                                  },
                                  !1
                                );
                              }
                              return (
                                (i.dev.connectdevid = a.connectdevid),
                                i.starthandShark(t)
                              );
                            }
                          });
                      }
                    });
                })();
              },
              scanbleandtryconn: function (t) {
                var n = this,
                  i = 0;
                (function a() {
                  if (i > 2) return t(null, "conn_timeout");
                  var s = 1500;
                  "ios" == g && (s = 3500),
                    setTimeout(function () {
                      u.default.createBLEConnection(n.dev, function (s, o) {
                        if (
                          (e.log("-------createBLEConnection---ret--" + s),
                          e.log("-------createBLEConnection---err--" + o),
                          o)
                        ) {
                          if (!n.checkequallyview()) return;
                          if ("ble_notneed_err" == o) return;
                          return -1 != o.indexOf("not available") ||
                            -1 != o.indexOf("fail not init")
                            ? t(null, "ble_err")
                            : ((i += 1), a());
                        }
                        return t(s, null);
                      });
                    }, s);
                })();
              },
              startconsumebydevnettype: function () {
                var t = this;
                return (0, s.default)(
                  (0, a.default)().mark(function n() {
                    var i, s, o, r, l;
                    return (0, a.default)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (((i = t), 6 != t.dev.status)) {
                              n.next = 4;
                              break;
                            }
                            return (
                              uni.hideLoading(),
                              n.abrupt(
                                "return",
                                c.default.showalert(
                                  "提示",
                                  "设备正在维护中,换个试试吧~",
                                  null,
                                  null,
                                  !1
                                )
                              )
                            );
                          case 4:
                            if (
                              "select_dev" != i.btnstatusobj.startconsumeaction
                            ) {
                              n.next = 8;
                              break;
                            }
                            return (
                              uni.hideLoading(),
                              (t.showinputmodalflag = !t.showinputmodalflag),
                              n.abrupt("return")
                            );
                          case 8:
                            if (
                              "selectmode_consume" !=
                              i.btnstatusobj.startconsumeaction
                            ) {
                              n.next = 12;
                              break;
                            }
                            return (
                              uni.hideLoading(),
                              t.changeconsumemode(),
                              n.abrupt("return")
                            );
                          case 12:
                            if (
                              (e.log(i.btnstatusobj.startconsumeaction),
                              "ready_connect" !=
                                i.btnstatusobj.startconsumeaction)
                            ) {
                              n.next = 20;
                              break;
                            }
                            if (
                              (uni.hideLoading(),
                              (s = t.CheckWaterTimeIsInsection(
                                t.bledevstartconnection.bind(t)
                              )),
                              s.result)
                            ) {
                              n.next = 18;
                              break;
                            }
                            return n.abrupt("return", s.fn());
                          case 18:
                            return (
                              t.bledevstartconnection(), n.abrupt("return")
                            );
                          case 20:
                            if (
                              ((o = c.default.CheckStaffConsumePwdStatus()),
                              !o.result)
                            ) {
                              n.next = 23;
                              break;
                            }
                            return n.abrupt(
                              "return",
                              t.$store.state.msgQueue.add(o.CallBack.bind(t))
                            );
                          case 23:
                            return (
                              (n.next = 25),
                              c.default.CheckIsNeedAlipayAgreement()
                            );
                          case 25:
                            if (((r = n.sent), e.log(r), !r.result)) {
                              n.next = 30;
                              break;
                            }
                            return (
                              uni.hideLoading(), n.abrupt("return", r.fn())
                            );
                          case 30:
                            if (4 != t.DEV_NETTYPE) {
                              n.next = 41;
                              break;
                            }
                            if (
                              3 != i.dev.device_type &&
                              5 != i.dev.device_type
                            ) {
                              n.next = 34;
                              break;
                            }
                            return (
                              uni.hideLoading(),
                              n.abrupt("return", i.startbleConsume())
                            );
                          case 34:
                            return (
                              "",
                              "App",
                              "消费中请确保手机与设备3米内距离,并且App处于正常运行状态。",
                              uni.hideLoading(),
                              n.abrupt(
                                "return",
                                c.default.showalert(
                                  "提示",
                                  "消费中请确保手机与设备3米内距离,并且App处于正常运行状态。",
                                  null,
                                  function () {
                                    i.startbleConsume();
                                  },
                                  !1,
                                  "",
                                  "我知道了"
                                )
                              )
                            );
                          case 41:
                            if (
                              ((l = function () {
                                var e = t.CheckWaterTimeIsInsection(
                                  t.startgprsorkeyconsume.bind(t, t.DEV_NETTYPE)
                                );
                                if (!e.result) return uni.hideLoading(), e.fn();
                                i.startgprsorkeyconsume(t.DEV_NETTYPE);
                              }),
                              3 != i.dev.device_type &&
                                8 != i.dev.device_type &&
                                9 != i.dev.device_type)
                            ) {
                              n.next = 47;
                              break;
                            }
                            return (
                              uni.hideLoading(),
                              n.abrupt(
                                "return",
                                c.default.showalert(
                                  "提示",
                                  "请检查衣物是否放置完毕且机器门锁已正常关紧,是否立即启动?",
                                  null,
                                  function () {
                                    l();
                                  },
                                  !0,
                                  "暂不启动",
                                  "立即启动"
                                )
                              )
                            );
                          case 47:
                            uni.hideLoading(), l();
                          case 49:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
              changDeviceStatusUI: function (e) {
                var t = 0;
                switch (
                  (c.default.isNullOrEmpty(this.project.projectswitch) ||
                    (t = this.project.projectswitch.consume_mode),
                  e)
                ) {
                  case "enable_startconsume":
                    for (var n = "", i = 0; i < this.rules.length; i++)
                      if (this.rules[i].device_group_id == this.dev.group_id) {
                        var a = this.rules[i].charge_money;
                        n =
                          5 == t
                            ? "开始消费,先用后付"
                            : "冻结" + Number(a).toFixed(2) + " 元,点击消费";
                        break;
                      }
                    switch (this.dev.device_type) {
                      case 3:
                      case 8:
                      case 9:
                        n =
                          this.FixValueConsumeModel.name +
                          ",需扣费" +
                          Number(this.CONSUMEMONEY).toFixed(2) +
                          " 元,点击消费";
                        break;
                      case 5:
                        1 == this.selectmodalconfig.chuifengfixedvalueenable &&
                          (n =
                            this.parsevaluetime(
                              this.FixValueConsumeModel.value
                            ) +
                            ",需扣费" +
                            Number(this.CONSUMEMONEY).toFixed(2) +
                            " 元,点击消费");
                        break;
                      default:
                        break;
                    }
                    if ("" == n)
                      return (
                        (this.btnstatusobj.startconsumedisplayflag = !0),
                        (this.btnstatusobj.startconsumebtntip =
                          "未设定计费规则,无法正常使用"),
                        (this.btnstatusobj.startconsumebtndisbaled = !0),
                        (this.btnstatusobj.endconsumedisplayflag = !1),
                        void (this.btnstatusobj.startconsumeaction =
                          "cannot_consume")
                      );
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip = n),
                      (this.btnstatusobj.startconsumebtndisbaled = !1),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction = "start_consume");
                    break;
                  case "disable_startconsume":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip = "设备连接失败"),
                      (this.btnstatusobj.startconsumebtndisbaled = !0),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction = "cannot_consume");
                    break;
                  case "enable_endconsume":
                    (this.btnstatusobj.startconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumebtntip = "结束消费"),
                      (this.btnstatusobj.startconsumebtndisbaled = !0),
                      (this.btnstatusobj.endconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumeaction = "stop_consume"),
                      (this.btnstatusobj.endconsumetypeflag = !1);
                    break;
                  case "enable_connect":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip =
                        "正在连接...请稍等"),
                      (this.btnstatusobj.startconsumebtndisbaled = !0),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction =
                        "bleconn_consume");
                    break;
                  case "device_isn_outtime":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip = "设备失去连接"),
                      (this.btnstatusobj.startconsumebtndisbaled = !0),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction = "start_consume");
                    break;
                  case "order_paying":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip = "正在支付中..."),
                      (this.btnstatusobj.startconsumebtndisbaled = !0),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction = "pay_consume");
                    break;
                  case "unenableuse":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip =
                        "此设备未设定计费规则，请联系管理员"),
                      (this.btnstatusobj.startconsumebtndisbaled = !0),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction = "cannot_consume");
                    break;
                  case "needselectmode":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      3 == this.dev.device_type || 8 == this.dev.device_type
                        ? (this.btnstatusobj.startconsumebtntip =
                            "请先选择消费模式")
                        : (this.btnstatusobj.startconsumebtntip =
                            "请先选择消费时长"),
                      (this.btnstatusobj.startconsumebtndisbaled = !1),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction =
                        "selectmode_consume");
                    break;
                  case "order_waiting":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip =
                        "正在准备消费中..."),
                      (this.btnstatusobj.startconsumebtndisbaled = !0),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction =
                        "wait_orderstart");
                    break;
                  case "wait_payfinishedresult":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip =
                        "正在确认结果中..."),
                      (this.btnstatusobj.startconsumebtndisbaled = !0),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction = "wait_payresult");
                    break;
                  case "devinit_status":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip = "手动输入设备号"),
                      (this.btnstatusobj.startconsumebtndisbaled = !1),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction = "select_dev");
                    break;
                  case "devreadyconnect_status":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip =
                        "点击开始连接设备"),
                      (this.btnstatusobj.startconsumebtndisbaled = !1),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction = "ready_connect");
                    break;
                  case "devinmaintain_status":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip =
                        "设备正在维护中,换个试试吧~"),
                      (this.btnstatusobj.startconsumebtndisbaled = !0),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction = "ready_connect");
                    break;
                  case "dev_setorder_waitstart":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip =
                        "设备正在启动中,请稍等~"),
                      (this.btnstatusobj.startconsumebtndisbaled = !0),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction = "stop_consume");
                    break;
                  case "dev_finishorder_by_othernet":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip =
                        "设备正在结算中,请稍等~"),
                      (this.btnstatusobj.startconsumebtndisbaled = !0),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction =
                        "other_network_consume_finishing");
                    break;
                  case "scan_device_to_waitconsume":
                    (this.btnstatusobj.startconsumedisplayflag = !0),
                      (this.btnstatusobj.startconsumebtntip =
                        "设备正在初始化中,请稍等~"),
                      (this.btnstatusobj.startconsumebtndisbaled = !0),
                      (this.btnstatusobj.endconsumedisplayflag = !1),
                      (this.btnstatusobj.startconsumeaction = "stop_consume");
                    break;
                  default:
                    break;
                }
              },
              starthandShark: function (t) {
                e.log("---------进入握手------");
                var n = this;
                u.default.handShark(
                  n.userdata.detailinfo.id,
                  n.dev.device_id,
                  function (i, a) {
                    if (a) {
                      if (!n.checkequallyview()) return;
                      return (
                        u.default.closecoon(),
                        "ISN错误" == a || "未知错误" == a || "设备通讯失败" == a
                          ? (c.default.logger.bleerror(
                              "consume.vue",
                              "蓝牙设备数据通信失败," + JSON.stringify(a),
                              "starthandShark",
                              JSON.stringify({
                                deviceid: n.dev.device_id,
                                blename: n.dev.ble_name,
                                blemac: n.dev.ble_mac,
                              })
                            ),
                            c.default.showalert(
                              "连接失败",
                              "是否重新连接?",
                              function () {
                                uni.navigateBack({ delta: 1 });
                              },
                              function () {
                                n.bledevstartconnection();
                              },
                              !0
                            ))
                          : (("秘钥错误" != a && "CRC错误" != a) ||
                              (a = "此设备无法连接，请联系管理员"),
                            "error_record_not_exist" == a &&
                              (a = "设备已被占用!"),
                            c.default.showalert(
                              "提示",
                              a,
                              null,
                              function () {
                                uni.navigateBack({ delta: 1 });
                              },
                              !1
                            ))
                      );
                    }
                    if (
                      ((n.dev.isn = i.isn),
                      c.default.isNullOrEmpty(i.ratecmd) ||
                        3 == n.dev.device_type ||
                        5 == n.dev.device_type ||
                        u.default.writeCharacteristicWithResult(
                          "cmd_setrate",
                          n.dev.connectdevid,
                          i.ratecmd,
                          function (e, t) {}
                        ),
                      !c.default.isNullOrEmpty(i.handresult) &&
                        3 == i.handresult)
                    )
                      return c.default.showalert(
                        "连接失败",
                        "该设备已被占用,请换用其他设备",
                        null,
                        function () {
                          uni.navigateBack({ delta: 1 });
                        },
                        !1
                      );
                    if (null != i.record) {
                      var s = i.record;
                      switch (
                        (e.log("------_record------" + s.status), s.status)
                      ) {
                        case "consuming":
                        case "created":
                          return (
                            (n.CURRENT_CONSUME_ORDER = s),
                            t
                              ? void t()
                              : void n.changDeviceStatusUI("enable_endconsume")
                          );
                        default:
                          return (
                            u.default.closecoon(),
                            void c.default.showalert(
                              "连接失败",
                              "该设备已被占用,请换用其他设备",
                              null,
                              function () {
                                uni.navigateBack({ delta: 1 });
                              },
                              !1
                            )
                          );
                      }
                    }
                    if ((e.log(n.dev.change_network), n.dev.change_network))
                      return (
                        e.log("------设置ccid-------"),
                        void n.startBleEsimAction()
                      );
                    n.changDeviceStatusUI("enable_startconsume"),
                      n.refreshdowndisconndevice();
                  }
                );
              },
              refreshdowndisconndevice: function () {
                var e = this;
                this.refreshdowndisconndeviceinterval &&
                  (clearInterval(this.refreshdowndisconndeviceinterval),
                  (this.refreshdowndisconndeviceinterval = null)),
                  e.startdowndisconndevice(),
                  (this.refreshdowndisconndeviceinterval = setInterval(
                    function () {
                      e.startdowndisconndevice();
                    },
                    1e3
                  ));
              },
              startdowndisconndevice: function () {
                var e = this;
                if ("stop_consume" == e.btnstatusobj.startconsumeaction)
                  return (
                    clearInterval(this.refreshdowndisconndeviceinterval),
                    void (this.refreshdowndisconndeviceinterval = null)
                  );
                if (0 == e.bledevisncountdown) {
                  if (
                    (uni.hideLoading(),
                    (e.bledevisncountdown = 25),
                    clearInterval(this.refreshdowndisconndeviceinterval),
                    (this.refreshdowndisconndeviceinterval = null),
                    e.changDeviceStatusUI("device_isn_outtime"),
                    u.default.closecoon(),
                    !this.checkequallyview())
                  )
                    return;
                  return c.default.showalert(
                    "提示",
                    "设备失去连接,是否重新连接",
                    function () {
                      uni.navigateBack({ delta: 1 });
                    },
                    function () {
                      e.bledevstartconnection();
                    },
                    !0
                  );
                }
                e.bledevisncountdown--;
              },
              startbleConsume: function () {
                var e = this;
                c.default.showloading("通讯中"),
                  e.changDeviceStatusUI("disable"),
                  u.default.startconsume(
                    e.dev.device_id,
                    e.dev.isn,
                    function (t, n) {
                      return n
                        ? (uni.hideLoading(),
                          "存在待支付的订单！" == n
                            ? e.queryStaffPendingOrder()
                            : (("CRC错误" != n &&
                                "ISN错误" != n &&
                                "ISN随机数错误" != n &&
                                "秘钥错误" != n) ||
                                (n = "请重新连接设备"),
                              "请求签约支卡通以及商户代扣" == n ||
                              "请签约支卡通" == n ||
                              "请签约免密支付" == n
                                ? e.StartRequestSign(n)
                                : n.indexOf("余额不足") > -1
                                ? e.DisplayBalanceNotEnoughModal(n)
                                : c.default.showalert("消费失败", n)))
                        : c.default.isNullOrEmpty(t)
                        ? (uni.hideLoading(),
                          c.default.showalert("消费失败", n))
                        : ((e.CURRENT_CONSUME_ORDER = t),
                          void u.default.writeCharacteristicWithResult(
                            "cmd_startorder",
                            e.dev.connectdevid,
                            t.app_bytes,
                            function (t, n) {
                              return n
                                ? (uni.hideLoading(),
                                  c.default.showalert("操作失败", n))
                                : u.default.submitDeviceConsumeOrderResponse(
                                    e.dev.device_id,
                                    e.CURRENT_CONSUME_ORDER.order_id,
                                    t,
                                    function (t, n) {
                                      if ((uni.hideLoading(), n))
                                        return (
                                          ("CRC错误" != n &&
                                            "ISN错误" != n &&
                                            "ISN随机数错误" != n) ||
                                            (n = "请重新连接设备"),
                                          c.default.showalert("操作失败", n)
                                        );
                                      if (
                                        3 == e.dev.device_type ||
                                        5 == e.dev.device_type
                                      )
                                        return (
                                          u.default.closecoon(),
                                          e.endconsumecallback(
                                            e.CURRENT_CONSUME_ORDER
                                          )
                                        );
                                      (e.CURRENT_CONSUME_ORDER.bleConnectDevid =
                                        e.dev.connectdevid),
                                        (e.CURRENT_CONSUME_ORDER.bleIsn =
                                          e.dev.isn),
                                        e.changDeviceStatusUI(
                                          "enable_endconsume"
                                        );
                                      var i =
                                        "/pagesA/consume_status/consume_status?record=" +
                                        encodeURIComponent(
                                          JSON.stringify(
                                            e.CURRENT_CONSUME_ORDER
                                          )
                                        );
                                      return uni.redirectTo({ url: i });
                                    }
                                  );
                            }
                          ));
                    }
                  );
              },
              endconsumecallback: function (t, n) {
                try {
                  if (
                    (uni.hideLoading(),
                    e.log(t),
                    "prepare_pay" == t.status || "waiting_pay" == t.status)
                  ) {
                    var i = [
                      {
                        pay_money: t.pay_money,
                        order_id: t.order_id,
                        create_at: t.create_at,
                      },
                    ];
                    return uni.reLaunch({
                      url: "/pages/immediatepaymentorder/immediatepaymentorder?launchtype=paycharges&parameterobj=".concat(
                        encodeURIComponent(JSON.stringify(i))
                      ),
                    });
                  }
                  if (
                    ("finished" != t.status &&
                      "refund" != t.status &&
                      (n = "订单结束异常,请留意设备状态是否正常"),
                    n)
                  )
                    return c.default.showalert("操作失败", n);
                  if (
                    (4 == this.dev.device_type && u.default.closecoon(),
                    this.checkequallyview())
                  )
                    return uni.redirectTo({
                      url: "../consumeend/consumeend?orderid=" + t.order_id,
                    });
                } catch (a) {
                  return c.default.showalert(
                    "操作失败",
                    "订单结束失败,请留意设备状态是否正常"
                  );
                }
              },
              endConsumeByDevNettype: function () {
                var e = this;
                return c.default.showalert(
                  "提示",
                  "确认要结束消费吗?",
                  null,
                  function () {
                    4 == e.DEV_NETTYPE
                      ? e.bleendconsume()
                      : e.remotegprsorkeyorder();
                  },
                  !0
                );
              },
              bleendconsume: function () {
                var e = this;
                e.ControlViewpopGestureenable(!1),
                  e.changDeviceStatusUI("disable"),
                  c.default.showloading("正在结束..."),
                  u.default.createEndConsumeOrderCmd(
                    e.dev.device_id,
                    e.dev.isn,
                    function (t, n) {
                      return n
                        ? (("CRC错误" != n &&
                            "ISN错误" != n &&
                            "ISN随机数错误" != n) ||
                            (n = "结束消费失败"),
                          e.DEV_NETMODULE.length > 1
                            ? e.ChangeNetWorkToEndConsume(n)
                            : (e.ControlViewpopGestureenable(!0),
                              uni.hideLoading(),
                              c.default.showalert("结算失败", n)))
                        : c.default.isNullOrEmpty(t)
                        ? (e.ControlViewpopGestureenable(!0),
                          uni.hideLoading(),
                          c.default.showalert("结束消费失败,请重试"))
                        : void u.default.writeCharacteristicWithResult(
                            "cmd_endconsume",
                            e.dev.connectdevid,
                            t,
                            function (t, n) {
                              return (
                                e.ControlViewpopGestureenable(!0),
                                n
                                  ? e.DEV_NETMODULE.length > 1
                                    ? e.ChangeNetWorkToEndConsume(n)
                                    : (uni.hideLoading(),
                                      c.default.showalert("操作失败", n))
                                  : u.default.submitDeviceEndConsumeResponse(
                                      e.dev.device_id,
                                      t,
                                      e.endconsumecallback
                                    )
                              );
                            }
                          );
                    }
                  );
              },
              refreshorderstatus: function (e, t) {
                var n = this,
                  i = 3e3;
                "createorder_type" == t && (i = 8e3),
                  this.getorderstatusinterval &&
                    (clearInterval(this.getorderstatusinterval),
                    (this.getorderstatusinterval = null),
                    (this.getorderstatusintcount = 0)),
                  setTimeout(function () {
                    n.getorderstatus(e, t);
                  }, 2e3),
                  (this.getorderstatusinterval = setInterval(function () {
                    n.getorderstatus(e, t);
                  }, i));
              },
              getorderstatus: function (t, n) {
                var i = this;
                c.default
                  .sendapppost(
                    i.$store.state.project.server_addr +
                      c.default.API_PATH.getrecorddetail,
                    { bill_id: t, use_type: "consume" }
                  )
                  .then(function (t) {
                    if (
                      (e.log(
                        t,
                        "ret==========//////////////////////////////////////////////"
                      ),
                      !c.default.isNullOrEmpty(t))
                    ) {
                      if (
                        (i.getorderstatusintcount++,
                        "finished" == t.status ||
                          "refund" == t.status ||
                          "prepare_pay" == t.status ||
                          "waiting_pay" == t.status)
                      )
                        return (
                          clearInterval(i.getorderstatusinterval),
                          (i.getorderstatusinterval = null),
                          (i.getorderstatusintcount = 0),
                          i.endconsumecallback(t, null)
                        );
                      if ("consuming" == t.status) {
                        if (
                          -1 !==
                          [0, 2, 3, 4, 5, 8, 9].indexOf(i.dev.device_type)
                        ) {
                          uni.hideLoading(),
                            clearInterval(i.getorderstatusinterval),
                            (i.getorderstatusinterval = null),
                            (i.getorderstatusintcount = 0);
                          var a =
                            "/pagesA/consume_status/consume_status?record=" +
                            encodeURIComponent(JSON.stringify(t));
                          return uni.redirectTo({ url: a });
                        }
                        "payorder_type" == n && uni.hideLoading(),
                          i.changDeviceStatusUI("enable_endconsume"),
                          (i.CURRENT_CONSUME_ORDER = t);
                      } else if (
                        "payorder_type" == n &&
                        i.getorderstatusintcount > 2 &&
                        "created" == t.status
                      )
                        uni.hideLoading(), i.handelpayorderwaittimeout(t);
                      else if ("barrel_clean" == t.status) {
                        uni.hideLoading(),
                          clearInterval(i.getorderstatusinterval),
                          (i.getorderstatusinterval = null),
                          (i.getorderstatusintcount = 0);
                        var s =
                          "/pagesA/consume_status/consume_status?record=" +
                          encodeURIComponent(JSON.stringify(t));
                        return uni.redirectTo({ url: s });
                      }
                    }
                  })
                  .catch(function (e) {
                    i.getorderstatusintcount++;
                  });
              },
              startpaymentorder: function (e) {
                if (this.checkequallyview()) {
                  var t = {
                      consumetype: this.dev.device_type,
                      order: {
                        pay_money: e.pay_money,
                        order_id: e.order_id,
                        create_at: e.create_at,
                      },
                    },
                    n = "consume";
                  5 == e.consume_mode &&
                    ((t = [
                      {
                        pay_money: e.pay_money,
                        order_id: e.order_id,
                        create_at: e.create_at,
                      },
                    ]),
                    (n = "paycharges")),
                    uni.navigateTo({
                      url: "/pages/immediatepaymentorder/immediatepaymentorder?launchtype="
                        .concat(n, "&parameterobj=")
                        .concat(encodeURIComponent(JSON.stringify(t))),
                    }),
                    uni.hideLoading();
                }
              },
              cancelpaymentorder: function (e) {
                var t = this;
                return new Promise(function (n, i) {
                  c.default
                    .sendapppost(
                      t.$store.state.project.server_addr +
                        c.default.API_PATH.cancelimmediatepaymentorder,
                      { order_id: e }
                    )
                    .then(function (e) {
                      return n(e);
                    })
                    .catch(function (e) {
                      return i(e);
                    });
                });
              },
              openscan: function () {
                if (
                  "stop_consume" != this.btnstatusobj.startconsumeaction &&
                  "bleconn_consume" != this.btnstatusobj.startconsumeaction
                ) {
                  var t = this;
                  c.default.StartScan(function (n, i) {
                    if (i)
                      return uni.showToast({
                        title: i,
                        position: "center",
                        icon: "none",
                      });
                    var o = c.default.ParseScanResult(n, g);
                    if ("p" == o.t)
                      return uni.redirectTo({
                        url: "/pagesB/ZhuliPay/center?device_id="
                          .concat(o.d, "&order_id=")
                          .concat(o.o),
                      });
                    if (
                      c.default.isNullOrEmpty(o.d) &&
                      c.default.isNullOrEmpty(o.mac)
                    )
                      return uni.showToast({
                        mask: !0,
                        title: "二维码内容错误",
                        duration: 2e3,
                        icon: "none",
                      });
                    c.default.showloading("加载中...");
                    var r =
                        t.$store.state.project.server_addr +
                        c.default.API_PATH.getdevicebyid,
                      l = { id: o.d };
                    c.default.isNullOrEmpty(o.mac) ||
                      ((r =
                        t.$store.state.project.server_addr +
                        c.default.API_PATH.getdevicebymac),
                      (l = { mac: o.mac })),
                      c.default
                        .sendapppost(r, l)
                        .then(function (e) {
                          uni.hideLoading(), (t.dev = e);
                        })
                        .catch(
                          (function () {
                            var t = (0, s.default)(
                              (0, a.default)().mark(function t(n) {
                                var i;
                                return (0, a.default)().wrap(
                                  function (t) {
                                    while (1)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          if (
                                            (e.log("bindResult==err==>", n),
                                            uni.hideLoading(),
                                            "设备不存在" != n)
                                          ) {
                                            t.next = 15;
                                            break;
                                          }
                                          return (
                                            (t.prev = 3),
                                            (t.next = 6),
                                            c.default.bindProjectByDeviceId(
                                              l.id
                                            )
                                          );
                                        case 6:
                                          (i = t.sent),
                                            e.log("bindResult====>", i),
                                            (t.next = 13);
                                          break;
                                        case 10:
                                          (t.prev = 10),
                                            (t.t0 = t["catch"](3)),
                                            e.log("bindResult==e==>", t.t0);
                                        case 13:
                                          t.next = 16;
                                          break;
                                        case 15:
                                          c.default.showalert("提示", n);
                                        case 16:
                                        case "end":
                                          return t.stop();
                                      }
                                  },
                                  t,
                                  null,
                                  [[3, 10]]
                                );
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        );
                  });
                }
              },
              CheckSingleConsumeMode: function () {
                switch (this.dev.device_type) {
                  case 3:
                    if (
                      c.default.isNullOrEmpty(
                        this.selectmodalconfig.modalxiyicontent
                      ) ||
                      0 == this.selectmodalconfig.modalxiyicontent.length
                    )
                      return (
                        this.changDeviceStatusUI("unenableuse"),
                        c.default.showalert(
                          "提示",
                          "此设备未设定计费规则，请联系管理员"
                        )
                      );
                    this.selectmodalconfig.showmodaltitle = "请先选择消费模式";
                    break;
                  case 5:
                    if (
                      c.default.isNullOrEmpty(
                        this.selectmodalconfig.modalchuifengcontent
                      ) ||
                      0 == this.selectmodalconfig.modalchuifengcontent.length
                    )
                      return (
                        this.changDeviceStatusUI("unenableuse"),
                        c.default.showalert(
                          "提示",
                          "此设备未设定计费规则，请联系管理员"
                        )
                      );
                    if (0 == this.selectmodalconfig.chuifengfixedvalueenable)
                      return;
                    this.selectmodalconfig.showmodaltitle = "请先选择消费时长";
                    break;
                  case 8:
                    if (
                      c.default.isNullOrEmpty(
                        this.selectmodalconfig.modalxixiecontent
                      ) ||
                      0 == this.selectmodalconfig.modalxixiecontent.length
                    )
                      return (
                        this.changDeviceStatusUI("unenableuse"),
                        c.default.showalert(
                          "提示",
                          "此设备未设定计费规则，请联系管理员"
                        )
                      );
                    this.selectmodalconfig.showmodaltitle = "请选择洗鞋模式";
                    break;
                  case 9:
                    if (
                      c.default.isNullOrEmpty(
                        this.selectmodalconfig.modalhonggancontent
                      ) ||
                      0 ==
                        this.selectmodalconfig.modalhonggancontent[0]
                          .temperaturelist.length
                    )
                      return (
                        this.changDeviceStatusUI("unenableuse"),
                        c.default.showalert(
                          "提示",
                          "此设备未设定计费规则，请联系管理员"
                        )
                      );
                    this.selectmodalconfig.showmodaltitle = "请选择烘干模式";
                    break;
                  default:
                    break;
                }
                (this.selectmodalconfig.showmodalflag = !0),
                  this.changDeviceStatusUI("needselectmode");
              },
              changeconsumemode: function () {
                return c.default.isNullOrEmpty(this.dev)
                  ? c.default.showalert("提示", "请先选择设备")
                  : "stop_consume" != this.btnstatusobj.startconsumeaction &&
                    (("start_consume" != this.btnstatusobj.startconsumeaction &&
                      "bleconn_consume" !=
                        this.btnstatusobj.startconsumeaction) ||
                      4 != this.DEV_NETTYPE ||
                      5 != this.dev.device_type)
                  ? 6 == this.dev.status
                    ? this.changDeviceStatusUI("devinmaintain_status")
                    : void this.CheckSingleConsumeMode()
                  : void 0;
              },
              getdevbyid: function (e) {
                var t = this;
                return new Promise(function (n, i) {
                  c.default
                    .sendapppost(
                      t.$store.state.project.server_addr +
                        c.default.API_PATH.getdevicebyid,
                      { id: e }
                    )
                    .then(function (e) {
                      return n(e);
                    })
                    .catch(function (e) {
                      return i(e);
                    });
                });
              },
              querydevbyid: function () {
                var e = this;
                "selectmode_consume" == this.btnstatusobj.startconsumeaction &&
                  (this.selectmodalconfig.xiyiSelectWorkerFlag = !1);
                var t = this;
                (this.showinputmodalflag = !1),
                  c.default.isNullOrEmpty(this.inputidtext) ||
                    setTimeout(function () {
                      uni.showLoading({ title: "查询中..." }),
                        e
                          .getdevbyid(e.inputidtext)
                          .then(function (e) {
                            uni.hideLoading(), uni.hideKeyboard(), (t.dev = e);
                          })
                          .catch(function (e) {
                            setTimeout(function () {
                              uni.hideLoading(), c.default.showalert("提示", e);
                            }, 300);
                          })
                          .finally(function () {
                            t.inputidtext = "";
                          });
                    }, 300);
              },
              GetStaffConsumingOrder: function (e) {
                if (!c.default.isNullOrEmpty(this.userdata.detailinfo)) {
                  c.default.QueryProjectSwitch();
                  var t = this,
                    n = function () {
                      var n = {};
                      if (c.default.isNullOrEmpty(e)) {
                        if (
                          "blower" == t.CONSUMETYPE ||
                          "laundry" == t.CONSUMETYPE
                        )
                          return;
                        var i = null,
                          a = t.$store.state.HistoryDevice;
                        (c.default.isNullOrEmpty(a) || 0 == a.length) &&
                          (a = []);
                        for (var s = 0; s < a.length; s++)
                          if (
                            l.default.EnumDeviceConsumeType[a[s].devicetype] ==
                              t.CONSUMETYPE &&
                            t.project.server_appid == a[s].pid
                          ) {
                            i = a[s];
                            break;
                          }
                        if (null == i) return;
                        t.getdevbyid(i.id)
                          .then(function (e) {
                            t.dev = e;
                          })
                          .catch(function (e) {});
                      } else
                        (n = JSON.parse(decodeURIComponent(e))), (t.dev = n);
                    };
                  c.default
                    .sendapppost(
                      t.$store.state.project.server_addr +
                        c.default.API_PATH.getStaffConsumeing,
                      {
                        user_id: t.userdata.detailinfo.id,
                        net_type:
                          l.default.GetAppointmentUseDevnetType("consume"),
                      }
                    )
                    .then(function (e) {
                      var i = t.selectisconsumingorder(e, t.CONSUMETYPE);
                      i
                        ? t
                            .getdevbyid(i.device_id)
                            .then(function (e) {
                              if (t.checkequallyview()) {
                                if (
                                  -1 ===
                                  [0, 2, 3, 4, 5, 8, 9].indexOf(e.device_type)
                                )
                                  (t.dev = e),
                                    (t.ACTFLAG = "consuming"),
                                    (t.modebtnflag = !1),
                                    t.changDeviceStatusUI("enable_endconsume"),
                                    (t.CURRENT_CONSUME_ORDER = i),
                                    setTimeout(function () {
                                      if (
                                        !c.default.isNullOrEmpty(
                                          t.dev.net_module
                                        ) &&
                                        ((t.DEV_NETMODULE =
                                          t.dev.net_module.split(",")),
                                        t.DEV_NETMODULE.length > 1)
                                      )
                                        for (
                                          var e = 0;
                                          e < t.DEV_NETMODULE.length;
                                          e++
                                        )
                                          if ("4" != t.DEV_NETMODULE[e]) {
                                            t.DEV_NETTYPE = Number(
                                              t.DEV_NETMODULE[e]
                                            );
                                            break;
                                          }
                                      t.refreshorderstatus(
                                        i.order_id,
                                        "createorder_type"
                                      );
                                    }, 300);
                                else {
                                  (function () {
                                    c.default.showalert(
                                      "提示",
                                      "有一笔订单正在消费中，是否前去查看?",
                                      function () {
                                        n();
                                      },
                                      function () {
                                        var e =
                                          "/pagesA/consume_status/consume_status?record=" +
                                          encodeURIComponent(JSON.stringify(i));
                                        return uni.redirectTo({ url: e });
                                      },
                                      !0,
                                      "否",
                                      "是"
                                    );
                                  })();
                                }
                              }
                            })
                            .catch(function (e) {})
                        : n();
                    })
                    .catch(function (e) {
                      n();
                    });
                }
              },
              selectisconsumingorder: function (e, t) {
                var n = null;
                if (0 == e.length || c.default.isNullOrEmpty(e)) return n;
                for (var i = 0; i < e.length; i++)
                  if (e[i].consume_type == t) {
                    n = e[i];
                    break;
                  }
                return n;
              },
              handelpayorderwaittimeout: function (e) {
                var t = this;
                return (
                  clearInterval(this.getorderstatusinterval),
                  (this.getorderstatusinterval = null),
                  (this.getorderstatusintcount = 0),
                  3 == this.dev.device_type
                    ? c.default.showalert(
                        "提示",
                        "设备可能长时间未响应,请留意设备运行状态",
                        null,
                        function () {
                          uni.navigateBack({ delta: 1 });
                        },
                        !1
                      )
                    : c.default.showalert(
                        "提示",
                        "请确认设备是否已经开始消费",
                        function () {
                          setTimeout(function () {
                            c.default.showalert(
                              "提示",
                              "设备可能长时间未响应,是否继续等待",
                              function () {
                                t.OauthLogin.isScanConsume
                                  ? uni.reLaunch({ url: "/pages/index/index" })
                                  : uni.navigateBack({ delta: 1 });
                              },
                              function () {
                                t.finishedpaystartquerystatus(e);
                              },
                              !0,
                              "否",
                              "是"
                            );
                          }, 300);
                        },
                        function () {
                          uni.hideLoading(),
                            t.changDeviceStatusUI("enable_endconsume"),
                            (t.CURRENT_CONSUME_ORDER = e);
                        },
                        !0,
                        "否",
                        "是"
                      )
                );
              },
              finishedpaystartquerystatus: function (e) {
                c.default.showloading("确认结果中"),
                  this.changDeviceStatusUI("wait_payfinishedresult"),
                  this.refreshorderstatus(e.order_id, "payorder_type");
              },
              getneedshownotice: function () {
                var e = this.$store.state.project.notice;
                if (!c.default.isNullOrEmpty(e)) {
                  var t = this.consumestyleconfig.pageurl;
                  if (!this.$store.state.ConsumeViewNoticeDialogFlag[t]) {
                    for (
                      var n = c.default.checkneedshownotice(t, e),
                        i = [],
                        a = 0;
                      a < n.length;
                      a++
                    ) {
                      for (
                        var s = !0, o = this.noticemodal.noticearr, r = 0;
                        r < o.length;
                        r++
                      )
                        if (o[r].noticeid == n[a].noticeid) {
                          s = !1;
                          break;
                        }
                      s && i.push(n[a]);
                    }
                    i.length > 0 && c.default.shownoticecontent(this, i);
                  }
                }
              },
              closenoticemodal: function () {
                this.$store.commit(
                  "SetConsumeViewNoticeDialogFlag",
                  this.consumestyleconfig.pageurl
                ),
                  c.default.closenoticemodal(this);
              },
              checkequallyview: function () {
                var e = getCurrentPages(),
                  t = e[e.length - 1];
                return !t || "pagesA/consume/consume" == t.route;
              },
              SelectBleDevOtherNettypeToConsume: function () {
                for (var e = 0; e < this.DEV_NETMODULE.length; e++)
                  if ("4" != this.DEV_NETMODULE[e]) {
                    this.DEV_NETTYPE = Number(this.DEV_NETMODULE[e]);
                    break;
                  }
                return (
                  (this.IsNeedOtherNetworkConnect = !1),
                  this.changDeviceStatusUI("enable_startconsume")
                );
              },
              SelectDevChangeBleToConsume: function () {
                e.log("SelectDevChangeBleToConsume=====================>"),
                  (this.IsNeedOtherNetworkConnect = !1),
                  this.ControlViewpopGestureenable(!0),
                  (this.DEV_NETTYPE = 4),
                  this.bledevstartconnection();
              },
              ControlViewpopGestureenable: function (t) {
                e.log("ControlViewpopGestureenable=====================>", t),
                  zl.system.onBackPress(function () {
                    return { allow: !!t };
                  });
              },
              SelectedDevidToQueryInfo: function (e) {
                var t = this;
                uni.showLoading({ title: "加载中..." }),
                  this.getdevbyid(e)
                    .then(function (e) {
                      t.dev = e;
                    })
                    .catch(function (e) {})
                    .finally(function () {
                      uni.hideLoading();
                    });
              },
              CheckWaterTimeIsInsection: function (t) {
                var n = { result: !0, fn: function () {} },
                  i = (new Date(), "");
                try {
                  if (
                    "[]" != this.dev.water_supply_time &&
                    !c.default.isNullOrEmpty(this.dev.water_supply_time)
                  )
                    for (
                      var a = JSON.parse(this.dev.water_supply_time),
                        s = !1,
                        o = 0;
                      o < a.length;
                      o++
                    ) {
                      var r = new Date(
                          a[o].start_time.replace("T", " ").replace(/\-/g, "/")
                        ),
                        l = new Date(
                          a[o].end_time.replace("T", " ").replace(/\-/g, "/")
                        ),
                        u = new Date().setHours(
                          r.Format("hh:mm").split(":")[0],
                          r.Format("hh:mm").split(":")[1],
                          0
                        ),
                        d = new Date().setHours(
                          l.Format("hh:mm").split(":")[0],
                          l.Format("hh:mm").split(":")[1],
                          0
                        );
                      if (
                        new Date().getTime() < new Date(u).getTime() &&
                        new Date().getTime() > new Date(u).getTime() - 9e5
                      ) {
                        var f = (function () {
                          e.log("开启前15分钟");
                          var i = Math.ceil(
                            Math.abs(
                              new Date(u).getTime() - new Date().getTime()
                            ) / 6e4
                          );
                          return (
                            (n.result = !1),
                            (n.fn = function () {
                              return c.default.showalert(
                                "提示",
                                "距离服务时间还有" +
                                  i +
                                  "分钟开启,请您规划好用水时间",
                                null,
                                function () {
                                  t && t();
                                },
                                !1,
                                "",
                                "继续使用"
                              );
                            }),
                            "break"
                          );
                        })();
                        if ("break" === f) break;
                      }
                      if (
                        new Date().getTime() < new Date(d).getTime() &&
                        new Date().getTime() > new Date(d).getTime() - 9e5
                      ) {
                        e.log("关闭前15分钟"),
                          (n.result = !1),
                          (n.fn = function () {
                            return c.default.showalert(
                              "提示",
                              "服务时间剩余不足15分钟,请您规划好用水时间",
                              null,
                              function () {
                                t && t();
                              },
                              !1,
                              "",
                              "继续使用"
                            );
                          });
                        break;
                      }
                      (new Date().getTime() < new Date(u).getTime() ||
                        new Date().getTime() > new Date(d).getTime()) &&
                      !s
                        ? ((i +=
                            r.Format("hh:mm") + "-" + l.Format("hh:mm") + " "),
                          o == a.length - 1 &&
                            ((n.result = !1),
                            this.project.projectswitch &&
                            1 == this.project.projectswitch.force_supply_time
                              ? (n.fn = function () {
                                  return c.default.showalert(
                                    "提示",
                                    "不在服务时间内无法使用,当前服务时间段为" +
                                      i,
                                    null,
                                    null,
                                    !1,
                                    "",
                                    "我知道了"
                                  );
                                })
                              : (n.fn = function () {
                                  return c.default.showalert(
                                    "提示",
                                    "不在服务时间内是否继续使用?当前服务时间段为" +
                                      i,
                                    null,
                                    function () {
                                      t && t();
                                    },
                                    !0,
                                    "暂不使用",
                                    "继续使用"
                                  );
                                })))
                        : (s = !0);
                    }
                } catch (h) {
                  e.log(h),
                    c.default.logger.error(
                      "consume.vue",
                      h,
                      "CheckWaterTimeIsInsection-" + this.dev.device_id
                    );
                } finally {
                  return e.log(n.fn.toString()), n;
                }
              },
              hongganTemperatureChange: function (e) {
                (this.selectmodalconfig.modalhonggancontent[0].selectedtemperature =
                  e),
                  1 == this.selectmodalconfig.hongganfixedvalueenable &&
                    this.HongganCreateTimeListBySelectTemp(e);
              },
              HongganCreateTimeListBySelectTemp: function (e) {
                for (
                  var t = [], n = 0;
                  n < this.selectmodalconfig.hongganOriginalChargeRule.length;
                  n++
                ) {
                  var i = this.selectmodalconfig.hongganOriginalChargeRule[n];
                  i.temp_level == e.temp_level && t.push(i);
                }
                for (
                  var a = !1, s = 0;
                  s <
                  this.selectmodalconfig.modalhonggancontent[0].timelist.length;
                  s++
                ) {
                  for (var o = !1, c = 0; c < t.length; c++)
                    this.selectmodalconfig.modalhonggancontent[0].timelist[s]
                      .time == t[c].value && (o = !0);
                  (this.selectmodalconfig.modalhonggancontent[0].timelist[
                    s
                  ].disable = !o),
                    this.selectmodalconfig.modalhonggancontent[0].timelist[s]
                      .time ==
                      this.selectmodalconfig.modalhonggancontent[0].selectedtime
                        .time &&
                      this.selectmodalconfig.modalhonggancontent[0].timelist[s]
                        .disable &&
                      (a = !0);
                }
                if (a) {
                  var l =
                    this.selectmodalconfig.modalhonggancontent[0].timelist.find(
                      function (e) {
                        return !1 === e.disable;
                      }
                    );
                  this.selectmodalconfig.modalhonggancontent[0].selectedtime =
                    (0, r.default)({}, l);
                }
              },
              hongganTimeChange: function (e) {
                e.disable ||
                  (this.selectmodalconfig.modalhonggancontent[0].selectedtime =
                    (0, r.default)({}, e));
              },
              queryStaffPendingOrder: function () {
                var t = this;
                uni.showLoading({ title: "正在处理中..." }),
                  c.default
                    .sendapppost(
                      this.$store.state.project.server_addr +
                        c.default.API_PATH.QueryPendingOrder,
                      { user_id: this.userdata.detailinfo.id }
                    )
                    .then(function (n) {
                      (n = n.filter(function (e) {
                        return "finished" != e.order_status;
                      })),
                        e.log(n);
                      var i = n.length;
                      (function () {
                        c.default.showalert(
                          "提示",
                          "你有".concat(
                            i,
                            "笔待支付的订单,请先支付后再继续使用"
                          ),
                          null,
                          function () {
                            return (
                              t.changDeviceStatusUI("enable_startconsume"),
                              uni.navigateTo({
                                url: "/pages/immediatepaymentorder/immediatepaymentorder?launchtype=paycharges&parameterobj=".concat(
                                  encodeURIComponent(JSON.stringify(n))
                                ),
                              })
                            );
                          },
                          !1,
                          "",
                          "前去支付"
                        );
                      })();
                    })
                    .catch(function (t) {
                      e.log(t);
                    })
                    .finally(function () {
                      uni.hideLoading();
                    });
              },
              OtherXiyiModelChange: function (e, t) {
                return (0, d.XiyiModelChange)(e, t, this);
              },
              InitOtherXiyiExistedChargeRule: function () {
                (this.selectmodalconfig.xiyiSelectWorkerFlag = !0),
                  (this.selectmodalconfig.xiyiWorkerRinseContent[0].disable =
                    !0),
                  (this.selectmodalconfig.xiyiWorkerTemperatureContent[0].disable =
                    !0),
                  (this.selectmodalconfig.xiyiWorkerTemperatureContent[1].disable =
                    !0),
                  (0, d.InitXiyiModelContent)(this);
              },
              OtherXiyiModelSelectFinished: function () {
                var t = (0, d.CalcOtherXiyiModelValue)(this),
                  n = this.selectmodalconfig.xiyiOriginalChargeRule.find(
                    function (e) {
                      return e.value == t;
                    }
                  );
                c.default.isNullOrEmpty(n)
                  ? uni.showToast({
                      title: "该功能选项不支持，请重新选择~",
                      position: "center",
                      duration: 3e3,
                    })
                  : (e.log(n),
                    (this.selectmodalconfig.showmodalflag = !1),
                    (this.CONSUMEMONEY = n.price),
                    (this.CONSUMEVALUE = n.value),
                    (this.FixValueConsumeModel = (0, r.default)({}, n)),
                    this.selectmodalconfig.xiyiBarrelCleanUseSwitch &&
                      (this.FixValueConsumeModel.name =
                        "桶自洁," + this.FixValueConsumeModel.name),
                    4 == this.dev.net_type
                      ? this.changDeviceStatusUI("devreadyconnect_status")
                      : this.changDeviceStatusUI("enable_startconsume"));
              },
              ContainBleSpecialRequestBleIsUsefully: function () {
                try {
                  this.$store.state.SystemInfo.platform;
                  u.default.initbledevice(this, function (e, t) {
                    if (t)
                      return c.default.showalert(
                        "检查蓝牙",
                        "蓝牙未开启或不可用",
                        null,
                        function () {
                          uni.navigateBack({ delta: 1 });
                        },
                        !1
                      );
                  });
                } catch (e) {}
              },
              ChangeNetWorkToEndConsume: function (t) {
                var n = this;
                if ((e.log(t), this.IsNeedOtherNetworkEndConsume))
                  return (
                    uni.hideLoading(),
                    (this.IsNeedOtherNetworkEndConsume = !1),
                    this.changDeviceStatusUI("enable_endconsume"),
                    c.default.showalert("提示", t)
                  );
                setTimeout(function () {
                  c.default
                    .sendapppost(
                      n.$store.state.project.server_addr +
                        c.default.API_PATH.getrecorddetail,
                      {
                        bill_id: n.CURRENT_CONSUME_ORDER.order_id,
                        use_type: "consume",
                      }
                    )
                    .then(function (e) {
                      if (!c.default.isNullOrEmpty(e)) {
                        if ("consuming" != e.status)
                          return (
                            uni.hideLoading(),
                            clearInterval(n.getorderstatusinterval),
                            (n.getorderstatusinterval = null),
                            (n.getorderstatusintcount = 0),
                            n.endconsumecallback(e, null)
                          );
                        var t,
                          i = n.DEV_NETTYPE;
                        n.IsNeedOtherNetworkEndConsume = !0;
                        for (var a = 0; a < n.DEV_NETMODULE.length; a++)
                          if (n.DEV_NETMODULE[a] != i.toString()) {
                            t = Number(n.DEV_NETMODULE[a]);
                            break;
                          }
                        n.changDeviceStatusUI("dev_finishorder_by_othernet"),
                          4 == t
                            ? n.bledevstartconnection(n.bleendconsume.bind(n))
                            : n.remotegprsorkeyorder();
                      }
                    })
                    .catch(function (e) {
                      return (
                        uni.hideLoading(),
                        (n.IsNeedOtherNetworkEndConsume = !1),
                        n.changDeviceStatusUI("enable_endconsume"),
                        c.default.showalert("提示", e)
                      );
                    });
                }, 1e3);
              },
              HandleBleProfileDataError: function (e) {
                c.default.logger.bleerror(
                  "consume.vue",
                  "蓝牙设备写号异常," + e,
                  "scanbleandtryconn",
                  JSON.stringify({
                    deviceid: this.dev.device_id,
                    blename: this.dev.ble_name,
                    blemac: this.dev.ble_mac,
                  })
                ),
                  this.changDeviceStatusUI("enable_startconsume"),
                  this.refreshdowndisconndevice();
              },
              HandelDevUrLaction: function (t) {
                var n = this;
                return (0, s.default)(
                  (0, a.default)().mark(function i() {
                    var s, o, r, l;
                    return (0, a.default)().wrap(function (i) {
                      while (1)
                        switch ((i.prev = i.next)) {
                          case 0:
                            if (
                              (e.log("url--------------" + t),
                              (n.OauthLogin.isScanConsume = !0),
                              n.changDeviceStatusUI(
                                "scan_device_to_waitconsume"
                              ),
                              (s = c.default.ParseScanResult(t).d),
                              (n.dev.device_id = s),
                              !c.default.isNullOrEmpty(n.userdata))
                            ) {
                              i.next = 10;
                              break;
                            }
                            return (
                              n.GetLoginCode(),
                              (n.OauthLogin.show = !0),
                              (n.OauthLogin.device_id = s),
                              i.abrupt("return")
                            );
                          case 10:
                            return (
                              (i.next = 12),
                              n.getdevbyid(s).catch(function (t) {
                                e.log("-----查询设备信息------", t);
                              })
                            );
                          case 12:
                            if (
                              ((o = i.sent),
                              e.log("-----------deviceInfo-----------", o),
                              (r = !1),
                              !o)
                            ) {
                              i.next = 20;
                              break;
                            }
                            return (
                              (i.next = 18), n.WaitCompareDeviceProjectInfo(s)
                            );
                          case 18:
                            (r = i.sent),
                              e.log("-----------compare_ret-----------", r);
                          case 20:
                            (l = n.$store.state.user),
                              o && r && l.isbind
                                ? ((n.dev = o),
                                  n.handlePageurl(o.device_type),
                                  n.getneedshownotice(),
                                  (0, h.getUserShowAd)())
                                : !o && r
                                ? (n.changDeviceStatusUI("devinit_status"),
                                  c.default.showalert("提示", "设备不存在"))
                                : n.ChangeProject(s);
                          case 22:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  })
                )();
              },
              GetLoginCode: function () {
                var t = this;
                return new Promise(
                  (function () {
                    var n = (0, s.default)(
                      (0, a.default)().mark(function n(i, s) {
                        return (0, a.default)().wrap(function (n) {
                          while (1)
                            switch ((n.prev = n.next)) {
                              case 0:
                                uni.login({
                                  scopes: "auth_user",
                                  success: function (n) {
                                    e.log(
                                      "----------------登录信息------loginRes-------",
                                      n
                                    ),
                                      (t.OauthLogin.code = n.code),
                                      i(!0);
                                  },
                                  fail: function (t) {
                                    e.log(
                                      "----------------登录信息------err-------",
                                      t
                                    ),
                                      i(!1);
                                  },
                                });
                              case 1:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                      })
                    );
                    return function (e, t) {
                      return n.apply(this, arguments);
                    };
                  })()
                );
              },
              GetUserinfo: function (t) {
                e.log(
                  "----------------登录信息------------------",
                  this.OauthLogin.code
                );
              },
              OnGetPhoneNumber: function (t) {
                e.log(
                  "-------------加密手机号---------------" +
                    JSON.stringify(t.detail)
                ),
                  t.detail.errMsg && t.detail.errMsg.indexOf("fail") > -1
                    ? (this.OauthLogin.EncryptedPhoneData = "fail")
                    : ((this.OauthLogin.EncryptedPhoneData =
                        t.detail.encryptedData),
                      (this.OauthLogin.EncryptedPhoneDataIv = t.detail.iv));
              },
              WaitGetPhoneNumber: function () {
                var t = this;
                return (0, s.default)(
                  (0, a.default)().mark(function n() {
                    return (0, a.default)().wrap(function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return n.abrupt(
                              "return",
                              new Promise(
                                (function () {
                                  var n = (0, s.default)(
                                    (0, a.default)().mark(function n(i, s) {
                                      var o;
                                      return (0, a.default)().wrap(function (
                                        n
                                      ) {
                                        while (1)
                                          switch ((n.prev = n.next)) {
                                            case 0:
                                              0,
                                                (o = function () {
                                                  e.log(
                                                    "-------------" +
                                                      t.OauthLogin
                                                        .EncryptedPhoneData
                                                  ),
                                                    "" !=
                                                      t.OauthLogin
                                                        .EncryptedPhoneData &&
                                                      (clearInterval(
                                                        t.PhoneInterval
                                                      ),
                                                      i(!0));
                                                }),
                                                (t.PhoneInterval = setInterval(
                                                  function () {
                                                    o();
                                                  },
                                                  100
                                                ));
                                            case 3:
                                            case "end":
                                              return n.stop();
                                          }
                                      },
                                      n);
                                    })
                                  );
                                  return function (e, t) {
                                    return n.apply(this, arguments);
                                  };
                                })()
                              )
                            );
                          case 1:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
              ServeLogin: function (t) {
                var n = this;
                c.default.showloading("登录授权中..."),
                  c.default
                    .sendauthpost(
                      c.default.AUTH_SERVER_ADDR + c.default.API_PATH.login,
                      t
                    )
                    .then(function (i) {
                      if ((e.log(i), !i.isbind && "isbind" in i)) {
                        uni.hideLoading();
                        var a =
                          "../userbindproject/userbindproject?logintype=account&userid=" +
                          i.userid +
                          "&authid=" +
                          i.authid;
                        return uni.redirectTo({ url: a });
                      }
                      (i.opendatainfo = n.OauthLogin.userinfo),
                        (i.id = i.serveruserid),
                        delete i["serveruserid"],
                        n.$store.commit("SetUserData", i),
                        (n.OauthLogin.userinfo = i);
                      var s = i.project;
                      n.$store.commit("SetProjectData", s),
                        n.RequestUserinfo(t.device_id, !0),
                        (0, h.getUserShowAd)();
                    })
                    .catch(function (t) {
                      return (
                        uni.hideLoading(),
                        c.default.showalert(
                          "提示",
                          t,
                          null,
                          function () {
                            n.$store.commit("SetUserData", null),
                              n.$store.commit("SetProjectData", null),
                              e.log(n.userdata),
                              n.changDeviceStatusUI("devinit_status"),
                              n.GetLoginCode();
                          },
                          !1
                        )
                      );
                    });
              },
              ChangeProject: function (t) {
                var n = {
                    device_id: t,
                    phone:
                      this.userdata.phone || this.userdata.detailinfo.phone,
                    oauth_type: c.default.getplatformtype(),
                  },
                  i = this;
                e.log(n),
                  c.default.showloading("环境切换中..."),
                  c.default
                    .sendauthget(
                      c.default.DOMAIN_AUTH_SERVER_ADDR +
                        "webapi/" +
                        c.default.API_PATH.UserChangeProject,
                      n
                    )
                    .then(function (t) {
                      e.log(t),
                        i.$store.commit("SetUserData", t.user_info),
                        (i.OauthLogin.userinfo = t.user_info);
                      var a = t.server_info;
                      i.$store.commit("SetProjectData", a),
                        i.RequestUserinfo(n.device_id, !1),
                        (0, h.getUserShowAd)();
                    })
                    .catch(function (e) {
                      uni.hideLoading(),
                        i.changDeviceStatusUI("devinit_status"),
                        c.default.showalert("提示", e);
                    });
              },
              RequestUserinfo: function (t, n) {
                var i = this;
                return (0, s.default)(
                  (0, a.default)().mark(function s() {
                    var o, r, l, u, d;
                    return (0, a.default)().wrap(
                      function (a) {
                        while (1)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (o = i),
                                (a.next = 3),
                                c.default.RefreshUserinfo()
                              );
                            case 3:
                              return (
                                (r = a.sent),
                                (o.OauthLogin.userinfo = r),
                                (o.userdata = r),
                                o.$store.state.project,
                                o.$store.commit("SetAllRequestFlagDefault"),
                                (a.prev = 8),
                                (a.next = 11),
                                o.getdevbyid(t)
                              );
                            case 11:
                              (l = a.sent),
                                (o.dev = l),
                                (o.OauthLogin.show = !1),
                                (a.next = 23);
                              break;
                            case 16:
                              return (
                                (a.prev = 16),
                                (a.t0 = a["catch"](8)),
                                uni.hideLoading(),
                                e.log("-----查询设备信息------", a.t0),
                                o.GetLoginCode(),
                                c.default.showalert("提示", a.t0),
                                a.abrupt("return")
                              );
                            case 23:
                              return (
                                (a.next = 25), c.default.RequestServerNotice()
                              );
                            case 25:
                              for (u = !1, d = 0; d < o.rules.length; d++)
                                o.rules[d].device_group_id == o.dev.group_id &&
                                  (u = !0);
                              u || o.changDeviceStatusUI("unenableuse"),
                                n && u
                                  ? setTimeout(function () {
                                      o.startconsumebydevnettype();
                                    }, 500)
                                  : uni.hideLoading();
                            case 29:
                            case "end":
                              return a.stop();
                          }
                      },
                      s,
                      null,
                      [[8, 16]]
                    );
                  })
                )();
              },
              WaitCompareDeviceProjectInfo: function (t) {
                var n = this;
                return (0, s.default)(
                  (0, a.default)().mark(function i() {
                    return (0, a.default)().wrap(function (i) {
                      while (1)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return i.abrupt(
                              "return",
                              new Promise(
                                (function () {
                                  var i = (0, s.default)(
                                    (0, a.default)().mark(function i(s, o) {
                                      return (0, a.default)().wrap(function (
                                        i
                                      ) {
                                        while (1)
                                          switch ((i.prev = i.next)) {
                                            case 0:
                                              c.default.showloading(
                                                "设备加载中..."
                                              ),
                                                c.default
                                                  .sendauthget(
                                                    c.default
                                                      .DOMAIN_AUTH_SERVER_ADDR +
                                                      "webapi/" +
                                                      c.default.API_PATH
                                                        .QueryDeviceInfo,
                                                    { device_id: t }
                                                  )
                                                  .then(function (t) {
                                                    e.log(t),
                                                      t.server_appid ==
                                                      n.project.server_appid
                                                        ? s(!0)
                                                        : s(!1);
                                                  })
                                                  .catch(function (e) {
                                                    s(!1);
                                                  })
                                                  .finally(function () {
                                                    uni.hideLoading();
                                                  });
                                            case 2:
                                            case "end":
                                              return i.stop();
                                          }
                                      },
                                      i);
                                    })
                                  );
                                  return function (e, t) {
                                    return i.apply(this, arguments);
                                  };
                                })()
                              )
                            );
                          case 1:
                          case "end":
                            return i.stop();
                        }
                    }, i);
                  })
                )();
              },
              RequesetAlipayOneAuthSignParams: function (t) {
                var n = this;
                uni.showLoading({ title: "请求签约中..." }),
                  c.default
                    .sendapppost(
                      this.$store.state.project.server_addr +
                        c.default.API_PATH.GetSingleWithholdingSign,
                      { order_id: t }
                    )
                    .then(function (i) {
                      e.log(i),
                        my.paySignCenter({
                          signStr: i,
                          success: function (i) {
                            e.log(i),
                              "7000" == i.resultStatus
                                ? (n.changDeviceStatusUI("enable_endconsume"),
                                  n.refreshorderstatus(t, "createorder_type"),
                                  n.ControlViewpopGestureenable(!0))
                                : n.changDeviceStatusUI("enable_startconsume");
                          },
                          fail: function (t) {
                            e.log(t);
                          },
                        });
                    })
                    .catch(function (t) {
                      n.changDeviceStatusUI("devinit_status"), e.log(t);
                    })
                    .finally(function () {
                      uni.hideLoading();
                    });
              },
              StartRequestSign: function (e) {
                var t = this,
                  n = e,
                  i = "ZCard";
                0 == Number(this.project.projectswitch.branch_card_enable) &&
                  ((i = "alipayWithhold"), (n = "请签约免密支付")),
                  uni.hideLoading();
                return c.default.showalert(
                  "提示",
                  n,
                  function () {
                    t.changDeviceStatusUI("enable_startconsume");
                  },
                  function () {
                    (function () {
                      t.changDeviceStatusUI("enable_startconsume"),
                        c.default.NavigateToAlipayPage(
                          "/pagesB/PaySign/PaySign",
                          { type: i, source: "consume" }
                        );
                    })();
                  },
                  !0,
                  "不用了",
                  "立即签约"
                );
              },
              menuClick: function (e) {
                var t = this;
                "首页" === e.name &&
                  uni.reLaunch({ url: "/pages/index/index?tabtype=0" }),
                  "客服" === e.name &&
                    uni.reLaunch({ url: "/pages/index/index?tabtype=3" }),
                  "桌面" === e.name &&
                    ((this.isShow = !0),
                    setTimeout(function () {
                      t.isShow = !1;
                    }, 6e3));
              },
              handlePageurl: function (e) {
                if (!c.default.isNullOrEmpty(e))
                  switch (e) {
                    case 0:
                      this.consumestyleconfig.pageurl =
                        "pages/consume/consume-xiyu";
                      break;
                    case 3:
                      this.consumestyleconfig.pageurl =
                        "pages/consume/consume-xiyi";
                      break;
                    case 2:
                    case 4:
                      this.consumestyleconfig.pageurl =
                        "pages/consume/consume-yinshui";
                      break;
                    case 5:
                      this.consumestyleconfig.pageurl =
                        "pages/consume/consume-chuifeng";
                      break;
                    case 8:
                      this.consumestyleconfig.pageurl =
                        "pages/consume/consume-xixie";
                      break;
                    case 9:
                      this.consumestyleconfig.pageurl =
                        "pages/consume/consume-honggan";
                      break;
                    default:
                      break;
                  }
              },
              gotoaddrepair: function () {
                if (this.checklogin())
                  return c.default.isNullOrEmpty(this.dev.device_id)
                    ? c.default.showalert("提示", "请先选择设备")
                    : void uni.navigateTo({
                        url:
                          "../addrepair/addrepair?type=0&deviceid=" +
                          this.dev.device_id,
                      });
              },
              checklogin: function () {
                var e = this.$store.state.user,
                  t = this.$store.state.project;
                return !(
                  c.default.isNullOrEmpty(e) ||
                  !e.isbind ||
                  c.default.isNullOrEmpty(t)
                );
              },
              DisplayBalanceNotEnoughModal: function (e) {
                return (
                  uni.hideLoading(),
                  this.changDeviceStatusUI("enable_startconsume"),
                  c.default.showalert(
                    "提示",
                    e + "是否前去充值",
                    null,
                    function () {
                      setTimeout(function () {
                        uni.navigateTo({
                          url: "/pages/rechargeContainer/rechargeContainer",
                        });
                      }, 500);
                    },
                    !0,
                    "取消",
                    "确认"
                  )
                );
              },
              btnRenderFail: function () {
                this.btnRenderFailFlag = !1;
              },
              btnRenderSuccess: function () {
                this.btnRenderSuccessFlag = !0;
              },
              onBeforeJump: function () {
                var e = this;
                setTimeout(function () {
                  e.btnRenderFailFlag = !1;
                }, 2e3);
              },
              handleClickPop: function () {
                this.$refs.ride_risk_pop.onShowBtn();
              },
              popRenderSuccess: function () {
                this.isShowMaShangPop = !0;
              },
              onClosePop: function () {
                (this.btnRenderFailFlag = !1), (this.isShowMaShangPop = !1);
              },
              LoadConsumeBottomAd: function () {
                var t = this.$store.state.SystemInfo.screenWidth,
                  n = this.$store.state.SystemInfo.screenHeight,
                  i =
                    this.$store.state.SystemInfo.CustomBar +
                    uni.upx2px(300) +
                    uni.upx2px(150),
                  a = n - i,
                  s = a / 2 - 20;
                if ((e.log(s), null != this.placement2)) {
                  var o = this.placement2.space_code,
                    r = this.placement2.enum_ad_placement,
                    c = i + 10,
                    l = t,
                    u = s;
                  (0, m.createBeiZiNativeAd)(o, r, 0, c, l, u);
                }
                if (this.placement3.length > 0) {
                  var d = this.placement3[0].space_code,
                    f = this.placement3[0].enum_ad_placement,
                    h = i + s + 10,
                    g = t,
                    v = s;
                  (0, m.createBeiZiNativeAd)(d, f, 0, h, g, v);
                }
              },
              CloseConsumeBottomAd: function () {
                null != this.placement2 &&
                  (0, m.closeBeiZiNativeAd)(this.placement2.enum_ad_placement),
                  this.placement3.length > 0 &&
                    (0, m.closeBeiZiNativeAd)(
                      this.placement3.enum_ad_placement
                    );
              },
              createConsumeModalAd: function () {
                null != this.placement4 &&
                  (0, m.createBeiZiInterstitialAd)(this.placement4);
              },
              ExecuteBleEsimTask: function (t) {
                var n = this;
                return new Promise(function (i, o) {
                  u.default.ExecuteBleEsimTaskInfo(
                    n.dev.device_id,
                    n.dev.change_network,
                    t,
                    (function () {
                      var t = (0, s.default)(
                        (0, a.default)().mark(function t(s, r) {
                          var c, l, d, f, h, m;
                          return (0, a.default)().wrap(function (t) {
                            while (1)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (e.log(
                                      "ExecuteBleEsimTaskInfo.ret-----" +
                                        JSON.stringify(s)
                                    ),
                                    e.log(
                                      "ExecuteBleEsimTaskInfo.err-----" +
                                        JSON.stringify(r)
                                    ),
                                    !r)
                                  ) {
                                    t.next = 4;
                                    break;
                                  }
                                  return t.abrupt("return", o(r));
                                case 4:
                                  if (
                                    ((c = function (e, t) {
                                      return new Promise(function (i, a) {
                                        u.default.writeCharacteristicWithResult(
                                          e,
                                          n.dev.connectdevid,
                                          t,
                                          function (e, t) {
                                            if (t) return i("");
                                            i(e);
                                          }
                                        );
                                      });
                                    }),
                                    (l = !1),
                                    !s.bluetooth)
                                  ) {
                                    t.next = 23;
                                    break;
                                  }
                                  if (((d = s.bluetooth), !d)) {
                                    t.next = 21;
                                    break;
                                  }
                                  (f = []), (h = 0);
                                case 11:
                                  if (!(h < d.length)) {
                                    t.next = 19;
                                    break;
                                  }
                                  return (
                                    (t.next = 14),
                                    c(
                                      u.default.GetbleEsimCmdType(d[h].cmd),
                                      d[h].data
                                    )
                                  );
                                case 14:
                                  (m = t.sent),
                                    f.push({ cmd: d[h].cmd, data: m });
                                case 16:
                                  h++, (t.next = 11);
                                  break;
                                case 19:
                                  (s.bluetooth = f), (l = JSON.stringify(s));
                                case 21:
                                  t.next = 24;
                                  break;
                                case 23:
                                  l = JSON.stringify(s);
                                case 24:
                                  s.complete && (l = !1), i(l);
                                case 26:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e, n) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                });
              },
              startBleEsimAction: function () {
                var t = this;
                u.default.QueryBleEsimTaskInfo(
                  this.dev.device_id,
                  this.dev.change_network,
                  (function () {
                    var n = (0, s.default)(
                      (0, a.default)().mark(function n(i, s) {
                        return (0, a.default)().wrap(function (n) {
                          while (1)
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (
                                  (e.log(
                                    "-----QueryBleEsimTaskInfo.ret-----" +
                                      JSON.stringify(i)
                                  ),
                                  e.log(
                                    "-----QueryBleEsimTaskInfo.err-----" +
                                      JSON.stringify(s)
                                  ),
                                  !s)
                                ) {
                                  n.next = 4;
                                  break;
                                }
                                return n.abrupt(
                                  "return",
                                  t.HandleBleProfileDataError(s)
                                );
                              case 4:
                                t.startProcessAction("");
                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                      })
                    );
                    return function (e, t) {
                      return n.apply(this, arguments);
                    };
                  })()
                );
              },
              startProcessAction: function (t) {
                var n = this;
                return (0, s.default)(
                  (0, a.default)().mark(function i() {
                    var s;
                    return (0, a.default)().wrap(
                      function (i) {
                        while (1)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (
                                (i.prev = 0),
                                (i.next = 3),
                                n.ExecuteBleEsimTask(t)
                              );
                            case 3:
                              if (
                                ((s = i.sent),
                                e.log(
                                  "--------ExecuteBleEsimTask.ret-----------" +
                                    s
                                ),
                                !s)
                              ) {
                                i.next = 10;
                                break;
                              }
                              return (i.next = 8), n.startProcessAction(s);
                            case 8:
                              i.next = 13;
                              break;
                            case 10:
                              e.log("----已结束-----"),
                                n.changDeviceStatusUI("enable_startconsume"),
                                n.refreshdowndisconndevice();
                            case 13:
                              i.next = 18;
                              break;
                            case 15:
                              return (
                                (i.prev = 15),
                                (i.t0 = i["catch"](0)),
                                i.abrupt(
                                  "return",
                                  n.HandleBleProfileDataError(i.t0)
                                )
                              );
                            case 18:
                            case "end":
                              return i.stop();
                          }
                      },
                      i,
                      null,
                      [[0, 15]]
                    );
                  })
                )();
              },
            },
          };
        t.default = v;
      }).call(this, n("5a52")["default"]);
    },
    6056: function (e, t, n) {
      "use strict";
      var i = n("4246"),
        a = n.n(i);
      a.a;
    },
    "671c": function (e, t, n) {
      e.exports = n.p + "static/kefu.png";
    },
    "6af9": function (e, t, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = {
        props: {
          title: {
            type: String,
            default: "点击···添加到我的小程序,下次使用更方便",
          },
          isStatusbar: { type: Boolean, default: !1 },
          backColor: { type: String, default: "#dfdfdf" },
          isShowProps: { type: Boolean, default: !1 },
        },
        data: function () {
          return {};
        },
        methods: {
          verificationHeight: function () {
            return this.isStatusbar
              ? "6px"
              : this.getHeight().headerHeight + 6 + "px";
          },
          closep: function () {
            this.$emit("closep");
          },
          getHeight: function () {
            var e = { statusBarHeight: 0, titleBarHeight: 0, headerHeight: 0 };
            return (
              (e.statusBarHeight = uni.getSystemInfoSync().statusBarHeight),
              (e.headerHeight = e.statusBarHeight + e.titleBarHeight),
              e
            );
          },
        },
      };
      t.default = i;
    },
    afc2: function (e, t, n) {
      var i = n("b77e");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
      var a = n("4f06").default;
      a("37c2df74", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    b77e: function (e, t, n) {
      var i = n("24fb");
      (t = i(!1)),
        t.push([
          e.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.dev-number[data-v-4d3bd34f]{display:flex;align-items:center;justify-content:space-between;padding-right:%?50?%}.dev-number .dev-number-left[data-v-4d3bd34f]{display:flex;flex:1;align-items:center;color:#fff;font-size:%?36?%}.dev-number .dev-number-id[data-v-4d3bd34f]{margin-left:%?6?%;color:#fff;font-size:%?36?%}.xiyi-status-container[data-v-4d3bd34f]{margin-left:%?16?%;display:flex}.status-img[data-v-4d3bd34f]{width:%?40?%;height:%?40?%;display:inline-block}.change-btn-container[data-v-4d3bd34f]{padding:0 %?20?%;height:%?55?%;color:#fff;font-size:%?36?%;line-height:%?55?%;border:1px solid #fff;border-radius:%?20?%;background-color:initial;box-sizing:initial}.moshi-and-kefu[data-v-4d3bd34f]{display:flex;justify-content:space-between;align-items:center;padding:%?30?% %?50?% 0 %?40?%}.moshi-and-kefu .change-btn-container-moshi[data-v-4d3bd34f]{width:60%;padding:%?15?% %?20?%;color:#fff;font-size:%?28?%;text-align:center;background-color:initial;border:1px solid #fff;border-radius:%?100?%}.moshi-and-kefu .concat-kefu uni-image[data-v-4d3bd34f]{width:%?40?%;height:%?40?%;vertical-align:bottom}.moshi-and-kefu .concat-kefu uni-text[data-v-4d3bd34f]{margin-left:%?15?%;font-size:%?32?%;color:#fff}.consume-cardview[data-v-4d3bd34f]{position:fixed;width:100%;overflow-y:scroll;padding-top:%?20?%}.building-info-view[data-v-4d3bd34f]{display:flex;align-items:center;max-width:%?690?%;margin:%?15?% 0 0 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.build-info[data-v-4d3bd34f]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.text-toast[data-v-4d3bd34f]{font-size:%?30?%;color:#fff}.time-info-view[data-v-4d3bd34f]{display:flex;margin:%?15?% 0 0 0;justify-content:space-between;padding-right:%?50?%}.dev-info-view[data-v-4d3bd34f]{display:flex}.content-view[data-v-4d3bd34f]{width:%?160?%;height:%?160?%;margin:0 %?50?%}.content-view-right[data-v-4d3bd34f]{flex:1;margin-left:%?40?%}.kefu[data-v-4d3bd34f]{display:flex;align-items:center;justify-content:space-evenly;padding:%?15?% %?20?%;font-size:%?32?%;background-color:#fff;border-radius:%?100?%;margin:0 %?60?%}.kefu .kefu-left[data-v-4d3bd34f]{margin-bottom:%?6?%}.kefu uni-image[data-v-4d3bd34f]{width:%?70?%;height:%?70?%;margin-left:%?20?%}.baoxiu[data-v-4d3bd34f]{padding-top:%?6?%;font-size:%?32?%;margin-left:%?40?%}.baoxiu uni-image[data-v-4d3bd34f]{width:%?40?%;height:%?40?%;vertical-align:bottom}.baoxiu uni-text[data-v-4d3bd34f]{margin-left:%?15?%;color:#fff}.action-view[data-v-4d3bd34f]{display:flex;justify-content:space-between;width:%?630?%;height:%?94?%;margin:%?40?% auto;background:#fff;border-radius:%?94?%;overflow-y:hidden}.action-view .left_btn[data-v-4d3bd34f]{flex:1;width:%?630?%}.action-view .left_btn .action-button-consume[data-v-4d3bd34f]{position:relative;height:%?94?%;line-height:%?94?%;margin:0;padding:0;font-size:%?30?%;background-color:#fff!important;border-radius:%?50?%;border:none;-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}.action-view .right_btn[data-v-4d3bd34f]{position:relative}.action-view .right_btn .right_btn_box[data-v-4d3bd34f]{position:absolute;right:0;top:0;z-index:1}.action-view .right_btn .right_image[data-v-4d3bd34f]{width:%?315?%;height:%?94?%;z-index:2}.consume-bg[data-v-4d3bd34f]{width:100%;height:100%}.xiyi-consume-bg[data-v-4d3bd34f]{-webkit-transform:scale(.9);transform:scale(.9)}.yinshui-consume-bg[data-v-4d3bd34f]{-webkit-transform:scale(1.1);transform:scale(1.1)}.cuIcon-scan[data-v-4d3bd34f]{color:#40a7fc;background-color:#fff;font-size:%?60?%;border-radius:%?60?%;padding:%?30?%}.cu-form-group > .content[data-v-4d3bd34f]{font-size:%?40?%}.cu-form-group[data-v-4d3bd34f]:first-child{margin:0}@-webkit-keyframes swoosh-data-v-4d3bd34f{0%{-webkit-transform-origin:left center;transform-origin:left center}100%{-webkit-transform:scaleX(1.2);transform:scaleX(1.2);-webkit-transform-origin:left center;transform-origin:left center}}@keyframes swoosh-data-v-4d3bd34f{0%{-webkit-transform-origin:left center;transform-origin:left center}100%{-webkit-transform:scaleX(1.2);transform:scaleX(1.2);-webkit-transform-origin:left center;transform-origin:left center}}.scrollcontent[data-v-4d3bd34f]{height:100%}.modeview-container[data-v-4d3bd34f]{padding:%?10?%}.modeview[data-v-4d3bd34f]{background-color:#fff;display:flex;align-items:center;justify-content:flex-start;border-radius:%?10?%;box-shadow:0 0 10px 1px #add8e6}.hongganmodeview[data-v-4d3bd34f]{box-shadow:0 0 21px 0 rgba(8,100,156,.06)!important}.mode-img[data-v-4d3bd34f]{width:%?100?%;height:%?100?%;text-align:center;line-height:%?80?%;margin:%?20?%}.mode-img uni-image[data-v-4d3bd34f]{width:100%;height:100%}.mode-content[data-v-4d3bd34f]{width:calc(100% - %?200?%);height:100%;line-height:%?50?%;text-align:left}.mode-content > .title-text[data-v-4d3bd34f]{font-size:%?30?%}.money-text[data-v-4d3bd34f]{color:#32b1fe;font-size:%?28?%}.mode-right > .cuIcon-right[data-v-4d3bd34f]{color:#32b1fe;font-size:%?40?%}.input-view-title[data-v-4d3bd34f]{width:100%;text-align:left;padding-left:%?40?%;font-weight:700;font-size:%?30?%}.devid-input[data-v-4d3bd34f]{border-bottom:1px solid #32b1fe;text-align:left;margin:0 %?40?%;width:calc(100% - %?80?%)}.input-modal-btn[data-v-4d3bd34f]{width:50%;padding:%?40?%}.consume-btn-tip[data-v-4d3bd34f]{white-space:nowrap;padding:0 %?20?%}.mode-content-container[data-v-4d3bd34f]{width:100%;display:flex;align-items:center;justify-content:flex-start}.select-container[data-v-4d3bd34f]{display:flex;flex-wrap:wrap;margin:%?20?% 0}.select-container > .detail-select-item[data-v-4d3bd34f]{font-size:%?22?%;font-family:PingFang SC;font-weight:500;color:#a9b4bb;border:1px solid #a9b4bb;border-radius:%?6?%;padding:%?9?% %?10?%;margin:%?10?% %?21?%;width:%?130?%}.detail-select-item-disable[data-v-4d3bd34f]{border:1px dashed #a9b4bb!important;background-color:#eee!important}.detail-select-item-active[data-v-4d3bd34f]{color:#fff!important;border:1px solid #32b1fe!important;background:#32b1fe}.diy-time-container[data-v-4d3bd34f]{background-color:#fff;height:%?100?%;border-radius:0;margin:%?30?% 0;display:flex;align-items:center;justify-content:space-between;position:relative}.diy-time-container uni-input[data-v-4d3bd34f]{height:100%;line-height:1;text-align:left;margin-left:%?20?%;padding-right:%?100?%;background-color:#fff;width:100%;width:calc(100% - %?50?%);border-radius:0;font-size:%?60?%;border-bottom:1px solid #e0e2e4}.diy-time-container uni-text[data-v-4d3bd34f]{font-size:%?28?%;font-weight:500;color:#222;width:%?100?%;right:%?0?%;position:absolute}.input-error-container[data-v-4d3bd34f]{text-align:left;padding:%?20?%;color:#fc4648}.action-container[data-v-4d3bd34f]{position:absolute;bottom:%?20?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?230?%;height:%?68?%;background:#32b1fe;color:#fff;font-size:%?30?%;font-weight:500;color:#fff;line-height:%?68?%;border-radius:%?16?%}.mode-desc-text[data-v-4d3bd34f]{font-weight:500;color:#a9b4bb;font-size:%?28?%;margin-top:%?10?%}.other-xiyi-modal-container[data-v-4d3bd34f]{height:%?1150?%!important}.other-xiyi-container[data-v-4d3bd34f]{box-shadow:none!important;border:1px solid #eee}.other-xiyi-active-container[data-v-4d3bd34f]{box-shadow:0 0 10px 1px #add8e6!important;border:none!important}.other-xiyi-mode-img[data-v-4d3bd34f]{width:%?70?%;height:%?70?%}.title-desc-text[data-v-4d3bd34f]{text-align:left;font-weight:700;padding-left:%?20?%}[data-v-4d3bd34f] .suspension{bottom:50vh!important}[data-v-4d3bd34f] .serve{display:flex!important;align-items:center!important;justify-content:center!important}.ad-component[data-v-4d3bd34f]{margin-bottom:%?20?%}.money-on-code-ad[data-v-4d3bd34f]{margin:%?20?% %?40?%}.bananniuguanggao[data-v-4d3bd34f]{display:inline-flex;justify-content:center;align-items:center;float:right;width:%?315?%;height:47px;color:#fff;background-color:#e86be9}.scrolling-text[data-v-4d3bd34f]{white-space:nowrap;overflow:hidden;-webkit-animation:scroll-text-data-v-4d3bd34f 3s linear infinite;animation:scroll-text-data-v-4d3bd34f 3s linear infinite}@-webkit-keyframes scroll-text-data-v-4d3bd34f{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes scroll-text-data-v-4d3bd34f{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}',
          "",
        ]),
        (e.exports = t);
    },
    d3dd: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("da05"),
        a = n("ee36");
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(s);
      n("ea80");
      var o = n("f0c5"),
        r = Object(o["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "4d3bd34f",
          null,
          !1,
          i["a"],
          void 0
        );
      t["default"] = r.exports;
    },
    da05: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return i;
        });
      var i = { mpHtml: n("b035").default, contactService: n("2bd5").default },
        a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "v-uni-view",
            { staticClass: "viewcontainer" },
            [
              i("v-uni-image", {
                staticClass: "viewimgbg",
                attrs: {
                  src: e.consumestyleconfig.viewimg,
                  mode: "scaleToFill",
                },
              }),
              i(
                "cu-custom",
                {
                  attrs: {
                    bgColor: "white",
                    isBack: e.showbackiconflag,
                    isControlback: !0,
                  },
                  on: {
                    backevent: function (t) {
                      (arguments[0] = t = e.$handleEvent(t)),
                        e.backevent.apply(void 0, arguments);
                    },
                  },
                },
                [
                  i(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [e._v(e._s(e.consumestyleconfig.titletext))]
                  ),
                ],
                2
              ),
              i(
                "v-uni-view",
                { staticClass: "consume-cardview", style: e.contentstyle },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "dev-info-view" },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "content-view-right" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "dev-number" },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "dev-number-left" },
                                [
                                  i(
                                    "v-uni-text",
                                    { staticClass: "dev-number-text" },
                                    [e._v("设备号：")]
                                  ),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "dev-number-id" },
                                    [e._v(e._s(e.dev.device_id))]
                                  ),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "xiyi-status-container" },
                                    [
                                      "" != e.GetDeviceStatusIcon
                                        ? i("v-uni-image", {
                                            staticClass: "status-img",
                                            attrs: {
                                              src: e.GetDeviceStatusIcon,
                                              mode: "scaleToFill",
                                            },
                                          })
                                        : e._e(),
                                    ],
                                    1
                                  ),
                                  void 0 != e.dev.device_id
                                    ? i(
                                        "v-uni-view",
                                        {
                                          staticClass: "xiyi-status-container",
                                          on: {
                                            click: function (t) {
                                              (arguments[0] = t =
                                                e.$handleEvent(t)),
                                                e.inputdevidclick.apply(
                                                  void 0,
                                                  arguments
                                                );
                                            },
                                          },
                                        },
                                        [
                                          i("v-uni-image", {
                                            staticClass: "status-img",
                                            staticStyle: {
                                              "margin-top": "5upx",
                                            },
                                            attrs: {
                                              src: "/static/bianji.png",
                                              mode: "scaleToFill",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : e._e(),
                                ],
                                1
                              ),
                              i(
                                "v-uni-view",
                                {
                                  staticClass:
                                    "change-dev change-btn-container",
                                  on: {
                                    click: function (t) {
                                      (arguments[0] = t = e.$handleEvent(t)),
                                        e.changedev.apply(void 0, arguments);
                                    },
                                  },
                                },
                                [e._v("切换设备")]
                              ),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "change-btn" },
                            [
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "building-info-view text-white",
                                },
                                [
                                  i("v-uni-text", {
                                    staticClass: "cuIcon-locationfill",
                                    staticStyle: {
                                      "font-size": "45upx",
                                      color: "white",
                                    },
                                  }),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "build-info text-toast" },
                                    [e._v(e._s(e.devicebuildinfo))]
                                  ),
                                ],
                                1
                              ),
                              i(
                                "v-uni-view",
                                { staticClass: "time-info-view text-white" },
                                [
                                  i(
                                    "v-uni-text",
                                    {
                                      staticClass: "text-toast",
                                      staticStyle: { "max-width": "60%" },
                                    },
                                    [
                                      i("v-uni-text", {
                                        staticClass: "cuIcon-timefill",
                                        staticStyle: { "font-size": "45upx" },
                                      }),
                                      i(
                                        "v-uni-text",
                                        {
                                          staticStyle: {
                                            position: "relative",
                                            bottom: "4upx",
                                            left: "10upx",
                                          },
                                        },
                                        [
                                          e._v(
                                            "服务时间:" +
                                              e._s(
                                                e._f("paserdevwatertime")(e.dev)
                                              )
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    {
                                      staticClass: "baoxiu",
                                      on: {
                                        click: function (t) {
                                          (arguments[0] = t =
                                            e.$handleEvent(t)),
                                            e.gotoaddrepair.apply(
                                              void 0,
                                              arguments
                                            );
                                        },
                                      },
                                    },
                                    [
                                      i("v-uni-image", {
                                        attrs: {
                                          src: n("1c6b"),
                                          mode: "aspectFill",
                                        },
                                      }),
                                      i("v-uni-text", [e._v("设备报修")]),
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
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "moshi-and-kefu" },
                    [
                      e.modebtnflag
                        ? i(
                            "v-uni-view",
                            {
                              staticClass:
                                "text-white change-btn-container-moshi",
                              on: {
                                click: function (t) {
                                  (arguments[0] = t = e.$handleEvent(t)),
                                    e.changeconsumemode.apply(
                                      void 0,
                                      arguments
                                    );
                                },
                              },
                            },
                            [
                              i(
                                "v-uni-text",
                                { staticStyle: { margin: "0 20upx 0 0" } },
                                [e._v("选择模式")]
                              ),
                            ],
                            1
                          )
                        : i("v-uni-view"),
                    ],
                    1
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "action-view" },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "left_btn", style: e.btnStyle },
                        [
                          e.btnstatusobj.startconsumedisplayflag &&
                          !e.OauthLogin.show
                            ? i(
                                "v-uni-button",
                                {
                                  staticClass: "action-button-consume",
                                  style: e.btnStyle,
                                  attrs: {
                                    id: "start-consume-btn",
                                    disabled:
                                      e.btnstatusobj.startconsumebtndisbaled,
                                    "data-action":
                                      e.btnstatusobj.startconsumeaction,
                                  },
                                  on: {
                                    click: function (t) {
                                      (arguments[0] = t = e.$handleEvent(t)),
                                        e.startconsumebydevnettype.apply(
                                          void 0,
                                          arguments
                                        );
                                    },
                                  },
                                },
                                [
                                  i(
                                    "v-uni-text",
                                    {
                                      staticClass: "consume-btn-tip",
                                      style: e.ConsumeBtnTipStyle,
                                    },
                                    [
                                      e._v(
                                        e._s(e.btnstatusobj.startconsumebtntip)
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          e.btnstatusobj.startconsumedisplayflag &&
                          e.OauthLogin.show
                            ? i(
                                "v-uni-button",
                                {
                                  staticClass: "action-button-consume",
                                  style: e.btnStyle,
                                  attrs: {
                                    id: "start-consume-btn",
                                    "open-type": "getPhoneNumber",
                                    type: "primary",
                                  },
                                  on: {
                                    getphonenumber: function (t) {
                                      (arguments[0] = t = e.$handleEvent(t)),
                                        e.OnGetPhoneNumber.apply(
                                          void 0,
                                          arguments
                                        );
                                    },
                                    click: function (t) {
                                      (arguments[0] = t = e.$handleEvent(t)),
                                        e.GetUserinfo.apply(void 0, arguments);
                                    },
                                  },
                                },
                                [
                                  i(
                                    "v-uni-text",
                                    {
                                      staticClass: "consume-btn-tip",
                                      style: e.ConsumeBtnTipStyle,
                                    },
                                    [e._v("开始消费")]
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          e.btnstatusobj.endconsumedisplayflag
                            ? i(
                                "v-uni-button",
                                {
                                  staticClass: "action-button-consume",
                                  style: e.btnStyle,
                                  attrs: { id: "end-consume-btn" },
                                  on: {
                                    click: function (t) {
                                      (arguments[0] = t = e.$handleEvent(t)),
                                        e.endConsumeByDevNettype.apply(
                                          void 0,
                                          arguments
                                        );
                                    },
                                  },
                                },
                                [e._v("结束消费")]
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
              ),
              i(
                "v-uni-view",
                {
                  staticClass: "cu-modal",
                  class: e.selectmodalconfig.showmodalflag ? "show" : "",
                  on: {
                    click: function (t) {
                      (arguments[0] = t = e.$handleEvent(t)),
                        e.hideselectmodal.apply(void 0, arguments);
                    },
                  },
                },
                [
                  i(
                    "v-uni-view",
                    {
                      staticClass: "cu-dialog",
                      class: [
                        { "other-xiyi-modal-container": e.IsOtherFactoryXiyi },
                      ],
                      staticStyle: {
                        height: "880upx",
                        width: "600upx",
                        "background-color": "white",
                      },
                      on: {
                        click: function (t) {
                          t.stopPropagation(),
                            (arguments[0] = t = e.$handleEvent(t));
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "cu-bar bg-white justify-end" },
                        [
                          i("v-uni-view", { staticClass: "content" }, [
                            e._v(e._s(e.selectmodalconfig.showmodaltitle)),
                          ]),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "action",
                              on: {
                                click: function (t) {
                                  (arguments[0] = t = e.$handleEvent(t)),
                                    e.hideselectmodal.apply(void 0, arguments);
                                },
                              },
                            },
                            [
                              i("v-uni-text", {
                                staticClass: "cuIcon-close text-gray",
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "padding-xl",
                          staticStyle: {
                            height: "calc(100% - 100upx)",
                            padding: "20upx 20upx 100upx",
                          },
                        },
                        [
                          e.selectmodalconfig.modalchuifengcontent.length > 0
                            ? i(
                                "v-uni-scroll-view",
                                {
                                  staticClass: "scrollcontent",
                                  attrs: { "scroll-y": "true" },
                                },
                                e._l(
                                  e.selectmodalconfig.modalchuifengcontent,
                                  function (t) {
                                    return i(
                                      "v-uni-view",
                                      {
                                        key: t.value,
                                        staticClass: "modeview-container",
                                        on: {
                                          click: function (n) {
                                            (arguments[0] = n =
                                              e.$handleEvent(n)),
                                              e.ClickModalItem("chuifeng", t);
                                          },
                                        },
                                      },
                                      [
                                        i(
                                          "v-uni-view",
                                          { staticClass: "modeview" },
                                          [
                                            i(
                                              "v-uni-view",
                                              { staticClass: "mode-img" },
                                              [
                                                i("v-uni-image", {
                                                  attrs: {
                                                    src: "/pagesA/static/chuifeng-time-icon.png",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            i(
                                              "v-uni-view",
                                              { staticClass: "mode-content" },
                                              [
                                                i(
                                                  "v-uni-view",
                                                  { staticClass: "title-text" },
                                                  [
                                                    e._v(
                                                      e._s(
                                                        e.parsevaluetime(
                                                          t.value
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                ),
                                                i(
                                                  "v-uni-view",
                                                  { staticClass: "money-text" },
                                                  [
                                                    e._v(
                                                      "￥" +
                                                        e._s(t.price.toFixed(2))
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                            i(
                                              "v-uni-view",
                                              { staticClass: "mode-right" },
                                              [
                                                i("v-uni-text", {
                                                  staticClass:
                                                    "cuicon cuIcon-right",
                                                }),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    );
                                  }
                                ),
                                1
                              )
                            : e._e(),
                          e.selectmodalconfig.modalxiyicontent.length > 0
                            ? i(
                                "v-uni-scroll-view",
                                {
                                  staticClass: "scrollcontent",
                                  attrs: { "scroll-y": "true" },
                                },
                                [
                                  e._l(
                                    e.selectmodalconfig.modalxiyicontent,
                                    function (t) {
                                      return i(
                                        "v-uni-view",
                                        {
                                          key: t.value,
                                          staticClass: "modeview-container",
                                          on: {
                                            click: function (n) {
                                              (arguments[0] = n =
                                                e.$handleEvent(n)),
                                                e.ClickModalItem("xiyi", t);
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "v-uni-view",
                                            {
                                              staticClass: "modeview",
                                              class: [
                                                {
                                                  "other-xiyi-container":
                                                    e.IsOtherFactoryXiyi,
                                                },
                                                {
                                                  "other-xiyi-active-container":
                                                    e.selectmodalconfig
                                                      .xiyiWorkerBaseModeSelected
                                                      .name == t.name,
                                                },
                                              ],
                                            },
                                            [
                                              i(
                                                "v-uni-view",
                                                {
                                                  staticClass: "mode-img",
                                                  class: [
                                                    {
                                                      "other-xiyi-mode-img":
                                                        e.IsOtherFactoryXiyi,
                                                    },
                                                  ],
                                                },
                                                [
                                                  i("v-uni-image", {
                                                    attrs: {
                                                      src: e.getxiyimodeicon(
                                                        t.value
                                                      ),
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              i(
                                                "v-uni-view",
                                                { staticClass: "mode-content" },
                                                [
                                                  i(
                                                    "v-uni-view",
                                                    {
                                                      staticClass: "title-text",
                                                    },
                                                    [e._v(e._s(t.name))]
                                                  ),
                                                  e.IsOtherFactoryXiyi
                                                    ? e._e()
                                                    : i(
                                                        "v-uni-view",
                                                        {
                                                          staticClass:
                                                            "money-text",
                                                        },
                                                        [
                                                          e._v(
                                                            "￥" +
                                                              e._s(
                                                                t.price.toFixed(
                                                                  2
                                                                )
                                                              )
                                                          ),
                                                        ]
                                                      ),
                                                ],
                                                1
                                              ),
                                              i(
                                                "v-uni-view",
                                                { staticClass: "mode-right" },
                                                [
                                                  e.IsOtherFactoryXiyi
                                                    ? i(
                                                        "v-uni-text",
                                                        {
                                                          staticClass:
                                                            "money-text",
                                                          staticStyle: {
                                                            "margin-right":
                                                              "20upx",
                                                          },
                                                        },
                                                        [
                                                          e._v(
                                                            "￥" +
                                                              e._s(
                                                                t.price.toFixed(
                                                                  2
                                                                )
                                                              )
                                                          ),
                                                        ]
                                                      )
                                                    : i("v-uni-text", {
                                                        staticClass:
                                                          "cuicon cuIcon-right",
                                                      }),
                                                ],
                                                1
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      );
                                    }
                                  ),
                                  e.selectmodalconfig.xiyiSelectWorkerFlag
                                    ? i(
                                        "v-uni-view",
                                        {
                                          staticClass: "mode-detail-container",
                                          staticStyle: { width: "100%" },
                                        },
                                        [
                                          i(
                                            "v-uni-view",
                                            {
                                              staticClass: "title-desc-text",
                                              staticStyle: {
                                                "margin-top": "10upx",
                                              },
                                            },
                                            [e._v("其他功能")]
                                          ),
                                          i(
                                            "v-uni-view",
                                            {
                                              staticClass:
                                                "select-container temperature-list-container",
                                            },
                                            [
                                              1 ==
                                              e.selectmodalconfig
                                                .xiyiBarrelCleanEnable
                                                ? i(
                                                    "v-uni-view",
                                                    {
                                                      class: [
                                                        "detail-select-item",
                                                        {
                                                          "detail-select-item-active":
                                                            e.selectmodalconfig
                                                              .xiyiBarrelCleanUseSwitch,
                                                        },
                                                      ],
                                                      on: {
                                                        click: function (t) {
                                                          t.stopPropagation(),
                                                            (arguments[0] = t =
                                                              e.$handleEvent(
                                                                t
                                                              )),
                                                            (e.selectmodalconfig.xiyiBarrelCleanUseSwitch =
                                                              !e
                                                                .selectmodalconfig
                                                                .xiyiBarrelCleanUseSwitch);
                                                        },
                                                      },
                                                    },
                                                    [e._v("桶自洁")]
                                                  )
                                                : e._e(),
                                              e._l(
                                                e.selectmodalconfig
                                                  .xiyiWorkerRinseContent,
                                                function (t) {
                                                  return i(
                                                    "v-uni-view",
                                                    {
                                                      class: [
                                                        "detail-select-item",
                                                        {
                                                          "detail-select-item-active":
                                                            -1 !=
                                                            e.selectmodalconfig.xiyiWorkerRinseSelected.findIndex(
                                                              function (e) {
                                                                return (
                                                                  e.name ==
                                                                  t.name
                                                                );
                                                              }
                                                            ),
                                                        },
                                                        {
                                                          "detail-select-item-disable":
                                                            t.disable,
                                                        },
                                                      ],
                                                      on: {
                                                        click: function (n) {
                                                          n.stopPropagation(),
                                                            (arguments[0] = n =
                                                              e.$handleEvent(
                                                                n
                                                              )),
                                                            e.OtherXiyiModelChange(
                                                              t,
                                                              0
                                                            );
                                                        },
                                                      },
                                                    },
                                                    [e._v(e._s(t.name))]
                                                  );
                                                }
                                              ),
                                            ],
                                            2
                                          ),
                                          i(
                                            "v-uni-view",
                                            { staticClass: "title-desc-text" },
                                            [e._v("选择温度")]
                                          ),
                                          i(
                                            "v-uni-view",
                                            {
                                              staticClass:
                                                "select-container time-list-container",
                                            },
                                            e._l(
                                              e.selectmodalconfig
                                                .xiyiWorkerTemperatureContent,
                                              function (t) {
                                                return i(
                                                  "v-uni-view",
                                                  {
                                                    class: [
                                                      "detail-select-item",
                                                      {
                                                        "detail-select-item-active":
                                                          e.selectmodalconfig
                                                            .xiyiWorkerTemperatureSelected
                                                            .name == t.name,
                                                      },
                                                      {
                                                        "detail-select-item-disable":
                                                          t.disable,
                                                      },
                                                    ],
                                                    on: {
                                                      click: function (n) {
                                                        n.stopPropagation(),
                                                          (arguments[0] = n =
                                                            e.$handleEvent(n)),
                                                          e.OtherXiyiModelChange(
                                                            t,
                                                            1
                                                          );
                                                      },
                                                    },
                                                  },
                                                  [e._v(e._s(t.name))]
                                                );
                                              }
                                            ),
                                            1
                                          ),
                                        ],
                                        1
                                      )
                                    : e._e(),
                                ],
                                2
                              )
                            : e._e(),
                          e.selectmodalconfig.modalxiyicontent.length > 0 &&
                          e.selectmodalconfig.xiyiSelectWorkerFlag
                            ? i(
                                "v-uni-button",
                                {
                                  staticClass: "action-container",
                                  on: {
                                    click: function (t) {
                                      (arguments[0] = t = e.$handleEvent(t)),
                                        e.OtherXiyiModelSelectFinished();
                                    },
                                  },
                                },
                                [e._v("确定")]
                              )
                            : e._e(),
                          e.selectmodalconfig.modalhonggancontent.length > 0
                            ? i(
                                "v-uni-scroll-view",
                                {
                                  staticClass: "scrollcontent",
                                  attrs: { "scroll-y": "true" },
                                },
                                e._l(
                                  e.selectmodalconfig.modalhonggancontent,
                                  function (t, n) {
                                    return i(
                                      "v-uni-view",
                                      {
                                        key: n,
                                        staticClass: "modeview-container",
                                      },
                                      [
                                        i(
                                          "v-uni-view",
                                          {
                                            staticClass:
                                              "modeview hongganmodeview",
                                            staticStyle: {
                                              "flex-flow": "column",
                                              "align-items": "flex-start",
                                            },
                                          },
                                          [
                                            i(
                                              "v-uni-view",
                                              {
                                                staticClass:
                                                  "mode-content-container",
                                              },
                                              [
                                                i(
                                                  "v-uni-view",
                                                  { staticClass: "mode-img" },
                                                  [
                                                    i("v-uni-image", {
                                                      attrs: {
                                                        src: "/pagesA/static/honggan-mode-3.png",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                                i(
                                                  "v-uni-view",
                                                  {
                                                    staticClass: "mode-content",
                                                  },
                                                  [
                                                    i(
                                                      "v-uni-view",
                                                      {
                                                        staticClass:
                                                          "title-text",
                                                      },
                                                      [e._v(e._s(t.type))]
                                                    ),
                                                    i(
                                                      "v-uni-view",
                                                      {
                                                        staticClass:
                                                          "mode-desc-text money-text",
                                                      },
                                                      [
                                                        e._v(
                                                          e._s(
                                                            t
                                                              .selectedtemperature
                                                              .name
                                                          ) +
                                                            ";" +
                                                            e._s(
                                                              t.selectedtime
                                                                .time
                                                            ) +
                                                            "分钟;"
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
                                                staticClass:
                                                  "mode-detail-container",
                                                staticStyle: { width: "100%" },
                                              },
                                              [
                                                i(
                                                  "v-uni-view",
                                                  {
                                                    staticClass:
                                                      "select-container temperature-list-container",
                                                  },
                                                  e._l(
                                                    t.temperaturelist,
                                                    function (n) {
                                                      return i(
                                                        "v-uni-view",
                                                        {
                                                          class: [
                                                            "detail-select-item",
                                                            {
                                                              "detail-select-item-active":
                                                                t
                                                                  .selectedtemperature
                                                                  .name ==
                                                                n.name,
                                                            },
                                                          ],
                                                          on: {
                                                            click: function (
                                                              t
                                                            ) {
                                                              t.stopPropagation(),
                                                                (arguments[0] =
                                                                  t =
                                                                    e.$handleEvent(
                                                                      t
                                                                    )),
                                                                e.hongganTemperatureChange(
                                                                  n
                                                                );
                                                            },
                                                          },
                                                        },
                                                        [e._v(e._s(n.name))]
                                                      );
                                                    }
                                                  ),
                                                  1
                                                ),
                                                i(
                                                  "v-uni-view",
                                                  {
                                                    staticClass:
                                                      "select-container time-list-container",
                                                  },
                                                  e._l(
                                                    t.timelist,
                                                    function (n) {
                                                      return i(
                                                        "v-uni-view",
                                                        {
                                                          class: [
                                                            "detail-select-item",
                                                            {
                                                              "detail-select-item-active":
                                                                t.selectedtime
                                                                  .time ==
                                                                n.time,
                                                            },
                                                            {
                                                              "detail-select-item-disable":
                                                                n.disable,
                                                            },
                                                          ],
                                                          on: {
                                                            click: function (
                                                              t
                                                            ) {
                                                              t.stopPropagation(),
                                                                (arguments[0] =
                                                                  t =
                                                                    e.$handleEvent(
                                                                      t
                                                                    )),
                                                                e.hongganTimeChange(
                                                                  n
                                                                );
                                                            },
                                                          },
                                                        },
                                                        [
                                                          e._v(
                                                            e._s(n.time) +
                                                              "分钟"
                                                          ),
                                                        ]
                                                      );
                                                    }
                                                  ),
                                                  1
                                                ),
                                                t.ShowDiyinput
                                                  ? i(
                                                      "v-uni-view",
                                                      {
                                                        staticClass:
                                                          "diy-time-container",
                                                      },
                                                      [
                                                        i("v-uni-input", {
                                                          attrs: {
                                                            name: "input",
                                                            type: "digit",
                                                            maxlength: "3",
                                                          },
                                                          model: {
                                                            value:
                                                              t.selectedtime
                                                                .time,
                                                            callback: function (
                                                              n
                                                            ) {
                                                              e.$set(
                                                                t.selectedtime,
                                                                "time",
                                                                n
                                                              );
                                                            },
                                                            expression:
                                                              "item.selectedtime.time",
                                                          },
                                                        }),
                                                        i("v-uni-text", [
                                                          e._v("分钟"),
                                                        ]),
                                                      ],
                                                      1
                                                    )
                                                  : e._e(),
                                                i(
                                                  "v-uni-view",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value:
                                                          t.ShowDiyinput &&
                                                          e
                                                            .IsDryerProperCorrectTime
                                                            .flag,
                                                        expression:
                                                          "item.ShowDiyinput && IsDryerProperCorrectTime.flag",
                                                      },
                                                    ],
                                                    staticClass:
                                                      "input-error-container",
                                                  },
                                                  [
                                                    e._v(
                                                      "*" +
                                                        e._s(
                                                          e
                                                            .IsDryerProperCorrectTime
                                                            .text
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
                                      ],
                                      1
                                    );
                                  }
                                ),
                                1
                              )
                            : e._e(),
                          e.selectmodalconfig.modalhonggancontent.length > 0
                            ? i(
                                "v-uni-button",
                                {
                                  staticClass: "action-container",
                                  on: {
                                    click: function (t) {
                                      (arguments[0] = t = e.$handleEvent(t)),
                                        e.ClickModalItem("honggan");
                                    },
                                  },
                                },
                                [e._v("确定")]
                              )
                            : e._e(),
                          1 == e.selectmodalconfig.xixieBarrelCleanEnable
                            ? i(
                                "v-uni-view",
                                {
                                  staticClass: "modeview",
                                  staticStyle: { margin: "10upx" },
                                  on: {
                                    click: function (t) {
                                      (arguments[0] = t = e.$handleEvent(t)),
                                        (e.selectmodalconfig.xixieBarrelCleanUseSwitch =
                                          !e.selectmodalconfig
                                            .xixieBarrelCleanUseSwitch);
                                    },
                                  },
                                },
                                [
                                  i(
                                    "v-uni-view",
                                    { staticClass: "mode-img" },
                                    [
                                      i("v-uni-image", {
                                        attrs: { src: n("45d6") },
                                      }),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "mode-content" },
                                    [
                                      i(
                                        "v-uni-view",
                                        { staticClass: "title-text" },
                                        [e._v("桶自洁")]
                                      ),
                                      i(
                                        "v-uni-view",
                                        { staticClass: "money-text" },
                                        [e._v("是否预启动桶自洁功能")]
                                      ),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    {
                                      staticClass: "mode-right",
                                      staticStyle: { "margin-right": "10upx" },
                                    },
                                    [
                                      i("v-uni-checkbox", {
                                        staticClass: "round blue",
                                        class: e.selectmodalconfig
                                          .xixieBarrelCleanUseSwitch
                                          ? "checked"
                                          : "",
                                        staticStyle: {
                                          transform: "scale(0.8)",
                                        },
                                        attrs: {
                                          checked:
                                            !!e.selectmodalconfig
                                              .xixieBarrelCleanUseSwitch,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : e._e(),
                          e.selectmodalconfig.modalxixiecontent.length > 0
                            ? i(
                                "v-uni-scroll-view",
                                {
                                  staticClass: "scrollcontent",
                                  attrs: { "scroll-y": "true" },
                                },
                                e._l(
                                  e.selectmodalconfig.modalxixiecontent,
                                  function (t, n) {
                                    return i(
                                      "v-uni-view",
                                      {
                                        key: n,
                                        staticClass: "modeview-container",
                                        on: {
                                          click: function (n) {
                                            (arguments[0] = n =
                                              e.$handleEvent(n)),
                                              e.ClickModalItem("xixie", t);
                                          },
                                        },
                                      },
                                      [
                                        i(
                                          "v-uni-view",
                                          { staticClass: "modeview" },
                                          [
                                            i(
                                              "v-uni-view",
                                              { staticClass: "mode-img" },
                                              [
                                                i("v-uni-image", {
                                                  attrs: {
                                                    src: e.getxixiemodeicon(n),
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            i(
                                              "v-uni-view",
                                              { staticClass: "mode-content" },
                                              [
                                                i(
                                                  "v-uni-view",
                                                  { staticClass: "title-text" },
                                                  [e._v(e._s(t.name))]
                                                ),
                                                i(
                                                  "v-uni-view",
                                                  { staticClass: "money-text" },
                                                  [
                                                    e._v(
                                                      "￥" +
                                                        e._s(t.price.toFixed(2))
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                            i(
                                              "v-uni-view",
                                              { staticClass: "mode-right" },
                                              [
                                                i("v-uni-text", {
                                                  staticClass:
                                                    "cuicon cuIcon-right",
                                                }),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    );
                                  }
                                ),
                                1
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
              ),
              i(
                "v-uni-view",
                {
                  staticClass: "cu-modal",
                  class: e.showinputmodalflag ? "show" : "",
                  on: {
                    click: function (t) {
                      (arguments[0] = t = e.$handleEvent(t)),
                        (e.showinputmodalflag = !1);
                    },
                  },
                },
                [
                  i(
                    "v-uni-view",
                    {
                      staticClass: "cu-dialog",
                      on: {
                        click: function (t) {
                          t.stopPropagation(),
                            (arguments[0] = t = e.$handleEvent(t));
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "cu-bar bg-white justify-end" },
                        [
                          i("v-uni-view", { staticClass: "input-view-title" }, [
                            e._v("请输入设备编号"),
                          ]),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticStyle: {
                            "background-color": "white",
                            "padding-top": "30upx",
                          },
                        },
                        [
                          i("v-uni-input", {
                            staticClass: "devid-input",
                            attrs: { type: "number", "always-system": !0 },
                            on: {
                              confirm: function (t) {
                                (arguments[0] = t = e.$handleEvent(t)),
                                  e.querydevbyid.apply(void 0, arguments);
                              },
                            },
                            model: {
                              value: e.inputidtext,
                              callback: function (t) {
                                e.inputidtext = t;
                              },
                              expression: "inputidtext",
                            },
                          }),
                          i(
                            "v-uni-view",
                            {
                              staticStyle: {
                                display: "flex",
                                "margin-top": "20upx",
                                color: "#32b1fe",
                              },
                            },
                            [
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "input-modal-btn",
                                  attrs: { id: "cancel-consume-btn" },
                                  on: {
                                    confirm: function (t) {
                                      (arguments[0] = t = e.$handleEvent(t)),
                                        e.querydevbyid.apply(void 0, arguments);
                                    },
                                    click: function (t) {
                                      t.stopPropagation(),
                                        (arguments[0] = t = e.$handleEvent(t)),
                                        (e.showinputmodalflag = !1),
                                        (e.inputidtext = "");
                                    },
                                  },
                                },
                                [e._v("取消")]
                              ),
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "input-modal-btn",
                                  attrs: { id: "confirm-consume-btn" },
                                  on: {
                                    click: function (t) {
                                      t.stopPropagation(),
                                        (arguments[0] = t = e.$handleEvent(t)),
                                        e.querydevbyid.apply(void 0, arguments);
                                    },
                                  },
                                },
                                [e._v("确定")]
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
              i(
                "v-uni-view",
                {
                  staticClass: "cu-modal",
                  class: [{ show: e.noticemodal.showflag }],
                },
                [
                  i(
                    "v-uni-view",
                    {
                      staticClass: "cu-dialog",
                      staticStyle: {
                        width: "85%",
                        height: "60%",
                        "border-radius": "20upx",
                      },
                    },
                    [
                      i(
                        "v-uni-swiper",
                        {
                          staticClass: "screen-swiper full-height",
                          attrs: {
                            duration: "500",
                            "indicator-dots": !0,
                            "indicator-color": "#8799a3",
                            "indicator-active-color": "#32b1fe",
                          },
                        },
                        e._l(e.noticemodal.noticearr, function (t, n) {
                          return i(
                            "v-uni-swiper-item",
                            {
                              key: n,
                              staticStyle: { color: "black", height: "100%" },
                              attrs: { "data-desc": t.title },
                            },
                            [
                              i(
                                "v-uni-view",
                                {
                                  staticClass:
                                    "text-ellipsis noticemodal-title",
                                },
                                [e._v(e._s(t.title))]
                              ),
                              i(
                                "v-uni-scroll-view",
                                {
                                  staticClass: "noticemodal-content",
                                  attrs: { "scroll-y": "true" },
                                },
                                [
                                  i("mp-html", {
                                    attrs: {
                                      content: t.htmlstr,
                                      selectable: !0,
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          );
                        }),
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "closemodal-icon",
                          on: {
                            click: function (t) {
                              (arguments[0] = t = e.$handleEvent(t)),
                                e.closenoticemodal.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          i("v-uni-text", {
                            staticClass: "cuIcon-close",
                            staticStyle: { "font-size": "40upx" },
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
              i("contact-service", { attrs: { backgroundColor: "#D2eef7" } }),
            ],
            1
          );
        },
        s = [];
    },
    db98: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("ddcf"),
        a = n("597c3");
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(s);
      n("6056");
      var o = n("f0c5"),
        r = Object(o["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "6b33266c",
          null,
          !1,
          i["a"],
          void 0
        );
      t["default"] = r.exports;
    },
    ddcf: function (e, t, n) {
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
            {
              staticClass: "pointout",
              class: e.isShowProps ? "" : "hidcls",
              style: { top: e.verificationHeight(), background: e.backColor },
            },
            [
              n("v-uni-view", { staticClass: "pleasetitle" }, [
                e._v(e._s(e.title)),
              ]),
              n("v-uni-image", {
                staticClass: "closeimg",
                attrs: { src: "/static/delete.png", mode: "aspectFit" },
                on: {
                  click: function (t) {
                    (arguments[0] = t = e.$handleEvent(t)),
                      e.closep.apply(void 0, arguments);
                  },
                },
              }),
              n("v-uni-view", {
                staticClass: "pleaseposi",
                style: { background: e.backColor },
              }),
            ],
            1
          );
        },
        a = [];
    },
    e534: function (e, t, n) {
      e.exports = n.p + "static/index.png";
    },
    ea80: function (e, t, n) {
      "use strict";
      var i = n("afc2"),
        a = n.n(i);
      a.a;
    },
    ee36: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("5c22"),
        a = n.n(i);
      for (var s in i)
        ["default"].indexOf(s) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return i[e];
            });
          })(s);
      t["default"] = a.a;
    },
    f1cf: function (e, t, n) {
      "use strict";
      (function (e) {
        n("7a82");
        var i = n("ee27").default;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CalcOtherXiyiModelValue = function (t) {
            var n = t.selectmodalconfig.xiyiWorkerBaseModeSelected.value,
              i =
                t.selectmodalconfig.xiyiWorkerRinseSelected.findIndex(function (
                  e
                ) {
                  return "超净漂洗" == e.name;
                }) > -1,
              a =
                t.selectmodalconfig.xiyiWorkerRinseSelected.findIndex(function (
                  e
                ) {
                  return "加强洗" == e.name;
                }) > -1,
              s =
                "40度" ==
                t.selectmodalconfig.xiyiWorkerTemperatureSelected.name,
              o =
                "60度" ==
                t.selectmodalconfig.xiyiWorkerTemperatureSelected.name;
            switch (t.selectmodalconfig.xiyiWorkerBaseModeSelected.value) {
              case 1:
                i && (n = 106),
                  a && (n = 113),
                  i && a && (n = 110),
                  s && (n = 116),
                  o && (n = 122),
                  i && s && (n = 119),
                  i && o && (n = 125);
                break;
              case 2:
                i && (n = 107),
                  a && (n = 114),
                  i && a && (n = 111),
                  s && (n = 117),
                  o && (n = 123),
                  i && s && (n = 120),
                  i && o && (n = 126);
                break;
              case 3:
                i && (n = 108),
                  a && (n = 115),
                  i && a && (n = 112),
                  s && (n = 118),
                  o && (n = 124),
                  i && s && (n = 121),
                  i && o && (n = 127);
                break;
              case 8:
                i && (n = 109);
                break;
              default:
                break;
            }
            return e.log("---------------------"), e.log(n), n;
          }),
          (t.InitXiyiModelContent = function (e) {
            for (
              var t = 0;
              t < e.selectmodalconfig.xiyiOriginalChargeRule.length;
              t++
            ) {
              var n = e.selectmodalconfig.xiyiOriginalChargeRule[t].value;
              switch (e.selectmodalconfig.xiyiWorkerBaseModeSelected.value) {
                case 1:
                  (106 != n && 110 != n && 119 != n && 125 != n) ||
                    (e.selectmodalconfig.xiyiWorkerRinseContent[0].disable =
                      !1),
                    (110 != n && 113 != n) ||
                      (e.selectmodalconfig.xiyiWorkerRinseContent[1] &&
                        (e.selectmodalconfig.xiyiWorkerRinseContent[1].disable =
                          !1)),
                    (116 != n && 119 != n) ||
                      (e.selectmodalconfig.xiyiWorkerTemperatureContent[0].disable =
                        !1),
                    (122 != n && 125 != n) ||
                      (e.selectmodalconfig.xiyiWorkerTemperatureContent[1].disable =
                        !1);
                  break;
                case 2:
                  (107 != n && 111 != n && 120 != n && 126 != n) ||
                    (e.selectmodalconfig.xiyiWorkerRinseContent[0].disable =
                      !1),
                    (111 != n && 114 != n) ||
                      (e.selectmodalconfig.xiyiWorkerRinseContent[1] &&
                        (e.selectmodalconfig.xiyiWorkerRinseContent[1].disable =
                          !1)),
                    (117 != n && 120 != n) ||
                      (e.selectmodalconfig.xiyiWorkerTemperatureContent[0].disable =
                        !1),
                    (123 != n && 126 != n) ||
                      (e.selectmodalconfig.xiyiWorkerTemperatureContent[1].disable =
                        !1);
                  break;
                case 3:
                  (108 != n && 112 != n && 121 != n && 127 != n) ||
                    (e.selectmodalconfig.xiyiWorkerRinseContent[0].disable =
                      !1),
                    (112 != n && 115 != n) ||
                      (e.selectmodalconfig.xiyiWorkerRinseContent[1] &&
                        (e.selectmodalconfig.xiyiWorkerRinseContent[1].disable =
                          !1)),
                    (118 != n && 121 != n) ||
                      (e.selectmodalconfig.xiyiWorkerTemperatureContent[0].disable =
                        !1),
                    (124 != n && 127 != n) ||
                      (e.selectmodalconfig.xiyiWorkerTemperatureContent[1].disable =
                        !1);
                  break;
                case 8:
                  109 == n &&
                    (e.selectmodalconfig.xiyiWorkerRinseContent[0].disable =
                      !1),
                    e.selectmodalconfig.xiyiWorkerRinseContent[1] &&
                      (e.selectmodalconfig.xiyiWorkerRinseContent[1].disable =
                        !0);
                  break;
                default:
                  e.selectmodalconfig.xiyiWorkerRinseContent.map(function (e) {
                    e.disable = !0;
                  }),
                    e.selectmodalconfig.xiyiWorkerTemperatureContent.map(
                      function (e) {
                        e.disable = !0;
                      }
                    );
                  break;
              }
            }
            (e.selectmodalconfig.xiyiWorkerRinseSelected = []),
              (e.selectmodalconfig.xiyiWorkerTemperatureSelected = {});
          }),
          (t.XiyiModelChange = function (e, t, n) {
            if (e.disable) return;
            switch (t) {
              case 0:
                var i = n.selectmodalconfig.xiyiWorkerRinseSelected.findIndex(
                  function (t) {
                    return t.name == e.name;
                  }
                );
                i > -1
                  ? n.selectmodalconfig.xiyiWorkerRinseSelected.splice(i, 1)
                  : n.selectmodalconfig.xiyiWorkerRinseSelected.push(e),
                  -1 !=
                    n.selectmodalconfig.xiyiWorkerRinseSelected.findIndex(
                      function (e) {
                        return "加强洗" == e.name;
                      }
                    ) ||
                  8 == n.selectmodalconfig.xiyiWorkerBaseModeSelected.value
                    ? n.selectmodalconfig.xiyiWorkerTemperatureContent.map(
                        function (e) {
                          e.disable = !0;
                        }
                      )
                    : n.selectmodalconfig.xiyiWorkerTemperatureContent.map(
                        function (e) {
                          e.disable = !1;
                        }
                      );
                break;
              case 1:
                e.name == n.selectmodalconfig.xiyiWorkerTemperatureSelected.name
                  ? (n.selectmodalconfig.xiyiWorkerTemperatureSelected = {})
                  : (n.selectmodalconfig.xiyiWorkerTemperatureSelected = e);
                var s = !a.default.isNullOrEmpty(
                  n.selectmodalconfig.xiyiWorkerRinseContent[1]
                );
                s &&
                  (a.default.isNullOrEmpty(
                    n.selectmodalconfig.xiyiWorkerTemperatureSelected
                  )
                    ? (n.selectmodalconfig.xiyiWorkerRinseContent[1].disable =
                        !1)
                    : (n.selectmodalconfig.xiyiWorkerRinseContent[1].disable =
                        !0));
                break;
              default:
                break;
            }
          }),
          (t.isShowAllConusmeModel = function (e) {
            return "HAILE-SXG100-B1426UZ" == e || "DEFAULT" == e;
          }),
          (t.isSupportStrengthenWashing = function (e) {
            return "HAIER-SXG90-B636UB" == e || "HAILE-SXG90-B636UB" == e;
          }),
          n("d81d"),
          n("c740"),
          n("a434"),
          n("14d9");
        var a = i(n("6972"));
        i(n("5cd9"));
      }).call(this, n("5a52")["default"]);
    },
  },
]);
