//stack and heap are the storage container where all the value are stored 

//In stack, Primitive datatype are stored which provides copy of that value

// let userName = "Sanajit"
// let userSecondName = userName
// userSecondName = "SanajitRanaMagar"

//console.log(userName);//The result will be same as before
//console.log(userSecondName);//The result will be the new one//this happens the userName veriable provides copy value so that the change we made was in copy value

let user={
    userId:343553,
    userCity:"Kathmandu",
}//Here the veriable is decleared in stack but the value is stored in heap 
let userTwo=user // Here the userTwo get a reference vlaue from the heap 
userTwo.userId = "who is this?"//change
console.log(userTwo);//when the changes are made in this veriable the original value will also be changed because when the value was asked in userTwo the heap has given the original value which is referece so the change are seen in both sides
console.log(user);