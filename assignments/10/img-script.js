let imageBoxs = []
imageBoxs["Garden"] ="garden.jpg";
imageBoxs["Golden"] = "golden.jpg";
imageBoxs["Mountain-Lake"] = "mountain-lake.jpg";
imageBoxs["Samll-House"] = "small-house.jpg";
imageBoxs["Snow"] = "snow.jpg";

let texts = []
texts["Garden"] = "https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4";
texts["Golden"] ="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4";
texts["Mountain-Lake"] = "https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7";
texts["Samll-House"] = "https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4";
texts["Snow"] = "https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4";


const makeDispaly = ()=> {

    const resultDiv = document.getElementById("result");
    //resultDiv.append("hi")

    for (let img in imageBoxs) {
        const putImg = document.createElement("img");
        const p = document.createElement("p");
        const a = document.createElement("a")
        

        //console.log(`images/${imageBoxs[img]}`);
        putImg.src = `images/${imageBoxs[img]}`;

        //console.log(texts[img]);

        const link = document.createTextNode("Image by vecstock");
        a.append(link);
        a.title = "Image by vecstock";
        a.href = texts[img];
        console.log(a)

        p.append(a);
        p.append(" on Freepik");

        
        resultDiv.append(putImg);
        resultDiv.append(p);

    }

}

makeDispaly();