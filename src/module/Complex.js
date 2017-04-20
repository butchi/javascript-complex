export default class Complex {
  constructor(...args) {
    this._float32Array = new Float32Array(2);
    this._float32Array[0] = args[0];
    this._float32Array[1] = args[1];
  }

  abs() {
    return this.re * this.re + this.im * this.im;
  }

  arg() {
    return Math.atan2(this.im, this.re);
  }

  get re() {
    return this._float32Array[0];
  }

  get im() {
    return this._float32Array[1];
  }
}
