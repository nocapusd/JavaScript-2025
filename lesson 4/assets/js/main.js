let arr = [1,234324,true,undefined, 'Hello']


// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area(a,b) {
    return a * b
}

let areaResult = area(15,15)
console.log(areaResult)

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(radius) {
    return 3.14 * radius * radius
}

let circleAreaResult = circleArea(5);
console.log(circleAreaResult);

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(radius, height) {
    return 2 * 3.14 * radius * height
}

let cylinderAreaResult = cylinderArea(5, 10);
console.log(cylinderAreaResult);

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент



function arrayPrinter(array) {
    for (let item of array) {
        console.log(item)
    }
}

arrayPrinter(arr);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function paragraphPrinter(text) {
    document.write(`
        <p>${text}</p>
    `)
}


paragraphPrinter('Hello World!');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function listPrinter(listText) {
    document.write(`
        <ul>
        <li>${listText}</li>
        <li>${listText}</li>
        <li>${listText}</li>
         </ul>
        
    `)

}

listPrinter('Text in list')

// #0Kxco1edSN
// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл) та виводить його через document.write

function smartListPrinter(textList, amount) {
    document.write(`<ul>`)
    for (let list = 0; list < amount; list++) {
        document.write(`
            <li>${textList}</li>
        `)
    }
    document.write(`</ul>`)
}

smartListPrinter('Smart text list', 5)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write

function arrayDOM(array) {
    document.write(`<ul>`)
    for (let arrayElement of array) {
        document.write(`
            <li>${arrayElement}</li>
        `)
    }
    document.write(`</ul>`)

}

arrayDOM(arr)

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з
// наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let  users = [
    {id : 1, name : "Nazar", age : 18},
    {id : 2, name : "Olya", age : 21},
    {id : 3, name : "Vasya", age : 19},
    {id : 4, name : "Dima", age : 23},

]

function arrayOfObject(arrayOfObject) {
    document.write(`<div class="container">`)
    for (let item of arrayOfObject) {
       document.write(`
            <h3 class="object">Name : ${item.name} | ID : ${item.id} | Age : ${item.age}</h3>
       `)
    }
    document.write(`</div>`)
}

arrayOfObject(users)

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function minValueArray(array) {
    let minValue = array[0];
    for (let number of array) {
        if (number < minValue) {
            minValue = number
        }
    }


    return minValue
}

console.log(minValueArray([1,2,3,4,5,6,7,8,9,10]));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sum(arr) {
    let x = 0;
    for (const number of arr) {
        x = x + number
    }

    return x
}

console.log(sum([1,10,16]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]












