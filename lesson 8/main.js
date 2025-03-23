// #iz6emEsP2BA

let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let newCoursesAndDurationArray = coursesAndDurationArray.map((course,index) => ({...course, id: index + 1}));

console.log(newCoursesAndDurationArray);

// #AiN5CoUQ

// Створити функцію, яка робить глибоку копію об’єкту.

// Додати перевірки на undefined, null, NaN.

// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції,які в нього були до цього моменту.

let user = {
    name: 'Ivan',
    age: 25,

    sayHello() {
        console.log(Hello ${this.name})
    },

    userBase() {
        console.log(name: ${this.name}, age: ${this.age})
    }
}

function copyObject(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            let value = obj[key];
            if (typeof value === 'function') {
                const functionClone = value.bind({})
                functions.push({functionClone, key});
            }
        }

        console.log(functions);


        let stringify = JSON.stringify(obj);
        let parse = JSON.parse(stringify);

        for (const func of functions) {
            parse[func.key] = func.functionClone;
        }
        return parse
    }

    throw new Error('Object is undefined !!!!!');
}

console.log(copyObject(user));