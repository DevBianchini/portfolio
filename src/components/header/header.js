const headerFunction = () => {
    let responsiveMenu = document.querySelector("#responsiveMenu");
    let hamburguer = document.querySelector("#hamburguer");
    let fisrtBar = document.querySelector("#first");
    let secondBar = document.querySelector("#second");

    hamburguer.addEventListener("click", () => {
        responsiveMenu.classList.toggle("responsiveMenuActive");
        fisrtBar.classList.toggle("hamburguerClickFirst");
        secondBar.classList.toggle("hamburguerClickSecond");
    });
};

export default headerFunction;