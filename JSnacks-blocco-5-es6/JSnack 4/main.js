/*
JSnack 4 - blocco 5 -
Scrivi una funzione che fonda due array (con lo stesso
numero di elementi) prendendo alternativamente gli
elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const arrayFusion = (arr,arr1,arr2,arrFusion) => {
  for (let index = 0; index < arr.length; index++) {
    const element1 = arr1[index];
    const element2 = arr2[index];
    arrFusion.push(element1,element2);
  }
};

const arrayAlfabetico = ["a","b","c"];
const arrayNumerico = [1,2,3];
const arrayAlfaNumericoAlternato = [];

arrayFusion(arrayAlfabetico,arrayAlfabetico,arrayNumerico,arrayAlfaNumericoAlternato);
console.log(arrayAlfaNumericoAlternato);