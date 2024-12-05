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
}
