function cuadritoTexto() {
  fill(170, 146, 131);
  rect(20, 340, 600, 125, 10);
  fill(0);
  textSize(15);
  text(texto[pantallaActual], 30, 370);
}

function interaccionPantallas(mouseX, mouseY) {
  if (pantallaActual >= 0) {
    if (mouseX > 580 && mouseX < 595 && mouseY > 430 && mouseY < 470) {
      pantallaActual += 1;
    }
  }
}
