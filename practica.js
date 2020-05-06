// -------- Canva
/*
let d = document.getElementById("dibujito");
let lienzo = d.getContext('2d'); 
let lineas = 30;
let yi, yf;
let xi, xf;
let colorcito = "#000";


for(contador = 0; contador < lineas; contador++) {
    yi = 10 * contador;
    xf = 10 * (contador + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    dibujarLinea(colorcito, yi, 0, 300, xf);
}

dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);
dibujarLinea(colorcito, 299, 1, 299, 299);
dibujarLinea(colorcito, 1, 1, 299, 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}*/

/* let cat1 = Number(prompt("Escriba el valor del primer cateto:"));
let cat2 = Number(prompt("Escriba el valor del segundo cateto:"));
let hipot = cat1 + cat2; 

document.write(`la hipotenusa del triangulo es: ${hipot}`); */


// let number = Number(prompt('Escriba un numero mayor que 0'));

// if (!Number.isNaN(number)) 
// {
//     console.log(`la raíz cuadrada de ${number} es ${number * number}`);
// }
// else if (number !== Number) {
//     console.log('escribe un numero');
// }

// let number = 0; 

// while(number <= 20) {
//     console.log(number);
//     number = number + 2;
// }


// while(contador < 10) {
//     console.log(numero);
//     numero = numero * 2;
//     contador = contador + 1;
// }

// let numero = 1; 

// for (contador = 0; contador < 10; contador++) {
//     console.log(numero);
//     numero = numero * 2; 
// }

// for (let numero = 1; numero < 12; numero +=2) {
//     console.log(numero);
// }


// switch (prompt('¿Cuál es el clima actual?')) {
//     case "lluvioso":
//         document.write('recuerde llevar sombrilla');
//         break;
    
//     case "caluroso": 
//         document.write('Sal con ropa fresca');
//         break; 

//     case "nublado": 
//         document.write('Lleva chaqueta');
//         break;

//     default:
//         document.write('No te entiendo, escoge entre lluvioso, caluroso o nublado');
// }


// ----------------------- Fundamentos JS Curso platzi

/*let nombre = "nicolas"; 
let numero = 1;

nombre.toLowerCase(); // var nombre en minúscula

nombre.toUpperCase(); // var nombre en mayúscula

nombre.length; // numero de carácteres de la variable nombre

document.write(nombre.substr(1, 5)); // caracteres que queremos que nos devuelta, en 
                                    // este caso nos devuelve = "icola"

document.write(numero += numero); // incremento

document.write(numero -= numero); // decremento 

let decimal = 30.4

let total = Math.round(decimal * 100 * 4) / 100;

console.log(total); */

/* let nombre = "nicolas", apellido = "valencia", edad = 23; // variables de alcance global

function imprimirEdad() {
    let cantidad = "años"; // variable de alcance local solo para la función imprimirEdad
    document.write(`me llamo ${nombre} ${apellido} y tengo ${edad} años`);
    console.log(cantidad); // aquí si muestra el resultado años
}

console.log(cantidad); // aquí la variable cantidad sale no definida 

imprimirEdad(); */

/* 

let persona = prompt('Ingrese su nombre')
let nicolas = { nombre: "nicolas", apellido: "Valencia", edad: 22 }
let valeria = { nombre: "valeria", apellido: "salazar", edad: 27 }
let camilo = { nombre: "camilo", apellido: "Valencia", edad: 23 }

function responderSaludo() 
{
    document.write(`buen día ${persona.nombre} ${persona.apellido}`)
}

if (persona == "nicolas") {
    console.log(`buen día ${persona}`);
} else if (persona == "valeria")
{
    console.log(`buen día ${persona}`);
} else if (persona == "camilo") {
    console.log(`buen día ${persona}`)
}

*/

// ----> Curso_fundamentos_platzi__Objetos


let nicolas = {
    nombre: "nicolas",
    apellido: "valencia",
    edad: 23
}

function cumpleaños(edad) {
    nicolas.edad += 1; // la edad incrementa 1 
    edad += 1; // no incrementa la edad
}

cumpleaños(nicolas);







