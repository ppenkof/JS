function solution(n) {
  return function inner(a) {
    return n + a;
  };
}
let add7 = solution(7);

console.log(add7(2));

console.log(add7(3));
