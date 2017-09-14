class Player{
    constructor(name){
        this.name = name;
        this.targetBalls = [];
    }

    getName(){
        return this.name;
    }

    setTargetBalls(targetBalls){
        this.targetBalls = targetBalls;
    }

    getTargetBalls(){
        return this.targetBalls;
    }
}