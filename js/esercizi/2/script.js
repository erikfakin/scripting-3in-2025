// Chiedi all'utente di inserire un numero
// Poi scrivi nella console tutti i numeri
// interi da 0 al numero inserito.
// ------------------------------------- //
// prompt() ✅
// ciclo for 

const numero = prompt("Inserisci un numero", 0);

if(numero > 0){
    for(let i = 0; i < numero; i++){
        console.log(i);
    }
} else {
    for(let i = 0; i > numero; i--){
        console.log(i);
    }
}



