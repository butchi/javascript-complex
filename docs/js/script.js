let uint32Array = new Uint32Array(10);
let complex64Array = new Complex64Array(10);

uint32Array.set([5,3,8], 2);
complex64Array.set([5,3,8], 2);

console.log(uint32Array.toString());
console.log(complex64Array.toString());

console.log(c.arg());
