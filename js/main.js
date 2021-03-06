/**Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
Consigli del giorno:
- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- Individuate gli elementi di cui avete bisogno per realizzare il programma. */


$(document).ready(function () {

    //Referenze
    var archivio = [];
    var size = 5;
    
    //Generazione numeri random del PC
    while (archivio.length < size) {

        var num = randomNumber(1, 100);
            
        if (! archivio.includes(num)) {  
            archivio.push(num);
        }
    }

    alert("I numeri che devi ricordare sono: " + archivio);
    
    //Log di debug
    console.log(archivio);


    //Timing 30 secondi
    setTimeout(function () {

        //Referenze
        var tries = ""; 
        var numUser = [];
        var sameNum = [];
        var diffNum = [];


        for (var i = 0; i < 5; i++) {

            var tries = parseInt( prompt("Inserisci i numeri che hai letto").trim());

            while ( isNaN(tries) || numUser.includes(tries) ) {
                var tries = parseInt( prompt("Inserisci i numeri che hai letto").trim());
            }

            if (! numUser.includes(tries)) {  
                numUser.push(tries);
            } 

            if (archivio.includes(tries)) {  
                sameNum.push(tries);
            } else {
                diffNum.push(tries);  
            }
        }
        
        //Resoconto numeri in comune e non
        document.getElementById("remember").innerHTML = "I numeri in comune sono: " + sameNum + ". Hai ricordato " + sameNum.length + " numeri."

        document.getElementById("not-remember").innerHTML = "I numeri non in comune sono: " + diffNum + ". Non hai ricordato " + diffNum.length + " numeri."

        //Log di debug
        //console.log(numUser);  
        //console.log(sameNum);
        //console.log(diffNum);
    }, 3000);

});


//Funzione random numbers
function randomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min); //per includere il numero massimo
}









