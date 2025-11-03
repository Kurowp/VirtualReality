let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, mech1=[];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
  mechy = new Mech(0,0,-10);
  for(let i = 0; i < 10; i++){
      let x = rnd(-100,100);
      let y = rnd(-20,-5)
      let z = rnd(-100,100);
      mechs = new Mech(x, y , z);
      mech1.push(mechs);
  }
  loop();
  
})
function loop(){


  window.requestAnimationFrame( loop );
}
