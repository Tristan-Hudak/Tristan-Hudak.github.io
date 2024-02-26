
let toys = ["drum", "ball", "rope", "balloon", "tire"]
let toyPrices = []
toyPrices["barbie"] = 7.54;
toyPrices["doll house"] = 86.23;
toyPrices["slide"] = 34.23;
toyPrices["ken"] = 7.53;
toyPrices["bike"] = 35.82;

const showToys = () => {
    //console.log("showing")
    const resultDiv = document.getElementById("result")
    resultDiv.innerHTML = "";

    /*for (let i in toys) {
        console.log(toys[i]);
    }*/


    toys.forEach((toy)=>{
        //console.log(toy);
        const p = document.createElement("p");
        p.innerHTML = toy;
        resultDiv.append(p);
    });
}


const addToy = () => {
   // console.log("add a toy");
   const toy = document.getElementById("txt-toy").value;
   toys.push(toy);
   showToys();
}

const showToysTable = () => {
    console.log("Showing Table");
    const toyTable = document.getElementById("toy-table");

    for (let toy in toyPrices) {
        const tr = document.createElement("tr")
        const td = document.createElement("td")
        td.innerHTML = toy;
        tr.append(td);
        toyTable.append(tr);
        
        tr.onclick = () => {
            //console.log(`"im clicked" ${toy}`)
            const descP = document.getElementById("toy-description");
            descP.innerHTML = `${toy} costs $${toyPrices[toy]}`

        }
    }
}


showToys();
document.getElementById("button-add-toy").onclick = addToy;
showToysTable();
