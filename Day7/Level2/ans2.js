function solveQuadEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        return [];
    }
}
const a1= 1;
const b1 = -3;
const c1 = 2;

const roots = solveQuadEquation(a1, b1, c1);
console.log("Roots are:",roots); 
