var scene, renderer, camera, controls, gui, shot_line, t1, down_l, down_r, ballGame;
var height = window.innerHeight;
var width = window.innerWidth;
var stats = new Stats();
stats.setMode(0);
var debug = false;
var balls = [];
var speed = 0;
var dir = 0;
var moving = false;
var turnChange = false;

function onLoad() {

    gui = new Gui();
    gui.show(document.getElementById('mainMenu'));
    gui.hide(document.getElementById('sControls'));
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(0, 250, 0);
    scene = new THREE.Scene();
    scene.add(camera);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMapSoft = true;
    renderer.setClearColor(0x262626, 1);
    var canvasContainer = document.getElementById('canvas');
    canvasContainer.appendChild(renderer.domElement);

    addLights();

    //laat je de camera met de muis controlleren
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = true;

    var table = new Table();

    balls = [
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
    new ColoredBall(110,0,15)]

    var line_material = new THREE.MeshLambertMaterial({color: 0xffffff});
    var line_geometry = new THREE.CylinderGeometry(1, 1, 50, 5, 5, false);
    shot_line = new THREE.Mesh(line_geometry, line_material);
    shot_line.rotation.z = 0;
    shot_line.position.x = 150 + 50*Math.sin(shot_line.rotation.z);
    shot_line.position.y = 0 + 50*Math.cos(shot_line.rotation.z);
    shot_line.position.z = -4;
    shot_line.rotation.z = Math.PI / 2;
    shot_line.overdraw = true;
    scene.add(shot_line);
	
    this.tableComponents = new TableComponents();

    //this.rotationVector = new THREE.Vector3(0,0,0.1);

    //balls[1].direction.x = -1;
    //balls[0].direction.x = 5;

    this.raycaster = new THREE.Raycaster();

    camera.lookAt(new THREE.Vector3(0,0,0));
    draw();
};

function draw() {
    stats.begin();
    controls.update();
    stats.end();
    requestAnimationFrame(draw);

    //balls[1].sphere.rotation.setFromVector3(balls[0].sphere.rotation.toVector3().add(this.rotationVector));

    if(speed <= 0){
        moving = false;
		
        //set direction off all balls to 0
        for(var i = 0; i < balls.length; i++){
            balls[i].stopMoving();
        }

        if (turnChange)
            ballGame.switchSides();
            turnChange = false;
    }

    //als ballen niet bewegen, breng keu naar het veld zodat je de balrichting kan bepalen
    if (moving == false) {
        gui.show(document.getElementById('sControls'));
        shot_line.material.opacity = 1;
        shot_line.position.x = balls[0].sphere.position.x  + 25*Math.cos(dir*Math.PI/180);
        shot_line.position.y = balls[0].sphere.position.y + 1;
        shot_line.position.z = balls[0].sphere.position.z + 25*Math.sin(dir*Math.PI/180);
        shot_line.rotation.y = dir*Math.PI/180;
    } else {
        shot_line.position.z = 10000;
    }

    for(var i = 0; i < balls.length; i++){
        if(!balls[i].isMoving()){
            continue;
        }
        balls[i].move(speed);
        for(var j = 0; j < balls.length; j++){
            if(balls[i] == balls[j]){continue;}
            //collision between balls
            if(balls[i].isColliding(balls[j])){
                balls[i].collision(balls[j]);
            }
        }
        //collision border
        var normal = new THREE.Vector3().copy(balls[i].direction);
        this.raycaster.set(balls[i].sphere.position, normal.normalize());

        var intersections = this.raycaster.intersectObjects(this.tableComponents.borderGroup.children);

        if(intersections.length > 0) {
            var intersection = intersections[0];

            if(intersection.distance < 3.5) {
                balls[i].direction.reflect(intersection.face.normal);
            }
        }
        //ball in hole
        var pockets = this.raycaster.intersectObjects(this.tableComponents.pocketGroup.children);

        if(pockets.length > 0) {
            var pocket = pockets[0];

            if(pocket.distance < 1) {
                balls[i].pooled();
            }
        }
    }

    if (speed > 0)
        speed  -= 0.001;
    
    window.addEventListener( 'resize', onWindowResize, false );
    renderer.render(scene, camera);
};

//voegt lichten toe
function addLights() {
    var light = new THREE.AmbientLight(0x0d0d0d);
    scene.add(light);
    var tableLight1 = new TableLight(278 / 4, 150, 0);
    var tableLight2 = new TableLight(-278 / 4, 150, 0);
};

function press (which) {
    if (which == 'l')
        down_l = true;
    if (which == 'r')
        down_r = true;
    t1 = window.setInterval('rotate()', 20);
}

function unpress (which) {
    if (which == 'l')
        down_l = false;
    if (which == 'r')
        down_r = false;
    window.clearInterval(t1);
}

function rotate () {
    if (down_r) {
        if (dir+1 > 180)
            dir = -180+1;
        else
            dir += 1;
    }
    if (down_l) {
        if(dir-1 < -180)
            dir = 180 - (Math.abs(dir-1)-180);
        else
            dir -= 1;
    }
}

//laat bal bewegen, force is kracht en dir is de richting
function launch() {
    speed = 1;
    var force = document.getElementById('range_strength').value;
    var vx0, vy0;
    if (!moving) {
        moving = true;
        gui.hide(document.getElementById('sControls'));
        dir = dir*Math.PI/180;

        if (force*Math.cos(dir) != 0)
            vx0 = 100 / (force*Math.cos(dir));
        else
            vx0 = 0;

        if (force*Math.sin(dir))
            vy0 = 100/(force*Math.sin(dir));
        else
            vy0 = 0;

        console.log("vx0: " + vx0);
        console.log("vy0: " + vy0);
        balls[0].direction.x = vx0;
        balls[0].direction.z = vy0;
    }
}

//resizes window after window size changed
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
};