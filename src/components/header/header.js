let responsiveMenu = document.querySelector("#responsiveMenu");
let hamburguer = document.querySelector("#hamburguer");
let fisrtBar = document.querySelector("#first");
let secondBar = document.querySelector("#second");

hamburguer.addEventListener("click", () => {
    responsiveMenu.classList.toggle("responsiveMenuActive");
    fisrtBar.classList.toggle("hamburguerClickFirst");
    secondBar.classList.toggle("hamburguerClickSecond");
});

let menuItems = document.querySelectorAll(".menuSelect");
let bar = document.querySelector("#bottom");

// Mapeamento dos itens do menu para as classes de estilo correspondentes
let menuStyles = {
    'Projetos': 'twoActive',
    'Experiência': 'threeActive',
    'Contato': 'fourActive',
    'Outro': 'oneActive'
};

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        // Obtém o texto do item de menu clicado
        let menuItemText = item.innerHTML;

        // Remove todas as classes ativas do elemento bar
        bar.classList.remove('oneActive', 'twoActive', 'threeActive', 'fourActive');

        // Verifica se o item do menu está mapeado para um estilo
        if (menuStyles.hasOwnProperty(menuItemText)) {
            // Adiciona a classe correspondente ao item do menu clicado
            bar.classList.add(menuStyles[menuItemText]);
        }
    });
});

// Função para verificar a posição do scroll e executar ações
function handleScroll() {
    // Obtém a posição vertical do scroll
    let scrollPosition = window.scrollY;

    // Determina a altura da janela de visualização
    let windowHeight = window.innerHeight;

    // Define as alturas das seções que você deseja monitorar
    let section1Height = document.getElementById('aboutMe').offsetTop;
    let section2Height = document.getElementById('myProjects').offsetTop;
    let section3Height = document.getElementById('oQueJaFiz').offsetTop;
    let section4Height = document.getElementById('contato').offsetTop;

    // Define as classes ativas com base na posição do scroll
    if (scrollPosition < section2Height - (windowHeight / 2)) {
        bar.classList.add('oneActive');
        bar.classList.remove('twoActive', 'threeActive', 'fourActive');
    } else if (scrollPosition < section3Height - (windowHeight / 2)) {
        bar.classList.add('twoActive');
        bar.classList.remove('oneActive', 'threeActive', 'fourActive');
    } else if (scrollPosition < section4Height - (windowHeight / 2)) {
        bar.classList.add('threeActive');
        bar.classList.remove('oneActive', 'twoActive', 'fourActive');
    } else {
        bar.classList.add('fourActive');
        bar.classList.remove('oneActive', 'twoActive', 'threeActive');
    }
}

// Adiciona um listener de evento de scroll à janela
window.addEventListener('scroll', handleScroll);