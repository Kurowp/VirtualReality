class Wall2{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = y;
    
        this.obj = document.createElement("a-box");
        this.obj.setAttribute("scale",{x:5,y:100,z:9});
        this.obj.setAttribute("repeat","0.2 5");
        this.obj.setAttribute("src","wall.png");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);






    }
}