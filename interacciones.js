function interaccionPantallas(mouseX, mouseY) {
  if (pantallaActual >= 0) {
    if (mouseX > 560 && mouseX < 600 && mouseY > 410 && mouseY < 450) {
      pantallaActual += 1;
    }
  }
}
