function bmi(height,weight){
    return BMI
}
let weight=40
let height=173

let BMI = weight/ (height * height)
console.log(bmi())
if (BMI<18.5){
    console.log("Underweight")
}
else if(BMI>18.5 && BMI<24.9){
    console.log("normal weight")
}
else if(BMI>25 && BMI<29.9){
    console.log("Overweight")
}
else if(BMI>=30 ){
    console.log("Obese")
}

