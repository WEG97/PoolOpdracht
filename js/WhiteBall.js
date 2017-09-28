class WhiteBall extends Ball{
    constructor(posX, posY, posZ){
        super(posX, posY, posZ, 0);
        this.material = new THREE.MeshPhongMaterial({color: 0xffffff});
        this.sphere = new THREE.Mesh(this.geometry, this.material);
        scene.add(this.sphere);
    }
}