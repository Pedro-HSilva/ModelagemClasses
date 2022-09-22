class Calculadora {
  resultado: number = 0;
  historico: string[] = [];

  Soma(num: number, num2: number) {
    this.resultado = num + num2;
    this.historico.push(`${num} + ${num2} = ${this.resultado}`);
    console.log(`${num} + ${num2} = ${this.resultado}`);
    this.resultado = 0;
  }

  Subtrai(num: number, num2: number) {
    this.resultado = num - num2;
    this.historico.push(`${num} - ${num2} = ${this.resultado}`);
    console.log(`${num} - ${num2} = ${this.resultado}`);
    this.resultado = 0;
  }

  Multiplica(num: number, num2: number) {
    this.resultado = num * num2;
    this.historico.push(`${num} * ${num2} = ${this.resultado}`);
    console.log(`${num} * ${num2} = ${this.resultado}`);
    this.resultado = 0;
  }

  Divide(num: number, num2: number) {
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
