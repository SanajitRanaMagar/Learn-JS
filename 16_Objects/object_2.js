//this is another way to create an object which is construction methodes

const wideuser = new Object()//this is an singleton object
//const wideuser={}//this is an non singleton objects.

wideuser.id = "sanajit1234"
wideuser.name ="Sanajit"
wideuser.isLoggedIn = false
// console.log(wideuser)

const regularUser = {
    email : "sanajit@gamil.com",
    fullname : {
        userFullName:{
            firstname : "sanajit",
            lastname:"rana",
        }
    }
}

//console.log(regularUser.fullname.userFullName.firstname)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1 , obj2}
//const obj3=Object.assign({},obj1,obj2)//this property works like an concat but here we can also declare a target under which we can store the given objects. 
//Empty bracket is called parenthesis,which is known as target and other objects are known as source.
//console.log(obj3);
const obj3={...obj1,...obj2}
console.log(obj3)

const userInfo =[

    {
        id:1,
        email:"h@dontnknowgmail.com"
    },
    {
        id:1,
        email:"h@dontnknowgmail.com"
    },
    {
        id:1,
        email:"h@dontnknowgmail.com"
    },
    {
        id:1,
        email:"h@dontnknowgmail.com"
    },
   
]
userInfo[1].email

console.log(wideuser)

console.log(Object.keys(wideuser))//Ins this way we can access the keys or values in an array form from which we can apply any loops and so on
console.log(Object.values(wideuser))

console.log(Object.entries(wideuser));//This prototype helps us to get a the pair of key and value in an array format.


//In many cases we throw a loop in an object from which we get an value.But sometime the obtained value might not exist in the object. In this types of situation we use
console.log(wideuser.hasOwnProperty('isLoddegIn'))