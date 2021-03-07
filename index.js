 

 function writeCards(names, event){
  const newArr = [];
   for (let i = 0; i < names.length; i++) {
    
    newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
     debugger;
      
   }
  return newArr;
  }
  //writeCards(['Lisa', 'Kaitlin', 'Jan'], 'surprise');


  function countDown(init){
    while (init >= 0){
      console.log(init);
      init--
    }
    
  }
countDown(10);