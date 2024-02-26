const txtSlide = () => {
    //console.log("text slide")
    const displayText = document.getElementById("ad-txt")
    //console.log(displayText.innerText)

    if (displayText.innerText == "This is an advertisement for the images") {
        displayText.innerText = "These images are so good you should take one";
        return;
    }
    else if (displayText.innerText == "These images are so good you should take one") {
        displayText.innerText = "Man aren't these images so very nice";
        return;
    }
    else if (displayText.innerText == "Man aren't these images so very nice") {
        displayText.innerText = "Take an image";
        return;
    }
    else if (displayText.innerText == "Take an image") {
        displayText.innerText = "Dont forget to take an image before you leave";
        return;
    }
    else if (displayText.innerText == "Dont forget to take an image before you leave") {
        displayText.innerText = "This is an advertisement for the images";
        return;
    }
    else {
        displayText.innerText = "This is an advertisement for the images";
        return;
    }


}
setInterval(txtSlide, 2000);











