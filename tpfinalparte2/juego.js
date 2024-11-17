class Juego {
  constructor(xJugador, yJugador) {
    this.temporizador = 0;
    this.puntaje = 0;
    //this.boton = new Boton();
    this.jugador = new Jugador(mouseX, 400);
    this.cantIngredientes = 5;

    this.ingredientes = [];
    for (let i =0; i < this.cantIngredientes; i++) {
      this.ingredientes.push(new Ingredientes());
    }
  }

  actualizar() {
    this.jugador.actualizar();
    for (let i = 0; i < this.ingredientes.length; i++) {
      this.ingredientes[i].actualizar(this.jugador);
    }
    this.mostrarPuntaje();
  }

  mostrarPuntaje() {
    push();
    fill(255);
    textFont(fuentePuntos);
    textSize(30);
    text("Puntos: " + this.puntaje, 10, 40);
    pop();
  }
}
