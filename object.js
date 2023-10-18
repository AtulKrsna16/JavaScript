const course = {
    course : "js in hindi",
    price : "999",
    courseinstructor : "hitesh"
}
// console.log(course.courseinstructor);
const {courseinstructor : instructor} = course;
console.log(instructor);