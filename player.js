class Player {
  constructor(x, y, width, height, image){
    this.size = 50;
    this.x = 50;
    this.y = height - this.size;
    this.vy = 0;
    this.gravity = 1.5;
    this.sprite = createSprite(x, y, width, height);
    this.sprite.addImage(image);
    this.sprite.scale = 0.3;
//    this.rotationAngle = 0;
  }

//  display() {
  //  drawSprites();
  //}

  jump(){
//    if(this.y == height - this.size){
//      this.vy = -23;
//    }

//    if (this.sprite.position.y + this.sprite.height / 2 == height) {
//      this.vy = -23;
//    }
    if (this.sprite.overlap(ground)) {
      this.vy = -23;
     // this.rotationAngle += 355;
    }
  }

  move(){
//    this.y += this.vy;
//    this.vy += this.gravity;
//    this.y = constrain(this.y, 0, height - this.size)
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
    this.sprite.position.y = this.y;
  }

  show(){
    drawSprites();
    //this.sprite.rotation = this.rotationAngle;
    //fill(255, 102, 153);
    //rect(this.x, this.y, this.size, this.size);
  }

  hits(blob){
//    return collideLineRect(blob.x, height, blob.x + blob.size / 2, blob.y, this.x, this.y, this.size, this.size);
  return collideLineRect(blob.x, height, blob.x + blob.size / 2, blob.y, this.x + 79, this.y, this.size, this.size);
  }
}