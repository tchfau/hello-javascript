/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética
let a = 10;
let b = 5;

let suma = a + b;
let resta = a - b;
let mmultiplicacion = a * b;
let division = a / b;
let modulo = a % b;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(10 > 5);
console.log(10 === 10);
console.log("hola" === "hola");
console.log(20 >= 10);
console.log(2 == "2");

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log("hola" == 5);
console.log(5 > 10);
console.log("5" === 5);
console.log(10 > 20);
console.log(true === false);

// 5. Utiliza el operador lógico and

console.log(10 > 5 && 5 === "5");

// 6. Utiliza el operador lógico or

console.log(25 >= 25 || 5 > 10);

// 7. Combina ambos operadores lógicos

console.log(("hola" === "hola" && 100 > 30) || 7 >= 2);

// 8. Añade alguna negación

console.log(!(50 > 35) && !("cadena" === "cadena"));

// 9. Utiliza el operador ternario

esSabado = true;

esSabado ? console.log("Es sábado") : console.log("No es sábado");

// 10. Combina operadores aritméticos, de comparáción y lógicas

let c = 50;
let d = 75;

console.log((c + d) > 100 || c / d >= 25);




