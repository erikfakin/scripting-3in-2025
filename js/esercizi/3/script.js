// Chiedi all'utente di inserire un numero
// scrivi poi nella console solo i numeri
// divisibili per 3 da 0 al numero inserito
// ----------------------------------------- //
// variabile ✅
// prompt() ✅
// for ✅
// if 

const numero = prompt("Inserisci un numero");

for(let i = 0; i < numero; i++){
    
    if(i % 3 == 0 && i % 2 == 0){
        console.log(i);
    }
}
