   //Take a Number-Battle of the bands
   let bandNumber = 0;

   const takeNumber = (bandName) => {
      bandNumber++;
      return `${bandNumber}. ${bandName}`
      
   }
        
   
   const scum = takeNumber("Galactic Scum")
   console.log(scum)
   
   const under = takeNumber("Underdogs")
   console.log(under)
   