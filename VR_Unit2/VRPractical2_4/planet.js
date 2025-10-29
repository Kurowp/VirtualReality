class Blackhole{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
       this.obj = document.createElement("a-entity");

       let ring = document.createElement("a-ring");
        ring.setAttribute("position",{x:0,y:0,z:0});
        ring.setAttribute("radius-inner",4);
        ring.setAttribute("radius-outer",6);
        ring.setAttribute("color","#2e2137");
        ring.setAttribute("rotation",{x:0,y:0,z:0});
        ring.setAttribute("side","double");
        this.obj.append(ring);

        let ring2 = document.createElement("a-ring");
        ring2.setAttribute("position",{x:0,y:0,z:0});
        ring2.setAttribute("radius-inner",4);
        ring2.setAttribute("radius-outer",6);
        ring2.setAttribute("color","#2e2137");
        ring2.setAttribute("rotation",{x:0,y:90,z:0});
        ring2.setAttribute("side","double");
        this.obj.append(ring2);

        let ring3 = document.createElement("a-ring");
        ring3.setAttribute("position",{x:0,y:0,z:0});
        ring3.setAttribute("radius-inner",4);
        ring3.setAttribute("radius-outer",6);
        ring3.setAttribute("color","#2e2137");
        ring3.setAttribute("rotation",{x:0,y:45,z:0});
        ring3.setAttribute("side","double");
        this.obj.append(ring3);

        let ring4 = document.createElement("a-ring");
        ring4.setAttribute("position",{x:0,y:0,z:0});
        ring4.setAttribute("radius-inner",4);
        ring4.setAttribute("radius-outer",6);
        ring4.setAttribute("color","#2e2137");
        ring4.setAttribute("rotation",{x:0,y:-45,z:0});
        ring4.setAttribute("side","double");
        this.obj.append(ring4);

        let sphere = document.createElement("a-sphere");
        sphere.setAttribute("position",{x:0,y:0,z:0});
        sphere.setAttribute("radius",4);
        sphere.setAttribute("color","black");
        this.obj.append(sphere);


        scene.append(this.obj);
        this.obj.setAttribute("scale",{x:50,y:50,z:0.});
        this.obj.setAttribute("position",{x:100,y:200,z:-500});
        
    }
}