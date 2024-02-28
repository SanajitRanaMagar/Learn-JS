//singleton - 
//We have first type to create an object an which is : object.create
//this is known as constructer methode from which we get a  singleton objects.


//another type is object literals.

const mySum = Symbol("key1")//to use an symbol in an objects we have to first declare an symbol outside an object and only then we can use symbol inside the object using square brackett
// console.log(typeof mySum)
const myobj = {
    name : "Sanajit",
    [mySum] : "mySum1",
    email : "ranasanajit@gmail.com",
    "full name" : "Sanajit Rana Magar",
    id : 192830,
    location:"Bhakrapur",
    isLoggedIn:["Monday","Sunday"],

}//in the objects the key section is an string.
// console.log(typeof myobj[mySum]);
//console.log(myobj.email)
//console.log(myobj["email"])//why we should use this type of access property is because sometime the key is declared directly as a string it doesnot have to be string
// in background,such type of value can only be accessed by nameofobj.["key"] property.
//console.log(myobj["full name"])
//These are the two types, form which we access the key and value of an objects.
myobj.id = "Sanajit12355"
//Object.freeze(myobj)//this property helps us to stop any further changes with the values of the objects.
myobj.id = "wakker"
// console.log(myobj);

myobj.greeting = function () {

    console.log("Hello! my greeting to you all")
}
console.log(myobj.greeting());
myobj.greetingTwo = function () {
    
    console.log(`Hello! my greeting to you all from ${this["full name"]}`)//string interpolation
}
console.log(myobj.greetingTwo());//Here we use this to give reference from the same object .