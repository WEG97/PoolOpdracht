class TableComponents {
    constructor() {
        //collision groups
        this.borderGroup = new THREE.Group();
        scene.add(this.borderGroup);
        this.pocketGroup = new THREE.Group();
        scene.add(this.pocketGroup);

        //borders
        this.borderGroup.add(new Border(10,5,Table.LEN_Z-12, Table.LEN_X / 2 + 5, 3.5, 0).cube);
        this.borderGroup.add(new Border(10,5,Table.LEN_Z-12, -Table.LEN_X / 2 - 5, 3.5, 0).cube);
        this.borderGroup.add(new Border((Table.LEN_X-25)/2,5,10, Table.LEN_X /4 - 1, 3.5, Table.LEN_Z / 2 + 5).cube);
        this.borderGroup.add(new Border((Table.LEN_X-25)/2,5,10, -Table.LEN_X /4 + 1, 3.5, Table.LEN_Z / 2 + 5).cube);
        this.borderGroup.add(new Border((Table.LEN_X-25)/2,5,10, Table.LEN_X /4 - 1, 3.5, -Table.LEN_Z / 2 - 5).cube);
        this.borderGroup.add(new Border((Table.LEN_X-25)/2,5,10, -Table.LEN_X /4 + 1, 3.5, -Table.LEN_Z / 2 - 5).cube);

        //pockets
        this.pocketGroup.add(new Pocket(7.5, 7.5, 20, 32, Table.LEN_X / 2 + 1, 1, Table.LEN_Z / 2 + 1).pocket);
        this.pocketGroup.add(new Pocket(7.5, 7.5, 20, 32, Table.LEN_X / 2 + 1, 1, -Table.LEN_Z / 2 - 1).pocket);
        this.pocketGroup.add(new Pocket(7.5, 7.5, 20, 32, -Table.LEN_X / 2 + 1, 1, Table.LEN_Z / 2 + 1).pocket);
        this.pocketGroup.add(new Pocket(7.5, 7.5, 20, 32, -Table.LEN_X / 2 + 1, 1, -Table.LEN_Z / 2 - 1).pocket);
        this.pocketGroup.add(new Pocket(7.5, 7.5, 20, 32, 0, 1, Table.LEN_Z / 2 + 7).pocket);
        this.pocketGroup.add(new Pocket(7.5, 7.5, 20, 32, 0, 1, -Table.LEN_Z / 2 - 7).pocket);
    }
}

class Border {
    constructor(width, height, depth, posX, posY, posZ){
        var cube =  new THREE.BoxGeometry(width, height, depth);
        var cubeMesh = new THREE.MeshBasicMaterial({ color: 0x000000 });
        this.cube = new THREE.Mesh(cube, cubeMesh);
        this.cube.material.visible = false;
        this.cube.position.set(posX, posY, posZ);
    }
}

class Pocket {
    constructor(radiusTop, radiusBottom, height, radiusSegments, posX, posY, posZ){
        var pocket = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments );
        var pocketMesh = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        this.pocket = new THREE.Mesh(pocket, pocketMesh);
        this.pocket.material.visible = false;
        this.pocket.position.set(posX, posY, posZ);
    }
}