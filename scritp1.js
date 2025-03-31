/*🏆 Snack 1 - Somma due numeri in modi diversi
Crea una funzione dichiarativa chiamata sommaNumeri che accetta due numeri e restituisce la loro somma.

Definisci la stessa funzione come espressione di funzione (assegnata a una variabile).

Riscrivi la funzione con la sintassi delle arrow functions. */

function sommaNumeri(n1, n2){
  return n1 + n2 
}

const somma = function(n1, n2){
  return n1 + n2
}

const sommaArrow= (n1, n2) => n1 + n2;

console.log(sommaNumeri(2,3))
console.log(somma(4,5));
console.log(sommaArrow(10,20));

/* 🏆 Snack 2 - Calcola il cubo di un numero
Crea una arrow function chiamata cubo che accetta un numero e restituisce il suo cubo in una sola riga.*/

const cuboNumero = (n1) => n1 * n1 * n1;
console.log(cuboNumero(2))

/* 🏆 Snack 3 - Esegui una funzione matematica
Definisci una funzione calcola che accetta tre parametri: due numeri e una funzione operatore (callback).

La funzione deve eseguire l'operazione fornita sui due numeri.

Esempio di utilizzo:

js
Copia
const sottrai = (a, b) => a - b;
const dividi = (a, b) => a / b;

console.log(calcola(10, 3, sottrai)); // 7
console.log(calcola(10, 2, dividi));  // 5 */

const sottrarre = (a, b) => a - b;
const dividre = (a, b) => a / b;
const moltiplicare = (a, b) => a * b;
const sommare = (a, b) => a + b;


const calcola = (a, b, operatore) => operatore(a,b)

console.log(calcola(10, 4, moltiplicare))

/* 🏆 Snack 4 - Funzione che avvia un timer
Scrivi una funzione creaPromemoria che accetta un tempo in millisecondi e restituisce una nuova funzione.

Quando chiamata, questa nuova funzione avvia un setTimeout che stampa "Ricorda di fare una pausa!" dopo il tempo specificato. */

function creaPromemoria( tempo ){

  
  const promemoria = setTimeout(() => console.log("Ricorda di fare una pausa!"), tempo)

  return promemoria
}

creaPromemoria( 1000 )

/* 🏆 Snack 5 - Stampa un messaggio ogni 2 secondi
Crea una funzione stampaOgniDueSecondi che accetta un messaggio e lo stampa ogni 2 secondi.

(Nota: Dovrai fermarlo manualmente con clearInterval in un altro script se necessario!) */

const stampaOgniDueSecondi = (messaggio) => setInterval(() => console.log(messaggio), 2000)
  
// const intervalId = stampaOgniDueSecondi("ciao");

// setTimeout(() => clearInterval(intervalId), 6000);

/*🏆 Snack 6 - Contatore decrementale con setInterval
Definisci una funzione creaContatoreDecrescente che accetta un numero e un intervallo di tempo in millisecondi.

La funzione avvia un setInterval, decrementando il numero e stampandolo fino ad arrivare a 0. */

const creaContatoreDecrescente = (numero, millisecondi) =>{
  const contatore = setInterval(() => {
    if(numero > 0){
      console.log(numero--)
    } else {
      clearInterval(contatore)
      console.log("fine")
    }
  }, millisecondi)
}

// creaContatoreDecrescente(5, 1000)

/*  Snack 7 - Interrompi un timer dopo un certo tempo
Crea una funzione avviaEArresta che accetta un messaggio, un intervallo e un tempo massimo di esecuzione.

Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo massimo. */


const avviaEArresta = (messaggio, intervallo, tempoMax) => {
  const stampamessaggio = setInterval(() => console.log(messaggio), intervallo)
  setTimeout(() => clearInterval(stampamessaggio) , tempoMax);
}


// avviaEArresta("barbaresco", 1000, 3000);

/* 🎯 Snack 8 (Bonus) - Conta alla rovescia con un messaggio finale
Scrivi una funzione contoAllaRovesciaConMessaggio che accetta un numero n e un messaggio finale.

Deve stampare il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero.

Quando arriva a 0, stampa il messaggio finale.

Esempio di utilizzo:

js
Copia
contoAllaRovesciaConMessaggio(5, "Il tempo è finito!"); */

const contoAllaRovesciaConMessaggio = (numero, messaggioFinale) => {
  const timer = setInterval(() => {
    if(numero > 0){
      console.log(numero--)
    } else {
      clearInterval(timer)
      console.log(messaggioFinale)
    }
  }, 1000)
}

// contoAllaRovesciaConMessaggio(10, "buon anno");

/* 🎯 Snack 9 (Bonus) - Esegui una sequenza di operazioni con ritardi diversi
Scrivi una funzione eseguiInSequenza che accetta un array di operazioni (funzioni) e un array di tempi di intervallo.

Ogni operazione deve essere eseguita con il ritardo specificato nell'array di tempi corrispondente.

Esempio di utilizzo:

js
Copia
eseguiInSequenza(
  [
    () => console.log("Prima operazione"),
    () => console.log("Seconda operazione"),
    () => console.log("Terza operazione")
  ],
  [1000, 3000, 5000]
); */

const eseguiInSequenza = (operazioni, intervalli) =>{
  operazioni.forEach((operazione, index) => { 
    setTimeout (operazione, intervalli[index])
  });
}

// eseguiInSequenza(
//   [
//     () => console.log("Prima operazione"),
//     () => console.log("Seconda operazione"),
//     () => console.log("Terza operazione")
//   ],
//   [1000, 3000, 5000]
// ); 

/*🎯 Snack 10 (Bonus) - Limitare l'esecuzione di una funzione
Scrivi una funzione creaLimiter che accetta una funzione e un tempo limite.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

Esempio di utilizzo:

js
Copia
const limitedLogger = creaLimiter(() => console.log("Funzione eseguita!"), 3000);

limitedLogger(); // ✅ "Funzione eseguita!"
limitedLogger(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(limitedLogger, 3500); // ✅ "Funzione eseguita!" (dopo 3.5 secondi)
 */

const creaLimiter = (funzione, tempoLimite) =>{
 
  let tempoUltimaEsecuzione = 0;

  
  return function(){
    let ora = Date.now();
    if (ora - tempoUltimaEsecuzione >= tempoLimite){
      tempoUltimaEsecuzione = ora;
      funzione()
    } else {
      tempoUltimaEsecuzione = ora;
      console.log( "funzione ancora non disponibile")
    }
  }

}

const limitedLogger = creaLimiter(() => console.log("Funzione eseguita!"), 2000);
limitedLogger(); // ✅ "Funzione eseguita!"
limitedLogger(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(limitedLogger, 3500); // ✅ "Funzione eseguita!" (dopo 3.5 secondi)