function generateRandomMacAddress() {
    const characters = '0123456789ABCDEF';
let macAddress = ''; 
for (let i = 0; i < 6; i++) {
       const part = characters[Math.floor(Math.random() * characters.length)];
        macAddress += part;
if (i < 5) {
            macAddress += ':';
        }
    }
return macAddress; 
}
const randomMac = generateRandomMacAddress();
console.log(randomMac);

