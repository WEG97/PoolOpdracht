class Ball{
    constructor(posX, posZ, number){
        this.posX = posX;
        this.posY = 5-0.5;
        this.posZ = posZ;
        this.ballNumber = number;
        this.iPooled = false;
        this.geometry = new THREE.SphereGeometry( 5, 32, 32 );
        this.direction = new THREE.Vector3();
        this.direction.set(0,0,0);
        this.direction.normalize();
    }

    get position(){
        return [this.posX, this.posY, this.posZ];
    }

    isMoving(){
        if(this.direction.x == 0 && this.direction.y == 0 && this.direction.z == 0){
            return true;
        }
        return false;
    }
}