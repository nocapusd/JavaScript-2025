// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [123, false, true, [45345,345345,234234], {name: "Vasiliy"}, -324234, "Hello", undefined, NaN, "last"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let bookFirst = {title : 'The Lord of the Rings', pageCount : '1200 ', genre : 'fantasy'};
let bookSecond = {title : 'A Game of Thrones', pageCount : '694', genre : 'fantasy'};
let bookThird = {title : 'Jonathan Strange & Mr Norrell', pageCount : '1006', genre : 'fantasy'};

// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {title : 'The Lord of the Rings', pageCount : '1200 ', genre : 'fantasy', authors : [{name : "J.R.R. Tolkien", age : 81}]};
let book2 = {title : 'A Game of Thrones', pageCount : '694', genre : 'fantasy', authors : [{name :"J.R.R. Tolkien", age : 81}]};
let book3 = {title : 'Jonathan Strange & Mr Norrell', pageCount : '1006', genre : 'fantasy', authors : [{name : "Susanna Clarke", age : 65}]};

// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name : 'Vasiliy',
        username : "vas787",
        password : "567896vasya07"
    },
    {
        name : 'Anatoliy',
        username : "tolya8888",
        password : "pirat67472"
    },
    {
        name : 'Vasiliy',
        username : "vas787",
        password : "567896vasya07"
    },
    {
        name : 'Anton',
        username : "tosha52",
        password : "ubuntu575"
    },
    {
        name : 'Anna',
        username : "anna33",
        password : "annavanna343"
    },
    {
        name : 'Jake',
        username : "jz777",
        password : "jz777"
    },
    {
        name : 'Daniil',
        username : "dragonfire",
        password : "98464256d"
    },
    {
        name : 'Gleb',
        username : "glebtut001",
        password : "001glebtut"
    },
    {
        name : 'Viktor',
        username : "korneplod232",
        password : "vitya47"
    },
    {
        name : 'Nazar',
        username : "nocapusd",
        password : "89375324"
    },
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temps = [
    {
        day : "Monday",
        morningTemp : 7,
        afternoonTemp : 30,
        eveningTemp : 15
    },
    {
        day : "Tuesday",
        morningTemp : 5,
        afternoonTemp : 35,
        eveningTemp : 16
    },
    {
        day : "Wednesday",
        morningTemp : 7,
        afternoonTemp : 26,
        eveningTemp : 16
    },
    {
        day : "Thursday",
        morningTemp : 14,
        afternoonTemp : 38,
        eveningTemp : 18
    },
    {
        day : "Friday",
        morningTemp : 13,
        afternoonTemp : 29,
        eveningTemp : 17
    },
    {
        day : "Saturday",
        morningTemp : 11,
        afternoonTemp : 33,
        eveningTemp : 19
    },
    {
        day : "Sunday",
        morningTemp : 12,
        afternoonTemp : 26,
        eveningTemp : 15
    }

]

// Логічні розгалуження:

// #bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3

let x = 8;

if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

//#3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 8;

if (time >= 0 && time < 15) {
    console.log('first quarter')
} else if (time >=15 && time < 30) {
    console.log('second quarter')
} else if (time >=30 && time < 45) {
    console.log('third quarter')
} else if (time >= 45 && time < 60) {
    console.log('fourth quarter')
}

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 13;

if (day >=1 && day <= 10) {
    console.log('first half')
} else if (day >10 && day <= 20) {
    console.log('second half')
} else if (day > 20 && day <= 31) {
    console.log('third half')
}

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let week = +prompt('Enter the day of the week number:');

switch (week) {
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5:
        console.log('Today is Friday')
        break
    case 6:
        console.log('Today is Saturday')
        break
    case 7:
        console.log('Today is Sunday')
        break

    default:
        console.log('??????')
}


// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let firstNumber = 0;
let secondNumber = 0;


if (firstNumber > secondNumber) {
    console.log('First number > Second number' + ' ' +firstNumber)
} else if (secondNumber > firstNumber) {
    console.log('Second number > First number' + ' ' + secondNumber)
} else if (firstNumber === secondNumber) {
    console.log('Your numbers identical')
} else {
    console.log("??????")
}

// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

// Подивився відео вирішення

let variable = 0;

if (!variable) {
    variable = 'default';
    console.log(variable)
}

// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}

