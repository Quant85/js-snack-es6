/* JSnack
Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area. - triangolo di Keplero
(ripassiamo il Teorema di Pitagora ;D ) */

const triangoloRettangolo = {
  base:0, 
  altezza:0
};

alert("Calcolo area e perimetro di un triangolo rettangolo note base ed altezza. e verifica se è un triangolo di Keplero");
triangoloRettangolo.base = Number(prompt("Inserisci la base: "));
triangoloRettangolo.altezza = Number(prompt("Inserisci l'altezza: "));
console.log(triangoloRettangolo);
let catetoAB = triangoloRettangolo.altezza;
let catetoBC = triangoloRettangolo.base;
const ipotenusaCA = (catetoA, ctatetoB) => Math.sqrt(Math.pow(catetoA,2)+Math.pow(ctatetoB,2));
console.log(ipotenusaCA(catetoAB,catetoBC));

const areaTriangolo = (catetoA,catetoB) => (catetoA * catetoB)/2;
console.log(areaTriangolo(catetoAB,catetoBC));
const perimetro = (catetoA,catetoB) => catetoA + catetoB + ipotenusaCA(catetoA,catetoB);
console.log(perimetro(catetoAB,catetoBC));
