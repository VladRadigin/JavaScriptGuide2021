// ~~~ПРИОРИТЕТ ОПЕРАТОРОВ~~~
// P.S. Сначала вычисляем значения выражения, а затем присваиваем результат переменной.
const x = 2 + 10 / 2;
console.log(x); // => 7
const y = 10 - x > 10;
console.log(y); // => false

// ~~МНОЖЕСТВЕННОЕ ПРИСВАИВАНИЕ~~
let a = b = 10 + 5 - 3 * 4;
console.log(a, b);