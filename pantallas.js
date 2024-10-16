function pantallaInicio() {
  fill(51, 0, 15);
  textFont(titulos);
  textSize(50);
  noStroke();
  fill(250, 187, 68);
  rect(132, 90, 390, 70);
  fill(72, 25, 15);
  text("RATATOUILLE", 140, 140);
  textSize(25);
  fill(170, 146, 131);
  rect(200, 200, 250, 90, 10);
  rect(200, 310, 250, 90, 10);
  textFont(parrafos);
  fill(51, 0, 15);
  text("iniciar", 290, 255);
  text("créditos", 280, 365);
}

function botonRESET() {
  fill(64, 53, 33);
  rect(273, 425, 100, 30);
  fill(255);
  text("RESET", 298, 445);
}


function cuadritoTexto() {
  fill(170, 146, 131);
  rect(20, 340, 600, 125, 10);
  fill(0);
  textSize(15);
  text(texto[pantallaActual], 30, 370, 580, 250);
}

function botonContinuar() {
  rect(560, 410, 40, 40);
  fill(255);
  triangle(575, 420, 575, 440, 590, 431);
}

function botonesDecisiones() {
  noStroke();
  fill(64, 53, 33);
  rect(175, 425, 100, 30);
  rect(370, 425, 100, 30);
  fill(255);
  text("[A]", 220, 445);
  text("[B]", 413, 445);
}


function todasLasPantallas() {
  if (pantallaActual == 0) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    pantallaInicio();
  }

  if (pantallaActual == 1) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
  }

  if (pantallaActual == 2) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonesDecisiones();
  }

  if (pantallaActual == 3) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 4) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonesDecisiones();
  }

  if (pantallaActual == 5) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonRESET();
  }

  if (pantallaActual == 6) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 7) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 8) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonesDecisiones();
  }

  if (pantallaActual == 9) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonRESET();
  }

  if (pantallaActual == 10) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonesDecisiones();
  }

  if (pantallaActual == 11) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 12) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonesDecisiones();
  }

  if (pantallaActual == 13) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonRESET();
  }


  if (pantallaActual == 14) {
    image(fondos[pantallaActual], 0, 0, 640, 480);
    cuadritoTexto();
    botonRESET();
  }
}
