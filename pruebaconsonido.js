let imagen = [];
let misTextos =[];
let estado;
let sound;

function preload() {
  for (let i = 0; i < 9; i++) {
    imagen[i] = loadImage("data/imagen" + i + ".jpeg");
    misTextos[i] = loadStrings("data/pikachu.txt");
    sound = loadSound("data/sound.mp3");
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 9; i++) {
    imagen[i].resize(640, 480);
  }
  estado = "inicio";
}

function draw() {
  background(200);

  if (estado === "inicio") {
      cargaOtraImagen(imagen[0], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(240, 370, 100, 40);
    
    fill(255); 
    textSize(20); 
    textAlign(CENTER); 
    text("\n\n\nEn la futurista Ryme City,\ndonde humanos y Pokémon conviven,\nTim Goodman llega decidido a descubrir\nla verdad sobre la desaparición de su padre, Harry", width / 2, 120);
  } else if (estado === "primera") {
    cargaOtraImagen(imagen[1], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(240, 370, 100, 40); //boton del centro 
    fill(255); 
    textSize(20); 
    textAlign(CENTER); 
    text("\n\n\n\nTe encuentras en la oficina de tu padre,\n un lugar lleno de recuerdos y de promesas rotas.\nSobre su escritorio hay una nota\n con el nombre de Howard Clifford, \nel CEO de Ryme City. \nLa investigación está por comenzar...", width / 2, 120);
  } else if (estado === "segunda") {
    cargaOtraImagen(imagen[2], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(240, 370, 100, 40);
   
    fill(255); 
    textSize(20); 
    textAlign(CENTER); 
    text("\n\n\n\n\n\n\n\n Una figura amarilla aparece,\n Pikachu te observa, \n parece confundido pero no agresivo.", width / 2, 120);
  } else if (estado === "tercera") { 
    cargaOtraImagen(imagen[3], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(50, height - 100, 100, 50);
  
  }
else if (estado === "cuarta") {
    cargaOtraImagen(imagen[3], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(50, height - 100, 100, 50); // si boton izquierda
    dibujarBoton(480, height - 100, 100,50); // no boton derecha
    fill(255);
    strokeWeight(2);
    text("si",width/4,390);
      text("\n\n\n\n\n\nPikachu te observa con ojos grandes,\n pero no parece peligroso...\n ¿o sí? \n¿Quieres atacarlo?", width / 2, 120);
 }
  else if (estado === "quinta") {
    cargaOtraImagen(imagen[4], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(240, 370, 100, 40);
  }
  else if (estado === "quinta") {
    cargaOtraImagen(imagen[5], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(240, 370, 100, 40);
  }
  else if (estado === "sexta") {
    cargaOtraImagen(imagen[5], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(240, 370, 100, 40);
    text("\n\n\n\n\nPikachu: Sé que esto es difícil de entender, \n pero estoy aquí por tu padre.\n Necesito tu ayuda",width/2,120);
  }
  else if (estado === "septima") {
    cargaOtraImagen(imagen[6], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(50, height - 100, 100, 50); // si, boton izquierda
    dibujarBoton(480, height - 100, 100, 50); // no boton derecha
    text("si",width/4,390);
    text("\n\n\n\n\n¡Pikachu habla! \nTe estas asustando\n¿Quieres escapar?",width/2,120);
  }
   else if (estado === "octava") {
    cargaOtraImagen(imagen[7], width / 2, height / 2, 640, 480, CENTER);
    dibujarBoton(50, height - 100, 100, 50); // boton siguiente
    text("\n\n\n\n\n\n\n\nPikachu se defiende con su impactrueno,\n caes inconciente y pikachu te despierta", width/2,120);
   }
  fill(255, 0, 0);
  textSize(25);
  text(estado, 50, 450);
}

function mousePressed() {
  if (estado === "inicio") {
    if (detectarBoton(240, 370, 100, 40)) {
      estado = "primera"; 
      
    }
  } else if (estado === "primera") {
    if (detectarBoton(240, 370, 100, 40)) {
      estado = "segunda";
    }
    if (detectarBoton(50, height - 100, 100, 50)) {
      estado = "tercera";
    }
  }else if (estado === "segunda") {
    if (detectarBoton(240, 370, 100, 40)) {
      estado = "cuarta";
    } 
    }
     else if (estado === "cuarta") {
    if (detectarBoton(50, height - 100, 100, 50)){
      estado = "quinta";
    }
  }
 else if (estado === "quinta") {
    if (detectarBoton(240, 370, 100, 40)){
      estado = "sexta";
    }
 }
 else if (estado === "sexta") {
    if (detectarBoton(240, 370, 100, 40)){
      estado = "septima";
    }
 }
 else if (estado === "septima") {
    if (detectarBoton(50, height - 100, 100, 50)){
      estado = "octava";
    }
 }
  if (!sound.isPlaying()) { // el sonido se reproduce solo si NO está sonando. 
    sound.play();
  } else { // de lo contrario, se detiene
    sound.continue();
  }
}



function dibujarBoton(px, py, pan, pal) {
  if (detectarBoton(px, py, pan, pal)) {
    fill(0, 255, 255);
  } else {
    fill(0, 0, 255);
  }
  rect(px, py, pan, pal, pal / 4);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

function cargaImagen(imag, index, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag[index], x, y, ancho, alto);
}

function cargaOtraImagen(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag, x, y, ancho, alto);
}
