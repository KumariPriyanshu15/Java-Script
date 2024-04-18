const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB'];
let newArr= webTechs[0]; 
for (let i = 1; i < webTechs.length; i++) {
  if (webTechs[i].length > newArr.length) {
    longestWord = webTechs[i];
  }
}

console.log(longestWord);