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

let size = 8; 
let board = "";

for (let y = 0; y <= size; y++) {
    for( let x = 0; x <= size; x++) {
        if((x + y) % 2 == 0) {
            board += " ";
        }
        else{
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);
