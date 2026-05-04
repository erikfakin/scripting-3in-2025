const eta = prompt("Inserisci la tua eta'");

if(eta){
    console.log("Eta:", eta);
}

if(eta >= 18){
    console.log("Maggiorenne.");
}else{
    console.log("Minorenne.");
}

if(eta < 7){
    console.log("Vai in asilo.");
} else if(eta < 14){
    console.log("Vai alle elementari.");
} else if(eta < 18){
    console.log("Vai alle medie.");
} else{
    console.log("Hai finito le scuole d'obbligo.");
}

const pulsante = prompt("Premi un pulsante");

// if(pulsante == 'a'){
//     console.log("Hai premuto 'a'");
// } else if(pulsante == 'b'){
//     console.log("Hai premuto 'b'")
// } 

switch (pulsante) {
    case 'a':
        console.log("a");
    break;
    case 'b':
        console.log("b");
    break;
    case 'c':
        console.log("c");
    break;

    case 'd':
        console.log("d");
    break;

    default:
        console.log("Pulsante non registrato!");
    break;
}