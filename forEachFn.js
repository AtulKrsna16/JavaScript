let array = [2, 3, 4]
array.forEach(function(element, index, array){
    console.log(index, element, array);
})

//same for arrow funtion 
array.forEach((element, index, array) => {
    console.log("arrow funtion :- ",index, element, array);
})