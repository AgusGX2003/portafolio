document.addEventListener("DOMContentLoaded", (event)=>{
    let mobileBtn = document.querySelector(".navbar__mobile--btn");
    let mobileMenu = document.querySelector(".menu__mobile");
    let menuMobileClose = document.querySelector(".menu-mobile__close");

    const showHiddenMenu = () => {
        let show = document.querySelector(".menu__mobile--show");
        if(show){
            mobileMenu.classList.remove("menu__mobile--show");

        } else{
            mobileMenu.classList.add("menu__mobile--show");
        }
    }

    mobileBtn.addEventListener("click", (showHiddenMenu));

    menuMobileClose.addEventListener("click", (showHiddenMenu));

    window.addEventListener("resize",() => {
        let windowWidth = parseInt(document.body.clientWidth);
    
        if(windowWidth >= 1000){
            mobileMenu.classList.remove("menu__mobile--show");
        }
    })

    // DESPLEJAR SUBMENUS

    let menuItem = document.querySelectorAll(".menu-mobile__item");

    menuItem.forEach(item => {
        item.addEventListener("click", (event) => {
            let subMenu = item.lastElementChild;
            console.log(subMenu);

            if(subMenu.className === "menu-mobile__submenu-mobile"){
                if(subMenu.style.display === "none"){
                    subMenu.style.display = "block";
                }else{
                    subMenu.style.display = "none";
                }
            }
        })
    })

})
