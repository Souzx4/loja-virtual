const searchinput = document.getElementById('styk');

searchinput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);

    const itens = document.querySelectorAll('.itens .item');
    const noResults = document.getElementById('no_results');

    let hasResults = false;

    itens.forEach(item => {
        if(formatString(item.textContent).indexOf(value) !== -1) {
            item.style.display = "flex";

            hasResults = true;
        } else {
            item.style.display = "none";
        }
    });

    if (hasResults) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
    }
});

function formatString(value) {
    return value
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}