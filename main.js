
status = "";
object = [];


function preload(){


}

function setup(){

canvas = createCanvas(380,380);
canvas.center();
video= createCapture(VIDEO)
video.size(380,380);
video.hide();
objectdetector = ml5.objectDetector('cocossd',modelloaded);

document.getElementById("status").innerHTML = "STATUS : OBJECT DETECTING";

}

function draw(){

image(video,0,0,380,380);


if(status != ""){
    r= random(255);
    g= random(255);
    b= random(255);
    objectdetector.detect(video,gotresult);
for(i=0;i<object.length;i++){

document.getElementById("status").innerHTML = " STATUS : OBJECT DETECTED";
document.getElementById("numberofobj").innerHTML = "Number of objects detected = " + object.length;
fill(r,g,b);
percent = floor(object[i].confidence*100);
text(object[i].label + "" + percent + "%",object[i].x,object[i].y);
noFill();
stroke("#ff0000");
rect(object[i].x,object[i].y,object[i].width,object[i].height);


}

}
}




function modelloaded(){

console.log("model is loaded");
status = true;

}

function gotresult(error,results){

if(error){

console.error(error);

}

else{

console.log(results);
object = results

}

}