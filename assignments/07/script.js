let num = 0;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {
    console.log("yay!")
    //output.innerHTML = this.value;
    const root = document.querySelector(":root");
    root.style.setProperty("--img-spin", this.value + "deg");
}

const changeImage = () => {
    console.log("yay!")
    const img = document.getElementById("img-change");
    if (img.src == "https://place-hold.it/200x200/9d5c63/fff") {
        img.src = "https://place-hold.it/200x200/36c5d9/000";
    }
    else {
        img.src = "https://place-hold.it/200x200/9d5c63/fff"
    }
    
    return false;
};
/*
const addStar = () => {
    console.log("added star");
    const area = document.getElementById("star-adder");
    const star = document.createElement("section");
    star.classList.add("star");
    area.append(star);
};
*/
const addStar = () => {
    console.log("circle")
    const area = document.getElementById("star-adder");
    area.innerHTML += "<section class='star'> </section>";
};


document.getElementById("btn-change-image").onclick = changeImage;
document.getElementById("btn-add-stars").onclick = addStar;

