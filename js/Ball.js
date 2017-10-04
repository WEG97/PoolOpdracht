var radius = 4;
var mass = 1;

class Ball{
    constructor(posX, posZ, number){
        this.ballNumber = number;
        this.iPooled = false;
        this.geometry = new THREE.SphereGeometry( radius, 32, 32 );
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

    isColliding(ball) {
        var xd = this.sphere.position.x - ball.sphere.position.x;
        var yd = this.sphere.position.y - ball.sphere.position.y;

        var sqrRadius = (radius*2) * (radius*2);
        var distSqr = (xd * xd) + (yd * yd);

        if (distSqr <= sqrRadius){
            return true;
        }

        return false;

    }

    collision(ball) {
        //normalized vector n from center to center of the two balls
        var n = new THREE.Vector3();
        n.subVectors(this.sphere.position, ball.sphere.position);
        n.normalize();

        //length of the component of each of the movement vectors along n
        var a1 = this.direction.dot(n);
        var a2 = ball.direction.dot(n);

        var p = (2 * (a1 - a2)) / (mass + mass);

        var x = new THREE.Vector3(n.multiplyScalar(p * mass));

        //calculate new movement vector of first ball
        var v1 = new THREE.Vector3();
        v1.subVectors(this.direction, x);
        //calculate new movement vector of second ball
        var v2 = new THREE.Vector3();
        v2.addVectors(ball.direction, x);

        //debug --> x geen goede waarde
        window.alert(v1.x+" "+v1.y+" "+v1.z);
        window.alert(v2.x+" "+v2.y+" "+v2.z);

        this.direction.set(v1);
        ball.direction.set(v2);
    }

    isMoving(){
        if(this.direction.x == 0 && this.direction.y == 0 && this.direction.z == 0){
            return true;
        }
        return false;
    }
}