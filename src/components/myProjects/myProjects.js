const myProjects = () => {
    const boxes = document.querySelectorAll(".boxProjects");
    const headers = document.querySelectorAll(".searchBar");
    const leftSide = document.querySelectorAll(".left");
    const tecnologies = document.querySelectorAll(".tecnologies");
    const right = document.querySelectorAll(".right");
    const description = document.querySelectorAll(".description");
    
    
    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {

            boxes.forEach(otherBox => otherBox.classList.remove("active"));
            box.classList.add("active");
    
            classToggle(headers, "headerEnable", ".searchBar");
            classToggle(leftSide, "leftEnable", ".left");  
            classToggle(tecnologies, "tecActive", ".tecnologies");
            classToggle(right, "rightActive", ".right");   


            description.forEach(desc => desc.innerHTML = "Lorem ipsum.");
            const desc = box.querySelector(".description");
            desc.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non neque voluptatibus dicta earum tempora. Atque ipsam modi aut consequuntur porro, laborum eaque optio, rem saepe sapiente placeat veniam magnam eius.";

            function classToggle(variable, classActive, indexParent) {
                // remove all active classes in every element
                variable.forEach(vary => vary.classList.remove(classActive));

                // add classActive only in active element
                const temporaryVariable = box.querySelector(indexParent);
                temporaryVariable.classList.add(classActive);
            }
        });
    });
}

export default myProjects;