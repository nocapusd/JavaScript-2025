// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи
// JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

let buttonRemover = document.getElementsByClassName('buttonRemover')[0];

buttonRemover.addEventListener('click', (e) => {
    document.getElementById('text').remove()
})


//#j693ca8
//
// – створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


let buttonAge = document.forms.formAge.buttonAge
buttonAge.addEventListener('click', (event) => {
    event.preventDefault();

    if (document.forms.formAge.inputAge.value >= 18) {
        alert('Your age is good brother!')
    } else {
        alert('No!')
    }
})



//
// #ymAmN2xJ
//
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
//
// При натисканні на кнопку зчитати данні з
// полів, та вивести об’єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом


let formInner = document.forms.formInner;

formInner.addEventListener('submit', function (event) {
    event.preventDefault()

    let nameValue = formInner.name.value;
    let surnameValue = formInner.surname.value;
    let ageValue = formInner.age.value

    let obj = {nameValue, surnameValue, ageValue}

    let target = document.querySelector('.target');
    target.innerHTML = `Your name :  ${obj.nameValue}, Your surname : ${obj.surnameValue}, Your age :  ${obj.ageValue}`


})



//#2VaLt4vDczH
//
// є сторінка, на якій є блок,
// я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let currentNumber = +localStorage.getItem('number') || 0;
currentNumber++
localStorage.setItem('number', currentNumber)

document.querySelector('.blockSum').innerText = currentNumber

//#LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
sessionsList.push(`Date : ${new Date().getDate()} Time : ${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()}`)
localStorage.setItem('sessionsList', JSON.stringify(sessionsList))

//#Jg0gPO00
//
// створити конвертор ваги з кг в фунти.
// данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const converterInput = document.querySelector('#inputKilos')
let result = document.querySelector('.result');

converterInput.oninput = function (e) {
    result.innerText = `pounds =  ${converterInput.value * 2.2}`
}

// #RbQGnH5DuC
//
// В localStorage зберігаються масиви.
// Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
    let arrayParse = JSON.parse(localStorage.getItem(arrayName)) || [];

    if (objToAdd) {
        if (typeof objToAdd === 'object' ) {
            arrayParse.push(objToAdd)
            localStorage.setItem(arrayName, JSON.stringify(arrayParse))
        }  else {
            throw new Error('There is not a object')
        }
    }

}

addToLocalStorage('array1', )

// #kUSgFqWY
//
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій вмиіст ячеєк.
//
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.


let formTable = document.forms['tableGeneratorForm'];

formTable.addEventListener('submit', function (event) {
    event.preventDefault()

    let trValue = +formTable.tr.value;
    let tdValue = +formTable.td.value;
    let textValue = formTable.text.value;
    let table = document.getElementById('table');


    for (let i = 0; i < trValue; i++) {

        let htmlTableRowElement = document.createElement('tr');
        table.appendChild(htmlTableRowElement)


        for (let j = 0; j < tdValue; j++) {
            let htmlTableCellElement = document.createElement('td');
            htmlTableCellElement.innerText = textValue
            htmlTableRowElement.appendChild(htmlTableCellElement)

        }
    }
})


//#bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн,
// але !!! зміна ціни відбуваєтіться тільки на перезавантаження,
// які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд – нічого не відбувається

let uahPrinter = +localStorage.getItem('uahPrinter') || 100;
let lastUpdate = +localStorage.getItem('lastUpdate') || 0;

let currentTime = Date.now();

if (currentTime - lastUpdate >=10000) {
    uahPrinter+=10;
    localStorage.setItem('uahPrinter', uahPrinter);
    localStorage.setItem('lastUpdate', currentTime)
}

let selectorUahPrinter = document.querySelector('.uahPrinter');
selectorUahPrinter.innerText = +localStorage.getItem('uahPrinter');






// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантажені сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

let cars = [];

for (let i = 0; i < 100; i++) {
    let car = {
        id : i+1,
        model : `BMW`,
        color : i % 2 === 0 ? 'Red' : 'Blue'
    }

    cars.push(car)
}

let carsHTML = document.querySelector('.cars');





