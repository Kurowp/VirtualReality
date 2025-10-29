let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [ ] , ufos = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
     rocket = new Rocket(0,5,-40);
     black = new Blackhole(0,0,0);
     stars = new star(0,0,0);
     planet = new planet(10,4,4);
    for(let i = 0; i < 100; i++){
      let x = rnd(-100,100);
      let y = rnd(-20,-5)
      let z = rnd(-100,100);
      Rockets = new Rocket(x, y , z);
      rockets.push(Rockets);
  }
  for(let i = 0; i < 5; i++){
      let x = rnd(-100,100);
      let y = rnd(20,50)
      let z = rnd(-150,150);
      Ufos = new UFO(x, y , z);
      ufos.push(Ufos);
  }
 
  loop();
})

function loop(){
  rocket.launch();
  for(let r of rockets){
    r.launch();
  
  }
  for(let u of ufos){
    u.invade();
  
  }
  window.requestAnimationFrame( loop );
}
