class Car{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dz = 0.1;

        this.obj=car1.cloneNode(true);
       
        car1.addEventListener("mouseenter", function(){
        this.move = true;
  });
        
}
drive(){
    if(this.move){
    this.z += this.dz;
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
}
}
}