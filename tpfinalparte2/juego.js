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
    image(fondo, 0, 0, 640, 480);
    this.jugador.actualizar();
    for (let i = 0; i < this.ingredientes.length; i++) {
      this.ingredientes[i].actualizar(this.jugador);
    }
    this.mostrarPuntaje();
    // this.logicaTemporizador();
  }

  mostrarPuntaje() {
    push();
    fill(255);
    textFont(fuentePuntos);
    textSize(30);
    text("Puntos: " + this.puntaje, 10, 40);
    pop();
  }

  logicaTemporizador() {
    if (juegoActivo = true) {
    } else if (this.temporizador == 70 && puntaje <= 50) {
      this.temporizador =+ 0.5;
    }
  }

  mostrarJuego() {
    juego.actualizar();
    this.jugador.actualizar();
  }
}
