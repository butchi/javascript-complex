const c__0__0 = new Complex(0, 0);
const c__1__0 = new Complex(1, 0);
const c__0__1 = new Complex(0, 1);
const c__3__4 = new Complex(3, 4);

let uint32Array = new Uint32Array(10);
let complex64Array = new Complex64Array(10);

uint32Array.set([5,3,8], 2);
complex64Array.set([c__3__4, c__0__1, 5], 2);

console.log(uint32Array.toString());
console.log(complex64Array.toString());

console.log(complex64Array.re);
console.log(complex64Array.im);

console.log(complex64Array.getItem(2).toString());

const c1 = Complex(1,2);
const c2 = Complex(3,4);
const c3 = Complex(1,2);
const c4 = new Complex(1,2);
const c5 = new Complex(1,2);

console.log(c1 === c2);
console.log(c1 === c3);
console.log(c1 === c4);
console.log(c4 === c5);

console.log(Complex(Complex(1,2).valueOf()).toString());
