const countries = ['Albania', 'Bolivia', 'Ethiopia'];
const newArr = countries.filter(country => country.endsWith('ia'));

if (newArr.length ) {
  console.log(newArr);
} else {
  console.log("These are countries ending without 'ia'");
}
