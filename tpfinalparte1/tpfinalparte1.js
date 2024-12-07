/* TP#Final - Comisión 3, David Bedoian
 Mantelli Julieta 94730/3 - Luna Carabatti
 Película elegida: Ratatouille
 Video explicativo:
 */

// variables de la aventura gràfica
var pantallaActual = 0;
var pantallasTotales = 16;
let titulos, parrafos, texto;
let fondos = [];
let musicaFondo;
let reproduciendo = false;
let juegoGanado = false;

 //variables del juego
  let tiempoRestante = 45; // Tiempo inicial en segundos
  let tiempoInicio; // Almacena el tiempo cuando se inicia el juego
  let juegoTerminado = false;
  let inicioJuego = 0;
  let imgIngredientes = [];
  let juegoActivo = false;
  let instruccionesVisibles = false;
  let creditosVisibles = false;

  let pantPerdiste = false;
  let pantGanaste = false;


let color1, color2;

function preload() {
  texto = loadStrings("assets/parrafos.txt");
  titulos = loadFont("assets/fuentes/Corben-Regular.ttf");
  parrafos = loadFont("assets/fuentes/RobotoSlab.ttf");
  botonSonido = loadImage("/assets/imgs/botonSonido.png");
  soundFormats('mp3');
  musicaFondo = loadSound('assets/lefestin.mp3');

  // assets del juego
  inicio = loadImage("assets/assetsjuego/inicio.png");
  jugadorImg = loadImage("assets/assetsjuego/jugador.png");
  fondo = loadImage("assets/assetsjuego/fondojuego.png");
  fuentePuntos = loadFont("assets/assetsjuego/CENSCBK.ttf");
  fuenteInicio = loadFont("assets/assetsjuego/berlinSansReg.ttf");
  fuenteTextos = loadFont("assets/assetsjuego/MontserratMed.ttf");
  botonCerrar = loadImage("assets/assetsjuego/cerrar.png");
  ganaste = loadImage("assets/assetsjuego/ganaste.png");
  perdiste = loadImage("assets/assetsjuego/perdiste.png");


  for (let i = 0; i < 3; i++) {
    imgIngredientes[i] = loadImage("assets/assetsjuego/ingrediente_" + i + ".png");
  }

  for (let num = 0; num < pantallasTotales; num+=1) {
    fondos[num] = loadImage("assets/imgs/img" + num + ".jpg");
  }
}

function setup() {
  colorMode(HSB);
  color1 = color(46, 83, 96); // Amarillito
  color2 = color(77, 72, 99); // Verde claro

  createCanvas(640, 480);
  musicaFondo.setVolume(0.5);
  musicaFondo.onended(() => {
    if (reproduciendo) {
      musicaFondo.play();
    }
  }
  );

  function reiniciarSonido() {
    musicaFondo.play();
  }

  juego = new Juego();
}


function draw() {
  background(201, 198, 179);
  cuadritoTexto();
  todasLasPantallas();

  print("pantalla es " + pantallaActual);

  /*print("mouseX es " + mouseX);
   print("mouseY es " + mouseY);*/
  image(botonSonido, 10, 10, 70, 70);

  juego.actualizar();

  print("tiempo: " + tiempoRestante);
  print("mouseX: " + mouseX);
  print("mouseY: " + mouseY);
}

function mousePressed() {
  interaccionPantallas(mouseX, mouseY);
  if (mouseX > 10 && mouseX < 100 && mouseY > 10 && mouseY < 100 && pantallaActual == 0) {
    if (!reproduciendo) {
      musicaFondo.play();
      reproduciendo = true;
    }
  }

  // botón jugar
  if (mouseX > 210 && mouseX < 410 && mouseY > 260 && mouseY < 310) {
    juegoActivo = true;
    juegoTerminado = false; // Reinicia el estado del juego
    tiempoInicio = millis(); // Registra el tiempo inicial
  }

  //botón instrucciones
  if (mouseX > 115 && mouseX < 315 && mouseY > 420 && mouseY < 470 && !juegoActivo) {
    instruccionesVisibles = true;
  } else if (instruccionesVisibles && mouseX > 437 && mouseX < 481 && mouseY > 108 && mouseY < 150) {
    instruccionesVisibles = false;
  }

  //botón créditos
  if (mouseX > 365 && mouseX < 515 && mouseY > 420 && mouseY < 470 && !juegoActivo) {
    creditosVisibles = true;
  } else if (creditosVisibles && mouseX > 437 && mouseX < 481 && mouseY > 108 && mouseY < 150) {
    creditosVisibles = false;
  }

  //botón reset
  if (mouseX > 215 && mouseX < 450 && mouseY > 150 && mouseY < 200 && (pantGanaste || pantPerdiste)) {
    juegoActivo = false;
    juegoTerminado = false;
    pantGanaste = false;
    pantPerdiste = false;
    tiempoRestante = 90;
    juego = new Juego();
  }
}
