import Sprite from "./Sprite.js"
export default class GameObject{
    constructor(config){
        this.x = config.x || 0
        this.y = config.y || 0
        this.sprite = new Sprite({
            x:config.x,
            y:config.y,
            src:config.src
        })
    }
}