class ColoredBall extends Ball{
    constructor(posX, posZ, number){
        super(posX, posZ, number);
        this.isHit = false;
        this.texture = 'images/balls/' + this.ballNumber + '.png';
        this.material = new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture(this.texture),
            specular: 0x7c7c7c,
            ambient: 0x030303,
            shininess: 20
        });
        this.sphere = new THREE.Mesh(this.geometry, this.material);
        this.sphere.position.set(this.posX, this.posY, this.posZ);
        scene.add(this.sphere);
    }
}