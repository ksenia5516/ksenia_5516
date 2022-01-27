'use strict'

let firstName = (prompt('Введите вашу фамилию'));
while (!firstName.length || !isNaN(firstName)) {
    firstName = prompt("Введите же скорее вашу фамилию буквами!!!");
}
let naMe = (prompt('Введите ваше имя'));
while (!naMe.length || !isNaN(naMe)) {
    naMe = prompt("Введите же скорее ваше имя буквами!!!");
}
let middleName = (prompt('Введите ваше отчество'));
while (!middleName.length || !isNaN(middleName)) {
    middleName = prompt("Введите же скорее ваше отчество буквами!!!");
}

let aGe = (prompt('Введите ваш возраст'));
while (isNaN(aGe) || !aGe.length) {
    aGe = prompt("Введите возраст цифрами!!!");
}

let gender = (confirm(' Ваш пол мужской?'));
let g;
let pension;

let fio = 'Ваше ФИО: ' + `${firstName} ` + `${naMe} ` + `${middleName}`;
let age = 'Ваш возраст в годах: ' + aGe;

let calcFive = 'Через 5 лет вам будет: ' + ((Number(aGe) + Number(5)));

let calcAge = 'Ваш возраст в днях: ' + (Number(aGe) * Number(365));

g = gender ? "Мужской" : "Женский";

if (g === "Мужской" && aGe >= 65 || g === "Женский" && aGe >= 55) {
    pension = "Вы на пенсии :)";
} else {
    pension = "Вы не на пенсии :)";
}

alert(fio + "\n" + age + "\n" + calcFive + "\n" + calcAge + "\n" + "Ваш пол: " + `${g}` + "\n" + pension);