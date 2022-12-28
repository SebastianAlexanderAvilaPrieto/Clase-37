class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Introduce tu nombre");
    this.playButton = createButton("Jugar");
    this.greeting = createElement("h2");
    this.titleImg = createImg("assets/title.png");
  }
  showElementPosition() {
    this.input.position(width/2 - 110, height/2 - 80);
    this.playButton.position(width/2 - 90, height/2 - 20);
    this.greeting.position(width/2 - 300, height/2 - 100);
    this.titleImg.position(120, 10);
  }

  setElementStyle() {
    this.playButton.class("customButton");
  }

  handleMousePressed() {
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var message = ` Hola ${this.input.value()} </br>Espera a que se una otro jugador...`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;
    })
  }

  display() {
    this.showElementPosition();
    this.handleMousePressed();
    this.setElementStyle();
  }
}
