/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function confrontation(a, b) {
//   if (a > b) {
//       return a;
//   } else {
//       return b;
//   }
// }

// let num1 = 3
// let num2 = 5

// let risultato = "Il numero più grande è " + confrontation(num1, num2)
// console.log(risultato)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num = 7
// function confrontation(a) {
//   if (a !== 5) {
//     return "not equal"
//   }
// }

// let risultato = confrontation(num)
// console.log(risultato)

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let venti = 20
// let ventuno = 21

// function numeroUgualeA5(n) {
//   if (n % 5 == 0) return "è divisibile per 5"
//   else return "non è divisibile per 5"
// }
// console.log("il numero "+ numeroUgualeA5(venti))
// console.log("il numero " + numeroUgualeA5(ventuno))

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.

*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let otto = 8
// let cinque = 5
// let tre = 3

//   if (otto === 8 || cinque === 8 || otto + cinque === 8 || otto - cinque === 8 || y2 - y1 === 8) {
//     console.log('dato')
//   }



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let spedizione = 10
// let prezzo = 51
// let prezzo2 = 48

// function totalShoppingCart(value) {
//   return value -= spedizione
// }

// function ammontare(value) {
//   if (value > 50) {
//     return value -10
//   }
//   else 
//   return value
// }

// console.log(ammontare(totalShoppingCart(prezzo)))
// console.log(ammontare(totalShoppingCart(prezzo2)))


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let spedizione = 10
// let prezzo = 82
// let prezzo2 = 48

// function totalShoppingCart(value) {
//   value -= spedizione ;
//   value *= 0.8;
//   return value
// }

// function totalShoppingCart2() {

// }

// function ammontare(value) {
//   if (value > 50) {
//     return value -10
//   }
//   else 
//   return value
// }

// console.log(ammontare(totalShoppingCart(prezzo)))
// console.log(ammontare(totalShoppingCart(prezzo2)))



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let n1 = 3
// let n2 = 7
// let n3 = 6 

// function ordinatore(a, b, c) {
//   if (a > b) {
//     [a, b] = [b, a];
//   }
//   if (b > c) {
//     [b, c] = [c, b];
//   }

//   if (a > b) {
//     [a, b] = [b, a];
//   }
//   return [a, b, c];
// }

// console.log(ordinatore(n1,n2,n3))

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let num = 23
// let string = 'ciao'

// function typeOf(value) {
//   if(typeof value === 'number')
//   return typeof value
//   else if (typeof value === 'string')
//   return typeof value
// } 
// console.log(typeOf(num))
// console.log(typeOf(string))

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let pari = 4
// let dispari = 5

// function pariODispari(value) {
//   if (value % 2 === 0)
//     return 'pari!'
//   else return 'dispari!'
// }

// console.log(pariODispari(pari))
// console.log(pariODispari(dispari))


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Numeri compresi tra il nove e il 6");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
// let val = 7
// if (val < 10) {
//     console.log("Meno di 10");
//   } else if (val < 5) {
//     console.log("Meno di 5");
//   } else {
//     console.log("Numeri compresi tra il nove e il 6");
//   }
// */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


/* SCRIVI QUI LA TUA RISPOSTA */


// const me = {
//   name: 'John',
//   lastName: 'Doe',
//   skills: ['javascript', 'html', 'css'],
// }

// me.city = 'Toronto'
// console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const me = {
//   name: 'John',
//   lastName: 'Doe',
//   skills: ['javascript', 'html', 'css'],
// }

// delete me.lastName
// console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let Array = [];

// for (let i = 1; i <= 10; i++) {
//   Array.push(i);
// }

// console.log(Array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Array[9] = 100
// console.log(Array)