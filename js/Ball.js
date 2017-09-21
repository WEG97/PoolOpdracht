class Ball{
    constructor(posX, posY, posZ, number, color){
        this.posX = posX;
        this.posY = posY;
        this.posZ = posZ;
        this.speedX = 0;
        this.speedY = 0;
        this.speedZ = 0;
        this.ballNumber = number;
        this.color = color;
        this.geometry = new THREE.SphereGeometry( 5, 32, 32 );
        this.material = new THREE.MeshPhongMaterial({color: this.color});
        this.sphere = new THREE.Mesh(this.geometry, this.material);
        scene.add(this.sphere);
        this.iPooled = false;
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