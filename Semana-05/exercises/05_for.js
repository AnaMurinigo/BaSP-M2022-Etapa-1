/*For
Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
*/

//5-a
var vector=["a1", "a2", "a3", "a4", "a5"];
for (var i = 0; i < vector.length; i++) {
    alert(vector[i]);
}
//5-b
for (var i = 0; i < vector.length; i++) {
    alert(vector[i].substring(0,1).toUpperCase()+vector[i].substring(1,vector[i].length+1));
}
//5-c
var sentence="";

for (var i = 0; i < vector.length; i++) {
    sentence+=vector[i];
}
alert(sentence);
//5-d
vector2=[];
for (var i = 0; i < 10; i++) {
    vector2[i]=i;
}
console.log(vector2);