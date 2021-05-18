function isTouching(obj1,obj2){
    if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2 &&
      obj2.x - obj1.x < obj1.width/2 + obj2.width/2 &&
      obj1.y-obj2.y < obj1.height/2+obj2.height/2 &&
      obj2.y-obj1.y < obj1.height/2+obj2.height/2
      )
      {
        return true;
       // boolean value => true, false
    }else{
        return false;
    }
}
function bounceOff(obj1,obj2){
if(isTouching(obj1,obj2)){
  /*
      2 * -1 = -2
      -2 * -1 = 2

      a = a+2;
      b= b+100;

      a = a-1
      a -=1

      a+=2;
      b+=100
  */

      obj1.velocityX = obj1.velocityX * (-1);
      obj1.velocityY = obj1.velocityY * (-1);

      obj2.velocityX = obj2.velocityX * (-1);
      obj2.velocityY *= (-1);
}
}