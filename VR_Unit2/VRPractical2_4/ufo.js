class UFO {
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = -0.05;
       this.obj = document.createElement("a-entity");

       let base = document.createElement("a-sphere");
        base.setAttribute("position",{x:0,y:-2.25,z:0});
        base.setAttribute("radius",4);
        base.setAttribute("color","gray");
        base.setAttribute("side","double");
        base.setAttribute("phi-length",180);
        base.setAttribute("rotation",{x:270,y:0,z:0});
        base.setAttribute("phi-start",2);
        this.obj.append(base);

        let frame= document.createElement("a-ring");
        frame.setAttribute("position",{x:0,y:-2.25,z:0});
        frame.setAttribute("radius-inner",3.25);
        frame.setAttribute("radius-outer",7);
        frame.setAttribute("color","#494B4D");
        frame.setAttribute("width","3");
        frame.setAttribute("rotation",{x:90,y:0,z:0});
        this.obj.append(frame);

        let frame2= document.createElement("a-ring");
        frame2.setAttribute("position",{x:0,y:-2.24,z:0});
        frame2.setAttribute("radius-inner",6.75);
        frame2.setAttribute("radius-outer",14);
        frame2.setAttribute("color","#6E7173");
        frame2.setAttribute("side","double");
        frame2.setAttribute("height","10");
        frame2.setAttribute("rotation",{x:90,y:0,z:0});
        this.obj.append(frame2);

        let frame3= document.createElement("a-ring");
        frame3.setAttribute("rotation",{x:90,y:0,z:0});
        frame3.setAttribute("position",{x:0,y:-2.22,z:0});
        frame3.setAttribute("radius-inner",13.75);
        frame3.setAttribute("radius-outer",16);
        frame3.setAttribute("color","Black");
        this.obj.append(frame3);

        let top = document.createElement("a-sphere");
        top.setAttribute("position",{x:0,y:-2,z:0});
        top.setAttribute("radius",8);
        top.setAttribute("color","silver");
        top.setAttribute("side","double");
        top.setAttribute("phi-length",180);
        top.setAttribute("rotation",{x:270,y:0,z:0});
        top.setAttribute("phi-start",2);
        this.obj.append(top);

        let bottom = document.createElement("a-cylinder");
        bottom.setAttribute("position",{x:0,y:0,z:0});
        bottom.setAttribute("radius",2);
        bottom.setAttribute("height",0.5);
        bottom.setAttribute("color","silver");
        this.obj.append(bottom);

        let circle = document.createElement("a-sphere");
        circle.setAttribute("position",{x:0,y:0.5,z:0});
        circle.setAttribute("radius",1.5);
        circle.setAttribute("color","lightblue");
        this.obj.append(circle);


        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

        scene.append(this.obj);

    }
    invade(){
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
        if(this.y < 0){
            this.dy=0;
        }
    }
}