
   var kg=prompt("Enter The Weight(kgs)");
   var m=prompt("Enter The Height(m)");
   console.log(calcbmi(kg,m));
   console.log(calcbmi(kg,m));
   var bmiv= calcbmi(kg,m);
   function calcbmi(kg,m)
   {
     var bmi=kg/(m*m);
     bmi=Math.floor(bmi);
      return bmi;
   }
   alert(bmiCalculator(bmiv));
   function bmiCalculator(bmiv) {
   
   
   if (bmiv<18.5){
    return "Your BMI is " + bmiv + ", so you are underweight.";
   }
   
   if (bmiv>18.5&&bmiv<24.9){
    return "Your BMI is " + bmiv + ", so you have a normal weight.";
   }
   
   if (bmiv>24.9){
    return "Your BMI is " + bmiv + ", so you are overweight.";
   }
}