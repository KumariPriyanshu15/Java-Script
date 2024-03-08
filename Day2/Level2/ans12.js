const sentence = 'You cannot end a sentence with because because because is a conjunction';

const first = sentence.indexOf('because');

const second = sentence.indexOf('because', first + 1);
const extracted = sentence.substr(first, second + 'because'.length);

console.log(extracted);
