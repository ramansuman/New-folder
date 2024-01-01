const a = {};
const b = { key: 'b' };
const c = { key: 'b' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
console.log(b==c)