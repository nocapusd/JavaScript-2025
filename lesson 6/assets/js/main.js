// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';

function stringToarray(str) {
    let arr = str.split(' ');
    console.log(arr);
}

stringToarray(str)

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let arrStr = arr.map(value => value.toString());
console.log(arrStr);


// #5hqyKTfmc
// - створити функцію sortNums(array, direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// sortNums(nums, 'ascending') // [3,11,21]
// sortNums(nums, 'descending') // [21,11,3]

let nums = [11, 21, 3];
function sortNums(array, direction) {
    if (direction === 'ascending') {
        array.sort((num1, num2) => num1 - num2)
    }
    if (direction === 'descending') {
        array.sort((num1, num2) => num2 - num1)
    }

    return array
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// #yo06d74c1C
// - є масив
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let descendingCoursesArray = coursesAndDurationArray.sort((item1, item2) => item2.monthDuration - item1.monthDuration);

let filteredCoursesByMonthDuration = descendingCoursesArray.filter((value) => {
    if (value.monthDuration > 5) {
        return value
    }
})

console.log(filteredCoursesByMonthDuration)

let newCoursesArray = filteredCoursesByMonthDuration.map((value, index) => {
    return {
        id: id = index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
})

console.log(newCoursesArray)

// #bolvdlhP
//  описати колоду карт(від 6 до туза без джокерів)



const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['6', '7', '8', '9', '10', 'Jack', 'Qeen', 'King', 'Ace'];

const cards = [];

for (const suit of suits) {
    for (const value of values) {
        const card = ({ cardSuit: suit, cardValue: value })
        if (suit === 'hearts' || suit === 'diamonds') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }

        cards.push(card)
    }
}

console.log(cards)

// - знайти піковий туз
console.log(cards.find((card) => card.cardValue === 'Ace' && card.cardSuit === 'spades'))
// - всі шістки
console.log(cards.filter((card) => card.cardValue === '6'))
// - всі червоні картиs
console.log(cards.filter((card) => card.color === 'red'))
// - всі буби
console.log(cards.filter((card) => card.cardSuit === 'diamonds'))

// - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'clubs' && values.indexOf(card.cardValue) >= 3))

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let cardsBySuits =  cards.reduce((acum, card) => {

    switch (card.cardSuit) {
        case 'spades':
            acum.spades.push(card);
            break
        case 'diamonds':
            acum.diamonds.push(card);
            break
        case 'clubs':
            acum.clubs.push(card);
            break
        case 'hearts':
            acum.hearts.push(card);
            break

    }

    return acum
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})

console.log(cardsBySuits)


