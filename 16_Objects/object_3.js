//We are studing the basic concept of object de-structuring

const course ={
    coursename:"JS course",
    courseprice:999,
    courseInstructor:"Sanajit"
}
//to access the objest's key and value we use dot or bracket method
//course.courseInstructor or course["courseInstructor"]
//But some time we have to use this object at multiple place,it will be hectic to use dot or bracket method so we use object de-structure

const {courseInstructor} = course
console.log(courseInstructor)//This the syntax of using de-structuring of objects.


//for general information objects are sent to the backend in the form of jeson
//for basic information we can say that API is an backend process, for example : in restaurant the menu is the documentation of API and the other process of prepration of making the food and serving to the table is the work of API
//json is like an object but the name is not declared and the key and values are both in string .