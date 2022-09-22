class Contador {
  valor: number;

  constructor() {
    this.valor = 0;
  }

  zerarValor() {
    this.valor = 0;
    console.log(`Valor do contador está em: ${this.valor}`);
  }

  incrementarValor(valor: number) {
    // this.valor = this.valor + valor;
    this.valor += valor;
    console.log(`O valor do contador está em: ${this.valor}`);
  }

  retornaValor() {
    return this.valor;
  }
}

const meuContador = new Contador();

meuContador.incrementarValor(2);
meuContador.valor;
meuContador.zerarValor();
meuContador.valor;
console.log(meuContador.retornaValor());
