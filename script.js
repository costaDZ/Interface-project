var images = ["01.jpeg", "02.jpg", "03.png", "04.webp"];
var back = document.querySelector(".landing");
var i = 0;

function changeBack() {
    i++;
    console.log(i);


    if (i > images.length-1) {
        i = 0;
        back.style.backgroundImage = "url(../images/" + images[i] + ")";

    }else {
        back.style.backgroundImage = "url(../images/" + images[i] + ")";
    }



}
setInterval(changeBack, 10000);