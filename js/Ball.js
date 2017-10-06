radius = 3.5;
mass = 1;

class Ball{
    constructor(posX, posZ, number){
        this.ballNumber = number;
        this.isPooled = false;
        this.geometry = new THREE.SphereGeometry( radius, 32, 32 );
        this.texture = 'images/balls/' + this.ballNumber + '.png';
        this.material = new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture(this.texture),
            specular: 0x7c7c7c,
            ambient: 0x030303,
            shininess: 20
        });
        this.sphere = new THREE.Mesh(this.geometry, this.material);
        this.sphere.position.set(posX, radius-0.3, posZ);
        scene.add(this.sphere);
        this.direction = new THREE.Vector3();
        this.direction.set(0,0,0);
        this.direction.normalize();
        this.speed = new THREE.Vector3();
        //this.rotation = new THREE.Vector3();
        this.clock = new THREE.Clock();
    }

    isColliding(ball) {
        var xd = this.sphere.position.x - ball.sphere.position.x;
        var yd = this.sphere.position.y - ball.sphere.position.y;

        var sumRadius = (radius + radius);
        var sqrSumRadius = sumRadius * sumRadius;
        var distSqr = (xd * xd) + (yd * yd);

        //balls are not gone hit each other
        var dist = this.sphere.position.distanceTo(ball.sphere.position) - sumRadius;
        if(this.direction.length() < dist){
            return false;
        }

        var N = new THREE.Vector3().copy(this.direction);
        N.normalize();

        var C = new THREE.Vector3().copy(ball.sphere.position);
        C.sub(this.sphere.position);
        var D = N.dot(C);

        //balls aren't moving towards each other
        if(D <= 0){return false;}

        //if the closest that this.ball will get to ball is more than the sum of their radii they aren't going to collide
        var lengthC = C.length();
        var F = (lengthC*lengthC)-(D*D);
        if(F >= sqrSumRadius){
            return false;
        }

        //if the distance between the balls is les or equal to the sum of the radius they hit
        if (distSqr <= sqrSumRadius){
            return true;
        }

        return true;

    }

    collision(ball) {
        //normalized vector n from center to center of the two balls
        var n = new THREE.Vector3().subVectors(this.sphere.position, ball.sphere.position);
        n.normalize();

        //length of the component of each of the movement vectors along n
        var a1 = this.direction.dot(n);
        var a2 = ball.direction.dot(n);

        var p = (2 * (a1 - a2)) / (mass + mass);

        n.multiplyScalar(p * mass)

        this.direction.sub(n);
        //this.sphere.rotation.setFromVector3(this.direction);
        ball.direction.add(n);
        //ball.sphere.rotation.setFromVector3(ball.direction);
    }

    pooled(){
        this.isPooled = true;
        this.sphere.position.y = -100;
        scene.remove(this.sphere);
    }

    move(speed){
        this.sphere.position.add(this.speed.copy(this.direction).multiplyScalar(0.2 * speed));
        //this.sphere.rotation.setFromVector3(this.sphere.rotation.toVector3().add(this.direction));
    }

    isMoving(){
        if(this.direction.x == 0 && this.direction.y == 0 && this.direction.z == 0){
            return false;
        }
        return true;
    }

    stopMoving() {
        this.direction.set(0, 0, 0);
    }
}