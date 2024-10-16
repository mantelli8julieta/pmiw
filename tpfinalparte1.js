/* TP#Final - Comisión 3, David Bedoian
 Mantelli Julieta 94730/3 - Luna Carabatti
 Película elegida: Ratatouille
 Video explicativo:
 */

var pantallaActual = 0;
var pantallasTotales = 15;
let titulos, parrafos, texto;
let fondos = [];

function setup() {
  createCanvas(640, 480);
  /*hay q crear ciclos for para:
   1- la carga de imágenes
   2- para cargar strings
   3-
   */
}

function preload() {
  texto = loadStrings("assets/parrafos.txt");
  titulos = loadFont("assets/fuentes/Corben-Regular.ttf");
  parrafos = loadFont("assets/fuentes/RobotoSlab.ttf");
  for (let num = 0; num < pantallasTotales; num+=1) {
    fondos[num] = loadImage("/assets/imgs/img" + num + ".jpg");
  }
}


function draw() {
  background(201, 198, 179);
  fill(51, 0, 15);
  textFont(titulos);
  textSize(50);
  text("RATATOUILLE", 140, 240);
  textSize(25);
  textFont(parrafos);
  text("parrafo esto es un parrafo mira q lindo parrafo!", 100, 275);
  cuadritoTexto();
  todasLasPantallas();

  print("mouseX es " + mouseX);
  print("mouseY es " + mouseY);
  

}

function mousePressed() {
  interaccionPantallas(mouseX, mouseY);
}
