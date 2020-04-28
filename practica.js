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

let a = Number(prompt('Digite el primer número:')); 
let b = Number(prompt('Digite el segundo número:'));
let c = Number(prompt('Digite el tercer número:'));

if (a > b && a > c) {
    document.write('a es mayor');
}
else if (b > a && b > c) {
    document.write('b es mayor');
}
else {
    document.write('c es mayor');
}
