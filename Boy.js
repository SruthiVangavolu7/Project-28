class Boy{
    constructor(x, y, width, height) {
        
        this.image = loadImage("sprites/boy.png");
        // alert("h5");
        
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
        // alert("h7");
      }
      display(){
        // alert("h4");
        var pos =this.body.position;
        //this.body.scale = 0.5;
        imageMode(CENTER);
        //rect(pos.x, pos.y, this.width, this.height);
        image(this.image, pos.x, pos.y, this.width, this.height);
      }
}