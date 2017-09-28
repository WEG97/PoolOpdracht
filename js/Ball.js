class Ball{
    constructor(posX, posZ, number){
        this.posX = posX;
        this.posY = 5-0.5;
        this.posZ = posZ;
        this.speedX = 0;
        this.speedY = 0;
        this.speedZ = 0;
        this.ballNumber = number;
        this.iPooled = false;
        this.geometry = new THREE.SphereGeometry( 5, 32, 32 );
    }

    get position(){
        return [this.posX, this.posY, this.posZ];
    }

    get speed(){
        return [this.speedX, this.speedY, this.speedY]
    }

    isMoving(){
        if(this.speedX == 0 && this.speedY == 0 && this.speedZ == 0){
            return true;
        }
        return false;
    }
}