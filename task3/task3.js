function* fibonaccigenerator(n) {
  let current = 0,
    next = 1;

   for (let i = 0; i < n; i++) {
    yield current;
    [current, next] = [next, current + next];
  }
}
var res = fibonaccigenerator(7);

// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

////////////////////////////////////////////////////////////

function* fibonacciMaxGenerator(maxValue) {
  let current = 0,
    next = 1;

  while (current <= maxValue) {
    yield current;
    [current, next] = [next, current + next];
  }
}
var res = fibonacciMaxGenerator(7);

console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
