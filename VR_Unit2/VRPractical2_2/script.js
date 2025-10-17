let scene;
let sphere;
let entity;



window.addEventListener("DOMContentLoaded",function() {
    scene=document.querySelector("a-scene");
    sun=document.querySelector("#sun");
    pokeball=document.querySelector("#pokemonball");
    rocket=document.querySelector("#rocket");
    dude=document.querySelector("#dude");
    car=document.querySelector("#car");

    sun.o = 2;
    sun.do = -.01;
    pokeball.x = 0;
    pokeball.dx = 1; 
    rocket.y = 0;
    rocket.dy = .01;
    dude.s = 0;
    dude.ds = .01;
    car.x = 0;
    car.dx = -.01;


    loop();
})

function loop(){

    sun.o += sun.do;
    sun.setAttribute("opacity",sun.o);

    pokeball.x += pokeball.dx;
    pokeball.setAttribute("rotation",{x:pokeball.x,y:0,z:0});

    rocket.y += rocket.dy;
    rocket.setAttribute("position",{x:0,y:rocket.y,z:0});

    dude.s += dude.ds;
    dude.setAttribute("scale",{x:dude.s,y:dude.s,z:dude.s});

    car.x += car.dx;
    car.setAttribute("position",{x:car.x,y:0,z:0});

    window.requestAnimationFrame(loop);

}
