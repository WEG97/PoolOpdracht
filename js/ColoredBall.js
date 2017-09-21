class ColoredBall extends Ball{
    constructor(posX, posY, posZ, color){
        super(posX, posY, posZ, color);
        //this.texture = 'images/balls/' + this.ballNumber + '.png';
        this.isHit = false;
    }
}