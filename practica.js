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


/* let nicolas = {
    nombre: "nicolas",
    apellido: "valencia",
    edad: 23
}

function cumpleaños(edad) {
    nicolas.edad += 1; // la edad incrementa 1 
    edad += 1; // no incrementa la edad
}

cumpleaños(nicolas); */


/* function puedeVotar() {
    let nombre = prompt('ingrese su nombre');
    let edad = Number(prompt('ingrese su edad'));

    if (edad >= 18) {
        document.write(`${nombre} puede votar`)
    } else {
        document.write(`${nombre} no puede votar`)
    }
}

puedeVotar(); */


// ----> Arrow functions


// let nicolas = {
//     nombre: "nicolas",
//     apellido: "valencia",
//     edad: 23
// }

// let camilo = {
//     nombre: "camilo",
//     apellido: "ortiz",
//     edad: 17
// }

// let valeria = {
//     nombre: "valeria",
//     apellido: "solorzano",
//     edad: 25
// }

/* ----> función normal 

let mayoria = funcion(persona) {
    persona.edad >= mayoriaDeEdad
}

*/

// función normal convertida en arrow function.



/* const mayoriaDeEdad = 18;

const mayoria =  ({edad}) =>  edad >= mayoriaDeEdad; 
                             // al ser una variable con función es bueno indicarla como constante
                              // borramos la palabra function, agregamos la flecha.
                              // cuando hay un solo parametro se pueden quitar los parentesis
                              // si la función solo retorna algo se pueden borrar llaves y return.
                              // Desestructuramos persona con ({edad}) y elegimos el parametro edad
                              // eliminamos el persona.edad -> a solo edad. 


function esMayorDeEdad(persona) { 
    if(mayoria(persona)) 
     {
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else 
    {
        console.log(`${persona.nombre} es menor de edad.`)
    }
}


const mayorEdad = ({edad}) => edad >= mayoriaDeEdad; 
const menorEdad = ({edad}) => edad < mayoriaDeEdad;

function permitirAcceso(persona) {
    if(mayorEdad(persona)) 
    {
        console.log("acceso permitido");
    }
    else if (menorEdad(persona))
    {
        console.log("acceso denegado");
    }
}

esMayorDeEdad(nicolas);
permitirAcceso(nicolas);
esMayorDeEdad(camilo);
permitirAcceso(camilo);
esMayorDeEdad(valeria);
permitirAcceso(valeria);

*/


/* ------ Estructura for

let nicolas = {
    nombre: "nicolas",
    apellido: "valencia",
    edad: 23,
    peso: 75
} 

console.log(`al inicio del año ${nicolas.nombre} pesa ${nicolas.peso} KG`);

const variacionPeso = 0.2;

const AUMENTAR_PESO = persona => persona.peso += variacionPeso;

const ADELGAZAR = persona => persona.peso -= variacionPeso;

const DIAS_DEL_AÑO = 365;

for (let i = 1; i <= DIAS_DEL_AÑO; i++) {
    let random = Math.random()
    
    if (random < 0.25) {
        AUMENTAR_PESO(nicolas);
    }
    else if (random < 0.5) {
        ADELGAZAR(nicolas);
    }
}

console.log(`al final del año ${nicolas.nombre} pesó ${nicolas.peso.toFixed(1)} KG`);

*/

// let nicolas = {
//     nombre: "nicolas",
//     apellido: "valencia",
//     edad: 23,
//     peso: 75
// } 


// let valeria = {
//     nombre: "valeria",
//     apellido: "valencia",
//     edad: 24,
//     peso: 65
// } 


// const variacionPeso = 0.3;

// const AUMENTAR_PESO = persona => persona.peso += variacionPeso;

// const ADELGAZAR = persona => persona.peso -= variacionPeso;

// const COME_MUCHO = () => Math.random() < 0.3;

// const REALIZA_DEPORTE = () => Math.random() < 0.4;



// const DIAS_DEL_AÑO = 365;

// const META = nicolas.peso - 3; 

// let dias = 0; 

// while (nicolas.peso > META) {
//     if (COME_MUCHO) {
//         AUMENTAR_PESO(nicolas);
//     } if (REALIZA_DEPORTE){
//         ADELGAZAR(nicolas);
//     }
//     dias += 1;
// }

// console.log(`pasaron ${dias} dias para que ${nicolas.nombre} adelgazara 3KG`);


// let edad = Number(prompt("¿Cuál es su edad?"))

// if (edad >= 18) {
//     document.write('Usted es mayor de edad, puede votar');
// } else {
//     document.write('Anda por el tetero mocoso');
// }

// let i = 0;

// const llueve = () => Math.random() < 0.25

// do {
//     i++
// } while (!llueve()); // -> si esta condición se cumple el código do se vuelve a ejecutar

// if (i === 1) {
//     console.log(`llovió ${i} vez`);
// } else {
//     console.log(`fui a ver si llovía ${i} veces`);
// }


// switch(prompt('¿Cuál es su signo zodiacal?')) {
//     case "aries":
//     case "Aries":
//     case "ARIES":
//     document.write('Aprenda que no conseguirá nada si no empieza a luchar por lo que quiere. No se agote en el intento, siempre los resultados justifican los esfuerzos.')
//     break; 

//     case "tauro": 
//     case "Tauro":
//     case "TAURO":
//     document.write('Momento para sedimentar todas sus energías puramente en los proyectos. De esta forma, evitará caer en engaños y no lamentará lo perdido.')
//     break;

//     case "geminis": 
//     case "Geminis":
//     case "GEMINIS":
//     document.write('Aproveche su sensación optimista para iniciar cualquier actividad que haya postergado hace tiempo. De esta forma, estimulará su creatividad al máximo.')
//     break;

//     default: 
//     document.write('Digita un signo sodiacal válido')
// }

// let nicolas = {
//     nombre: "Nicolás",
//     apellido: "Valencia",
//     estatura: 1.75
// };

// let camilo = {
//     nombre: "Camilo",
//     apellido: "Valencia",
//     estatura: 1.80
// }

// let silvio = {
//     nombre: "Silvio",
//     apellido: "Valencia",
//     estatura: 1.82
// }

// let beatriz = {
//     nombre: "Beatriz",
//     apellido: "Molina",
//     estatura: 1.65
// }

// let julian = {
//     nombre: "Julian",
//     apellido: "Cañas",
//     estatura: 1.78
// }

// let personas = [nicolas, camilo, silvio, beatriz, julian];

/* ----- Mismas funciones escritas diferente ----- */

/* ---- Función normal

const esAlta = function(personas) {
    return personas.estatura >= 1.80;
} 

-------  arrow function v1

const esAlta = (personas) => {
    return personas.estatura >= 1.80;
} 

-------  arrow function v2 */

// const esAlta = personas => personas.estatura >= 1.80;

// ---- Desglosando la variable personas: 

// const esAlta = ({estatura}) => estatura >= 1.80

// console.log(personas.filter(esAlta));


// const esBaja = ({estatura}) => estatura < 1.80; 

// console.log(personas.filter(esBaja));

// versión 2 de encontrar estos filtrados de información: 

// let personaAlta = personas.filter(function(personas) { // normalmente la función es anónima
//     return personas.estatura >= 180;
// })
// console.log(personaAlta);
// para acceder a los arrays usamos -> nombre_variable[0] = accede a nicolas. 
// podemos acceder a los atributos con un . al inicio del atributo  -> personas[0].estatura
// podemos acceder a los atributos con los corchetes -> personas[0]['estatura']

// let personasCms = personas.map(function (personas) {
//     return personas.estatura * 100;
// })

// ó 

// const personasACentimetros = personas => ({
//     ...personas,
//     estatura: personas.estatura * 100
// }); // como solo retorna un objeto podemos envolver las llaves dentro de los parentesis y colocar la condición eliminando la palabra return.

// let personasACms = personas.map(personasACentimetros)

// console.log(personas[0]);
// console.log(personasACms[0]); // Se creó otro array con la estatura en cms sin modificar el original en metros.

// ---- Ejer 1

<<<<<<< HEAD
// let peso = prompt('ingrese su peso en kg:'), 
//     edad = prompt('ingrese su edad:')

// document.write(`su peso es: ${peso}kg y su edad es: ${edad} `)

// ---- Ejer 2

// function calcularArea () {
//     let base = prompt('ingrese la base del triángulo:'),
//     altura = prompt('ingrese la altura del triangulo')
//     let area = base * altura; 
//     console.log(`el area del triángulo es ${area}`)
// }

// calcularArea();

// ---- Ejer 3 
=======
// class Persona {
//     constructor(nombre,apellido,altura) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.altura = altura;
//     }

//     saludar(fn) { // escogemos el nombre que queramos para definir el parámetro. 
//         let {nombre, apellido} = this;
//         console.log(`Buen día ${nombre} ${apellido}`)
//         if (fn) { // si nos pasan una funcion en fn se ejecuta el siguiente código
//             fn(nombre, apellido, false) // nombre + paréntesis como si estuvieramos llamando la función.
//         } // si no nos pasan ningun dato en fn se toma como falsa y no se ejecuta nada. 
//     }

//     soyAlto() {
//         if(this.altura > 1.80) {
//             console.log(`${nombre} eres muy alto/a`)
//         }
//     }
// }

// class Desarrollador extends Persona {
//     constructor(nombre,apellido,altura) {
//         super(nombre,apellido,altura)
//     }

//     saludar(fn) {
//         // let nombre = this.nombre;
//         // let apellido = this.apellido;
//         let {nombre, apellido} = this; // esto es equivalente a las 2 lineas de codigo anteriores.
//         console.log(`hola me llamo ${nombre} y soy desarrollador/a`)
//         if (fn) { // si nos pasan una funcion en fn se ejecuta el siguiente código
//             fn(nombre, apellido, true) // nombre + paréntesis como si estuvieramos llamando la función.
//         } 
//     }
// }


// function responderSaludo(nombre, apellido, esDev) {
//     console.log(`Holiii ${nombre} ${apellido}`);
//     if(esDev) {
//         console.log(`${nombre} Me encanta que seas desarrollador/a`);
//     }
// }

// let nicolas = new Persona("nicolas", "valencia", 1.80);
// let erica = new Persona("erica", "valencia", 1.79);
// let arturo = new Persona("arturo", "valencia", 1.85);

// nicolas.saludar();
// erica.saludar(responderSaludo);
// arturo.saludar(responderSaludo);
    

// ------------ Asincronismo

// console.log("a");

// // la funcion setTimeout permite definir en cuanto tiempo ejecutar una función. 
// // recibe 2 parámetros -> la función y el delay (tiempo para que se ejecute esa función)

// setTimeout(() => console.log("e"), 3000)
// // en caso de definir 0ms la d sigue apareciendo de último porque JS ejecuta primero lo principal y despues la cola de tareas.

// // en este ejemplo se imprimen primero a, b y c y después de 3s (3000ms) se muestra d en consola.

// setTimeout(() => console.log("d"), 2000)

// for(i = 0; i < 10; i++) {
//     console.log(i);
// }


// console.log("b");
// console.log("c");


// const API_URL = 'https://swapi.dev/api/'; 
// const PEOPLE_URL = 'people/:id'; 

// const opts = {crossDomain: true};

// function generarPersonaje(id) {

//     return new Promise((resolve, reject) => {
//         const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
//         $
//         .get (url, opts, function(data) {
//             resolve(data)
//         })
//         .fail(() => reject(id))
//     })
// }

// const ON_ERROR = id => console.log(`no pudimos identificar al personaje ${id}`)

// async function obtenerPersonajes() {
//     let ids = [1, 2, 3, 4, 5, 6, 7]
//     let promesas = ids.map(id => generarPersonaje(id))
//     try {
//         let personajes = await Promise.all(promesas)
//         console.log(personajes)
//     } catch(id) {
//         ON_ERROR(id)
//     }
// }


// obtenerPersonajes()


// // let promesas = ids.map(function(id) {
// //     return generarPersonaje(id)
// // })

// /* generarPersonaje(1) 
//     .then ((persona)  => {
//         console.log(`el personaje 1 es ${persona.name}`);
//         return generarPersonaje(2)
//     })
//     .then((persona) => {
//         console.log(`el personaje 2 es ${persona.name}`);
//         return generarPersonaje(3)
//     })
//     .then(persona => {
//         console.log(`el personaje 3 es ${persona.name}`)
//         return generarPersonaje(4)
//     })
//     .then(persona => {
//         console.log(`el persona 4 es ${persona.name}`)
//         return generarPersonaje(5)
//     })
//     .then(persona => {
//         console.log(`el persona 5 es ${persona.name}`)
//         return generarPersonaje(6)
//     })
//     .then(persona => {
//         console.log(`el persona 6 es ${persona.name}`)
//         return generarPersonaje(7)
//     })


//     .catch(ON_ERROR)
// */ 

// const celeste = document.getElementById('celeste');
// const violeta = document.getElementById('violeta');
// const naranja = document.getElementById('naranja');
// const verde = document.getElementById('verde');
// const btmEmpezar = document.getElementById('btnEmpezar');// recibe un string con el elemento que queremos obtener (por el id)
// const ULTIMO_NIVEL = 10;

// class juego {
//     constructor() {
//         this.inicializar = this.inicializar.bind(this);
//         this.inicializar()
//         this.generarSecuencia()
//         setTimeout(this.siguienteNivel, 500)
//     }

//     inicializar()  {
//         this.siguienteNivel = this.siguienteNivel.bind(this);
//         this.elegirColor = this.elegirColor.bind(this)
//         this.toggleBtnEmpezar()
//         this.nivel = 1;
//         this.colores = {
//             celeste,
//             violeta,
//             naranja,
//             verde 
//         }
//     }

//     toggleBtnEmpezar() {
//         if(btmEmpezar.classList.contains('hide')) {
//             btmEmpezar.classList.remove('hide')
//         } else {
//             btmEmpezar.classList.add('hide')
//         }
//     }

//     generarSecuencia() {
//         this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
//     }

//     siguienteNivel() {
//         this.subnivel = 0;
//         this.iluminarSecuencia()
//         this.agregarEventosClick()
//     }

//     transformarNumeroAColor(numero) {
//         switch (numero) {
//             case 0: 
//                 return 'celeste'
//             case 1: 
//                 return 'violeta'
//             case 2: 
//                 return 'naranja'
//             case 3: 
//                 return 'verde'

//         }
//     }

//     transformarColorANumero(color) {
//         switch (color) {
//             case 'celeste': 
//                 return 0
//             case 'violeta': 
//                 return 1
//             case 'naranja': 
//                 return 2
//             case 'verde': 
//                 return 3

//         }
//     }

//     iluminarSecuencia() {
//         for (let i = 0; i < this.nivel; i++) {
//             const color = this.transformarNumeroAColor(this.secuencia[i])
//             setTimeOut(() => this.iluminarColor(color), 1000 * i);
//         }
//     }

//     iluminarColor() {
//         this.colores[color].classList.add('light')
//         setTimeout(() => this.apagarColor(color), 350)
//     }

//     apagarColor(color) {
//         this.colores[color].classList.remove('light')
//     }


//     agregarEventosClick() {
//         this.colores.celeste.addEventListener('click', this.elegirColor); // bind es para no perder la referencia de this. 
//         this.colores.violeta.addEventListener('click', this.elegirColor);
//         this.colores.naranja.addEventListener('click', this.elegirColor);
//         this.colores.verde.addEventListener('click', this.elegirColor);
//     }

//     eliminarEventosClick() {
//         this.colores.celeste.removeEventListener('click', this.elegirColor); // bind es para no perder la referencia de this. 
//         this.colores.violeta.removeEventListener('click', this.elegirColor);
//         this.colores.naranja.removeEventListener('click', this.elegirColor);
//         this.colores.verde.removeEventListener('click', this.elegirColor);
//     }

//     elegirColor(ev) {
//         const nombreColor = event.target.dataset.color
//         const numeroColor = this.transformarColorANumero(nombreColor);
//         this.iluminarColor(nombreColor)
//         if (numeroColor === this.secuencia[this.subnivel]) {
//             this.subnivel++
//             if(this.subnivel === this.nivel) {
//                 this.nivel++
//                 this.eliminarEventosClick()
//                 if(this.nivel === (ULTIMO_NIVEL + 1)) {
//                     this.ganoElJuego()
//                 } else {
//                     setTimeout(this.siguienteNivel, 1500)
//                 }

//             }

//         } else {
//             this.perdioElJuego()
//         }
//     }
//     ganoElJuego() {
//         swal('Platzi', 'Felicitacions, Ganaste el juego!', 'success')
//         .then(this.inicializar)
//     }

//     perdioElJuego() {
//         swal('Platzi', 'Oooops, perdiste el juego!', 'error')
//         .then(() => {
//             this.eliminarEventosClick();
//             this.inicializar();
//         })
//     }
// }


// function empezarJuego() {
//     window.juego = new juego;

>>>>>>> curso_fund_javascript

// const pi = 3.14 
// let radio = prompt('introduce el radio del circulo')

// function areaCirculo() {
//     let area = pi * (radio * radio);
//     console.log(`el area del circulo es ${area}`);
// }

// areaCirculo();

// ---- Ejer 4

// let numeroUno = prompt('ingrese el primer número:')
// let numeroDos = prompt('ingrese el segundo número: ')
// let resultado

// if (numeroUno > numeroDos) {
//     resultado = numeroUno / numeroDos
//     } else {
//         resultado = numeroDos / numeroUno
//     }

// console.log(resultado);

// ---- Ejer 5 

// let a = prompt('numero uno:'), 
//     b = prompt('numero dos:'), 
//     c = prompt('numero tres:')

// if (a > b || a > c) {
//     console.log(`el numero mayor es: ${a}`)
// } 
// else if (b > a || b > c) {
//     console.log(`el numero mayor es: ${b}`)
// } 
// else if (c > a || c > b) {
//     console.log(`el numero mayor es: ${c}`)
// } 
// else {
//     console.log('recargue la página e ingrese 3 números diferentes')
// }


// ---- Ejer 6

let dia = Number(prompt('ingrese el día de nacimiento:')),
    mes = Number(prompt('ingrese el mes de nacimiento (En numero):')),
    año = Number(prompt('ingrese el año de nacimiento:')),
    error = "ingrese un dato valido"

if( dia > 31 || dia === 0) {
    console.log(error)
} 
else if (mes > 12 || mes < 1) {
    console.log(error)
}
else if (año > 2010 || año < 1930) {
    console.log(error)
} else {
    console.log(`usted nacio en el mes: ${mes}`)
}