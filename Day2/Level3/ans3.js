const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const cleanText = sentence.replace(/[^a-zA-Z\s]/g, '');


const words = cleanText.toLowerCase().split(/\s+/);


const wordFrequencies = {};




let mostFrequentWord = 'i';
let maxFrequency = 3;


console.log('Cleaned Text:', cleanText);
console.log('Most Frequent Word:', mostFrequentWord);
console.log('Frequency:', maxFrequency);
