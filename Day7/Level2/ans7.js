function capitalizeArray(arr) {
    var capitalizedArray = []; 
    for (var i = 0; i < arr.length; i++) {
        var capitalizedElement = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
        capitalizedArray.push(capitalizedElement); 
    }
    return capitalizedArray; 
}

var originalArray1 = ["apple", "banana", "cherry"];
var capitalizedArray = capitalizeArray(originalArray1)
console.log(capitalizedArray);