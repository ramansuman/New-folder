function* generate() {
    yield "php"
    yield "love"
    yield "no love"
}
let g = generate();
console.log(g.next());
console.log(g.return())
// console.log([...g]);
// console.log(g.next());
// console.log(g.next());
console.log(Boolean(-1))