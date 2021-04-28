class Droplet {
   constructor(x,y){
       var options = {
        friction : 0.1
    }
    this.body = Bodies.rectangle(x,y, 50, 50, options);
    this.width = 200;
    this.height = 200;
    this.image = loadImage("images/drop.png");
    World.add(world, this.body);
 
  }
   

display(){
    var pos =this.body.position;

    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);

    if(frameCount % 3 === 0){
    if(pos.x > width || pos.y > height){
        Matter.Body.setPosition(this.body, {x : random(0 , 700) , y : random(0 , 700)});
    }
}
}
}