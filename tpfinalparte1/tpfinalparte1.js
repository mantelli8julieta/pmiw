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

  // Botones de inicio
  botonJugar = new Botones(210, 260, 200, 50, 'JUGAR');
  botonInstrucciones = new Botones(115, 420, 200, 50, 'Instrucciones');
  botonCreditos = new Botones(365, 420, 150, 50, 'Créditos');

  //botón reset
  botonReset = new Botones(215, 150, 200, 50, 'Reiniciar', '');

  // Pop-ups de instrucciones y créditos
  popUpCreditos = new Botones(150, 90, 350, 250, 'Créditos\nCódigo, Imágenes y Diseño:\nCarabatti Luna y Mantelli Julieta', 'Créditos');
  popUpInstrucciones = new Botones(150, 90, 350, 250, 'Remy tiene que cocinar\nun ratatouille!\nAyudalo recolectando ingredientes!\nGaná [30] puntos antes de que\nel tiempo se termine para ganar!', 'Instrucciones');

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
  
  console.log("el juego està activo?" + juegoActivo);
  
  cuadritoTexto();
  todasLasPantallas();

  print("pantalla es " + pantallaActual);

  image(botonSonido, 10, 10, 70, 70);

  //fuerza la pantalla de inicio para evitar interferencias
  if (pantallaActual == 0 && juegoActivo == false) {
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
    return;
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
