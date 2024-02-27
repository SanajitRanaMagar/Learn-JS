const marvalHeros = ["Ironman","Thor","Captain"]
const dcHeros = ["Superman","Batman","Flash"]

// console.log(dcHeros);

// marvalHeros.push(dcHeros)
//console.log(marvalHeros);//[ 'Ironman', 'Thor', 'Captain', [ 'Superman', 'Batman', 'Flash' ] ] here the second array is considered as a single veriable .
//console.log(marvalHeros[3][2])

//const newArr = marvalHeros.concat(dcHeros)
//console.log(newArr);//this property helps us to add the value of array wiht other array unlike the push property

//const secondArr = [...marvalHeros, ...dcHeros]
//console.log(secondArr);//This is an spread property which is just like a concat property but it is used widely than concat.

const anotherArr = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]]
// console.log(anotherArr);

const realArr = anotherArr.flat(1)//In the flat property we have to declare up to which depth we want to flat the value .We can also use infinity.But declaration is necessary.
// console.log(realArr)

console.log(Array.isArray("Sanajit"))
console.log(Array.from("Sanajit"));//From property helps us to convert an undefined value into a array
console.log(Array.from({name:"Sanajit"}))//By doing this we will get empty array becasue from property cannot direct convert an objects.We have to declare whether we want to convet a key or an value. 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
//If we have a multiple veriables or arrays wecan convert it into array by of() property of array.