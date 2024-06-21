import GameObject from "./Gameobject.js"
import { DOWN, LEFT, RIGHT, UP,Input } from "./Input.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const map = new Image()
map.src = "./res/ground.png";
const hero = new GameObject({
    x: 0,
    y: 0,
    src:"./res/hero-sheet.png"
})
document.getElementById("pause").addEventListener('click',StopGameLoop)
var id = null

const input =  new Input()

const StartGameLoop = ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(input.direction === UP){
    hero.sprite.y += -16;    
    }
    if(input.direction === DOWN){
        hero.sprite.y += 16;
    }
    if(input.direction === LEFT){
        hero.sprite.x += -16;
    }
    if(input.direction === RIGHT){
        hero.sprite.x += 16;
    }
    //map.sprite.isLoaded
    ctx.drawImage(map,0,0)

    hero.sprite.isLoaded && hero.sprite.draw(ctx)
    console.log("Draw");
    id = requestAnimationFrame(StartGameLoop)
}

function StopGameLoop(){
    console.log("cancled");
    cancelAnimationFrame(id)
}

StartGameLoop()