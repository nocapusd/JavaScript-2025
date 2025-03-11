// #I2XsG6f
// - створити функцію яка обчислює та повертає площу
// прямокутника зі сторонами а і б

let area = (a,b) => (a * b)
console.log(area(15, 15));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let areCircle = (r) => (3.14 * r**2);
console.log(areCircle(3));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaCylinder = (r,h) => (2 * 3.14 * r * h)
console.log(areaCylinder(2,2));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let numbers = [1,2,3,4,5]

let arrayPrinter = (array) => {
    for (const element of array) {
        console.log(element);

    }
}

arrayPrinter(numbers)

// hOL6126
// - створити функцію яка створює ul з трьома елементами
// li. Текст li задати через аргумент всім однаковий

let printerUl = (text) => {
    document.write(`
            <ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>
        `)
}

printerUl('Hello World');

// - створити функцію яка створює ul з трьома елементами li.
//  Текст li задати через аргумент всім однаковий.
//  Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл)
// #gEFoxMMO

let printerUlWithTwoArgument = (text, amountList) => {
    document.write(`<ul>`)
        for (let index = 0; index < amountList; index++) {
            document.write(`
                <li>${text}</li>
            `)

        }
        document.write(`</ul>`)
}

printerUlWithTwoArgument('Hello World 2', 5)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів
//  (числа,стрінги,булеві), та будує для них список
let listOfArray = (array) => {
    document.write(`<ul>`)
        for (const item of array) {
            document.write(`
                <li>${item}</li>
            `)
        }
        document.write(`</ul>`)
}

listOfArray([10500, true, undefined, "qq"])

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів
// з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {name : "Nazar", id : 1, age : 18},
    {name : "Olya", id : 2, age : 30},
    {name : "Stepan", id : 3, age : 24},

];

let getArrayOfObjects = (array) => {
    for (const user of array) {
        document.write(`
            <div>name : ${user.name} | id : ${user.id} | age : ${user.age}</div>
        `)
    }
}

getArrayOfObjects(users);

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let minValue = (array) => {
    let min = array[0]
    for (const item of array) {
        if (item < min) {
            min = item
        }
    }

    return min
}

console.log(minValue([1,2,3,4,5,6,7,8,9,10]));

