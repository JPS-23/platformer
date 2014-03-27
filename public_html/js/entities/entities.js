game.PlayerEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        setttings.image = "player1-spritesheet";
        settings.spritewidth = "72";
        settings.spriteheight = "97";
        this.parent(x, y, settings);
        
        this.setVelocity(5, 0);
    },
    
    update: function() {
        if(me.input.isKeyPressed("right")) {
            this.vel.x += this.accel.x * me.tick;
        }
        else {
            this.vel.x = 0;
        }
        
        this.updateMovement();
        return true;
        

    }
});