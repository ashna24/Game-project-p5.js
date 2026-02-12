function Enemy(x , y , range)
{
    this.x = x;
    this.y = y;
    this.range = range;
    this.currentx = x;
    this.increment = 1;
    this.update = function()
    {
        this.currentx += this.increment;
        if(this.currentx >= this.x + this.range)
        {
        this.increment = -1;
        }
        else if(this.currentx < this.x){
        this.increment = 1;
        }
    }
    
    this.draw = function()   //drawing the enemy (ROBOT)
    { 
        this.update();
        fill(255,255,0);
        ellipse(this.currentx+15, this.y-30,25,20); //head
        fill(0,0,0);
        ellipse(this.currentx+10 ,this.y-30,5,5); 
        ellipse(this.currentx+20 ,this.y-30,5,5);//eyes
        fill(255,255,0);
        rect(this.currentx, this.y-20 , 30, 30); //body
        fill(255);
        rect(this.currentx - 15,this.y - 15,14,5);
        rect(this.currentx+30,this.y - 15,14,5);        
    }
    
    this.checkcontact = function(gc_x , gc_y)
    {
        var d= dist(gc_x , gc_y , this.currentx, this.y); //checking contact with the enemy
        if (d < 25)
            {
                return true;
            }
        return false; 
    }
}