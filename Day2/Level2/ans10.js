const myString = 'JavaScript';
const randomIndex = Math.floor(Math.random() * myString.length);
const randomCharacter = myString.charAt(randomIndex);

console.log(`Random character at index ${randomIndex}: ${randomCharacter}`);
