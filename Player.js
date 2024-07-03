import {GameObject} from "/GameObject.js"
export class Player extends GameObject {
    constructor(config){
        super(config);
        this.state = {
            "moving":false
        }
        this.dir ="DOWN"
        this.currentDest = null
        this.destinationReach =false;
        this.movementProgress = 0;
        this.dirMap = {
            "UP": ["y",-1],
            "DOWN": ["y",1],
            "LEFT": ["x",-1],
            "RIGHT": ["x",1]
        }
    }
    moveTowards(dir){
        if(this.destinationReach){
            this.sprite.setAnimation(dir+"-walk");
            this.currentDest = dir
            this.destinationReach= false
            this.movementProgress = 16;
        }
        this.state.moving = true;
    }
    updateMovement(){
        if(this.movementProgress > 0 && !this.destinationReach){
            const [prop,val] = this.dirMap[this.currentDest];
            this.sprite[prop] +=val;
            this.movementProgress-=1;
        }
        if(this.movementProgress === 0){
            if(!this.state.moving){
                this.sprite.setAnimation("default");
            }
            this.state.moving =false;
            this.destinationReach = true;
        }
    }
    
}