let float32Array = new Float32Array(2);

class Complex {
  constructor(...args) {
    this.re = args[0] || 0;
    this.im = args[1] || 0;

    float32Array[0] = this.re;
    float32Array[1] = this.im;
  }

  abs() {
    return this.re * this.re + this.im * this.im;
  }

  arg() {
    return Math.atan2(this.im, this.re);
  }
}

Complex.re = function(c) {
  return c.re;
}

Complex.im = function(c) {
  return c.im;
}

export default Complex;
