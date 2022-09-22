"use strict";
class Bola {
    constructor(cor, circunferencia, material) {
        this.cor = cor;
        this.cirfunferencia = circunferencia;
        this.material = material;
    }
    trocarCor(cor) {
        this.cor = cor;
        console.log(`A cor da bola é ${this.cor}`);
    }
    mostrarCor() {
        return this.cor;
    }
}
