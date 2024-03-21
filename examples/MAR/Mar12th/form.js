const submitRacconForm = (e) => {
    e.preventDefault(); //dont refresh page
    console.log("hi")

    const form = e.target;
    const raccoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termsChecked = form.elements["terms"].value;
    const size = getRadioValue("size")

    console.log(raccoonName + " is " + demeanor + " terms checked " + termsChecked + " Size: " + size)


}

const getRadioValue = (radioName) => {
    const radios = document.getElementsByName(radioName);


    for(let i in radios) {
        if(radios[i].checked){
            return radios[i].value;
        }
    }


}

document.getElementById("form-raccoon").onsubmit = submitRacconForm;