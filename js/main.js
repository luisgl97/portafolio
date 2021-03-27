/**
 About section tabs
 */

(() => {
    const aboutSection = document.querySelector(".about-section"),
        tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        /*si event.target contiene la clase 'tab-item' y no contiene la clase 'active' */

        if (event.target.classList.contains("tab-item") && !event.target.classList.contains("active")) {
            const target = event.target.getAttribute("data-target");

            /*desactivar el 'elemento de pestaña' activo existente */
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");

            /*activar nueva 'tab-item' */
            event.target.classList.add("active", "outer-shadow");

            /*desactivar el 'tab-content' activo existente */
            aboutSection.querySelector(".tab-content.active").classList.remove("active");

            /*activar nuevo 'tab-content */
            aboutSection.querySelector(target).classList.add("active");

        }
    })
})();