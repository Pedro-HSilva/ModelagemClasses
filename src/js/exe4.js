"use strict";
class Calculadora {
    constructor() {
        this.resultado = 0;
        this.historico = [];
    }
    Soma(num, num2) {
        this.resultado = num + num2;
        this.historico.push(`${num} + ${num2} = ${this.resultado}`);
        console.log(`${num} + ${num2} = ${this.resultado}`);
        this.resultado = 0;
    }
    Subtrai(num, num2) {
        this.resultado = num - num2;
        this.historico.push(`${num} - ${num2} = ${this.resultado}`);
        console.log(`${num} - ${num2} = ${this.resultado}`);
        this.resultado = 0;
    }
    Multiplica(num, num2) {
        this.resultado = num * num2;
        this.historico.push(`${num} * ${num2} = ${this.resultado}`);
        console.log(`${num} * ${num2} = ${this.resultado}`);
        this.resultado = 0;
    }
    Divide(num, num2) {
        this.resultado = num / num2;
        this.historico.push(`${num} / ${num2} = ${this.resultado}`);
        console.log(`${num} / ${num2} = ${this.resultado}`);
        this.resultado = 0;
    }
    Historico() {
        this.historico.forEach(function (item, indice) {
            console.log(indice, item);
        });
    }
}
