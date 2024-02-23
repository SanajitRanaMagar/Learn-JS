// let userName = "Sanajit"
// console.log(userName)
// console.log(`Hi! this is a string.Studying by ${userName} with the help of Youtube`)

let gameName = new String('Sanajit is my friend my')//THIS IS ANOTHER WAY TO CREATE STRINGS
//console.log(gameName)
// console.log(gameName[0])
// console.log(gameName[3])
// console.log(gameName.length)
//console.log(gameName.slice(0,9))//In slice prototype, we have to declare from where to start and where to end not including the end index.
//here space is also count as a index so it has a position number.

let newString = 'my'
const indexOfFirst = gameName.indexOf(newString)
// console.log(`This is the first index of '${newString}' is ${indexOfFirst}`)

// console.log(`This is the second index of '${newString}' is ${gameName.indexOf(
//     newString,indexOfFirst + 1,
// )}`,
// );
//syntax of the indexof() prototype is: indexof(substring,position)
//if the string is not found in the mother string it will return -1.
//In this way we also have lastindexOf() prototype which shows the string from the last.
// console.log(`this is the last string ${newString.lastIndexOf(newString)}`)
// console.log(gameName.toLowerCase())
// console.log(gameName.toUpperCase())


//We have another types of prototype call trim which helps us to remove the white spot which is space from the strings
//console.log(gameName.trim())
//console.log(gameName.trimStart())//by using this we can select from which side we should trim
//console.log(gameName.trimEnd())

//We have concat()//we use concat() to add another string alongside wiht the selected string.
// console.log(gameName.concat('',newString))


//another impoortant prototype is split()
console.log(gameName.split(0,3))

//we have replace() prototype
console.log(gameName.replace("Sanajit","i am"))
// console.log(gameName(newString,"i am"))