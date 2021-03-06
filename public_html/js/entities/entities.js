game.PlayerEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        settings.image = "player1-spritesheet";
        settings.spritewidth = "72";
        settings.spriteheight = "97";
        settings.width = 72;
        settings.height = 97;
        this.parent(x, y, settings);
        
        this.collidable = true;
        
        this.renderable.addAnimation("idle", [3]);
        this.renderable.setCurrentAnimation("idle");
        
        this.setVelocity(20, 40);
        
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    },
    
    update: function(deltaTime) {
        if(me.input.isKeyPressed("right")) {
            this.vel.x += this.accel.x * me.timer.tick;
        }
        else if(me.input.isKeyPressed("left")) {
            this.vel.x -= this.accel.x * me.timer.tick;
        }
        else {
            this.vel.x = 0;
        }
        
        if(me.input.isKeyPressed("up")) {
            this.vel.y -= this.accel.x * me.timer.tick;
        }
        else if(me.input.isKeyPressed("space")) {
            this.vel.y -= this.accel.x * me.timer.tick;
        }
        else{
            this.vel.y = 10;
        }
        
        var collision = me.game.world.collide(this);
        this.updateMovement();
        //this.parent(deltaTime);
        return true;
        

    }
});

game.LevelTrigger = me.ObjectEntity.extend ({
    init: function(x, y, settings) {
        this.parent(x, y, settings);
        this.collidable = true;
        this.level = settings.level;
    },
            
    onCollision: function() {
        this.collidable = false;
        me.levelDirector.loadLevel(this.level);
        me.state.current().resetPlayer();
    }
});

game.EnemyEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        settings.image = "slime-spritesheet";
        settings.spritewidth = "60";
        settings.spriteheight = "28";
        settings.width = 60;
        settings.height = 28;
        this.parent(x, y, settings);
        
        this.renderable.addAnimation("idle", [2]);
        this.renderable.setCurrentAnimation("idle");
    },
    
    update: function(deltaTime) {

    }
});