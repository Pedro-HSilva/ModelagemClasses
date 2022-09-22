class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  qntdCombustivel: number;

  constructor(tipo: string, valor: number, qtnd: number) {
    this.tipoCombustivel = tipo;
    this.valorLitro = valor;
    this.qntdCombustivel = qtnd;
  }

  AbastecerPorValor(valor: number) {
    const litrosCombustivel = valor / this.valorLitro;
    if (this.qntdCombustivel >= litrosCombustivel) {
      this.qntdCombustivel -= litrosCombustivel;
      console.log(
        `Com RS ${valor} você colocou ${litrosCombustivel} litros e sobrou ${this.qntdCombustivel}`
      );
      return;
    }
    console.log("Acabou o combustível");
  }

  AbastecerPorLitro(litro: number) {
    if (this.qntdCombustivel >= litro) {
      const valorFinal = litro * this.valorLitro;
      this.qntdCombustivel -= litro;
      console.log(
        `Com ${litro} litros você irá pagar R$ ${valorFinal} e irá sobrar ${this.qntdCombustivel}`
      );
      return;
    }
    console.log("Acabou o combustível");
  }

  AlterarValor(valor: number) {
    this.valorLitro = valor;
  }

  AlterarCombustivel(combustivel: string) {
    this.tipoCombustivel = combustivel;
  }

  AlterarQntdCombustivel(qtnd: number) {
    this.qntdCombustivel = qtnd;
  }
}
