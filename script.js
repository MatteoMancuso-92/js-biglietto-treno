const distanza = parseInt(prompt('Quanti chilometri devi percorrere?'));
console.log('distanza' , distanza);

const età =  parseInt(prompt('Quanti anni hai?'));
console.log('età' , età);

const prezzoKM = (0.21);
console.log('prezzoKM' , prezzoKM);

let prezzobiglietto = distanza * prezzoKM;


if (età >= 18 && età <= 65) {
    prezzobiglietto
    document.getElementById('prezzo').innerHTML = prezzobiglietto;
    console.log(prezzobiglietto);
}


if (età > 65) {
    let prezzobiglietto1 = prezzobiglietto - (prezzobiglietto * 40 / 100);
    document.getElementById('prezzo').innerHTML = prezzobiglietto1;
    console.log(prezzobiglietto1);
} 

if (età < 18) {
    let prezzobiglietto2 = prezzobiglietto - (prezzobiglietto * 20 / 100);
    document.getElementById('prezzo').innerHTML = prezzobiglietto2;
    console.log(prezzobiglietto2);
} 