/*
TP Final PMIW (parte 2) (recuperatorio 7/12)
 Comisión 3 - David Bedoian
 Carabatti Luna y Mantelli Julieta
 Video explicativo:
 */

let jugador;
let imgIngredientes = [];
let juego;

let juegoActivo = false;
let instruccionesVisibles = false;
let creditosVisibles = false;

let color1;
let color2;

function setup() {
  colorMode(HSB);
  createCanvas(640, 480);

  //imgs
  jugadorImg = loadImage("data/jugador.png");
  fondo = loadImage("data/fondojuego.png");
  fuentePuntos = loadFont("data/CENSCBK.ttf");
  fuenteInicio = loadFont("data/berlinSansReg.ttf");
  fuenteTextos = loadFont("data/MontserratMed.ttf");
  inicio = loadImage ("data/inicio.png");
  botonCerrar = loadImage("data/cerrar.png");
  ganaste = loadImage("data/ganaste.png");
  perdiste = loadImage("data/perdiste.png");

  //colores botones
  color1 = color(46, 83, 96); //amarillito
  color2 = color(77, 72, 99); // verde claro

  //carga de imgs para ingredientes
  for (let i = 0; i < 3; i++) {
    imgIngredientes[i] = loadImage("data/ingrediente_"+i+".png");
  }

  juego = new Juego();
}

function draw() {
  background(250);
  image(inicio, 0, 0, 640, 480);

  textFont(fuenteInicio);
  fill(255);
  textSize(40);
  text("Remy Catch!", 400, 80);

  //botones inicio
  botonJugar = new Botones(210, 260, 200, 50, 'JUGAR');
  botonInstrucciones = new Botones(115, 420, 200, 50, 'Instrucciones');
  botonCreditos = new Botones(365, 420, 150, 50, 'Créditos');

  botonJugar.mostrarBotonUno();
  botonInstrucciones.mostrarBotonDos();
  botonCreditos.mostrarBotonDos();

  // pop ups: instrucciones y créditos
  popUpCreditos = new Botones(150, 90, 350, 250, 'Créditos\nCódigo, Imágenes y Diseño:\nCarabatti Luna y Mantelli Julieta', 'Créditos');
  popUpInstrucciones = new Botones(150, 90, 350, 250, 'Remy tiene que cocinar\nun ratatouille!\nAyudalo recolectando ingredientes!\nGaná [50] puntos antes de que\nel tiempo se termine para ganar!', 'Instrucciones');
  // PopUpCréditos

  if (juegoActivo == true) {
    juego.mostrarJuego();
    juego.actualizar();
  }

  if (instruccionesVisibles == true) {
    popUpInstrucciones.mostrarPopUp();
  }

  if (creditosVisibles == true) {
    popUpCreditos.mostrarPopUp();
  }

  //temporizador (en el draw pq sino no se actualiza el valor)
  if (juegoActivo == true) {
    juego.temporizador =+ 1;
  }

  //debug
  //print("mouseX = " + mouseX);
  //print("mouseY = " + mouseY);
  print("tiempo: " + juego.temporizador);
  print("incio: " + juego.inicio);
}

function mousePressed() {
  //interacciones botones
  // botón jugar
  if (mouseX > 210 && mouseX < 410 && mouseY > 260 && mouseY < 310) {
    juegoActivo = true;
    juego.inicio = millis(); // millis cuenta el tiempo de ejecución del programa
  }

  //botón instrucciones
  if (mouseX > 115 && mouseX < 315 && mouseY > 420 && mouseY < 470 && juegoActivo == false) {
    instruccionesVisibles = true;
  } else if (instruccionesVisibles == true && mouseX > 437 && mouseX < 481 && mouseY > 108 && mouseY < 150) {
    instruccionesVisibles = false;
  }

  //botón créditos
  if (mouseX > 365 && mouseX < 515 && mouseY > 420 && mouseY < 470 && juegoActivo == false) {
    creditosVisibles = true;
  } else if (creditosVisibles == true && mouseX > 437 && mouseX < 481 && mouseY > 108 && mouseY < 150) {
    creditosVisibles = false;
  }
}
