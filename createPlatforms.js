function createPlatforms(x, y, length)
{
    var p = {
        x: x,
        y:y,
        length:length,
        draw:function(){
            fill(255,255,0);
            rect(this.x, this.y, this.length, 20);
    },
        checkcontact: function(gc_x, gc_y)
    {
        if(gc_x > this.x && gc_x < this.x + this.length)
        {
            var d = this.y - gc_y;
            if(d >= 0 && d < 5)
                {
                  return true;  
                }
        }
        return false;
    }
    }
    return p;
}
