/*Strings
a.-Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
b.-Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
c.-Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
d.-Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
e.-Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
f.-Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/
//2-a
var sta="Hola ¿Qué tal?";
a=sta.toUpperCase();
console.log('\n-Exercise 2.a:');
console.log(a);
//2-b
var stb="1234567890";
b=stb.substring(0,5);
console.log('\n-Exercise 2.b:');
console.log(b);
//2-c
var stc="1234567891011"
var c=stc.substring(stc.length-3,stc.length);
console.log('\n-Exercise 2.c:');
console.log(c);
//2-d
var std="como andás querida?";
var d= std.substring(0,1).toUpperCase()+std.substring(1,std.length);
console.log('\n-Exercise 2.d:');
console.log(d)
//2-e
var ste="Tengo espacios en blanco"
var e= ste.indexOf(" ");
console.log('\n-Exercise 2.e:');
console.log(e);
//2-f
var stf="Seremos larguísimas";
f=stf.substring(0,1).toUpperCase()+stf.substring(1,stf.indexOf(" ")+1)+stf.substring(stf.indexOf(" ")+1, stf.indexOf(" ")+2).toUpperCase()+stf.substring(stf.indexOf(" ")+2, stf.length);
console.log('\n-Exercise 2.f:');
console.log(f);

