function sumOfNumbers(no) {
    if (no < 1) {
        return "write a positive number greater than 0"
    }
let sum = 0;
    for (let i = 1; i <= no; i++) {
        sum += i;
    }
    return sum;
} 
console.log(sumOfNumbers(5)); 