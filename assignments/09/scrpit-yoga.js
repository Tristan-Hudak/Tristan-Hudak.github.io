


const showHideNav = () => {
    console.log("in show hide");
    document.getElementById("nav-items").classList.toggle("hide-small");
    document.getElementById("pointer").classList.toggle("down")
};

const showPose = (e) => {
    //console.log(e.target.getAttribute("rel"));

    if ( e.target.getAttribute("rel") == "Low Ground Stretch") {
        document.getElementById("yoga1").innerText = e.target.getAttribute("rel");
    }
    else if ( e.target.getAttribute("rel") == "Downward Dog") {
        document.getElementById("yoga2").innerText = e.target.getAttribute("rel");
    }
    else if ( e.target.getAttribute("rel") == "High-Y Pose") {
        document.getElementById("yoga3").innerText = e.target.getAttribute("rel");
    }
    else if ( e.target.getAttribute("rel") == "Sitting Stetch") {
        document.getElementById("yoga4").innerText = e.target.getAttribute("rel");
    }
    else if ( e.target.getAttribute("rel") == "Cha-Cha Real Smooth") {
        document.getElementById("yoga5").innerText = e.target.getAttribute("rel");
    }
    else if ( e.target.getAttribute("rel")  == "Break Dance Start") {
        document.getElementById("yoga6").innerText = e.target.getAttribute("rel");
    }
    else if ( e.target.getAttribute("rel") == "Touch Toes") {
        document.getElementById("yoga7").innerText = e.target.getAttribute("rel");
    }
    else if ( e.target.getAttribute("rel") == "Pushing Pose") {
        document.getElementById("yoga8").innerText = e.target.getAttribute("rel");
    }

};



document.getElementById("pointer").onclick = showHideNav;
// In my reasearch the for each function bellow is technically a for loop that loops through the amount that is within the section so in this case the yoga images.
document.querySelectorAll("#yoga-pos li").forEach((li)=>{
    li.onclick = showPose;
});

