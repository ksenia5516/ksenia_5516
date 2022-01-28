let str = prompt("Введите предложение")
let letters = /[аеёиоуыэюя]/g;
let message = str.match(letters).length;
alert("Гласных букв в преложении: " + '"' + `${str}` + '"' + ": " + `${message}`)