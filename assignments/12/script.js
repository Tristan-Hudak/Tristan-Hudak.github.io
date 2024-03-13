const getHouses = async() => {
    const url = "https://portiaportia.github.io/json/house-plans.json";

    try {
        const response = await fetch(url);
        return await response.json();

    }
    catch(error) {
        console.log(error)

    }
};

const showHouses = async() => {

    let houses = await getHouses();
    let houseSection = document.getElementById("house-section");

    houses.forEach((house) => {
        console.log(house);
        houseSection.append(getHouseItem(house));
    });
};

const getHouseItem = (house) => {

    let section =  document.createElement("section");

    section.setAttribute("class","sep-them")

    //title
    let title = document.createElement("h3");

    title.setAttribute("id","pad")
    title.innerText = house.name;
    section.append(title);

    //info section
    let infoDiv = document.createElement("div");

    infoDiv.setAttribute("id","info-box");
    infoDiv.setAttribute("class","flex-box");

    let imgSec = document.createElement("section");

    imgSec.setAttribute("class","collnone");

    let img = document.createElement("img");

    img.setAttribute("id","main-img");
    img.src = "images/"+house.main_image;

    imgSec.append(img);
    infoDiv.append(imgSec);

    let txtSec = document.createElement("section");
    txtSec.append(infoGen("Size",house.size))
    txtSec.append(infoGen("Bedrooms",house.bedrooms))
    txtSec.append(infoGen("Bathrooms",house.bathrooms))
    txtSec.append(featGen(house.features))

    txtSec.setAttribute("class","collnone");
    txtSec.setAttribute("id","text");

    infoDiv.append(txtSec);
    
    
    section.append(infoDiv);

    //floor box
    let floorDiv = document.createElement("div");

    floorDiv.setAttribute("class","flex-box")

    let qaundSecs = house.floor_plans; 

    qaundSecs.forEach((qaundSec) => {
        console.log(qaundSec);
        floorDiv.append(floorPlanGen(qaundSec))
        
    });


    section.append(floorDiv);

    return section;

};

const infoGen = (title, info) => {
    let p =  document.createElement("p");

    p.innerText = title + ": " + info;

    return p;
};

const featGen = (feats) => {
    let p =  document.createElement("p");

    feats.forEach((feat) => {
        p.append("* "+feat+" ");
    });

    return p;
};

const floorPlanGen = (qs) => {
    let section =  document.createElement("section");
    section.setAttribute("class", "coll1of2");
    section.setAttribute("class", "box-style");

    let name = document.createElement("h4");

    name.innerText = qs.name;

    let img = document.createElement("img");

    img.setAttribute("class", "img-size");
    img.src = "images/"+qs.image;

    section.append(name);
    section.append(img);



    return section;
};


window.onload = () => showHouses();