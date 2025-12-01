class star{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
       this.obj = document.createElement("a-entity");

       
        let sphere = document.createElement("a-sphere");
        sphere.setAttribute("position",{x:0,y:0,z:0});
        sphere.setAttribute("radius",4);
        sphere.setAttribute("color","#c99039");
        this.obj.append(sphere);

        let sphere1 = document.createElement("a-sphere");
        sphere1.setAttribute("position",{x:0,y:0,z:0});
        sphere1.setAttribute("radius",4);
        sphere1.setAttribute("color","#d8ca9d");
        this.obj.append(sphere1);

        let ring5 = document.createElement("a-ring");
        ring5.setAttribute("position",{x:0,y:.0,z:0});
        ring5.setAttribute("radius-inner",5);
        ring5.setAttribute("radius-outer",5.25);
        ring5.setAttribute("color","#a6a6a6");
        ring5.setAttribute("rotation",{x:90,y:0,z:0});
        ring5.setAttribute("side","double");
        this.obj.append(ring5);

        let ring6 = document.createElement("a-ring");
        ring6.setAttribute("position",{x:0,y:0,z:0});
        ring6.setAttribute("radius-inner",5.25);
        ring6.setAttribute("radius-outer",6);
        ring6.setAttribute("color","#C2B280");
        ring6.setAttribute("rotation",{x:90,y:0,z:0});
        ring6.setAttribute("side","double");
        this.obj.append(ring6);

        let ring7 = document.createElement("a-ring");
        ring7.setAttribute("position",{x:0,y:0,z:0});
        ring7.setAttribute("radius-inner",6);
        ring7.setAttribute("radius-outer",6.25);
        ring7.setAttribute("color","#e3dccb");
        ring7.setAttribute("rotation",{x:90,y:0,z:0});
        ring7.setAttribute("side","double");
        this.obj.append(ring7);

        let ring10 = document.createElement("a-ring");
        ring10.setAttribute("position",{x:0,y:0,z:0});
        ring10.setAttribute("radius-inner",5);
        ring10.setAttribute("radius-outer",6);
        ring10.setAttribute("color","#a59186");
        ring10.setAttribute("rotation",{x:90,y:0,z:0});
        ring10.setAttribute("side","double");
        this.obj.append(ring10);

        let ring8 = document.createElement("a-ring");
        ring8.setAttribute("position",{x:0,y:0,z:0});
        ring8.setAttribute("radius-inner",6.25);
        ring8.setAttribute("radius-outer",7);
        ring8.setAttribute("color","#a59186");
        ring8.setAttribute("rotation",{x:90,y:0,z:0});
        ring8.setAttribute("side","double");
        this.obj.append(ring8);

        let ring9 = document.createElement("a-ring");
        ring9.setAttribute("position",{x:0,y:0,z:0});
        ring9.setAttribute("radius-inner",7);
        ring9.setAttribute("radius-outer",6.25);
        ring9.setAttribute("color","black");
        ring9.setAttribute("rotation",{x:90,y:0,z:0});
        ring9.setAttribute("side","double");
        this.obj.append(ring9);

        

        scene.append(this.obj);
        this.obj.setAttribute("scale",{x:5,y:5,z:5});
        this.obj.setAttribute("position",{x:80,y:40,z:-50});
        
    }
}