canvas = new fabric.Canvas("MyCanvas");
player_x = 10;
player_y = 10;
part_image_width = 30;
part_image_height = 30;

var player_object = "";
var part_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
       canvas.add(player_object); 
    });
}

function new_img(get_Image){
fabric.Image.fromURL(get_Image, function(Img){
    part_image_object = Img;
    part_image_object.scaleToWidth(part_image_width);
   part_image_object.scaleToHeight(part_image_height);
    part_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(part_image_object);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80'){
    console.log("P and shift are pressed together.");
    part_image_width = part_image_width + 10;
    part_image_height = part_image_height + 10;
    document.getElementById("current_width").innerHTML = part_image_width;
    document.getElementById("current_height").innerHTML = part_image_height;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        console.log("M and shift are pressed together.");
        part_image_width = part_image_width - 10;
       part_image_height = part_image_height - 10;
        document.getElementById("current_width").innerHTML = part_image_width;
        document.getElementById("current_height").innerHTML = part_image_height;
    }

    if(keyPressed == '37'){
        console.log("left");
        left();
    }

    if(keyPressed == '38'){
        console.log("up");
        up();
    }

    if(keyPressed == '39'){
        console.log("right");
        right();
    }

    if(keyPressed == '40'){
        console.log("down");
        down();
    }


    if(keyPressed == '65'){
        console.log("a");
        new_img("hulk_face.png");
    }

    if(keyPressed == '66'){
        console.log("b");
        new_img("hulk_left_hand.png");
    }

    if(keyPressed == '67'){
        console.log("c");
        new_img("hulkd_body.png");
    }

    if(keyPressed == '68'){
        console.log("d");
        new_img("hulk_right_hand.png");
    }

    if(keyPressed == '69'){
        console.log("e");
        new_img("hulk_legs.png");
    }

    if(keyPressed == '70'){
        console.log("f");
        new_img("thor_face.png");
    }

    if(keyPressed == '71'){
        console.log("g");
        new_img("thor_left_hand.png");
    }

    if(keyPressed == '72'){
        console.log("h");
        new_img("thor_right_hand.png");
    }

    if(keyPressed == '73'){
        console.log("i");
        new_img("spiderman_body.png");
    }

    if(keyPressed == '74'){
        console.log("j");
        new_img("spiderman_face.png");
    }

    if(keyPressed == '75'){
        console.log("k");
        new_img("spiderman_left_hand.png");
    }

    if(keyPressed == '76'){
        console.log("l");
        new_img("spiderman_legs.png");
    }

    if(keyPressed == '84'){
        console.log("t");
        new_img("spiderman_right_hand.png");
    }

    if(keyPressed == '78'){
        console.log("n");
        new_img("ironman_body.png");
    }

    if(keyPressed == '79'){
        console.log("o");
        new_img("ironman_face.png");
    }

    if(keyPressed == '83'){
        console.log("s");
        new_img("ironman_left_hand.png");
    }

    if(keyPressed == '81'){
        console.log("q");
        new_img("ironman_legs.png");
    }

    if(keyPressed == '82'){
        console.log("r");
        new_img("ironman_right_hand.png");
    }
}

function up(){
    if( player_y > 0){
        player_y = player_y - part_image_height;
        console.log("Part_Image_Height = " + part_image_height);
        console.log("When up is pressed X = " + player_x + " Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <= 500){
        player_y = player_y + part_image_height;
        console.log("Part_Image_Height = " + part_image_height);
        console.log("When down is pressed X = " + player_x + " Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 850){
  player_x = player_x + part_image_width;
  console.log("Part_Image_Width = " + part_image_width);
        console.log("When right is pressed X = " + player_x + " Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x > 0){
        player_x = player_x - part_image_width;
        console.log("Part_Image_Width = " + part_image_width);
        console.log("When left is pressed X = " + player_x + " Y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}