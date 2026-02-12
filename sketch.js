/*
Game Project 7
                         HOW TO PLAY THE GAME?

-The cat has to collect all the ice creams to pass the level.
-You will lose a life if you fall in the canyon or collide with your enemy (The Robot).
-You have 3 lives before you lose the game.
-Find the flag pole after collecting all the ice creams!

GO CAT!

PRESS THE SPACE BAR TO BEGIN!
*/

var jumpSound;
var sound2;
var eandc;
var gameChar_x;
var gameChar_y;
var floorPos_y;
var isPlummeting;
var isLeft;
var isRight;
var isFalling;
var trees_x;
var treePos_y;
var cameraPosX;
var gameScore;
var lives;
var platforms;
var enemies;
var instruct;

function preload()
{
    soundFormats('mp3','wav');  //All Sounds
    jumpSound = loadSound('assets/jump.wav');
    jumpSound.setVolume(0.1);
    sound2 = loadSound('assets/sound2.wav');
    sound2.setVolume(0.1);
    eandc = loadSound('assets/eandc.mp3');
    eandc.setVolume(0.1);
}

function setup()
{
	createCanvas(1024, 576);
    floorPos_y = height * 3/4;
    lives = 3;
	startGame();
    instruct = true;
}

function draw()
{
    background(100,155,255);        //fill the sky blue
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y);        //green ground
    
    cameraPosX = gameChar_x - width/2;          //moving the camera
    checkPlayerDie();
    if(flagpole.isReached == true)         //turning the sky blue once flagpole is reached
    {
        background(25, 25, 112);
        noStroke();
        fill(0,155,0);
        rect(0, floorPos_y, width, height - floorPos_y);
        textSize(30);
        text('Level complete. Press space to continue.',cameraPosX, height/2);
    }
    
    if(gameChar_x <-100 && gameChar_x >-800)       //to display a message if the character is in this range
    {
        fill(0);
        textSize(20);
        text('PLEASE MOVE TO THE RIGHT OTHERWISE THE GAME WILL RESTART',width/2,height/2); 
    }
    
   if(gameChar_x < -1000)          //restricting the character from going to the left side
    {
      startGame();
    }
    
    push();
    translate(-cameraPosX, 0);    //moving the camera
    
    if (instruct==true){          // shows instructions before the game starts
        noStroke();
        fill(0);
        rect(100,100,width-200,height-200);
        fill(255,255,0);
        noStroke(255,255,0);
        textAlign(CENTER);
        textSize(30);
        text("HOW TO PLAY" , width/2 , 150);
        textSize(22);
        text("The cat has to collect all the ice creams to pass the level.\n You will lose a life if you fall in the canyon or collide with your enemy (The Robot).\n You have 3 lives before you lose the game.\n Find the flag pole after collecting all the ice creams!\n Hint: if you struggle to collect the ice cream \ntry jumping and use the right and left arrow keys!\nGO CAT!",width/2,200);  
        textSize(30);
        text("PRESS THE SPACE BAR TO BEGIN!", width/2,400);
    }
    
    if(instruct == false)     //game starts
    {
        
    for( i = 0 ; i < 5; i++)          //drawing mountains
    {
    drawMountains(mountains);
    }
        
    for( i = 0 ; i < 6 ; i ++)   //  drawing trees
    {
    drawTrees(trees);
    }
        
    for(i = 0 ; i <10 ; i++)   //drawing clouds
    {
    drawClouds(clouds);
    }
    
    for(var i = 0 ; i < platforms.length ; i++)  //drawing platforms
    {
    platforms[i].draw();
    }
        
    for(i=0; i < 5; i++)   //drawing and checking canyons
    {
    drawCanyons(canyons[i]);
    checkCanyons(canyons[i]);
    }
        
    for(i= 0; i < 13 ; i++)  //drawing and checking collectables
    {
    if(!collectables[i].isFound)
    {
    drawCollectable(collectables[i]);
    checkCollectable(collectables[i]);
    }
    }
    
	//the game character
    gameCharacter();
        
    fill(139,0,0);             //draw score counter
    textSize(20);
    text("YOUR SCORE: " + gameScore,cameraPosX+15,20);
        
    if(flagpole.isReached == true)  //display text when flag is raised
    {
    rect(0, floorPos_y, width, height - floorPos_y);
    fill(255);
    stroke(0);
    textSize(30);
    text('Level complete. Press space to continue.',gameChar_x, height/2);
    }
        
    for(i = 0 ; i < lives ; i++)   //draw lives
    {
    fill(255,255,0);
    textSize(20)
    text('REMAINING LIVES: '+ lives,cameraPosX+98,45);
    ellipse(cameraPosX+25+(25*i),70,20,20); 
    }
        
    if(lives == 0)   //show text when lives = 0 and play a sound
    {
    fill(120,200,250);
    stroke(200,200,200);
    textSize(30);
    textAlign("center");
    text('Game over. Press space to continue.',width/2,height/2);
    isPlummeting = true;
    eandc.stop();
    }
        
    renderFlagpole();
   
    for( var i = 0 ; i < enemies.length ; i++)   //drawing and checking enemies 
    {
    enemies[i].draw();
    var isContact = enemies[i].checkcontact(gameChar_x , gameChar_y);
    if(isContact)
    {
    eandc.play();      //adding sounds that will play once cat is in contact with the enemy
    if(lives > 0 )
    {
        startGame();    //decrementing lives and starting the game again upon getting in contact
        lives-=1;
        break;
    }
    }
    }
    pop();
    
  //INTERACTION CODE//
    
    if(isLeft == true)   //defining what these variables do
        {
            gameChar_x -= 5;
        }
    if(isRight == true)
        {
            gameChar_x +=5;
        }
    if(gameChar_y < floorPos_y)  //conditions for platforms is contact. 
        {
            var isContact = false;
            for(var i = 0; i<platforms.length ; i++)
                {
                    if(platforms[i].checkcontact(gameChar_x , gameChar_y) == true)
                    {
                    isContact = true;
                    break;
                    }
                }
    if(isContact == false)  //when platforms is contact is false.
    {
    isFalling = true;
    gameChar_y+=5;
    }
    }
    else
    {
    isFalling  = false;
    }
    
    if(flagpole.isReached == false)
    {
    checkFlagpole();
    }
}
}

function keyPressed()
{
    if(keyCode == 32 && instruct == true)  //when space bar is pressed start the game
        {instruct =false;}
    
    if(isPlummeting == false)            //freezing controls when the cat falls down the canyon
    {
    if (keyCode == 65 && flagpole.isReached == false)  //normal game controls
        isLeft = true;
    }
    if (keyCode == 68 && flagpole.isReached == false)
    {
        isRight= true;
    }
    if((keyCode == 87)&&(gameChar_y == floorPos_y) && flagpole.isReached == false)  //jumping and playing jump sound
    {
        gameChar_y-=130;
        jumpSound.play();
    }
    }

function keyReleased()
{
    if (keyCode == 65){     //interaction when the key is released.
        isLeft= false;
    }
    if( lives <= 0 && keyCode == 32){
        setup();
    }
    else if (keyCode== 68){
        isRight= false;
    }
}

function drawTrees(trees)
{
    for (var i = 0; i < trees.length; i++) {
        fill(50, 90, 100); 
        triangle(trees[i].trees_x, trees[i].treepos_y, trees[i].trees_x - 50, trees[i].treepos_y + 60, trees[i].trees_x + 50, trees[i].treepos_y + 60); 
        triangle(trees[i].trees_x, trees[i].treepos_y - 30, trees[i].trees_x - 50, trees[i].treepos_y + 20, trees[i].trees_x + 60, trees[i].treepos_y + 20);
        fill(200, 50, 0);
        rect(trees[i].trees_x - 20, trees[i].treepos_y + 60, 35, 70);
    }
}

function drawMountains(mountains) 
{
    for (var i = 0; i < mountains.length; i++) {
        fill(150, 0, 0);
        triangle(mountains[i].mountain_x + 120, mountains[i].mountain_y - 45, mountains[i].mountain_x, mountains[i].mountain_y + 182, mountains[i].mountain_x + 230, mountains[i].mountain_y + 182);
        triangle(mountains[i].mountain_x + 190, mountains[i].mountain_y - 45, mountains[i].mountain_x + 50, mountains[i].mountain_y + 182, mountains[i].mountain_x + 315, mountains[i].mountain_y + 182);
    }
}


function drawClouds(clouds) {
    for (var i = 0; i < clouds.length; i++) 
    {
        stroke(255);
        fill(255);
        clouds[i].cloudsx_pos += 0.2; // adding movements to the clouds
        if (clouds[i].cloudsx_pos > cameraPosX + width) 
        {
            clouds[i].cloudsx_pos = -40;
        }  // drawing the shape of clouds
        ellipse(clouds[i].cloudsx_pos, clouds[i].cloudsy_pos, clouds[i].cloud_size, clouds[i].cloud_h); 
        ellipse(clouds[i].cloudsx_pos + 40, clouds[i].cloudsy_pos, clouds[i].cloud_size + 25, clouds[i].cloud_h + 20);
        ellipse(clouds[i].cloudsx_pos + 80, clouds[i].cloudsy_pos, clouds[i].cloud_size, clouds[i].cloud_h);
    }
}

function drawCollectable(t_collectable)
{
    if(t_collectable.isFound==false)         //drawing the shape of the collectable
    {    
    fill(248,200,220);
    noStroke();
	ellipse(t_collectable.x_pos,t_collectable.y_pos,t_collectable.size,15);
    fill(196,164,132);
    triangle(t_collectable.x_pos,t_collectable.y_pos+15,t_collectable.x_pos-10,t_collectable.y_pos+5,t_collectable.x_pos+10,t_collectable.y_pos+5);
    }
}

function drawCanyons(t_canyons)                      //drawing the shape of the canyons
{
     if(isPlummeting == true)
    {
        gameChar_y+=10;
        eandc.play();                                //falling down sound
    }
    fill (173,216,230);
	noStroke();
    rect(t_canyons.x_pos,t_canyons.y_pos,t_canyons.width,146,5);
}

function checkCollectable(t_collectable)               //when character is in the range of 40px collectable is collected
{
    if(dist(gameChar_x,gameChar_y,t_collectable.x_pos,t_collectable.y_pos)< 40)
    { 
        t_collectable.isFound = true;
        gameScore+=1;
        sound2.play();
    }
}

function checkCanyons(t_canyons) //when distance between the character and the canyon is less than equal to 14, it falls
{        
     if(dist(gameChar_x,gameChar_y,t_canyons.x_pos+30,t_canyons.y_pos)<=14)
        {
            isPlummeting = true;
        }
}

function renderFlagpole()     //drawing the flag according to the condition
{
    push();
    strokeWeight(5);
    line(flagpole.x_pos,floorPos_y,flagpole.x_pos,floorPos_y-200);
     
    if(flagpole.isReached)
    {
        noStroke();
        fill(230,250,100);
        rect(flagpole.x_pos,floorPos_y-200,50,40,5);
    }
    else
    { 
        noStroke();
        fill(230,250,100);
        rect(flagpole.x_pos,floorPos_y-40,50,40,5);
    }
    pop();
}

function checkFlagpole()
{
    var d = abs(gameChar_x - flagpole.x_pos);
    if (d<10)
    {
        if(gameScore == 13)       //condition so flagpole will only be raised if all the collectables are collected
        {
            flagpole.isReached = true;
        }
        else
        {    
            fill(255,255,0);
            text('COLLECT ALL THE ICECREAMS TO LEVEL UP', width/2 , height/2);  // otherwise this text will be displayed
        }   
    }
}

function checkPlayerDie()
{
   if(gameChar_y > height && lives  >= 1) // to start the game again when the player dies
       {
           lives-=1; 
           startGame(); 
       }       
}