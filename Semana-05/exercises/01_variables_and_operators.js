/*Variables y Operadores
Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).*/
//1-a
var a;
var b;
a=5;
b=2;
var c=a+b;
console.log('\n-Exercise 1.a:')
console.log(c);
//1-b
var string1="soy ";
var string2="un pez";
var stringsum=string1+string2;
console.log('\n-Exercise 1.b:')
console.log(stringsum);
//1-c
var totallength=string1.length+string2.length;
console.log('\n-Exercise 1.c:')
console.log(totallength);
//Some testing:
/*I understand that I'm not creating new ones, just seing how it JS works
a="soy ";
b="un pez";
var c=a+b;
console.log(c);*/
/*Testing how this works
console.log(a.length+b.length);
console.log("12345".length);
*/
