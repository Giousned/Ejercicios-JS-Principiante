let age = prompt('What is your age?');

// Your code below:
console.log((+age+10));


/* DIFERENTES SOLUCIONES:

    Con Number()

    En primer lugar, con la instrucción Number(), JavaScript te permite pasar un string o una cadena en números. Para utilizarlos, tienes que establecer la siguiente tu instrucción en tu IDE preferido:

    Number («17»); // devuelve el número 17
    Number (» 17 «); // devuelve el número 17
    Number («5.22»); // devuelve el número 5.22

    Recuerda que un string o cadena está usualmente establecida dentro de comillas, como las que acabas de ver, y el número resulta de forma simple.


Con el operador +

El operador unario u operador + es otro elemento que permite transformar una cadena o string. El + precede al operando y, por consiguiente, se evalúa como su operando, para convertirlo en un número.

const x = 16;
const y = -16;
console.log(+x); // expected output: 16
console.log(+y); // expected output: -16
console.log(+»); // expected output: 0


    Con Math.floor()

    Aunque la variable de math.floor() no se utiliza para números difíciles, pues es bastante complejo, esta instrucción es perfecta para aprender cómo convertir un string en un número en JavaScript. Math.floor() se encarga de devolver el entero más grande, menor o igual al número que el usuario le otorga.

    str = ‘1222’
    console.log(Math.floor(str)) // devuelve el número 1222


Con parseInt()

Por otra parte, uno de los instrucciones de código más utilizadas en JavaScript para cumplir con esta tarea es parseInt(). Esta instrucción convierte directamente un string en un número entero. Ahora bien, en el caso de los decimales, parseInt() se encarga de convertirlo en el número entero más cercano al decimal.

myString = ‘126’
console.log(parseInt(myString)) // devuelve el resultado: 126

a = 16.1
console.log(parseInt(a)) // devuelve el resultado: 16

Ten en cuenta que, si quieres que el decimal dentro de la cadena se convierta, directamente, en el mismo número decimal, deberás utilizar la instrucción parseFloat().


Multiplicar con números

Por último, te contaremos cómo convertir un string en número en JavaScript a partir de la multiplicación con el número 1. Lo puedes ver en la siguiente representación:

str = ‘1612’
console.log (str * 1) //devuelve el resultado: 1612

Así pues, si mientras estás desarrollando tu programa de código en el lenguaje de programación de JavaScript necesitas cambiar en un string en número, ya tienes 5 forma de hacerlo gracias a este artículo. 

*/