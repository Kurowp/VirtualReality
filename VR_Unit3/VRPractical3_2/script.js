let scene;
let ufo1, rocket1;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")
  car1 = document.getElementById("car");
  

  ufo1 = new UFO(0,10,0);
  rocket1 = new Rocket(0,0,0);
  cars = new Car(0,0,-10);
  loop();
})

function loop(){
  cars.drive();
  rocket1.fly();
  ufo1.invades();
    
  window.requestAnimationFrame(loop);
}