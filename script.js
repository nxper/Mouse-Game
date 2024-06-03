const startButton = document.getElementById("startButton")
const circulo = document.getElementById("circulo")
var dragValue;

function startButtFn () {
    circulo.classList.add("visible")
    startButton.classList.add("invisible")
} 
console.log(startButton)
startButton.addEventListener("click",startButtFn)


function movement(id){
var circle = document.getElementById('contCirc');

circle.style.position = "absolute"
circle.onmousedown = function(){
    dragValue = circle
    }
    
}
document.onmouseup = function(e){
    dragValue = null
}

document.onmousemove = function(e){
    if (dragValue!= null){
    var x = e.pageX
    var y = e.pageY

    dragValue.style.left = x + "px"
    dragValue.style.top = y + "px"
}
}












var kok = function(num){
    var even = true;
    if(num % 1 != 0){

    }
    for(let i = 1;i < num;i++){
        even != even
    }
    return even
}
console.log(kok(2051))
