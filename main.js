//no preload function required in this
function setup(){
    canvas= createCanvas(500,350)
    canvas.position(450, 270)
    video= createCapture(VIDEO)
    video.hide()
    tint_color=""
}
function draw(){
    push();
  translate(width,0);
  scale(-1, 1);
    image(video, 0, 0, 500, 350)
    pop()
tint(tint_color)
}
function sp(){
    save("My_Filtered_Picture!.png")
}
function af(){
    tint_color= document.getElementById("Icolor").value
}