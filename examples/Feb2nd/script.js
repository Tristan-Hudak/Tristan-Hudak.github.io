const showHideNav = () => {
    console.log("in show hide");
    document.getElementById("nav-items").classList.toggle("hide-small");
};

const changeP = (e) => {
    console.log("in show hide");
    e.preventDefault; //dont go to another page
    document.getElementById("display").textContent = "Hello Tristan";
};

const showModd = () => {
    //console.log("show mood");
    const color = document.getElementById("txt-mood").value.toLowerCase().trim();
    const moodP = document.getElementById("mood")
    let mood = "underterminable";

    if(color == "red") {
        mood = "angry";
    }
    else if (color == "blue") {
        mood = "sad";
    }
    else if (color == "green") {
        mood = "happy";
    }


    moodP.innerHTML = `You are a ${mood}`;
};

const evalForm = (e) => {
    e.preventDefault();
    console.log("we did it")
}

document.getElementById("hamburger").onclick = showHideNav;
document.getElementById("link-click").onclick = changeP;
document.getElementById("txt-mood").onkeyup = showModd;
document.getElementById("form").onsubmit = evalForm;

