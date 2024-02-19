


const showHideNav = () => {
    console.log("in show hide");
    document.getElementById("nav-items").classList.toggle("hide-small");
    document.getElementById("pointer").classList.toggle("down")
};


let value = 0;
var stay = 0;
let switcher = false;

const playBall = () => {
    const tog = document.getElementById("start-stop").innerText;
    
    console.log(stay);
    console.log(value);

    if (tog == "Start") {
        document.getElementById("start-stop").innerText = "Stop";
        console.log(tog);

        theMachine = setInterval(() =>{
            console.log(value);
            
            if (value < 277 && value >= 0 && switcher == false) {
                value += 1;
            }
            else if (value <= 277 && value > 0 && switcher == true) {
                value -= 1;
            }
            else if (value == 277 && switcher == false ) {
                value -= 1;
                switcher = true;
            }
            else if (value == 0 && switcher == true) {
                value += 1;
                switcher = false;
            }
    
            const root = document.querySelector(":root");
            root.style.setProperty("--displacement", value + "px");
            stay = value;
            
        }, 1);
    }

    if (tog == "Stop") {
        console.log(tog);
        document.getElementById("start-stop").innerText = "Start";
        clearInterval(theMachine);
    }

}



/*

const playBall = () => {
    
    const tog = document.getElementById("start-stop").innerText;

    let theMachine = setInterval(1000);
    let value = 0;
    let switcher = false;


    if (tog == "Start") {
        clearInterval();
        console.log("Bounce");
        console.log(tog);
        
        document.getElementById("start-stop").innerText = "Stop";


        const moving = () => {
    
            console.log(value);
    
            if (value < 277 && value >= 0 && switcher == false) {
                value += 1;
            }
            else if (value <= 277 && value > 0 && switcher == true) {
                value -= 1;
            }
            else if (value == 277 && switcher == false ) {
                value -= 1;
                switcher = true;
            }
            else if (value == 0 && switcher == true) {
                value += 1;
                switcher = false;
            }
    
            const root = document.querySelector(":root");
            root.style.setProperty("--displacement", value + "px");
        };

        theMachine = setInterval(moving, 1000);

        

    }

    if (tog == "Stop") {
        console.log(tog);
        clearInterval(theMachine);
        value == 0;
        document.getElementById("start-stop").innerText = "Start";
    }
    
    
};

*/



document.getElementById("pointer").onclick = showHideNav;
document.getElementById("start-stop").onclick = playBall;







