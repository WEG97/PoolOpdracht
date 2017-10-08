class ColoredBall extends Ball{
    constructor(posX, posZ, number){
        super(posX, posZ, number);
        this.isHit = false;
    }

    pooled(){
        //ballGame.colorPocketed(this.ballNumber); werkt op een of ondere manier niet
        this.isPooled = true;
        this.sphere.position.y = -100;
        scene.remove(this.sphere);
    }
}