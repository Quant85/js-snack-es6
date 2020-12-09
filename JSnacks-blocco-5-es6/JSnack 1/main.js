/* JSnack 1 - blocco 5 - 
Crea 10 oggetti che rappresentano una zucchina,
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const sommaPropOggInArray = (arr,nomeProprietà) => {
  let sommaProp = 0;
  for (let index = 0; index < arr.length; index++) {
    const iesimoElemento = arr[index];
    const proprietàX = iesimoElemento[nomeProprietà];
    sommaProp += proprietàX;
  } return sommaProp;

};

const boxZucchine = [
  {
  varietà: "CUCURBITA PEPO",
  peso:100,
  lunghezza:14
  },
  {
    varietà: "Zucchina lunga fiorentina",
    peso:60,
    lunghezza:14
  },
  {
    varietà: "Zucchina striata di Napoli",
    peso:150,
    lunghezza:32
  },
  {
    varietà: "Zucchina rigata pugliese",
    peso:100,
    lunghezza:27
  },
  {
    varietà: "Zucchina napoletana lunga rigata",
    peso: 160,
    lunghezza:28
  },
  {
    varietà: "Zucchino nero di Milano",
    peso: 80,
    lunghezza:16
  },
  {
    varietà: "Zucchino siciliano - cucuzza",
    peso: 40,
    lunghezza:42
  },
  {
    varietà: "Zucchino tondo di Piacenza",
    peso: 60,
    lunghezza:14
  },
  {
    varietà: "Zucchina chiara di Faenza",
    peso: 70,
    lunghezza:17
  },
  {
    varietà: "Zucchino romanesco",
    peso: 100,
    lunghezza:24
  }
];


//Soluzione  ciclo forEach
let somma = 0;
boxZucchine.forEach(function(item){
  somma += item.peso;
});

console.log(somma);
//-------


const totalePesoZucchine = sommaPropOggInArray (boxZucchine,"peso");
console.log(totalePesoZucchine);
const totaleLunghezzaZucchine = sommaPropOggInArray (boxZucchine,"lunghezza");
console.log(totaleLunghezzaZucchine);




// Zucchine Costructor --- sol. 2.0

class Zucchina {
  constructor (a, b, c) {
    this.varietà = a;
    this.lunghezza = b;
    this.peso = c;
  }
}

const cestoZucchine = [];

//Raccogliotere - prendi 10 zucchine lunghe più di 10 cm e non oltre le 34 e tra i 100gr e i 340gr

const varietàZucchine = [];
const provenienza = [" di Faenza"," di Firenze"," di Milano"," di Napoli"," di Roma"," di Sicilia"];
const caratteristiche = [" striato corto"," striato lungo"," rigato tondo"," liscio tondo"," nero", " chiaro"];

/* function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} */

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const zucchineRaccolte = 10;
const lunghezzaMin = 10;
const lunghezzaMax = 34;
const pesoaMin = 80;
const pesoMax = 160;

while (varietàZucchine.length < zucchineRaccolte) {
  let pesoX = getRandomNumber(pesoaMin,pesoMax);
  //console.log(pesoX);
  let lunghezzaY = getRandomNumber(lunghezzaMin,lunghezzaMax);
  //console.log(lunghezzaY);
  //--potrei separare il generatore per una miglior comprensione o creare una funzione
  let provenienzaX = getRandomNumber(0,provenienza.length-1);
  //console.log(provenienza[provenienzaX]);

  let caratteristicheY = getRandomNumber(0,caratteristiche.length-1);
  let varietàRandom = "Zucchino" + caratteristiche[caratteristicheY] + provenienza[provenienzaX] ;
  //console.log(varietàRandom);
  
  if (varietàZucchine.length < zucchineRaccolte) {
    varietàZucchine.push(varietàRandom);
  }
  let varietàZucchineX = getRandomNumber(0,varietàZucchine.length-1);
  let zucchinaRaccolta = new Zucchina(varietàZucchine[varietàZucchineX],lunghezzaY,pesoX);
  cestoZucchine.push(zucchinaRaccolta);
  console.log(zucchinaRaccolta);
}

console.log(varietàZucchine);
console.log(cestoZucchine);

let pesoZucchine = 0;
cestoZucchine.forEach(function(item){
  pesoZucchine += item.peso;
});

console.log(pesoZucchine);
