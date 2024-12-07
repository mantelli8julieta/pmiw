class Juego {
  constructor(xJugador, yJugador) {
    this.temporizador = 0;
    this.inicio = 0; // aparte del temporizador, lo que se guarda es el "momento" en que el juego empieza
    this.puntaje = 0;
    this.jugador = new Jugador(mouseX, 400);
    this.cantIngredientes = 5;

    this.ingredientes = [];
    for (let i =0; i < this.cantIngredientes; i++) {
      this.ingredientes.push(new Ingredientes());
    }
  }

  actualizar() {
    //image(fondo, 0, 0, 640, 480);
    this.jugador.actualizar();
    for (let i = 0; i < this.ingredientes.length; i++) {
      this.ingredientes[i].actualizar(this.jugador);
    }
    this.mostrarPuntaje();
    //  this.logicaGanarPerder();
  }

  mostrarPuntaje() {
    push();
    fill(255);
    textFont(fuentePuntos);
    textSize(30);
    text("Puntos: " + this.puntaje, 10, 40);
    pop();
  }

  tiempoDesdeJuegoActivo() {
    if (juegoActivo == true) {
      return  (millis() - this.inicio / 1000);
      //se divide en 1000 para conseguir los segundos
    } else {
      return 0;
    }
  }

  mostrarJuego() {
    juego.actualizar();
    this.jugador.actualizar();
  }

  mostrarPerdiste() {
    image(perdiste, 0, 0, 640, 480);
    textSize(40);
    fill(255);
    botonReset.mostrarBotonReinicio();
  }

  mostrarGanaste() {
    image(ganaste, 0, 0, 640, 480);
    textSize(40);
    fill(255);
    botonReset.mostrarBotonReinicio();
  }
}
