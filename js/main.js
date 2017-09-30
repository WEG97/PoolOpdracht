var scene, renderer, camera, controls;
var height = window.innerHeight;
var width = window.innerWidth;
var debug = false;

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
    var testMesh = new THREE.Mesh(test, testMesh);
    scene.add(testMesh);
    testMesh.position.x = 0;
    testMesh.position.y = 0;
    testMesh.position.z = 0;

    var table = new Table();

    this.whiteball = new WhiteBall(-80,0);
    this.ball01 = new ColoredBall(83,0,1);
    this.ball02 = new ColoredBall(90,4,2);
    this.ball03 = new ColoredBall(103,-12,3);
    this.ball04 = new ColoredBall(103,4,4);
    this.ball05 = new ColoredBall(110,-8,5);
    this.ball06 = new ColoredBall(103,12,6);
    this.ball07 = new ColoredBall(110,8,7);
    this.ball08 = new ColoredBall(96,0,8);
    this.ball09 = new ColoredBall(90,-4,9);
    this.ball10 = new ColoredBall(96,8,10);
    this.ball11 = new ColoredBall(96,-8,11);
    this.ball12 = new ColoredBall(103,-4,12);
    this.ball13 = new ColoredBall(110,-16,13);
    this.ball14 = new ColoredBall(110,16,14);
    this.ball15 = new ColoredBall(110,0,15);

    //this.collisionBorder = new THREE.Raycaster();
    //this.speed = new THREE.Vector3();

    camera.lookAt(new THREE.Vector3(0,0,0));
    draw();
};

function draw() {
    controls.update();
    requestAnimationFrame(draw);

    //this.ball01.position.add(this.speed.copy(this.ball01.direction).multiplyScalar(20));
    //this.collisionBorder.set(this.ball01.position, this.ball01.direction);
    //var intersections = this.collisionBorder.intersectObjects(this.whiteball);

    //if(intersections.length > 0){
    //    var intersection = intersections[0];

    //    if(intersection.distance < 2){
    //        this.ball01.direction.reflect(intersection.face.normal);
    //   }
    //}

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