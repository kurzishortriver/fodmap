document.getElementById('searchInput').addEventListener('input', filterList);
document.getElementById('colorFilter').addEventListener('change', filterList);

function filterList() {
    let searchFilter = document.getElementById('searchInput').value.toLowerCase();
    let colorFilter = document.getElementById('colorFilter').value;
    let words = document.querySelectorAll('#wordList li');

    words.forEach(function(word) {
        let matchesSearch = word.textContent.toLowerCase().includes(searchFilter);
        let matchesColor = colorFilter === '' || word.classList.contains(colorFilter);

        // Zeige das Wort nur, wenn es sowohl den Suchfilter als auch den Farbfiler erfüllt
        if (matchesSearch && matchesColor) {
            word.classList.remove('hidden');
        } else if (colorFilter && !matchesSearch) {
            // Wenn eine Farbe ausgewählt wurde, zeige nur die entsprechenden Farben
            if (matchesColor) {
                word.classList.remove('hidden');
            } else {
                word.classList.add('hidden');
            }
        } else {
            word.classList.add('hidden');
        }
    });
}
