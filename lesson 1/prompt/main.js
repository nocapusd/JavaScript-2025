// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let userName = prompt("Як тебе звати?");
let userMiddleName = prompt("По батькові?");
let userAge = prompt("Скільки тобі років?");

let userResult = `${userName} ${userMiddleName}`;
let userAgeResult = `${userAge}`;

console.log("Привіт " + userResult + "!");
console.log(userAgeResult + " Гарний вік!");