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
  inicio = loadImage ("data/inicio.png");

  //colores botones
  color1 = color(46, 83, 96);
  color2 = color(77, 72, 99);

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
  botonJugar = new Botones(210, 260, 200, 50, 'JUGAR');
  botonInstrucciones = new Botones(115, 420, 200, 50, 'Instrucciones');
  botonCreditos = new Botones(365, 420, 150, 50, 'Créditos');

  botonJugar.mostrarBotonUno();
  botonInstrucciones.mostrarBotonDos();
  botonCreditos.mostrarBotonDos();

  // print("mouseX = " + mouseX);
  // print("mouseY = " + mouseY);
}

function mousePressed() {
  //interacciones botones
  // botón jugar
  if (mouseX > 210 && mouseX < 410 && mouseY > 260 && mouseY < 310) {
    juegoActivo = true;
    juego.mostrarJuego();
    juego.actualizar();
  }

  //botón instrucciones
 

  //botón créditos


  // juego.mostrarJuego();
  // juego.actualizar();
}
