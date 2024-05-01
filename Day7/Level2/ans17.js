function randomHexaNumberGenerator() {
    const characters = '0123456789ABCDEF';
let hexadecimalnumber = ''; 
for (let i = 0; i < 6; i++) {
        const digit = characters[Math.floor(Math.random() * characters.length)];
        hexadecimalnumber += digit;
    }
return hexadecimalnumber;
}
const randomHexNumber = randomHexaNumberGenerator();
console.log(randomHexNumber); 

