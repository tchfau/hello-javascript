/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea
// Este es un comentario de una sola línea

// 2. Escribe un comentario en varias líneas

/*Este es un comentario
que tiene 
varias líneas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let tipoString = "Esta es una cadena de texto";
let tipoNumber = 16;
let tipoBoolean = true;
let tipoUndefined;
let tipoNull = null;
let tipoSymbol = Symbol("tipoSymbol");
let tipoBigInt = BigInt(837958374958739487593847398475938753984759387539873798573);

// 4. Imprime por consola el valor de todas las variables

console.log(tipoString);
console.log(tipoNumber);
console.log(tipoBoolean);
console.log(tipoUndefined);
console.log(tipoNull);
console.log(tipoSymbol);
console.log(tipoBigInt);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof tipoString);
console.log(typeof tipoNumber);
console.log(typeof tipoBoolean);
console.log(typeof tipoUndefined);
console.log(typeof tipoNull);
console.log(typeof tipoSymbol);
console.log(typeof tipoBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

tipoString = "Nuevo valor";
tipoNumber = 85;
tipoBoolean = false;
tipoUndefined = undefined;
tipoNull = null;
tipoSymbol = Symbol("NuevoSymbol");
tipoBigInt = 443878944523115654131453434564513512456458n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

tipoString = 16;
tipoNumber = "esto es un número";
tipoBoolean = undefined;
tipoUndefined = true;
tipoNull = Symbol("otroSymbol");
tipoSymbol = null;
tipoBigInt;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const nombre = "ignacio";
const edad = 38;
const trabaja = true;
//const esViernes;
const hayHelado = null;
const esSymbol = Symbol("esSymbol");
const esBigInt = BigInt(1234565154656532336546542113514365451413541354555475748889445411);

// 9. A continuación, modifica los valores de las constantes
/*
nombre = "nacho";
edad = 37;
trabaja = false;
esViernes = undefined;
hayHelado = true;
esSymbol = false;
esBigInt = true;
*/


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser