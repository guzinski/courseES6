// Importo with Alias
import { sum as sumFunction, sub } from "./functions";

// import with export default
import multiplyNumbers from "./functions2";

// import all as an object
import * as inc from "./functions3";

//import axios

import axios from "axios";

console.log(sumFunction(1, 2));
console.log(sub(4, 2));

console.log(multiplyNumbers(3, 3));


console.log(inc.plus1(5));

console.log(inc.minus1(3));



const promise1 = () => new Promise((resolve, reject) => 
    setTimeout(() => resolve("OK"), 2000)
);

// ES6 promise handle
promise1()
    .then(console.log)
    .catch(error => console.error(error));

// ES8 promise handle

const executePromise = async () => {
    console.log(await promise1());
    console.log(await promise1());
    console.log(await promise1());
    
    console.log("Finished");
}

executePromise();


class Api {
    static async getUserInfo(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response);
        } catch(error) {
            console.error("Api Error");
            // console.error(response);
        }
    }
}


Api.getUserInfo("guzinski");

Api.getUserInfo("guzinskirkjfkjdsahfk");

