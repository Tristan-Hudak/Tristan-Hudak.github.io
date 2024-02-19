const numLoop = () => {
    console.log("looping")
    const numList = document.getElementById("num-list");
    numList.innerHTML = "";
    const errorP = document.getElementById("error-nums");

    


    let startNum = document.getElementById("txt-start-num").value;
    let endNum = document.getElementById("txt-end-num").value;

    console.log(`looping from ${startNum} to ${endNum}`);

    if (isNaN(startNum) || isNaN(endNum) || startNum.trim() == "" || endNum.trim() == ""  ) {
        errorP.innerHTML = "You must enter number(s).";
        return;
    }


    startNum = parseInt(startNum);
    endNum = parseInt(endNum);


    if (startNum >= endNum) {
        errorP.innerHTML = "endding num must be larger.";
        return;
    }


    for (let i= startNum; i < endNum; i++) {
        console.log(i);
        const li = document.createElement("li");
        li.innerHTML= i; //evaluates what the expression does
        numList.append(li);
    }
}



let updateCount;
let counter = 0;

const startStopCount = (e) => {
    console.log("counting");
    console.log (e.target);
    if (e.target.innerHTML.toLowerCase() == "start") {
        e.target.innerHTML = "Stop";

        updateCount = setInterval(()=>{
            counter++;
            countP.innerHTML = counter;
        }, 1000);


    }
    else {
        e.target.innerHTML = "Start";
        clearInterval(updateCount);
    }

    const countP = document.getElementById("count-p")

    

}

const showDetails = (e) => {
    console.log(e.target.getAttribute("rel"));
}





document.getElementById("btn-loop-nums").onclick = numLoop;
document.getElementById("btn-count").onclick = startStopCount;
document.querySelectorAll("#toys li").forEach((li)=>{
    li.onclick = showDetails;
});