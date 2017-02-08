(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Complex = function () {
  function Complex() {
    _classCallCheck(this, Complex);

    this.re = (arguments.length <= 0 ? undefined : arguments[0]) || 0;
    this.im = (arguments.length <= 1 ? undefined : arguments[1]) || 0;

    this.float32Array = new Float32Array(2);
    this.float32Array[0] = this.re;
    this.float32Array[1] = this.im;
  }

  _createClass(Complex, [{
    key: "abs",
    value: function abs() {
      return this.re * this.re + this.im * this.im;
    }
  }, {
    key: "arg",
    value: function arg() {
      return Math.atan2(this.im, this.re);
    }
  }]);

  return Complex;
}();

Complex.re = function (c) {
  return c.re;
};

Complex.im = function (c) {
  return c.im;
};

exports.default = Complex;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 *  インスタンスのプロトタイプを作る関数を返します。これは、デフォルトで対応する Uint32Array コンストラクタです。
 *  new Uint32Array(length);
 *  new Uint32Array(typedArray);
 *  new Uint32Array(object);
​ *  new Uint32Array(buffer [, byteOffset [, length]]);
 */
var Complex64Array = function () {
  function Complex64Array() {
    var _this = this;

    _classCallCheck(this, Complex64Array);

    this.len = 0;
    this.source = [];

    if (arguments.length === 0) {} else if (arguments.length === 1) {
      var arg = arguments.length <= 0 ? undefined : arguments[0];

      if (typeof arg === 'number') {
        this.len = arg;
      } else if (arg instanceof Array) {
        this.len = arg.length;

        this.source = arg;
      } else {
        this.len = 0;
      }
    } else {}

    this.buf = new ArrayBuffer(length * 8);
    this.float32Array = new Float32Array(this.buf);
    this.float32Array.fill(0);

    this.source.forEach(function (item, i) {
      _this.float32Array[i * 2] = item;
    });
  }

  /*
   *  [読取専用] Uint32Array オブジェクトによって参照されるArrayBufferを返します。構築時に設定され、読取専用となります。
   */


  _createClass(Complex64Array, [{
    key: 'copyWithin',


    /*
     *  配列内で一連の配列要素をコピーします。Array.prototype.copyWithin()も確かめて下さい。
     */
    value: function copyWithin() {}

    /*
     *  配列内で各インデックスに対して、キー／バリュー　ペアを含む新しいArray Iteratorを返します。Array.prototype.entries()も確かめて下さい。
     */

  }, {
    key: 'entries',
    value: function entries() {}

    /*
     *  配列内のすべての要素が関数によって提供されたテストに合格するかどうかテストを実行します。Array.prototype.every()も確かめて下さい。
     */

  }, {
    key: 'every',
    value: function every() {}

    /*
     *  開始位置から終了位置までの配列のすべての要素を固定値で設定します。Array.prototype.fill()も確かめて下さい。
     */

  }, {
    key: 'fill',
    value: function fill() {}

    /*
     *  与えられたフィルタリング関数がtrueを返す配列のすべての要素をもつ新しい配列を生成します。Array.prototype.filter()も確かめて下さい。
     */

  }, {
    key: 'filter',
    value: function filter() {}

    /*
     *  配列要素が与えられたテスト関数を満足したら、配列の値を返します。満足しなかった場合、undefinedを返します。 Array.prototype.find()を確かめて下さい。
     */

  }, {
    key: 'find',
    value: function find() {}

    /*
     *  配列要素が与えられたテスト関数を満足したら、配列のインデックスを返します。満足しなかった場合、-1を返します。Array.prototype.findIndex()も確かめて下さい。
     */

  }, {
    key: 'findIndex',
    value: function findIndex() {}

    /*
     *  配列内の各要素に対する関数を呼び出します。Array.prototype.forEach()も確かめて下さい。
     */

  }, {
    key: 'forEach',
    value: function forEach() {}

    /*
     *  typed arrayがある要素を含むかどうか判断し、それに応じて、true か falseを返します。 Array.prototype.includes()も確かめて下さい。
     */

  }, {
    key: 'includes',
    value: function includes() {}

    /*
     *  指定された値に等しい配列内の要素の最初のインデックスを返します。見つからない場合、-1を返します。Array.prototype.indexOf()も確かめて下さい。
     */

  }, {
    key: 'indexOf',
    value: function indexOf() {}

    /*
     *  すべての配列要素を文字列に結合します。Array.prototype.join()も確かめて下さい。
     */

  }, {
    key: 'join',
    value: function join() {}

    /*
     *  配列内の各インデックスに対するキーを含む新しいArray Iteratorを返します。Array.prototype.keys()も確かめて下さい。
     */

  }, {
    key: 'keys',
    value: function keys() {}

    /*
     *  指定された値と等しい配列の要素の最後のインデックスを返します。見つからない場合、-1を返します。Array.prototype.lastIndexOf()を確かめて下さい。
     */

  }, {
    key: 'lastIndexOf',
    value: function lastIndexOf() {}

    /*
     *  この配列のすべての要素で与えられた関数を呼び出した結果をもつ新しい配列を生成します。Array.prototype.map()も確かめて下さい。
     */

  }, {
    key: 'map',
    value: function map() {}

    /*
     *  [未実装] TypedArray.prototype.copyWithin()の以前の非標準バージョン
     */

  }, {
    key: 'move',
    value: function move() {}

    /*
     *  アキュムレータに対して関数を適用し、隣り合う二つのtyped arrayの要素(左から右へ)は単一の値になります。Array.prototype.reduce()も確かめて下さい。
     */

  }, {
    key: 'reduce',
    value: function reduce() {}

    /*
     *  アキュムレータに対して関数を適用し、隣り合う二つのtyped arrayの要素(右から左へ)は単一の値になります。Array.prototype.reduceRight()を確かめて下さい。
     */

  }, {
    key: 'reduceRight',
    value: function reduceRight() {}

    /*
     *  配列要素の順番を反転させます。— 最初の要素は最後になり、最後の要素は最初になります。Array.prototype.reverse()も確かめて下さい。
     */

  }, {
    key: 'reverse',
    value: function reverse() {}

    /*
     *  入力値を指定した配列から読み込み、typed array内に複数の値を格納します。
     */

  }, {
    key: 'set',
    value: function set() {
      var _this2 = this;

      var arr = (arguments.length <= 0 ? undefined : arguments[0]) || [];
      var offset = (arguments.length <= 1 ? undefined : arguments[1]) || 0;

      arr.forEach(function (item, i) {
        _this2.float32Array[(i + offset) * 2] = item;
      });
    }

    /*
     *  配列の一部を取り出して新しい配列を返します。Array.prototype.slice()も確かめて下さい。
     */

  }, {
    key: 'slice',
    value: function slice() {}

    /*
     *  ある配列の少なくとも 1 つの要素が与えられたテスト関数を満たした場合にtrueを返します。Array.prototype.some()も確かめて下さい。
     */

  }, {
    key: 'some',
    value: function some() {}

    /*
     *  配列の要素をソートし、その結果を返します。Array.prototype.sort()も確かめて下さい。
     */

  }, {
    key: 'sort',
    value: function sort() {}

    /*
     *  与えられた開始位置と終了位置の要素インデックスの新しいUint32Array オブジェクトを返します。
     */

  }, {
    key: 'subarray',
    value: function subarray() {}

    /*
     *  配列内で各インデックスに対する値を含む新しいArray Iteratorオブジェクトを返します。Array.prototype.values()を確かめて下さい。
     */

  }, {
    key: 'values',
    value: function values() {}

    /*
     *  配列と要素を表すローカライズされた文字列を返します。Array.prototype.toLocaleString()も確かめて下さい。
     */

  }, {
    key: 'toLocaleString',
    value: function toLocaleString() {}

    /*
     *  配列と要素を表す文字列を返します。Array.prototype.toString()も確かめて下さい。
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.float32Array.toString();
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this.float32Array;
    }

    /*
     * 配列内で各インデックスに対する値を含む新しいArray Iteratorオブジェクトを返します。
     */
    // @@iterator

  }, {
    key: 'buffer',
    get: function get() {
      return this.buff;
    }

    /*
     *  [読取専用] ArrayBufferの開始位置からのUint32Array オブジェクトの(バイト単位の)長さを返します。構築時に設定され、読取専用となります。
     */

  }, {
    key: 'byteLength',
    get: function get() {}

    /*
     *  [読取専用] ArrayBufferの開始位置からのUint32Array オブジェクトの(バイト単位の)オフセットを返します。構築時に設定され、読取専用となります。
     */

  }, {
    key: 'byteOffset',
    get: function get() {}

    /*
     *  [読取専用] Uint32Array オブジェクト内に保持された要素の数を返します。構築時に設定され、読取専用となります。
     */

  }, {
    key: 'length',
    get: function get() {
      return this.len;
    }
  }]);

  return Complex64Array;
}();

/*
 *  要素一個あたりのバイト数を返します。Complex64Array の場合は8です。
 */


Complex64Array.BYTES_PER_ELEMENT = 8;

exports.default = Complex64Array;

},{}],3:[function(require,module,exports){
(function (global){
'use strict';

var _Complex = require('./module/Complex');

var _Complex2 = _interopRequireDefault(_Complex);

var _Complex64Array = require('./module/Complex64Array');

var _Complex64Array2 = _interopRequireDefault(_Complex64Array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  'use strict';

  // export

  global.Complex = _Complex2.default;
  global.Complex64Array = _Complex64Array2.default;
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./module/Complex":1,"./module/Complex64Array":2}]},{},[3]);
