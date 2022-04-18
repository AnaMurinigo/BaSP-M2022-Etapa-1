/*Funciones
a.-Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
b.-A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
c.-Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
d.-A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
e.-Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
*/
//6-a
function sumaa(n1,n2){
    return n1+n2;
}
var a=sumaa(1,11);
console.log(a);
//6-b
function sumab(n1,n2){
    if(isNaN(n1) && isNaN(n2)){
        alert("The two paramaters have to be numbers")
        return "Nan";}
        else{
            return n1+n2;
        }
    }
    console.log(sumab(5,3));
//6-c
function validateInteger(n){
    return Number.isInteger(n);
}
console.log(validateInteger(5.5));
//6-d
function sumad(n1,n2){
    if(isNaN(n1) && isNaN(n2)){
        alert("The two paramaters have to be numbers")
            return "Nan";
        }else if (validateInteger(n1)&& validateInteger(n2)){
            return n1+n2;
        }else if(!validateInteger(n1)){
            alert(n1 + " must be an integer, you can round it to: "+Math.round(n1));
            return Math.round(n1);
        }else {
            alert(n2 + " must be an integer, you can round it to: "+Math.round(n2))
            return Math.round(n2);
    }
}
//6-e
function sumae(n1,n2){
    if(validate(n1)&&validate(n2)){
    return n1+n2;}
    else {return "Nan";}
}
function validate(n){
    if(isNaN(n)){
        alert("The two paramaters have to be numbers")
            return "Nan";
               }else if(!validateInteger(n)){
            alert(n + " must be an integer, you can round it to: "+Math.round(n));
            return false;
        }else{
            return true;
        }
}
console.log(sumae(8,14));
console.log(sumae("pepe", 2));
console.log(sumae(8,10.6));
console.log(sumae(8.1,"luis"));