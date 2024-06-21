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
        this.frameW = config.frameW || 32
        this.frameH = config.frameH || 32
    }

    draw(ctx){
        ctx.drawImage(this.image,
            0,0,   //image crop start and end
            this.frameW,this.frameH, //image crop width and height
            this.x,this.y,   //location on canvas
            this.frameW,this.frameH) //size to draw on canvas
    }
}