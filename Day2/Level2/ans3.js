let value = '10';

if (typeof value === 'string' && Number(value) === 10) {
  console.log('The type and value are exactly equal to 10.');
} else {
  console.log('The type or value is not exactly equal to 10. Making it exactly equal...');
  value = Number(value);
  console.log('Now, the value is:', value);
}
