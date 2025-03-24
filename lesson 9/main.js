// #8Nmt60ZT
//
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.

const div = document.createElement('div')

div.classList.add('wrap')
div.classList.add('collapse')
div.classList.add('alpha')
div.classList.add('beta')

document.body.appendChild(div)

let cloneNode = div.cloneNode(true);

document.body.appendChild(cloneNode)

// #OPLI89c9G
// – Є масив:
let array = ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let htmluListElement = document.createElement('ul');

// #jeBqHV525U5
//
// – Є масив
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.


for (const element of coursesAndDurationArray) {
    let div =  document.createElement('div')
    div.innerText=`${element.title}, ${element.monthDuration}`

    document.body.appendChild(div)
}


// #Kx1xgoKy8

// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.

// Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.classList.add('item')

    let h1 = document.createElement('h1')
    h1.classList.add('heading')
    h1.innerText = element.title

    let p = document.createElement('p')
    p.classList.add('description')
    p.innerText = element.monthDuration

    div.append(h1,p)

    document.body.appendChild(div)
}

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)



// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами


for (const element of coursesArray) {
    let div =  document.createElement('div')
    div.classList.add('block')

    let title = document.createElement('h2')
    title.classList.add('title')
    title.innerText = element.title

    let monthDuration = document.createElement('div')
    monthDuration.classList.add('month-duration')
    monthDuration.innerText = element.monthDuration

    let hourDuration = document.createElement('div')
    hourDuration.classList.add('hour-duration')
    hourDuration.innerText = element.hourDuration

    let ul = document.createElement('ul')
    ul.classList.add('menu')

    for (const module of element.modules) {
        let li = document.createElement('li')
        li.innerText = module
        ul.appendChild(li)
    }

    div.append(title,monthDuration,hourDuration,ul)

    document.body.appendChild(div)

}