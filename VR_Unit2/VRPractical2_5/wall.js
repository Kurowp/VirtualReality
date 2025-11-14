class Wall{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = y;
    
        this.obj = document.createElement("a-box");
        this.obj.setAttribute("src","wall.png");
        this.obj.setAttribute("repeat","0.2 5");
        this.obj.setAttribute("scale",{x:3,y:100,z:4});
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);






    }
}