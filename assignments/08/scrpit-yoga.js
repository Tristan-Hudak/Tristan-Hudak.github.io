


const showHideNav = () => {
    console.log("in show hide");
    document.getElementById("nav-items").classList.toggle("hide-small");
    document.getElementById("pointer").classList.toggle("down")
};
/*
let slider = document.getElementById("my-range");
let output = document.getElementById("values");
*/
const yogaPosition = (e) => {
    console.log("working")
    let slider = document.getElementById("my-range");
    console.log(slider)
    const img = document.getElementById("main-img")

    if(slider.value == 1){
        img.src = "images/yoga1.jpg";
    }
    else if(slider.value == 2){
        img.src = "images/yoga2.jpg";
    }
    else if(slider.value == 3){
        img.src = "images/yoga3.jpg";
    }
    else if(slider.value == 4){
        img.src = "images/yoga4.jpg";
    }
    else if(slider.value == 5){
        img.src = "images/yoga5.jpg";
    }
    else if(slider.value == 6){
        img.src = "images/yoga6.jpg";
    }
    else if(slider.value == 7){
        img.src = "images/yoga7.jpg";
    }
    else if(slider.value == 8){
        img.src = "images/yoga8.jpg";
    }
    
};


document.getElementById("pointer").onclick = showHideNav;
document.getElementById("my-range").oninput = yogaPosition;


