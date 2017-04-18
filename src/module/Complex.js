export default class Complex {
  constructor(...args) {
    this[0] = args[0] || 0;
    this[1] = args[1] || 0;

    // this.float32Array = new Float32Array(2);
    // this.float32Array[0] = this.re;
    // this.float32Array[1] = this.im;
  }

  abs() {
    return this.re * this.re + this.im * this.im;
  }

  arg() {
    return Math.atan2(this.im, this.re);
  }

  get re() {
    return this[0];
  }

  get im() {
    return this[1];
  }
}
