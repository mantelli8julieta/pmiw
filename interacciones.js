/*function botonSonido(mouseX, mouseY) {
 if (mouseX > 10 && mouseX < 100 && mouseY > 10 && mouseY < 100) {
 return true;
 } else {
 return false;
 }
 }
 */
function interaccionPantallas(mouseX, mouseY) {
  //botón iniciar aventura
  if (pantallaActual == 0) {
    if (mouseX > 200 && mouseX < 450 && mouseY > 200 && mouseY < 300) {
      pantallaActual = 2;
      //botón créditos
    } else if (mouseX > 200 && mouseX < 450 && mouseY > 310 && mouseY < 400) {
        pantallaActual = 1;
      }
    
  }

  //botón volver de los créditos
 else if (pantallaActual == 1) {
   if (mouseX > 30 && mouseX < 130 && mouseY > 390 && mouseY < 430) {
      pantallaActual = 0;
    }
  }

  //botón continuar (pantallas q siempre avanzan a la próxima)
 else if (pantallaActual == 3 || pantallaActual == 6 || pantallaActual == 7  ||pantallaActual == 11 || pantallaActual == 12) {
  if (mouseX > 560 && mouseX < 600 && mouseY > 410 && mouseY < 450) {
      pantallaActual += 1;
    }
  }

  //pantallas de decisión
  else if (pantallaActual == 2) {
    //opción A
   if (mouseX > 174 && mouseX < 272 && mouseY > 425 && mouseY < 455) {
      pantallaActual = 3;
    } else if (mouseX > 370 && mouseX < 468 && mouseY > 425 && mouseY < 455) {
        pantallaActual = 14;
      }
    
  }

else  if (pantallaActual == 4) {
    //opción A
   if (mouseX > 174 && mouseX < 272 && mouseY > 425 && mouseY < 455) {
      pantallaActual = 5;
    } else if (mouseX > 370 && mouseX < 468 && mouseY > 425 && mouseY < 455) {
        pantallaActual = 6;
      }
    
  }

  else if (pantallaActual == 8) {
    //opción A
  if (mouseX > 174 && mouseX < 272 && mouseY > 425 && mouseY < 455) {
      pantallaActual = 9;
    } else if(mouseX > 370 && mouseX < 468 && mouseY > 425 && mouseY < 455) {
        pantallaActual = 10;
      
    }
  }

  else if (pantallaActual == 10) {
    //opción A
   if (mouseX > 174 && mouseX < 272 && mouseY > 425 && mouseY < 455) {
      pantallaActual = 11;
    }//opción B
      else if(mouseX > 370 && mouseX < 468 && mouseY > 425 && mouseY < 455) {
       pantallaActual = 12;
      }
  }

  //opción B// Cambio directo de pantalla 11 a 13
  else if (pantallaActual == 11) {
   if (mouseX > 560 && mouseX < 600 && mouseY > 410 && mouseY < 450) {
      pantallaActual = 13;
    }
  }
// Opción A en la pantalla 12
  else if (pantallaActual == 12) {
    if (mouseX > 174 && mouseX < 272 && mouseY > 425 && mouseY < 455) {
      pantallaActual = 13;
    }
  }

  //botón reset para pantallas finales
else  if (pantallaActual == 5 || pantallaActual == 9 || pantallaActual == 13 || pantallaActual == 14) {
  if (mouseX > 273 && mouseX < 373 && mouseY > 425 && mouseY < 455) {
      pantallaActual = 0;
    }
  }
}
