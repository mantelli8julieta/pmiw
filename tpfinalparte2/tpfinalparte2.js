let tiempoRestante = 45; // Tiempo inicial en segundos
let tiempoInicio; // Almacena el tiempo cuando se inicia el juego
let juegoTerminado = false;
let inicio ;
let imgIngredientes = [];
let juegoActivo = false;
let instruccionesVisibles = false;
let creditosVisibles = false;

let pantPerdiste = false;
let pantGanaste = false;

function preload() {
  inicio = loadImage("data/inicio.png");
  jugadorImg = loadImage("data/jugador.png");
  fondo = loadImage("data/fondojuego.png");
  fuentePuntos = loadFont("data/CENSCBK.ttf");
  fuenteInicio = loadFont("data/berlinSansReg.ttf");
  fuenteTextos = loadFont("data/MontserratMed.ttf");
  botonCerrar = loadImage("data/cerrar.png");
  ganaste = loadImage("data/ganaste.png");
  perdiste = loadImage("data/perdiste.png");

  // Carga de imgs para ingredientes
  for (let i = 0; i < 3; i++) {
    imgIngredientes[i] = loadImage("data/ingrediente_" + i + ".png");
  }
}

function setup() {
  colorMode(HSB);
  createCanvas(640, 480);

  // Colores botones
  color1 = color(46, 83, 96); // Amarillito
  color2 = color(77, 72, 99); // Verde claro

  juego = new Juego();
} // Bandera para verificar si terminó el tiempo

function draw() {
  console.log("draw() está funcionando");

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
