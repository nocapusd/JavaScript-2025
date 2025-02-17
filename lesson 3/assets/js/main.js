// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(` <div>Hello World!</div> `)
}

// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello world! ${i}</div>`);
}


// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;

while (i < 20) {
    document.write(`<h1>Something text</h1>`)
    i++
}

// #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let x = 0
while (x < 20) {
    document.write(`<h1>Task ${x}</h1>`)
    x++
}

// #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону

// Подивився відео

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li> `)
}
document.write(`</ul>`)

// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон



let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
            image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://static.vecteezy.com/system/resources/thumbnails/038/777/188/small_2x/ai-generated-of-tea-cup-coffee-against-transparent-background-free-png.png'
    },
];

for (let product of products) {
    document.write(`
        <div class="product-card">
        <h3 class="product-title">Title: ${product.title} <span>Price: ${product.price}</span></h3>
        <img src="${product.image}" alt="" class="product-image">
        </div>
    `)
}

// #4WrHwFTEop0
// є масив
//  за допомоги циклу вивести:

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//  - користувачів зі статусом true

for (let user of users) {
    if (user.status === true) {
        console.log(user)
    }
}


console.log("")

//  - користувачів зі статусом false

for (let user of users) {
    if (user.status === false) {
        console.log(user)
    }
}

console.log("")

//  - користувачів які старші за 30 років


for (let user of users) {
    if (user.age > 30) {
        console.log(user)
    }
}






