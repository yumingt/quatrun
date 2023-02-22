class Blob {
  constructor(image){
    this.size = 50;
    this.x = width;
    this.y = height - this.size - 50;
    this.speed = 8;
    this.sprite = createSprite(this.x, this.y, width, height);
    this.sprite.addImage(image);
    this.sprite.scale = 0.3;
  }
  
  setSpeed(speed){
    this.speed = speed;
  }
  
  getX(){
    return this.x;
  }
  
  move(){
    this.x -= this.speed;
  }
  
  show(){
    this.sprite.position.x = this.x;
    drawSprites();
//    fill(0, 102, 153);
//    triangle(this.x, height, this.x + this.size / 2, this.y, this.x + this.size, height)
  }
}