const contactInputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
const labels = document.querySelectorAll('label');

/*labels.forEach(label => {
    const spans = label.querySelectorAll('span');
    spans.forEach(span => {
        console.log(span.innerHTML)
    })
});*/

contactInputs.forEach(input => {
    input.addEventListener('input', () => { // Adiciona um ouvinte de evento de entrada
        const label = input.parentElement; // Obtém o elemento pai (o rótulo) do input
        const span = label.querySelector('span'); // Obtém o span dentro do rótulo

        if (input.value.trim() !== '') { // Verifica se o valor do input não está vazio
            span.classList.add('spanActive'); // Adiciona a classe 'ativo' ao span
        } else {
            span.classList.remove('spanActive'); // Remove a classe 'ativo' do span
        }
    });
});
