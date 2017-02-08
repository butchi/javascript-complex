/*
 *  インスタンスのプロトタイプを作る関数を返します。これは、デフォルトで対応する Uint32Array コンストラクタです。
 *  new Uint32Array(length);
 *  new Uint32Array(typedArray);
 *  new Uint32Array(object);
​ *  new Uint32Array(buffer [, byteOffset [, length]]);
 */
class Complex64Array {
  constructor(...args) {
    this.len = 0;
    this.source = [];

    if(args.length === 0) {
    } else if(args.length === 1) {
      let arg = args[0];

      if(typeof arg === 'number') {
        this.len = arg;
      } else if(arg instanceof Array) {
        this.len = arg.length;

        this.source = arg;
      } else {
        this.len = 0;
      }
    } else {
    }

    this.buf = new ArrayBuffer(length * 8);
    this.float32Array =  new Float32Array(this.buf);
    this.float32Array.fill(0);

    this.source.forEach((item, i) => {
      this.float32Array[i * 2] = item;
    });
  }

  /*
   *  [読取専用] Uint32Array オブジェクトによって参照されるArrayBufferを返します。構築時に設定され、読取専用となります。
   */
  get buffer() {
    return this.buff;
  }

  /*
   *  [読取専用] ArrayBufferの開始位置からのUint32Array オブジェクトの(バイト単位の)長さを返します。構築時に設定され、読取専用となります。
   */
  get byteLength() {
  }

  /*
   *  [読取専用] ArrayBufferの開始位置からのUint32Array オブジェクトの(バイト単位の)オフセットを返します。構築時に設定され、読取専用となります。
   */
  get byteOffset() {
  }

  /*
   *  [読取専用] Uint32Array オブジェクト内に保持された要素の数を返します。構築時に設定され、読取専用となります。
   */
  get length() {
    return this.len;
  }


  /*
   *  配列内で一連の配列要素をコピーします。Array.prototype.copyWithin()も確かめて下さい。
   */
  copyWithin() {
  }

  /*
   *  配列内で各インデックスに対して、キー／バリュー　ペアを含む新しいArray Iteratorを返します。Array.prototype.entries()も確かめて下さい。
   */
  entries() {
  }

  /*
   *  配列内のすべての要素が関数によって提供されたテストに合格するかどうかテストを実行します。Array.prototype.every()も確かめて下さい。
   */
  every() {
  }

  /*
   *  開始位置から終了位置までの配列のすべての要素を固定値で設定します。Array.prototype.fill()も確かめて下さい。
   */
  fill() {
  }

  /*
   *  与えられたフィルタリング関数がtrueを返す配列のすべての要素をもつ新しい配列を生成します。Array.prototype.filter()も確かめて下さい。
   */
  filter() {
  }

  /*
   *  配列要素が与えられたテスト関数を満足したら、配列の値を返します。満足しなかった場合、undefinedを返します。 Array.prototype.find()を確かめて下さい。
   */
  find() {
  }

  /*
   *  配列要素が与えられたテスト関数を満足したら、配列のインデックスを返します。満足しなかった場合、-1を返します。Array.prototype.findIndex()も確かめて下さい。
   */
  findIndex() {
  }

  /*
   *  配列内の各要素に対する関数を呼び出します。Array.prototype.forEach()も確かめて下さい。
   */
  forEach() {
  }

  /*
   *  typed arrayがある要素を含むかどうか判断し、それに応じて、true か falseを返します。 Array.prototype.includes()も確かめて下さい。
   */
  includes() {
  }

  /*
   *  指定された値に等しい配列内の要素の最初のインデックスを返します。見つからない場合、-1を返します。Array.prototype.indexOf()も確かめて下さい。
   */
  indexOf() {
  }

  /*
   *  すべての配列要素を文字列に結合します。Array.prototype.join()も確かめて下さい。
   */
  join() {
  }

  /*
   *  配列内の各インデックスに対するキーを含む新しいArray Iteratorを返します。Array.prototype.keys()も確かめて下さい。
   */
  keys() {
  }

  /*
   *  指定された値と等しい配列の要素の最後のインデックスを返します。見つからない場合、-1を返します。Array.prototype.lastIndexOf()を確かめて下さい。
   */
  lastIndexOf() {
  }

  /*
   *  この配列のすべての要素で与えられた関数を呼び出した結果をもつ新しい配列を生成します。Array.prototype.map()も確かめて下さい。
   */
  map() {
  }

  /*
   *  [未実装] TypedArray.prototype.copyWithin()の以前の非標準バージョン
   */
  move() {
  }

  /*
   *  アキュムレータに対して関数を適用し、隣り合う二つのtyped arrayの要素(左から右へ)は単一の値になります。Array.prototype.reduce()も確かめて下さい。
   */
  reduce() {
  }

  /*
   *  アキュムレータに対して関数を適用し、隣り合う二つのtyped arrayの要素(右から左へ)は単一の値になります。Array.prototype.reduceRight()を確かめて下さい。
   */
  reduceRight() {
  }

  /*
   *  配列要素の順番を反転させます。— 最初の要素は最後になり、最後の要素は最初になります。Array.prototype.reverse()も確かめて下さい。
   */
  reverse() {
  }

  /*
   *  入力値を指定した配列から読み込み、typed array内に複数の値を格納します。
   */
  set(...args) {
    let arr = args[0] || [];
    let offset = args[1] || 0;

    arr.forEach((item, i) => {
      this.float32Array[(i + offset) * 2] = item;
    });
  }

  /*
   *  配列の一部を取り出して新しい配列を返します。Array.prototype.slice()も確かめて下さい。
   */
  slice() {
  }

  /*
   *  ある配列の少なくとも 1 つの要素が与えられたテスト関数を満たした場合にtrueを返します。Array.prototype.some()も確かめて下さい。
   */
  some() {
  }

  /*
   *  配列の要素をソートし、その結果を返します。Array.prototype.sort()も確かめて下さい。
   */
  sort() {
  }

  /*
   *  与えられた開始位置と終了位置の要素インデックスの新しいUint32Array オブジェクトを返します。
   */
  subarray() {
  }

  /*
   *  配列内で各インデックスに対する値を含む新しいArray Iteratorオブジェクトを返します。Array.prototype.values()を確かめて下さい。
   */
  values() {
  }

  /*
   *  配列と要素を表すローカライズされた文字列を返します。Array.prototype.toLocaleString()も確かめて下さい。
   */
  toLocaleString() {
  }

  /*
   *  配列と要素を表す文字列を返します。Array.prototype.toString()も確かめて下さい。
   */
  toString() {
    return this.float32Array.toString();
  }


  valueOf() {
    return this.float32Array;
  }

  /*
   * 配列内で各インデックスに対する値を含む新しいArray Iteratorオブジェクトを返します。
   */
  // @@iterator
}

/*
 *  要素一個あたりのバイト数を返します。Complex64Array の場合は8です。
 */
Complex64Array.BYTES_PER_ELEMENT = 8;

export default Complex64Array;
