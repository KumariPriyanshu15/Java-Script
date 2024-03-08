const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const numbers = text.match(/\d+/g);


let totalAnnualIncome = 0;

if (numbers) {
   numbers.forEach(number => {
      totalAnnualIncome += parseInt(number, 10);
});
}
 
console.log('Total Annual Income:', totalAnnualIncome, 'euro');
