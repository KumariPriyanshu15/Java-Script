const fruits = ['banana', 'orange', 'mango', 'lemon'];
const newarray = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  newarray.push(fruits[i]);
}

console.log(newarray);
