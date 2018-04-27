new Vue({
   el: '#app',
   data: {
       playerHealth: 100,
       monsterHealth: 100,
       gameStarted: false,
       turnLog: []
   },
    methods:{
       startGame: function () {
           this.gameStarted = !this.gameStarted;
       },
        endGame: function () {
            this.gameStarted = false;
            this.resetGame();
        },
        punch: function () {
            var monDmg = this.getRandomNumber();
            var plyDmg = this.getRandomNumber();

            this.monsterHealth -= plyDmg;
            this.turnLog.unshift({isPlayer:true, text:"Player Delt: " + plyDmg + " damage!"});
            this.playerHealth -= monDmg;
            this.turnLog.unshift( { isPlayer:false, text:"Monster Delt: " + monDmg + " damage!"});


        },
        kick: function () {
            var monDmg = this.getRandomNumber();
            var plyDmg = Math.floor((Math.random() * 15) + 1);

            this.monsterHealth -= plyDmg;
            this.turnLog.unshift({isPlayer:true, text:"Player Delt: " + plyDmg + " damage!"});
            this.playerHealth -= monDmg;
            this.turnLog.unshift( { isPlayer:false, text:"Monster Delt: " + monDmg + " damage!"});
        },
        heal: function () {

           if(this.playerHealth < 100) {
               var monDmg = this.getRandomNumber();

               this.playerHealth += 10;
               this.turnLog.unshift({isPlayer:true, text:"Player Healed for: 10 Health"});
               this.playerHealth -= monDmg;
               this.turnLog.unshift( { isPlayer:false, text:"Monster Delt: " + monDmg + " damage!"});

               if(this.playerHealth > 100)
               {
                   var temp = this.playerHealth - 100;
                   this.playerHealth -= temp;
               }

           }
           else{
               alert("Too full to eat");
           }
        },
        resetGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turnLog = [];
        },
        getRandomNumber : function () {
            return Math.floor((Math.random() * 10) + 1);
        }
    },
    watch:{
       monsterHealth: function (value) {

            if(this.monsterHealth <= 0){
                alert("Winner!");
                this.resetGame();
            }
       },
        playerHealth: function (value) {

            if(this.playerHealth <= 0){
                alert("You Dead!");
                this.resetGame();
            }
        }
    }
});