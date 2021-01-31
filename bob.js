class Bob
{
	constructor(x,y,w,h)
	{
			var options={
            isStatic:false,	
            restitution:0.3,
            friction:0.5,
            density:1.2	
        }
		this.x=x;
		this.y=y;
		

		this.body=Bodies.circle(x, y, 1, options);
 		World.add(world, this.body);

    }
    
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
            rectMode(CENTER)  
			strokeWeight(4);
			fill(25,25,25)
			circle(0,0,50,50);
			imageMode(CENTER)
			//image(this.image, 0, 0, 50, 50);
			pop()
			
	}

}