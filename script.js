const form = document.getElementById('form-rate')

form.addEventListener('submit', function(e){
    const rankSelected = document.querySelector('input[name="nota"]:checked');

    if (!rankSelected){
        e.preventDefault();
        alert('Por favor, selecione uma nota');
    };

    // const paragraph = document.createElement('p');
    // paragraph.id = 'rank';
    // paragraph.textContent = `Você selecionou ${rankSelected} de 5.`
});

