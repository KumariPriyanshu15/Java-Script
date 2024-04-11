const webTechs = ['HTML', 'CSS', 'JavaScript'];

const sassIndex = webTechs.indexOf('Sass');
if (sassIndex !== -1) {
   console.log('Sass is a CSS preprocess.');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}
