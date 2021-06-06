let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
const { load } = require("cheerio");
let data = [];
let loadedhtml;
request("https://www.dineout.co.in/delhi-restaurants/west-delhi/dwarka", function (err, res, body) {

    if (!err) {
        loadedhtml = cheerio.load(body);
        let RN = loadedhtml(".restnt-name.ellipsis");
        let Detail = loadedhtml(".double-line-ellipsis");
        let Loc=loadedhtml(".restnt-loc.ellipsis");
        for (let i = 1; i < RN.length; i++) {
            let obj = {
                "Restaurant Name": loadedhtml(RN[i]).text().trim(),
                "Details": loadedhtml(Detail[i]).text().trim(),
                "Location" : loadedhtml(Loc[i]).text().trim().trim(),
                "Image" : "/img/res.png"
            }
            data.push(obj);
        }
        fs.writeFileSync("data.js", JSON.stringify(data));
    }
});

