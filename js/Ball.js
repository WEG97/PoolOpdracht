var radius = 4;

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

    colliding(ball) {
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
        // get the mtd
        /**var delta = (this.sphere.position - ball.sphere.position);
        var r = radius + radius;
        var dist2 = delta.dot(delta);

        if (dist2 > r*r) return; // they aren't colliding


        var d = delta.getLength();

        var mtd;
        if (d != 0.0)
        {
            mtd = delta.multiply(((radius + radius)-d)/d); // minimum translation distance to push balls apart after intersecting

        }
        else // Special case. Balls are exactly on top of eachother.  Don't want to divide by zero.
        {
            d = radius + radius - 1.0;
            delta = new Vector2d(radius + radius, 0.0);

            mtd = delta.multiply(((getRadius() + ball.getRadius())-d)/d);
        }

        // resolve intersection
        var im1 = 1 / getMass(); // inverse mass quantities
        var im2 = 1 / ball.getMass();

        // push-pull them apart
        this.sphere.position = position.add(mtd.multiply(im1 / (im1 + im2)));
        ball.sphere.position = ball.position.subtract(mtd.multiply(im2 / (im1 + im2)));

        // impact speed
        var v = (this.velocity.subtract(ball.velocity));
        var vn = v.dot(mtd.normalize());

        // sphere intersecting but moving away from each other already
        if (vn > 0.0) return;

        // collision impulse
        var i = (-(1.0 + Constants.restitution) * vn) / (im1 + im2);
        var impulse = mtd.multiply(i);

        // change in momentum
        this.velocity = this.velocity.add(impulse.multiply(im1));
        ball.velocity = ball.velocity.subtract(impulse.multiply(im2));**/

    }

    isMoving(){
        if(this.direction.x == 0 && this.direction.y == 0 && this.direction.z == 0){
            return true;
        }
        return false;
    }
}