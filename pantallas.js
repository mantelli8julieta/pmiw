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

function todasLasPantallas() {
  if (pantallaActual == 0) {
    image(fondos[0], 0, 0, 640, 480);
    botonContinuar();
  }

  if (pantallaActual == 1) {
    image(fondos[1], 0, 0, 640, 480);
    botonContinuar();
  }

  if (pantallaActual == 2) {
    image(fondos[2], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 3) {
    image(fondos[3], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 4) {
    image(fondos[4], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }
  if (pantallaActual == 5) {
    image(fondos[5], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 6) {
    image(fondos[6], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 7) {
    image(fondos[7], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 8) {
    image(fondos[8], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 9) {
    image(fondos[9], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 10) {
    image(fondos[10], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 11) {
    image(fondos[11], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 12) {
    image(fondos[12], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }

  if (pantallaActual == 13) {
    image(fondos[13], 0, 0, 640, 480);
    cuadritoTexto();
    botonContinuar();
  }
}
