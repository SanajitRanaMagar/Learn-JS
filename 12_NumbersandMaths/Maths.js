//console.log(Math.abs(-4))
//Here abs refers to absolute value where it converts every negative  value into positive value
//console.log(Math.round(4.943))//this property rounds up the number and display as significant number like if the input is 2.99 we get 3
//console.log(Math.ceil(4.999))//this is another type of round() where we get the upper value
//console.log(Math.floor(4.999))//this is also a type of rounf() where we get the lower vlaue

console.log(Math.random())//Math.random() gives us the random values from 0 to 1
console.log(Math.random()*10 + 1)//this syntax helps us to get numbers which are above 1
console.log(Math.floor(Math.random()*10 + 1))

let max=20
let min=10
console.log(Math.floor(Math.random() * (max-min + 1) + min))
