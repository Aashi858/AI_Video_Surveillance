video = "";
status = "";
function preload(){
    video = createCapture("video.mp4");
}
function setup(){
    video.hide();
    canvas = createCanvas(500,00);
    canvas.position(500,230)
}
function draw(){
    image(video,0,0,300,500);
}
function start(){
    objectDetector = ml5.objectDetector("cocossd",model_loaded);
    document.getElementById("detection").innerHTML = "Detecting Object";
}
function model_loaded(){
    console.log("Model Loded!");
    status = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}