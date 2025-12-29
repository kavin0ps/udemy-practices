
   var year=prompt("Enter a Year")
   
   function calcleap(year)
   {
   if ((year%4==0)&&(year%100!=0)||(year%400==0))
      {
    return "leap year";
   }
   else{
      return "not leap year";
   }
   }
   alert(calcleap(year));
