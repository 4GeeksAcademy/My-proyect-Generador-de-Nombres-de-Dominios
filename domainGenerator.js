// Array de marcas
let marcas = ["eco", "innovate", "connect", "global", "smart"];

// Array de adjetivos
let adj = ["dynamic", "green", "visionary", "creative", "efficient"];

// Array de dominios comerciales
let dominioComercial = [".com", ".net", ".org"];

// Combinaciones de nombres de dominio
for (let marca of marcas) {
    for (let adjetivo of adj) {
        for (let dominio of dominioComercial) {
            // Impresion 
            console.log("www." + marca + adjetivo + dominio);
        }
    }
}