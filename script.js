// ==========
let itemcards = document.querySelector(".item-cards");
let input = document.querySelector("input");
let searchoutput = document.querySelector(".search-output");
input.addEventListener("keyup", (e) => {
    if (e.key != "Enter") {
        itemcards.innerHTML = "";
        let value = input.value;
        if (value == "") {
            init();
            return;
        }
        let emptyarr = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i]["Restaurant Name"].startsWith(value)) {
                emptyarr.push(data[i].id);
            }
        }
        init(emptyarr);
    }
})


let favour = document.querySelector(".favorites");
let onfav = false;

favour.addEventListener("click", function (e) {
    if (onfav) {
        itemcards.innerHTML = "";
        init();
        onfav = false;
        return;
    }
    onfav = true;
    itemcards.innerHTML = "";
    init(Allfav);

})

let allfilters = document.querySelectorAll(".f");

// let curfilter=-1;

for (let i = 0; i < allfilters.length; i++) {
    allfilters[i].addEventListener("click", function (e) {
        if (e.target.classList.contains("opacity")) {
            //already active
            e.target.classList.remove("opacity");
            itemcards.innerHTML = "";
            init();
        } else {
            if(document.querySelector(".opacity")){
                console.log("a")
                document.querySelector(".opacity").classList.remove("opacity");
            }
            let activefilters = [];
            e.target.classList.add("opacity");
            for (let i = 0; i < data.length; i++) {
                console.log(e.target.textContent);
                if (data[i].Details.includes(e.target.textContent)) {
                    activefilters.push(data[i].id);
                }
            }
            itemcards.innerHTML = "";
            init(activefilters);
        }

    })
}
