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

    var whiteball = new WhiteBall(-60,0);
    var ball01 = new ColoredBall(-30,0,1);
    var ball02 = new ColoredBall(-20,0,2);
    var ball03 = new ColoredBall(-10,0,3);
    var ball04 = new ColoredBall(0,0,4);
    var ball05 = new ColoredBall(10,0,5);
    var ball06 = new ColoredBall(20,0,6);
    var ball07 = new ColoredBall(30,0,7);
    var ball08 = new ColoredBall(40,0,8);
    var ball09 = new ColoredBall(50,0,9);
    var ball10 = new ColoredBall(60,0,10);
    var ball11 = new ColoredBall(70,0,11);
    var ball12 = new ColoredBall(80,0,12);
    var ball13 = new ColoredBall(90,0,13);
    var ball14 = new ColoredBall(100,0,14);
    var ball15 = new ColoredBall(110,0,15);

    //?????????werkt niet moet eigenlijk in de draw functie maar kent ball01 dan niet
    //var collisionBorder = new THREE.Raycaster();
    //var speed = new THREE.Vector3();

    //ball01.position.add(speed.copy(ball01.direction).multiplyScalar(20));
    //collisionBorder.set(ball01.position, ball01.direction);
    //var intersections = collisionBorder.intersectObjects(table.tableGroup.children);

    //if(intersections.length > 0){
    //    var intersection = intersections[0];

    //    if(intersection.distance < 2){
    //        ball01.direction.reflect(intersection.face.normal);
     //   }
    //}

    camera.lookAt(new THREE.Vector3(0,0,0));
    draw();
};

function draw() {
    controls.update();
    requestAnimationFrame(draw);
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