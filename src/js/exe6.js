"use strict";
class Carro {
    constructor(consumoCombustivel, nivelCombustivel) {
        this.consumoCombustivel = consumoCombustivel;
        this.nivelCombustivel = nivelCombustivel ?? 0;
    }
    andar(distancia) {
        const combustivelNecessario = distancia / this.consumoCombustivel;
        if (this.nivelCombustivel > combustivelNecessario) {
            this.nivelCombustivel -= combustivelNecessario;
        }
        return this.nivelCombustivel;
    }
    getNivelCombustivel() {
        return this.nivelCombustivel;
    }
    addNivelCombustivel(qntd) {
        this.nivelCombustivel += qntd;
    }
}
