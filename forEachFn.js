let array = [2, 3, 4]
array.forEach(function(element, index, array){
    console.log(index, element, array);
})

//same for arrow funtion 
array.forEach((element, index, array) => {
    console.log("arrow funtion :- ",index, element, array);
})

const names = ["Krishan", "Balram", "Shyam"]
names.forEach((element)=> {
    console.log(element.toUpperCase());
})

//map and for each are same 
let array1 = [2, 3, 4]
array.map((element, index, array1) => {
    console.log(element, index, array1);  //result will always same
})

names.map((hero) => {
    console.log(hero.toUpperCase()); // result will always same
})


// filter 
const endsWithAm = names.filter((hero)=>{
    return hero.endsWith('am')
})
console.log(endsWithAm);

// reduce function 
const shoppingCartBill = [20, 30, 40]
const sumOfCartBill = shoppingCartBill.reduce((prev,curr) => prev + curr, 0)
console.log(sumOfCartBill);
