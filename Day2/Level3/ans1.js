const sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';


const lowercaseSentence = sentence.toLowerCase();

const numberOfOccurrences = (lowercaseSentence.match(/\blove\b/g) || []).length;

console.log(`The word 'love' appears ${numberOfOccurrences} times in the sentence.`);
