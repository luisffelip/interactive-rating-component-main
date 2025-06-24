const params = new URLSearchParams(window.location.search);
const container = document.getElementById('nota');
// Pega os parâmetros chave e valor da URL. 
const nota = params.get('nota');

if (nota) {
    const prgph = document.createElement('p');
    prgph.id = 'rank';
    prgph.textContent = `Você selecionou ${nota} de 5`;

    container.appendChild(prgph);
};