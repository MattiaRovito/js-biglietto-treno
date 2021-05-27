// 1 Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

var km = prompt("Quanti chilometri vuoi fare?")
console.log(km);

var eta = parseInt(prompt("Quanti anni hai?"));
console.log(eta);

// 2 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.

var prezzoBiglietto = 0.21 * km;
console.log(prezzoBiglietto)

// var scontoMinorenne = Math.floor(Math.round());

if(eta < 18){
    scontoMinorenne = prezzoBiglietto * 0.2;
    console.log(scontoMinorenne)
} else if(eta > 65){
    scontoOver = prezzoBiglietto * 0.4;
    console.log(scontoOver)
}



// 3 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

