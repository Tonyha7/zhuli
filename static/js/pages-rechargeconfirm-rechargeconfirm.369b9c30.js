(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-rechargeconfirm-rechargeconfirm"],
  {
    "018f": function (t, e, a) {
      var i = a("6c96");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = a("4f06").default;
      n("a36dea78", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1faf": function (t, e, a) {
      "use strict";
      a("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.spaceCode = void 0);
      e.spaceCode = {
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
    5969: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("5be4"),
        n = a("da7c");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(o);
      a("918f");
      var c = a("f0c5"),
        s = Object(c["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "26e7706e",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "5be4": function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return i;
      }),
        a.d(e, "c", function () {
          return n;
        }),
        a.d(e, "a", function () {});
      var i = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-uni-view",
            { staticStyle: { height: "100%", "background-color": "#f7f7f7" } },
            [
              a(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: t.showbackiconflag } },
                [
                  a(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v(t._s(t.titletext))]
                  ),
                ],
                2
              ),
              a(
                "v-uni-view",
                {
                  staticClass: "cu-modal",
                  class: t.showmodalflag ? "show" : "",
                },
                [
                  a(
                    "v-uni-view",
                    { staticClass: "cu-dialog" },
                    [
                      a(
                        "v-uni-view",
                        { staticClass: "cu-bar bg-white justify-end" },
                        [
                          a("v-uni-view", { staticClass: "content" }, [
                            t._v("确认购买吗？"),
                          ]),
                          a(
                            "v-uni-view",
                            {
                              staticClass: "action",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    (t.showmodalflag = !1),
                                    (t.cashcoupondisabled = !0);
                                },
                              },
                            },
                            [
                              a("v-uni-text", {
                                staticClass: "cuIcon-close text-red",
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      a(
                        "v-uni-view",
                        {
                          staticClass: "padding-xl",
                          staticStyle: { "background-color": "white" },
                        },
                        [
                          a(
                            "v-uni-view",
                            { staticClass: "buycashcoupon-tip" },
                            [
                              t._v("优惠券购买后"),
                              a(
                                "v-uni-text",
                                {
                                  staticStyle: {
                                    color: "#fc593b",
                                    "font-weight": "bold",
                                  },
                                },
                                [t._v("不可退换")]
                              ),
                              t._v("，且过期后将无法使用"),
                            ],
                            1
                          ),
                          a(
                            "v-uni-view",
                            { staticClass: "buycashcoupon-content-container" },
                            [
                              a(
                                "v-uni-view",
                                {
                                  staticStyle: {
                                    display: "flex",
                                    "align-items": "center",
                                  },
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.controlconfirmstatus.apply(
                                          void 0,
                                          arguments
                                        );
                                    },
                                  },
                                },
                                [
                                  a("v-uni-checkbox", {
                                    staticClass: "round blue",
                                    class: t.cashcoupondisabled
                                      ? ""
                                      : "checked",
                                    staticStyle: { transform: "scale(0.8)" },
                                    attrs: { checked: !t.cashcoupondisabled },
                                  }),
                                  a(
                                    "v-uni-text",
                                    {
                                      staticStyle: { "padding-left": "20upx" },
                                    },
                                    [t._v("我已知晓并同意使用规则")]
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-button",
                                {
                                  staticClass: "confirm-btn buy-confirm-btn",
                                  attrs: {
                                    type: "primary",
                                    disabled: t.cashcoupondisabled,
                                  },
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.confirmbuycashcoupon.apply(
                                          void 0,
                                          arguments
                                        );
                                    },
                                  },
                                },
                                [t._v("确认")]
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
              a(
                "v-uni-view",
                {
                  staticStyle: {
                    "background-color": "#f7f7f7",
                    "z-index": "1",
                  },
                  style: t.contentheightstyle,
                },
                [
                  "coupon" == t.MONEYTYPE
                    ? a(
                        "v-uni-view",
                        { staticClass: "content-container" },
                        [
                          a("v-uni-view", { staticClass: "buytitle" }, [
                            t._v("优惠券确认"),
                          ]),
                          a(
                            "v-uni-view",
                            { staticClass: "cashcoupon" },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "cashcoupon-wrapper" },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "cashcoupon-content" },
                                    [
                                      a(
                                        "v-uni-view",
                                        { staticClass: "cashcoupon-title" },
                                        [t._v(t._s(t.RECHARGE_OBJ.name))]
                                      ),
                                      a(
                                        "div",
                                        { staticClass: "cashcoupon-dec" },
                                        [
                                          t._v(
                                            t._s(
                                              t._f("parsezenpin")(
                                                t.RECHARGE_OBJ
                                              )
                                            )
                                          ),
                                        ]
                                      ),
                                      a(
                                        "v-uni-view",
                                        { staticClass: "cashcoupon-sellmoney" },
                                        [
                                          t._v(
                                            "面额" +
                                              t._s(t.RECHARGE_OBJ.money) +
                                              "元"
                                          ),
                                        ]
                                      ),
                                      a(
                                        "div",
                                        { staticClass: "cashcoupon-userlimit" },
                                        [
                                          t._v(
                                            t._s(t.RECHARGE_OBJ.userlimit) +
                                              "可用"
                                          ),
                                        ]
                                      ),
                                      void 0 !== t.RECHARGE_OBJ.use_order
                                        ? a(
                                            "v-uni-view",
                                            {
                                              staticClass:
                                                "cashcoupon-sellmoney",
                                              staticStyle: {
                                                "margin-top": "20upx",
                                              },
                                            },
                                            [
                                              t._v(
                                                "使用顺序：" +
                                                  t._s(
                                                    0 ==
                                                      t.RECHARGE_OBJ.use_order
                                                      ? "优先用券"
                                                      : "优先用余额"
                                                  )
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                  a("v-uni-view", {
                                    staticClass: "cashcoupon-split-line",
                                  }),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "cashcoupon-tip" },
                                    [
                                      a(
                                        "v-uni-view",
                                        {
                                          staticClass: "cashcoupon-totalmoney",
                                        },
                                        [
                                          a(
                                            "v-uni-text",
                                            { staticClass: "yuan-text" },
                                            [t._v("售价")]
                                          ),
                                          a("v-uni-text", [
                                            t._v(t._s(t.RECHARGE_OBJ.price)),
                                          ]),
                                          a(
                                            "v-uni-text",
                                            { staticClass: "yuan-text" },
                                            [t._v("元")]
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
                        ],
                        1
                      )
                    : t._e(),
                  a(
                    "v-uni-view",
                    { staticClass: "content-container" },
                    [
                      a("v-uni-view", { staticClass: "buytitle" }, [
                        t._v("信息确认"),
                      ]),
                      a(
                        "v-uni-view",
                        { staticClass: "info-detail" },
                        [
                          "balance" == t.MONEYTYPE
                            ? a(
                                "v-uni-view",
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "user-info-view" },
                                    [
                                      a(
                                        "v-uni-text",
                                        { staticClass: "info-title" },
                                        [t._v("当前学校")]
                                      ),
                                      a(
                                        "v-uni-text",
                                        { staticClass: "info-content" },
                                        [t._v(t._s(t.project.projectname))]
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    {
                                      staticClass: "user-info-view",
                                      staticStyle: {
                                        "margin-bottom": "0 !important",
                                      },
                                    },
                                    [
                                      a(
                                        "v-uni-text",
                                        { staticClass: "info-title" },
                                        [t._v("账户余额")]
                                      ),
                                      a(
                                        "v-uni-text",
                                        { staticClass: "info-content" },
                                        [t._v(t._s(t.userBalance) + "元")]
                                      ),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "user-info-view last-info-item",
                                    },
                                    [
                                      a(
                                        "v-uni-text",
                                        { staticClass: "info-title" },
                                        [t._v("充值金额")]
                                      ),
                                      a(
                                        "v-uni-text",
                                        { staticClass: "info-content" },
                                        [
                                          t._v(
                                            t._s(t.RECHARGE_OBJ.price) + "元"
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                          "coupon" == t.MONEYTYPE
                            ? a(
                                "v-uni-view",
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "user-info-view" },
                                    [
                                      a(
                                        "v-uni-text",
                                        { staticClass: "info-title" },
                                        [t._v("实际可用")]
                                      ),
                                      a(
                                        "v-uni-text",
                                        { staticClass: "info-content" },
                                        [
                                          t._v(
                                            t._s(
                                              Number(
                                                t.RECHARGE_OBJ.money
                                              ).toFixed(2)
                                            ) + " 元"
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  t.RECHARGE_OBJ.validated_days > 0
                                    ? a(
                                        "v-uni-view",
                                        {
                                          staticClass:
                                            "user-info-view last-info-item",
                                        },
                                        [
                                          a(
                                            "v-uni-text",
                                            { staticClass: "info-title" },
                                            [t._v("有效天数")]
                                          ),
                                          a(
                                            "v-uni-text",
                                            { staticClass: "info-content" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.RECHARGE_OBJ.validated_days
                                                ) + " 天"
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      )
                                    : [
                                        a(
                                          "v-uni-view",
                                          { staticClass: "user-info-view" },
                                          [
                                            a(
                                              "v-uni-text",
                                              { staticClass: "info-title" },
                                              [t._v("开始时间")]
                                            ),
                                            a(
                                              "v-uni-text",
                                              { staticClass: "info-content" },
                                              [
                                                t._v(
                                                  t._s(t.RECHARGE_OBJ.start_at)
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        a(
                                          "v-uni-view",
                                          {
                                            staticClass:
                                              "user-info-view last-info-item",
                                          },
                                          [
                                            a(
                                              "v-uni-text",
                                              { staticClass: "info-title" },
                                              [t._v("结束时间")]
                                            ),
                                            a(
                                              "v-uni-text",
                                              { staticClass: "info-content" },
                                              [
                                                t._v(
                                                  t._s(t.RECHARGE_OBJ.expire_at)
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                ],
                                2
                              )
                            : t._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  a(
                    "v-uni-view",
                    { staticClass: "content-container" },
                    [
                      a("v-uni-view", { staticClass: "buytitle" }, [
                        t._v("支付方式"),
                      ]),
                      a(
                        "v-uni-view",
                        { staticClass: "info-detail" },
                        [
                          a(
                            "v-uni-view",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.payswitch.abcdisable,
                                  expression: "payswitch.abcdisable",
                                },
                              ],
                              staticClass: "pay-type-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    (t.rechargemethod = "abc_china");
                                },
                              },
                            },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "type-container" },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "title-img-container" },
                                    [
                                      a("v-uni-image", {
                                        staticClass: "title-img",
                                        attrs: {
                                          src: "/static/ABCChina.png",
                                          mode: "aspectFit",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "desc-content-container" },
                                    [
                                      a(
                                        "v-uni-view",
                                        [
                                          a(
                                            "v-uni-view",
                                            { staticClass: "type-text" },
                                            [t._v("农行")]
                                          ),
                                          a(
                                            "v-uni-view",
                                            { staticClass: "recommendicon" },
                                            [
                                              a("v-uni-text", {
                                                staticClass:
                                                  "cuIcon-appreciate",
                                                staticStyle: {
                                                  "margin-right": "5upx",
                                                },
                                              }),
                                              t._v("推荐"),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                      a(
                                        "v-uni-view",
                                        { staticClass: "activity-container" },
                                        t._l(
                                          t.activitytext.abctext,
                                          function (e) {
                                            return a(
                                              "v-uni-view",
                                              { staticClass: "activity-item" },
                                              [t._v(t._s(e))]
                                            );
                                          }
                                        ),
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                { staticClass: "select-container" },
                                [
                                  a("v-uni-radio", {
                                    staticClass: "round select-radio",
                                    class:
                                      "abc_china" == t.rechargemethod
                                        ? "checked"
                                        : "",
                                    attrs: {
                                      color: "#32b1fe",
                                      checked: "abc_china" == t.rechargemethod,
                                      value: "abc_china",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            "v-uni-view",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.payswitch.wechatdisable,
                                  expression: "payswitch.wechatdisable",
                                },
                              ],
                              staticClass: "pay-type-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    (t.rechargemethod = "wechat");
                                },
                              },
                            },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "type-container" },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "title-img-container" },
                                    [
                                      a("v-uni-image", {
                                        staticClass: "title-img",
                                        attrs: {
                                          src: "/static/wechat.png",
                                          mode: "aspectFit",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "desc-content-container" },
                                    [
                                      a(
                                        "v-uni-view",
                                        { staticClass: "type-text" },
                                        [t._v("微信")]
                                      ),
                                      a(
                                        "v-uni-view",
                                        { staticClass: "activity-container" },
                                        t._l(
                                          t.activitytext.wechattext,
                                          function (e) {
                                            return a(
                                              "v-uni-view",
                                              { staticClass: "activity-item" },
                                              [t._v(t._s(e))]
                                            );
                                          }
                                        ),
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                { staticClass: "select-container" },
                                [
                                  a("v-uni-radio", {
                                    staticClass: "round select-radio",
                                    class:
                                      "wechat" == t.rechargemethod
                                        ? "checked"
                                        : "",
                                    attrs: {
                                      color: "#32b1fe",
                                      checked: "wechat" == t.rechargemethod,
                                      value: "wechat",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            "v-uni-view",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.payswitch.alipaydisable,
                                  expression: "payswitch.alipaydisable",
                                },
                              ],
                              staticClass: "pay-type-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    (t.rechargemethod = "alipay");
                                },
                              },
                            },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "type-container" },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "title-img-container" },
                                    [
                                      a("v-uni-image", {
                                        staticClass: "title-img",
                                        attrs: {
                                          src: "/static/alipay_icon.png",
                                          mode: "aspectFit",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "desc-content-container" },
                                    [
                                      a(
                                        "v-uni-view",
                                        { staticClass: "type-text" },
                                        [t._v("支付宝")]
                                      ),
                                      a(
                                        "v-uni-view",
                                        { staticClass: "activity-container" },
                                        t._l(
                                          t.activitytext.alipaytext,
                                          function (e) {
                                            return a(
                                              "v-uni-view",
                                              { staticClass: "activity-item" },
                                              [t._v(t._s(e))]
                                            );
                                          }
                                        ),
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                { staticClass: "select-container" },
                                [
                                  a("v-uni-radio", {
                                    staticClass: "round select-radio",
                                    class:
                                      "alipay" == t.rechargemethod
                                        ? "checked"
                                        : "",
                                    attrs: {
                                      color: "#32b1fe",
                                      checked: "alipay" == t.rechargemethod,
                                      value: "alipay",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          a(
                            "v-uni-view",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value:
                                    "fujianyike" === t.third_part_account_type,
                                  expression:
                                    "third_part_account_type === 'fujianyike'",
                                },
                              ],
                              staticClass: "pay-type-container",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    (t.rechargemethod = "onecard");
                                },
                              },
                            },
                            [
                              a(
                                "v-uni-view",
                                { staticClass: "type-container" },
                                [
                                  a(
                                    "v-uni-view",
                                    { staticClass: "title-img-container" },
                                    [
                                      a("v-uni-image", {
                                        staticClass: "title-img",
                                        attrs: {
                                          src: "/static/fujianyike.png",
                                          mode: "aspectFit",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "desc-content-container" },
                                    [
                                      a(
                                        "v-uni-view",
                                        { staticClass: "type-text" },
                                        [t._v("一卡通")]
                                      ),
                                      a("v-uni-view", {
                                        staticClass: "activity-container",
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              a(
                                "v-uni-view",
                                { staticClass: "select-container" },
                                [
                                  a("v-uni-radio", {
                                    staticClass: "round select-radio",
                                    class:
                                      "onecard" == t.rechargemethod
                                        ? "checked"
                                        : "",
                                    attrs: {
                                      color: "#32b1fe",
                                      checked: "onecard" == t.rechargemethod,
                                      value: "onecard",
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
                  "balance" == t.MONEYTYPE
                    ? a(
                        "v-uni-view",
                        { staticClass: "content-container" },
                        [
                          a("v-uni-view", { staticClass: "buytitle" }, [
                            t._v("充值说明"),
                          ]),
                          a(
                            "v-uni-view",
                            {
                              staticClass: "info-detail",
                              staticStyle: {
                                "background-color": "transparent",
                              },
                            },
                            [
                              a(
                                "v-uni-view",
                                {
                                  staticClass: "content-tip-text",
                                  staticStyle: {
                                    "margin-top": "20upx",
                                    color: "#727c8f",
                                  },
                                },
                                [
                                  t._v("1、以上充值面额由："),
                                  a(
                                    "v-uni-text",
                                    { staticStyle: { color: "#fc593b" } },
                                    [t._v(t._s(t.serviceProvider))]
                                  ),
                                  t._v("运营商决定;"),
                                  a("br"),
                                  t._v("2、您充值的款项将直接支付到："),
                                  a(
                                    "v-uni-text",
                                    { staticStyle: { color: "#fc593b" } },
                                    [t._v(t._s(t.serviceProvider))]
                                  ),
                                  t._v("运营商的账户;"),
                                  a("br"),
                                  t._v(
                                    "3、如有疑问，您可直接与客服人员电话沟通"
                                  ),
                                  a(
                                    "v-uni-text",
                                    {
                                      staticStyle: { color: "#fc593b" },
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.callkefu();
                                        },
                                      },
                                    },
                                    [t._v(t._s(t.kefuphone))]
                                  ),
                                  t._v("。"),
                                  a(
                                    "v-uni-view",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: t.activitytext.showflag,
                                          expression: "activitytext.showflag",
                                        },
                                      ],
                                    },
                                    [
                                      t._v(
                                        "4、在法律允许的范围最终解释权归商家所有。"
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
                      )
                    : t._e(),
                  "coupon" == t.MONEYTYPE
                    ? a(
                        "v-uni-view",
                        { staticClass: "content-container" },
                        [
                          a("v-uni-view", { staticClass: "buytitle" }, [
                            t._v("购买须知"),
                          ]),
                          a(
                            "v-uni-view",
                            {
                              staticClass: "recharge-tip",
                              staticStyle: { color: "#727c8f" },
                            },
                            [
                              a(
                                "v-uni-text",
                                { staticStyle: { color: "#fc593b" } },
                                [t._v("1、购买后不可退;")]
                              ),
                              a("br"),
                              a(
                                "v-uni-text",
                                { staticStyle: { color: "#fc593b" } },
                                [
                                  t._v(
                                    "2、购买成功后消费时自动抵扣,面值不足时使用账户余额抵扣;"
                                  ),
                                ]
                              ),
                              a("br"),
                              t._v("3、请在有效期内使用，过期作废;"),
                              a("br"),
                              t._v("4、有疑问请联系客服。"),
                              a("br"),
                              t._v("5、在法律允许的范围最终解释权归商家所有。"),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                ],
                1
              ),
              a(
                "v-uni-view",
                {
                  staticStyle: {
                    padding: "0 30upx",
                    position: "fixed",
                    width: "100%",
                    bottom: "50upx",
                  },
                },
                [
                  a(
                    "v-uni-button",
                    {
                      staticClass: "confirm-btn",
                      attrs: {
                        type: "primary",
                        disabled: t.btnstatusobj.disabled,
                      },
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.rechargeconfirm.apply(void 0, arguments);
                        },
                      },
                    },
                    [t._v(t._s(t.btnstatusobj.text))]
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [];
    },
    "6c96": function (t, e, a) {
      var i = a("24fb"),
        n = a("1de5"),
        o = a("aedd"),
        c = a("4c16"),
        s = a("c57c"),
        r = a("9f9c"),
        l = a("d39a"),
        u = a("0567");
      e = i(!1);
      var d = n(o),
        h = n(c),
        p = n(s),
        v = n(r),
        f = n(l),
        m = n(u);
      e.push([
        t.i,
        '.cashcoupon[data-v-26e7706e]{width:100%;padding:10px}.cashcoupon-wrapper[data-v-26e7706e]{width:100%;display:flex;background:#fff;border-radius:8px}.cashcoupon-content[data-v-26e7706e]{flex:1;padding:%?40?%;border-radius:8px 0 0 8px;background:#fff}.cashcoupon-title[data-v-26e7706e]{font-size:%?35?%;font-weight:700;display:inline-block;word-break:break-all}.cashcoupon-totalmoney[data-v-26e7706e]{font-size:%?40?%;color:#fc593b}.yuan-text[data-v-26e7706e]{font-size:%?20?%!important;color:#000}.cashcoupon-dec[data-v-26e7706e]{display:inline-block;margin:0 %?20?%;font-size:%?20?%;color:#ff8f30;border:1px solid #ff8f30;border-radius:%?10?%;padding:%?0?% %?20?%}.cashcoupon-tip[data-v-26e7706e],\r\n.cashcoupon-outsell-tip[data-v-26e7706e],\r\n.cashcoupon-buyed-tip[data-v-26e7706e],\r\n.cashcoupon-outcount-tip[data-v-26e7706e],\r\n.cashcoupon-outtime-tip[data-v-26e7706e]{position:relative;flex:0 0 100px;text-align:center;color:#fc593b;border-radius:0 8px 8px 0;background:#fff;display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;-webkit-box-orient:vertical;text-align:center}.cashcoupon-tip[data-v-26e7706e]::after,\r\n.cashcoupon-outsell-tip[data-v-26e7706e]::after,\r\n.cashcoupon-buyed-tip[data-v-26e7706e]::after,\r\n.cashcoupon-outcount-tip[data-v-26e7706e]::after,\r\n.cashcoupon-outtime-tip[data-v-26e7706e]::after{content:"";display:block;height:100%;width:100%;background:url(' +
          d +
          ") 100% 100% no-repeat;background-size:%?60?%;position:absolute;z-index:1;top:0;left:0}\r\n\r\n/* 已售罄 */.cashcoupon-outsell-tip[data-v-26e7706e]::after{background:url(" +
          h +
          ") 50% no-repeat!important;background-size:%?120?%!important}\r\n\r\n/* 超过限购数量 */.cashcoupon-buyed-tip[data-v-26e7706e]::after{background:url(" +
          p +
          ") 50% no-repeat!important;background-size:%?120?%!important}\r\n\r\n/* 已用完 */.cashcoupon-outcount-tip[data-v-26e7706e]::after{background:url(" +
          v +
          ") 50% no-repeat!important;background-size:%?120?%!important}\r\n\r\n/* 已过期 */.cashcoupon-outtime-tip[data-v-26e7706e]::after{background:url(" +
          f +
          ') 50% no-repeat!important;background-size:%?120?%!important}.cashcoupon-outsell-tip[data-v-26e7706e]::before,\r\n.cashcoupon-buyed-tip[data-v-26e7706e]::before,\r\n.cashcoupon-outcount-tip[data-v-26e7706e]::before,\r\n.cashcoupon-outtime-tip[data-v-26e7706e]::before{content:"";display:block;height:100%;width:100%;background:url(' +
          m +
          ') 100% 100% no-repeat;background-size:%?60?%;position:absolute;z-index:1;top:0;left:0}.cashcoupon-split-line[data-v-26e7706e]{position:relative;flex:0 0 0;border-left:1px solid #eee;margin:0 5px 0 3px;background:#fff}.cashcoupon-split-line[data-v-26e7706e]:before,\r\n.cashcoupon-split-line[data-v-26e7706e]:after{content:"";position:absolute;width:16px;height:8px;background:#f7f7f7;left:-9px;z-index:1}.cashcoupon-split-line[data-v-26e7706e]:before{border-radius:0 0 8px 8px;top:0}.cashcoupon-split-line[data-v-26e7706e]:after{border-radius:8px 8px 0 0;bottom:0}.cashcoupon-sellmoney[data-v-26e7706e]{font-size:12px;position:relative;top:%?10?%;\r\n\t/* text-decoration: line-through; */color:#9e9e9e}.cashcoupon-time[data-v-26e7706e]{font-size:12px;color:#9e9e9e;position:relative;top:%?20?%}.cashcoupon-pay-line[data-v-26e7706e]{height:33%;margin-top:2px;font-size:12px;color:#696969}.cashcoupon-pay-user[data-v-26e7706e]{height:33%}.cashcoupon-pay-user-btn[data-v-26e7706e]{border-radius:20px;margin-top:5px}.cashcoupon-userlimit[data-v-26e7706e]{position:relative;top:%?20?%;font-size:12px;color:#9e9e9e}.rechargenumber[data-v-26e7706e]{border:1px solid #ddd;margin:%?10?%;height:%?100?%;line-height:%?100?%;background-color:#fff;border-radius:%?10?%;white-space:nowrap;\r\n\t/* 超出的部分隐藏 */overflow:hidden;\r\n\t/*文字用省略号替代超出的部分 */text-overflow:ellipsis;padding:0 %?20?%}\r\n\r\n/* 充值金额选中样式 */.rechargenumberactive[data-v-26e7706e]{border:1px solid #ff001e}\r\n\r\n/* 优惠券过期 */.cashcouponouttime[data-v-26e7706e]{color:#9e9e9e!important}.content-container[data-v-26e7706e]{padding-top:%?30?%;margin-bottom:%?30?%}.buytitle[data-v-26e7706e]{padding-left:%?20?%;font-size:%?32?%;font-weight:700}.info-detail[data-v-26e7706e]{background-color:#fff;margin:%?30?% %?30?% 0 %?30?%;border-radius:5px}.user-info-view[data-v-26e7706e]{padding:%?20?% 0 0 %?20?%;display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center}.info-title[data-v-26e7706e]{margin-left:%?20?%;width:%?250?%}.info-content[data-v-26e7706e]{float:right;margin-right:%?30?%}\r\n\r\n/* 购买须知 */.recharge-tip[data-v-26e7706e]{padding:0 10px 0 10px;line-height:%?50?%}.pay-type-container[data-v-26e7706e]{display:flex;align-items:center;justify-content:space-between\r\n\t/* height: 200upx; */}.type-container[data-v-26e7706e]{display:flex;align-items:center;padding:%?20?%;width:80%}.select-container[data-v-26e7706e]{margin-right:%?60?%}.pay-container[data-v-26e7706e]{display:inline-flex;justify-content:center;align-items:center;\r\n\t/* width: calc(50% - 30upx); */flex-grow:1;background-color:#fff;padding:%?20?%;margin:%?20?%;border:1px solid #fff}.pay-container-active[data-v-26e7706e]{border:1px solid #5dbbf5}.pay-container uni-image[data-v-26e7706e]{width:%?50?%;height:%?40?%}.pay-container uni-text[data-v-26e7706e]{margin-left:%?20?%;font-size:%?25?%}.buycashcoupon-content-container[data-v-26e7706e]{margin-top:%?60?%;display:flex;align-items:center;justify-content:space-between}.buy-confirm-btn[data-v-26e7706e]{width:%?120?%;height:%?55?%;font-size:%?25?%;line-height:%?55?%;margin:0}.select-radio[data-v-26e7706e]{background-color:#32b1fe!important;border-color:#32b1fe!important}uni-radio.checked .uni-radio-input[data-v-26e7706e]{background-color:#32b1fe!important;color:#32b1fe!important;border-color:#32b1fe!important}.type-text[data-v-26e7706e]{display:inline-block}.recommendicon[data-v-26e7706e]{background-color:#32b1fe;color:#fff;padding:%?5?% %?10?%;font-size:%?20?%;border-radius:%?20?%;margin-left:%?10?%;display:inline-block}.title-img[data-v-26e7706e]{\r\n\t/* border-radius: 0px !important; */}.last-info-item[data-v-26e7706e]{margin-bottom:%?40?%;padding-bottom:10px}.activity-item[data-v-26e7706e]{color:#32b1fe;border:1px solid #32b1fe;padding:0 %?5?%;font-size:%?20?%;display:inline-block;margin-right:%?10?%;border-radius:%?5?%}.action-view[data-v-26e7706e]{position:fixed;bottom:%?50?%;display:flex;justify-content:space-between;width:%?630?%;height:%?94?%;background:#fff;border-radius:%?94?%;overflow-y:hidden;background-color:#32b1fe;margin-left:%?60?%}.left_btn[data-v-26e7706e]{flex:1;padding:0 %?30?%}.left_btn_btn[data-v-26e7706e]{color:#fff;font-size:16px;background-color:#32b1fe;border:none}.right_btn[data-v-26e7706e]{width:%?315?%;height:%?94?%;background-color:#f15549}.right_btn_box[data-v-26e7706e]{position:absolute;right:0;top:0;z-index:1}.right_image[data-v-26e7706e]{width:%?315?%;height:%?94?%;z-index:2}.action-button-consume[data-v-26e7706e]{position:relative;height:%?94?%;line-height:%?94?%;margin:0;padding:0;font-size:%?30?%;background-color:#fff!important;border-radius:%?50?%;border:none;-webkit-backface-visibility:hidden;-webkit-transform-style:preserve-3d}.bananniuguanggao[data-v-26e7706e]{display:inline-flex;justify-content:center;align-items:center;float:right;width:%?315?%;height:47px;color:#fff;background-color:#e86be9}',
        "",
      ]),
        (t.exports = e);
    },
    7321: function (t, e, a) {
      "use strict";
      (function (t) {
        a("7a82");
        var i = a("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var n = i(a("0122")),
          o = i(a("fc11"));
        a("99af"),
          a("14d9"),
          a("ac1f"),
          a("5319"),
          a("a9e3"),
          a("d3b7"),
          a("c975"),
          a("e9c4");
        var c = i(a("6972")),
          s = i(a("5cd9")),
          r = a("eb21"),
          l = (a("1faf"), a("1db8")),
          u = {
            components: {},
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                titletext: "充值确认",
                showmodalflag: !1,
                RECHARGE_OBJ: {},
                MONEYTYPE: "",
                cashcoupondisabled: !0,
                rechargemethod: "",
                btnstatusobj: { text: "确认充值", disabled: !1 },
                payswitch: {
                  wechatdisable: !1,
                  alipaydisable: !1,
                  abcdisable: !1,
                },
                activitytext: {
                  showflag: !1,
                  abctext: [],
                  wechattext: [],
                  alipaytext: [],
                  recharge_with_cashcoupon_count: 0,
                  wechat_recharge_with_cashcoupon_count: 0,
                  alipay_recharge_with_cashcoupon_count: 0,
                  abc_recharge_with_cashcoupon_count: 0,
                },
                PayOrderData: {},
                WakeUpExternal: { ConfirmFlag: !1, ModalDisplayFlag: !1 },
                OrderId: "",
                placement1: null,
                placement2: null,
                placement3: null,
                placement4: null,
                btnRenderFailFlag: !0,
                btnRenderSuccessFlag: !1,
                isShowMaShangPop: !1,
              };
            },
            onLoad: function (t) {
              var e = decodeURIComponent(t.obj);
              (this.MONEYTYPE = t.moneytype),
                (this.RECHARGE_OBJ = JSON.parse(e)),
                this.initpaytypeswitch(),
                "coupon" == this.MONEYTYPE &&
                  ((this.titletext = "购买确认"),
                  (this.btnstatusobj.text = "确认购买"),
                  this.parsecashcoupontype(this.RECHARGE_OBJ));
            },
            onShow: function () {
              this.resetbtnstatus(),
                (this.IsNeedDisplayAbcAction || this.IsNeedDisplayAXFAction) &&
                  this.BackFromExternalAction();
            },
            filters: {
              parsezenpin: function (t) {
                var e = "无赠品";
                return (
                  0 != t.gift_goods_id && (e = "赠品:" + t.gift_goods_name), e
                );
              },
            },
            computed: {
              serviceProvider: function () {
                return (
                  this.project.projectswitch.service_provider ||
                  this.project.projectname
                );
              },
              cubarstyle: function () {
                return "height:"
                  .concat(this.CustomBar, "px;padding-top:")
                  .concat(this.StatusBar, "px;");
              },
              contentheightstyle: function () {
                return "height:calc(100% - "
                  .concat(this.CustomBar, "px - ")
                  .concat(
                    uni.upx2px(200),
                    "px);position:fixed;width:100%;overflow-y:scroll;"
                  );
              },
              showbackiconflag: function () {
                return !0;
              },
              kefuphone: function () {
                var t = "";
                return (
                  c.default.isNullOrEmpty(this.project) ||
                    c.default.isNullOrEmpty(this.project.projectswitch) ||
                    c.default.isNullOrEmpty(
                      this.project.projectswitch.customer_service
                    ) ||
                    c.default.isNullOrEmpty(
                      this.project.projectswitch.customer_service[0].phone
                    ) ||
                    (t = this.project.projectswitch.customer_service[0].phone),
                  t
                );
              },
              userBalance: function () {
                return this.$store.getters.userCanUseBalance;
              },
              IsNeedDisplayAbcAction: function () {
                return (
                  "abc_china" == this.rechargemethod &&
                  this.WakeUpExternal.ConfirmFlag &&
                  !this.WakeUpExternal.ModalDisplayFlag
                );
              },
              IsNeedDisplayAXFAction: function () {
                return (
                  this.IsAXF &&
                  this.WakeUpExternal.ConfirmFlag &&
                  !this.WakeUpExternal.ModalDisplayFlag
                );
              },
              IsAXF: function () {
                return (
                  6 == this.project.projectswitch.alipay_merchant ||
                  6 == this.project.projectswitch.wechat_merchant
                );
              },
              third_part_account_type: function () {
                var t = "DEFAULT",
                  e = this.$store.state.project.projectswitch;
                return (
                  c.default.isNullOrEmpty(e) ||
                    c.default.isNullOrEmpty(e.third_part_account_type) ||
                    (t = e.third_part_account_type),
                  t
                );
              },
              isShowAd: function () {
                return this.$store.state.isShowAd;
              },
            },
            watch: {
              rechargemethod: function (t) {
                this.ShowBtnRechargeText(t);
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
              handleAdPlacement: function () {
                (this.placement1 = null),
                  (this.placement2 = null),
                  (this.placement3 = null);
                var t = this.$store.state.adPlacement;
                if (t && !(t.length <= 0))
                  for (var e = 0; e < t.length; e++) {
                    var a = t[e].enum_ad_placement,
                      i = s.default.EnumAdPlacementReverse;
                    a == i["充值确认-页面底部"]
                      ? (this.placement1 = t[e])
                      : a == i["充值确认-弹框"]
                      ? (this.placement2 = t[e])
                      : a == i["充值确认-码上有钱支付按钮"]
                      ? (this.placement3 = t[e])
                      : a == i["充值确认-码上有钱勾选框"] &&
                        (this.placement4 = t[e]);
                  }
              },
              initpaytypeswitch: function () {
                var t = this,
                  e = this.project.projectswitch;
                "fujianyike" === this.third_part_account_type &&
                  (this.rechargemethod = "onecard"),
                  0 == e.alipay_enable
                    ? (this.payswitch.alipaydisable = !1)
                    : ((this.payswitch.alipaydisable = !0),
                      (this.rechargemethod = "alipay")),
                  0 == e.wechatpay_enable
                    ? (this.payswitch.wechatdisable = !1)
                    : ((this.payswitch.wechatdisable = !0),
                      (this.rechargemethod = "wechat")),
                  c.default.isNullOrEmpty(e.abcpay_enable) ||
                  1 != e.abcpay_enable
                    ? (this.payswitch.abcdisable = !1)
                    : ((this.payswitch.abcdisable = !0),
                      (this.rechargemethod = "abc_china")),
                  "balance" == this.MONEYTYPE && this.queryeffectivelist(),
                  this.$nextTick(function () {
                    t.createRechargeConfirmModalAd();
                  });
              },
              controlconfirmstatus: function () {
                return this.cashcoupondisabled
                  ? (this.cashcoupondisabled = !1)
                  : (this.cashcoupondisabled = !0);
              },
              parseendtime: function (t) {
                if (!c.default.isNullOrEmpty(t)) {
                  var e = "有效期至: " + t;
                  return this.checkmaxdate(t) || (e = " 无使用期限"), e;
                }
              },
              parsecashcoupontype: function (t) {
                var e = { iconname: [], userviewmit: "" },
                  a = t.use_limit.split(","),
                  i = c.default.GetCouponUserLimit(a),
                  n = i.userlimittipstr;
                t.total_count <= 0 && e.iconname.push("cashcouponouttime"),
                  (e.userviewmit = n),
                  (this.RECHARGE_OBJ.iconname = e.iconname),
                  (this.RECHARGE_OBJ.userlimit = e.userviewmit);
              },
              checkmaxdate: function (t) {
                var e = new Date("2099/01/01 00:00:00"),
                  a = new Date(t.replace(/\-/g, "/"));
                return a < e;
              },
              popRenderSuccess: function () {
                this.isShowMaShangPop = !0;
              },
              handleClickPop: function () {
                this.$refs.ride_risk_pop.onShowBtn();
              },
              rechargeconfirm: function () {
                switch (this.MONEYTYPE) {
                  case "coupon":
                    this.showmodalflag = !0;
                    break;
                  case "balance":
                    this.rechargebalance();
                    break;
                  default:
                    break;
                }
              },
              confirmbuycashcoupon: function () {
                (this.showmodalflag = !1),
                  (this.cashcoupondisabled = !0),
                  this.startbuycashcoupon();
              },
              rechargebalance: function () {
                var e = this,
                  a = this,
                  i = {
                    user_id: a.userdata.detailinfo.id,
                    recharge_value: a.RECHARGE_OBJ.price,
                  },
                  n = this.project.projectswitch;
                if (
                  "wechat" != this.rechargemethod ||
                  (1 != n.wechat_merchant && 3 != n.wechat_merchant)
                ) {
                  if ("wechat" != this.rechargemethod || 4 != n.wechat_merchant)
                    return "wechat" != this.rechargemethod ||
                      c.default.isApplicationExist("weixin")
                      ? "alipay" != this.rechargemethod ||
                        c.default.isApplicationExist("alipay")
                        ? void ("onecard" != this.rechargemethod
                            ? ((i.isminiprogram = "False"),
                              (i.trade_type = "APP"),
                              (i.recharge_method = this.rechargemethod),
                              (i.use_platform =
                                this.$store.state.SystemInfo.platform),
                              c.default.showloading("加载中"),
                              (this.btnstatusobj.text = "准备支付..."),
                              (this.btnstatusobj.disabled = !0),
                              c.default
                                .sendapppost(
                                  a.project.server_addr +
                                    c.default.API_PATH.createRechargeOrder,
                                  { rechargerecord: i }
                                )
                                .then(function (e) {
                                  t.log(e), uni.hideLoading();
                                  try {
                                    if (
                                      c.default.isNullOrEmpty(e) ||
                                      c.default.isNullOrEmpty(e.order_content)
                                    )
                                      return Promise.reject("订单生成失败");
                                    var i = e.order_content;
                                    (a.OrderId = e.order_id),
                                      a.startpay(e.order_id, i);
                                  } catch (n) {
                                    return (
                                      t.log(n), Promise.reject("订单生成失败")
                                    );
                                  }
                                })
                                .catch(function (t) {
                                  uni.hideLoading(),
                                    a.resetbtnstatus(),
                                    c.default.showalert("提示", t);
                                }))
                            : uni.navigateTo({
                                url:
                                  "/pages/onecardrechargeconfirm/onecardrechargeconfirm?money=" +
                                  this.RECHARGE_OBJ.price +
                                  "&id=" +
                                  a.userdata.detailinfo.id,
                              }))
                        : uni.showToast({
                            icon: "none",
                            title: "未安装支付宝，请安装后操作",
                          })
                      : uni.showToast({
                          icon: "none",
                          title: "未安装微信，请安装后操作",
                        });
                  var o = {
                    phone: this.userdata.detailinfo.phone,
                    project: this.project.projectname,
                    type: "recharge",
                    money: a.RECHARGE_OBJ.price,
                    id: this.userdata.detailinfo.id,
                  };
                  c.default.JumpToWxMiniProgramPay(o, 2, function (t) {
                    e.handleWxMiniProgramPayFinish(t);
                  });
                } else {
                  var s = "pages/apprecharge/apprecharge?phone="
                    .concat(
                      this.userdata.detailinfo.phone,
                      "&moneytype=balance&price="
                    )
                    .concat(Number(a.RECHARGE_OBJ.price), "&userid=")
                    .concat(this.userdata.detailinfo.id);
                  c.default.JumpToWxMiniProgramPay(s, 1);
                }
              },
              startbuycashcoupon: function () {
                var e = this,
                  a = this,
                  i = {
                    user_id: a.userdata.detailinfo.id,
                    cash_coupon_id: a.RECHARGE_OBJ.id,
                  },
                  n = this.project.projectswitch;
                if (
                  "wechat" != this.rechargemethod ||
                  (1 != n.wechat_merchant && 3 != n.wechat_merchant)
                )
                  if (
                    "wechat" != this.rechargemethod ||
                    4 != n.wechat_merchant
                  ) {
                    if (
                      "wechat" == this.rechargemethod &&
                      !c.default.isApplicationExist("weixin")
                    )
                      return uni.showToast({
                        icon: "none",
                        title: "未安装微信，请安装后操作",
                      });
                    if (
                      "alipay" == this.rechargemethod &&
                      !c.default.isApplicationExist("alipay")
                    )
                      return uni.showToast({
                        icon: "none",
                        title: "未安装支付宝，请安装后操作",
                      });
                    if (
                      ((i.isminiprogram = "False"),
                      (i.trade_type = "APP"),
                      (i.pay_type = this.rechargemethod),
                      (i.use_platform = this.$store.state.SystemInfo.platform),
                      c.default.isNullOrEmpty(i.user_id) ||
                        c.default.isNullOrEmpty(i.cash_coupon_id))
                    )
                      return c.default.showalert("提示", "数据错误请重试");
                    c.default.showloading("加载中"),
                      (this.btnstatusobj.text = "准备支付..."),
                      (this.btnstatusobj.disabled = !0),
                      c.default
                        .sendapppost(
                          a.project.server_addr +
                            c.default.API_PATH.buycashcoupon,
                          i
                        )
                        .then(function (e) {
                          uni.hideLoading();
                          try {
                            if (
                              !c.default.isNullOrEmpty(e) &&
                              !c.default.isNullOrEmpty(e.order_content)
                            ) {
                              var i = e.order_content;
                              (a.OrderId = e.order_id),
                                a.startpay(e.order_id, i);
                            }
                          } catch (n) {
                            return t.log(n), Promise.reject("订单生成失败");
                          }
                        })
                        .catch(function (t) {
                          uni.hideLoading(),
                            a.resetbtnstatus(),
                            c.default.showalert("提示", t);
                        });
                  } else {
                    var s = (0, o.default)(
                      {
                        phone: this.userdata.detailinfo.phone,
                        project: this.project.projectname,
                        type: "cashcoupon",
                        money: a.RECHARGE_OBJ.price,
                        id: this.userdata.detailinfo.id,
                        cashcoupon_id: a.RECHARGE_OBJ.id,
                        cashcoupon_name: a.RECHARGE_OBJ.name,
                      },
                      "money",
                      a.RECHARGE_OBJ.price
                    );
                    c.default.JumpToWxMiniProgramPay(s, 2, function (t) {
                      e.handleWxMiniProgramPayFinish(t);
                    });
                  }
                else {
                  var r = "pages/apprecharge/apprecharge?phone="
                    .concat(
                      this.userdata.detailinfo.phone,
                      "&moneytype=coupon&cashcouponid="
                    )
                    .concat(a.RECHARGE_OBJ.id, "&userid=")
                    .concat(this.userdata.detailinfo.id, "&name=")
                    .concat(a.RECHARGE_OBJ.name);
                  c.default.JumpToWxMiniProgramPay(r, 1);
                }
              },
              gotopayend: function (e) {
                t.log("order_id" + e);
                var a = this.RECHARGE_OBJ,
                  i =
                    "../rechargeend/rechargeend?moneytype=" +
                    this.MONEYTYPE +
                    "&rechargevalue=" +
                    a.price +
                    "&orderid=" +
                    e +
                    "&recharge_with_cashcoupon_count=" +
                    this.activitytext.recharge_with_cashcoupon_count;
                uni.redirectTo({ url: i });
              },
              urlInPayWiteList: function (t) {
                for (
                  var e = ["https://qr.alipay.com"], a = !1, i = 0;
                  i < e.length;
                  i++
                )
                  if (t.indexOf(e[i]) > -1) {
                    a = !0;
                    break;
                  }
                return a;
              },
              startpay: function (e, a) {
                var i = this,
                  o = {};
                if (
                  (t.log(JSON.stringify(a)),
                  this.IsAXF && a.indexOf("anxinfu") > -1)
                )
                  this.jumpToAxf(a);
                else {
                  if (this.urlInPayWiteList(a)) {
                    var s = encodeURIComponent(a),
                      r =
                        "/pagesA/webview/webview?title=支付宝支付&act_type=alipay&url=" +
                        s +
                        "&orderid=" +
                        e;
                    return uni.navigateTo({ url: r });
                  }
                  if ("wechat" == this.rechargemethod) o.provider = "wxpay";
                  else if ("alipay" == this.rechargemethod)
                    o.provider = "alipay";
                  else if ("abc_china" == this.rechargemethod)
                    return c.default.isNullOrEmpty(a)
                      ? (i.resetbtnstatus(),
                        c.default.showalert("提示", "订单生成失败请联系管理员"))
                      : (c.default.NavigateToABCPayPage(a),
                        (i.WakeUpExternal.ConfirmFlag = !0),
                        void i.resetbtnstatus());
                  if (((o.orderInfo = a), c.default.isNullOrEmpty(o.orderInfo)))
                    return (
                      i.resetbtnstatus(),
                      c.default.showalert("提示", "订单生成失败请联系管理员")
                    );
                  (i.PayOrderData = o),
                    (o.success = function (t) {
                      return t && "6001" == t.resultCode
                        ? o.fail(t)
                        : (i.resetbtnstatus(), i.gotopayend(e));
                    }),
                    (o.fail = function (e) {
                      t.log(e), i.resetbtnstatus();
                      var a = e;
                      return (
                        "object" === (0, n.default)(e) &&
                          e.errMsg.indexOf("cancel"),
                        "object" === (0, n.default)(e) && e.resultCode,
                        c.default.isNullOrEmpty(a) && (a = "支付失败"),
                        c.default.logger.warn(
                          "rechargeconfirm.vue",
                          ""
                            .concat(i.userdata.detailinfo.phone, ",充值失败:")
                            .concat(JSON.stringify(e)),
                          "requestPayment_error",
                          JSON.stringify(i.PayOrderData)
                        ),
                        i.resetbtnstatus(),
                        c.default.showalert("提示", a)
                      );
                    }),
                    zl.payment.pay(
                      { paymentType: this.rechargemethod, orderInfo: a },
                      function (e) {
                        t.log("----------data----------" + e),
                          0 == e.code ? o.success(e) : o.fail(e.msg);
                      }
                    );
                }
              },
              jumpToAxf: function (e) {
                (0, r.emitPageOnhideEvent)({ scene: "进入外部页面" }),
                  (this.WakeUpExternal.ConfirmFlag = !0),
                  this.resetbtnstatus(),
                  zl.system.launchWeb(
                    { way: "content", content: e },
                    function (e) {
                      t.log("----------data----------" + e),
                        0 == e.code
                          ? postdata.success(e)
                          : postdata.fail(e.msg);
                    }
                  );
              },
              resetbtnstatus: function () {
                this.ShowBtnRechargeText(this.rechargemethod),
                  (this.btnstatusobj.disabled = !1);
              },
              callkefu: function () {
                c.default.makePhoneCall(this.kefuphone);
              },
              queryeffectivelist: function () {
                var e = this,
                  a = [];
                this.payswitch.alipaydisable && a.push(2),
                  this.payswitch.wechatdisable && a.push(3),
                  this.payswitch.abcdisable && a.push(6),
                  c.default
                    .sendapppost(
                      e.project.server_addr +
                        c.default.API_PATH.queryeffectivelist,
                      { recharge_types: a.join(",") }
                    )
                    .then(function (t) {
                      t.rows;
                      for (var a = [], i = 0; i < t.rows.length; i++) {
                        var n = t.rows[i];
                        n.minimum_recharge_money <= e.RECHARGE_OBJ.price &&
                          n.maximum_recharge_money >= e.RECHARGE_OBJ.price &&
                          a.push(n);
                      }
                      a = c.default.jsonSort(a, "minimum_recharge_money", !0);
                      a[0];
                      for (var o = 0; o < a.length; o++) {
                        var s = a[o];
                        if (s) {
                          var r = [];
                          switch (
                            (s.limit_count > 0 &&
                              r.push("可享" + s.limit_count + "次赠送"),
                            r.push(
                              "赠送" +
                                s.cash_coupon_count +
                                "张" +
                                s.cash_coupon_money +
                                "元优惠券"
                            ),
                            s.recharge_type)
                          ) {
                            case 2:
                              c.default.isNullOrEmpty(
                                e.activitytext.alipaytext
                              ) &&
                                ((e.activitytext.alipaytext = r),
                                (e.activitytext.alipay_recharge_with_cashcoupon_count =
                                  s.cash_coupon_count));
                              break;
                            case 3:
                              c.default.isNullOrEmpty(
                                e.activitytext.wechattext
                              ) &&
                                ((e.activitytext.wechattext = r),
                                (e.activitytext.wechat_recharge_with_cashcoupon_count =
                                  s.cash_coupon_count));
                              break;
                            case 6:
                              c.default.isNullOrEmpty(e.activitytext.abctext) &&
                                ((e.activitytext.abctext = r),
                                (e.activitytext.abc_recharge_with_cashcoupon_count =
                                  s.cash_coupon_count));
                              break;
                            default:
                              break;
                          }
                          e.activitytext.showflag = !0;
                        }
                      }
                      e.InitRechargeGiveCouponInfo(e.rechargemethod);
                    })
                    .catch(function (e) {
                      t.log(e);
                    });
              },
              BackFromExternalAction: function () {
                var t = this;
                (this.WakeUpExternal.ModalDisplayFlag = !0),
                  c.default.showalert(
                    "支付提示",
                    "1.如果您已支付成功，请点击“已完成支付”按钮。\r\n 2.如果您还未完成支付，请点击取消并重新发起支付付款。",
                    function () {
                      uni.navigateBack();
                    },
                    function () {
                      (t.WakeUpExternal.ModalDisplayFlag = !1),
                        setTimeout(function () {
                          t.gotopayend(t.OrderId);
                        }, 500);
                    },
                    !0,
                    "取消",
                    "已完成支付"
                  );
              },
              ShowBtnRechargeText: function (t) {
                var e = s.default.EnumAppRechargeType[t];
                c.default.isNullOrEmpty(e) && (e = ""),
                  (this.btnstatusobj.text =
                    e + "支付" + this.RECHARGE_OBJ.price + "元"),
                  this.InitRechargeGiveCouponInfo(t);
              },
              InitRechargeGiveCouponInfo: function (t) {
                switch (t) {
                  case "abc_china":
                    this.activitytext.recharge_with_cashcoupon_count =
                      this.activitytext.abc_recharge_with_cashcoupon_count;
                    break;
                  case "wechat":
                    this.activitytext.recharge_with_cashcoupon_count =
                      this.activitytext.wechat_recharge_with_cashcoupon_count;
                    break;
                  case "alipay":
                    this.activitytext.recharge_with_cashcoupon_count =
                      this.activitytext.alipay_recharge_with_cashcoupon_count;
                    break;
                  default:
                    break;
                }
              },
              btnRenderFail: function () {
                this.btnRenderFailFlag = !1;
              },
              btnRenderSuccess: function () {
                this.btnRenderSuccessFlag = !0;
              },
              onBeforeJump: function () {
                var t = this;
                setTimeout(function () {
                  t.btnRenderFailFlag = !1;
                }, 2e3);
              },
              onClosePop: function () {
                (this.btnRenderFailFlag = !1), (this.isShowMaShangPop = !1);
              },
              createRechargeConfirmModalAd: function () {
                null != this.placement2 &&
                  (0, l.createBeiZiInterstitialAd)(this.placement2);
              },
              handleWxMiniProgramPayFinish: function (e) {
                if (e)
                  try {
                    var a = JSON.parse(e);
                    "status" in a &&
                      "payed" == a.status &&
                      this.gotopayend(a.order_id);
                  } catch (i) {
                    t.log("-------------" + i);
                  }
              },
            },
          };
        e.default = u;
      }).call(this, a("5a52")["default"]);
    },
    "918f": function (t, e, a) {
      "use strict";
      var i = a("018f"),
        n = a.n(i);
      n.a;
    },
    da7c: function (t, e, a) {
      "use strict";
      a.r(e);
      var i = a("7321"),
        n = a.n(i);
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(o);
      e["default"] = n.a;
    },
  },
]);
