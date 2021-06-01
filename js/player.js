class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score=0;
          // create the property for the score and intialize with zero
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });

    }
    updateScore(score){
var playerNode="players/playerCount"+this.index 
database.ref(playerNode).update({
score : score
    })

    }

    update() {
        var playerIndex = "players/playerCount" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
