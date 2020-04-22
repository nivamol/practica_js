// -------- Canva

let d = document.getElementById("dibujito");
let lienzo = d.getContext('2d'); 
console.log(lienzo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea("green", 100, 300, 210, 10);
dibujarLinea("blue",10, 210, 300, 100);