document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".boxProjects");
    const headers = document.querySelectorAll(".searchBar");
    const leftSide = document.querySelectorAll(".left");
    const tecnologies = document.querySelectorAll(".tecnologies");
    const right = document.querySelectorAll(".right");
    const description = document.querySelectorAll(".description");

    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            // Remove a classe 'active' de todas as caixas
            boxes.forEach(otherBox => otherBox.classList.remove("active"));
            // Adiciona a classe 'active' apenas à caixa em que o mouse entrou
            box.classList.add("active");



            
            headers.forEach(header => header.classList.remove("headerEnable"));

            const activeHeader = box.querySelector(".searchBar");
            activeHeader.classList.add("headerEnable");



            leftSide.forEach(left => left.classList.remove("leftEnable"));

            const activeLeft = box.querySelector(".left");
            activeLeft.classList.add("leftEnable");


            
            tecnologies.forEach(tec => tec.classList.remove("tecActive"));

            const tecnologie = box.querySelector(".tecnologies");
            tecnologie.classList.add("tecActive");




            right.forEach(rightSide => rightSide.classList.remove("rightActive"));

            const direito = box.querySelector(".right");
            direito.classList.add("rightActive");

            description.forEach(desc => desc.innerHTML = "Lorem ipsum.");

            const desc = box.querySelector(".description");
            desc.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non neque voluptatibus dicta earum tempora. Atque ipsam modi aut consequuntur porro, laborum eaque optio, rem saepe sapiente placeat veniam magnam eius.";
        });
    });
});
