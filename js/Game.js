var Game = function() {
    this.table = new Table();
    
    this.balls = [
        new WhiteBall(-80,0),
        new ColoredBall(83,0,1),
        new ColoredBall(90,4,2),
        new ColoredBall(103,-12,3),
        new ColoredBall(103,4,4),
        new ColoredBall(110,-8,5),
        new ColoredBall(103,12,6),
        new ColoredBall(110,8,7),
        new ColoredBall(96,0,8),
        new ColoredBall(90,-4,9),
        new ColoredBall(96,8,10),
        new ColoredBall(96,-8,11),
        new ColoredBall(103,-4,12),
        new ColoredBall(110,-16,13),
        new ColoredBall(110,16,14),
        new ColoredBall(110,0,15)
    ];
    
    this.collisionBorder = new THREE.Raycaster();
    this.speed = new THREE.Vector3();

    this.rotationVector = new THREE.Vector3(0,0,0.1);
}