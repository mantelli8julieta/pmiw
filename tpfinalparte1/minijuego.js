let jugador;
let imgIngredientes = [];
let juego;

for (let i = 0; i < 3; i++) {
  imgIngredientes[i] = loadImage("data/ingrediente_"+i+".png");
}

//creación clase juego
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
  
  this.mostrarJuego() {
  juego.
  }
   
}

// creación de clase jugador
class Jugador {
  constructor(xJugador, yJugador) {
    this.posX = xJugador;
    this.posY = yJugador;
    this.vel = 5;
    this.tamImg = 80;
  }

  actualizar() {
    this.mostrar();
    this.mover();
  }

  mostrar() {
    image(jugadorImg, this.posX, this.posY, this.tamImg, this.tamImg);
  }

  mover() {
    this.posX = constrain(mouseX, 0, width - this.tamImg);
  }
}

// creación de clase ingredientes
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
