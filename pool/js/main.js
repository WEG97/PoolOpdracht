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

    camera.lookAt(new THREE.Vector3(0,0,0));
    draw();
};

function draw() {
    controls.update();
    requestAnimationFrame(draw);
    renderer.render(scene, camera);
};

//voegt lichten toe
function addLights() {
    var light = new THREE.AmbientLight(0x0d0d0d);
    scene.add(light);
    var tableLight1 = new TableLight(278 / 4, 150, 0);
    var tableLight2 = new TableLight(-278 / 4, 150, 0);
};