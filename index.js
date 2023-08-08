import { add, sub, multiply, divide } from "./common.js";

const input = process.argv.slice(2);

const addResult = add(Number(input[0]), Number(input[1]));
const subResult = sub(Number(input[0]), Number(input[1]));
const multiplyResult = multiply(Number(input[0]), Number(input[1]));
const divideResult = Math.round(divide(Number(input[0]), Number(input[1])));


console.log(addResult, subResult, multiplyResult, divideResult);
