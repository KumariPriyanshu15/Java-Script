const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ];
  
  
  const firstCountry = countries[0];
  const firstWebTech = webTechs[0];
  
  
  const middleCountryIndex = Math.floor(countries.length / 2);
  const middleCountry = countries[middleCountryIndex];
  
  const middleWebTechIndex = Math.floor(webTechs.length / 2);
  const middleWebTech = webTechs[middleWebTechIndex];
  
 
  const lastCountry = countries[countries.length - 1];
  const lastWebTech = webTechs[webTechs.length - 1];
  
  console.log("First country:", firstCountry);
  console.log("Middle country:", middleCountry);
  console.log("Last country:", lastCountry);
  
  console.log("First web technology:", firstWebTech);
  console.log("Middle web technology:", middleWebTech);
  console.log("Last web technology:", lastWebTech);
  