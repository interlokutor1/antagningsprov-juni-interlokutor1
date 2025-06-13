function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

     function placeraTal(array){
      let bigEven = [];
      let smallOdd = [];
      let other = [];
      
      for(let tal of array){
        if(tal > 10 && tal % 2 === 0)
          bigEven.push(tal);
        else if(tal < 10 && tal % 2 === 1)
          smallOdd.push(tal);
        else
          other.push(tal);
      }

      let objektMedArrayer = {
        array1: bigEven,
        array2: smallOdd,
        array3: other
      };

      return objektMedArrayer;
    }
    
    placeraTal(numbers);

    
  
  }
  
  module.exports = { uppg10 };
  
