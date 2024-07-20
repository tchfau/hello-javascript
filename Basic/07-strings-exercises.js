/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto

let cadena1 = "Esto es una cadena ";
let cadena2 = "de texto";

console.log(cadena1 + cadena2);

// 2. Muestra la longitud de una cadena de texto

let cadena3 = "Esta es otra cadena de texto";
console.log(cadena3.length);

// 3. Muestra el primer y último carácter de un string

let cadena4 = "Cadena de texto";
console.log(cadena4[0]);
console.log(cadena4[14]);

// 4. Convierte a mayúsculas y minúsculas un string

let cadena5 = "Mi nombre es Ignacio";

console.log(cadena5.toLowerCase());
console.log(cadena5.toUpperCase());

// 5. Crea una cadena de texto en varias líneas

let cadena6 = `Esta es 
una cadena que
contiene 
varias líneas`

// 6. Interpola el valor de una variable en un string

let cadena7 = "un texto"
console.log(`El valor de la variable cadena7 es ${cadena7}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let cadena8 = "Reemplaza todos los espacios en blanco de un string por guiones";
console.log(cadena8.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let cadena9 = "Hoy está lluvioso";
console.log(cadena9.includes("soleado"));
console.log(cadena9.includes("lluvioso"));

// 9. Comprueba si dos strings son iguales

let cadena10 = "Cadena de prueba 1";
let cadena11 = "Cadena de prueba 2";

console.log(cadena10 === cadena11);


// 10. Comprueba si dos strings tienen la misma longitud

console.log(cadena10.length == cadena11.length);