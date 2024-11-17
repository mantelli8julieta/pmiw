class Ingredientes {
  constructor() {
    this.posX = random(width);
    this.posY = random(-300, -900);
    this.velCaida = 5;
    this.tipo = int(random(0, 3));
    this.tamImg = 50;
    
    this.imgIngredientes = imgIngredientes[this.tipo];
  }

  actualizar(jugador) {
    this.mostrar();
    this.caer();
    this.reiniciarUbi();
    this.colisionJugador(jugador.posX, jugador.posY, jugador.tamImg);
  }

  mostrar() {
    push();
    translate(this.posX, this.posY);
    image(this.imgIngredientes, 0, 0, this.tamImg, this.tamImg);
    pop();
  }

  caer() {
    this.posY += this.velCaida;
  }

  reiniciarUbi() {
    if (this.posY > height) {
      this.posX = random(width);
      this.posY = random(-300, -900);
    }
  }

  colisionJugador(xJugador, yJugador, tamImg) {
    if (dist(this.posX, this.posY, xJugador, yJugador) < this.tamImg / 2 + 25) {
      this.posX = random(width);
      this.posY = random(-300, -900);
      juego.puntaje += 1;
    }
  }
}
