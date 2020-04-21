let grav_tierra = 9.8, grav_marte = 3.7, 
    grav_jupiter = 24.8, peso = 68, peso_final;

peso_final = peso * grav_marte / grav_tierra;
peso_final = parseInt(peso_final);
document.write(`${peso_final} MS cuadrados`);