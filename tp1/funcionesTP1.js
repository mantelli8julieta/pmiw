//función para movimiento de elipses contenidos en la grilla

function movElipses(mouseX, mouseY) {
  let tamElipse = 17;
  let offsetElipse = tamRect / 2 - tamElipse / 2;

  for (let grilla2X = 0; grilla2X < maxGrilla; grilla2X += 1) {
    for (let grilla2Y = 0; grilla2Y < maxGrilla; grilla2Y += 1) {
      if ((grilla2X + grilla2Y) % 2 == 0) {
        noStroke();
        fill(color1);
      } else {
        fill(colorGrillaEsp);
      }
      let valConstrainY = constrain(mouseY, grilla2Y * tamRect, (grilla2Y + 1) * tamRect - tamElipse);
      let valConstrainX = constrain(mouseX, grilla2X * tamRect, (grilla2X + 1) * tamRect - tamElipse);

      ellipse(valConstrainX + offsetElipse - 3, valConstrainY + offsetElipse - 3, tamElipse, tamElipse);
    }
  }
}


// función para el cambio de color d la grilla

function colorTransformar(mouseX) {
  if (mouseIsPressed && mouseX > 400) {
    return true;
  } else {
    return false;
  }
}
