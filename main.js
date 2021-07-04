video = "";
status = "";
objects = [];
function preload(){
    video = createVideo("video.mp4");
}
function setup(){
    canvas = createCanvas(500,300);
    canvas.position(400,230);
    video.hide();
}
function draw(){
    image(video,0,0,500,300);
    if(status != ""){
        objectDetector.detect(video,got_results);
        for(i = 0; i < objects.length; i++){
            document.getElementById("detection").innerHTML = " Objects Detected";
            document.getElementById("number").innerHTML = objects.length;
            fill(5, 88, 196);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x ,objects[i].y + 10 );
            noFill();
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',model_loaded);
    document.getElementById("detection").innerHTML = " Detecting Object";
}
function model_loaded(){
    console.log("Model Loded!");
    status = true;
    video.loop();
    video.volume(0);
    video.speed(1);
}
function got_results(error,results){
    if(error){
        console.error("error");
    }
    else{
        console.log(results);
        objects = results;
    }
}