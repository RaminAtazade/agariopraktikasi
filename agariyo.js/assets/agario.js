var space = document.querySelector("#spacem");
var player = document.querySelector("#playerm");

let speed = 20;
let isShiftPressing = false;
window.addEventListener("keydown",function(e){
    if(e.keyCode == 39){
        if(player.offsetLeft + speed <= space.offsetWidth){
            player.style.left = player.offsetLeft + speed + "px";
        }
        else{
            player.style.left = -10 + "px";
        }
    }
if(e.keyCode == 37){
    player.style.left = player.offsetLeft - speed +"px";
}
if(e.keyCode == 38){
    player.style.top = player.offsetTop - speed +"px";
}
if(e.keyCode == 40){
    player.style.top = player.offsetTop + speed +"px"
}
})

window.addEventListener("keydown",function(e){
    if(e.keyCode == 16){
        isShiftPressing = true;
        speed = 40;

}
})
window.addEventListener("keyup",function(e){
   if(e.keyCode == 16) 
   isShiftPressing = false;
   speed =20;

})
let io = document.createElement('div')

