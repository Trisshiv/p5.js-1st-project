function preload() {
    img = loadImage('https://i.ibb.co/0BSQrCy/white-hat-jr-image-7-01.jpg');
}

function setup() {
    canvas = createCanvas(900, 600);//w, h
    canvas.position(400, 100);//x, y
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    fill(50, 75, 255);
    stroke(255, 125, 0)
    rect(50, 30, 800, 40);//up
    rect(30,50, 40, 500);//left
    rect(830, 50, 40, 500);//right
    rect(50, 530, 800, 40);//down

    fill(255, 125, 0);
    stroke(50, 75, 255)
    circle(850, 550, 80);//bottom right
    circle(850, 50, 80);//top right
    circle(50, 550, 80);//bottom left

    image(img, 20, 20 ,90 ,100);

    image(video, 200, 110, 500, 380);
    tint(tint_color);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}