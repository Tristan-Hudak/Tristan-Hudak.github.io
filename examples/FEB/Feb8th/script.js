const updateThermometer = () => {
    console.log("updating");
    const goal = 10000;
    const funds = document.getElementById("text-funds").value;
    console.log("funds")
    const errorSpan = document.getElementById("funds-error");
    errorSpan.innerHTML = "";
    const therm = document.getElementById("thermometer");
    document.querySelector(":root").style.setProperty('--funds', "0%");


    if(isNaN(funds)) {
        errorSpan.innerHTML = "* Not a valid Number";
        return;
    }

    else if (funds < 0) {
        errorSpan.innerHTML = "* Not a valid Number";
        return;
    }


    const percent = (funds / goal) * 100;
    document.querySelector(":root").style.setProperty('--funds', percent + "%");


}

const evalForm = (e) => {

    e.preventDefault();

    console.log("here");

}



document.getElementById("btn-cont").onclick = updateThermometer;
document.getElementById("my-form").onsubmit = evalForm;