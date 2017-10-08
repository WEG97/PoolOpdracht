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

    endGame() {
        this.state = 'gameover';
        var winner = this.turn == 'player1' ? 'Player 1' : 'Player 2';
        gui.showEndGame(winner);
    }

    colorPocketed(name) {
        if (typeof name === 'undefined')
            return;
        var ballno = 0;
        for (var i = 0; i < this.ingameBalls.length; i++) {
            if (name == this.ingameBalls[i]) {
                ballno = this.ingameBalls[i];
                this.ingameBalls.splice(i, 1);
                break;
            }
        }
        if (ballno == 0)
            return;

        if (ballno == 8) {
            if (this.ingameBalls.length > 1) {
                this.turn = this.turn == 'player1' ? 'player2' : 'player1';
            }
            this.pocketEvent = true;

            //win
            this.endGame();
        } else {
            if (this.sides.player1 == '?' || this.sides.player2 == '?') {
                this.sides[this.turn] = ballno < 8 ? 'solid' : 'striped';
                this.sides[this.turn == 'player1' ? 'player2' : 'player1'] = ballno > 8 ? 'solid' : 'striped';
                this.pocketEvent = true;
            } else {
                if ((this.sides[this.turn] == 'solid' && ballno < 8) || (this.sides[this.turn] == 'striped' && ballno > 8)) {
                    //nog een beurt
                    this.pocketEvent = true;
                } else {
                    this.pocketEvent = false;
                }
            }
        }
    }

    whitePocketed() {
        console.log("confirm_end2");
        this.endGame();
        alert("Witte bal gepoolt, dus " + winner + "wint!");
    }
}
