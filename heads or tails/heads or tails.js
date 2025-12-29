
   alert("CLICK OK TO SPIN");
   alert( calcht());
   
   function calcht()
   {
     var ht=(((Math.random())*10)+1);
     ht=Math.floor(ht);
     if((ht%2==0))
     {
      return ("tails");
     }  
     else
      {
      return ("heads");
      }
   }