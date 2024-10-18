/* TP#Final - Comisión 3, David Bedoian
 Mantelli Julieta 94730/3 - Luna Carabatti
 Película elegida: Ratatouille
 Video explicativo:
 */

var pantallaActual = 0;
var pantallasTotales = 15;
let titulos, parrafos, texto;
let fondos = [];
// let leFestin;

function setup() {
  createCanvas(640, 480);
  // leFestin = document.getElementById("leFestinBGM");
}

function preload() {
  texto = loadStrings("assets/parrafos.txt");
  titulos = loadFont("assets/fuentes/Corben-Regular.ttf");
  parrafos = loadFont("assets/fuentes/RobotoSlab.ttf");
  botonSonido = loadImage("/assets/imgs/botonSonido.png");

  for (let num = 0; num < pantallasTotales; num+=1) {
    fondos[num] = loadImage("/assets/imgs/img" + num + ".jpg");
  }
}


function draw() {
  background(201, 198, 179);
  cuadritoTexto();
  todasLasPantallas();

  print("pantalla es " + pantallaActual);

  /*print("mouseX es " + mouseX);
   print("mouseY es " + mouseY);*/
  image(botonSonido, 10, 10, 70, 70);
}
function mousePressed() {
  interaccionPantallas(mouseX, mouseY);
  /*   if (botonSonido == true) {
   leFestin.currentTime = 0;
   leFestin.play();
   }
   if (botonSonido == false) {
   leFestin.pause();
   }
   }
   */
}
