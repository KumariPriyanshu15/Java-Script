function removeItem(array){
    array.pop();
    return array;
}
let array=[1,2,3,4,5];
array=removeItem(array);
console.log(array)
