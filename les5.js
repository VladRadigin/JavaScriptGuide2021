// Строки. Свойства. Методы.
let result;
const firstName = 'vlad';
const lastName = 'radygin';
const fullName = firstName + space + lastName;
const age = 20;
const space = ' ';
const greeting = 'Hello there!';

// Concatanation:
result = greeting + space + 'My name is' + space + firstName + space + lastName + '. I\'m ' + age + space + 'years old.';

// Escaping
result = "I like \"Star Wars\" movie";

// Propertis and Methods
result = fullName.length; // <= Свойство
result = firstName.concat(space, lastName); // <= Метод
result = fullName.toUpperCase(); // Создает новую строку с заглавными буквами.
result = fullname.toLowerCase(); // Создает новую строку с прописными буквами.
// Поиск символа в строке.
// Выводит первый совпавщий символ.
result = fullName.indexOf('v'); 
result = fullName.lastIndexOf('a'); // Выводит индекс последнего элемента.
result = fullName.charAt(0); // Находит символ по индексу.

const longString = 'Hello, I\'m a longer string and strong! :)';
result = longString.charAt(longString.length - 1); // Находит последний символ по индексу.

// substring()
result = greeting.substring(2, 4); // Извлечение подстроки из строки по индексам.

// slice()
result = greeting.slice(4, 9);
result = greeting.slice(-6);

// split()
// Разделяет строку на подстроки, используя разделитель,
// который указывается в качестве параметра метода.
result = longString.split(' ');
// Небольшой пример использования:
const colors = 'red, orange, blue, green, black, yellow';
result = colors.split(',');

// replace()
// Заменяет одну подстроку на другую, в исходной строке.
result = colors.replace('blue', 'pink');

// includes()
// Возвращает булево значение, если строка содержит другую строку.
result = colors.includes('white');


console.log(result);