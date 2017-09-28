class ColoredBall extends Ball{
    constructor(posX, posY, posZ, number){
        super(posX, posY, posZ, number);
        this.isHit = false;
        this.texture = 'images/balls/' + this.ballNumber + '.png';
        this.material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture(this.texture) } );
        this.sphere = new THREE.Mesh(this.geometry, this.material);
        scene.add(this.sphere);
    }
}