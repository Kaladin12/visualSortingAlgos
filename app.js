var c = document.getElementById("myCanvas");
var context = c.getContext("2d");



context.beginPath();
context.lineWidth = "2";
context.strokeStyle = "black";
let list = [];
for (let i = 0; i < 20; i++) {
    let a =  Math.floor(Math.random() * 100);  
    list.push(context.rect(5+20*i, 10, 20, a));
    context.stroke();
}

swap();

function swap(){
    let i = Math.floor(Math.random() * 20);
    context.strokeStyle('red');
    list[i] = list[i];
    context.stroke();
    //context.strokeStyle = "black";
}