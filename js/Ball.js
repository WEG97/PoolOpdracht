class Ball{
    constructor(posX, posZ, number){
        this.ballNumber = number;
        this.iPooled = false;
        this.geometry = new THREE.SphereGeometry( 4, 32, 32 );
        this.texture = 'images/balls/' + this.ballNumber + '.png';
        this.material = new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture(this.texture),
            specular: 0x7c7c7c,
            ambient: 0x030303,
            shininess: 20
        });
        this.sphere = new THREE.Mesh(this.geometry, this.material);
        this.sphere.position.set(posX, 4-0.3, posZ);
        scene.add(this.sphere);
        this.direction = new THREE.Vector3();
        this.direction.set(0,0,0);
        this.direction.normalize();
    }

    isMoving(){
        if(this.direction.x == 0 && this.direction.y == 0 && this.direction.z == 0){
            return true;
        }
        return false;
    }
}