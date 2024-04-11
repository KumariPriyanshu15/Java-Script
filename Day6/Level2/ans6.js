const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", 
"Hungary", "Ireland", "Japan", "Kenya"];

const newArr = [] 
for(const country of countries){ 
newArr.push(country, country.slice(0, 3).toUpperCase(),country.length) 
} 
console.log(newArr) 
