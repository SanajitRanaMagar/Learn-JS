//Dates are objects which represents a single moment form 1970,jan-1.

// const myDate = new Date(2024,0,24)
// let myDate = new Date(2024,3,24,5,3)
let myDate = new Date("2024-03-16")
//console.log(typeof myDate);//Date is an object.
// console.log(myDate.toString())//Sat Feb 24 2024 01:36:50 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Sat Feb 24 2024 //it is just like a toString() but it own show the time.
// console.log(myDate.toJSON());//2024-02-24t01:38:54:425Z
//console.log(myDate.toLocaleString());//this gives the result in slases like 2/24/2024 , 1:45:26 AM
//console.log(myDate.toLocaleDateString());//this will show the restult without time 2/24/2024
// console.log(myDate)

//sometime we have to compare the date in porjects like quize and other, fot this we have to convert the date in miliseconds

let newDate= Date.now()//with the help of this we can get time in miliseconds.
// console.log(newDate)
// console.log(myDate.getTime())
// console.log(Math.floor(Date.now()/1000));//this method helps us to get time in seconds.
// console.log(newDate)
// console.log(newDate)
// console.log(myDate.getFullYear())//In this way we can get many other individual date

//we have anotehr interesting method which is localString()
//by using this we can customize our date in full form.
//where first we have to pass an argument and create an object and many more.

console.log(myDate.toLocaleString('default', {
    weekday:"long",
}))


