// Ciclo for

for(let i = 0; i < 11; i++){
    console.log("Numero:", i);
}

// Ciclo while
let a = 23;
console.log("Ciclo while");
while(a > 0){
    console.log("A: ", a);
    a = a - 1;
}

console.log("Ciclo for");
for(a = 23; a > 0; a--){
    console.log("A: ", a);
}

//
let input = "exit";
while(input != "exit"){
    input = prompt("Cosa vuoi fare?");
    if(input == "correre"){
        console.log("Stai correndo!");
    }
    console.log("Hai scelto di fare", input);
};

do{
    input = prompt("Cosa vuoi fare?");
    if(input == "correre"){
        console.log("Stai correndo!");
    }
    console.log("Hai scelto di fare", input);

} while(input != "exit");