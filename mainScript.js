import { Player } from "./Player.js";
import { Input } from "./Input.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const map = new Image()
map.src = "./res/ground.png";
const hero = new Player({
    x: 0,
    y: 0,
    src:"./res/hero-sheet.png"
})
 const input = new Input();

document.getElementById("pause").addEventListener('click',StopGameLoop)
var id = null

const StartGameLoop = ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(input.direction!== undefined){
        hero.dir = input.direction;
        hero.state.moving = true;
        //console.log(input.direction);
    }
    else{
        hero.state.moving = false;
    }
    ctx.drawImage(map,0,0)
    hero.updateMovement();
    hero.sprite.isLoaded && hero.sprite.draw(ctx)
    console.log("Draw");
    id = requestAnimationFrame(StartGameLoop)
}
StartGameLoop()

function StopGameLoop(){
    input.DisableInput();
    cancelAnimationFrame(id);
}
