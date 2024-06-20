import GameObject from "./Gameobject.js"
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const hero = new GameObject({
    x: 0,
    y: 0,
    src:"./res/hero-sheet.png"
})

setInterval(()=>{
    hero.sprite.isLoaded && hero.sprite.draw(ctx)
    console.log("Draw");
},2000)