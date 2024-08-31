(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-consume_status-consume_status"],
  {
    "00e7": function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("b3c93"),
        a = n("d90e");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(o);
      n("37e5");
      var r = n("f0c5"),
        s = Object(r["a"])(
          a["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "a7a18976",
          null,
          !1,
          i["a"],
          void 0
        );
      t["default"] = s.exports;
    },
    "1c6b": function (e, t, n) {
      e.exports = n.p + "static/img/setting.54b51164.svg";
    },
    "1faf": function (e, t, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.spaceCode = void 0);
      t.spaceCode = {
        homeFeeds: "27_2023110722700069535",
        homePreferredStyle: "50_2023110725000069536",
        consumePreferredStyle: "50_2023111625000070819",
        rechargePicture: "ad_tiny_2021001155694496_202311162200070856",
        rechargeFullScreen: "50_2023110725000069539",
        myPagePicture: "ad_tiny_2021001155694496_202311162200070838",
        consumeBillPicture: "ad_tiny_2021001155694496_202311152200070696",
        consumeendFeeds: "27_2023111622700070859",
        consumeBtn: "50_2023112225000071293",
        consumeCheckBox: "50_2023112225000071298",
        consumeFeeds: "27_2023112222700071301",
        myPageFeeds: "27_2023112222700071328",
        consumeEndToast: "50_2023112725000071965",
        rechargeEndToast: "50_2023112725000071994",
        rechargeConfirmFeeds: "27_2023112722700072037",
        commonEquipmentFeeds: "27_2023112722700072038",
        consumeStatusFeeds: "27_2023112922700072343",
        moreProgressFeeds: "27_2023112922700072438",
        consumeEndBtn: "50_2023120725000073705",
        consumeEndCheckBox: "50_2023120725000073716",
      };
    },
    "37e5": function (e, t, n) {
      "use strict";
      var i = n("5a64"),
        a = n.n(i);
      a.a;
    },
    "5a64": function (e, t, n) {
      var i = n("c4c5");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals);
      var a = n("4f06").default;
      a("0ff25607", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    acd1: function (e, t, n) {
      "use strict";
      (function (e) {
        n("7a82");
        var i = n("ee27").default;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var a = i(n("f07e")),
          o = i(n("c964"));
        n("a9e3"),
          n("14d9"),
          n("d401"),
          n("d3b7"),
          n("25f0"),
          n("e9c4"),
          n("c975"),
          n("99af"),
          n("4e82"),
          n("159b");
        var r = i(n("6972")),
          s = i(n("5cd9")),
          c = i(n("fea5")),
          u = (i(n("040a")), n("1faf"), n("1db8")),
          d = {
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                Record: null,
                Devinfo: {},
                consumestyleconfig: {
                  viewimg: "",
                  bgimgurl: "",
                  changeimg: "",
                  titletext: "设备",
                  themecolor: "",
                  bgcolor: "",
                },
                CurrentRecordStatus: {
                  statustext: "正在启动中",
                  statustype: "",
                  mode: "",
                  list: [],
                },
                getorderstatusinterval: null,
                scrollIntoView: "",
                IsNeedRetartFlag: !1,
                consumeMode: "",
                DEV_NETTYPE: "",
                DEV_NETMODULE: [],
                IsNeedOtherNetworkEndConsume: !1,
                isFeedsShow: !0,
                placement1: null,
                placement2: null,
                placement3: [],
                placement4: null,
                placement5: null,
                placement6: null,
                btnRenderFailFlag: !0,
                btnRenderSuccessFlag: !1,
                isShowMaShangPop: !1,
              };
            },
            filters: {
              buildItemid: function (e) {
                return "log-item-" + Number(e + 1);
              },
            },
            watch: {
              "$store.state.adPlacement": {
                handler: function () {
                  this.handleAdPlacement();
                },
                deep: !0,
                immediate: !0,
              },
            },
            computed: {
              showbackiconflag: function () {
                return !0;
              },
              isShowAd: function () {
                return this.$store.state.isShowAd;
              },
              contentstyle: function () {
                return "height:calc(100% - ".concat(this.CustomBar, "px);");
              },
              devicebuildinfo: function () {
                if (null != this.Devinfo)
                  return r.default.isNullOrEmpty(this.Devinfo.building_name) ||
                    r.default.isNullOrEmpty(this.Devinfo.floor_name) ||
                    r.default.isNullOrEmpty(this.Devinfo.room_name)
                    ? "未分配/未分配/未分配"
                    : r.default.getBuildingInfo(
                        this.Devinfo.building_name,
                        this.Devinfo.floor_name,
                        this.Devinfo.room_name
                      );
              },
              progressList: function () {
                if (
                  r.default.isNullOrEmpty(this.CurrentRecordStatus) ||
                  r.default.isNullOrEmpty(this.CurrentRecordStatus.list)
                )
                  return [];
                var e = this.CurrentRecordStatus.list;
                if (e.length <= 0) return [];
                for (var t = [], n = e.length - 1; n >= 0; n--) {
                  if (t.length >= 2) return t;
                  e[n].time && e[n].date && t.push(e[n]);
                }
                return t;
              },
              phone: function () {
                var e = "暂未开放";
                return (
                  r.default.isNullOrEmpty(this.project) ||
                    r.default.isNullOrEmpty(this.project.projectswitch) ||
                    r.default.isNullOrEmpty(
                      this.project.projectswitch.customer_service
                    ) ||
                    r.default.isNullOrEmpty(
                      this.project.projectswitch.customer_service[0].phone
                    ) ||
                    (e = this.project.projectswitch.customer_service[0].phone),
                  e
                );
              },
            },
            onLoad: function (e) {
              var t = this;
              (this.Record = JSON.parse(decodeURIComponent(e.record))),
                this.InitImgAndTitle(),
                this.QueryDevInfoByid(this.Record.device_id),
                this.refreshorderstatus(this.Record.order_id),
                this.$nextTick(function () {
                  t.createConsumeStatusModalAd();
                });
            },
            onUnload: function () {
              c.default.closeBluetoothAdapter(),
                clearInterval(this.getorderstatusinterval),
                (this.getorderstatusinterval = null),
                this.CloseConsumeStatusBottomAd();
            },
            onShow: function () {
              var e = this;
              this.$nextTick(function () {
                e.LoadConsumeStatusBottomAd();
              });
            },
            onHide: function () {
              this.CloseConsumeStatusBottomAd();
            },
            methods: {
              backevent: function () {
                var e = getCurrentPages();
                e.length > 1
                  ? uni.navigateBack({ delta: 1 })
                  : uni.reLaunch({ url: "/pages/index/index" });
              },
              handleAdPlacement: function () {
                (this.placement1 = null),
                  (this.placement2 = null),
                  (this.placement3 = []),
                  (this.placement4 = null),
                  (this.placement5 = null),
                  (this.placement6 = null);
                var e = this.$store.state.adPlacement;
                if (e && !(e.length <= 0))
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t].enum_ad_placement,
                      i = s.default.EnumAdPlacementReverse;
                    n == i["消费中页面-结算按钮上方"]
                      ? (this.placement1 = e[t])
                      : n == i["消费中页面-结算按钮下方1"]
                      ? (this.placement2 = e[t])
                      : n == i["消费中页面-结算按钮下方2"]
                      ? this.placement3.push(e[t])
                      : n == i["消费中页面-弹框"]
                      ? (this.placement4 = e[t])
                      : n == i["消费结果-弹框"]
                      ? (this.placement5 = e[t])
                      : n == i["消费中页面-校园派派币"] &&
                        (this.placement6 = e[t]);
                  }
              },
              InitImgAndTitle: function () {
                var e = this.Record.consume_type,
                  t = this.consumestyleconfig.viewimg,
                  n = this.consumestyleconfig.bgimgurl,
                  i = this.consumestyleconfig.changeimg,
                  a = this.consumestyleconfig.text,
                  o = this.consumestyleconfig.themecolor,
                  s = this.consumestyleconfig.bgcolor;
                this.consumestyleconfig.modeName;
                switch (e) {
                  case "bath":
                    (n =
                      r.default.isNullOrEmpty(this.userdata.detailinfo) ||
                      "2" != this.userdata.detailinfo.sex.toString()
                        ? "/pagesA/static/xiyu-bg-nan.png"
                        : "/pagesA/static/xiyu-bg-nv.png"),
                      (t = "/pagesA/static/consume_xiyu_bg.png"),
                      (i = "/pagesA/static/changeicon-xiyu.png"),
                      (a = "洗浴"),
                      (o = "#47b6fe"),
                      (s = "white"),
                      "pages/consume/consume-xiyu";
                    break;
                  case "drinking":
                    (t = "/pagesA/static/consume_yinshui_bg.png"),
                      (n = "/pagesA/static/yinshui-bg.png"),
                      (i = "/pagesA/static/changeicon-yinshui.png"),
                      (a = "饮水机"),
                      (o = "#2a947d"),
                      (s = "#daffdd"),
                      "pages/consume/consume-yinshui";
                    break;
                  case "laundry":
                    (t = "/pagesA/static/consume_xiyi_bg.png"),
                      (n = "/pagesA/static/xiyi-bg.png"),
                      (i = "/pagesA/static/changeicon-xiyu.png"),
                      (a = "洗衣机"),
                      (o = "#47b6fe"),
                      (s = "white"),
                      "pages/consume/consume-xiyi";
                    break;
                  case "blower":
                    (t = "/pagesA/static/consume_chuifeng_bg.png"),
                      (n = "/pagesA/static/chuifeng-bg.png"),
                      (i = "/pagesA/static/changeicon-chuifeng.png"),
                      (a = "吹风机"),
                      (o = "#e72775"),
                      (s = "#ffffff"),
                      "pages/consume/consume-chuifeng";
                    break;
                  case "dryer":
                    (t = "/pagesA/static/consume_honggan_bg.png"),
                      (n = "/pagesA/static/honggan-bg.png"),
                      (i = "/pagesA/static/changeicon-honggan.png"),
                      (a = "烘干机"),
                      (o = "#9d55df"),
                      (s = "#ffffff"),
                      "pages/consume/consume-honggan";
                    break;
                  case "shoe":
                    (t = "/pagesA/static/consume_xixie_bg.png"),
                      (n = "/pagesA/static/xixie-bg.png"),
                      (i = "/pagesA/static/changeicon-xixie.png"),
                      (a = "洗鞋机"),
                      (o = "#50de56"),
                      (s = "#ffffff"),
                      "pages/consume/consume-xixie";
                    break;
                  default:
                    break;
                }
                this.consumestyleconfig = {
                  viewimg: t,
                  bgimgurl: n,
                  titletext: a,
                  changeimg: i,
                  themecolor: o,
                  bgcolor: s,
                };
              },
              refreshorderstatus: function (e) {
                var t = this;
                this.getorderstatusinterval &&
                  (clearInterval(this.getorderstatusinterval),
                  (this.getorderstatusinterval = null)),
                  t.getorderstatus(e),
                  (this.getorderstatusinterval = setInterval(function () {
                    t.getorderstatus(e);
                  }, 1e4));
              },
              getorderstatus: function (t) {
                var n = this;
                r.default
                  .sendapppost(
                    n.project.server_addr + r.default.API_PATH.getrecorddetail,
                    { bill_id: t, use_type: "consume" }
                  )
                  .then(function (t) {
                    if (
                      (e.log(t, "ret====>>>>>>>>"),
                      (n.consumeMode = n.getConsumeOperationModel(t)),
                      !r.default.isNullOrEmpty(t))
                    ) {
                      if ("finished" == t.status || "refund" == t.status)
                        return (
                          clearInterval(n.getorderstatusinterval),
                          (n.getorderstatusinterval = null),
                          n.endconsumecallback(t)
                        );
                      if (
                        "prepare_pay" == t.status ||
                        "waiting_pay" == t.status
                      ) {
                        clearInterval(n.getorderstatusinterval),
                          (n.getorderstatusinterval = null);
                        var i = [
                          {
                            pay_money: t.pay_money,
                            order_id: t.order_id,
                            create_at: t.create_at,
                          },
                        ];
                        return uni.redirectTo({
                          url: "/pages/immediatepaymentorder/immediatepaymentorder?launchtype=paycharges&parameterobj=".concat(
                            encodeURIComponent(JSON.stringify(i))
                          ),
                        });
                      }
                      if ("waiting_start" == t.status && !n.IsNeedRetartFlag)
                        return (
                          clearInterval(n.getorderstatusinterval),
                          (n.getorderstatusinterval = null),
                          r.default.showalert(
                            "提示",
                            "洗衣机已完成桶自洁，请放好衣物关闭门锁后重新启动,是否立即启动?",
                            function () {
                              n.refreshorderstatus(t.order_id);
                            },
                            function () {
                              n.SendOrderToDeviceAfterFinishClean(t.order_id);
                            },
                            !1,
                            "",
                            "立即启动"
                          )
                        );
                      var a = n.Record.bleConnectDevid;
                      a &&
                        ((t.bleConnectDevid = a), (t.bleIsn = n.Record.bleIsn)),
                        (n.Record = t);
                      -1 !== [3, 8, 9].indexOf(t.device_type) &&
                        n.ParseDeviceRunLog(t.process_log);
                    }
                  })
                  .catch(function (t) {
                    e.log(t);
                  });
              },
              QueryDevInfoByid: function (t) {
                var n = this;
                r.default
                  .sendapppost(
                    n.project.server_addr + r.default.API_PATH.getdevicebyid,
                    { id: t }
                  )
                  .then(function (t) {
                    if (
                      (e.log(t, "设备信息===========/////////////////"),
                      !r.default.isNullOrEmpty(t) &&
                        ((n.Devinfo = t),
                        !r.default.isNullOrEmpty(t.net_module) &&
                          ((n.DEV_NETMODULE = t.net_module.split(",")),
                          e.log(
                            n.DEV_NETMODULE,
                            "that.DEV_NETMODULE==========////////////////////"
                          ),
                          n.DEV_NETMODULE.length > 1)))
                    )
                      for (var i = 0; i < n.DEV_NETMODULE.length; i++)
                        if ("4" != n.DEV_NETMODULE[i]) {
                          n.DEV_NETTYPE = Number(n.DEV_NETMODULE[i]);
                          break;
                        }
                  })
                  .catch(function (e) {});
              },
              ParseDeviceRunLog: function (e) {
                for (
                  var t = this, n = [], i = e.split(";"), a = 0;
                  a < i.length;
                  a++
                ) {
                  for (
                    var o = i[a].split(","), r = {}, s = 0;
                    s < o.length;
                    s++
                  ) {
                    var c = o[s],
                      u = c.split(":");
                    (r.type = "info"),
                      "时间" == u[0] &&
                        (r.date = ""
                          .concat(u[1], ":")
                          .concat(u[2], ":")
                          .concat(u[3])),
                      "剩余时间" == u[0] && (r.time = "剩余:" + u[1]),
                      "运行状态" == u[0] &&
                        ((r.time = u[1]),
                        (r.status = u[1]),
                        (this.CurrentRecordStatus.statustype = "info"),
                        (this.CurrentRecordStatus.statustext = u[1])),
                      "启动状态" == u[0] &&
                        ((r.time = u[1]),
                        (r.status = u[1]),
                        (this.CurrentRecordStatus.statustype = "info"),
                        (this.CurrentRecordStatus.statustext = u[1])),
                      "设备告警" == u[0] &&
                        ((this.CurrentRecordStatus.statustype = "warn"),
                        (this.CurrentRecordStatus.statustext = u[1]),
                        (r.time = u[1]),
                        (r.type = "warn"),
                        (r.status = u[1]),
                        "告警解除" == this.CurrentRecordStatus.statustext &&
                          (this.CurrentRecordStatus.statustype = "info")),
                      "温度等级" == u[0] &&
                        (this.CurrentRecordStatus.mode = u[1]);
                  }
                  r.date && (r.date = new Date(r.date).Format("hh:mm:ss")),
                    n.push(r);
                }
                (this.CurrentRecordStatus.list = n),
                  setTimeout(function () {
                    t.scrollIntoView = "log-item-".concat(
                      t.CurrentRecordStatus.list.length
                    );
                  }, 300);
              },
              SendOrderToDeviceAfterFinishClean: function (e) {
                var t = this;
                uni.showLoading({ title: "正在重新启动中..." }),
                  r.default
                    .sendapppost(
                      this.project.server_addr +
                        r.default.API_PATH.SendToDevice,
                      { order_id: e }
                    )
                    .then(function (e) {
                      (t.IsNeedRetartFlag = !0),
                        uni.showToast({
                          title: "洗衣机已重新开始运行你所选的模式~",
                          position: "bottom",
                          duration: 3e3,
                        });
                    })
                    .catch(function (e) {
                      uni.showToast({
                        title: e,
                        position: "bottom",
                        duration: 3e3,
                      });
                    })
                    .finally(function () {
                      uni.hideLoading(), t.refreshorderstatus(e);
                    });
              },
              popRenderSuccess: function () {
                this.isShowMaShangPop = !0;
              },
              RestartDevice: function () {
                var t = this;
                clearInterval(this.getorderstatusinterval),
                  (this.getorderstatusinterval = null);
                return r.default.showalert(
                  "提示",
                  "强制结束后机器会立即停止运行且不会返还扣费，建议在机器运行异常状态下执行此操作，是否立即结束?",
                  function () {
                    t.refreshorderstatus(t.Record.order_id);
                  },
                  function () {
                    (function () {
                      uni.showLoading({ title: "正在强制结算中..." }),
                        r.default
                          .sendapppost(
                            t.project.server_addr +
                              r.default.API_PATH.ForceEndConsumeOrder,
                            { order_id: t.Record.order_id }
                          )
                          .then(function (e) {
                            (t.IsNeedRetartFlag = !0),
                              uni.showToast({
                                title: "结算成功~",
                                position: "bottom",
                                duration: 3e3,
                              }),
                              t.getorderstatus(t.Record.order_id);
                          })
                          .catch(function (t) {
                            e.log(t),
                              uni.showToast({
                                title: t,
                                position: "bottom",
                                duration: 3e3,
                              });
                          })
                          .finally(function () {
                            uni.hideLoading(),
                              t.refreshorderstatus(that.Record.orderid);
                          });
                    })();
                  },
                  !0,
                  "取消",
                  "确定"
                );
              },
              callkefu: function () {
                var e = this;
                if ("暂未开放" == this.phone)
                  return uni.showToast({
                    icon: "error",
                    title: "暂未开放",
                    position: "center",
                  });
                var t = function () {
                    r.default.makePhoneCall(e.phone);
                  },
                  n = this.CheckIsNowTimeInOpenTime();
                if (!n)
                  return r.default.showalert(
                    "提示",
                    "当前不在服务时段内,是否继续拨打?",
                    null,
                    function () {
                      t();
                    },
                    !0
                  );
                t();
              },
              CheckIsNowTimeInOpenTime: function () {
                var e = !0;
                if (
                  !r.default.isNullOrEmpty(
                    this.project.projectswitch.customer_service[0].weeks
                  ) &&
                  !r.default.isNullOrEmpty(
                    this.project.projectswitch.customer_service[0].start_time
                  ) &&
                  !r.default.isNullOrEmpty(
                    this.project.projectswitch.customer_service[0].end_time
                  )
                ) {
                  var t = this.project.projectswitch.customer_service[0].weeks
                      .split(",")
                      .sort(),
                    n =
                      this.project.projectswitch.customer_service[0].start_time,
                    i = this.project.projectswitch.customer_service[0].end_time,
                    a = new Date(),
                    o = !1;
                  if (
                    (t.forEach(function (e) {
                      Number(e) == a.getDay() && (o = !0);
                    }),
                    o)
                  ) {
                    var s = new Date(
                        a.getFullYear() +
                          "/" +
                          Number(a.getMonth() + 1) +
                          "/" +
                          a.getDate() +
                          " " +
                          n
                      ).getTime(),
                      c = new Date(
                        a.getFullYear() +
                          "/" +
                          Number(a.getMonth() + 1) +
                          "/" +
                          a.getDate() +
                          " " +
                          i
                      ).getTime();
                    e = s <= a.getTime() && a.getTime() <= c;
                  } else e = !1;
                }
                return e;
              },
              gotoaddrepair: function () {
                uni.navigateTo({
                  url:
                    "../addrepair/addrepair?type=0&deviceid=" +
                    this.Record.device_id,
                });
              },
              getConsumeOperationModel: function (e) {
                if (3 != e.device_type) return "";
                var t = e.device_model,
                  n = e.consume_value,
                  i = e.net_type;
                t = "DEFAULT" === t ? t + "-" + i : t;
                var a =
                  s.default.EnumConsumeOperationModel[t] &&
                  s.default.EnumConsumeOperationModel[t][n]
                    ? s.default.EnumConsumeOperationModel[t][n]
                    : n;
                return "洗衣模式：".concat(a);
              },
              endConsumeByDevNettype: function () {
                var e = this;
                return r.default.showalert(
                  "提示",
                  "确认要结束消费吗?",
                  null,
                  function () {
                    4 === e.Record.net_type && (e.DEV_NETTYPE = 4),
                      4 == e.DEV_NETTYPE
                        ? e.bleendconsume()
                        : e.remotegprsorkeyorder();
                  },
                  !0
                );
              },
              bleendconsume: function () {
                var t = this;
                clearInterval(this.getorderstatusinterval),
                  r.default.showloading("正在结束..."),
                  e.log("--------Record--------" + JSON.stringify(t.Record)),
                  c.default.createEndConsumeOrderCmd(
                    t.Record.device_id,
                    t.Record.bleIsn,
                    function (n, i) {
                      return i
                        ? (("CRC错误" != i &&
                            "ISN错误" != i &&
                            "ISN随机数错误" != i) ||
                            (i = "结束消费失败"),
                          t.DEV_NETMODULE.length > 1
                            ? t.ChangeNetWorkToEndConsume(i)
                            : (uni.hideLoading(),
                              r.default.showalert("结算失败", i)))
                        : r.default.isNullOrEmpty(n)
                        ? (uni.hideLoading(),
                          r.default.showalert("结束消费失败,请重试"))
                        : (e.log("---------cmd_endconsume----------" + n),
                          void c.default.writeCharacteristicWithResult(
                            "cmd_endconsume",
                            t.Record.bleConnectDevid,
                            n,
                            function (e, n) {
                              return n
                                ? t.DEV_NETMODULE.length > 1
                                  ? t.ChangeNetWorkToEndConsume(n)
                                  : (uni.hideLoading(),
                                    r.default.showalert("操作失败", n))
                                : c.default.submitDeviceEndConsumeResponse(
                                    t.Devinfo.device_id,
                                    e,
                                    t.endconsumecallback
                                  );
                            }
                          ));
                    }
                  );
              },
              ChangeNetWorkToEndConsume: function (t) {
                var n = this;
                if ((e.log(t), this.IsNeedOtherNetworkEndConsume))
                  return (
                    uni.hideLoading(),
                    (this.IsNeedOtherNetworkEndConsume = !1),
                    r.default.showalert("提示", t)
                  );
                setTimeout(function () {
                  r.default
                    .sendapppost(
                      n.project.server_addr +
                        r.default.API_PATH.getrecorddetail,
                      { bill_id: n.Record.order_id, use_type: "consume" }
                    )
                    .then(function (e) {
                      if (!r.default.isNullOrEmpty(e)) {
                        if ("consuming" != e.status)
                          return (
                            uni.hideLoading(),
                            clearInterval(n.getorderstatusinterval),
                            (n.getorderstatusinterval = null),
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
                        4 == t
                          ? n.bledevstartconnection(n.bleendconsume.bind(n))
                          : n.remotegprsorkeyorder();
                      }
                    })
                    .catch(function (e) {
                      return (
                        uni.hideLoading(),
                        (n.IsNeedOtherNetworkEndConsume = !1),
                        r.default.showalert("提示", e)
                      );
                    });
                }, 1e3);
              },
              remotegprsorkeyorder: function () {
                var t = this;
                r.default.showloading("正在结束..."),
                  r.default
                    .sendapppost(
                      t.$store.state.project.server_addr +
                        r.default.API_PATH.remoteendorder,
                      {
                        order_id: t.Record.order_id,
                        device_id: t.Devinfo.device_id,
                      }
                    )
                    .then(function (n) {
                      e.log("----结束完成----" + n), t.endconsumecallback(n);
                    })
                    .catch(function (e) {
                      if (
                        t.DEV_NETMODULE.length > 1 &&
                        "设备繁忙,请稍后重试" != e
                      )
                        return t.ChangeNetWorkToEndConsume(e);
                      uni.hideLoading(),
                        setTimeout(function () {
                          return r.default.showalert("结束失败, 请稍后重试");
                        }, 300);
                    });
              },
              endconsumecallback: function (t, n) {
                var i = this;
                return (0, o.default)(
                  (0, a.default)().mark(function o() {
                    var s;
                    return (0, a.default)().wrap(
                      function (a) {
                        while (1)
                          switch ((a.prev = a.next)) {
                            case 0:
                              if (
                                ((a.prev = 0),
                                e.log(t),
                                "prepare_pay" != t.status &&
                                  "waiting_pay" != t.status)
                              ) {
                                a.next = 6;
                                break;
                              }
                              return (
                                (s = [
                                  {
                                    pay_money: t.pay_money,
                                    order_id: t.order_id,
                                    create_at: t.create_at,
                                  },
                                ]),
                                uni.hideLoading(),
                                a.abrupt(
                                  "return",
                                  uni.redirectTo({
                                    url: "/pages/immediatepaymentorder/immediatepaymentorder?launchtype=paycharges&parameterobj=".concat(
                                      encodeURIComponent(JSON.stringify(s))
                                    ),
                                  })
                                )
                              );
                            case 6:
                              if (
                                ("finished" != t.status &&
                                  "refund" != t.status &&
                                  (n = "订单结束异常,请留意设备状态是否正常"),
                                !n)
                              ) {
                                a.next = 9;
                                break;
                              }
                              return a.abrupt(
                                "return",
                                r.default.showalert("操作失败", n)
                              );
                            case 9:
                              if (
                                (4 == i.Devinfo.device_type &&
                                  c.default.closecoon(),
                                !i.checkequallyview())
                              ) {
                                a.next = 16;
                                break;
                              }
                              if (null == i.placement5) {
                                a.next = 15;
                                break;
                              }
                              return (
                                (0, u.createBeiZiInterstitialAd)(i.placement5),
                                (a.next = 15),
                                i.GetRequestConsumeEndModalAdResult(6e3)
                              );
                            case 15:
                              return a.abrupt(
                                "return",
                                uni.redirectTo({
                                  url:
                                    "/pagesA/consumeend/consumeend?orderid=" +
                                    t.order_id,
                                })
                              );
                            case 16:
                              a.next = 21;
                              break;
                            case 18:
                              return (
                                (a.prev = 18),
                                (a.t0 = a["catch"](0)),
                                a.abrupt(
                                  "return",
                                  r.default.showalert(
                                    "操作失败",
                                    "订单结束失败,请留意设备状态是否正常"
                                  )
                                )
                              );
                            case 21:
                            case "end":
                              return a.stop();
                          }
                      },
                      o,
                      null,
                      [[0, 18]]
                    );
                  })
                )();
              },
              bledevstartconnection: function (t) {
                var n = this,
                  i = this;
                (function () {
                  c.default.initbledevice(i, function (a, o) {
                    if (n.checkequallyview()) {
                      if (o) {
                        e.log(o);
                        var s = function () {
                          uni.navigateBack({ delta: 1 });
                        };
                        return (
                          n.IsNeedOtherNetworkConnect ||
                            (s = function () {
                              i.DEV_NETTYPE = 4;
                            }),
                          r.default.showalert(
                            "检查蓝牙",
                            "蓝牙未开启或不可用",
                            null,
                            function () {
                              s();
                            },
                            !1
                          )
                        );
                      }
                      uni.onBluetoothAdapterStateChange(function (e) {
                        e.available ||
                          ((i.bledevisncountdown = 25),
                          (i.refreshdowndisconndeviceinterval = null),
                          c.default.closecoon());
                      }),
                        n.scanbleandtryconn(function (a, o) {
                          if ((uni.hideLoading(), n.checkequallyview())) {
                            if ((e.log(o), o)) {
                              if (
                                (r.default.logger.bleerror(
                                  "consume.vue",
                                  "蓝牙设备连接失败," + o,
                                  "scanbleandtryconn",
                                  JSON.stringify({
                                    deviceid: i.Devinfo.device_id,
                                    blename: i.Devinfo.ble_name,
                                    blemac: i.Devinfo.ble_mac,
                                  })
                                ),
                                "ble_err" == o)
                              )
                                return r.default.showalert(
                                  "检查蓝牙",
                                  "蓝牙未开启或不可用",
                                  null,
                                  function () {
                                    uni.navigateBack({ delta: 1 });
                                  },
                                  !1
                                );
                              if ("conn_timeout" == o || "conn_err" == o) {
                                if (t)
                                  return (
                                    (i.IsNeedOtherNetworkEndConsume = !1),
                                    r.default.showalert(
                                      "结算失败",
                                      "设备连接超时，请重试"
                                    )
                                  );
                                var s = null;
                                return (
                                  n.IsNeedOtherNetworkConnect ||
                                    (s = function () {
                                      i.DEV_NETTYPE = 4;
                                    }),
                                  (o =
                                    "连接超时,请确保手机与设备3米内距离且并未使用,是否重新连接"),
                                  r.default.showalert(
                                    "提示",
                                    o,
                                    function () {
                                      s();
                                    },
                                    function () {
                                      i.bledevstartconnection();
                                    },
                                    !0
                                  )
                                );
                              }
                              return r.default.showalert(
                                "提示",
                                o,
                                null,
                                function () {
                                  uni.navigateBack({ delta: 1 });
                                },
                                !1
                              );
                            }
                            return (
                              (i.Record.bleConnectDevid = a.connectdevid),
                              i.starthandShark(t)
                            );
                          }
                        });
                    }
                  });
                })();
              },
              checkequallyview: function () {
                var e = getCurrentPages(),
                  t = e[e.length - 1].route;
                return "pagesA/consume_status/consume_status" == t;
              },
              scanbleandtryconn: function (e) {
                var t = this,
                  n = 0;
                (function i() {
                  if (n > 4) return e(null, "conn_timeout");
                  var a = 1e3;
                  "ios" == systemtype && (a = 4500),
                    setTimeout(function () {
                      c.default.createBLEConnection(t.dev, function (a, o) {
                        if (o) {
                          if (!t.checkequallyview()) return;
                          if ("ble_notneed_err" == o) return;
                          return -1 != o.indexOf("not available") ||
                            -1 != o.indexOf("fail not init")
                            ? e(null, "ble_err")
                            : ((n += 1), i());
                        }
                        return e(a, null);
                      });
                    }, a);
                })();
              },
              handleGoMoreProgress: function () {
                uni.navigateTo({
                  url:
                    "../moreprogress/moreprogress?id=" + this.Record.order_id,
                });
              },
              starthandShark: function (e) {
                var t = this;
                c.default.handShark(
                  t.userdata.detailinfo.id,
                  t.Devinfo.device_id,
                  function (e, n) {
                    if (n) {
                      if (!t.checkequallyview()) return;
                      return (
                        c.default.closecoon(),
                        "ISN错误" == n || "未知错误" == n || "设备通讯失败" == n
                          ? (r.default.logger.bleerror(
                              "consume.vue",
                              "蓝牙设备数据通信失败," + JSON.stringify(n),
                              "starthandShark",
                              JSON.stringify({
                                deviceid: t.Devinfo.device_id,
                                blename: t.Devinfo.ble_name,
                                blemac: t.Devinfo.ble_mac,
                              })
                            ),
                            r.default.showalert(
                              "连接失败",
                              "是否重新连接?",
                              function () {
                                uni.navigateBack({ delta: 1 });
                              },
                              function () {
                                t.bledevstartconnection();
                              },
                              !0
                            ))
                          : (("秘钥错误" != n && "CRC错误" != n) ||
                              (n = "此设备无法连接，请联系管理员"),
                            "error_record_not_exist" == n &&
                              (n = "设备已被占用!"),
                            r.default.showalert(
                              "提示",
                              n,
                              null,
                              function () {
                                uni.navigateBack({ delta: 1 });
                              },
                              !1
                            ))
                      );
                    }
                    t.Record.bleIsn = e.isn;
                  }
                );
              },
              LoadConsumeStatusBottomAd: function () {
                var t = this.$store.state.SystemInfo.screenWidth,
                  n = this.$store.state.SystemInfo.screenHeight,
                  i =
                    this.$store.state.SystemInfo.CustomBar +
                    uni.upx2px(300) +
                    uni.upx2px(150),
                  a = n - i,
                  o = a / 2 - 20;
                if ((e.log(o), null != this.placement2)) {
                  var r = this.placement2.space_code,
                    s = this.placement2.enum_ad_placement,
                    c = i + 10,
                    d = t,
                    l = o;
                  (0, u.createBeiZiNativeAd)(r, s, 0, c, d, l);
                }
                if (this.placement3.length > 0) {
                  var f = this.placement3[0].space_code,
                    h = this.placement3[0].enum_ad_placement,
                    m = i + o + 10,
                    v = t,
                    p = o;
                  (0, u.createBeiZiNativeAd)(f, h, 0, m, v, p);
                }
              },
              CloseConsumeStatusBottomAd: function () {
                null != this.placement2 &&
                  (0, u.closeBeiZiNativeAd)(this.placement2.enum_ad_placement),
                  this.placement3.length > 0 &&
                    (0, u.closeBeiZiNativeAd)(
                      this.placement3[0].enum_ad_placement
                    );
              },
              createConsumeStatusModalAd: function () {
                null != this.placement4 &&
                  (0, u.createBeiZiInterstitialAd)(this.placement4);
              },
              GetRequestConsumeEndModalAdResult: function (t) {
                return new Promise(function (n, i) {
                  var a = !1;
                  uni.$once("FinishedRequestConsumeEndModalAd", function (t) {
                    e.log(
                      "监听到事件来自 FinishedRequestConsumeEndModalAd ，携带参数 msg 为：" +
                        t
                    ),
                      (a = !0),
                      n(!0);
                  });
                  var o = 0,
                    r = Math.floor(t / 100);
                  (function e() {
                    if (((o += 1), !a))
                      return o > r
                        ? ((o = 0), void n(!0))
                        : void setTimeout(function () {
                            e();
                          }, 100);
                  })();
                });
              },
            },
          };
        t.default = d;
      }).call(this, n("5a52")["default"]);
    },
    b218: function (e, t, n) {
      e.exports = n.p + "static/img/arrowDownWhite.1ebc05c1.svg";
    },
    b3c93: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return i;
        });
      var i = { contactService: n("2bd5").default },
        a = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i(
            "v-uni-view",
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
                    [e._v(e._s(e.consumestyleconfig.titletext) + "正在运行中")]
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
                    { staticClass: "building-info-view text-white" },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "address" },
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
                        { staticClass: "dev-number" },
                        [
                          i("v-uni-text", { staticClass: "dev-number-text" }, [
                            e._v("设备号："),
                          ]),
                          i("v-uni-text", { staticClass: "dev-number-id" }, [
                            e._v(e._s(e.Record.device_id)),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "time-info-view" },
                    [
                      i("v-uni-view", [e._v("订单状态：消费中")]),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "time-info-view-right",
                          on: {
                            click: function (t) {
                              (arguments[0] = t = e.$handleEvent(t)),
                                e.gotoaddrepair.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          i("v-uni-image", {
                            attrs: { src: n("1c6b"), mode: "aspectFill" },
                          }),
                          i("v-uni-text", [e._v("设备报修")]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "time-info-view" },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "change-btn-container-moshi" },
                        [e._v(e._s(e.consumeMode))]
                      ),
                    ],
                    1
                  ),
                  0 == e.Devinfo.device_type ||
                  2 == e.Devinfo.device_type ||
                  3 == e.Devinfo.device_type ||
                  4 == e.Devinfo.device_type ||
                  5 == e.Devinfo.device_type
                    ? i(
                        "v-uni-view",
                        { staticClass: "action-view" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "left_btn" },
                            [
                              3 == e.Devinfo.device_type
                                ? i(
                                    "v-uni-button",
                                    {
                                      staticClass:
                                        "confirm-btn action-button-consume",
                                      attrs: { type: "primary" },
                                      on: {
                                        click: function (t) {
                                          (arguments[0] = t =
                                            e.$handleEvent(t)),
                                            e.RestartDevice();
                                        },
                                      },
                                    },
                                    [e._v("强制结束")]
                                  )
                                : e._e(),
                              0 == e.Devinfo.device_type ||
                              2 == e.Devinfo.device_type ||
                              4 == e.Devinfo.device_type ||
                              5 == e.Devinfo.device_type
                                ? i(
                                    "v-uni-button",
                                    {
                                      staticClass:
                                        "confirm-btn action-button-consume",
                                      attrs: { type: "primary" },
                                      on: {
                                        click: function (t) {
                                          (arguments[0] = t =
                                            e.$handleEvent(t)),
                                            e.endConsumeByDevNettype();
                                        },
                                      },
                                    },
                                    [i("span", [e._v("结束消费")])]
                                  )
                                : e._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : e._e(),
                  3 == e.Devinfo.device_type ||
                  8 == e.Devinfo.device_type ||
                  9 == e.Devinfo.device_type
                    ? i(
                        "v-uni-view",
                        { staticClass: "status-view" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "header" },
                            [
                              i("v-uni-view", [e._v("当前进度")]),
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "header-more",
                                  on: {
                                    click: function (t) {
                                      (arguments[0] = t = e.$handleEvent(t)),
                                        e.handleGoMoreProgress.apply(
                                          void 0,
                                          arguments
                                        );
                                    },
                                  },
                                },
                                [
                                  e._v("更多进度"),
                                  i("v-uni-image", {
                                    attrs: { src: n("b218"), mode: "" },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          e._l(e.progressList, function (t, n) {
                            return i(
                              "v-uni-view",
                              {
                                key: n,
                                staticClass: "list-item",
                                attrs: { id: e._f("buildItemid")(n) },
                              },
                              [
                                i(
                                  "v-uni-view",
                                  {
                                    staticClass: "title",
                                    class: [{ "warn-text": "warn" == t.type }],
                                  },
                                  [e._v(e._s(t.date))]
                                ),
                                i("v-uni-view", { staticClass: "content" }, [
                                  e._v(e._s(t.status)),
                                ]),
                                i(
                                  "v-uni-view",
                                  {
                                    staticClass: "content",
                                    class: [{ "warn-text": "warn" == t.type }],
                                  },
                                  [e._v(e._s(t.time))]
                                ),
                              ],
                              1
                            );
                          }),
                        ],
                        2
                      )
                    : e._e(),
                  i("contact-service", {
                    attrs: { backgroundColor: "#D2eef7" },
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
    c4c5: function (e, t, n) {
      var i = n("24fb");
      (t = i(!1)),
        t.push([
          e.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.consume-cardview[data-v-a7a18976]{position:fixed;width:100%;padding-top:%?40?%;overflow-y:scroll}.dev-number[data-v-a7a18976]{display:flex;align-items:center;font-size:%?28?%;color:#fff}.dev-number .dev-number-id[data-v-a7a18976]{margin-left:%?6?%}.building-info-view[data-v-a7a18976]{display:flex;align-items:center;justify-content:space-between;padding:0 %?40?%}.building-info-view .address[data-v-a7a18976]{display:flex;flex:1;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.build-info[data-v-a7a18976]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.time-info-view[data-v-a7a18976]{display:flex;align-items:center;justify-content:space-between;margin:%?15?% 0 0 0;color:#fff;font-size:%?28?%;padding:0 %?50?% 0 %?40?%}.time-info-view .change-btn-container-moshi[data-v-a7a18976]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.time-info-view .time-info-view-right uni-image[data-v-a7a18976]{width:%?40?%;height:%?40?%;vertical-align:bottom}.time-info-view .time-info-view-right uni-text[data-v-a7a18976]{margin-left:%?15?%}.text-toast[data-v-a7a18976]{font-size:%?30?%;color:#fff}.text-container[data-v-a7a18976]{display:flex;color:#32b1fe;padding:%?8?% %?40?%;border-radius:%?20?%;font-weight:700;align-items:center;justify-content:center;position:relative}.status-img[data-v-a7a18976]{width:%?40?%;height:%?40?%;display:inline-block}.content-view[data-v-a7a18976]{height:%?360?%;width:%?360?%;left:calc((100% - %?360?%) / 2);position:relative;text-align:center}.content-view uni-image[data-v-a7a18976]{width:100%;height:100%}.status-view[data-v-a7a18976]{height:%?240?%;background:hsla(0,0%,100%,.2);border-radius:%?20?%;margin:%?20?% %?32?% %?40?%}.status-view > .header[data-v-a7a18976]{display:flex;justify-content:space-between;align-items:center;margin:0 %?30?% 0 %?32?%;border-bottom:1px solid hsla(0,0%,100%,.2);padding:%?20?% 0}.status-view > .header uni-view[data-v-a7a18976]{font-size:%?28?%;font-weight:500;color:#fff;line-height:%?40?%}.header-more[data-v-a7a18976]{display:flex;align-items:center}.header-more uni-image[data-v-a7a18976]{width:%?34?%;height:%?34?%;-webkit-transform:rotate(180deg);transform:rotate(180deg);margin-left:%?10?%}.list-item[data-v-a7a18976]{display:flex;justify-content:space-between;align-items:center;margin:0 %?30?% 0 %?32?%;padding:%?20?% 0}.list-item uni-view[data-v-a7a18976]{font-size:%?28?%;font-weight:500;color:#fff;line-height:%?40?%}.list-item uni-view[data-v-a7a18976]:nth-child(1){width:40%}.list-item uni-view[data-v-a7a18976]:nth-child(2){width:30%}.list-item uni-view[data-v-a7a18976]:nth-child(3){width:28%}.coming[data-v-a7a18976]{display:inline-block}.coming[data-v-a7a18976]:after{font-family:simsun;content:"";-webkit-animation:dotAnimate-data-v-a7a18976 2s infinite;animation:dotAnimate-data-v-a7a18976 2s infinite;position:absolute;margin-left:%?10?%;bottom:%?10?%;color:#fff}@-webkit-keyframes dotAnimate-data-v-a7a18976{0%,\r\n  100%{content:""}25%{content:"."}50%{content:".."}75%{content:"..."}}@keyframes dotAnimate-data-v-a7a18976{0%,\r\n  100%{content:""}25%{content:"."}50%{content:".."}75%{content:"..."}}.action-view[data-v-a7a18976]{display:flex;justify-content:space-between;width:%?630?%;height:%?94?%;margin:%?40?% auto;background:#fff;border-radius:%?94?%;overflow-y:hidden}.action-view .left_btn[data-v-a7a18976]{flex:1}.action-view .left_btn .action-button-consume[data-v-a7a18976]{position:relative;height:%?94?%;line-height:%?94?%;margin:0;padding:0;font-size:%?30?%;background-color:#fff!important;border-radius:%?50?%;border:none;-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}.action-view .right_btn[data-v-a7a18976]{position:relative}.action-view .right_btn .right_btn_box[data-v-a7a18976]{position:absolute;right:0;top:0;z-index:1}.action-view .right_btn .right_image[data-v-a7a18976]{width:%?315?%;height:%?94?%;z-index:2}.confirm-btn[data-v-a7a18976]{color:red;background-image:none!important;background-color:#fff}.warn-text[data-v-a7a18976]{color:#f64101!important}.bananniuguanggao[data-v-a7a18976]{display:inline-flex;justify-content:center;align-items:center;float:right;width:%?315?%;height:47px;color:#fff;background-color:#e86be9}.coin-plugin[data-v-a7a18976]{display:flex;justify-content:center;margin-top:%?30?%}',
          "",
        ]),
        (e.exports = t);
    },
    d90e: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("acd1"),
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
  },
]);
