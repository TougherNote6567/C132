status ="";
function preload(){
img=loadImage("Elephant.jpg");
}

function  setup(){
canvas=createCanvas(400,230);
canvas.center();
objectdetector=ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("Status").innerHTML="Status: Detecting objects";
}

function draw(){
image(img,0,0,400,230);

fill("red");
text("Elephante", 220, 140);
noFill();
stroke("red");
rect(200, 120, 110, 90);
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;

}