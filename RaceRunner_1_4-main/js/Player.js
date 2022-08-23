class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0; 
   
  }


  addPlayer() {
    var playerIndex = "players/player" + this.index;//cria hierarquia players/player1 no bd
 
    if(this.index === 1) { //para dar posição x para ambos os jogadores,  
      this.positionX = width / 2 - 100;//jogador na esquerda do centro
    } else {
      this.positionX = width / 2 + 100;//jogador na direita
    }
 
    database.ref(playerIndex).set({//atualizando campo no bd
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    }); 
  }
  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);//lendo os dados no BD
    playerDistanceRef.on("value", data => {//passando os dados lidos
      var data = data.val();//extraindo o conteúdo como um objeto
      this.positionX = data.positionX;//atribuindo ao valor do bd
      this.positionY = data.positionY;
    })
  }




  //método para obter o playerCount e updateCount() e para atualizar o playerCount no bd
  getCount() {
    //ler os dados e armazenar dentro da função
    var playerCountRef = database.ref('playerCount');//referenciando ao bd
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    })

  }
  
  //método para atualizar o playerCount no bd
  updateCount(count) {
    database.ref("/").update({
      playerCount : count      
    });
  }
  update() {//método para atualizar as posições no bd
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
     });
  }


  static getPlayersInfo(){
    var playerinfoRef = database.ref("players");
    playerinfoRef.on("value", data =>{
      allPlayers = data.val();
    });

  }



}

