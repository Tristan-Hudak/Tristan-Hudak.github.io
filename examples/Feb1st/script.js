/*console.log("hello")*/

let pos = 0;

const colorSquare = () => {
    console.log("yay!")
    document.getElementById("square").classList.add("rainbow");
};

const moveDown = () => {
    console.log("down");
    pos += 10;
    const root = document.querySelector(":root");
    root.style.setProperty("--square-top", pos + "px");
};

const addCircle = () => {
    console.log("circle")
    const area = document.getElementById("circle-maker");

    const color = document.getElementById("txt-color").value;
    //const root = document.querySelector(":root");
    //root.style.setProperty("--ball-color", color);
    /*area.innerHTML += "test";*/
    /*area.innerHTML += "<section class='circle-maker'></section>";*/
    const ball = document.createElement("section");
    ball.classList.add("circle");
    area.append(ball);
    ball.style.background = color;
};

document.getElementById("btn-color").onclick = colorSquare;
document.getElementById("btn-move-down").onclick = moveDown;
document.getElementById("btn-make-circle").onclick = addCircle;