const sentence = 'You cannot end a sentence with because because because is a conjunction';
const Count = 'because';


const numberOfOccurrences = (sentence.match(new RegExp(Count, 'g')) || []).length;

console.log(`Number of "${Count}" occurrences: ${numberOfOccurrences}`);
