let scene;
let ufo1, rocket1;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  car1 = document.getElementById("car");
  

  ufo1 = new UFO(0,10,0);
  rocket1 = new Rocket(0,0,0);
  star1 = new star(0,15,0);
  loop();
})

function loop(){
  rocket1.fly();
  ufo1.invades();
    
  window.requestAnimationFrame(loop);
}