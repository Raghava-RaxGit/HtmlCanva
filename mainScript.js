import GameObject from "./Gameobject.js"
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const hero = new GameObject({
    x: 0,
    y: 0,
    src:"./res/hero-sheet.png"
})
document.getElementById("pause").addEventListener('click',StopGameLoop)
var id = null


const StartGameLoop = ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    hero.sprite.isLoaded && hero.sprite.draw(ctx)
    console.log("Draw");
    id = requestAnimationFrame(StartGameLoop)
}

function StopGameLoop(){
    console.log("cancled");
    cancelAnimationFrame(id)
}

StartGameLoop()