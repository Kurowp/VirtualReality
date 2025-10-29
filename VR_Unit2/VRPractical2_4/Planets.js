class planet{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
       this.obj = document.createElement("a-entity");

       let ring = document.createElement("a-ring");
        ring.setAttribute("position",{x:0,y:0,z:0});
        ring.setAttribute("radius-inner",4);
        ring.setAttribute("radius-outer",6);
        ring.setAttribute("color","#a06898");
        ring.setAttribute("rotation",{x:0,y:0,z:0});
        ring.setAttribute("opacity",0.7);
        ring.setAttribute("side","double");
        this.obj.append(ring);

        let ring2 = document.createElement("a-ring");
        ring2.setAttribute("position",{x:0,y:0,z:0});
        ring2.setAttribute("radius-inner",4);
        ring2.setAttribute("radius-outer",6);
        ring2.setAttribute("color","#a06898");
        ring2.setAttribute("opacity",0.7);
        ring2.setAttribute("rotation",{x:0,y:90,z:0});
        ring2.setAttribute("side","double");
        this.obj.append(ring2);

        let ring3 = document.createElement("a-ring");
        ring3.setAttribute("position",{x:0,y:0,z:0});
        ring3.setAttribute("radius-inner",4);
        ring3.setAttribute("radius-outer",6);
        ring3.setAttribute("color","#a06898");
        ring3.setAttribute("opacity",0.7);
        ring3.setAttribute("rotation",{x:0,y:45,z:0});
        ring3.setAttribute("side","double");
        this.obj.append(ring3);

        let ring4 = document.createElement("a-ring");
        ring4.setAttribute("position",{x:0,y:0,z:0});
        ring4.setAttribute("radius-inner",4);
        ring4.setAttribute("radius-outer",6);
        ring4.setAttribute("opacity",0.7);
        ring4.setAttribute("color","#a06898");
        ring4.setAttribute("rotation",{x:0,y:-45,z:0});
        ring4.setAttribute("side","double");
        this.obj.append(ring4);

        let sphere = document.createElement("a-sphere");
        sphere.setAttribute("position",{x:0,y:0,z:0});
        sphere.setAttribute("radius",4);
        sphere.setAttribute("color","#fff4f3");
        sphere.setAttribute("opacity",0.6);
        this.obj.append(sphere);

        let sphere1 = document.createElement("a-sphere");
        sphere1.setAttribute("position",{x:0,y:0,z:0});
        sphere1.setAttribute("radius",2);
        sphere1.setAttribute("color","#ffe5cf");
        sphere1.setAttribute("opacity",1);
        this.obj.append(sphere1);



        scene.append(this.obj);
        this.obj.setAttribute("scale",{x:.5,y:.5,z:.5});
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
        
    }
}