/*
Mantelli Julieta - 94730/3
 Comisión 3 - David Bedoian
 link al video:
 */

// parámetros d color d la grilla
let param1;
let param2;
let param3;

// el brillo del color d la grilla
let colorBr;

//otras variables para el colorTransformar
var color1;
var colorGrillaEsp;
var originalColorGrillaEsp;

function preload() {
  laObra = loadImage("/assets/obratp4.png");
}

function setup() {
  createCanvas(800, 400);

  colorMode(HSB);

  param1 = 0;
  param2 = 0;
  param3 = 0;

  color1 = color(255);
  colorGrillaEsp = color(param1, param2, param3);
  originalColorGrillaEsp = colorGrillaEsp;
}

function draw() {
  background(255);

  image(laObra, 0, 0, 400, 400);
  translate(400, 0);

  maxGrilla = 10;
  tamRect = 40;

// map para alterar la saturación de color1 según el valor de mouseX
  colorBr = map(mouseX, 0, 800, -60, 100);

print(colorBr);

  // interacción de cambio de color con un click
  if (mouseIsPressed && mouseX > 400) {
    colorGrillaEsp = color(321, 50, colorBr);
  } else {
    colorGrillaEsp = color(param1, param2, param3);
  }

// for para la generación d la grilla (cuadrados)
  for (let grillaX = 0; grillaX < maxGrilla; grillaX += 1) {
    for (let grillaY = 0; grillaY < maxGrilla; grillaY += 1) {
      if ((grillaX + grillaY) %2 == 0) {
        fill(colorGrillaEsp);
      } else {
        fill(color1);
      }
      noStroke();
      rect(grillaX*tamRect, grillaY*tamRect, tamRect, tamRect);
    }
  }

  // condiciones para q pueda cambiar el color
  colorTransformar(mouseX);
  if (mouseX > 400) {
    movElipses(mouseX - 400, mouseY);
  }
}
