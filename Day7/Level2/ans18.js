function userIdGenerator() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let userIdGenerator = ''; 
for (let i = 0; i < 6; i++) {
        const digit = characters[Math.floor(Math.random() * characters.length)];
        userIdGenerator += digit;
    }
return userIdGenerator;
}
const randomuserIdGenerator = userIdGenerator();
console.log(randomuserIdGenerator);