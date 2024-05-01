function sumOfEven(no) {
    if (no< 1) {
        return "write a positive number greater than 0.";
    }
var sum = 0;
    for (var i = 2; i <= no; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumOfEven(5));

