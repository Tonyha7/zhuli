(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "pages-index-index~pagesA-consume-consume~pagesA-consume_status-consume_status",
  ],
  {
    "2bd5": function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("991d"),
        c = n("61c5");
      for (var r in c)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return c[e];
            });
          })(r);
      n("3620");
      var i = n("f0c5"),
        d = Object(i["a"])(
          c["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "6160c7d4",
          null,
          !1,
          a["a"],
          void 0
        );
      t["default"] = d.exports;
    },
    3620: function (e, t, n) {
      "use strict";
      var a = n("4a15"),
        c = n.n(a);
      c.a;
    },
    "4a15": function (e, t, n) {
      var a = n("d764");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
      var c = n("4f06").default;
      c("4563aed8", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "61c5": function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n("72be"),
        c = n.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(r);
      t["default"] = c.a;
    },
    "72be": function (e, t, n) {
      "use strict";
      n("7a82");
      var a = n("ee27").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var c = a(n("6972")),
        r = {
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
          methods: {
            onClick: function () {
              this.$emit("click"), c.default.callKefu();
            },
          },
        };
      t.default = r;
    },
    "991d": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "a", function () {});
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "v-uni-view",
            [
              "column" == e.type
                ? n(
                    "v-uni-view",
                    {
                      staticClass: "column-container",
                      style: [
                        { "background-color": e.backgroundColor },
                        { top: e.top },
                      ],
                      on: {
                        click: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            e.onClick.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "column-icon-container" },
                        [
                          n("v-uni-image", {
                            attrs: { src: "/static/imgs/contact_service.png" },
                          }),
                        ],
                        1
                      ),
                      n("v-uni-view", { staticClass: "text-container" }, [
                        e._v("联系"),
                        n("br"),
                        e._v("客服"),
                      ]),
                    ],
                    1
                  )
                : n(
                    "v-uni-view",
                    {
                      staticClass: "row-container",
                      style: [{ top: e.top }],
                      on: {
                        click: function (t) {
                          (arguments[0] = t = e.$handleEvent(t)),
                            e.onClick.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      n(
                        "v-uni-view",
                        { staticClass: "row-icon-container" },
                        [
                          n("v-uni-image", {
                            attrs: { src: "/static/imgs/contact_service.png" },
                          }),
                        ],
                        1
                      ),
                      n(
                        "v-uni-view",
                        {
                          staticClass: "text-container",
                          staticStyle: {
                            "writing-mode": "vertical-lr",
                            "text-orientation": "upright",
                          },
                        },
                        [e._v("联系客服")]
                      ),
                    ],
                    1
                  ),
            ],
            1
          );
        },
        c = [];
    },
    d764: function (e, t, n) {
      var a = n("24fb");
      (t = a(!1)),
        t.push([
          e.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.column-container[data-v-6160c7d4]{width:%?220?%;height:%?120?%;position:fixed;border-top-left-radius:%?30?%;border-bottom-left-radius:%?30?%;display:flex;align-items:center;justify-content:space-between;right:0;top:50%;padding:0 %?40?% 0 %?20?%;z-index:15}.column-icon-container[data-v-6160c7d4]{width:%?80?%;height:%?80?%}.column-icon-container uni-image[data-v-6160c7d4]{width:100%;height:100%}.row-container[data-v-6160c7d4]{width:%?70?%;height:%?200?%;background-image:linear-gradient(180deg,#d0dcff,#d1f4fe);position:fixed;border-top-left-radius:%?30?%;border-bottom-left-radius:%?30?%;display:flex;flex-flow:column;align-items:center;justify-content:space-between;right:0;padding:%?20?% 0 %?20?% 0;z-index:15}.row-icon-container[data-v-6160c7d4]{width:%?40?%;height:%?40?%}.row-icon-container uni-image[data-v-6160c7d4]{width:100%;height:100%}',
          "",
        ]),
        (e.exports = t);
    },
    de7a: function (e, t, n) {
      "use strict";
      n("7a82"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = {
        Init: function (e, t) {
          zl.bluetooth.init(e, t);
        },
        Close: function () {
          zl.bluetooth.close();
        },
        startScan: function () {
          return zl.bluetooth.startScan();
        },
        stopScan: function () {
          return zl.bluetooth.stopScan();
        },
        createBLEConnection: function (e) {
          return zl.bluetooth.connect(e);
        },
        closeBLEConnection: function (e) {
          zl.bluetooth.disconnect({ deviceId: e });
        },
        writeBLECharacteristicValue: function (e, t) {
          return zl.bluetooth.write({ deviceId: e, value: t });
        },
        registerHandler: function (e, t) {
          zl.bluetooth[e](t);
        },
      };
      t.default = a;
    },
    fea5: function (e, t, n) {
      "use strict";
      (function (t) {
        var a = n("ee27").default,
          c = a(n("f3f3")),
          r = a(n("0122"));
        n("ac1f"),
          n("5319"),
          n("e9c4"),
          n("c975"),
          n("14d9"),
          n("99af"),
          n("c19f"),
          n("ace4"),
          n("d3b7"),
          n("e25e"),
          n("d9e2"),
          n("d401"),
          n("d81d"),
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
          n("fb6a"),
          n("25f0");
        var i = a(n("6972")),
          d = a(n("1783")),
          u = a(n("de7a"));
        e.exports = {
          initbledevice: function (e, n) {
            (v = e),
              (_ = d.default.state.SystemInfo.platform || ""),
              t.log("----------ble.----------" + _),
              (_ = _.toLowerCase()),
              "ios" == _ &&
                "alipay" == i.default.getplatformtype() &&
                ((o = "FF12"), (l = "FF01"), (s = "FF02"));
            return void u.default.Init(
              { services_uuid: o, read_uuid: s, write_uuid: l },
              function (e) {
                if ((t.log("initbledevice===========", e), 0 === e.code)) {
                  var a = u.default.startScan();
                  if (0 !== a.code)
                    return (
                      t.log("startResult===========", a),
                      n(null, "蓝牙连接失败")
                    );
                  t.log("startResult=========>", a);
                  return (
                    u.default.registerHandler(
                      "onDevicesDiscovered",
                      function (e) {
                        g(JSON.parse(e));
                      }
                    ),
                    u.default.registerHandler("onScanError", function (e, n) {
                      t.log("onScanError=====>", e, n);
                    }),
                    n(!0, null)
                  );
                }
                var c = "蓝牙未开启或不可用";
                return (
                  (1001 !== e.code && 1002 !== e.code) || (c = e.code),
                  n(null, c)
                );
              }
            );
          },
          getbledevicelist: h,
          appendBleDevice: g,
          createBLEConnection: function (e, n) {
            var a = e.ble_mac;
            if ((t.log("----------系统类型------------" + _), "ios" == _)) {
              for (var c = 0; c < p.length; c++)
                p[c].name == e.ble_name && (a = p[c].deviceId);
              if (a == e.ble_mac) return n(null, "未找到指定设备");
            }
            (f = e), (f.connectdevid = a), (f.deviceid = e.device_id);
            u.default.stopScan(),
              u.default.registerHandler("onConnected", function (e) {
                t.log("-------------onConnected-----------------" + e);
              });
            var r = u.default.createBLEConnection(a);
            if ((t.log("connectResult=====>", r), 0 !== r.code))
              return n(void 0, r.msg);
            return (
              u.default.registerHandler("onConnectTimeouted", function (e) {
                return t.log("onConnectTimeouted=====>", e), n(void 0, e);
              }),
              void u.default.registerHandler(
                "onServicesDiscovered",
                function (e) {
                  return (
                    t.log(
                      "-------------onServicesDiscovered-----------------" + e
                    ),
                    n(f)
                  );
                }
              )
            );
          },
          discoverService: b,
          getBLEDeviceCharacteristics: C,
          setSimpleNotify: y,
          applyNotifyData: w,
          handShark: function (e, n, a) {
            if (i.default.isNullOrEmpty(f))
              return a(null, "device_not_connected");
            i.default
              .sendapppost(
                d.default.state.project.server_addr +
                  i.default.API_PATH.bleCreateHandShakeCmd,
                { device_id: n }
              )
              .then(function (c) {
                t.log("------握手命令----" + c),
                  k("cmd_handshark", f.connectdevid, c, function (c, r) {
                    return r
                      ? a(null, r)
                      : "error_crc" == f.sendResult
                      ? a(null, "CRC错误")
                      : A(n, c, function (c, r) {
                          if (r) return a(null, r);
                          if (
                            ((c.connectdevid = f.connectdevid),
                            i.default.isNullOrEmpty(c) || !("isn" in c))
                          )
                            return a(null, r);
                          f.isn = c.isn;
                          var u = c.ratecmd,
                            o = c.result;
                          return 3 == f.device_type || 5 == f.device_type
                            ? a(
                                {
                                  record: null,
                                  isn: f.isn,
                                  ratecmd: u,
                                  handresult: o,
                                },
                                r
                              )
                            : "result" in c && 3 == c.result
                            ? (function (e, t, n) {
                                i.default
                                  .sendapppost(
                                    d.default.state.project.server_addr +
                                      i.default.API_PATH
                                        .getStaffLastConsumeRecord,
                                    { staff_id: e, device_id: t }
                                  )
                                  .then(function (e) {
                                    return n(e, null);
                                  })
                                  .catch(function (e) {
                                    return n(null, e);
                                  });
                              })(e, n, function (e, n) {
                                return (
                                  t.log(
                                    "-----queryStaffLastConsumeOrder------" +
                                      JSON.stringify(e)
                                  ),
                                  a({ record: e, isn: f.isn, ratecmd: u }, n)
                                );
                              })
                            : (function (e, n) {
                                return (function (e, t) {
                                  i.default
                                    .sendapppost(
                                      d.default.state.project.server_addr +
                                        i.default.API_PATH
                                          .bleCreateHistoryOrderCmd,
                                      { isn: f.isn, device_id: e }
                                    )
                                    .then(function (e) {
                                      return t(e, null);
                                    })
                                    .catch(function (e) {
                                      return t(null, e);
                                    });
                                })(e, function (a, c) {
                                  if (c) return n(null, c);
                                  t.log("写入请求历史消费订单命令"),
                                    k(
                                      "cmd_historyorder",
                                      f.connectdevid,
                                      a,
                                      function (a, c) {
                                        return c
                                          ? n(null, c)
                                          : S(e, a, function (e, a) {
                                              return (
                                                a &&
                                                  t.log(
                                                    "submitHistoryOrderResponse-error:" +
                                                      a
                                                  ),
                                                n(e)
                                              );
                                            });
                                      }
                                    );
                                });
                              })(n, function (e, t) {
                                return t
                                  ? a(null, t)
                                  : a({ record: null, isn: f.isn, ratecmd: u });
                              });
                        });
                  });
              })
              .catch(function (e) {
                return t.error("错误" + e), a(null, e);
              });
          },
          writeCharacteristicWithResult: k,
          submitHandSharkResult: A,
          startconsume: function (e, t, n) {
            E(e, t, function (e, t) {
              return n(e, t);
            });
          },
          createConsumeOrder: E,
          submitDeviceConsumeOrderResponse: function (e, t, n, a) {
            i.default
              .sendapppost(
                d.default.state.project.server_addr +
                  i.default.API_PATH.bleStartConsumeResponse,
                { hex: n, device_id: e, order_id: t }
              )
              .then(function (e) {
                return a(e, null);
              })
              .catch(function (e) {
                return a(null, e);
              });
          },
          createEndConsumeOrderCmd: function (e, t, n) {
            i.default
              .sendapppost(
                d.default.state.project.server_addr +
                  i.default.API_PATH.bleCreateEndConsumeCmd,
                { device_id: e, isn: t }
              )
              .then(function (e) {
                return n(e, null);
              })
              .catch(function (e) {
                return n(null, e);
              });
          },
          submitDeviceEndConsumeResponse: S,
          closecoon: function () {
            if (!f) return;
            return void u.default.closeBLEConnection(f.connectdevid);
          },
          deletedevice: function (e, t) {
            if (i.default.isNullOrEmpty(e)) return !1;
            i.default.sendGet(
              i.default.helper.AUTH_SERVER_ADDR + "/wechat/device/deldevice",
              { deviceid: e },
              function (e, n) {
                return t(e, n);
              }
            );
          },
          getdeviceidbyblename: function (e) {
            if (i.default.isNullOrEmpty(e)) return "";
            if ("B" == e[0]) return "errdevice";
            var t = "";
            return (
              (t = e.replace("BLE Device-", "")),
              (t = t.replace("XN-", "")),
              (t = t.replace("GW-", "")),
              (t = t.replace(/\s*/g, "")),
              t
            );
          },
          writeBLECharacteristicValue: P,
          stringToHexBuffer: function (e) {
            for (
              var t = new ArrayBuffer(20), n = new DataView(t), a = 0;
              a < e.length;
              a += 2
            ) {
              var c = parseInt(e[a] + e[a + 1], 16);
              n.setUint8(a / 2, c);
            }
            return t;
          },
          convertHexStrToArray: D,
          getconnecteddevice: function (e) {
            uni.getConnectedBluetoothDevices({
              services: [o],
              success: function (t) {
                return i.default.isNullOrEmpty(t.devices[0])
                  ? e(void 0, "nodevice")
                  : e(t.devices[0], null);
              },
              fail: function (t) {
                return e(void 0, t);
              },
            });
          },
          CreateGetCCIDListCmd: function (e, t) {
            var n = { device_id: e };
            i.default
              .sendauthget(
                m + "webapi/" + i.default.API_PATH.CreateProfileListCmd,
                n
              )
              .then(function (e) {
                return t(e, null);
              })
              .catch(function (e) {
                return t(null, e);
              });
          },
          submitDeviceDataCmdResponse: function (e, n, a) {
            var d = { ble_data: n };
            "object" === (0, r.default)(n) && (d = (0, c.default)({}, n));
            (d.device_id = e),
              (d.cmd = f.sendCmd),
              "object" === (0, r.default)(d.ble_data) &&
                (d.ble_data = JSON.stringify(d.ble_data));
            t.log(d),
              i.default
                .sendauthget(
                  m + "webapi/" + i.default.API_PATH.SubmitBleData,
                  d
                )
                .then(function (e) {
                  return a(e, null);
                })
                .catch(function (e) {
                  return a(null, e);
                });
          },
          CreateSyncDataHeadCmd: function (e, t) {
            var n = { device_id: e };
            i.default
              .sendauthget(
                m + "webapi/" + i.default.API_PATH.SyncDataHeadCmd,
                n
              )
              .then(function (e) {
                return t(e, null);
              })
              .catch(function (e) {
                return t(null, e);
              });
          },
          CreateDownProfileDataCmd: function (e, t, n) {
            var a = { device_id: e, profile_data: t };
            i.default
              .sendauthget(
                m + "webapi/" + i.default.API_PATH.DownLoadHeadCmd,
                a
              )
              .then(function (e) {
                return n(e, null);
              })
              .catch(function (e) {
                return n(null, e);
              });
          },
          CreateSyncProfileDataCmd: function (e, t, n) {
            var a = { device_id: e, profile_data: t };
            i.default
              .sendauthget(
                m + "webapi/" + i.default.API_PATH.SyncProfileInfo,
                a
              )
              .then(function (e) {
                return n(e, null);
              })
              .catch(function (e) {
                return n(null, e);
              });
          },
          CreateDeleteCCIDCmd: function (e, t, n, a) {
            var c = { device_id: e, profile_data: t, ccid: n };
            i.default
              .sendauthget(m + "webapi/" + i.default.API_PATH.DeleteHeadCmd, c)
              .then(function (e) {
                return a(e, null);
              })
              .catch(function (e) {
                return a(null, e);
              });
          },
          QueryBleEsimTaskInfo: function (e, t, n) {
            var a = { device_id: e, task_id: t };
            i.default
              .sendauthget(
                m + "webapi/" + i.default.API_PATH.BleDeviceChangeNetworkInfo,
                a
              )
              .then(function (e) {
                return n(e, null);
              })
              .catch(function (e) {
                return n(null, e);
              });
          },
          ExecuteBleEsimTaskInfo: function (e, t, n, a) {
            var c = { device_id: e, task_id: t, data: n };
            i.default
              .sendauthpost(
                m +
                  "webapi/" +
                  i.default.API_PATH.BleDeviceChangeNetworkExecute,
                c
              )
              .then(function (e) {
                return a(e, null);
              })
              .catch(function (e) {
                return a(null, e);
              });
          },
          CreateEnableCCIDCmd: function (e, t) {
            var n = { device_id: e };
            i.default
              .sendauthget(m + "webapi/" + i.default.API_PATH.BleEnableCcid, n)
              .then(function (e) {
                return t(e, null);
              })
              .catch(function (e) {
                return t(null, e);
              });
          },
          CreateRestartLteCmd: function (e, t) {
            var n = { device_id: e };
            i.default
              .sendauthget(m + "webapi/" + i.default.API_PATH.BleLteReboot, n)
              .then(function (e) {
                return t(e, null);
              })
              .catch(function (e) {
                return t(null, e);
              });
          },
          closeBluetoothAdapter: function () {
            return void u.default.Close();
          },
          onBluetoothAdapterStateChange: function (e) {
            return;
          },
          GetbleEsimCmdType: function (e) {
            return {
              160: "cmd_get_imei",
              161: "cmd_get_ccid_list",
              162: "cmd_get_ccid",
              163: "cmd_sync_data_head",
              164: "cmd_sync_data_pack",
              165: "cmd_download_data_head",
              166: "cmd_download_data_pack",
              167: "cmd_download_data_pack_end",
              168: "cmd_enable_ccid",
              169: "cmd_delete_ccid_head",
              170: "cmd_delete_ccid_pack",
              171: "cmd_enable_ccid_result",
              172: "cmd_restart_lte",
            }[e];
          },
        };
        var o = "0000ff12-0000-1000-8000-00805f9b34fb",
          l = "0000ff01-0000-1000-8000-00805f9b34fb",
          s = "0000ff02-0000-1000-8000-00805f9b34fb",
          f = void 0,
          p = [],
          v = null,
          _ = "",
          m = i.default.DOMAIN_AUTH_SERVER_ADDR;
        function h() {
          uni.startBluetoothDevicesDiscovery({
            success: function (e) {
              uni.onBluetoothDeviceFound(function (e) {
                g(e.devices[0]);
              });
            },
            fail: function (e) {
              t.log("查找蓝牙设备失败" + JSON.stringify(e));
            },
          });
        }
        function g(e) {
          i.default.isNullOrEmpty(e.localName) || (e.name = e.localName);
          for (var t = !0, n = 0; n < p.length; n++)
            if (p[n].name == e.name) {
              t = !1;
              break;
            }
          t &&
            e.name &&
            -1 != e.name.indexOf("XN") &&
            ((e.isConnected = !1), p.push(e));
        }
        function b(e, n) {
          uni.getBLEDeviceServices({
            deviceId: e,
            success: function (a) {
              return t.log("服务扫描成功,开始获取特征值"), C(e, o, n);
            },
            fail: function (e) {
              return t.log(JSON.stringify(e)), n(null, e.errMsg);
            },
          });
        }
        function C(e, n, a) {
          uni.getBLEDeviceCharacteristics({
            deviceId: e,
            serviceId: o.toUpperCase(),
            success: function (e) {
              return a(e.characteristics, null);
            },
            fail: function (e) {
              return t.error("getBLEDeviceCharacteristics", e), a("", e.errMsg);
            },
          });
        }
        function y(e) {
          uni.onBLECharacteristicValueChange(function (n) {
            t.log(
              "characteristic "
                .concat(n.characteristicId, " has changed, now is ")
                .concat(n.value)
            ),
              t.log("设备响应--------------------");
            var a = n.value;
            if ((t.log(a), !i.default.isNullOrEmpty(e) && a.length >= 40))
              return e(a);
          });
        }
        function w(e) {
          if (e != f.data || "android" != _) {
            (f.data = ""), t.log("开始处理ble设备数据:" + e), t.log(e);
            var n = D(e);
            switch (
              (6 != n[2] && f && ((f.sendSuccess = !0), (f.sendCmd = n[2])),
              n[2])
            ) {
              case 1:
                (f.data = e), (f.cmdtype = "cmd_handshark");
                break;
              case 2:
              case 67:
                (f.data = e), (f.cmdtype = "cmd_historyorder");
                break;
              case 3:
              case 64:
                t.log("-------------------开始消费响应---------------------"),
                  (f.data = e),
                  (f.cmdtype = "cmd_startorder");
                break;
              case 4:
              case 5:
              case 65:
                (f.data = e), (f.cmdtype = "cmd_endconsume");
                break;
              case 6:
              case 66:
                (f.data = e),
                  t.log("主动结算"),
                  S(f.deviceid, e, function (e, n) {
                    return n
                      ? t.log(n)
                      : v.endconsumecallback
                      ? v.endconsumecallback(e)
                      : void 0;
                  });
                break;
              case 18:
                (f.data = e), (f.setuuped = !0);
                break;
              case 202:
                f.data = e;
                break;
              case 206:
                f.data = e;
                break;
              case 204:
                t.log("升级结束响应-----------------------");
                break;
              case 240:
                t.log("error_crc---------------------------"),
                  (f.sendResult = "error_crc");
                break;
              case 16:
                (f.data = e), (f.cmdtype = "cmd_setrate");
                break;
              case 160:
                (f.data = e), (f.cmdtype = "cmd_get_imei");
                break;
              case 161:
                (f.data = e), (f.cmdtype = "cmd_get_ccid_list");
                break;
              case 162:
                (f.data = e), (f.cmdtype = "cmd_get_ccid");
                break;
              case 163:
                (f.data = e), (f.cmdtype = "cmd_sync_data_head");
                break;
              case 164:
                (f.data = e), (f.cmdtype = "cmd_sync_data_pack");
                break;
              case 165:
                (f.data = e), (f.cmdtype = "cmd_download_data_head");
                break;
              case 166:
                (f.data = e), (f.cmdtype = "cmd_download_data_pack");
                break;
              case 167:
                (f.data = e), (f.cmdtype = "cmd_download_data_pack_end");
                break;
              case 168:
                (f.data = e), (f.cmdtype = "cmd_enable_ccid");
                break;
              case 169:
                (f.data = e), (f.cmdtype = "cmd_delete_ccid_head");
                break;
              case 170:
                (f.data = e), (f.cmdtype = "cmd_delete_ccid_pack");
                break;
              case 171:
                (f.data = e), (f.cmdtype = "cmd_enable_ccid_result");
                break;
              case 172:
                (f.data = e), (f.cmdtype = "cmd_restart_lte");
                break;
              default:
                break;
            }
          }
        }
        function k(e, n, a, c) {
          f.sendResult = void 0;
          var r = 0;
          (function i() {
            if (((r += 1), r > 10)) return (r = 0), c(void 0, "设备通讯失败");
            t.log("重写次数--------------" + r), P(n, a, function (e, t) {});
            var d = 0,
              u = null;
            (function n() {
              return (
                t.log(e + "-------------" + f.cmdtype),
                "error_crc" == f.sendResult
                  ? ((f.sendSuccess = !1),
                    (d = 0),
                    clearTimeout(u),
                    (u = null),
                    c(void 0, "CRC错误"))
                  : f.sendSuccess && e == f.cmdtype
                  ? ((f.sendSuccess = !1),
                    (d = 0),
                    clearTimeout(u),
                    (u = null),
                    void c(f.data))
                  : ((d += 1),
                    d > 3
                      ? ((d = 0),
                        clearTimeout(u),
                        (u = null),
                        setTimeout(function () {
                          i();
                        }, 300))
                      : void (u = setTimeout(function () {
                          n();
                        }, 1e3)))
              );
            })();
          })();
        }
        function A(e, n, a) {
          i.default
            .sendapppost(
              d.default.state.project.server_addr +
                i.default.API_PATH.bleHeartSharkResponse,
              { hex: n, device_id: e }
            )
            .then(function (e) {
              return (f.isn = e.isn), a(e, null);
            })
            .catch(function (e) {
              return t.error("提交握手命令错误" + e), a(null, e);
            });
        }
        function E(e, t, n) {
          var a = {
            isn: t,
            device_id: e,
            net_type: 4,
            oauth_type: i.default.getplatformtype(),
            staff_id: v.userdata.detailinfo.id,
          };
          (3 != f.device_type && 5 != f.device_type) ||
            ((a.money = v.CONSUMEMONEY), (a.consume_value = v.CONSUMEVALUE)),
            i.default
              .sendapppost(
                d.default.state.project.server_addr +
                  i.default.API_PATH.createorder,
                a
              )
              .then(function (e) {
                return n(e, null);
              })
              .catch(function (e) {
                return n(null, e);
              });
        }
        function S(e, t, n) {
          i.default
            .sendapppost(
              d.default.state.project.server_addr +
                i.default.API_PATH.bleEndConsumeResponse,
              { hex: t, device_id: e }
            )
            .then(function (e) {
              return n(e, null);
            })
            .catch(function (e) {
              return n(null, e);
            });
        }
        function P(e, n, a) {
          t.log(e + "--------------------------" + n);
          var c = u.default.writeBLECharacteristicValue(e, n);
          if ((t.log("writeResult=========>", c), 0 !== c.code))
            return a(null, c.msg);
          u.default.registerHandler("onCharacteristicChanged", w);
        }
        function D(e) {
          if (((e = e.substr(0, 40)), 40 != e.length || e.length % 2 != 0))
            throw new Error("invild arguments");
          var t = [],
            n = 0;
          while (n < e.length) t.push(parseInt(e[n] + e[n + 1], 16)), (n += 2);
          return t;
        }
      }).call(this, n("5a52")["default"]);
    },
  },
]);
