let grav_tierra = 9.8;
let grav_marte = 3.7;
let grav_jupiter = 24.8;
let peso_final;
let pregunta = prompt('¿Peso en marte o jupiter?')
let usuario = prompt('¿cuál es tu peso?');
let peso = Number(usuario);

if(pregunta === "marte") {
    peso_final = parseInt(usuario * grav_marte / grav_tierra);
    document.write(`tu peso en marte es de: ${peso_final} kilogramos`);
}
else if (pregunta === "jupiter") {
    peso_final = parseInt(usuario * grav_jupiter / grav_tierra);
    document.write(`tu peso en jupiter es de: ${peso_final} kilogramos`)
}

else {
    peso_final = grav_jupiter * 1000;
    peso_final = Number(peso_final)
    document.write(`tu peso en otro planeta es de ${peso_final} kilogramos ¡Cerdo!`);
}


