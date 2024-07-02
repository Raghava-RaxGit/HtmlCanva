import GameObject from "./Gameobject";
import { DOWN, LEFT, RIGHT, UP } from "./Input";

export class Player extends GameObject{
    constructor(config){
        super(config);
        this.state = {
            "moving":false
        }
        this.movementProgress = 0;
        this.dirMap = {
            UP:["y",-1],
            DOWN:["y",1],
            LEFT:["x",-1],
            RIGHT:["x",1]
        }
    }
    updateMovement(){
        if(this.movementProgress > 0){
            const [prop,val] = this.dirMap[this.direction];
            this[prop] +=val;
            this.movementProgress-=1;
        }
        checkState()
    }
    checkState(){
        if(this.movementProgress === 0 && this.state.moving){
            this.movementProgress =16;
        }
    }
}