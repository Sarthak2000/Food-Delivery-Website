//SIGN UP
let modal=document.querySelectorAll(".modal");
document.querySelector(".login.design").addEventListener("click", (e) => {

    for(let i=0;i<modal.length;i++){
        modal[i].classList.add("blur");
    }
    if (document.querySelector(".Use")) {
        return;
    }
    let div = document.createElement("div");
    div.classList.add("Use");
    div.innerHTML = `<div class="head ep">
                    SIGN - IN
                        </div>
                        <div class=" user ep" contenteditable="true" data-typed="false">
                    Username
                        </div>
                <div class="emailenter ep" contenteditable="true" data-typed="false">
                    Email
                        </div>
                <div class="passwordenter ep" contenteditable="true" data-typed="false">
                    Password
                        </div>
                <button class="btn">Submit</button>`
    itemcards.append(div);

    let emaildiv = div.querySelector(".emailenter");
    emaildiv.addEventListener("click", (e) => {
        if (emaildiv.getAttribute("data-typed") == "false") {
            emaildiv.textContent = "";
        }
        emaildiv.setAttribute("data-typed", "true");

    })
    let passdiv = div.querySelector(".passwordenter");
    passdiv.addEventListener("click", (e) => {
        if (passdiv.getAttribute("data-typed") == "false") {
            passdiv.textContent = "";
        }
        passdiv.setAttribute("data-typed", "true");

    })
    let username=document.querySelector(".user");
    username.addEventListener("click", (e) => {
        if (username.getAttribute("data-typed") == "false") {
            username.textContent = "";
        }
        username.setAttribute("data-typed", "true");

    })
    let but = div.querySelector(".btn");
    but.addEventListener("click", (e) => {
        let em = emaildiv.textContent;
        let pas = passdiv.textContent;
        let usernam=username.textContent; 
        if (emaildiv.getAttribute("data-typed") == "false" || username.getAttribute("data-typed") == "false" || passdiv.getAttribute("data-typed") == "false" || pas == "" || em == "" || usernam=="") {
            alert("Enter Valid Credentials");
            return;
        }
        let obj = { "Username" : usernam ,"Email": em, "Password": pas };
        let cred = JSON.parse(localStorage.getItem("credentials"));
        for (let i = 0; i < cred.length; i++) {
            if (cred[i].Email == em) {
                alert("Enter Unique Email")
                flag = true;
                return;
            }
        }
        cred.push(obj);
        localStorage.setItem("credentials", JSON.stringify(cred));
        for(let i=0;i<modal.length;i++){
            modal[i].classList.remove("blur");
        }
        div.remove();
    })
})

// LOGIN

document.querySelector(".signin.design").addEventListener("click", (e) => {

    for(let i=0;i<modal.length;i++){
        modal[i].classList.add("blur");
    }
    if (document.querySelector(".Use")) {
        return;
    }
    let div = document.createElement("div");
    div.classList.add("Use");
    div.innerHTML = `<div class="head ep">
                    LOG - IN
                        </div>
                <div class="emailenter ep" contenteditable="true" data-typed="false">
                    Email
                        </div>
                <div class="passwordenter ep" contenteditable="true" data-typed="false">
                    Password
                        </div>
                <button class="btn">Submit</button>`
    itemcards.append(div);

    let emaildiv = div.querySelector(".emailenter");
    emaildiv.addEventListener("click", (e) => {
        if (emaildiv.getAttribute("data-typed") == "false") {
            emaildiv.textContent = "";
        }
        emaildiv.setAttribute("data-typed", "true");

    })
    let passdiv = div.querySelector(".passwordenter");
    passdiv.addEventListener("click", (e) => {
        if (passdiv.getAttribute("data-typed") == "false") {
            passdiv.textContent = "";
        }
        passdiv.setAttribute("data-typed", "true");

    })

    let but = div.querySelector(".btn");
    but.addEventListener("click", (e) => {
        let em = emaildiv.textContent;
        let pas = passdiv.textContent;
        if (emaildiv.getAttribute("data-typed") == "false" || passdiv.getAttribute("data-typed") == "false" || pas == "" || em == "") {
            alert("Enter Valid Credentials");
            return;
        }
        let cred = JSON.parse(localStorage.getItem("credentials"));
        let flag=false;
        for (let i = 0; i < cred.length; i++) {
            if (cred[i].Email == em && cred[i].Password==pas) {
                flag=true;
                document.querySelector(".log-cart").innerHTML="";
                document.querySelector(".log-cart").textContent=`Hello ${cred[i].Username}!`;
            }
        }
        if(!flag){
            alert("Enter Valid Credentials");
            return;
        }
        for(let i=0;i<modal.length;i++){
            modal[i].classList.remove("blur");
        }
        div.remove();
    })
})
// .