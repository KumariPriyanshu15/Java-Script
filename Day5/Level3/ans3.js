let middleCountries;
if (countries.length % 2 === 0) {
    const midIndex1 = countries.length / 2 - 1;
    const midIndex2 = countries.length / 2;
    middleCountries = [countries[midIndex1], countries[midIndex2]];
} else {
    const midIndex = Math.floor(countries.length / 2);
    middleCountries = [countries[midIndex]];
}
console.log("Middle country(ies):", middleCountries)