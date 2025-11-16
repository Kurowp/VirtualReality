class Spider3{
	constructor(x,y,z){
		this.x = x || 0;
		this.y = (typeof y === 'number') ? y : 0;
		this.z = (typeof z === 'number') ? z : -3;
		this.obj = document.createElement("a-entity");


		let abdomen = document.createElement("a-sphere");
		abdomen.setAttribute("position",{x:0,y:0.3,z:-0.1});
		abdomen.setAttribute("radius",0.5);
		abdomen.setAttribute("color","#1a1a1a");
		this.obj.append(abdomen);

		let thorax = document.createElement("a-sphere");
		thorax.setAttribute("position",{x:0,y:0.3,z:0.2});
		thorax.setAttribute("radius",0.25);
		thorax.setAttribute("color","#222");
		this.obj.append(thorax);

		let head = document.createElement("a-sphere");
		head.setAttribute("position",{x:0,y:0.35,z:0.5});
		head.setAttribute("radius",0.2);
		head.setAttribute("color","#1a1a1a");
		this.obj.append(head);

		let eyeL = document.createElement("a-sphere");
		eyeL.setAttribute("position",{x:-0.12,y:0.42,z:0.65});
		eyeL.setAttribute("radius",0.06);
		eyeL.setAttribute("color","#fff");
		this.obj.append(eyeL);

		let eyeR = eyeL.cloneNode();
		eyeR.setAttribute("position",{x:0.12,y:0.42,z:0.65});
		this.obj.append(eyeR);

		let leg1 = document.createElement("a-cylinder");
		leg1.setAttribute("position",{x:-0.5,y:0.1,z:0.5});
		leg1.setAttribute("height",1.2);
		leg1.setAttribute("radius",0.05);
		leg1.setAttribute("rotation",{x:0,y:-45,z:70});
		leg1.setAttribute("color","#000");
		this.obj.append(leg1);

		let leg2 = document.createElement("a-cylinder");
		leg2.setAttribute("position",{x:-0.5,y:0.1,z:0.1});
		leg2.setAttribute("height",1.2);
		leg2.setAttribute("radius",0.05);
		leg2.setAttribute("rotation",{x:0,y:-25,z:75});
		leg2.setAttribute("color","#000");
		this.obj.append(leg2);

		let leg3 = document.createElement("a-cylinder");
		leg3.setAttribute("position",{x:-0.5,y:0.1,z:-0.25});
		leg3.setAttribute("height",1.2);
		leg3.setAttribute("radius",0.05);
		leg3.setAttribute("rotation",{x:0,y:-60,z:80});
		leg3.setAttribute("color","#000");
		this.obj.append(leg3);

		let leg4 = document.createElement("a-cylinder");
		leg4.setAttribute("position",{x:-0.5,y:0.1,z:-0.6});
		leg4.setAttribute("height",1.2);
		leg4.setAttribute("radius",0.05);
		leg4.setAttribute("rotation",{x:0,y:-100,z:85});
		leg4.setAttribute("color","#000");
		this.obj.append(leg4);

		let leg5 = document.createElement("a-cylinder");
		leg5.setAttribute("position",{x:0.5,y:0.1,z:0.5});
		leg5.setAttribute("height",1.2);
		leg5.setAttribute("radius",0.05);
		leg5.setAttribute("rotation",{x:0,y:45,z:70});
		leg5.setAttribute("color","#000");
		this.obj.append(leg5);

		let leg6 = document.createElement("a-cylinder");
		leg6.setAttribute("position",{x:0.5,y:0.1,z:0.1});
		leg6.setAttribute("height",1.2);
		leg6.setAttribute("radius",0.05);
		leg6.setAttribute("rotation",{x:0,y:25,z:75});
		leg6.setAttribute("color","#000");
		this.obj.append(leg6);

		let leg7 = document.createElement("a-cylinder");
		leg7.setAttribute("position",{x:0.5,y:0.1,z:-0.25});
		leg7.setAttribute("height",1.2);
		leg7.setAttribute("radius",0.05);
		leg7.setAttribute("rotation",{x:0,y:60,z:80});
		leg7.setAttribute("color","#000");
		this.obj.append(leg7);

		let leg8 = document.createElement("a-cylinder");
		leg8.setAttribute("position",{x:0.5,y:0.1,z:-0.6});
		leg8.setAttribute("height",1.2);
		leg8.setAttribute("radius",0.05);
		leg8.setAttribute("rotation",{x:0,y:100,z:85});
		leg8.setAttribute("color","#000");
		this.obj.append(leg8);

		scene.append(this.obj);

		this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
		this.obj.setAttribute("scale",{x:1,y:1,z:1});
		this.obj.setAttribute("rotation",{x:0,y:0,z:0});
	}
}


