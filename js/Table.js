var Table = function () {
    var mesh_x = -Table.LEN_X / 2;
    var mesh_y = 0;
    var mesh_z = Table.LEN_Z / 2;

    var loader = new THREE.JSONLoader();
    loader.load('models/base.json', function (geometry) { //basis van de biljart tafel (kan nog wat worden aangepast)
      var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
        color: new THREE.Color(0x000000),
        specular: 0x404040,
        shininess: 20,
        shading: THREE.SmoothShading
      }));
  
      mesh.position.x = mesh_x;
      mesh.position.y = mesh_y;
      mesh.position.z = mesh_z;
      mesh.scale.set(100, 100, 100);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      scene.add(mesh);
    });
  
    loader.load('models/felt.json', function (geometry) { //biljartlaken
      var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
        color: new THREE.Color(TABLE_COLORS.cloth),
        specular: 0x404040,
        shininess: 10,
        shading: THREE.SmoothShading
      }));
  
      mesh.position.x = mesh_x;
      mesh.position.y = mesh_y;
      mesh.position.z = mesh_z;
      mesh.scale.set(100, 100, 100);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      scene.add(mesh);
    });
  
    loader.load('models/edges.json', function (geometry) { //de randen binnen de tafel zelf
      var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
        color: new THREE.Color(0x7a5230),
        specular: 0x404040,
        shininess: 100,
        shading: THREE.SmoothShading
      }));
  
      mesh.position.x = mesh_x;
      mesh.position.y = mesh_y;
      mesh.position.z = mesh_z;
      mesh.scale.set(100, 100, 100);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      scene.add(mesh);
    });
  
    loader.load('models/pockets.json', function (geometry) { //bal gaten
      var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
        color: new THREE.Color(0x7a5230),
        specular: 0x3D3D3D,
        shininess: 20,
        shading: THREE.SmoothShading
      }));
  
      mesh.position.x = mesh_x;
      mesh.position.y = mesh_y;
      mesh.position.z = mesh_z;
      mesh.scale.set(100, 100, 100);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      scene.add(mesh);
    });
  
    loader.load('models/pocket_bottoms.json', function (geometry) { //bodem van de gaten
      var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
        color: new THREE.Color(0x000),
        specular: 0x000,
        shininess: 0,
        shading: THREE.SmoothShading
      }));
  
      mesh.position.x = mesh_x;
      mesh.position.y = mesh_y;
      mesh.position.z = mesh_z;
      mesh.scale.set(100, 100, 100);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      scene.add(mesh);
    });
  };
  
  var TABLE_COLORS = {
    cloth: 0x206020
  };
  
  Table.LEN_Z = 137.16;
  Table.LEN_X = 274.32;

  