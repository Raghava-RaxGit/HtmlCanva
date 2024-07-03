import { Player } from "./Player.js";
import { Input } from "./Input.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const map = new Image()
map.src = "./res/ground.png";
const hero = new Player({
    x: 0,
    y: 0,
    src:"./res/hero-sheet.png",
    animationMap :{
        "default"     :[[0,0]],
        "UP-walk"     :[[0,64],[32,64],[64,64]],
        "DOWN-walk"   :[[2,1],[2,1]],
        "LEFT-walk"   :[[1,1]],
        "RIGHT-walk"  :[[1,1]]
    },
    currentAnime : "defalut"
})
 const input = new Input();

document.getElementById("pause").addEventListener('click',StopGameLoop)
var id = null

const StartGameLoop = ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(input.direction!== undefined){
        hero.moveTowards(input.direction);
    }
    else{
        
    }
    ctx.drawImage(map,0,0)
    hero.updateMovement();
    
    hero.sprite.isLoaded && hero.sprite.draw(ctx)
    id = requestAnimationFrame(StartGameLoop)
}
StartGameLoop()

function StopGameLoop(){
    input.DisableInput();
    cancelAnimationFrame(id);
}
