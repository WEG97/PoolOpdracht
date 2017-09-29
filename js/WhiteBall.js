class WhiteBall extends Ball{
    constructor(posX, posZ){
        super(posX, posZ, 0);
        this.material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            specular: 0x7c7c7c,
            ambient: 0x030303,
            shininess: 20
        });
        this.sphere = new THREE.Mesh(this.geometry, this.material);
        this.sphere.position.set(this.posX, this.posY, this.posZ);
        scene.add(this.sphere);
    }
}