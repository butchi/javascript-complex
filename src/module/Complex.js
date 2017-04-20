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

  toString() {
    const re = this.re;
    const im = this.im;

    if(re === 0) {
      if(im === 0) {
        return '0';
      } else if(im === 1) {
        return 'i';
      } else if(im === -1) {
        return '-i';
      } else {
        return `${im}i`;
      }
    } else if(im === 0) {
      return `${re}`;
    } else if(im < 0) {
      return `${re}-${Math.abs(im)}i`;
    } else {
      return `${re}+${im}i`;
    }
  }
}
