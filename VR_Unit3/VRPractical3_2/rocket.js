class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.1;
        this.obj = document.createElement("a-entity");

        let body = document.createElement("a-cylinder");
        body.setAttribute("position",{x:0,y:1.5,z:0});
        body.setAttribute("radius",2);
        body.setAttribute("height",8);
        body.setAttribute("color","gray");
        this.obj.append(body);

        let bottom = document.createElement("a-cone");
        bottom.setAttribute("position",{x:0,y:-3,z:0});
        bottom.setAttribute("radius-bottom",1);
        bottom.setAttribute("color","orange");
        bottom.setAttribute("height",2);
        this.obj.append(bottom);

        let top = document.createElement("a-cone");
        top.setAttribute("position",{x:0,y:6.5,z:0});
        top.setAttribute("color","red");
        top.setAttribute("radius-top",0);
        top.setAttribute("radius-bottom",2.5);
        top.setAttribute("height",2);
        this.obj.append(top);

        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

        scene.append(this.obj);
        this.obj.addEventListener("click", () => {
            this.launch = true;
            });



}
fly(){
    if(this.launch){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
}
}
}