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

// Pantalla del juego
if (juegoActivo == true) {
  if (!juegoTerminado) {

    // Calcula el tiempo restante
    tiempoRestante = 45 - Math.floor((millis() - tiempoInicio) / 1000);

    if (tiempoRestante <= 0) {
      juegoTerminado = true;
      juegoActivo = false;

      if (juego.puntaje >= 30) {
        pantGanaste = true;
      } else {
        pantPerdiste = true;
      }
    } else {
      // Fondo del juego
      background(250);
      image(fondo, 0, 0, 640, 480);

      // Dibuja el temporizador
      textFont(fuentePuntos);
      fill(255); // Fondo del texto

      fill(255); // Texto negro
      textSize(30);
      text("Tiempo: " + tiempoRestante + "s", 400, 40); // Texto del temporizador

      juego.actualizar();
    }
  }
} else if (pantGanaste) {
  juego.mostrarGanaste();
} else if (pantPerdiste) {
  juego.mostrarPerdiste();
} else {
  // Fondo de la pantalla de inicio
  image(inicio, 0, 0, 640, 480);

  // Título del juego
  textFont(fuenteInicio);
  fill(255);
  textSize(40);
  text("Remy Catch!", 400, 80);

  botonJugar.mostrarBotonUno();
  botonInstrucciones.mostrarBotonDos();
  botonCreditos.mostrarBotonDos();
}

if (instruccionesVisibles) {
  popUpInstrucciones.mostrarPopUp();
}

if (creditosVisibles) {
  popUpCreditos.mostrarPopUp();
}

// /////////////////////////////// CLASE BOTONES
class Botones {
  constructor(posX, posY, botonAncho, botonAlto, textoBoton, textoDos) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = botonAncho;
    this.alto = botonAlto;
    this.texto = textoBoton;
    this.texto2 = textoDos;
  }

  mostrarBotonUno() {
    fill(color1);
    rect(this.posX, this.posY, this.ancho, this.alto, 20, 20, 20, 20);
    fill(10);
    textSize(32);
    textFont(fuenteInicio);
    text(this.texto, this.posX + 55, this.posY + 35);
  }

  mostrarBotonDos() {
    fill(color2);
    rect(this.posX, this.posY, this.ancho, this.alto, 20, 20, 20, 20);
    fill(10);
    textSize(32);
    textFont(fuenteInicio);
    text(this.texto, this.posX + 19, this.posY + 35);
  }

  mostrarPopUp() {
    fill(color2);
    rect(this.posX, this.posY, this.ancho, this.alto, 10, 10, 10, 10);
    fill(10);
    textSize(18);
    textFont(fuenteTextos);
    text(this.textoDos, this.posX + 50, this.posY + 25);
    text(this.texto, this. posX + 15, this.posY + 90);
    image(botonCerrar, 430, 100, 60, 60);
  }

  mostrarBotonReinicio() {
    fill(color1);
    rect(this.posX, this.posY, this.ancho, this.alto, 10, 10, 10, 10);
    textSize(18);
    textFont(fuenteTextos);
    fill(0);
    text(this.texto, this.posX + 55, this.posY + 30);
  }
}

// // usando la clase botones....

// Botones de inicio
botonJugar = new Botones(210, 260, 200, 50, 'JUGAR');
botonInstrucciones = new Botones(115, 420, 200, 50, 'Instrucciones');
botonCreditos = new Botones(365, 420, 150, 50, 'Créditos');

//botón reset
botonReset = new Botones(215, 150, 200, 50, 'Reiniciar', '');

// Pop-ups de instrucciones y créditos
popUpCreditos = new Botones(150, 90, 350, 250, 'Créditos\nCódigo, Imágenes y Diseño:\nCarabatti Luna y Mantelli Julieta', 'Créditos');
popUpInstrucciones = new Botones(150, 90, 350, 250, 'Remy tiene que cocinar\nun ratatouille!\nAyudalo recolectando ingredientes!\nGaná [50] puntos antes de que\nel tiempo se termine para ganar!', 'Instrucciones');

// Mostrar pop-ups si están activos
if (instruccionesVisibles) {
  popUpInstrucciones.mostrarPopUp();
}

if (creditosVisibles) {
  popUpCreditos.mostrarPopUp();
}


// /////////////////////////////// CLASE INGREDIENTES

class Ingredientes {
  constructor() {
    this.posX = random(width);
    this.posY = random(-300, -1300);
    this.velCaida = 3;
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

// //////////////// CLASE JUGADOR

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
