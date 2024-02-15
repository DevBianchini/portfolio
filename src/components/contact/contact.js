const contact = () => {
    const contactInputs = document.querySelectorAll('input[type="text"], input[type="email"]');

    // Função para verificar o valor do input
    const checkInputValue = (input) => {
        if (input.value) {
            console.log("tests");
        }
    };

    // Adiciona os ouvintes de eventos para cada input
    contactInputs.forEach(input => {
        input.addEventListener('focus', () => {
            checkInputValue(input);
        });
    });
};

export default contact;


//   const spanActive = document.querySelectorAll(".placeholder");