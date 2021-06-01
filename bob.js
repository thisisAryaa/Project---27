class Bob{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.2,
			friction:0.9,
			density:1
            }
	
		 
			this.body = Bodies.circle(x,y,r,options);
			this.r = r
		 
			World.add(world, this.body);
	}
    display(){			
		ellipseMode(RADIUS);
		fill(rgb(153, 255, 153));
		strokeWeight(4);
		circle(this.body.position.x,this.body.position.y,this.r);
			
	}

}