class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let base = document.createElement("a-box");
    base.setAttribute("color","brown");
     base.setAttribute("position","0 0.5 0");
    base.setAttribute("depth","3");
    base.setAttribute("height","6");
    base.setAttribute("width","3");
    this.obj.append( base );
  
    let roof = document.createElement("a-cylinder");
    roof.setAttribute("color","white");
    roof.setAttribute("position","0 3.5 0");
    roof.setAttribute("radius","2");
    roof.setAttribute("height","2.9");
    roof.setAttribute("segments-radial","4");
    roof.setAttribute("rotation","0 90 90");
    this.obj.append( roof );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}