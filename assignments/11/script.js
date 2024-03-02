let holder = "";

class MC_Trees {
    constructor(title, biome, size, plank_color, rating, img, img_size, img_alt, section_id) {
        this.title = title;
        this.biome = biome;
        this.size = size;
        this.plank_color = plank_color;
        this.rating = rating;
        this.img = img;
        this.img_size = img_size;
        this.img_alt = img_alt
        this.section_id = section_id;
    };

    get item() {
        const treeSection = document.createElement("section");
        const treeTitle = document.createElement("h3");

        treeSection.classList.add("styling");
        //treeSection.classList.add("coll1of8");

        treeTitle.innerHTML = this.title;
        treeSection.id = this.section_id;

        treeSection.append(treeTitle);
        treeSection.appendChild(this.imgCheck(this.img, this.img_size, this.img_alt));
        treeSection.appendChild(this.createModal(this.title, this.biome, this.size, this.plank_color, this.rating, this.img, this.img_alt, this.section_id))
        //treeSection.append(modalDiv);

        return treeSection;
    };

    imgCheck(pic, size, alt) {

        const treeImg = document.createElement("img");
        treeImg.src = "images/" + this.img;
        treeImg.alt = alt;

        if (size == 1) {
            treeImg.classList.add("same-size");
        }
        else if (size == 2) {
            treeImg.classList.add("same-size-large");
        }
        else if (size == 3) {
            treeImg.classList.add("same-size-larger");
        }
        else {
            treeImg.classList.add("same-size");
        }

        return treeImg;
    };

    createModal(title, biome, size, plank, rating, img, alt, id) {

        /*

            < div id="modalDiv" class="hidden w3-modal"> 

                < div id="modalContent" class="w3-modal-content"> 

                    <header id="modalhead" class="w3-modal-container">
                        <span class="w3-button w3-display-topright">
                            &times;
                        </span>
                        <h2> {title} <h2>

                    </header>

                    <div id="modalContainer" class="w3-modal-container">

                        <div id="flexing" class="flex-box">

                            <section class="coll2of3">

                                <p>
                                    {biome}
                                </p>

                                <p>
                                    {size}
                                </p>
                                    
                                <p>
                                    {plank}
                                </p>

                                <p>
                                    {rating}
                                </p>

                            </section>

                            <section class="coll1of3">

                                <img src="{img}" alt="{alt}">

                            </section>

                        </div>

                    </div>

                </div>

            </div>
        */

        


        //structure and containers
        const modalDiv = document.createElement("div");

        modalDiv.id = "md_" + id;
        modalDiv.classList.add("w3-modal");
        //modalDiv.classList.add("hidden");

        const modalContent = document.createElement("div");
        const modalHead = document.createElement("header");
        const modalContainer = document.createElement("div");

        //header
        const exitBtn = document.createElement("span");
        const heading = document.createElement("h2");


        // main content
        const flexing = document.createElement("div");
        const textBox = document.createElement("section");
        const imgBox = document.createElement("section");
        const Img = document.createElement("img");


        //Class lists
        //----------------------

        //classes for the containers and content
        modalContent.classList.add("w3-modal-content");
        modalHead.classList.add("w3-modal-container");
        modalContainer.classList.add("w3-modal-container");

        //header item classes
        exitBtn.classList.add("w3-button");
        exitBtn.classList.add("w3-display-topright");

        //the main area with info

        flexing.classList.add("flex-box");

        textBox.classList.add("coll2of3");
        imgBox.classList.add("coll1of3");

        //Appending
        //----------------------------------------------------

        // section 1 : text box 

        textBox.append(this.addInnerText(`Biomes : ${biome}`));
        textBox.append(this.addInnerText(`Size of the Tree : ${size}`));
        textBox.append(this.addInnerText(`What color the Planks look : ${plank}`));
        textBox.append(this.addInnerText(`Rating : ${rating}`));

        //section 2 : img box

        imgBox.appendChild(this.imgCheck(img, size, alt));



        //header html stuff

        exitBtn.innerHTML = "&times;";
        exitBtn.id = "exit";
        //console.log(this);
        exitBtn.onclick = () => {
            console.log("hi")
            console.log(this, "md_"+this.section_id);

            const theID = document.getElementById("md_"+this.section_id);

            theID.style.display = "none";
            holder = "none";

            console.log(this, theID.style.display);
            return;
        };
        //console.log(modalDiv.id)
        heading.innerHTML = title;

        //header done nut not appened

        modalHead.append(exitBtn);
        modalHead.append(heading);


        // main done but not append

        flexing.append(textBox);
        flexing.append(imgBox);

        modalContainer.append(flexing);


        // append to modal content

        modalContent.append(modalHead);
        modalContent.append(modalContainer);


        // appended to final div

        modalDiv.append(modalContent)
        
        return modalDiv;
    }


    addInnerText (info) {
        const something = document.createElement("p");
        something.innerHTML = info;
        return something;

    }

}

/*const hideModal = (modal) => {
    console.log("hi")
    console.log(modal)
    console.log(modal.section_id)

    //const modalID = modal.id;
}*/







//let holderID = "";


const displayAcacia = () => {
    //console.log("fuck yea Acacia");
    const id = document.getElementById('md_acacia');
    if(holder == "none") {
        //console.log(id.style.display);
        id.style.display = holder;
        holder = ""
        return;
    }
    else if (holder == "") {
        //console.log(id.style.display);
        id.style.display = "block";
    }
    console.log(id.style.display);


    /*
    console.log(holder);
    const id = document.getElementById('md_acacia');
    console.log(id.style.display);
    id.style.display = "block";
    console.log(id.style.display);
    //holderID = "md_acacia"
    //console.log(holderID)*/

    
    
    /*const md = document.getElementById("md_aca"cia);
    console.log("hit", md.className)
    md.classList.remove("hidden");
    console.log(md.id, md.className)*/

};
const displayAzalea = () => {
    const id = document.getElementById('md_azalea');
    if(holder == "none") {
        //console.log(id.style.display);
        id.style.display = holder;
        holder = ""
        return;
    }
    else if (holder == "") {
        //console.log(id.style.display);
        id.style.display = "block";
    }
    console.log(id.style.display);
};

const displayBirch = () => {
    const id = document.getElementById('md_birch');
    if(holder == "none") {
        //console.log(id.style.display);
        id.style.display = holder;
        holder = ""
        return;
    }
    else if (holder == "") {
        //console.log(id.style.display);
        id.style.display = "block";
    }
    console.log(id.style.display);
};

const displayCherry = () => {
    const id = document.getElementById('md_cherry');
    if(holder == "none") {
        //console.log(id.style.display);
        id.style.display = holder;
        holder = ""
        return;
    }
    else if (holder == "") {
        //console.log(id.style.display);
        id.style.display = "block";
    }
    console.log(id.style.display);
};

const displayDarkOak = () => {
    const id = document.getElementById('md_dark-oak');
    if(holder == "none") {
        //console.log(id.style.display);
        id.style.display = holder;
        holder = ""
        return;
    }
    else if (holder == "") {
        //console.log(id.style.display);
        id.style.display = "block";
    }
    console.log(id.style.display);
};

const displayJungle = () => {
    const id = document.getElementById('md_jungle');
    if(holder == "none") {
        //console.log(id.style.display);
        id.style.display = holder;
        holder = ""
        return;
    }
    else if (holder == "") {
        //console.log(id.style.display);
        id.style.display = "block";
    }
    console.log(id.style.display);
};

const displayMangrove = () => {
    const id = document.getElementById('md_mangrove');
    if(holder == "none") {
        //console.log(id.style.display);
        id.style.display = holder;
        holder = ""
        return;
    }
    else if (holder == "") {
        //console.log(id.style.display);
        id.style.display = "block";
    }
    console.log(id.style.display);
};

const displayOak = () => {
    const id = document.getElementById('md_oak');
    if(holder == "none") {
        //console.log(id.style.display);
        id.style.display = holder;
        holder = ""
        return;
    }
    else if (holder == "") {
        //console.log(id.style.display);
        id.style.display = "block";
    }
    console.log(id.style.display);
};

const displaySpruce = () => {
    const id = document.getElementById('md_spruce');
    if(holder == "none") {
        //console.log(id.style.display);
        id.style.display = holder;
        holder = ""
        return;
    }
    else if (holder == "") {
        //console.log(id.style.display);
        id.style.display = "block";
    }
    console.log(id.style.display);
};

/*const hideModal = () => {

    console.log(holderID);
    //console.log(element.display);
    document.getElementById(holderID).style.display;
    holderID = "";

    

}*/



window.onload = () => {

    let trees = [];
    let treeList = document.getElementById("tree-list");

    //title, biome, size, plank_color, rating, img, img_size, img_alt, section_id

    trees.push(new MC_Trees("Acacia Tree", "Savanna Biomes", 8, "Deep Orange", "5th", "Acacia_Tree.webp", 1, "Acacia Tree Image", "acacia"));
    
    trees.push(new MC_Trees("Azalea Tree", "Overworld but above a lush caves biome", 5, "light brown", "2nd", "Azalea_Tree.webp", 1, "Azalea Tree Image", "azalea"));
    
    trees.push(new MC_Trees("Birch Tree", "Birch forests, Dark forests, Oak forests, Old Growth Birch forests, Meadows", 6, "Pale yellow", "4th", "Birch.webp", 1, "Birch Tree Image", "birch"));
    
    trees.push(new MC_Trees("Cherry Tree", "Cherry Grove", 6, "pink", "7th", "Cherry_Tree.webp", 1, "Cherry Tree Image", "cherry"));
    
    trees.push(new MC_Trees("Dark Oak Tree", "Dark forests", 10, "Dark Brown", "3rd", "Dark_Oak.webp", 1, "Dark Oak Tree Image", "dark-oak"));
    
    trees.push(new MC_Trees("Jungle Tree", "Bamboo Jungle, Jungle, Sparse Jungle", 20, "Peach", "8th", "Jungle_Tree.webp", 3, "Jungle Tree Image", "jungle"));
    
    trees.push(new MC_Trees("Mangrove Tree", "Mangrove swamps", 8, "Deep red", "6th", "Mangrove_Tree.webp", 2, "Mangrove Tree Image", "mangrove"));
    
    trees.push(new MC_Trees("Oak Tree", "Bamboo Jungle, Dark forests, Oak forests, Jungles, Meadows, Sparse Jungles, Plains, Rivers, Savannas, Swamps, Wooded Badlands, Windswept forests", 6, "Pale yellow", "2nd", "Oak.webp", 1, "Oak Tree Image", "oak"));
    
    trees.push(new MC_Trees("Spruce Tree", "Old Growth Spruce Taiga, Old Growth Pine Taiga, Snowy Taiga, Snowy Plains, Taiga, Windswept forests, Grove", 8, "Pale yellow", "1st", "Spruce.webp", 1, "Spruce Tree Image", "spruce"));


    for (let i in trees) {
        //console.log(`Tree: ${trees[i].title} | Biome: ${trees[i].biome}`);
        treeList.append(trees[i].item);
    };

    document.getElementById("acacia").onclick = displayAcacia;
    document.getElementById("azalea").onclick = displayAzalea;
    document.getElementById("birch").onclick = displayBirch;
    document.getElementById("cherry").onclick = displayCherry;
    document.getElementById("dark-oak").onclick = displayDarkOak;
    document.getElementById("jungle").onclick = displayJungle;
    document.getElementById("mangrove").onclick = displayMangrove;
    document.getElementById("oak").onclick = displayOak;
    document.getElementById("spruce").onclick = displaySpruce;
    //document.getElementById("exit").onclick = hideModal;
};


