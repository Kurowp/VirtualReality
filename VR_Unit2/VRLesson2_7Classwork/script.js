let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate, dude;
let dudeTemplates = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let i = 0; i < 10; i++){
      let x = rnd(-10,10);
      let z = rnd(-10,10);
      dude = new Dude(x, 0 , z);
      dudeTemplates.push(dude);
  }
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for(let d of dudeTemplates){
    d.jump();
  }
  window.requestAnimationFrame( loop );
}