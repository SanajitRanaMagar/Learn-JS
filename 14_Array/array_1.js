//Array enables storing of multiple value of different datatype.
//It can be changed unlike the string 
const myArr = [1,2,3,4,5,6,7]
// console.log(myArr[0])
// myArr[0] =[10] 
// console.log(myArr.length);

// const newArr = myArr.unshift(10)//Unshift is condsider useless because if we unshift any value into an array the value will be stored at the first due to wwhich the original positions of other vlaue will also shift.
// console.log(newArr);
// console.log(myArr);

// console.log(myArr.pop());
// console.log(myArr)
//console.log(myArr.includes(10));//we can find whether the vlaue is in an array or not.
//console.log(myArr.indexOf(10));//if there is outside value then it will return -1.
//const mna1 = myArr.join()//Join() property helps us to convert the the array into strings.
//console.log(typeof mna1);
//console.log(myArr);

//slice and splice
console.log("A ",myArr)

const newArr = myArr.slice(1,3)//the slice property doesnot effect the original property because it is given the copy of vlaue which we already know throw stack storage
console.log(newArr);
console.log("B",myArr)

const oldArr = myArr.splice(1,3)//splice() property effect the original array because the original data is given which we know from heap storage. 
console.log(oldArr);
console.log("C",myArr)


