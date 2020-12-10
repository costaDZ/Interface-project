

// open and close the [setting bar]
document.querySelector(".setting-icon").addEventListener("click", function () {
    document.querySelector(".setting-box").classList.toggle("open");
    this.classList.toggle("fa-spin");
})

//switch colors
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {

    if (localStorage.getItem(0) === li.dataset.color) {
        li.classList.add("active");
    }
    li.addEventListener("click", function (e) {
        // define the color of the current element
        let color = e.currentTarget.dataset.color;
        // push the color in localStoreg with 0 key
        localStorage.setItem("0", color);
        //add the color to my content
        document.querySelector(".setting-box").style.borderColor = color;
        document.documentElement.style.setProperty("--main-color", color);
        document.querySelector(".setting-icon").style.color = color;

        // change the class active to the target elemnet [ul]
        for (let i = 0; i < colorsLi.length; i++) {
            if (localStorage.getItem(0) !== colorsLi[i].dataset.color) {
                colorsLi[i].removeAttribute("class");
            } else {
                colorsLi[i].classList = "active";
            }
        }
    });
});

// change background IMG
const img = document.querySelectorAll(".img li");
img.forEach(li => {
    if (localStorage.getItem(1) === li.dataset.img) {
        li.setAttribute("class", "active");
    }
    li.addEventListener("click", function (e) {
        //change the background
        document.querySelector(".landing").style.backgroundImage = `url(../images/${e.target.dataset.img})`;
        //add the change to localstorage
        localStorage.setItem("1", e.target.dataset.img);
        // change the class active to the target elemnet [ul]
        for (let i = 0; i < img.length; i++) {
            if (img[i].dataset.img === localStorage.getItem(1)) {
                img[i].classList = "active";
            } else {
                img[i].removeAttribute("class");
            }
        }
    });
});






// make Images as array
const images = ["01.jpeg", "02.jpg", "03.png", "04.webp", "05.jpg"];
//select the landing page
const back = document.querySelector(".landing");
//set the conter to 0
var i = 0;
// change the background function

var logique;

function runBack() {
    i = i + 1;

    console.log(i);
    if (i > images.length - 1) {
        i = 0;
        back.style.backgroundImage = "url(../images/" + images[i] + ")";

    } else {
        back.style.backgroundImage = "url(../images/" + images[i] + ")";
    }
}
// select YES - NO button
var buttons = document.querySelectorAll(".option-box.random button");

// lunch the rundom background from localStorage
if (localStorage.getItem("2") === "true") {
    console.log("yes i do");
    playStop = setInterval(runBack, 2000);


}
// add event to YES - NO button
buttons.forEach(btn => {

    console.log(buttons);

        // set class active fo class button 
        if (localStorage.getItem("2") === "true") {
            buttons[0].setAttribute("class", "active");
        }else {
            buttons[1].setAttribute("class", "active");
        }







    btn.addEventListener("click", (e) => {

        let currentBtn = e.currentTarget.textContent;
        console.log(currentBtn);

        if (currentBtn === "Yes") {
            if (localStorage.getItem(2) === "false"){
                playStop = setInterval(runBack, 1000);
                localStorage.setItem("2", "true")
                e.currentTarget.setAttribute("class", "active");
                console.log(e.currentTarget.nextElementSibling.removeAttribute("class"));
            }else {
                clearInterval(playStop);
                playStop = setInterval(runBack, 1000);
                localStorage.setItem("2", "true")
                e.currentTarget.setAttribute("class", "active");
                console.log(e.currentTarget.nextElementSibling.removeAttribute("class"));

            }
        }
        else {
            clearInterval(playStop);
            localStorage.setItem("2", "false")
            e.currentTarget.setAttribute("class", "active");
            console.log(e.currentTarget.previousElementSibling.removeAttribute("class"));
        }
    });
});


/***********************************************************/
// use local storage
let localMemo = localStorage.getItem(0);
if (localMemo !== null) {
    //save the color
    document.querySelector(".setting-box").style.borderColor = localStorage.getItem(0);
    document.documentElement.style.setProperty("--main-color", localStorage.getItem(0));
    document.querySelector(".setting-icon").style.color = localStorage.getItem(0);
    //save the background
    document.querySelector(".landing").style.backgroundImage = `url(../images/${localStorage.getItem(1)})`;
    logique = localStorage.getItem("2")

};
/***********************************************************/

