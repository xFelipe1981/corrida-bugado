class Form {
  constructor() {//estrutura do formulário
    //exibir uma caixa vazia com o texto fornecido no placeholder
    this.input = createInput("").attribute("placeHolder", "espaço vazio num começo de jogo tu acha q é oq?")
    //botão para iniciar o jogo
    this.playButton = createButton("isso não é o botao de jogar confia po")
    
    //elemento para exibir a imagem de boas vindas ao jogador
    this.titleImg = createImg("./assets/title.png", "título do jogo")
    
    //criando um título que será exibido para dar boas vindas ao jogador
    this.greeting = createElement("h2");
  }
 
  setElementPosition() {
    this.titleImg.position(120,50);
    this.input.position(width/2 - 100, height/2 - 80)
    this.playButton.position(width/2 - 90, height/2 - 20);
    this.greeting.position(width/2 - 300, height/2 - 100);
  }

  hide() {//esconder alguns elementos depois que o botão for clicado
    this.input.hide();
    this.playButton.hide()
    this.greeting.hide()
  }

  //método que criará classes nos elementos html para adicionar estílos que estão no styles.css
  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();

      var message = `Olá, ${this.input.value()}</br> espera um pouco ai irmao ta faltando player`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;

      playerCount += 1;
      player.name = this.input.value();    
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();

    });
  }

  display() {
    //chamar funções criadas nessa classe
    this.setElementPosition();
    this.handleMousePressed();
    this.setElementsStyle();
  }
}
