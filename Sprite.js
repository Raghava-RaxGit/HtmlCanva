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
        ctx.drawImage(this.image,
            0,0,   //image crop start and end
            32,32, //image crop width and height
            0,0,   //location on canvas
            32,32) //size to draw on canvas
    }
}