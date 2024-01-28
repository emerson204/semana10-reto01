/*
Crear una función que tome como parámetro un arreglo, retornar el último
elemento del arreglo.
*/

// const arreglo = [1, 2, 3, 4, 5, 6, 8];

// function element(arr) {
//   return arr[arr.length - 1];
// }

// const ultimoElemento = element(arreglo);
// console.log(ultimoElemento);

/*
Crear una función que tome como parámetro un arreglo y un número, retornar
un nuevo arreglo con todos los elementos y el número agregado al final del
arreglo. (usar el operador spread)

*/
// const arreglo = [1, 2, 3, 4, 5, 6];
// const numero = 10;

// function element(arr, num) {
//   console.log((nuevoArreglo = [...arr, num]));
// }

// element(arreglo, numero);

/* 
Crear una función que tome como parámetro un arreglo de números, retornar el
promedio de todos los elementos del arreglo.
*/
// const arreglo = [1, 2, 3, 4, 5, 6];
// let suma = 0;

// function element(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     suma += arr[i];
//   }

//   return suma / arr.length;
// }

// const resultadoFinal = element(arreglo);
// console.log(resultadoFinal);

/*
Crear una función que tome como parámetro un arreglo de números, retornar un
dato de tipo número con la suma de todos los números pares.
*/

// const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let suma = 0;

// function elemento(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       suma += arr[i];
//     }
//   }

//   return suma;
// }

// const resultadoFinal = elemento(arreglo);
// console.log(resultadoFinal);

/* 
Crear una función con el nombre de booleanoArray() que tome dos arreglos de
números como parámetro y que retorne un booleano, unir los dos arreglos en uno
solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es
menor a 10 que retorne false
*/

// const arreglo1 = [1, 2, 3, 4, 5];
// const arreglo2 = [6, 7, 8, 9, 10, 11];
// let arrVacio = [];

// function booleanoArray(arr1, arr2) {
//   arrVacio = [...arr1, ...arr2];
//   if (arrVacio.length > 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const resultadoFinal = booleanoArray(arreglo1, arreglo2);
// console.log(resultadoFinal);

/*
Crear una función con el nombre de funcionArray() que tome dos arreglos de
números enteros como parámetro y retornar un único arreglo, cada elemento
del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].

*/
// const arreglo1 = [1, 2, 3];
// const arreglo2 = [4, 5, 6];
// let arrVacio = [];

// function funcionArray(arr1, arr2) {
//   arrVacio = [...arr1, ...arr2];

//   for (let i = 0; i < arrVacio.length; i++) {
//     arrVacio[i] *= 2;
//   }

//   return arrVacio;
// }

// const resultadoFinal = funcionArray(arreglo1, arreglo2);
// console.log(resultadoFinal);

/* 
Escribir un programa que almacene la cadena de caracteres “password” en una
variable, pregunte al usuario por la contraseña e imprima por pantalla si la
contraseña introducida por el usuario coincide con la guardada en la variable sin
tener en cuenta mayúsculas y minúsculas. 
*/

// const contrasenia = "password";
// const user = prompt("Ingresa la contraseña : ");

// if (user.toLowerCase() === contrasenia.toLowerCase()) {
//   console.log("La contraseña es correcta");
// } else {
//   console.log("La contraseña es incorrecta");
// }

/* 
Escribir un programa para una empresa que tiene salas de juegos para todas las
edades y quiere calcular de forma automática el precio que debe cobrar a sus
clientes por entrar. El programa debe preguntar al usuario la edad del cliente y
mostrar el precio de la entrada. Si el cliente es menor de 4 años puede entrar
gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€
*/

// const user = parseInt(prompt("Ingresa tu edad : "));

// if (user < 4) {
//   console.log("Puedes ingresar gratis");
// } else if (user >= 4 && user <= 18) {
//   console.log("El precio es de 5 euros");
// } else {
//   console.log("El precio es de 10 euros ");
// }

/* 
Para tributar un determinado impuesto se debe ser mayor de 18 años y tener un
ingreso igual o superior a 1000 € mensuales. Escribir un programa que pregunte
al usuario su edad y sus ingresos mensuales y muestre por pantalla si el usuario
tiene que tributar o no. 
*/

// const userEdad = parseInt(prompt("Ingresa tu edad : "));
// const userIngreso = parseInt(prompt("Ingresa tu salario : "));

// if (userEdad > 18 && userIngreso >= 1000) {
//   console.log("Puedes tributar");
// } else {
//   console.log("Aun no puedes tributar ");
// }

/* 
Crea un programa que pida al usuario el diámetro de una rueda y su grosor (en
metros).
a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un
vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el
mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de
las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es
para un vehículo pequeño”.
b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es
menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá
mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado” 
*/

// const diametro = parseFloat(
//   prompt("Ingresa el diametro de la rueda (en metros) : ")
// );
// const grosor = parseFloat(
//   prompt("Ingresa el grosor de la rueda (en metros) : ")
// );

// if (
//   (diametro > 1.4 && grosor < 0.4) ||
//   (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)
// ) {
//   console.log("El grosor para esta rueda es inferior al recomendado");
// }

// if (diametro > 1.4) {
//   console.log("La rueda es para un vehiculo mas grande");
// } else if (diametro <= 1.4 && diametro > 0.8) {
//   console.log("La rueda es para un vehiculo mediano");
// } else {
//   console.log("La rueda es para un vehiculo pequeño ");
// }

/* 
Se tienen los datos de cinco personas, crear funciones para:
• Hallar quienes tienen el salario mayor a 1200.
• Hallar quien es el primero que tiene como hobby cantar.
• Devolver un booleano sí al menos uno de ellos le gusta leer.
*/
// let personas = [
//   { nombre: "boris", hobby: "correr", salario: 2000 },
//   { nombre: "luis", hobby: "cantar", salario: 1500 },
//   { nombre: "carmen", hobby: "cocinar", salario: 800 },
//   { nombre: "percy", hobby: "cantar", salario: 1100 },
//   { nombre: "rosa", hobby: "leer", salario: 3000 },
// ];

// let salariosMayores = [];
// let primerCantante = null;
// let gustaLeer = false;

// function salario() {
//   for (let i = 0; i < personas.length; i++) {
//     if (personas[i].salario > 1200) {
//       salariosMayores.push(personas[i].nombre);
//       // console.log(personas[i].nombre + " tienen salarios mayor a S/1200");
//     }

//     if (personas[i].hobby === "cantar" && primerCantante === null) {
//       // console.log(personas[i].nombre + " le gusta cantar");
//       primerCantante = personas[i].nombre;
//     }

//     if (personas[i].hobby === "leer") {
//       // console.log(personas[i].nombre + " es la unica persona que lee");
//       gustaLeer = true;
//     }
//   }

//   if (salariosMayores.length > 0) {
//     console.log("Personas con salario mayor a S/1200:", salariosMayores);
//   }

//   if (primerCantante !== null) {
//     console.log("El primer cantante es:", primerCantante);
//   }

//   console.log("¿Al menos uno gusta de leer?", gustaLeer);
// }

// salario();

/* 
Un servicio de atención al cliente tiene establecido turnos semanales para sus
empleados de manera que cada día de la semana se encarga del servicio una
persona:
lunes - María, Martes - Luis, Miércoles - Antonia, Jueves - Pedro, Viernes - Marisa.
Usa un array para almacenar los datos del servicio.
Crea una función que retorne el nombre de la persona encargada del servicio
sabiendo el día. Si el día no existe deberá decir que no hay servicio. El día debe ser
consultado por prompt.
Si le pido servicio('Lunes') me debería decir "Este día se encarga María" 
*/

// const horario = [
//   { dia: "lunes", encargado: "María" },
//   { dia: "martes", encargado: "Luis" },
//   { dia: "miercoles", encargado: "Antonia" },
//   { dia: "jueves", encargado: "Pedro" },
//   { dia: "viernes", encargado: "Marisa" },
// ];

// function servicio(arr, day) {
//   let encargado;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].dia === day) {
//       encargado = arr[i].encargado;
//       return "Este dia se encarga " + encargado;
//     }
//   }
//   return "No hay servicio";
// }

// let dayServ = prompt("Ingrese el dia :");
// console.log(servicio(horario, dayServ));

/* 
Una tienda vende monitores, teclados y ratones. Los precios se almacenan en una
estructura array conde cada elemento es un par producto - precio.
Diseña una función que reciba como argumento el nombre de un producto que
previamente ha sido consultado por prompt y devuelva su precio.
Si la lista de precios es monitor: 200€, teclado: 20€ ratón: 10€, al pedir precio('monitor') me
devolverá 200.
*/

const productos = [
  { produc: "monitor", precio: 200 },
  { produc: "teclado", precio: 20 },
  { produc: "raton", precio: 10 },
];

let nombre = prompt("Ingrese el nombre del producto : ");

function producto(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].produc === nombre) {
      return `Su precio del ${name} es S/${arr[i].precio}`;
    }
  }
}

console.log(producto(productos, nombre));
