function setup() {
    createCanvas(400, 400);
  }
  function draw() {
    background("red");
    fill("yellow");
    textSize(30);
    textAlign(CENTER, CENTER);
   
    palavra = "cheguis";
    let maximo = width;
    let minimo = 1;
    let quantidade = map(mouseX, 0, maximo, minimo, palavra.length);
    let parcial = palavra.substring(0, quantidade);
    text(parcial, 200, 200);
  }