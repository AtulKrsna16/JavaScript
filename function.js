function addTwoNumbers(number1 , number2) {
    return number1 + number2
}
const result = addTwoNumbers(3,5)
// console.log(result);

function addThreeNumbers(num1, num2, num3){
    return num1 + num2 + num3;
}
const add = addThreeNumbers(2,2,2)
// console.log(add);


function userLoggedIn(username ) {
    if(!username){
        console.log("user please login");
        return
    }
    
    return `${username } logged in`
} 
// console.log(userLoggedIn());



