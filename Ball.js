class Ball{
    constructor(x, y, z, color){
        this._x = x;
        this._y = y;
        this._z = z;
        this._color = color;
        this._geometry = new THREE.SphereGeometry( 5, 32, 32 );
        this._material = new THREE.MeshPhongMaterial({color: this._color});
        this._sphere = new THREE.Mesh(this._geometry, this._material);
        scene.add(this._spere);
        this._moving = false;
        this._pooled = false;
    }

    getPosition(){
        return [this.x, this.y, this.z];
    }

    setPosition(x, y, z){
        this._x = x;
        this._y = y;
        this._z = z;
    }

    isMoving(){
        return this._moving;
    }

    isPooled(){
        return this._pooled;
    }
}