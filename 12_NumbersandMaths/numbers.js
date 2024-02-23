const score = 400
//console.log(score)//Here we declare a number but we can't be sure whether the vlaue is truly a number.
//for this we use a property
const newScore = new Number(score)
console.log(newScore.toString().length)//With this we can conver numbers into strings.
console.log(newScore.toFixed(2))//With the help of toFixed() we can add extra 0 after point like 400.00 we can use this in E-Commerse website.

let addNumber = 245.95454
//console.log(addNumber.toPrecision(2))//Here toPrecision() prototype helps us to convert integer into significant numbers.
//While using toPrecision() we have to be carefull while giving a precisions
//if we have 245.95454 in a veraible and we proveide an precision of 2 then out first 2 number will be displayed and other are displayed in exponent form which is(2.5e+2).

const hgihNumber = 10000000
console.log(hgihNumber.toLocaleString('en-IN'))//Initially we if we use toLocalString() the numbers are shown in American style to conert it in Ind style use 'en-IN'