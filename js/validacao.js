let count = 1;
document.getElementById("radio1").checked = true;
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");
let radio4 = document.getElementById("radio4");

setInterval(function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }
    if(count<=4 && radio1.checked){

        count=2;
    }
    if(count<=4 && radio2.checked){
        count=3;
    }
    if(count<=4 && radio3.checked){
        count=4;
    }
    if(count<=4 && radio4.checked){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}