(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-cashcoupondetail-cashcoupondetail"],
  {
    "17f9": function (t, e, o) {
      "use strict";
      o.r(e);
      var i = o("9adb"),
        n = o("3c51");
      for (var a in n)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return n[t];
            });
          })(a);
      o("b56c");
      var r = o("f0c5"),
        s = Object(r["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "32aa0478",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "2ca9": function (t, e, o) {
      "use strict";
      o("7a82");
      var i = o("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = i(o("0122"));
      o("14d9"), o("d9e2"), o("d401"), o("a9e3"), o("cb29"), o("e9c4");
      var a = {};
      (function () {
        function t(t) {
          var e, o, i;
          return t < 128
            ? [t]
            : t < 2048
            ? ((e = 192 + (t >> 6)), (o = 128 + (63 & t)), [e, o])
            : ((e = 224 + (t >> 12)),
              (o = 128 + ((t >> 6) & 63)),
              (i = 128 + (63 & t)),
              [e, o, i]);
        }
        function e(e, o) {
          (this.typeNumber = -1),
            (this.errorCorrectLevel = o),
            (this.modules = null),
            (this.moduleCount = 0),
            (this.dataCache = null),
            (this.rsBlocks = null),
            (this.totalDataCount = -1),
            (this.data = e),
            (this.utf8bytes = (function (e) {
              for (var o = [], i = 0; i < e.length; i++)
                for (
                  var n = e.charCodeAt(i), a = t(n), r = 0;
                  r < a.length;
                  r++
                )
                  o.push(a[r]);
              return o;
            })(e)),
            this.make();
        }
        (e.prototype = {
          constructor: e,
          getModuleCount: function () {
            return this.moduleCount;
          },
          make: function () {
            this.getRightType(),
              (this.dataCache = this.createData()),
              this.createQrcode();
          },
          makeImpl: function (t) {
            (this.moduleCount = 4 * this.typeNumber + 17),
              (this.modules = new Array(this.moduleCount));
            for (var e = 0; e < this.moduleCount; e++)
              this.modules[e] = new Array(this.moduleCount);
            this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(!0, t),
              this.typeNumber >= 7 && this.setupTypeNumber(!0),
              this.mapData(this.dataCache, t);
          },
          setupPositionProbePattern: function (t, e) {
            for (var o = -1; o <= 7; o++)
              if (!(t + o <= -1 || this.moduleCount <= t + o))
                for (var i = -1; i <= 7; i++)
                  e + i <= -1 ||
                    this.moduleCount <= e + i ||
                    (this.modules[t + o][e + i] =
                      (0 <= o && o <= 6 && (0 == i || 6 == i)) ||
                      (0 <= i && i <= 6 && (0 == o || 6 == o)) ||
                      (2 <= o && o <= 4 && 2 <= i && i <= 4));
          },
          createQrcode: function () {
            for (var t = 0, e = 0, o = null, i = 0; i < 8; i++) {
              this.makeImpl(i);
              var n = r.getLostPoint(this);
              (0 == i || t > n) && ((t = n), (e = i), (o = this.modules));
            }
            (this.modules = o),
              this.setupTypeInfo(!1, e),
              this.typeNumber >= 7 && this.setupTypeNumber(!1);
          },
          setupTimingPattern: function () {
            for (var t = 8; t < this.moduleCount - 8; t++)
              null == this.modules[t][6] &&
                ((this.modules[t][6] = t % 2 == 0),
                null == this.modules[6][t] &&
                  (this.modules[6][t] = t % 2 == 0));
          },
          setupPositionAdjustPattern: function () {
            for (
              var t = r.getPatternPosition(this.typeNumber), e = 0;
              e < t.length;
              e++
            )
              for (var o = 0; o < t.length; o++) {
                var i = t[e],
                  n = t[o];
                if (null == this.modules[i][n])
                  for (var a = -2; a <= 2; a++)
                    for (var s = -2; s <= 2; s++)
                      this.modules[i + a][n + s] =
                        -2 == a ||
                        2 == a ||
                        -2 == s ||
                        2 == s ||
                        (0 == a && 0 == s);
              }
          },
          setupTypeNumber: function (t) {
            for (
              var e = r.getBCHTypeNumber(this.typeNumber), o = 0;
              o < 18;
              o++
            ) {
              var i = !t && 1 == ((e >> o) & 1);
              (this.modules[Math.floor(o / 3)][
                (o % 3) + this.moduleCount - 8 - 3
              ] = i),
                (this.modules[(o % 3) + this.moduleCount - 8 - 3][
                  Math.floor(o / 3)
                ] = i);
            }
          },
          setupTypeInfo: function (t, e) {
            for (
              var i = (o[this.errorCorrectLevel] << 3) | e,
                n = r.getBCHTypeInfo(i),
                a = 0;
              a < 15;
              a++
            ) {
              var s = !t && 1 == ((n >> a) & 1);
              a < 6
                ? (this.modules[a][8] = s)
                : a < 8
                ? (this.modules[a + 1][8] = s)
                : (this.modules[this.moduleCount - 15 + a][8] = s);
              s = !t && 1 == ((n >> a) & 1);
              a < 8
                ? (this.modules[8][this.moduleCount - a - 1] = s)
                : a < 9
                ? (this.modules[8][15 - a - 1 + 1] = s)
                : (this.modules[8][15 - a - 1] = s);
            }
            this.modules[this.moduleCount - 8][8] = !t;
          },
          createData: function () {
            var t = new d(),
              o = this.typeNumber > 9 ? 16 : 8;
            t.put(4, 4), t.put(this.utf8bytes.length, o);
            for (var i = 0, n = this.utf8bytes.length; i < n; i++)
              t.put(this.utf8bytes[i], 8);
            t.length + 4 <= 8 * this.totalDataCount && t.put(0, 4);
            while (t.length % 8 != 0) t.putBit(!1);
            while (1) {
              if (t.length >= 8 * this.totalDataCount) break;
              if ((t.put(e.PAD0, 8), t.length >= 8 * this.totalDataCount))
                break;
              t.put(e.PAD1, 8);
            }
            return this.createBytes(t);
          },
          createBytes: function (t) {
            for (
              var e = 0,
                o = 0,
                i = 0,
                n = this.rsBlock.length / 3,
                a = new Array(),
                s = 0;
              s < n;
              s++
            )
              for (
                var u = this.rsBlock[3 * s + 0],
                  l = this.rsBlock[3 * s + 1],
                  d = this.rsBlock[3 * s + 2],
                  h = 0;
                h < u;
                h++
              )
                a.push([d, l]);
            for (
              var p = new Array(a.length), f = new Array(a.length), g = 0;
              g < a.length;
              g++
            ) {
              var v = a[g][0],
                m = a[g][1] - v;
              (o = Math.max(o, v)), (i = Math.max(i, m)), (p[g] = new Array(v));
              for (s = 0; s < p[g].length; s++) p[g][s] = 255 & t.buffer[s + e];
              e += v;
              var b = r.getErrorCorrectPolynomial(m),
                w = new c(p[g], b.getLength() - 1),
                x = w.mod(b);
              f[g] = new Array(b.getLength() - 1);
              for (s = 0; s < f[g].length; s++) {
                var A = s + x.getLength() - f[g].length;
                f[g][s] = A >= 0 ? x.get(A) : 0;
              }
            }
            var y = new Array(this.totalDataCount),
              C = 0;
            for (s = 0; s < o; s++)
              for (g = 0; g < a.length; g++)
                s < p[g].length && (y[C++] = p[g][s]);
            for (s = 0; s < i; s++)
              for (g = 0; g < a.length; g++)
                s < f[g].length && (y[C++] = f[g][s]);
            return y;
          },
          mapData: function (t, e) {
            for (
              var o = -1,
                i = this.moduleCount - 1,
                n = 7,
                a = 0,
                s = this.moduleCount - 1;
              s > 0;
              s -= 2
            ) {
              6 == s && s--;
              while (1) {
                for (var u = 0; u < 2; u++)
                  if (null == this.modules[i][s - u]) {
                    var c = !1;
                    a < t.length && (c = 1 == ((t[a] >>> n) & 1));
                    var l = r.getMask(e, i, s - u);
                    l && (c = !c),
                      (this.modules[i][s - u] = c),
                      n--,
                      -1 == n && (a++, (n = 7));
                  }
                if (((i += o), i < 0 || this.moduleCount <= i)) {
                  (i -= o), (o = -o);
                  break;
                }
              }
            }
          },
        }),
          (e.PAD0 = 236),
          (e.PAD1 = 17);
        for (
          var o = [1, 0, 3, 2],
            i = {
              PATTERN000: 0,
              PATTERN001: 1,
              PATTERN010: 2,
              PATTERN011: 3,
              PATTERN100: 4,
              PATTERN101: 5,
              PATTERN110: 6,
              PATTERN111: 7,
            },
            r = {
              PATTERN_POSITION_TABLE: [
                [],
                [6, 18],
                [6, 22],
                [6, 26],
                [6, 30],
                [6, 34],
                [6, 22, 38],
                [6, 24, 42],
                [6, 26, 46],
                [6, 28, 50],
                [6, 30, 54],
                [6, 32, 58],
                [6, 34, 62],
                [6, 26, 46, 66],
                [6, 26, 48, 70],
                [6, 26, 50, 74],
                [6, 30, 54, 78],
                [6, 30, 56, 82],
                [6, 30, 58, 86],
                [6, 34, 62, 90],
                [6, 28, 50, 72, 94],
                [6, 26, 50, 74, 98],
                [6, 30, 54, 78, 102],
                [6, 28, 54, 80, 106],
                [6, 32, 58, 84, 110],
                [6, 30, 58, 86, 114],
                [6, 34, 62, 90, 118],
                [6, 26, 50, 74, 98, 122],
                [6, 30, 54, 78, 102, 126],
                [6, 26, 52, 78, 104, 130],
                [6, 30, 56, 82, 108, 134],
                [6, 34, 60, 86, 112, 138],
                [6, 30, 58, 86, 114, 142],
                [6, 34, 62, 90, 118, 146],
                [6, 30, 54, 78, 102, 126, 150],
                [6, 24, 50, 76, 102, 128, 154],
                [6, 28, 54, 80, 106, 132, 158],
                [6, 32, 58, 84, 110, 136, 162],
                [6, 26, 54, 82, 110, 138, 166],
                [6, 30, 58, 86, 114, 142, 170],
              ],
              G15: 1335,
              G18: 7973,
              G15_MASK: 21522,
              getBCHTypeInfo: function (t) {
                var e = t << 10;
                while (r.getBCHDigit(e) - r.getBCHDigit(r.G15) >= 0)
                  e ^= r.G15 << (r.getBCHDigit(e) - r.getBCHDigit(r.G15));
                return ((t << 10) | e) ^ r.G15_MASK;
              },
              getBCHTypeNumber: function (t) {
                var e = t << 12;
                while (r.getBCHDigit(e) - r.getBCHDigit(r.G18) >= 0)
                  e ^= r.G18 << (r.getBCHDigit(e) - r.getBCHDigit(r.G18));
                return (t << 12) | e;
              },
              getBCHDigit: function (t) {
                var e = 0;
                while (0 != t) e++, (t >>>= 1);
                return e;
              },
              getPatternPosition: function (t) {
                return r.PATTERN_POSITION_TABLE[t - 1];
              },
              getMask: function (t, e, o) {
                switch (t) {
                  case i.PATTERN000:
                    return (e + o) % 2 == 0;
                  case i.PATTERN001:
                    return e % 2 == 0;
                  case i.PATTERN010:
                    return o % 3 == 0;
                  case i.PATTERN011:
                    return (e + o) % 3 == 0;
                  case i.PATTERN100:
                    return (Math.floor(e / 2) + Math.floor(o / 3)) % 2 == 0;
                  case i.PATTERN101:
                    return ((e * o) % 2) + ((e * o) % 3) == 0;
                  case i.PATTERN110:
                    return (((e * o) % 2) + ((e * o) % 3)) % 2 == 0;
                  case i.PATTERN111:
                    return (((e * o) % 3) + ((e + o) % 2)) % 2 == 0;
                  default:
                    throw new Error("bad maskPattern:" + t);
                }
              },
              getErrorCorrectPolynomial: function (t) {
                for (var e = new c([1], 0), o = 0; o < t; o++)
                  e = e.multiply(new c([1, s.gexp(o)], 0));
                return e;
              },
              getLostPoint: function (t) {
                for (
                  var e = t.getModuleCount(), o = 0, i = 0, n = 0;
                  n < e;
                  n++
                )
                  for (var a = 0, r = t.modules[n][0], s = 0; s < e; s++) {
                    var u = t.modules[n][s];
                    if (
                      (s < e - 6 &&
                        u &&
                        !t.modules[n][s + 1] &&
                        t.modules[n][s + 2] &&
                        t.modules[n][s + 3] &&
                        t.modules[n][s + 4] &&
                        !t.modules[n][s + 5] &&
                        t.modules[n][s + 6] &&
                        (s < e - 10
                          ? t.modules[n][s + 7] &&
                            t.modules[n][s + 8] &&
                            t.modules[n][s + 9] &&
                            t.modules[n][s + 10] &&
                            (o += 40)
                          : s > 3 &&
                            t.modules[n][s - 1] &&
                            t.modules[n][s - 2] &&
                            t.modules[n][s - 3] &&
                            t.modules[n][s - 4] &&
                            (o += 40)),
                      n < e - 1 && s < e - 1)
                    ) {
                      var c = 0;
                      u && c++,
                        t.modules[n + 1][s] && c++,
                        t.modules[n][s + 1] && c++,
                        t.modules[n + 1][s + 1] && c++,
                        (0 != c && 4 != c) || (o += 3);
                    }
                    r ^ u
                      ? a++
                      : ((r = u), a >= 5 && (o += 3 + a - 5), (a = 1)),
                      u && i++;
                  }
                for (s = 0; s < e; s++)
                  for (a = 0, r = t.modules[0][s], n = 0; n < e; n++) {
                    u = t.modules[n][s];
                    n < e - 6 &&
                      u &&
                      !t.modules[n + 1][s] &&
                      t.modules[n + 2][s] &&
                      t.modules[n + 3][s] &&
                      t.modules[n + 4][s] &&
                      !t.modules[n + 5][s] &&
                      t.modules[n + 6][s] &&
                      (n < e - 10
                        ? t.modules[n + 7][s] &&
                          t.modules[n + 8][s] &&
                          t.modules[n + 9][s] &&
                          t.modules[n + 10][s] &&
                          (o += 40)
                        : n > 3 &&
                          t.modules[n - 1][s] &&
                          t.modules[n - 2][s] &&
                          t.modules[n - 3][s] &&
                          t.modules[n - 4][s] &&
                          (o += 40)),
                      r ^ u
                        ? a++
                        : ((r = u), a >= 5 && (o += 3 + a - 5), (a = 1));
                  }
                var l = Math.abs((100 * i) / e / e - 50) / 5;
                return (o += 10 * l), o;
              },
            },
            s = {
              glog: function (t) {
                if (t < 1) throw new Error("glog(" + t + ")");
                return s.LOG_TABLE[t];
              },
              gexp: function (t) {
                while (t < 0) t += 255;
                while (t >= 256) t -= 255;
                return s.EXP_TABLE[t];
              },
              EXP_TABLE: new Array(256),
              LOG_TABLE: new Array(256),
            },
            u = 0;
          u < 8;
          u++
        )
          s.EXP_TABLE[u] = 1 << u;
        for (u = 8; u < 256; u++)
          s.EXP_TABLE[u] =
            s.EXP_TABLE[u - 4] ^
            s.EXP_TABLE[u - 5] ^
            s.EXP_TABLE[u - 6] ^
            s.EXP_TABLE[u - 8];
        for (u = 0; u < 255; u++) s.LOG_TABLE[s.EXP_TABLE[u]] = u;
        function c(t, e) {
          if (void 0 == t.length) throw new Error(t.length + "/" + e);
          var o = 0;
          while (o < t.length && 0 == t[o]) o++;
          this.num = new Array(t.length - o + e);
          for (var i = 0; i < t.length - o; i++) this.num[i] = t[i + o];
        }
        c.prototype = {
          get: function (t) {
            return this.num[t];
          },
          getLength: function () {
            return this.num.length;
          },
          multiply: function (t) {
            for (
              var e = new Array(this.getLength() + t.getLength() - 1), o = 0;
              o < this.getLength();
              o++
            )
              for (var i = 0; i < t.getLength(); i++)
                e[o + i] ^= s.gexp(s.glog(this.get(o)) + s.glog(t.get(i)));
            return new c(e, 0);
          },
          mod: function (t) {
            var e = this.getLength(),
              o = t.getLength();
            if (e - o < 0) return this;
            for (var i = new Array(e), n = 0; n < e; n++) i[n] = this.get(n);
            while (i.length >= o) {
              var a = s.glog(i[0]) - s.glog(t.get(0));
              for (n = 0; n < t.getLength(); n++)
                i[n] ^= s.gexp(s.glog(t.get(n)) + a);
              while (0 == i[0]) i.shift();
            }
            return new c(i, 0);
          },
        };
        var l = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16],
        ];
        function d() {
          (this.buffer = new Array()), (this.length = 0);
        }
        (e.prototype.getRightType = function () {
          for (var t = 1; t < 41; t++) {
            var e = l[4 * (t - 1) + this.errorCorrectLevel];
            if (void 0 == e)
              throw new Error(
                "bad rs block @ typeNumber:" +
                  t +
                  "/errorCorrectLevel:" +
                  this.errorCorrectLevel
              );
            for (var o = e.length / 3, i = 0, n = 0; n < o; n++) {
              var a = e[3 * n + 0],
                r = e[3 * n + 2];
              i += r * a;
            }
            var s = t > 9 ? 2 : 1;
            if (this.utf8bytes.length + s < i || 40 == t) {
              (this.typeNumber = t),
                (this.rsBlock = e),
                (this.totalDataCount = i);
              break;
            }
          }
        }),
          (d.prototype = {
            get: function (t) {
              var e = Math.floor(t / 8);
              return (this.buffer[e] >>> (7 - (t % 8))) & 1;
            },
            put: function (t, e) {
              for (var o = 0; o < e; o++) this.putBit((t >>> (e - o - 1)) & 1);
            },
            putBit: function (t) {
              var e = Math.floor(this.length / 8);
              this.buffer.length <= e && this.buffer.push(0),
                t && (this.buffer[e] |= 128 >>> this.length % 8),
                this.length++;
            },
          });
        var h = [];
        (a = function (t) {
          if (
            ((this.options = {
              text: "",
              size: 256,
              correctLevel: 3,
              background: "#ffffff",
              foreground: "#000000",
              pdground: "#000000",
              image: "",
              imageSize: 30,
              canvasId: "_myQrCodeCanvas",
              context: t.context,
              usingComponents: t.usingComponents,
              showLoading: t.showLoading,
              loadingText: t.loadingText,
            }),
            "string" === typeof t && (t = { text: t }),
            t)
          )
            for (var o in t) this.options[o] = t[o];
          for (var i = null, a = ((o = 0), h.length); o < a; o++)
            if (
              h[o].text == this.options.text &&
              h[o].text.correctLevel == this.options.correctLevel
            ) {
              i = h[o].obj;
              break;
            }
          o == a &&
            ((i = new e(this.options.text, this.options.correctLevel)),
            h.push({
              text: this.options.text,
              correctLevel: this.options.correctLevel,
              obj: i,
            }));
          var r = function (t) {
            var e = t.options;
            return e.pdground &&
              ((t.row > 1 && t.row < 5 && t.col > 1 && t.col < 5) ||
                (t.row > t.count - 6 &&
                  t.row < t.count - 2 &&
                  t.col > 1 &&
                  t.col < 5) ||
                (t.row > 1 &&
                  t.row < 5 &&
                  t.col > t.count - 6 &&
                  t.col < t.count - 2))
              ? e.pdground
              : e.foreground;
          };
          (function (t) {
            t.showLoading &&
              uni.showLoading({ title: t.loadingText, mask: !0 });
            for (
              var e = uni.createCanvasContext(t.canvasId, t.context),
                o = i.getModuleCount(),
                n = t.size,
                a = t.imageSize,
                u = (n / o).toPrecision(4),
                c = (n / o).toPrecision(4),
                l = 0;
              l < o;
              l++
            )
              for (var d = 0; d < o; d++) {
                var h = Math.ceil((d + 1) * u) - Math.floor(d * u),
                  p = Math.ceil((l + 1) * u) - Math.floor(l * u),
                  f = r({ row: l, col: d, count: o, options: t });
                e.setFillStyle(i.modules[l][d] ? f : t.background),
                  e.fillRect(Math.round(d * u), Math.round(l * c), h, p);
              }
            if (t.image) {
              var g = Number(((n - a) / 2).toFixed(2)),
                v = Number(((n - a) / 2).toFixed(2));
              (function (e, o, i, n, a, r, s, u, c) {
                e.setLineWidth(s),
                  e.setFillStyle(t.background),
                  e.setStrokeStyle(t.background),
                  e.beginPath(),
                  e.moveTo(o + r, i),
                  e.arcTo(o + n, i, o + n, i + r, r),
                  e.arcTo(o + n, i + a, o + n - r, i + a, r),
                  e.arcTo(o, i + a, o, i + a - r, r),
                  e.arcTo(o, i, o + r, i, r),
                  e.closePath(),
                  u && e.fill(),
                  c && e.stroke();
              })(e, g, v, a, a, 2, 6, !0, !0),
                e.drawImage(t.image, g, v, a, a);
            }
            setTimeout(
              function () {
                e.draw(!0, function () {
                  setTimeout(function () {
                    uni.canvasToTempFilePath(
                      {
                        width: t.width,
                        height: t.height,
                        destWidth: t.width,
                        destHeight: t.height,
                        canvasId: t.canvasId,
                        quality: Number(1),
                        success: function (e) {
                          t.cbResult &&
                            (s(e.tempFilePath)
                              ? s(e.apFilePath)
                                ? t.cbResult(e.tempFilePath)
                                : t.cbResult(e.apFilePath)
                              : t.cbResult(e.tempFilePath));
                        },
                        fail: function (e) {
                          t.cbResult && t.cbResult(e);
                        },
                        complete: function () {
                          uni.hideLoading();
                        },
                      },
                      t.context
                    );
                  }, t.text.length + 100);
                });
              },
              t.usingComponents ? 0 : 150
            );
          })(this.options);
          var s = function (t) {
            var e = (0, n.default)(t),
              o = !1;
            return (
              ("number" == e && "" == String(t)) || "undefined" == e
                ? (o = !0)
                : "object" == e
                ? ("{}" != JSON.stringify(t) &&
                    "[]" != JSON.stringify(t) &&
                    null != t) ||
                  (o = !0)
                : "string" == e
                ? ("" != t &&
                    "undefined" != t &&
                    "null" != t &&
                    "{}" != t &&
                    "[]" != t) ||
                  (o = !0)
                : "function" == e && (o = !1),
              o
            );
          };
        }),
          (a.prototype.clear = function (t) {
            var e = uni.createCanvasContext(
              this.options.canvasId,
              this.options.context
            );
            e.clearRect(0, 0, this.options.size, this.options.size),
              e.draw(!1, function () {
                t && t();
              });
          });
      })();
      var r = a;
      e.default = r;
    },
    "3c51": function (t, e, o) {
      "use strict";
      o.r(e);
      var i = o("cb33"),
        n = o.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = n.a;
    },
    4242: function (t, e, o) {
      "use strict";
      o.r(e);
      var i = o("9eda"),
        n = o("ec99");
      for (var a in n)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return n[t];
            });
          })(a);
      o("9d41");
      var r = o("f0c5"),
        s = Object(r["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "708996ae",
          null,
          !1,
          i["a"],
          void 0
        );
      e["default"] = s.exports;
    },
    "649b": function (t, e, o) {
      var i = o("24fb");
      (e = i(!1)),
        e.push([
          t.i,
          "._qrCode[data-v-32aa0478]{position:relative}._qrCodeCanvas[data-v-32aa0478]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",
          "",
        ]),
        (t.exports = e);
    },
    "6e25": function (t, e, o) {
      var i = o("649b");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = o("4f06").default;
      n("2bdab5c0", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "732c": function (t, e, o) {
      var i = o("cb5d");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = o("4f06").default;
      n("2009e87d", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    83308: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    "9adb": function (t, e, o) {
      "use strict";
      o.d(e, "b", function () {
        return i;
      }),
        o.d(e, "c", function () {
          return n;
        }),
        o.d(e, "a", function () {});
      var i = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            "v-uni-view",
            { staticClass: "_qrCode" },
            [
              e("v-uni-canvas", {
                staticClass: "_qrCodeCanvas",
                style: {
                  width: this.cpSize + "px",
                  height: this.cpSize + "px",
                },
                attrs: {
                  id: "_myQrCodeCanvas",
                  "canvas-id": "_myQrCodeCanvas",
                },
              }),
              e("v-uni-image", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: this.show,
                    expression: "show",
                  },
                ],
                style: {
                  width: this.cpSize + "px",
                  height: this.cpSize + "px",
                },
                attrs: { src: this.result },
              }),
            ],
            1
          );
        },
        n = [];
    },
    "9d41": function (t, e, o) {
      "use strict";
      var i = o("732c"),
        n = o.n(i);
      n.a;
    },
    "9eda": function (t, e, o) {
      "use strict";
      o.d(e, "b", function () {
        return n;
      }),
        o.d(e, "c", function () {
          return a;
        }),
        o.d(e, "a", function () {
          return i;
        });
      var i = { tkiQrcode: o("17f9").default },
        n = function () {
          var t = this,
            e = t.$createElement,
            o = t._self._c || e;
          return o(
            "v-uni-view",
            { staticStyle: { height: "100%", "background-color": "#f7f7f7" } },
            [
              o(
                "cu-custom",
                { attrs: { bgColor: "titleview", isBack: !0 } },
                [
                  o(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("优惠券详情")]
                  ),
                ],
                2
              ),
              o(
                "v-uni-view",
                { style: t.containerstyle },
                [
                  null != t.cashcouponobj
                    ? o(
                        "v-uni-view",
                        { staticStyle: { height: "100%", width: "100%" } },
                        [
                          o(
                            "v-uni-view",
                            { staticClass: "cashcoupon" },
                            [
                              o(
                                "v-uni-view",
                                {
                                  staticClass: "cashcoupon-wrapper",
                                  staticStyle: {
                                    "border-radius": "8px 8px 0 0",
                                  },
                                },
                                [
                                  o(
                                    "v-uni-view",
                                    { staticClass: "cashcoupon-content" },
                                    [
                                      o(
                                        "v-uni-view",
                                        { staticClass: "cashcoupon-title" },
                                        [
                                          t._v(
                                            t._s(
                                              t.cashcouponobj.cash_coupon_name
                                            )
                                          ),
                                        ]
                                      ),
                                      o(
                                        "v-uni-view",
                                        { staticClass: "cashcoupon-dec" },
                                        [
                                          t._v(
                                            t._s(
                                              t._f("parsezenpin")(
                                                t.cashcouponobj
                                              )
                                            )
                                          ),
                                        ]
                                      ),
                                      o(
                                        "v-uni-view",
                                        {
                                          staticClass: "cashcoupon-time",
                                          staticStyle: {
                                            "line-height": "40upx",
                                          },
                                        },
                                        [
                                          t._v(
                                            "共" +
                                              t._s(
                                                t.cashcouponobj.total_money
                                              ) +
                                              "元"
                                          ),
                                          o("br"),
                                          t._v(t._s(t.cashcouponobj.userlimit)),
                                          o("br"),
                                          t._v(
                                            t._s(
                                              1 == t.cashcouponobj.use_order
                                                ? "优先用余额"
                                                : "优先用券"
                                            )
                                          ),
                                          o("br"),
                                          t._v(
                                            "开始时间: " +
                                              t._s(t.cashcouponobj.start_at)
                                          ),
                                          o("br"),
                                          t._v(
                                            t._s(
                                              t.parseendtime(t.cashcouponobj)
                                            )
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  o(
                                    "v-uni-view",
                                    { staticClass: "cashcoupon-tip" },
                                    [
                                      o(
                                        "v-uni-view",
                                        { staticClass: "cashcoupon-money" },
                                        [
                                          o(
                                            "v-uni-text",
                                            { staticClass: "yuan-text" },
                                            [t._v("剩余")]
                                          ),
                                          o(
                                            "v-uni-text",
                                            {
                                              staticStyle: {
                                                "font-size": "40upx",
                                              },
                                            },
                                            [
                                              t._v(
                                                t._s(t.cashcouponobj.balance)
                                              ),
                                            ]
                                          ),
                                          o(
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
                          o("v-uni-view", {
                            staticClass: "division-split-line",
                          }),
                          o(
                            "v-uni-view",
                            { staticClass: "content-code" },
                            [
                              o(
                                "v-uni-view",
                                {
                                  staticStyle: {
                                    "text-align": "center",
                                    "background-color": "white",
                                    padding: "40upx",
                                  },
                                },
                                [
                                  o(
                                    "v-uni-view",
                                    {
                                      staticClass: "qrimg",
                                      staticStyle: {
                                        display: "inline-block",
                                        position: "relative",
                                      },
                                    },
                                    [
                                      o("tki-qrcode", {
                                        ref: "qrcode",
                                        staticStyle: {
                                          display: "inline-block",
                                        },
                                        attrs: {
                                          val: t.val,
                                          size: t.size,
                                          unit: "upx",
                                          background: t.background,
                                          foreground: t.foreground,
                                          pdground: t.pdground,
                                          icon: t.icon,
                                          iconSize: 40,
                                          lv: 3,
                                          onval: !0,
                                          loadMake: !0,
                                          usingComponents: !0,
                                          showLoading: !0,
                                        },
                                      }),
                                      t.showouted
                                        ? o("v-uni-image", {
                                            staticStyle: {
                                              width: "120upx",
                                              height: "116upx",
                                              position: "absolute",
                                              top: "-40upx",
                                            },
                                            attrs: {
                                              src: "/static/cashcouponused.png",
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
                          ),
                          o(
                            "v-uni-view",
                            {
                              staticClass: "record-view",
                              staticStyle: { padding: "20px 15px" },
                            },
                            [
                              o(
                                "v-uni-button",
                                {
                                  staticClass: "confirm-btn",
                                  attrs: { type: "primary" },
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.getuserecord(t.cashcouponobj.id);
                                    },
                                  },
                                },
                                [t._v("使用记录")]
                              ),
                            ],
                            1
                          ),
                          o(
                            "v-uni-view",
                            { staticClass: "content-tip" },
                            [
                              o(
                                "v-uni-view",
                                { staticClass: "tip-title-container" },
                                [
                                  o("v-uni-view", { staticClass: "line" }),
                                  o(
                                    "v-uni-view",
                                    {
                                      staticStyle: {
                                        "font-weight": "bold",
                                        "font-size": "16px",
                                      },
                                    },
                                    [t._v("使用须知")]
                                  ),
                                  o("v-uni-view", { staticClass: "line" }),
                                ],
                                1
                              ),
                              o(
                                "v-uni-view",
                                { staticClass: "content-tip-text" },
                                [
                                  t._v(
                                    "1.若订单需支付的金额低于优惠券的额度,差额会退回到该张优惠券中,优惠券保留至下次继续使用;"
                                  ),
                                  o("br"),
                                  t._v(
                                    "2.若订单需支付的金额高于优惠券的额度,系统自动选择剩余对应服务的优惠券进行抵扣,若没有优惠券再使用账户余额进行抵扣;"
                                  ),
                                  o("br"),
                                  t._v("3.请在有效期内使用，过期作废；"),
                                  o("br"),
                                  t._v("4.实物只可领取一次，领取后作废；"),
                                  o("br"),
                                  t._v("5.有疑问请联系客服。"),
                                  o("br"),
                                ]
                              ),
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
            ],
            1
          );
        },
        a = [];
    },
    b56c: function (t, e, o) {
      "use strict";
      var i = o("6e25"),
        n = o.n(i);
      n.a;
    },
    cb29: function (t, e, o) {
      "use strict";
      var i = o("23e7"),
        n = o("81d5"),
        a = o("44d2");
      i({ target: "Array", proto: !0 }, { fill: n }), a("fill");
    },
    cb33: function (t, e, o) {
      "use strict";
      o("7a82");
      var i = o("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = i(o("0122"));
      o("a9e3"), o("e9c4");
      var a,
        r = i(o("2ca9")),
        s = {
          name: "tki-qrcode",
          props: {
            size: { type: Number, default: 200 },
            unit: { type: String, default: "upx" },
            show: { type: Boolean, default: !0 },
            val: { type: String, default: "" },
            background: { type: String, default: "#ffffff" },
            foreground: { type: String, default: "#000000" },
            pdground: { type: String, default: "#000000" },
            icon: { type: String, default: "" },
            iconSize: { type: Number, default: 40 },
            lv: { type: Number, default: 3 },
            onval: { type: Boolean, default: !1 },
            loadMake: { type: Boolean, default: !1 },
            usingComponents: { type: Boolean, default: !0 },
            showLoading: { type: Boolean, default: !0 },
            loadingText: { type: String, default: "二维码生成中" },
          },
          data: function () {
            return { result: "" };
          },
          methods: {
            _makeCode: function () {
              var t = this;
              this._empty(this.val)
                ? uni.showToast({
                    title: "二维码内容不能为空",
                    icon: "none",
                    duration: 2e3,
                  })
                : (a = new r.default({
                    context: t,
                    usingComponents: t.usingComponents,
                    showLoading: t.showLoading,
                    loadingText: t.loadingText,
                    text: t.val,
                    size: t.cpSize,
                    background: t.background,
                    foreground: t.foreground,
                    pdground: t.pdground,
                    correctLevel: t.lv,
                    image: t.icon,
                    imageSize: t.iconSize,
                    cbResult: function (e) {
                      t._result(e);
                    },
                  }));
            },
            _clearCode: function () {
              this._result(""), a.clear();
            },
            _saveCode: function () {
              "" != this.result &&
                uni.saveImageToPhotosAlbum({
                  filePath: this.result,
                  success: function () {
                    uni.showToast({
                      title: "二维码保存成功",
                      icon: "success",
                      duration: 2e3,
                    });
                  },
                });
            },
            _result: function (t) {
              (this.result = t), this.$emit("result", t);
            },
            _empty: function (t) {
              var e = (0, n.default)(t),
                o = !1;
              return (
                ("number" == e && "" == String(t)) || "undefined" == e
                  ? (o = !0)
                  : "object" == e
                  ? ("{}" != JSON.stringify(t) &&
                      "[]" != JSON.stringify(t) &&
                      null != t) ||
                    (o = !0)
                  : "string" == e
                  ? ("" != t &&
                      "undefined" != t &&
                      "null" != t &&
                      "{}" != t &&
                      "[]" != t) ||
                    (o = !0)
                  : "function" == e && (o = !1),
                o
              );
            },
          },
          watch: {
            size: function (t, e) {
              var o = this;
              t == e ||
                this._empty(t) ||
                ((this.cSize = t),
                this._empty(this.val) ||
                  setTimeout(function () {
                    o._makeCode();
                  }, 100));
            },
            val: function (t, e) {
              var o = this;
              this.onval &&
                (t == e ||
                  this._empty(t) ||
                  setTimeout(function () {
                    o._makeCode();
                  }, 0));
            },
          },
          computed: {
            cpSize: function () {
              return "upx" == this.unit ? uni.upx2px(this.size) : this.size;
            },
          },
          mounted: function () {
            var t = this;
            this.loadMake &&
              (this._empty(this.val) ||
                setTimeout(function () {
                  t._makeCode();
                }, 0));
          },
        };
      e.default = s;
    },
    cb5d: function (t, e, o) {
      var i = o("24fb"),
        n = o("1de5"),
        a = o("aedd"),
        r = o("4c16"),
        s = o("c57c"),
        u = o("9f9c"),
        c = o("d39a"),
        l = o("0567"),
        d = o("83308");
      e = i(!1);
      var h = n(a),
        p = n(r),
        f = n(s),
        g = n(u),
        v = n(c),
        m = n(l),
        b = n(d);
      e.push([
        t.i,
        '.cashcoupon[data-v-708996ae]{width:100%;padding:10px}.cashcoupon-wrapper[data-v-708996ae]{width:100%;display:flex;background:#fff;border-radius:8px}.cashcoupon-content[data-v-708996ae]{flex:1;padding:%?40?%;border-radius:8px 0 0 8px;background:#fff}.cashcoupon-title[data-v-708996ae]{font-size:%?35?%;font-weight:700;display:inline-block;word-break:break-all}.cashcoupon-totalmoney[data-v-708996ae]{font-size:%?40?%;color:#fc593b}.yuan-text[data-v-708996ae]{font-size:%?20?%!important;color:#000}.cashcoupon-dec[data-v-708996ae]{display:inline-block;margin:0 %?20?%;font-size:%?20?%;color:#ff8f30;border:1px solid #ff8f30;border-radius:%?10?%;padding:%?0?% %?20?%}.cashcoupon-tip[data-v-708996ae],\r\n.cashcoupon-outsell-tip[data-v-708996ae],\r\n.cashcoupon-buyed-tip[data-v-708996ae],\r\n.cashcoupon-outcount-tip[data-v-708996ae],\r\n.cashcoupon-outtime-tip[data-v-708996ae]{position:relative;flex:0 0 100px;text-align:center;color:#fc593b;border-radius:0 8px 8px 0;background:#fff;display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;-webkit-box-orient:vertical;text-align:center}.cashcoupon-tip[data-v-708996ae]::after,\r\n.cashcoupon-outsell-tip[data-v-708996ae]::after,\r\n.cashcoupon-buyed-tip[data-v-708996ae]::after,\r\n.cashcoupon-outcount-tip[data-v-708996ae]::after,\r\n.cashcoupon-outtime-tip[data-v-708996ae]::after{content:"";display:block;height:100%;width:100%;background:url(' +
          h +
          ") 100% 100% no-repeat;background-size:%?60?%;position:absolute;z-index:1;top:0;left:0}\r\n\r\n/* 已售罄 */.cashcoupon-outsell-tip[data-v-708996ae]::after{background:url(" +
          p +
          ") 50% no-repeat!important;background-size:%?120?%!important}\r\n\r\n/* 超过限购数量 */.cashcoupon-buyed-tip[data-v-708996ae]::after{background:url(" +
          f +
          ") 50% no-repeat!important;background-size:%?120?%!important}\r\n\r\n/* 已用完 */.cashcoupon-outcount-tip[data-v-708996ae]::after{background:url(" +
          g +
          ") 50% no-repeat!important;background-size:%?120?%!important}\r\n\r\n/* 已过期 */.cashcoupon-outtime-tip[data-v-708996ae]::after{background:url(" +
          v +
          ') 50% no-repeat!important;background-size:%?120?%!important}.cashcoupon-outsell-tip[data-v-708996ae]::before,\r\n.cashcoupon-buyed-tip[data-v-708996ae]::before,\r\n.cashcoupon-outcount-tip[data-v-708996ae]::before,\r\n.cashcoupon-outtime-tip[data-v-708996ae]::before{content:"";display:block;height:100%;width:100%;background:url(' +
          m +
          ') 100% 100% no-repeat;background-size:%?60?%;position:absolute;z-index:1;top:0;left:0}.cashcoupon-split-line[data-v-708996ae]{position:relative;flex:0 0 0;border-left:1px solid #eee;margin:0 5px 0 3px;background:#fff}.cashcoupon-split-line[data-v-708996ae]:before,\r\n.cashcoupon-split-line[data-v-708996ae]:after{content:"";position:absolute;width:16px;height:8px;background:#f7f7f7;left:-9px;z-index:1}.cashcoupon-split-line[data-v-708996ae]:before{border-radius:0 0 8px 8px;top:0}.cashcoupon-split-line[data-v-708996ae]:after{border-radius:8px 8px 0 0;bottom:0}.cashcoupon-sellmoney[data-v-708996ae]{font-size:12px;position:relative;top:%?10?%;\r\n\t/* text-decoration: line-through; */color:#9e9e9e}.cashcoupon-time[data-v-708996ae]{font-size:12px;color:#9e9e9e;position:relative;top:%?20?%}.cashcoupon-pay-line[data-v-708996ae]{height:33%;margin-top:2px;font-size:12px;color:#696969}.cashcoupon-pay-user[data-v-708996ae]{height:33%}.cashcoupon-pay-user-btn[data-v-708996ae]{border-radius:20px;margin-top:5px}.cashcoupon-userlimit[data-v-708996ae]{position:relative;top:%?20?%;font-size:12px;color:#9e9e9e}.rechargenumber[data-v-708996ae]{border:1px solid #ddd;margin:%?10?%;height:%?100?%;line-height:%?100?%;background-color:#fff;border-radius:%?10?%;white-space:nowrap;\r\n\t/* 超出的部分隐藏 */overflow:hidden;\r\n\t/*文字用省略号替代超出的部分 */text-overflow:ellipsis;padding:0 %?20?%}\r\n\r\n/* 充值金额选中样式 */.rechargenumberactive[data-v-708996ae]{border:1px solid #ff001e}\r\n\r\n/* 优惠券过期 */.cashcouponouttime[data-v-708996ae]{color:#9e9e9e!important}uni-page-body[data-v-708996ae]{background-color:#f4f4f4}body.?%PAGE?%[data-v-708996ae]{background-color:#f4f4f4}.cashcoupon[data-v-708996ae]{padding:%?20?% %?20?% %?0?% %?20?%}.detail-header[data-v-708996ae]{border-bottom:1px dashed #ccc;display:flex;padding-top:%?20?%}.detail-header[data-v-708996ae]::after{content:"";display:block;clear:both}.detail-header .detail-header-name[data-v-708996ae]{height:50%;width:100%}.header-name-title[data-v-708996ae]{width:100%;height:100%;font-size:18px;padding-left:%?40?%}.header-name-userecord[data-v-708996ae]{width:100%;text-align:center}.detail-header-info[data-v-708996ae]{height:50%;width:calc(100% - %?250?%);margin-left:%?150?%;margin-right:%?100?%;border-bottom:1px dashed #ccc}.header-info-dec[data-v-708996ae]{height:100%;width:75%;float:left;border-right:1px dashed #ccc;padding-left:calc(20% - %?100?% + 10px);-webkit-box-pack:center;-webkit-box-orient:vertical}.header-info-dec p[data-v-708996ae]{overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;font-size:12px;line-height:%?100?%}.header-info-money[data-v-708996ae]{line-height:%?60?%;height:100%;width:100%;float:left;text-align:center;display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;-webkit-box-orient:vertical}#totalmoney[data-v-708996ae]{font-size:20px;color:#dd524d}#leavemoney[data-v-708996ae]{font-size:12px;color:#dd524d}.detail-content p[data-v-708996ae]{color:#000}.content-code[data-v-708996ae]{width:100%;padding:0 %?20?% %?20?% %?20?%}.code-img[data-v-708996ae]{width:%?1000?%;height:%?1000?%}.content-tip[data-v-708996ae]{padding:%?30?%}.content-tip-text[data-v-708996ae]{line-height:%?50?%;padding:0;font-size:%?26?%}#qrcode>img[data-v-708996ae]{margin:auto}.coupon-name[data-v-708996ae]{font-size:18px;font-weight:700;color:#000}.largess-name[data-v-708996ae]{margin-right:10px;font-size:12px;line-height:%?50?%;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical}.division-split-line[data-v-708996ae]{position:relative;border-bottom:1px solid #eee;margin:0 auto;background:#fff;width:calc(100% - 40px)}.division-split-line[data-v-708996ae]:after,\r\n.division-split-line[data-v-708996ae]:before{border-radius:8px 8px 0 0;bottom:0;top:%?-8?%;content:"";position:absolute;width:16px;height:8px;background:#f7f7f7;z-index:1}.division-split-line[data-v-708996ae]:after{-webkit-transform:rotate(90deg);transform:rotate(90deg);left:%?-26?%}.division-split-line[data-v-708996ae]:before{right:%?-26?%;-webkit-transform:rotate(270deg);transform:rotate(270deg)}.tip-title-container[data-v-708996ae]{display:flex;justify-content:center;align-items:center}.line[data-v-708996ae]{margin:0 auto;width:%?200?%;height:%?2?%;background-color:#d8d8d8}.cashcoupon-tip[data-v-708996ae]::after{content:"";display:block;height:100%;width:100%;background:url(' +
          b +
          ") 100% 100% no-repeat;background-size:%?80?%;position:absolute;z-index:100;\r\n\r\n\r\n\r\nleft:0}",
        "",
      ]),
        (t.exports = e);
    },
    cf9b: function (t, e, o) {
      "use strict";
      (function (t) {
        o("7a82");
        var i = o("ee27").default;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          o("ac1f"),
          o("5319"),
          o("14d9");
        var n = i(o("6972")),
          a = i(o("17f9")),
          r = {
            components: { tkiQrcode: a.default },
            computed: {
              containerstyle: function () {
                var t = "height:calc(100% - ".concat(
                  this.$store.state.SystemInfo.CustomBar,
                  "px)"
                );
                return t;
              },
            },
            onLoad: function (e) {
              var o = decodeURIComponent(e.cashcoupon);
              this.cashcouponobj = JSON.parse(o);
              var i = this.parsecashcoupontype(this.cashcouponobj);
              (this.cashcouponobj.typeclass = i.iconname),
                (this.cashcouponobj.userlimit = i.userlimit),
                t.log(this.cashcouponobj, "this.cashcouponobj===???"),
                this.setqrcode();
            },
            data: function () {
              return {
                userdata: this.$store.state.user,
                project: this.$store.state.project,
                cashcouponobj: null,
                val: "",
                size: 300,
                unit: "px",
                background: "#ffffff",
                foreground: "#000000",
                pdground: "#000000",
                icon: "",
                codeclass: "",
                showouted: !1,
              };
            },
            filters: {
              parsezenpin: function (t) {
                if (null == t) return "";
                var e = "无赠品";
                return (
                  0 != t.gift_goods_id && (e = "赠品:" + t.gift_goods_name), e
                );
              },
            },
            methods: {
              parseendtime: function (t) {
                if (null != t) {
                  var e = t.expire_at,
                    o = "有效期至: " + e;
                  return this.checkmaxdate(e) || (o = " 无使用期限"), o;
                }
              },
              checkmaxdate: function (t) {
                if (!n.default.isNullOrEmpty(t)) {
                  var e = new Date("2099/01/01 00:00:00"),
                    o = new Date(t.replace(/\-/g, "/"));
                  return o < e;
                }
              },
              parsecashcoupontype: function (t) {
                if (null != t) {
                  var e = { iconname: [], userlimit: "" },
                    o = t.use_limit.split(","),
                    i = n.default.GetCouponUserLimit(o),
                    a = i.userlimittipstr,
                    r = i.iconclassname;
                  return (
                    e.iconname.push(r),
                    t.total_count <= 0 && e.iconname.push("cashcouponouttime"),
                    (e.userlimit = a),
                    e
                  );
                }
              },
              setqrcode: function () {
                if (null != this.cashcouponobj) {
                  1 == this.cashcouponobj.gift_goods_get_status &&
                    ((this.showouted = !0),
                    (this.background = "#ffffff"),
                    (this.foreground = "#cecece"),
                    (this.pdground = "#cecece")),
                    (this.val = this.cashcouponobj.id);
                }
              },
              getuserecord: function (t) {
                uni.navigateTo({
                  url: "../cashcouponuserrecord/cashcouponuserrecord?id=" + t,
                });
              },
            },
          };
        e.default = r;
      }).call(this, o("5a52")["default"]);
    },
    ec99: function (t, e, o) {
      "use strict";
      o.r(e);
      var i = o("cf9b"),
        n = o.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            o.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = n.a;
    },
  },
]);
