
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
   
  ];

 module.exports = countries;
  


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
   
  ];
  module.exports = webTechs;

const countries = require('./countries');
const webTechs = require('./web_techs');

console.log('Countries:', countries);
console.log('Web Technologies:', webTechs);

  