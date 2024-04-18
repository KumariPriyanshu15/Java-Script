const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", 
"Hungary", "Ireland", "Japan", "Kenya"];



 const newArr= countries.filter(countries=>countries.includes('land'));

if (newArr.length) {
  console.log(newArr);
} else {
  console.log("All these countries are without land");
}

