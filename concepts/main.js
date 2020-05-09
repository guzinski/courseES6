// Classes examples
class List {
    constructor() {
        this.items = [];
    }

    addItem (data) {
        this.items.push(data);
        console.log(this.items);
    };

}

class TaskList extends List {
    constructor () {
        super();
    }
}

const tasks = new TaskList;

document.getElementById("addTask").onclick = function () {
    tasks.addItem("New task");
};


// arrays handle examples
const arr = [1, 3, 4, 5, 8, 9];

console.log(arr);

// multiple each item by it's own index.
const newArr = arr.map(function (item, index) {
    return item * index;
});

console.log(newArr);

// Sum all elements
const sum = arr.reduce(function (total, next) {
    return total + next;
});

console.log(sum);

// return all even elesmnt in the array
const even = arr.filter(function (item) {
    return item % 2 === 0;
});

console.log(even);

// Try to find an elemnt in the array.
const find = arr.find(function (item) {
    return item === 2;
});

console.log(find);



//Arrow Functions
const arrowExample = arr.map(item => item*2);

console.log(arrowExample);


//To return an object with arrows

const test = () => ({name: "Luciano"});

console.log(test());


//Functions with default value
function sumValues(a = 3, b = 4) {
    return a + b;
}

console.log(sumValues(2));

console.log(sumValues());


// With Arrow

const sumArrow = (a = 3 , b = 4) => a + b;

console.log(sumArrow(5));
console.log(sumArrow());



// Destructuring

var obj = {
    name: "Luciano",
    age: 26,
    address: {
        city: "Porto Alegre",
        state: "Rs"
    }
}


const { name, age, address: { city }} = obj;


console.log(name);
console.log(age);
console.log(city);

//With function Parameters

function printNameAndAge({ name, age}) {
    console.log(name, age);
}


printNameAndAge(obj);




//REST
var user = {
    name1: "Luciano",
    age: 26,
    company: "Newwolf"
};

const { name1, ...rest } = user;


console.log(name1);
console.log(rest);

// REST with arrays

const arr1 = [1, 2, 3, 4, 5];

const [a, b, ...c] = arr1;

console.log(a);
console.log(b);
console.log(c);

//With functions

function sumRest(...params) {
    return params.reduce((total, next) => total + next);
}

function sumRest2(a, b, ...params) {
    return a + b + params.length;
}


console.log(sumRest(1, 2, 3, 4));

console.log(sumRest2(1, 2, 3, 4, 5, 6));



//Spread

const arr2 = [6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2];

console.log(arr3);


const user1 = {...user, name1: "Bruna"};

console.log(user1);

//Template literals Example use `` instead of "" or ''

console.log(`My name is ${user1.name1} and my age is ${user1.age}`);


//Short syntax

const userName = "Luciano";
const userAge = 26;

const user3 = {
    userName,
    userAge,
    company: "Newolf"
};

console.log(user3);


