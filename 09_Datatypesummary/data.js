//We have comparision datatype
// <,>,<=,>=,==,=== in this way we can compare any datatype
//While comparing the data we must make sure that we are using the same datatype

//console.log("2" > 1)
//console.log("02" > 1)//here the value will be true because the JS will automatically convert the string into number.

// console.log(null > 0)
// console.log(null >= 0)
// console.log(null == 0)
//here we can find that the equal comparision operator works different from the greater and equal to operator
//The Greater and equal to operator converts the null into number, as a 0


//now we have to types of datatypes they are : Premitive and reference(Non - Premitive)Datatype
//under premitive datatype we have strings,numbers,Boolean,bigInt,symbols,null and undefined are premitive datatype
//In premitive datatype the store value can be accessed in copied form 
const idName = "sanajit"
const userId = 23425
const userGander = true
const userTemprature = null
const userCity=undefined;
const userPassword = 212134545n
const userSymbol= Symbol()

//under non premitive datatype we have : Objects,Array and functions  
//In non-premitive datatype the store value can be accessed in reference form.

let obj={
    key:Value,
}
//everything which is in inside the curly bracket are objects

let fun=function name(params) {
    
}
//this is function
let arr=["Sanajit","Aashish","Kunal","Sachin"]
//this is array