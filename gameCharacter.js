function gameCharacter()
{
    if(isLeft && isFalling)   // jumping-left
	{
    stroke(0);    
    fill(211,211,211);
    ellipse(gameChar_x-15,gameChar_y-17,13,14);  // face
    ellipse(gameChar_x,gameChar_y-17,20,15);     //body
    ellipse(gameChar_x+15,gameChar_y-17,10,5);  //tail
    ellipse(gameChar_x-5,gameChar_y-7,5,7);    //feet
    ellipse(gameChar_x+5,gameChar_y-7,5,7);    //feet
    fill(255,255,255);
    line(gameChar_x-17,gameChar_y-19,gameChar_x-18,gameChar_y-18);
    line(gameChar_x-18,gameChar_y-18,gameChar_x-17,gameChar_y-17);
    ellipse(gameChar_x-18,gameChar_y-14,3,3);
    triangle(gameChar_x-16,gameChar_y-24,gameChar_x-17,gameChar_y-26,gameChar_x-18,gameChar_y-24); //ears
    triangle(gameChar_x-13,gameChar_y-24,gameChar_x-14,gameChar_y-26,gameChar_x-15,gameChar_y-24);
	}
    
	else if(isRight && isFalling)    //jumping-right
	{	
    stroke(0);    
    fill(211,211,211);
    ellipse(gameChar_x+15,gameChar_y-17,13,14);      // face
    ellipse(gameChar_x,gameChar_y-17,20,15);         //body
    ellipse(gameChar_x-15,gameChar_y-17,10,5);       //tail
    ellipse(gameChar_x-5,gameChar_y-7,5,7);          //feet
    ellipse(gameChar_x+5,gameChar_y-7,5,7);          //feet
    line(gameChar_x+17,gameChar_y-19,gameChar_x+18,gameChar_y-18);
    line(gameChar_x+18,gameChar_y-18,gameChar_x+17,gameChar_y-17);
    fill(255,255,255);
    ellipse(gameChar_x+18,gameChar_y-14,3,3);
    triangle(gameChar_x+17,gameChar_y-24,gameChar_x+16,gameChar_y-26,gameChar_x+15,gameChar_y-24); //ears
    triangle(gameChar_x+14,gameChar_y-24,gameChar_x+13,gameChar_y-26,gameChar_x+12,gameChar_y-24);  //ears
	}
    
	else if(isLeft)  //walking left 
	{
    noFill();
    stroke(0);
    fill(211,211,211);
    ellipse(gameChar_x-15,gameChar_y-17,13,14);     // face
    ellipse(gameChar_x-1,gameChar_y-17,20,15);      //body
    ellipse(gameChar_x+14,gameChar_y-17,10,5);      //tail
    ellipse(gameChar_x-6,gameChar_y-7,4,9);        //feet
    ellipse(gameChar_x-3,gameChar_y-8,3,7);        //feet
    ellipse(gameChar_x+3,gameChar_y-8,3,7);       //feet
    ellipse(gameChar_x+6,gameChar_y-7,4,9);       //feet
    fill(255,255,255);
    ellipse(gameChar_x-18,gameChar_y-18,2,2);     //eye
    line(gameChar_x-20,gameChar_y-14,gameChar_x-17,gameChar_y-15);    //whiskers
    line(gameChar_x-20,gameChar_y-14,gameChar_x-17,gameChar_y-13);    //whiskers
    triangle(gameChar_x-18,gameChar_y-24,gameChar_x-16,gameChar_y-24,gameChar_x-17,gameChar_y-26);   //ears
    triangle(gameChar_x-16,gameChar_y-24,gameChar_x-14,gameChar_y-24,gameChar_x-15,gameChar_y-26);
	}
    
	else if(isRight)     //walking right
	{
    stroke(0);    
    fill(211,211,211);
    ellipse(gameChar_x+15,gameChar_y-17,13,14);      // face
    ellipse(gameChar_x,gameChar_y-17,20,15);        //body
    ellipse(gameChar_x-15,gameChar_y-17,10,5);      //tail
    ellipse(gameChar_x+5,gameChar_y-7,4,9);        //feet
    ellipse(gameChar_x+2,gameChar_y-8,3,7);       //feet
    ellipse(gameChar_x-3,gameChar_y-8,3,7);      //feet
    ellipse(gameChar_x-6,gameChar_y-7,4,9);       //feet
    fill(255,255,255);
    ellipse(gameChar_x+17,gameChar_y-18,2,2);     //eye
    line(gameChar_x+20,gameChar_y-14,gameChar_x+17,gameChar_y-15); //whiskers
    line(gameChar_x+20,gameChar_y-14,gameChar_x+17,gameChar_y-13); //whiskers
    triangle(gameChar_x+15,gameChar_y-24,gameChar_x+16,gameChar_y-26,gameChar_x+17,gameChar_y-24); //ears
    triangle(gameChar_x+12,gameChar_y-24,gameChar_x+13,gameChar_y-26,gameChar_x+14,gameChar_y-24);
	}
    
	else if(isFalling || isPlummeting)    //jumping facing forwards
	{
    stroke(0);    
    fill(211,211,211);
    ellipse(gameChar_x,gameChar_y-27,16,17);        //face
    ellipse (gameChar_x,gameChar_y-12,20,15);      //body
    ellipse(gameChar_x-2,gameChar_y-2,5,7);      //feet
    ellipse(gameChar_x+4,gameChar_y-2,5,7);       //feet
    triangle(gameChar_x-4,gameChar_y-35,gameChar_x-2,gameChar_y-35,gameChar_x-3,gameChar_y-38);    //ear
    triangle(gameChar_x,gameChar_y-35,gameChar_x+2,gameChar_y-35,gameChar_x+1,gameChar_y-38);     //ear
    fill(255,255,255);
    ellipse(gameChar_x-2,gameChar_y-29,2,2);      //eye
    ellipse(gameChar_x+2,gameChar_y-29,2,2);      //eye
    line(gameChar_x,gameChar_y-25,gameChar_x-6,gameChar_y-27);    //whiskers
    line(gameChar_x,gameChar_y-25,gameChar_x-6,gameChar_y-24);
    line(gameChar_x,gameChar_y-25,gameChar_x-6,gameChar_y-21);
    fill(255,0,0);
    ellipse(gameChar_x,gameChar_y-25,2,2);
    line(gameChar_x+2,gameChar_y-25,gameChar_x+6,gameChar_y-28);
    line(gameChar_x+2,gameChar_y-25,gameChar_x+6,gameChar_y-25);
    line(gameChar_x+2,gameChar_y-25,gameChar_x+6,gameChar_y-21);
	}
    
	else   //standing front facing
	{
    stroke(0);    
    fill(211,211,211);
    ellipse(gameChar_x,gameChar_y-27,16,17);       //face
    ellipse (gameChar_x,gameChar_y-12,20,15);      //body
    ellipse(gameChar_x-3,gameChar_y,5,10);        //feet
    ellipse(gameChar_x+3,gameChar_y,5,10);        //feet
    triangle(gameChar_x-4,gameChar_y-35,gameChar_x-2,gameChar_y-35,gameChar_x-3,gameChar_y-38);    //ear
    triangle(gameChar_x,gameChar_y-35,gameChar_x+2,gameChar_y-35,gameChar_x+1,gameChar_y-38); 
    fill (255,255,255);
    ellipse(gameChar_x-2,gameChar_y-29,2,2)        //eye
    ellipse(gameChar_x+2,gameChar_y-29,2,2)       //eye
    line(gameChar_x,gameChar_y-25,gameChar_x-6,gameChar_y-27);    //whiskers
    line(gameChar_x,gameChar_y-25,gameChar_x-6,gameChar_y-24);
    line(gameChar_x,gameChar_y-25,gameChar_x-6,gameChar_y-21);
    fill(255,0,0);
    ellipse(gameChar_x,gameChar_y-25,2,2)
    line(gameChar_x+2,gameChar_y-25,gameChar_x+6,gameChar_y-28);
    line(gameChar_x+2,gameChar_y-25,gameChar_x+6,gameChar_y-25);
    line(gameChar_x+2,gameChar_y-25,gameChar_x+6,gameChar_y-21);
	}
}