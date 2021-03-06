/*Arrays
Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
Agregar un elemento al principio y al final del array (utilizar unshift y push).
Quitar un elemento del principio y del final del array (utilizar shift y pop).
Invertir el orden del array (utilizar reverse).
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/
//3-a
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("\n-Exercise 3.a:");
console.log(meses[4], ", ", meses[10]);
//3-b
console.log("\n-Exercise 3.b:");
var b=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(b.sort());
console.log(meses);
//3-c
b.unshift("principio de año");
b.push("fin de año");
console.log("\n-Exercise 3.c:");
console.log(b);
//3-d
b.shift();
b.pop();
console.log("\n-Exercise 3.d:");
console.log(b);
//3-e
console.log("\n-Exercise 3.e:");
console.log(b.reverse());
//3-f
console.log("\n-Exercise 3.f:");
console.log(b.join("-"));
//3-g
var g= meses.slice(4,-1);
console.log("\n-Exercise 3.g:");
console.log(g);
