

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
function sort(array){
        for(let tal of array){
            if(tal % 2 === 0)
                console.log(tal + ' och sen ordet "jämnt"');
            else if(tal % 2 === 1)
                console.log(tal + ' och sen ordet "udda"');
        }
    }
  
    let siffror = [1, 4, 6, 2, 7, 3];

    sort(siffror);
  
}

module.exports = { uppg9 };
