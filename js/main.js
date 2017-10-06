var scene, renderer, camera, controls;
var height = window.innerHeight;
var width = window.innerWidth;
var debug = false;
var balls = [];

function onLoad() {

    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(-170, 70, 0);
    scene = new THREE.Scene();
    scene.add(camera);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMapSoft = true;
    renderer.setClearColor(0x262626, 1);
    document.body.appendChild(renderer.domElement);

    addLights();

    //laat je de camera met de muis controlleren
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = true;

    //voegt test vierkant toe in het midden
    var test = new THREE.BoxGeometry(1,1,1);
    var testM = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var testMesh = new THREE.Mesh(test, testM);
    scene.add(testMesh);
    testMesh.position.x = 0;
    testMesh.position.y = 0;
    testMesh.position.z = 0;

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

    this.tableComponents = new TableComponents();

    //this.rotationVector = new THREE.Vector3(0,0,0.1);

    //balls[1].direction.x = -1;
    balls[0].direction.x = 5;

    this.raycaster = new THREE.Raycaster();

    camera.lookAt(new THREE.Vector3(0,0,0));
    draw();
};

function draw() {
    controls.update();
    requestAnimationFrame(draw);

    //balls[1].sphere.rotation.setFromVector3(balls[0].sphere.rotation.toVector3().add(this.rotationVector));

    for(var i = 0; i < balls.length; i++){
        if(!balls[i].isMoving()){
            continue;
        }
        balls[i].move();
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

        var pockets = this.raycaster.intersectObjects(this.tableComponents.pocketGroup.children);

        if(pockets.length > 0) {
            var pocket = pockets[0];

            if(pocket.distance < 1) {
                balls[i].pooled();
            }
        }
    }

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

//resizes window after window size changed
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
};