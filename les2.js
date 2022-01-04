// Типы данных.
// Динамическая типизация - одной и той же переменной
// можно присвоить данные разного типа.
// Ссылочные типы данных всегда возвращают объект!
let x = 'Something...';
console.log(x);
x = 47;
console.log(x);

// Primitive data types:
// String
const someText = 'Some text...';
console.log(typeof someText);
// Number
const someNumber = 47;
console.log(typeof someNumber);
// Boolean
const someBool = true;
console.log(typeof someBool);
// Null
const someNull = null;
console.log(typeof null);
// Undefined
let someUnder;
console.log(typeof someUnder);
// Symbol
const someSym = Symbol();
console.log(typeof someSym);


// Reference data types - objects:
// Array
const someArray = [ 'red', 'blue', 'black' ];
console.log(typeof someArray);
// Object Literal
const someObj = { first: 1, second: 2, third: 3 };
console.log(typeof someObj);
// Function
const someFunc = function() {};
console.log(typeof someFunc);
// Date
const someDate = new Date();
console.log(typeof someDate);