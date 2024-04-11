const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
   
  ];
  
  const midIndex = Math.ceil(countries.length / 2);
  
  console.log("First half of countries:", countries.slice(0, midIndex));
  console.log("Second half of countries:",countries.slice(midIndex) );
  