class Ball{
    constructor(x, y, z, color){
        this.x = x;
        this.y = y;
        this.z = z;
        this.color = color;
        this.geometry = new THREE.SphereGeometry( 5, 32, 32 );
        this.material = new THREE.MeshPhongMaterial({color: this.color});
        this.sphere = new THREE.Mesh(this.geometry, this.material);
        scene.add(this.spere);
        this.moving = false;
        this.pooled = false;
    }

    getPosition(){
        return [this.x, this.y, this.z];
    }

    setPosition(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    isMoving(){
        return this.moving;
    }

    isPooled(){
        return this.pooled;
    }
}