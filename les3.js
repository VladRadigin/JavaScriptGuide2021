// Явное преобразование типов.
// Conversion To String

// String()
let x = String(47);
x = String(2 + 2);
x = String(true);
x = String(new Date()); // Выводит более человеческий формат времени.
x = String([ 'one', 'two', 'three' ]);

// toString()
// Немного другой формат преобразования, но результат тот же.
x = (96).toString();

console.log(x);
console.log(typeof x);
console.log(x.length); // Свойство выводящее кол-во символов в строке.
// P.S. Если у переменной нет свойства - .length, то будет вызвано undefined.



// Conversion To Number

// Number()
let y = Number(3.141592);
y = Number(true); // false
y = Number(null);
y = Number('text'); // NaN - Not a Number (невозможно определить как число)

// parseInt()
// parseFloat()
y = parseInt('128');
y = parseFloat('3.1415');

console.log(y);
console.log(typeof y);
console.log(y.toPrecision(3));
// .toPrecision() - метод позволяющий указывать, сколько знаков выводить.
// Можно указывать сколько знаков после запятой будет выведено.



// Неявное преобразование типов.
const a = '5';
const b = '3';
const z = a - b;
// Любая арифмитическая операция кроме плюса,
// приведет к int/


console.log(z);
console.log(typeof z)