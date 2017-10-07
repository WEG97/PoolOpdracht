var TableLight = function(x,y,z) {
    this.spotlight = new THREE.SpotLight(0xffffe5, 1);

    this.spotlight.position.set(x, y, z);
    this.spotlight.target.position.set(x, 0, z); //licht is altijd gericht naar de xz lijn
    this.spotlight.target.updateMatrixWorld(); 

    this.spotlight.castShadow = true;
    this.spotlight.shadow.camera.fov = 110;
    this.spotlight.shadow.camera.near = 100;
    this.spotlight.shadow.camera.far = 170;
    this.spotlight.shadow.mapSize.width = 512;
    this.spotlight.shadow.mapSize.height = 512;

    scene.add(this.spotlight);

    if (debug) {
        this.shadowCam = new THREE.CameraHelper(this.spotlight.shadow.camera); //zet debug in main.js naar true om de richting van het licht te zien
        scene.add(this.shadowCam);
    }
};