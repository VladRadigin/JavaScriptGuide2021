// ~~~ШАБЛОННЫЕ СТРОКИ~~~
const brand = 'Toyota';
const model = 'Camry';
const color = 'grey';
const year = '2019';

let carHTML;

// Старый подход (до ES6)
carHTML = '<h3>' + 'Car Description' + '</h3>' + 
'<ul>' + 
'<li>Brand: ' + brand + '</li>' +
'<li>Model: ' + model + '</li>' + 
'<li>Color: ' + color + '</li>' +
'<li>Year: ' + year + '</li>' +
'</ul>';


// Новый подход. Шаблоны литералы.
carHTML = `

    <h3>Car Description</h3>
    <ul>
        <li>Brand: ${brand}</li>
        <li>Model: ${model}</li>
        <li>Color: ${color}</li>
        <li>Year: ${year}</li>
        <li>Tax: ${year < 2000 ? '20%' : '5%'}</li>
    </ul>

`;

document.body.innerHTML = carHTML;
