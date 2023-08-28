/* 
! To Do:

- [] comment important things
- [] make testTexter function

*/

import {tests} from "./tests.js";
import {testFunction} from "./testFunction.js";
import { lorensDreamtexter } from "./texterFunction.js";

import chalk from "chalk";
const log = console.log




//invoke testFunction form testFunction.js its take 2 parameters 
//1. parameter : tests array (in the below the test array from tests.js)
//2. parameter : cleaning function  (in the below the cleaning function is trimAndReplaceAsteriskWithDash)
//example : testFunction(tests,trimAndReplaceAsteriskWithDash)

export const texter = function(inputText, lineKeeperSymbol, unchangeableStringsVariable){
    return lorensDreamtexter(inputText, lineKeeperSymbol, unchangeableStringsVariable)
}

/*
This function below is used to perform tests on the texter function. 
It requires an input text and an expected text as arguments. 
The function then checks if the output of the texter function matches the expected text and reports the result.
*/

//export const testTexter = function (tests,texterFunction) {
//   return testFunction(tests,texterFunction)
//}

export const testResult = function () {
    return testFunction(tests,lorensDreamtexter)
}








