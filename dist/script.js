(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// メモ化でメモリを食うのが心配
var map = new Map();

var ComplexClass = function () {
  function ComplexClass() {
    _classCallCheck(this, ComplexClass);

    if ((arguments.length <= 1 ? undefined : arguments[1]) == null) {
      var float64Array = new Float64Array(1);
      float64Array[0] = arguments.length <= 0 ? undefined : arguments[0];
      this._float32Array = new Float32Array(float64Array.buffer);
    } else {
      this._float32Array = new Float32Array(2);
      this._float32Array[0] = arguments.length <= 0 ? undefined : arguments[0];
      this._float32Array[1] = arguments.length <= 1 ? undefined : arguments[1];
    }
  }

  _createClass(ComplexClass, [{
    key: 'abs',
    value: function abs() {
      return this.re * this.re + this.im * this.im;
    }
  }, {
    key: 'arg',
    value: function arg() {
      return Math.atan2(this.im, this.re);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var re = this.re;
      var im = this.im;

      if (re === 0) {
        if (im === 0) {
          return '0';
        } else if (im === 1) {
          return 'i';
        } else if (im === -1) {
          return '-i';
        } else {
          return im + 'i';
        }
      } else if (im === 0) {
        return '' + re;
      } else if (im < 0) {
        return re + '-' + Math.abs(im) + 'i';
      } else {
        return re + '+' + im + 'i';
      }
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      var float64Array = new Float64Array(this._float32Array.buffer);
      return float64Array[0];
    }
  }, {
    key: 're',
    get: function get() {
      return this._float32Array[0];
    }
  }, {
    key: 'im',
    get: function get() {
      return this._float32Array[1];
    }
  }]);

  return ComplexClass;
}();

function complex() {
  if ((arguments.length <= 1 ? undefined : arguments[1]) == null) {
    var v = arguments.length <= 0 ? undefined : arguments[0];
    var c = map.get(v);

    if (c) {
      return c;
    } else {
      var nc = new Complex(v);
      map.set(v, nc);
      return nc;
    }
  } else {
    // Map取得のために必ずnewしなければならないのを避けたい
    var _nc = new Complex(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
    var _v = _nc.valueOf();
    var _c = map.get(_v);

    if (_c) {
      return _c;
    } else {
      map.set(_v, _nc);
      return _nc;
    }
  }
}

var ComplexWrapper = function ComplexWrapper(re, im) {
  if (this) {
    return new ComplexClass(re, im);
  } else {
    return complex(re, im);
  }
};

// c instanceof Complex をtrueにするため
ComplexWrapper.prototype = ComplexClass.prototype;

exports.default = ComplexWrapper;

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

    this._length = 0;
    var source = [];

    if (arguments.length === 0) {} else if (arguments.length === 1) {
      var arg = arguments.length <= 0 ? undefined : arguments[0];

      if (typeof arg === 'number') {
        this._length = arg;
      } else if (arg instanceof Array) {
        this._length = arg.length;

        source = arg;
      } else {
        this._length = 0;
      }
    } else {}

    this._buffer = new ArrayBuffer(this._length * Complex64Array.BYTES_PER_ELEMENT);
    this._float32Array = new Float32Array(this._buffer);
    this._float32Array.fill(0);

    this._float64Array = new Float64Array(this._buffer);

    source.forEach(function (item, i) {
      if (item == null) {
        _this._float32Array[i * 2] = item;
        _this._float32Array[i * 2 + 1] = item;
      } else if (item instanceof Complex) {
        _this._float64Array[i] = item;
      } else {
        _this._float32Array[i * 2] = item;
      }
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
        if (item instanceof Complex) {
          _this2._float64Array[i + offset] = item;
        } else {
          _this2._float32Array[(i + offset) * 2] = item;
        }
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
      var arr = [];
      for (var i = 0; i < this.length; i++) {
        arr.push(this.getItem(i));
      }

      return arr.join(',');
    }
  }, {
    key: 'valueOf',
    value: function valueOf() {
      return this._float32Array;
    }

    /*
     * 配列内で各インデックスに対する値を含む新しいArray Iteratorオブジェクトを返します。
     */
    // @@iterator

  }, {
    key: 'getItem',
    value: function getItem(index) {
      var re = this._float32Array[index * 2];
      var im = this._float32Array[index * 2 + 1];

      var ret = Complex(re, im);
      return ret;
    }
  }, {
    key: 'buffer',
    get: function get() {
      return this._buffer;
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
      return this._length;
    }
  }, {
    key: 're',
    get: function get() {
      var len = Math.ceil(this.length / 2);
      var arr = new Float32Array(len);

      for (var i = 0; i < len; i++) {
        arr[i] = this._float32Array[i * 2];
      }

      return arr;
    }
  }, {
    key: 'im',
    get: function get() {
      var len = Math.ceil(this.length / 2);
      var arr = new Float32Array(len);

      for (var i = 0; i < len; i++) {
        arr[i] = this._float32Array[i * 2 + 1];
      }

      return arr;
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
