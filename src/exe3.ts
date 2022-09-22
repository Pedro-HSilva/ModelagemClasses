class ContaCorrente {
  numeroConta: string;
  nomeCorrentista: string;
  private saldo: number;

  constructor(numero: string, nome: string) {
    this.numeroConta = numero;
    this.nomeCorrentista = nome;
    this.saldo = 0;
  }

  AlterarNome(nome: string) {
    this.nomeCorrentista = nome;
    console.log(`Nome alterado para: ${this.nomeCorrentista}`);
  }

  Deposito(numero: number) {
    return console.log((this.saldo += numero));
  }

  Saque(saque: number) {
    if (this.saldo - saque < 0) {
      console.log(
        `O valor de saque solicitado ultrapassa o limite do seu saldo. Seu saldo atual é de ${this.saldo}`
      );
    } else {
      this.saldo = this.saldo - saque;
      console.log(
        `Saque efetuado com sucesso. Seu novo saldo é de: ${this.saldo}`
      );
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
