// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)



function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

const usersArray = [
    new User(1, 'Andriy', 'Shevchenko', 'andriy.shevchenko@gmail.com', '+380971234567'),
    new User(2, 'Oksana', 'Lysenko', 'oksana.lysenko@gmail.com', '+380972345678'),
    new User(3, 'Yaroslav', 'Kovalchuk', 'yaroslav.kovalchuk@gmail.com', '+380973456789'),
    new User(4, 'Olena', 'Bondarenko', 'olena.bondarenko@gmail.com', '+380974567890'),
    new User(5, 'Mykola', 'Tkachenko', 'mykola.tkachenko@gmail.com', '+380975678901'),
    new User(6, 'Iryna', 'Kravchenko', 'iryna.kravchenko@gmail.com', '+380976789012'),
    new User(7, 'Taras', 'Melnyk', 'taras.melnyk@gmail.com', '+380977890123'),
    new User(8, 'Svitlana', 'Koval', 'svitlana.koval@gmail.com', '+380978901234'),
    new User(9, 'Volodymyr', 'Boyko', 'volodymyr.boyko@gmail.com', '+380979012345'),
    new User(10, 'Kateryna', 'Moroz', 'kateryna.moroz@gmail.com', '+380970123456'),
];




// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати,
// залишивши тільки об'єкти з парними id (filter)

const filteredUsers = usersArray.filter(user => user.id % 2 === 0)
console.log(filteredUsers);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id.по зростанню(sort)

const sortedUsers = usersArray.sort((user1, user2) => {
    return user1.id - user2.id
})

console.log(sortedUsers);

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'Nazar', 'Kruhliakov', 'koko05vip@gmail.com', '+380973366367', ['Tv']),
    new Client(2, 'Andriy', 'Shevchenko', 'andriy.shevchenko@gmail.com', '+380971234567', ['Laptop', 'Mouse']),
    new Client(3, 'Oksana', 'Lysenko', 'oksana.lysenko@gmail.com', '+380972345678', ['Phone']),
    new Client(4, 'Yaroslav', 'Kovalchuk', 'yaroslav.kovalchuk@gmail.com', '+380973456789', ['Tablet', 'Keyboard']),
    new Client(5, 'Olena', 'Bondarenko', 'olena.bondarenko@gmail.com', '+380974567890', ['Monitor']),
    new Client(6, 'Mykola', 'Tkachenko', 'mykola.tkachenko@gmail.com', '+380975678901', ['Printer', 'Scanner']),
    new Client(7, 'Iryna', 'Kravchenko', 'iryna.kravchenko@gmail.com', '+380976789012', ['Camera']),
    new Client(8, 'Taras', 'Melnyk', 'taras.melnyk@gmail.com', '+380977890123', ['Headphones', 'Speakers']),
    new Client(9, 'Svitlana', 'Koval', 'svitlana.koval@gmail.com', '+380978901234', ['Smartwatch']),
    new Client(10, 'Volodymyr', 'Boyko', 'volodymyr.boyko@gmail.com', '+380979012345', ['Router', 'Modem']),
];

console.log(clients);

// #8abtVjRv
// - Взяти масив(Client[] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)



const sortedClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);

console.log(sortedClients);


//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об'єкт функції:
// --drive() - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function carPrinter(model, manufacturer, year_of_manufacture, maximum_speed, engine_capacity,) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year_of_manufacture = year_of_manufacture;
    this.maximum_speed = maximum_speed;
    this.engine_capacity = engine_capacity;

}

carPrinter.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maximum_speed} на годину`);
};

carPrinter.prototype.info = function () {
    for (const key of this) {
        console.log(key, this[key]);

    }
};

carPrinter.prototype.increaseMaxSpeed = function (newSpeed) {
    return this.maximum_speed += newSpeed;
};

carPrinter.prototype.changeYear = function (newValue) {
    return this.year_of_manufacture = newValue;
};

carPrinter.prototype.addDriver = function (driver) {
    return this.driver = driver;
};

const car = new carPrinter('BMW', 'Germany', 2023, 250, 4)

// #5kla3yMpgp
//   - (Те саме, тільки через клас)
//   Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.додати в об'єкт функції:
// --drive() - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class CarPrinterClass {
    constructor(model, manufacturer, year_of_manufacture, maximum_speed, engine_capacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year_of_manufacture = year_of_manufacture;
        this.maximum_speed = maximum_speed;
        this.engine_capacity = engine_capacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maximum_speed} на годину`);
    }

    info() {
        for (const key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maximum_speed += newSpeed;
    }

    changeYear(newValue) {
        this.year_of_manufacture = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

const carClass = new CarPrinterClass('BMW', 'Germany', 2023, 250, 4);


//
// #zg6Fifnqig
//   - створити класс / функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

const cinderellas = [
    new Cinderella('Cinderella', 18, 33),
    new Cinderella('Cinderella', 18, 33),
    new Cinderella('Cinderella', 22, 34),
    new Cinderella('Cinderella', 22, 35),
    new Cinderella('Cinderella', 23, 36),
    new Cinderella('Cinderella', 24, 37),
    new Cinderella('Cinderella', 25, 38),
    new Cinderella('Cinderella', 28, 39),
    new Cinderella('Cinderella', 29, 40),
    new Cinderella('Cinderella', 30, 41),
    new Cinderella('Cinderella', 31, 42),
    new Cinderella('Cinderella', 32, 43),
]

class Prince {

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe
    }

}

const prince = new Prince('Nazar', 18, { value: 'shoe', size: 34, color: 'gold' })

const selectedCinderella = cinderellas.filter(cinderella => cinderella.footSize === prince.shoe.size)

console.log(selectedCinderella);

// #gsKLAsNWM
// * Через Array.prototype.створити власний foreach

Array.prototype.myForEach = function (callback) {
    let index = 0;
    for (const item of this) {
        callback(item, index, this);
        index++;
    }
};

[1, 2, 3, 4, 5].myForEach(value => console.log(value));

// #gsKLAsNWM
// * Через Array.prototype.створити власний filter

Array.prototype.myFilter = function (callback) {
    const arr = [];
    for (const item of this) {
        if (callback(item)) {
            arr.push(item)
        }
    }

    return arr
};

[1, 2, 3, 4, 5].myFilter(value => console.log(value));






