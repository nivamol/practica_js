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

let d = document.getElementById("dibujito")
let lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea("black", 10, 300, 220, 10);
dibujarLinea("blue", 13, 200, 240, 20);