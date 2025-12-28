
   var kg=prompt("Enter The Weight(kgs)");
   var m=prompt("Enter The Height(m)");
   console.log(calcbmi(kg,m));
   alert("your bmi is " + calcbmi(kg,m));
   
   function calcbmi(kg,m)
   {
     var bmi=kg/(m*m);
      return bmi;
   }