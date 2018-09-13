// Creating variables
var myX = 400, myY = 0,platX= [],platY = [],X=800,Y=600,jivoti=5,br=0,i=0,vragX=0,vragY=285,vrag1X=800,vrag1Y=285,kX=0,kY=0,t=0,coints=0;
for(i=0;i<3;++i){
platX[i] = Math.random()*750;
platY[i] = Math.random()*600+1000;
}
var lol = new Image();
lol.src="nosht1.png";
var lol1 = new Image();
lol1.src="dojo.png";
var kebabche = new Image();
kebabche.src="shuriken-1.png";
function update() {
    ++t;
    if(t==100){
        t=0;
    }
      if(areColliding(myX,myY,30,30,platX[i=0],platY[i=0],150,20) && t==95){
        myY=platY[i=0]-30;
          platY[i=0]=Math.random()*600+1000;
    }
         if(areColliding(myX,myY,30,30,platX[i=2],platY[i=2],150,20)){
          --jivoti;
              myY=30;
          platY[i=2]=Math.random()*600+1000;
    }
myY+=1.5;
        platY[i=0]-=3;
           platY[i=1]-=2;
           platY[i=2]-=1;
    vragX+=3;
    vrag1X-=3;
    if(isKeyPressed[65]){
        myX-=3;
    }
     if(isKeyPressed[68]){
        myX+=3;
    }
    for(i=0;i<3;++i){
    if(areColliding(myX,myY,30,30,platX[i],platY[i],150,20)){
        myY=platY[i]-30;
    }
          if(areColliding(myX,myY,30,30,vragX,vragY,30,30)){
        --jivoti;
              myY=30;
    }
              if(areColliding(myX,myY,30,30,vrag1X,vrag1Y,30,30)){
        --jivoti;
              myY=30;
    }
    if(platY[i]<=-30){
        platY[i]=800;
    platX[i] = Math.random()*750;
    Math.random()*600+1000;    
    }
    }
    if(myY>=630){
       // X=0;
      //  Y=0;
              myY=30;
            --jivoti;  
    }
        if(myY<=-30){
       // X=0;
        //Y=0;
         myY=30;
            --jivoti;
    }
        if(vragX>=800){
       vragX=0;
            vragY=Math.random()*600;
    }
           if(vrag1X<=0){
       vrag1X=800;
            vrag1Y=Math.random()*600;
    }

};
function draw() {
    // This is how you draw a rectangle
         context.drawImage(lol1,kX,kY,800,600);
        context.fillStyle = "blue";
context.drawImage(lol,myX,myY,30,30);
      context.font="30px Times New Roman";
           context.fillText(coints,0,300);
    if(areColliding(myX,myY,30,30,platX[i=1],platY[i=1],150,20)){
 ++coints
 myY=30;
        myX=500;
       context.fillStyle = "blue";
}else{
               context.fillStyle = "yellow";
}
    context.fillRect(platX[i=1],platY[i=1],150,20); 
  //  for(i=0;i<3;++i){
 //  context.fillRect(platX[i],platY[i],150,20); 
//    }
   for(br=0;br<jivoti;++br){
 context.fillRect(br*35,0,30,10);    
 }
      context.fillStyle = "green";
        context.fillRect(platX[i=0],platY[i=0],150,20); 
         context.drawImage(kebabche,vragX,vragY,50,50);
      context.drawImage(kebabche,vrag1X,vrag1Y,50,50);
    context.fillStyle = "red";
        context.fillRect(platX[i=2],platY[i=2],150,20); 
    context.fillRect(X,Y,800,600);

      context.font="30px Times New Roman";
           context.fillText(jivoti,100,300);
        for(br=0;br<jivoti;++br){
      context.fillRect(br*35,0,30,10);    
  }
        context.fillStyle = "black";
        if(jivoti<=0){
      X=0;
      Y=0;
       context.font="80px Times New Roman";
           context.fillText("game over",100,300);       
    }
    // context.font="80px Times New Roman";
       //     context.fillText("game over",100,300);
};


function keyup(key) {
    // Show the pressed keycode in the console
};

function mouseup() {
    // Show coordinates of mouse on clic
};