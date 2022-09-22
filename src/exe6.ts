class Carro {
  consumoCombustivel: number;
  nivelCombustivel: number;

  constructor(consumoCombustivel: number, nivelCombustivel?: number) {
    this.consumoCombustivel = consumoCombustivel;
    this.nivelCombustivel = nivelCombustivel ?? 0;
  }

  andar(distancia: number) {
    const combustivelNecessario = distancia / this.consumoCombustivel;
    if (this.nivelCombustivel > combustivelNecessario) {
      this.nivelCombustivel -= combustivelNecessario;
    }

    return this.nivelCombustivel;
  }

  getNivelCombustivel() {
    return this.nivelCombustivel;
  }

  addNivelCombustivel(qntd: number) {
    this.nivelCombustivel += qntd;
  }
}
