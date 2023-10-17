// slice and splice
const myarray = [0,1,2,3,4,5,6]
console.log("A" , myarray);

const myarr1 = myarray.slice(1,3);
console.log("B", myarr1)
console.log(myarray)

const myarr2 = myarray.splice(1,3);
console.log(myarr2);
console.log(myarray)
