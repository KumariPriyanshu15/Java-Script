let countries = ['USA', 'Canada', 'Mexico'];

let ethiopiaIndex = countries.indexOf('Ethiopia');

if (ethiopiaIndex !== -1) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}
console.log(countries);
