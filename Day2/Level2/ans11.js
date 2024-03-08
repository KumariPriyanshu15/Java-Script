for (let i = 1; i <= 5; i++) {
    let output = '';
    for (let j = 0; j < 4; j++) {
        if (j === 0) {
            output += `${i} `;
        } else {
            output += `${Math.pow(i, j)} `;
        }
    }
    console.log(output.trim());
}
