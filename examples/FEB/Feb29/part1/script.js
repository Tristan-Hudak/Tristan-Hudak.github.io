//"https://portiaportia.github.io/json/shoes.json"

const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    } 
    catch (error) {
        console.log(error)
    }
}


const showShoes = async() => {
    const shoes = await getShoes();

    shoes.forEach((shoe) => {
        console.log(shoe.name)
        document.getElementById("shoes-section").append(getShoeSection(shoe))
    });
}

const getShoeSection = (shoe) => {
    const section = document.createElement("section");
    //section.innerHTML = shoe.name;

    const h3 = document.createElement("h3");
    h3.innerHTML = shoe.name;
    section.append(h3);

    const brandP = document.createElement("p");
    brandP.innerHTML = shoe.brand;
    section.append(brandP);

    const ul = document.createElement("ul");
    section.append(ul);

    shoe.reviews.forEach((review) => {
        const li = document.createElement("li")
        li.innerHTML = reviews;
        ul.append(li)
    })





    return section;
}


showShoes();

// JSON
// Java Script Object Notation


// AJAX
// asymchronus Javascript and XML