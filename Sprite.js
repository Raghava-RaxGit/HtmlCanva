export default class Sprite{
    constructor(config){
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.image = new Image();
        this.image.src = config.src;
        this.isLoaded = false;
        this.image.onload = ()=>{
            this.isLoaded = true;
        };
    }

    draw(ctx){
        ctx.drawImage(this.image,this.x,this.y);
    }
}