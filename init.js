let myid = 0;
let Allfav = [];
function init(fav) {
    // set up local db
    if (localStorage.getItem("Myfavs") != null) {
    } else {
        localStorage.setItem("Myfavs", JSON.stringify(Allfav));
    }
    //
    if (fav) {
        fav = fav.sort();
        let j = 0;
        for (let i = 0; i < data.length; i++) {
            if (fav[j] == i) {
                let div = createTemplate(i);
                div.querySelector(".imgic").src = data[i].Image;
                div.querySelector(".name").textContent = data[i]['Restaurant Name'];
                div.querySelector(".detail").textContent = data[i].Details;
                div.querySelector(".location").textContent = data[i].Location;
                document.querySelector(".item-cards").append(div);
                j++;

                let fav = div.querySelector(".fav")
                fav.addEventListener("click", function (e) {
                    if (fav.classList.contains("mine")) {
                        fav.innerHTML = "";
                        fav.classList.remove("mine");
                        Allfav = Allfav.filter((id) => {
                            return id != fav.id;
                        })
                        fav.innerHTML = `<i class="far fa-heart"></i>`;
                    } else {
                        Allfav.push(fav.id);
                        fav.innerHTML = "";
                        fav.classList.add("mine");
                        fav.innerHTML = `<i class="fas fa-heart"></i>`;
                    }
                    // localStorage.setItem("Myfavs",JSON.stringify(Allfav));
                })
            }
        }
    }
    else {
        myid = 0;
        let j = 0;
        for (let i = 0; i < data.length; i++) {
            let div;
            if (Allfav[j] == i) {
                div = createTemplate(i, "yes");
                j++;
            } else {
                div = createTemplate();
            }
            div.querySelector(".imgic").src = data[i].Image;
            div.querySelector(".name").textContent = data[i]['Restaurant Name'];
            div.querySelector(".detail").textContent = data[i].Details;
            div.querySelector(".location").textContent = data[i].Location;
            let fav = div.querySelector(".fav")
            fav.addEventListener("click", function (e) {
                if (fav.classList.contains("mine")) {
                    fav.innerHTML = "";
                    fav.classList.remove("mine");
                    Allfav = Allfav.filter((id) => {
                        return id != fav.id;
                    })
                    fav.innerHTML = `<i class="far fa-heart"></i>`;
                    return;
                }
                Allfav.push(fav.id);
                fav.innerHTML = "";
                fav.classList.add("mine");
                fav.innerHTML = `<i class="fas fa-heart"></i>`;
            })

            document.querySelector(".item-cards").append(div);

        }
    }
}
init();

function createTemplate(id, signal) {
    let div = document.createElement("div");
    div.classList.add("modal");
    if (id || id == 0) {
        div.innerHTML = `
        <div class="img">
            <img src="" class="imgic" alt="">
            <div class="fav" id="${id}"> <i class="fas fa-heart"></i> </div>
        </div>
        <div class="details">
            <div class="de name"></div>
            <div class="de detail"></div>
            <div class="de location"></div>
        </div>
         `;
        if (signal == "yes") {
            myid++;
        }
    } else {
        div.setAttribute("id", myid);
        div.innerHTML = `
        <div class="img">
            <img src="" class="imgic" alt="">
            <div class="fav" id="${myid}"> <i class="far fa-heart"></i> </div>
        </div>
        <div class="details">
            <div class="de name"></div>
            <div class="de detail"></div>
            <div class="de location"></div>
        </div>
    `;
        myid++;
    }

    return div;
}
