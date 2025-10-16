// Exemplo de if aninhado dentro de if
function decidirJogo(joelho, semChuva, churrasco) {
    if (joelho) { // Se o joelho estiver bom
        if (semChuva) {
            console.log("Vou jogar no Dois Irmãos");
        } else {
            if (churrasco) {
                console.log("Vou jogar no Falcatrua");
            } else {
                console.log("Vou jogar no Clube");
            }
        }
    } else {
        console.log("Vou ficar em casa");
    }
}

// Exemplos de uso:
decidirJogo(true, true, false);   // -> Vou jogar no Dois Irmãos
decidirJogo(true, false, true);   // -> Vou jogar no Falcatrua
decidirJogo(true, false, false);  // -> Vou jogar no Clube
decidirJogo(false, true, true);   // -> Vou ficar em casa