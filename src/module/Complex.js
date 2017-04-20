const imMap = new Map();

class ComplexClass {
  constructor(...args) {
    if(args[1] == null) {
      let float64Array = new Float64Array(1);
      float64Array[0] = args[0];
      this._float32Array = new Float32Array(float64Array.buffer);
    } else {
      this._float32Array = new Float32Array(2);
      this._float32Array[0] = args[0];
      this._float32Array[1] = args[1];
    }
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

  valueOf() {
    let float64Array = new Float64Array(this._float32Array.buffer);
    return float64Array[0];
  }
}

function complex(re, im) {
  let c;
  let reMap = imMap.get(im);

  if(reMap) {
    c = reMap.get(re);
    if(c) {
      return c;
    } else {
      c = new ComplexClass(re, im);
      reMap.set(re, c);
      return c;
    }
  } else {
    let c = new ComplexClass(re, im);

    let reMap = new Map();
    reMap.set(re, c);
    imMap.set(im, reMap);

    return c;
  }
}

const ComplexWrapper = function(re, im) {
  if(this) {
    return new ComplexClass(re, im);
  } else {
    return complex(re, im);
  }
}

// c instanceof Complex をtrueにするため
ComplexWrapper.prototype = ComplexClass.prototype;

export default ComplexWrapper;
