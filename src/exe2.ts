class Bola {
  cor: string;
  cirfunferencia: number;
  material: string;

  constructor(cor: string, circunferencia: number, material: string) {
    this.cor = cor;
    this.cirfunferencia = circunferencia;
    this.material = material;
  }

  trocarCor(cor: string) {
    this.cor = cor;
    console.log(`A cor da bola é ${this.cor}`);
  }

  mostrarCor() {
    return this.cor;
  }
}
