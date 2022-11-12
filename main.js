music = "";
flag = "set";

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    if(flag == "set"){
        document.getElementById("button").innerhtml = '<button onclick="play();" class="btn btn-success play_button">Play</button>';
    }
    else{
        document.getElementById("button").innerhtml = '<button onclick="stop();" class="btn btn-danger stop_button">stop</button>';
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    music.play();
    flag = "";
}

function stop(){
    music.stop();
    flag = "set";
}


