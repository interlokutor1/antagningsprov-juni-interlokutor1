

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
let personer = [
        {
            name: "Samuel",
            age: 18
        },
        {
            name: "Mikael",
            age: 58
        },
        {
            name: "Carl XVI Gustav",
            age: 79
        },
        {
            name: "Engelbrekt Engelbrektson",
            age: 630
        },
        {
            name: "Snorre Sturlasson",
            age: 846
        }
    ]

    function skrivUtÖver30(array){
        for(let i = 0; i < array.length; i++){
            if(array[i].age > 30)
                console.log(array[i].name);
        }
    }

    skrivUtÖver30(personer);

}

module.exports = { uppg8 };
