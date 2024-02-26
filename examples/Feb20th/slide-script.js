const slide = () => {
    //console.log("Sliding")
    //find the not hiden within the show
    const currentImage = document.querySelector("#slideshow :not(.hidden)")
    let nextImage = currentImage.nextElementSibling;

    if (nextImage == null) {
        nextImage = document.querySelector("#slideshow :first-child")
    }

    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");
}

setInterval(slide, 1000)