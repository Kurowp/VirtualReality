let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createCloud(x,20,z)
    createHouse(x,-1,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
  function createCloud(x, y, z){
    let cloud = document.createElement("a-entity");
    
    let sphere1 = document.createElement("a-sphere");
    sphere1.setAttribute("color","White");
    sphere1.setAttribute("position","0 0 0");
    sphere1.setAttribute("radius","1.5");
    cloud.append( sphere1 );

    let sphere2 = document.createElement("a-sphere");
    sphere2.setAttribute("color","white");
    sphere2.setAttribute("position","1 0.5 0");
    sphere2.setAttribute("radius","1.2");
    cloud.append( sphere2 );

    let sphere3 = document.createElement("a-sphere");
    sphere3.setAttribute("color","White");
    sphere3.setAttribute("position","-1 0.5 0");
    sphere3.setAttribute("radius","1.2");
    cloud.append( sphere3 );
    cloud.setAttribute("position",{x:x, y:y, z:z});
    scene.append( cloud );

  }
  
   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
  function createHouse(x, y, z){
    let house = document.createElement("a-entity");
    
    let base = document.createElement("a-box");
    base.setAttribute("color","White");
    base.setAttribute("position","0 0.5 0");
    base.setAttribute("depth","3");
    base.setAttribute("height","6");
    base.setAttribute("width","3");
    house.append( base );

    let roof = document.createElement("a-cylinder");
    roof.setAttribute("color","white");
    roof.setAttribute("position","0 3.5 0");
    roof.setAttribute("radius","2");
    roof.setAttribute("height","2.9");
    roof.setAttribute("segments-radial","4");
    roof.setAttribute("rotation","0 90 90");
    house.append( roof );

    house.setAttribute("position",{x:x, y:y, z:z});
    scene.append( house );
  }
})
  

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/

/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



