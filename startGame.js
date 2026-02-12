function startGame()
{
    gameChar_x = width/2;
	gameChar_y = floorPos_y;
    isPlummeting = false;
    isFalling = false;
    isLeft = false;
    isRight= false;

    cameraPosX = 0;
    gameScore = 0;
    
    clouds = [                                                          //creating multiple collectables
        {cloudsx_pos:20 , cloudsy_pos: 80 , cloud_size:55 , cloud_h:50},
        {cloudsx_pos:200 , cloudsy_pos: 90 , cloud_size:60 , cloud_h:60},
        {cloudsx_pos:350 , cloudsy_pos: 70 , cloud_size:55 , cloud_h:50},
        {cloudsx_pos:500 , cloudsy_pos: 100 , cloud_size:60 , cloud_h:60},
        {cloudsx_pos:650 , cloudsy_pos: 95 , cloud_size:60 , cloud_h:50},
        {cloudsx_pos:800 , cloudsy_pos: 85 , cloud_size:55, cloud_h:50},
        {cloudsx_pos:950 , cloudsy_pos: 75 , cloud_size:55 , cloud_h:50},
        {cloudsx_pos:1100 , cloudsy_pos: 55 , cloud_size:55 , cloud_h:50},
        {cloudsx_pos:1250 , cloudsy_pos: 150 , cloud_size:55 , cloud_h:60},
        {cloudsx_pos:1400 , cloudsy_pos: 80 , cloud_size:60 , cloud_h:60}
        
    ]
    mountains = [                           //creating multiple mountains
        {mountain_x:100 , mountain_y:250},
        {mountain_x:700 , mountain_y:250},
        {mountain_x:850 , mountain_y:250},
        {mountain_x:1500 , mountain_y:250},
        {mountain_x:2000 , mountain_y:250},
    ]
    
    trees = [                               //creating multiple trees
        {trees_x: -100, treepos_y: 302},
        {trees_x:300, treepos_y:302},
        {trees_x:650, treepos_y:302},
        {trees_x:900, treepos_y:302},
        {trees_x:1300, treepos_y:302},
        {trees_x:2000, treepos_y:302},
    ]
    
    collectables = [                                                      //creating multiple collectables
        {x_pos: random(100,200), y_pos:random(290,315), size: 18,isFound: false},
        {x_pos: 230, y_pos: 415, size: 18,isFound: false},
        {x_pos: 400, y_pos: random(415,300), size: 18,isFound: false},
        {x_pos: 700, y_pos: random(415,300), size: 18,isFound: false},
        {x_pos: 810, y_pos: random(415,300), size: 18,isFound: false},
        {x_pos: 1000, y_pos: random(415,350), size: 18,isFound: false},
        {x_pos: 1320, y_pos: random(415,350), size: 18,isFound: false},
        {x_pos: 1450, y_pos: random(350,300), size: 18,isFound: false},
        {x_pos: 1600, y_pos: random(350,300), size: 18,isFound: false},
        {x_pos: 1800, y_pos: random(415,350), size: 18,isFound: false},
        {x_pos: 1900, y_pos: random(350,300), size: 18,isFound: false},
        {x_pos: 2200, y_pos: random(350,300), size: 18,isFound: false},
        {x_pos: 2350, y_pos: random(350,300), size: 18,isFound: false},     
    ]
    
    canyons = [
        {x_pos:230, y_pos: floorPos_y,width:40},
        {x_pos:650, y_pos: floorPos_y,width:60},
        {x_pos:1000, y_pos: floorPos_y,width:50},
        {x_pos:1500, y_pos: floorPos_y,width:80},
        {x_pos:2000, y_pos: floorPos_y,width:50}
    ]
    
    enemies = [];
    enemies.push(new Enemy(100, floorPos_y-10,100)); //creating multiple enemies
    enemies.push(new Enemy(700, floorPos_y-110,100));
    enemies.push(new Enemy(1200, floorPos_y-10,100));
    enemies.push(new Enemy(1600, floorPos_y-10,100));
    enemies.push(new Enemy(1700, floorPos_y-110,100));
    enemies.push(new Enemy(2300, floorPos_y-10,100));
    
    platforms = [];
    platforms.push(createPlatforms(90,floorPos_y-100,100));  //  creating multiple platforms
    platforms.push(createPlatforms(700,floorPos_y-100,150));
    platforms.push(createPlatforms(950,floorPos_y-50,100));
    platforms.push(createPlatforms(1300,floorPos_y-100,50));
    platforms.push(createPlatforms(1700,floorPos_y-100,150));
    platforms.push(createPlatforms(1800,floorPos_y-100,50));
    
    flagpole= {x_pos: 2500,isReached: false};
}