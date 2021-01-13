class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic: false  
         }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.visiblity = 225;
        World.add(world,this.body);

    }

    display(){

        if(this.body.speed<3){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
        else {
        World.remove(world,this.body);
        push();
        this.visiblity = this.visiblity-5;
        tint(255,this.visiblity);
        //image(this.body.position.x,this.body.position.y,50,50);
        pop();
    }
    }
        score(){
            if(this.visiblity< 0 && this.visiblity >-105){
              score++;
            }
    }
    }
        
    