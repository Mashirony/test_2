'use strict';

let money = prompt("Ваш бюджет на месяц?");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let question1 = prompt("Введите обязательную статью расходов в этом месяце"),
    question2 = prompt("Во сколько обойдется?"),
    question3 = prompt("Введите обязательную статью расходов в этом месяце"),
    question4 = prompt("Во сколько обойдется?");

alert("бюджет на 1 день = " + appData.budget / 30);