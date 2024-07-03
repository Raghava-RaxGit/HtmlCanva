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
        this.currentAnime =  "default"
        this.animationMap = config.animationMap || {
            "default"     :[[0,0]],
            "UP-walk"     :[[0,64],[32,64],[64,64]],
            "DOWN-walk"   :[[2,1],[2,1]],
            "LEFT-walk"   :[[1,1]],
            "RIGHT-walk"  :[[1,1]]
        };
        this.currentAnimationFrame = 0;
        this.animationFrameLimit = config.animationFrameLimit || 8;
        this.animationFrameProgress = this.animationFrameLimit;
    }
    get frame(){
        return this.animationMap[this.currentAnime][this.currentAnimationFrame];
    }

    setAnimation(key) {
        if (this.currentAnime !== key) {
          this.currentAnime= key;
          this.currentAnimationFrame = 0;
          this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        //Downtick frame progress
        if (this.animationFrameProgress > 0) {
          this.animationFrameProgress -= 1;
          return;
        }
    
        //Reset the counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;
    
        if (this.frame === undefined) {
          this.currentAnimationFrame = 0
        }
    
    
      }

    draw(ctx){
        const [frameX,frameY] = this.frame;
        ctx.drawImage(this.image,
            frameX,frameY,   //image crop start and end
            this.frameW,this.frameH, //image crop width and height
            this.x-8,this.y,   //location on canvas
            this.frameW,this.frameH) //size to draw on canvas
            this.updateAnimationProgress()
    }
}