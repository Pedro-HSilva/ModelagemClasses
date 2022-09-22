"use strict";
class BombaCombustivel {
    constructor(tipo, valor, qtnd) {
        this.tipoCombustivel = tipo;
        this.valorLitro = valor;
        this.qntdCombustivel = qtnd;
    }
    AbastecerPorValor(valor) {
        const litrosCombustivel = valor / this.valorLitro;
        if (this.qntdCombustivel >= litrosCombustivel) {
            this.qntdCombustivel -= litrosCombustivel;
            console.log(`Com RS ${valor} você colocou ${litrosCombustivel} litros e sobrou ${this.qntdCombustivel}`);
            return;
        }
        console.log("Acabou o combustível");
    }
    AbastecerPorLitro(litro) {
        if (this.qntdCombustivel >= litro) {
            const valorFinal = litro * this.valorLitro;
            this.qntdCombustivel -= litro;
            console.log(`Com ${litro} litros você irá pagar R$ ${valorFinal} e irá sobrar ${this.qntdCombustivel}`);
            return;
        }
        console.log("Acabou o combustível");
    }
    AlterarValor(valor) {
        this.valorLitro = valor;
    }
    AlterarCombustivel(combustivel) {
        this.tipoCombustivel = combustivel;
    }
    AlterarQntdCombustivel(qtnd) {
        this.qntdCombustivel = qtnd;
    }
}
