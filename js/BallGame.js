<<<<<<< HEAD
class BallGame {
    constructor() {
        this.ingameBalls = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        this.turn = 'player1';
        this.sides = {
            'player1' : '?',
            'player2' : '?'
        };
        this.state = 'pre-match';
        this.pocketEvent = false;

        gui.setGameHud();
        this.startTurn();
    }

    startTurn() {
        if (this.state == 'gameover')
            return;

        this.state = 'turn';
        gui.updateTurn(this.turn);
        gui.updateBalls(this.ingameBalls, this.sides.player1, this.sides.player2);
    }

    switchSides() {
        this.turn = this.turn == 'player1' ? 'player2' : 'player1';
        this.startTurn();
    }
}

/*var BallGame = function() {
=======
var BallGame = function() {
>>>>>>> 99667f7af8da51e902f77d585bae981121aa030f
    this.ingameBalls = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    this.turn = 'player1';
    this.sides = {
        'player1' : '?',
        'player2' : '?'
    };

    this.state = 'pre-match';
    this.pocketEvent = false;

    gui.setGameHud();
    this.startTurn();
};

BallGame.prototype.startTurn = function () {
    if (ballGame.state == 'gameover')
        return;

    ballGame.state = 'turn';
    gui.updateTurn(ballGame.turn);  
<<<<<<< HEAD
    gui.updateBalls(ballGame.ingameBalls, ballGame.sides.player1, ballGame.sides.player2);
=======
    gui.updateBalls(this.ingameBalls, ballGame.sides.player1, ballGame.sides.player2);
>>>>>>> 99667f7af8da51e902f77d585bae981121aa030f
    
    
};

BallGame.prototype.whitePocketed = function() {

}

BallGame.prototype.colorPocketed = function(name) {
    if (typeof name === 'undefined')
        return;
<<<<<<< HEAD
    var ballno = 0;
    for (var i = 0; i < ballGame.ingameBalls.length; i++) {
=======
    var ballno = name;
    window.alert(ballno);
    /**for (var i = 0; i < ballGame.ingameBalls.length; i++) {
>>>>>>> 99667f7af8da51e902f77d585bae981121aa030f
        if (name == ballGame.ingameBalls[i] + 'ball') {
            ballno = ballGame.ingameBalls[i];
            ballGame.ingameBalls.splice(i, 1);
            break;
        }
<<<<<<< HEAD
    }
=======
    }**/
>>>>>>> 99667f7af8da51e902f77d585bae981121aa030f
    if (ballno == 0)
        return;

    if (ballno == 8) {
        if (ballGame.ingameBalls.length > 1) {
            ballGame.turn = ballGame.turn == 'player1' ? 'player2' : 'player1';
        }
        ballGame.pocketEvent = true;

        //win
        ballGame.endGame();
    } else {
        if (ballGame.sides.player1 == '?' || ballGame.sides.player2 == '?') {
            ballGame.sides[ballGame.turn] = ballno < 8 ? 'solid' : 'striped';
            ballGame.sides[ballGame.turn == 'player1' ? 'player2' : 'player1'] = ballno > 8 ? 'solid' : 'striped';
            ballGame.pocketEvent = true;
        } else {
            if ((ballGame.sides[ballGame.turn] == 'solid' && ballno < 8) || (ballGame.sides[ballGame.turn] == 'striped' && ballno > 8)) {
                //nog een beurt
                ballGame.pocketEvent = true;
            } else {
                ballGame.pocketEvent = false;
            }
        }
    }
}

BallGame.prototype.switchSides = function() {
    ballGame.turn = ballGame.turn == 'player1' ? 'player2' : 'player1';
    ballGame.startTurn();
}

BallGame.prototype.endGame = function() {
    ballGame.state = 'gameover';
    var winner = ballGame.turn == 'player1' ? 'Player 1' : 'Player 2';
    gui.showEndGame(winner);
<<<<<<< HEAD
}*/
=======
}
>>>>>>> 99667f7af8da51e902f77d585bae981121aa030f
