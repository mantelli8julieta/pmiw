class Botones {
  constructor(posX, posY, botonAncho, botonAlto, textoBoton) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = botonAncho;
    this.alto = botonAlto;
    this.texto = textoBoton;
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
}
