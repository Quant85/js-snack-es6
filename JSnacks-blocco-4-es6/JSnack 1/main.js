/*
JSnack 1A
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10 */

let nome = "palla";
let peso = 10;
const palla = {
  nome,
  peso
};



/*
JSnack 1B
Attraverso un prompt dare la possibilità all’utente di
modificare il peso della palla. */

palla.peso= Number(prompt(" Modifica il peso della palla in: "));
console.log(palla);

/* -----localmente, fuori il block dell'oggetto palla,
* la variabile peso assume il suo valore di default
* ma nell'oggetto viene mutato con il valore fornito dal prompt,in quanto associato a palla.peso
* mentre come nome assume il valore dichiarato dalla variabile let nome = "palla"; */
console.log(peso);
console.log(palla.peso);