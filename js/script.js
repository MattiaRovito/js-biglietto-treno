// 1 Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// 2 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.

// 3 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).




var km = prompt("Quanti chilometri vuoi fare?")
// console.log(km);

var eta = parseInt(prompt("Quanti anni hai?"));
// console.log(eta);



var prezzoBiglietto = 0.21 * km;
// console.log(prezzoBiglietto)


if(eta < 18){
    prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * 20 / 100)).toFixed(2);
    // console.log(prezzoBiglietto)
} else if(eta > 65){
    prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * 40 / 100)).toFixed(2);
    // console.log(prezzoBiglietto)
}


document.getElementById('km').innerHTML += km;
document.getElementById('eta').innerHTML += eta;
document.getElementById('prezzoBiglietto').innerHTML += prezzoBiglietto;
