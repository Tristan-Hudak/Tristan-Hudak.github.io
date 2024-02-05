const doStuff = () =>{
    const msgP = document.getElementById("message");
    msgP.innerHTML = "Hello Hudak";
    msgP.classList.toggle("special");
};

const hideHolder = () => {
    document.getElementById("holder").classList.add("hidden");
};

document.getElementById("button-test").onclick = doStuff;

document.getElementById("holder").onclick = hideHolder;


/* dont put parenthases like this .onclick = doStuff();*/


/*
let - variable that can change
const - is a constant that never changes. Used most of the time.
*/


/* function doStuff(){
    alert("doing stuff");
}*/


/*const clickButton = document.getElementById("button-test");
clickButton.onclick = doStuff; /* dont put parenthases like this clickButton.onclick = doStuff();
*/

/* 
document.getElementById("button-test").onclick = () =>{
    alert("doing stuff")
};
*/





/*clickButton.innerHTML = "Dont Click!";*/

