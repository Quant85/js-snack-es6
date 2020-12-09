/*
JSnack 5 - blocco 5 -
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra “a” e “b” */

const arr = [1,2,3,4,5,6,7,8,9,10,11];
const a= 0;
const b= 11; 

const contentsArr = (arr,start,end) => {
  if (start >= 0 && start < end && end <= arr.length ) {
  let sectionArray = arr.slice(start,end);
  return sectionArray;
}};

console.log(contentsArr(arr,a,b));

