


const showHideNav = () => {
    console.log("in show hide");
    document.getElementById("nav-items").classList.toggle("hide-small");
    document.getElementById("pointer").classList.toggle("down")
};

const changeImage = () => {
    const letter = document.getElementById("txt-box").value.toLowerCase().trim();

    if(letter == "b") {
        document.getElementById("main-img").src = "images/read.jpg";
    }
    else if(letter == "c") {
        document.getElementById("main-img").src = "images/clown.jpg";
    }
    else if(letter == "p") {
        document.getElementById("main-img").src = "images/birthday.jpg";
    }
    else if(letter == "r") {
        document.getElementById("main-img").src = "images/rain.jpg";
    }
    else if(letter == "s") {
        document.getElementById("main-img").src = "images/shovel.jpg";
    }
    else if(letter == "w") {
        document.getElementById("main-img").src = "images/work.jpg";
    }
    else {
        document.getElementById("main-img").src = "images/original.jpg";
    }


};


document.getElementById("pointer").onclick = showHideNav;
document.getElementById("txt-box").onkeyup = changeImage;







