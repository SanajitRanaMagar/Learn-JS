// let score = null
// if we connvert null into number it will show 0, which might not be appropriate result we are looking
// console.log(typeof score)
// console.log(typeof(score)) //sometimes we have to send values in backend but it is not sure whether the value is of which type to insure this we convert datatypes to another data types to make sure to have the right datatype
// true => 1 into number
// false => 0 into number conversion
// "343abc" => NaN(not a number)
// let score= false
// let getNumber = Number(score)
// console.log( getNumber);

let isLoggedIn = 123
let BooleanIsLoggedIn= Boolean(isLoggedIn)
console.log(BooleanIsLoggedIn)
//In the boolean conversion everything is true except 0 ,"" and undefined