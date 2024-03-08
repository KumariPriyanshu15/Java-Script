const sentence = 'You cannot end a sentence with because because because is a conjunction';
const wordToCount = 'because';


const numberOfOccurrences = (sentence.match(new RegExp(wordToCount, 'g')) || []).length;

console.log(`Number of "${wordToCount}" occurrences: ${numberOfOccurrences}`);
