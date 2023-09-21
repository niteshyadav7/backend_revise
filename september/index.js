import process from "process";

import { addtion, substraction, multiplication } from "./componet.js";

import division from "./componet.js";

const args = process.argv.slice(2);
console.log(args);

console.log(addtion(parseInt(args[0]), parseInt(args[1])));
console.log(substraction(parseInt(args[0]), parseInt(args[1])));
console.log(multiplication(parseInt(args[0]), parseInt(args[1])));

console.log(division(parseInt(args[0]), parseInt(args[[1]])));
