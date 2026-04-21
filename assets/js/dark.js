document.addEventListener("DOMContentLoaded", () => {
    let switcher = document.querySelector(".switcher__btn");

    switcher.addEventListener("click", () => {
        let head = document.head;
        let link = document.createElement("link");

        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./assets/css/dark.css";
        link.id = "theme-dark";

        const themeDark = document.querySelector("#theme-dark");

        if(themeDark){
            head.removeChild(themeDark);
        }
        else{
            head.appendChild(link);
        }

    })

})