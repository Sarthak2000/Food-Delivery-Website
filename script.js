// ==========

let input = document.querySelector("input");
let searchoutput = document.querySelector(".search-output");
input.addEventListener("keyup", (e) => {
    if (e.key != "Enter") {
        searchoutput.innerHTML = "";

        let value = input.value;
        let emptyarr = [];

        emptyarr = data.filter((obj) => {
            return obj["Restaurant Name"].startsWith(value);
        });
        for (let i = 0; i < emptyarr.length; i++) {
            let div = document.createElement("div");
            div.classList.add("item");
            div.textContent = emptyarr[i]["Restaurant Name"];
            searchoutput.append(div);
        }
    }
})
input.addEventListener("blur", (e) => {
    searchoutput.innerHTML = "";
})

let favour = document.querySelector(".favorites");
let onfav = false;
let itemcards = document.querySelector(".item-cards");
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