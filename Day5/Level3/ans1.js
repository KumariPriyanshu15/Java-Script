const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);
console.log("Sorted ages:", ages);


const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log("Minimum age:", minAge);
console.log("Maximum age:", maxAge);


let medianAge;
const middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
    medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2;
} else {
    medianAge = ages[middleIndex];
}
console.log("Median age:", medianAge);


const sum = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sum / ages.length;
console.log("Average age:", averageAge);


const range = maxAge - minAge;
console.log("Range of ages:", range);


const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);
console.log("Difference between min and average:", minDiff);
console.log("Difference between max and average:", maxDiff);


