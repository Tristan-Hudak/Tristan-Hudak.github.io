
const getItems = async() => {
    const url = "JSON/item-shop.json";

    try {
        const response = await fetch(url);
        return await response.json();

    }
    catch(error) {
        console.log(error)

    }
};

const showItems = async() => {
    console.log("is work");

    let Items = await getItems();

    console.log(Item);
    


}







//nav stuff


const showHideNavWepon = () => {
    console.log("in show hide");
    document.getElementById("nav-items-w").classList.toggle("hide-small");
    document.getElementById("pointer1").classList.toggle("down")
};
const showHideNavSpell = () => {
    console.log("in show hide");
    document.getElementById("nav-items-s").classList.toggle("hide-small");
    document.getElementById("pointer2").classList.toggle("down")
};
const showHideNavWItems = () => {
    console.log("in show hide");
    document.getElementById("nav-items-m").classList.toggle("hide-small");
    document.getElementById("pointer3").classList.toggle("down")
};
const showHideNavEquipment = () => {
    console.log("in show hide");
    document.getElementById("nav-items-e").classList.toggle("hide-small");
    document.getElementById("pointer4").classList.toggle("down")
};


//nav stuff
document.getElementById("up-left-box").onclick = showHideNavWepon;
document.getElementById("bot-left-box").onclick = showHideNavSpell;
document.getElementById("up-right-box").onclick = showHideNavWItems;
document.getElementById("bot-right-box").onclick = showHideNavEquipment;

//JSON stuff
window.onload = () => showItems();