const sentence = 'You cannot end a sentence with because because because is a conjunction';

const firstBecauseIndex = sentence.indexOf('because');

const secondBecauseIndex = sentence.indexOf('because', firstBecauseIndex + 1);
const extractedPhrase = sentence.substr(firstBecauseIndex, secondBecauseIndex + 'because'.length);

console.log(extractedPhrase);
