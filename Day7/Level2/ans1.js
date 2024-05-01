function solveLinEquation(a, b, c) {
    if (a === 0 && b === 0) {
        console.log("Invalid linear equation: Both coefficients 'a' and 'b' cannot be zero.");
        return;
    } else if (a === 0) {
        let y = -c / b;
        console.log("The solution is: y =", y);
    } else if (b === 0) {
        let x = -c / a;
        console.log("The solution is: x =", x);
    } else {
        let x = -c / a;
        let y = (-a * x - c) / b;
        console.log("The solution is: x =", x, "and y =", y);
    }
}
solveLinEquation(2, 3, -6);

