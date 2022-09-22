"use strict";
class ContaCorrente {
    constructor(numero, nome) {
        this.numeroConta = numero;
        this.nomeCorrentista = nome;
        this.saldo = 0;
    }
    AlterarNome(nome) {
        this.nomeCorrentista = nome;
        console.log(`Nome alterado para: ${this.nomeCorrentista}`);
    }
    Deposito(numero) {
        return console.log((this.saldo += numero));
    }
    Saque(saque) {
        if (this.saldo - saque < 0) {
            console.log(`O valor de saque solicitado ultrapassa o limite do seu saldo. Seu saldo atual é de ${this.saldo}`);
        }
        else {
            this.saldo = this.saldo - saque;
            console.log(`Saque efetuado com sucesso. Seu novo saldo é de: ${this.saldo}`);
        }
    }
    MostrarSaldo() {
        return console.log(this.saldo);
    }
}
const conta = new ContaCorrente("5555", "Pedro");
conta.Deposito(2000);
conta.Saque(3000);
conta.MostrarSaldo();
