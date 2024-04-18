function findMax(a, b, c) {
    let max = a
    
    if (b > max) {
        max = b
    }
    if (c > max) {
        max = c
    }
return max
}

console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2)) 
